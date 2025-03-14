<template>
  <div class="border border-neutral-200 rounded-lg shadow-sm">
    <div class="bg-neutral-50 px-4 py-3 border-b border-neutral-200">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold text-secondary">{{ title }}</h3>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="text-sm text-neutral-600">Filter:</span>
            <select v-model="activeFilter"
              class="text-sm rounded-md border-neutral-300 py-1 pl-2 pr-8 focus:border-primary focus:ring-primary">
              <option value="all">Alla</option>
              <option value="A">Nivå A</option>
              <option value="AA">Nivå AA</option>
              <option value="AAA">Nivå AAA</option>
            </select>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-sm text-neutral-600">Visa:</span>
            <select v-model="showCompleted"
              class="text-sm rounded-md border-neutral-300 py-1 pl-2 pr-8 focus:border-primary focus:ring-primary">
              <option :value="true">Alla checkpunkter</option>
              <option :value="false">Endast ej uppfyllda</option>
            </select>
          </div>
        </div>
      </div>
      <p v-if="description" class="mt-1 text-sm text-neutral-600">{{ description }}</p>
    </div>

    <div class="divide-y divide-neutral-200">
      <div v-for="(category, categoryIndex) in filteredCategories" :key="categoryIndex" class="px-4 py-4">
        <div class="flex items-center mb-3">
          <h4 class="text-md font-medium">{{ category.name }}</h4>
          <span class="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600">
            {{ completedInCategory(category) }} / {{ category.items.length }}
          </span>
        </div>

        <ul class="space-y-2">
          <li v-for="(item, itemIndex) in category.items" :key="`${categoryIndex}-${itemIndex}`"
            v-show="showCompleted || !item.completed" class="flex items-start gap-3 py-1 px-2 rounded-md"
            :class="{ 'bg-green-50': item.completed }">
            <div class="flex-shrink-0 pt-0.5">
              <input :id="`check-${categoryIndex}-${itemIndex}`" v-model="item.completed" type="checkbox"
                class="h-5 w-5 text-primary focus:ring-primary rounded border-neutral-300" />
            </div>
            <div class="flex-grow">
              <label :for="`check-${categoryIndex}-${itemIndex}`" class="block font-medium"
                :class="{ 'line-through text-neutral-500': item.completed, 'text-secondary': !item.completed }">
                {{ item.text }}

                <span v-if="item.level" class="ml-2 px-1.5 py-0.5 rounded text-xs font-medium"
                  :class="getLevelClass(item.level)">
                  {{ item.level }}
                </span>
              </label>

              <div v-if="item.description" class="mt-1 text-sm text-neutral-600">
                {{ item.description }}
              </div>

              <div v-if="item.criteria" class="mt-2 text-xs text-neutral-500">
                <a :href="item.criteriaLink || `https://www.w3.org/WAI/WCAG22/Understanding/${item.criteria}`"
                  target="_blank" rel="noopener" class="hover:underline inline-flex items-center">
                  Kriterium: {{ item.criteria }}
                  <svg class="h-3 w-3 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z">
                    </path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-neutral-50 px-4 py-3 border-t border-neutral-200">
      <div class="flex items-center justify-between">
        <div class="text-sm text-neutral-700">
          Totalt: {{ totalCompleted }} av {{ totalItems }} checkpunkter uppfyllda
        </div>
        <div class="w-32 h-2 bg-neutral-200 rounded-full overflow-hidden">
          <div class="h-full bg-primary rounded-full" :style="{ width: `${completionPercentage}%` }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Tillgänglighetschecklista'
  },
  description: {
    type: String,
    default: ''
  },
  categories: {
    type: Array,
    required: true
  },
  saveKey: {
    type: String,
    default: 'a11y-checklist'
  }
})

// UI state
const activeFilter = ref('all')
const showCompleted = ref(true)

// Create a deep clone of the categories to track completion state
const checklistData = ref(JSON.parse(JSON.stringify(props.categories)))

// Load saved state from localStorage if available
onMounted(() => {
  if (process.client) {
    const savedData = localStorage.getItem(props.saveKey)
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)

        // Merge saved completion status with current checklist
        checklistData.value.forEach((category, catIndex) => {
          category.items.forEach((item, itemIndex) => {
            const savedCategory = parsedData.find(c => c.name === category.name)
            if (savedCategory && savedCategory.items[itemIndex]) {
              item.completed = savedCategory.items[itemIndex].completed
            }
          })
        })
      } catch (e) {
        console.error('Error loading checklist data:', e)
      }
    }
  }
})

// Save state to localStorage when it changes
watch(checklistData, (newValue) => {
  if (process.client) {
    localStorage.setItem(props.saveKey, JSON.stringify(newValue))
  }
}, { deep: true })

// Filter categories and items based on the active filter
const filteredCategories = computed(() => {
  if (activeFilter.value === 'all') {
    return checklistData.value
  }

  return checklistData.value.map(category => {
    return {
      ...category,
      items: category.items.filter(item => item.level === activeFilter.value)
    }
  }).filter(category => category.items.length > 0)
})

// Calculate completion statistics
const totalItems = computed(() => {
  return checklistData.value.reduce((sum, category) => sum + category.items.length, 0)
})

const totalCompleted = computed(() => {
  return checklistData.value.reduce((sum, category) => {
    return sum + category.items.filter(item => item.completed).length
  }, 0)
})

const completionPercentage = computed(() => {
  if (totalItems.value === 0) return 0
  return Math.round((totalCompleted.value / totalItems.value) * 100)
})

// Helper function to count completed items in a category
const completedInCategory = (category) => {
  return category.items.filter(item => item.completed).length
}

// Helper function to get CSS class for WCAG level badge
const getLevelClass = (level) => {
  const classes = {
    'A': 'bg-red-100 text-red-800',
    'AA': 'bg-amber-100 text-amber-800',
    'AAA': 'bg-green-100 text-green-800'
  }

  return classes[level] || 'bg-neutral-100 text-neutral-800'
}
</script>