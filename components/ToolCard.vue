<template>
  <div class="border border-neutral-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <div class="px-6 py-4">
      <div class="flex items-start justify-between">
        <div>
          <h3 class="text-lg font-semibold text-secondary">{{ name }}</h3>
          
          <div class="mt-1 text-sm text-neutral-600">
            {{ description }}
          </div>
        </div>
        
        <!-- Optional icon or logo -->
        <div v-if="icon" class="text-primary h-8 w-8 flex-shrink-0">
          <slot name="icon">
            <img v-if="typeof icon === 'string'" :src="icon" :alt="`${name} logotyp`" class="h-8 w-8 object-contain" />
            
            <svg v-else-if="icon === 'automated'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            
            <svg v-else-if="icon === 'manual'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            
            <svg v-else-if="icon === 'code'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            
            <svg v-else-if="icon === 'browser'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </slot>
        </div>
      </div>
      
      <!-- Tags/badges -->
      <div v-if="badges && badges.length" class="mt-3 flex flex-wrap gap-2">
        <span 
          v-for="(badge, index) in badges" 
          :key="index"
          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
          :class="getBadgeClass(badge.type)"
        >
          {{ badge.text }}
        </span>
      </div>
    </div>
    
    <!-- Metadata section -->
    <div v-if="showMetadata" class="bg-neutral-50 px-6 py-3 grid grid-cols-2 gap-4 text-sm border-t border-neutral-200">
      <div v-if="type">
        <div class="font-medium text-neutral-500">Typ</div>
        <div class="text-neutral-800">{{ type }}</div>
      </div>
      
      <div v-if="platform">
        <div class="font-medium text-neutral-500">Plattform</div>
        <div class="text-neutral-800">{{ platform }}</div>
      </div>
      
      <div v-if="cost">
        <div class="font-medium text-neutral-500">Kostnad</div>
        <div class="text-neutral-800">{{ cost }}</div>
      </div>
      
      <!-- Custom metadata -->
      <slot name="metadata"></slot>
    </div>
    
    <!-- Actions section -->
    <div class="px-6 py-3 bg-white border-t border-neutral-200">
      <div class="flex justify-end space-x-3">
        <slot name="actions">
          <a 
            v-if="websiteUrl" 
            :href="websiteUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            <span>Besök webbplats</span>
            <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
          
          <NuxtLink 
            v-if="detailsUrl" 
            :to="detailsUrl"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Läs mer
          </NuxtLink>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: [String, Object],
    default: null
  },
  type: {
    type: String,
    default: ''
  },
  platform: {
    type: String,
    default: ''
  },
  cost: {
    type: String,
    default: ''
  },
  badges: {
    type: Array,
    default: () => []
  },
  websiteUrl: {
    type: String,
    default: ''
  },
  detailsUrl: {
    type: String,
    default: ''
  },
  showMetadata: {
    type: Boolean,
    default: true
  }
})

// Helper function to get appropriate class for badge type
const getBadgeClass = (type) => {
  const classes = {
    'free': 'bg-green-100 text-green-800',
    'paid': 'bg-amber-100 text-amber-800',
    'extension': 'bg-purple-100 text-purple-800',
    'api': 'bg-blue-100 text-blue-800',
    'desktop': 'bg-indigo-100 text-indigo-800',
    'web': 'bg-sky-100 text-sky-800',
    'recommended': 'bg-primary-light text-primary',
    'popular': 'bg-rose-100 text-rose-800',
    'plugin': 'bg-teal-100 text-teal-800'
  }
  
  return classes[type] || 'bg-neutral-100 text-neutral-800'
}
</script>