<template>
  <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
    <div class="px-6 py-4 bg-neutral-50 border-b border-neutral-200">
      <h3 class="text-lg font-semibold text-secondary">{{ title }}</h3>
      <p v-if="description" class="mt-1 text-sm text-neutral-600">{{ description }}</p>
    </div>
    
    <!-- Filters and controls -->
    <div v-if="showControls" class="px-6 py-3 border-b border-neutral-200 flex flex-wrap gap-4 items-center">
      <!-- Category filter -->
      <div v-if="categories.length > 0" class="flex items-center">
        <label for="category-filter" class="text-sm text-neutral-600 mr-2">Kategori:</label>
        <select
          id="category-filter"
          v-model="activeFilter"
          class="text-sm rounded-md border-neutral-300 py-1 pl-2 pr-8 focus:border-primary focus:ring-primary"
        >
          <option value="all">Alla</option>
          <option v-for="category in categories" :key="category.value" :value="category.value">
            {{ category.label }}
          </option>
        </select>
      </div>
      
      <!-- Time range selector -->
      <div class="flex items-center">
        <label for="range-input" class="text-sm text-neutral-600 mr-2">Tidsintervall:</label>
        <div class="flex items-center space-x-2">
          <input 
            type="number" 
            id="range-input-min" 
            v-model.number="timeRange.min"
            min="1980" 
            max="2030"
            class="w-20 text-sm rounded-md border-neutral-300 py-1 px-2 focus:border-primary focus:ring-primary"
          />
          <span class="text-neutral-600">-</span>
          <input 
            type="number" 
            id="range-input-max" 
            v-model.number="timeRange.max"
            min="1980" 
            max="2030"
            class="w-20 text-sm rounded-md border-neutral-300 py-1 px-2 focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
      
      <!-- View mode toggle -->
      <div class="ml-auto flex items-center">
        <span class="text-sm text-neutral-600 mr-2">Visa som:</span>
        <div class="flex rounded-md shadow-sm">
          <button
            @click="viewMode = 'timeline'"
            class="px-3 py-1 text-sm font-medium rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            :class="viewMode === 'timeline' ? 'bg-primary text-white' : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-300'"
          >
            Tidslinje
          </button>
          <button
            @click="viewMode = 'list'"
            class="px-3 py-1 text-sm font-medium rounded-r-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            :class="viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-300 border-l-0'"
          >
            Lista
          </button>
        </div>
      </div>
    </div>
    
    <!-- Timeline view -->
    <div v-if="viewMode === 'timeline'" class="p-6">
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-3.5 top-0 bottom-0 w-0.5 bg-neutral-200"></div>
        
        <!-- Timeline items -->
        <div class="space-y-8">
          <div 
            v-for="(event, index) in filteredEvents" 
            :key="index"
            class="relative pl-12"
          >
            <!-- Date marker -->
            <div class="absolute left-0 w-7 h-7 rounded-full flex items-center justify-center z-10" :class="getCategoryColor(event.category)">
              <span class="text-xs font-semibold text-white" v-if="event.date.length === 4">{{ event.date }}</span>
              <svg v-else class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            
            <!-- Content -->
            <div class="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
              <div class="px-4 py-3 border-b border-neutral-200 flex flex-wrap items-center justify-between">
                <!-- Event header (date, title, category) -->
                <div>
                  <span class="inline-block text-sm text-neutral-500 mb-1">{{ formatDate(event.date) }}</span>
                  <h4 class="text-base font-medium text-secondary">{{ event.title }}</h4>
                </div>
                
                <!-- Category badge -->
                <span 
                  v-if="event.category"
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  :class="getCategoryClass(event.category)"
                >
                  {{ getCategoryLabel(event.category) }}
                </span>
              </div>
              
              <!-- Event content -->
              <div class="p-4">
                <p class="text-neutral-700">{{ event.description }}</p>
                
                <!-- Related links/resources -->
                <div v-if="event.links && event.links.length > 0" class="mt-4">
                  <h5 class="text-sm font-medium mb-2">Relaterade resurser</h5>
                  <ul class="space-y-1">
                    <li v-for="(link, linkIndex) in event.links" :key="linkIndex">
                      <a 
                        :href="link.url" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="text-primary hover:underline inline-flex items-center text-sm"
                      >
                        {{ link.title }}
                        <svg class="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- List view -->
    <div v-else class="divide-y divide-neutral-200">
      <div 
        v-for="(event, index) in filteredEvents" 
        :key="index"
        class="p-6 hover:bg-neutral-50"
      >
        <div class="flex items-start">
          <!-- Date column -->
          <div class="w-24 flex-shrink-0">
            <span class="text-sm font-medium text-neutral-500">{{ formatDate(event.date) }}</span>
          </div>
          
          <!-- Content column -->
          <div class="flex-grow">
            <div class="flex flex-wrap items-center justify-between mb-2">
              <h4 class="text-base font-medium text-secondary">{{ event.title }}</h4>
              <span 
                v-if="event.category"
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                :class="getCategoryClass(event.category)"
              >
                {{ getCategoryLabel(event.category) }}
              </span>
            </div>
            
            <p class="text-neutral-700">{{ event.description }}</p>
            
            <!-- Related links/resources -->
            <div v-if="event.links && event.links.length > 0" class="mt-3">
              <ul class="flex flex-wrap gap-3">
                <li v-for="(link, linkIndex) in event.links" :key="linkIndex">
                  <a 
                    :href="link.url" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="text-primary hover:underline inline-flex items-center text-sm"
                  >
                    {{ link.title }}
                    <svg class="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Empty state -->
    <div v-if="filteredEvents.length === 0" class="py-12 text-center text-neutral-500">
      <svg class="mx-auto h-12 w-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <h3 class="mt-2 text-sm font-medium text-neutral-500">Inga händelser hittades</h3>
      <p class="mt-1 text-sm text-neutral-500">Prova att ändra dina filter för att se fler resultat.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Tillgänglighetens utveckling'
  },
  description: {
    type: String,
    default: ''
  },
  events: {
    type: Array,
    required: true
  },
  categories: {
    type: Array,
    default: () => []
  },
  defaultViewMode: {
    type: String,
    default: 'timeline',
    validator: (value) => ['timeline', 'list'].includes(value)
  },
  showControls: {
    type: Boolean,
    default: true
  }
})

// UI state
const viewMode = ref(props.defaultViewMode)
const activeFilter = ref('all')
const timeRange = ref({
  min: null,
  max: null
})

// Initialize time range based on events
onMounted(() => {
  // Find min and max years from events
  if (props.events && props.events.length > 0) {
    const years = props.events.map(event => {
      // Handle different date formats
      const yearMatch = event.date.match(/\d{4}/)
      return yearMatch ? parseInt(yearMatch[0]) : null
    }).filter(year => year !== null)
    
    if (years.length > 0) {
      timeRange.value.min = Math.min(...years)
      timeRange.value.max = Math.max(...years)
    }
  }
})

// Filtered and sorted events
const filteredEvents = computed(() => {
  return props.events
    .filter(event => {
      // Filter by category
      if (activeFilter.value !== 'all' && event.category !== activeFilter.value) {
        return false
      }
      
      // Filter by time range
      if (timeRange.value.min || timeRange.value.max) {
        // Extract year from date
        const yearMatch = event.date.match(/\d{4}/)
        if (yearMatch) {
          const eventYear = parseInt(yearMatch[0])
          
          if (timeRange.value.min && eventYear < timeRange.value.min) {
            return false
          }
          
          if (timeRange.value.max && eventYear > timeRange.value.max) {
            return false
          }
        }
      }
      
      return true
    })
    .sort((a, b) => {
      // Sort by date (newest first for timeline, oldest first for list)
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      
      return viewMode.value === 'timeline' 
        ? dateB - dateA 
        : dateA - dateB
    })
})

// Helper function to format dates
const formatDate = (dateStr) => {
  // If it's just a year, return it as is
  if (/^\d{4}$/.test(dateStr)) {
    return dateStr
  }
  
  // Otherwise, try to format the date
  try {
    const date = new Date(dateStr)
    return date.toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (error) {
    return dateStr
  }
}

// Helper function to get category label
const getCategoryLabel = (categoryValue) => {
  const category = props.categories.find(cat => cat.value === categoryValue)
  return category ? category.label : categoryValue
}

// Helper function to get category color class
const getCategoryColor = (categoryValue) => {
  const categoryColors = {
    'standards': 'bg-blue-500',
    'legislation': 'bg-purple-500',
    'technology': 'bg-green-500',
    'event': 'bg-amber-500',
    'milestone': 'bg-red-500'
  }
  
  return categoryColors[categoryValue] || 'bg-neutral-500'
}

// Helper function to get category badge class
const getCategoryClass = (categoryValue) => {
  const categoryClasses = {
    'standards': 'bg-blue-100 text-blue-800',
    'legislation': 'bg-purple-100 text-purple-800',
    'technology': 'bg-green-100 text-green-800',
    'event': 'bg-amber-100 text-amber-800',
    'milestone': 'bg-red-100 text-red-800'
  }
  
  return categoryClasses[categoryValue] || 'bg-neutral-100 text-neutral-800'
}
</script>