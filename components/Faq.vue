<template>
  <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
    <div class="px-6 py-4 bg-neutral-50 border-b border-neutral-200">
      <h2 class="text-lg font-semibold text-secondary">{{ title }}</h2>
      <p v-if="description" class="mt-1 text-sm text-neutral-600">{{ description }}</p>
    </div>

    <div class="divide-y divide-neutral-200">
      <div v-for="(item, index) in faqs" :key="index" class="px-6 py-4">
        <button :id="`faq-question-${index}`" class="flex w-full justify-between items-start text-left"
          :aria-expanded="openItems.includes(index)" :aria-controls="`faq-answer-${index}`" @click="toggleItem(index)">
          <span class="text-base font-medium text-secondary">{{ item.question }}</span>
          <span class="ml-6 flex-shrink-0">
            <svg class="h-5 w-5 text-neutral-500 transition-transform"
              :class="{ 'transform rotate-180': openItems.includes(index) }" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
        </button>

        <div :id="`faq-answer-${index}`" v-show="openItems.includes(index)" class="mt-3 prose prose-sm max-w-none"
          role="region" :aria-labelledby="`faq-question-${index}`">
          <div v-if="typeof item.answer === 'string'" v-html="item.answer"></div>
          <slot v-else :name="`answer-${index}`"></slot>
        </div>
      </div>
    </div>

    <!-- Show all / Hide all buttons (optional) -->
    <div v-if="showControls" class="px-6 py-3 bg-neutral-50 border-t border-neutral-200 flex justify-end">
      <button v-if="openItems.length < faqs.length" @click="expandAll"
        class="text-sm text-primary hover:underline mr-4">
        Visa alla
      </button>
      <button v-if="openItems.length > 0" @click="collapseAll" class="text-sm text-primary hover:underline">
        Dölj alla
      </button>
    </div>

    <!-- Add structured data for SEO -->
    <StructuredData type="FAQPage" :data="{
      questions: structuredFaqs
    }" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import StructuredData from './StructuredData.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Vanliga frågor'
  },
  description: {
    type: String,
    default: ''
  },
  faqs: {
    type: Array,
    required: true
  },
  initialOpenIndex: {
    type: Number,
    default: -1
  },
  showControls: {
    type: Boolean,
    default: false
  }
})

// Track which FAQ items are open
const openItems = ref([])

// Initialize with the initialOpenIndex if provided
onMounted(() => {
  if (props.initialOpenIndex >= 0 && props.initialOpenIndex < props.faqs.length) {
    openItems.value.push(props.initialOpenIndex)
  }
})

// Toggle a FAQ item open/closed
const toggleItem = (index) => {
  const isOpen = openItems.value.includes(index)
  if (isOpen) {
    openItems.value = openItems.value.filter(i => i !== index)
  } else {
    openItems.value.push(index)
  }
}

// Expand all FAQ items
const expandAll = () => {
  openItems.value = Array.from({ length: props.faqs.length }, (_, i) => i)
}

// Collapse all FAQ items
const collapseAll = () => {
  openItems.value = []
}

// Format the FAQ data for structured data
const structuredFaqs = computed(() => {
  return props.faqs.map(faq => {
    let answer = faq.answer

    // If the answer is an HTML string, strip the HTML tags for structured data
    if (typeof answer === 'string') {
      answer = answer.replace(/<[^>]*>/g, ' ')
    } else {
      // If it's not a string (e.g., using slots), use a fallback
      answer = 'Se svaret på vår webbplats.'
    }

    return {
      question: faq.question,
      answer
    }
  })
})
</script>