<template>
  <div class="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <!-- Resource header -->
    <div 
      class="px-6 py-4 border-b border-neutral-200 flex items-center justify-between"
      :class="[colorClass.header]"
    >
      <div class="flex items-center">
        <!-- Resource type icon -->
        <div class="mr-3 text-primary-600">
          <svg v-if="type === 'pdf'" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3v4a1 1 0 001 1h4" />
          </svg>
          
          <svg v-else-if="type === 'doc' || type === 'docx'" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          
          <svg v-else-if="type === 'xls' || type === 'xlsx'" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          
          <svg v-else-if="type === 'ppt' || type === 'pptx'" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
          
          <svg v-else-if="type === 'zip' || type === 'rar'" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          
          <svg v-else-if="type === 'template'" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
          
          <svg v-else-if="type === 'tool' || type === 'utility'" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          
          <svg v-else-if="type === 'checklist'" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          
          <svg v-else class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        
        <div>
          <h3 class="font-medium text-lg text-secondary truncate" :title="title">{{ title }}</h3>
          <div class="flex items-center text-sm text-neutral-500">
            <span v-if="fileSize" class="mr-2">{{ formatFileSize(fileSize) }}</span>
            <span v-if="type" class="uppercase">{{ type }}</span>
            <span v-if="version" class="ml-2">v{{ version }}</span>
          </div>
        </div>
      </div>
      
      <!-- Tags -->
      <div v-if="tags && tags.length" class="hidden md:flex flex-wrap gap-2">
        <span 
          v-for="(tag, index) in tags" 
          :key="index"
          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    
    <!-- Resource content -->
    <div class="px-6 py-4">
      <div v-if="description" class="mb-4 text-neutral-600">
        {{ description }}
      </div>
      
      <!-- Mobile tags (shown only on mobile) -->
      <div v-if="tags && tags.length" class="flex md:hidden flex-wrap gap-2 mb-4">
        <span 
          v-for="(tag, index) in tags" 
          :key="`mobile-${index}`"
          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800"
        >
          {{ tag }}
        </span>
      </div>
      
      <!-- Date and author info -->
      <div v-if="date || author" class="mb-4 flex items-center text-sm text-neutral-500">
        <svg v-if="date" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span v-if="date" class="mr-3">{{ formatDate(date) }}</span>
        
        <svg v-if="author" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span v-if="author">{{ author }}</span>
      </div>
      
      <!-- Download button -->
      <div class="flex">
        <a 
          :href="downloadUrl" 
          :download="downloadFilename"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          :class="[colorClass.button]"
          :aria-label="`Ladda ner ${title}`"
          v-if="downloadUrl"
        >
          <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {{ downloadButtonText || 'Ladda ner' }}
        </a>
        
        <!-- External link -->
        <a 
          v-else-if="externalUrl" 
          :href="externalUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          :class="[colorClass.button]"
        >
          <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          {{ externalButtonText || 'Besök' }}
        </a>
      </div>
    </div>
    
    <!-- Resource footer with WCAG reference -->
    <div 
      v-if="wcagReference || lastUpdated"
      class="px-6 py-3 bg-neutral-50 border-t border-neutral-200 flex flex-wrap justify-between items-center"
    >
      <!-- WCAG reference -->
      <div v-if="wcagReference" class="flex items-center">
        <span class="text-xs text-neutral-500 mr-2">WCAG: </span>
        <div class="flex flex-wrap gap-1">
          <a 
            v-for="(ref, index) in formatWcagReferences(wcagReference)" 
            :key="index"
            :href="`https://www.w3.org/WAI/WCAG22/Understanding/${ref}`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary hover:underline"
          >
            {{ ref }}
          </a>
        </div>
      </div>
      
      <!-- Last updated date -->
      <div v-if="lastUpdated" class="text-xs text-neutral-500">
        Senast uppdaterad: {{ formatDate(lastUpdated) }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  fileSize: {
    type: [Number, String],
    default: null
  },
  version: {
    type: String,
    default: ''
  },
  downloadUrl: {
    type: String,
    default: ''
  },
  downloadFilename: {
    type: String,
    default: ''
  },
  downloadButtonText: {
    type: String,
    default: 'Ladda ner'
  },
  externalUrl: {
    type: String,
    default: ''
  },
  externalButtonText: {
    type: String,
    default: 'Besök'
  },
  date: {
    type: [Date, String],
    default: null
  },
  lastUpdated: {
    type: [Date, String],
    default: null
  },
  author: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  },
  wcagReference: {
    type: [String, Array],
    default: null
  },
  color: {
    type: String,
    default: 'primary', // primary, blue, green, amber, red, purple
    validator: (value) => ['primary', 'blue', 'green', 'amber', 'red', 'purple', 'neutral'].includes(value)
  }
})

// Compute color classes based on the color prop
const colorClass = computed(() => {
  const classes = {
    primary: {
      header: 'bg-primary-light',
      button: 'bg-primary hover:bg-primary-hover'
    },
    blue: {
      header: 'bg-blue-50',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    green: {
      header: 'bg-green-50',
      button: 'bg-green-600 hover:bg-green-700'
    },
    amber: {
      header: 'bg-amber-50',
      button: 'bg-amber-600 hover:bg-amber-700'
    },
    red: {
      header: 'bg-red-50',
      button: 'bg-red-600 hover:bg-red-700'
    },
    purple: {
      header: 'bg-purple-50',
      button: 'bg-purple-600 hover:bg-purple-700'
    },
    neutral: {
      header: 'bg-neutral-50',
      button: 'bg-neutral-600 hover:bg-neutral-700'
    }
  }
  
  return classes[props.color] || classes.primary
})

// Format file size (e.g., convert bytes to KB, MB, etc.)
const formatFileSize = (size) => {
  // If size is already a string, assume it's already formatted
  if (typeof size === 'string') {
    return size
  }
  
  // Convert number to appropriate unit
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let fileSize = size
  let unitIndex = 0
  
  while (fileSize >= 1024 && unitIndex < units.length - 1) {
    fileSize /= 1024
    unitIndex++
  }
  
  return `${fileSize.toFixed(1)} ${units[unitIndex]}`
}

// Format date to Swedish format
const formatDate = (date) => {
  if (!date) return ''
  
  try {
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (error) {
    return date
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
</script>