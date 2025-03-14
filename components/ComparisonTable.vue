<template>
  <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
    <div class="px-6 py-4 bg-neutral-50 border-b border-neutral-200">
      <h3 class="text-lg font-semibold text-secondary">{{ title }}</h3>
      <p v-if="description" class="mt-1 text-sm text-neutral-600">{{ description }}</p>
    </div>
    
    <!-- Search and filter controls -->
    <div v-if="showControls" class="px-6 py-3 border-b border-neutral-200">
      <div class="flex flex-wrap gap-4 items-center">
        <!-- Search -->
        <div class="w-full sm:w-auto flex-grow">
          <label for="comparison-search" class="sr-only">Sök</label>
          <div class="relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="search"
              id="comparison-search"
              v-model="searchQuery"
              class="block w-full pl-10 rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Sök i tabellen..."
            />
          </div>
        </div>
        
        <!-- Category filter (if categories exist) -->
        <div v-if="categories && categories.length > 0">
          <label for="category-filter" class="text-sm text-neutral-600 mr-2">Kategori:</label>
          <select
            id="category-filter"
            v-model="selectedCategory"
            class="rounded-md border-neutral-300 py-1 pl-2 pr-8 focus:border-primary focus:ring-primary"
          >
            <option value="all">Alla kategorier</option>
            <option v-for="category in categories" :key="category.value" :value="category.value">
              {{ category.label }}
            </option>
          </select>
        </div>
        
        <!-- View type toggle -->
        <div v-if="allowViewToggle" class="ml-auto">
          <div class="flex rounded-md shadow-sm">
            <button
              @click="viewType = 'table'"
              class="px-3 py-1 text-sm font-medium rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              :class="viewType === 'table' ? 'bg-primary text-white' : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-300'"
              title="Tabellvy"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </button>
            <button
              @click="viewType = 'cards'"
              class="px-3 py-1 text-sm font-medium rounded-r-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              :class="viewType === 'cards' ? 'bg-primary text-white' : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-300 border-l-0'"
              title="Kortvy"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Table view -->
    <div v-if="viewType === 'table'" class="overflow-x-auto">
      <table class="min-w-full divide-y divide-neutral-200">
        <thead class="bg-neutral-50">
          <tr>
            <!-- Feature column header -->
            <th 
              scope="col" 
              class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider sticky left-0 bg-neutral-50 border-b border-neutral-200"
              :class="{ 'border-r border-neutral-200': stickyFirstColumn }"
            >
              {{ featureColumnName || 'Funktion' }}
            </th>
            
            <!-- Item column headers -->
            <th 
              v-for="(item, index) in items" 
              :key="`header-${index}`"
              scope="col" 
              class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider border-b border-neutral-200"
            >
              <div class="flex items-center">
                <img 
                  v-if="item.logo" 
                  :src="item.logo" 
                  :alt="`${item.name} logo`" 
                  class="h-6 w-6 mr-2 object-contain" 
                />
                {{ item.name }}
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-neutral-200">
          <tr 
            v-for="(feature, featureIndex) in filteredFeatures" 
            :key="`feature-${featureIndex}`"
            :class="{ 'bg-neutral-50': featureIndex % 2 === 0 }"
          >
            <!-- Feature name and description -->
            <th 
              scope="row" 
              class="px-6 py-4 text-sm font-medium text-secondary sticky left-0 bg-inherit"
              :class="{ 'border-r border-neutral-200': stickyFirstColumn }"
            >
              <div>
                <div class="font-medium">{{ feature.name }}</div>
                <div v-if="feature.description" class="text-xs text-neutral-500 mt-1">
                  {{ feature.description }}
                </div>
                <div v-if="feature.category" class="mt-2">
                  <span 
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    :class="getCategoryClass(feature.category)"
                  >
                    {{ getCategoryLabel(feature.category) }}
                  </span>
                </div>
              </div>
            </th>
            
            <!-- Feature comparison cells -->
            <td 
              v-for="(item, itemIndex) in items" 
              :key="`cell-${featureIndex}-${itemIndex}`"
              class="px-6 py-4 text-sm text-neutral-800"
            >
              <!-- Render different formats of comparison data -->
              <template v-if="getComparison(feature, item)">
                <div v-if="typeof getComparison(feature, item) === 'boolean'">
                  <svg 
                    v-if="getComparison(feature, item) === true" 
                    class="h-5 w-5 text-green-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <svg 
                    v-else
                    class="h-5 w-5 text-red-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                
                <div v-else-if="getComparison(feature, item).rating !== undefined" class="flex items-center">
                  <div class="flex items-center">
                    <div class="flex">
                      <svg 
                        v-for="i in 5" 
                        :key="i"
                        class="h-4 w-4"
                        :class="i <= getComparison(feature, item).rating ? 'text-amber-400' : 'text-neutral-300'"
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <span v-if="getComparison(feature, item).note" class="ml-2 text-xs text-neutral-500">
                      {{ getComparison(feature, item).note }}
                    </span>
                  </div>
                </div>
                
                <div v-else-if="getComparison(feature, item).text !== undefined">
                  {{ getComparison(feature, item).text }}
                  <div v-if="getComparison(feature, item).note" class="text-xs text-neutral-500 mt-1">
                    {{ getComparison(feature, item).note }}
                  </div>
                </div>
                
                <div v-else>{{ getComparison(feature, item) }}</div>
              </template>
              <div v-else class="text-neutral-400">-</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- Card view -->
    <div v-else class="px-6 py-4">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="(item, index) in items" 
          :key="`card-${index}`"
          class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow"
        >
          <!-- Card header with item info -->
          <div class="px-4 py-3 bg-neutral-50 border-b border-neutral-200">
            <div class="flex items-center">
              <img 
                v-if="item.logo" 
                :src="item.logo" 
                :alt="`${item.name} logo`" 
                class="h-8 w-8 mr-3 object-contain" 
              />
              <div>
                <h4 class="text-lg font-medium text-secondary">{{ item.name }}</h4>
                <div v-if="item.description" class="text-sm text-neutral-600 mt-1">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </div>
          
          <!-- Card body with feature comparisons -->
          <div class="p-4">
            <ul class="divide-y divide-neutral-200">
              <li 
                v-for="(feature, featureIndex) in filteredFeatures" 
                :key="`card-feature-${index}-${featureIndex}`"
                class="py-3 first:pt-0 last:pb-0"
              >
                <div class="flex justify-between">
                  <div>
                    <div class="font-medium text-secondary">{{ feature.name }}</div>
                    <div v-if="feature.description" class="text-xs text-neutral-500 mt-1">
                      {{ feature.description }}
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <!-- Render different formats of comparison data -->
                    <template v-if="getComparison(feature, item)">
                      <div v-if="typeof getComparison(feature, item) === 'boolean'">
                        <svg 
                          v-if="getComparison(feature, item) === true" 
                          class="h-5 w-5 text-green-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <svg 
                          v-else
                          class="h-5 w-5 text-red-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </div>
                      
                      <div v-else-if="getComparison(feature, item).rating !== undefined" class="flex items-center">
                        <div class="flex">
                          <svg 
                            v-for="i in 5" 
                            :key="i"
                            class="h-4 w-4"
                            :class="i <= getComparison(feature, item).rating ? 'text-amber-400' : 'text-neutral-300'"
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                      </div>
                      
                      <div v-else-if="getComparison(feature, item).text !== undefined">
                        {{ getComparison(feature, item).text }}
                      </div>
                      
                      <div v-else>{{ getComparison(feature, item) }}</div>
                    </template>
                    <div v-else class="text-neutral-400">-</div>
                  </div>
                </div>
                <div 
                  v-if="getComparison(feature, item) && getComparison(feature, item).note" 
                  class="text-xs text-neutral-500 mt-1"
                >
                  {{ getComparison(feature, item).note }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Empty state -->
    <div v-if="filteredFeatures.length === 0" class="py-12 text-center text-neutral-500">
      <svg class="mx-auto h-12 w-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <h3 class="mt-2 text-sm font-medium text-neutral-500">Inga funktioner hittades</h3>
      <p class="mt-1 text-sm text-neutral-500">Prova att söka efter något annat eller ändra kategorifilter.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  // Items to compare (e.g., products, tools, etc.)
  items: {
    type: Array,
    required: true
  },
  // Features to compare across items
  features: {
    type: Array,
    required: true
  },
  // Comparison data - can be array of objects or object with item IDs as keys
  comparisons: {
    type: [Array, Object],
    required: true
  },
  // Optional feature categories
  categories: {
    type: Array,
    default: () => []
  },
  // Name for the feature column
  featureColumnName: {
    type: String,
    default: 'Funktion'
  },
  // Make first column sticky for horizontal scrolling
  stickyFirstColumn: {
    type: Boolean,
    default: true
  },
  // Allow toggling between table and card view
  allowViewToggle: {
    type: Boolean,
    default: true
  },
  // Show search and filter controls
  showControls: {
    type: Boolean,
    default: true
  }
})

// UI state
const viewType = ref('table')
const searchQuery = ref('')
const selectedCategory = ref('all')

// Filter features based on search and category
const filteredFeatures = computed(() => {
  return props.features.filter(feature => {
    // Filter by category
    if (selectedCategory.value !== 'all' && feature.category !== selectedCategory.value) {
      return false
    }
    
    // Filter by search query
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      return (
        (feature.name && feature.name.toLowerCase().includes(query)) ||
        (feature.description && feature.description.toLowerCase().includes(query))
      )
    }
    
    return true
  })
})

// Helper function to get category label
const getCategoryLabel = (categoryValue) => {
  const category = props.categories.find(cat => cat.value === categoryValue)
  return category ? category.label : categoryValue
}

// Helper function to get category class
const getCategoryClass = (categoryValue) => {
  const categoryClasses = {
    'basic': 'bg-blue-100 text-blue-800',
    'advanced': 'bg-purple-100 text-purple-800',
    'performance': 'bg-green-100 text-green-800',
    'compatibility': 'bg-amber-100 text-amber-800',
    'accessibility': 'bg-red-100 text-red-800',
    'security': 'bg-indigo-100 text-indigo-800'
  }
  
  // Try to find the category in the provided categories prop
  const category = props.categories.find(cat => cat.value === categoryValue)
  if (category && category.color) {
    return category.color
  }
  
  return categoryClasses[categoryValue] || 'bg-neutral-100 text-neutral-800'
}

// Helper function to get comparison data for a feature and item
const getComparison = (feature, item) => {
  // Different ways the comparison data might be structured
  if (Array.isArray(props.comparisons)) {
    // If comparisons is an array of objects with feature and item properties
    const comparison = props.comparisons.find(
      c => c.featureId === feature.id && c.itemId === item.id
    )
    return comparison ? comparison.value : null
  } else {
    // If comparisons is an object with nested structure
    // e.g. { itemId1: { featureId1: value1, featureId2: value2 }, itemId2: {...} }
    return props.comparisons[item.id]?.[feature.id] || null
  }
}
</script>