<template>
  <div class="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden mb-6">
    <!-- Header section -->
    <div class="px-6 py-4 bg-neutral-50 border-b border-neutral-200">
      <h3 class="text-lg font-medium text-secondary">{{ title }}</h3>
      <p v-if="description" class="mt-1 text-sm text-neutral-600">{{ description }}</p>
    </div>
    
    <!-- Tabs for code examples -->
    <div v-if="examples.length > 1" class="px-6 py-3 bg-white border-b border-neutral-200">
      <div class="flex overflow-x-auto">
        <div class="flex space-x-4">
          <button
            v-for="(example, index) in examples"
            :key="index"
            @click="activeTabIndex = index"
            class="px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
            :class="activeTabIndex === index ? 'bg-primary-light text-primary' : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'"
            :aria-selected="activeTabIndex === index"
            role="tab"
          >
            {{ example.label }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Main content section -->
    <div class="p-6">
      <div v-for="(example, index) in examples" :key="index" v-show="activeTabIndex === index">
        <!-- Before/after examples -->
        <div v-if="example.before && example.after" class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- "Before" code -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-sm font-medium text-red-600">
                <span class="flex items-center">
                  <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Bristande tillgänglighet
                </span>
              </h4>
              <button 
                @click="copyCode(example.before)"
                class="text-xs text-primary hover:text-primary-hover focus:outline-none focus:underline"
              >
                {{ copied === 'before-' + index ? 'Kopierad!' : 'Kopiera kod' }}
              </button>
            </div>
            <div class="relative">
              <pre class="language-html rounded-md p-4 text-sm bg-neutral-50 overflow-x-auto"><code>{{ example.before }}</code></pre>
            </div>
          </div>
          
          <!-- "After" code -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-sm font-medium text-green-600">
                <span class="flex items-center">
                  <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Tillgänglig implementation
                </span>
              </h4>
              <button 
                @click="copyCode(example.after)"
                class="text-xs text-primary hover:text-primary-hover focus:outline-none focus:underline"
              >
                {{ copied === 'after-' + index ? 'Kopierad!' : 'Kopiera kod' }}
              </button>
            </div>
            <div class="relative">
              <pre class="language-html rounded-md p-4 text-sm bg-neutral-50 overflow-x-auto"><code>{{ example.after }}</code></pre>
            </div>
          </div>
        </div>
        
        <!-- Single code example -->
        <div v-else-if="example.code">
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-sm font-medium text-neutral-700">
              <span v-if="example.type === 'good'" class="flex items-center text-green-600">
                <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Tillgänglig implementation
              </span>
              <span v-else-if="example.type === 'bad'" class="flex items-center text-red-600">
                <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Bristande tillgänglighet
              </span>
              <span v-else>Kodexempel</span>
            </h4>
            <button 
              @click="copyCode(example.code)"
              class="text-xs text-primary hover:text-primary-hover focus:outline-none focus:underline"
            >
              {{ copied === 'code-' + index ? 'Kopierad!' : 'Kopiera kod' }}
            </button>
          </div>
          <div class="relative">
            <pre class="language-html rounded-md p-4 text-sm bg-neutral-50 overflow-x-auto"><code>{{ example.code }}</code></pre>
          </div>
        </div>
        
        <!-- Live preview (if enabled) -->
        <div v-if="showPreview && (example.after || example.code)" class="mt-6">
          <h4 class="text-sm font-medium text-neutral-700 mb-2">Förhandsgranskning</h4>
          <div class="border border-neutral-200 rounded-md p-4 bg-white">
            <div ref="previewContainer" class="preview-container"></div>
          </div>
        </div>
        
        <!-- Explanation -->
        <div v-if="example.explanation" class="mt-6">
          <h4 class="text-sm font-medium text-neutral-700 mb-2">Förklaring</h4>
          <div class="prose prose-sm max-w-none">
            <p>{{ example.explanation }}</p>
          </div>
        </div>
        
        <!-- WCAG reference -->
        <div v-if="example.wcagReference" class="mt-6">
          <h4 class="text-sm font-medium text-neutral-700 mb-2">WCAG-referens</h4>
          <div class="flex flex-wrap gap-2">
            <a 
              v-for="(ref, refIndex) in formatWcagReferences(example.wcagReference)" 
              :key="refIndex"
              :href="getWcagUrl(ref)"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm text-primary hover:underline px-3 py-1 bg-primary-light rounded-full"
            >
              {{ ref }}
              <svg class="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Additional resources -->
        <div v-if="example.resources && example.resources.length > 0" class="mt-6">
          <h4 class="text-sm font-medium text-neutral-700 mb-2">Resurser</h4>
          <ul class="space-y-1">
            <li v-for="(resource, resourceIndex) in example.resources" :key="resourceIndex">
              <a 
                :href="resource.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-primary hover:underline inline-flex items-center"
              >
                {{ resource.title }}
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  examples: {
    type: Array,
    required: true
    // Each example can have:
    // { label, before, after, code, type, explanation, wcagReference, resources }
  },
  showPreview: {
    type: Boolean,
    default: true
  }
})

// Active tab state
const activeTabIndex = ref(0)
const copied = ref(null)
const previewContainer = ref(null)

// Copy code to clipboard
const copyCode = (code) => {
  // In this implementation, we're just setting a state to show a confirmation
  // In a real app, you'd use the Clipboard API to copy the code
  const copyId = code === props.examples[activeTabIndex.value].before
    ? 'before-' + activeTabIndex.value
    : code === props.examples[activeTabIndex.value].after
      ? 'after-' + activeTabIndex.value
      : 'code-' + activeTabIndex.value
      
  // Copy to clipboard
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code)
      .then(() => {
        copied.value = copyId
        setTimeout(() => {
          copied.value = null
        }, 2000)
      })
      .catch(err => {
        console.error('Could not copy text: ', err)
      })
  }
}

// Format WCAG references into an array
const formatWcagReferences = (refs) => {
  if (!refs) return []
  
  // If it's already an array, return it
  if (Array.isArray(refs)) {
    return refs
  }
  
  // If it's a string, split it by commas
  return refs.split(',').map(ref => ref.trim())
}

// Get WCAG URL from reference
const getWcagUrl = (ref) => {
  // Clean up the reference to get just the number
  const cleanRef = ref.replace(/\s/g, '')
  return `https://www.w3.org/WAI/WCAG22/Understanding/${cleanRef}`
}

// Update preview when tab changes
const updatePreview = () => {
  if (!previewContainer.value || !props.showPreview) return
  
  // Get the code to display
  const example = props.examples[activeTabIndex.value]
  const code = example.after || example.code
  
  if (code) {
    previewContainer.value.innerHTML = code
  }
}

// Update preview when mounted and when active tab changes
onMounted(() => {
  updatePreview()
})

watch(activeTabIndex, () => {
  updatePreview()
})
</script>

<style scoped>
.preview-container :deep(button),
.preview-container :deep(a),
.preview-container :deep(input),
.preview-container :deep(select),
.preview-container :deep(textarea) {
  pointer-events: none;
}
</style>