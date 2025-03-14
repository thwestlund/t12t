<template>
  <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
    <div class="px-6 py-4 bg-neutral-50 border-b border-neutral-200">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-secondary">WCAG 2.2 Kravuppfyllnad</h3>
        <div class="flex items-center space-x-2">
          <span class="text-sm text-neutral-600">Progress:</span>
          <div class="w-24 h-2.5 bg-neutral-200 rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-500 ease-out" :class="progressColorClass"
              :style="{ width: `${overallProgress}%` }"></div>
          </div>
          <span class="text-sm font-medium" :class="progressTextClass">{{ overallProgress }}%</span>
        </div>
      </div>
      <p v-if="description" class="mt-1 text-sm text-neutral-600">{{ description }}</p>
    </div>

    <div class="px-6 py-4 border-b border-neutral-200 bg-neutral-50">
      <div class="flex flex-wrap gap-3">
        <!-- Filter by level -->
        <div class="flex items-center">
          <span class="text-sm text-neutral-600 mr-2">Nivå:</span>
          <div class="flex rounded-md overflow-hidden border border-neutral-300">
            <button v-for="level in levels" :key="level.value" @click="toggleLevelFilter(level.value)"
              class="px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              :class="[
                activeFilters.levels.includes(level.value) ?
                  level.activeClass :
                  'bg-white text-neutral-700 hover:bg-neutral-50'
              ]" :aria-pressed="activeFilters.levels.includes(level.value)">
              {{ level.label }}
            </button>
          </div>
        </div>

        <!-- Filter by principle -->
        <div class="flex items-center">
          <span class="text-sm text-neutral-600 mr-2">Princip:</span>
          <select v-model="activeFilters.principle"
            class="text-sm rounded-md border-neutral-300 py-1 pl-2 pr-8 focus:border-primary focus:ring-primary">
            <option value="all">Alla principer</option>
            <option v-for="principle in principles" :key="principle.value" :value="principle.value">
              {{ principle.label }}
            </option>
          </select>
        </div>

        <!-- Filter by status -->
        <div class="flex items-center">
          <span class="text-sm text-neutral-600 mr-2">Status:</span>
          <select v-model="activeFilters.status"
            class="text-sm rounded-md border-neutral-300 py-1 pl-2 pr-8 focus:border-primary focus:ring-primary">
            <option value="all">Alla statusar</option>
            <option value="compliant">Uppfylls</option>
            <option value="partial">Delvis uppfylls</option>
            <option value="non-compliant">Uppfylls ej</option>
            <option value="not-applicable">Ej tillämplig</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Criteria list -->
    <div class="max-h-[600px] overflow-y-auto">
      <div v-if="filteredCriteria.length === 0" class="py-12 text-center text-neutral-500">
        <svg class="mx-auto h-12 w-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="mt-2">Inga kriterier hittades med valda filter.</p>
      </div>

      <ul v-else class="divide-y divide-neutral-200">
        <li v-for="criterion in filteredCriteria" :key="criterion.id" class="hover:bg-neutral-50">
          <!-- Criterion header (always visible) -->
          <div class="p-4 flex items-center justify-between cursor-pointer" @click="toggleCriterion(criterion.id)">
            <div class="flex items-center">
              <div class="flex-shrink-0 mr-3">
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full"
                  :class="getStatusBgClass(criterion.status)">
                  <svg v-if="criterion.status === 'compliant'" class="h-5 w-5 text-white" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>

                  <svg v-else-if="criterion.status === 'partial'" class="h-5 w-5 text-white" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
                    </path>
                  </svg>

                  <svg v-else-if="criterion.status === 'non-compliant'" class="h-5 w-5 text-white" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                  </svg>

                  <svg v-else class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
              </div>

              <div>
                <div class="flex items-center">
                  <span class="font-medium text-secondary">{{ criterion.id }}</span>
                  <WcagLevelBadge :level="criterion.level" class="ml-2" />
                  <span v-if="criterion.status === 'partial'"
                    class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    Delvis uppfylls
                  </span>
                  <span v-else-if="criterion.status === 'not-applicable'"
                    class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
                    Ej tillämplig
                  </span>
                </div>
                <span class="text-neutral-600">{{ criterion.name }}</span>
              </div>
            </div>

            <svg class="h-5 w-5 text-neutral-500 transition-transform"
              :class="{ 'transform rotate-180': openCriteria.includes(criterion.id) }" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>

          <!-- Expanded content (shown when clicked) -->
          <div v-if="openCriteria.includes(criterion.id)" class="px-4 pb-4">
            <div class="pl-11">
              <p class="mb-4 text-neutral-700">{{ criterion.description }}</p>

              <!-- Implementation details -->
              <div v-if="criterion.implementation" class="mb-4">
                <h4 class="text-sm font-medium text-neutral-700 mb-2">Implementering</h4>
                <div class="prose prose-sm max-w-none">
                  <p>{{ criterion.implementation }}</p>
                </div>
              </div>

              <!-- Todo list if status is partial or non-compliant -->
              <div
                v-if="['partial', 'non-compliant'].includes(criterion.status) && criterion.todos && criterion.todos.length > 0"
                class="mb-4">
                <h4 class="text-sm font-medium text-neutral-700 mb-2">Åtgärdslista</h4>
                <ul class="space-y-2">
                  <li v-for="(todo, todoIndex) in criterion.todos" :key="todoIndex" class="flex items-start">
                    <svg class="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
                      </path>
                    </svg>
                    <span>{{ todo }}</span>
                  </li>
                </ul>
              </div>

              <!-- Not applicable reason -->
              <div v-if="criterion.status === 'not-applicable' && criterion.notApplicableReason" class="mb-4">
                <h4 class="text-sm font-medium text-neutral-700 mb-2">Anledning till att kravet inte är tillämpligt</h4>
                <p class="text-neutral-600">{{ criterion.notApplicableReason }}</p>
              </div>

              <!-- Resources and links -->
              <div v-if="criterion.resources && criterion.resources.length > 0" class="mb-4">
                <h4 class="text-sm font-medium text-neutral-700 mb-2">Resurser</h4>
                <ul class="space-y-1">
                  <li v-for="(resource, resourceIndex) in criterion.resources" :key="resourceIndex">
                    <a :href="resource.url" target="_blank" rel="noopener noreferrer"
                      class="text-primary hover:underline inline-flex items-center">
                      {{ resource.title }}
                      <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Status change button -->
              <div v-if="editable" class="mt-4">
                <div class="flex items-center">
                  <label for="status-select" class="block text-sm font-medium text-neutral-700 mr-3">
                    Ändra status:
                  </label>
                  <select :id="`status-select-${criterion.id}`" v-model="criterion.status"
                    class="text-sm rounded-md border-neutral-300 py-1 pl-2 pr-8 focus:border-primary focus:ring-primary mr-3">
                    <option value="compliant">Uppfylls</option>
                    <option value="partial">Delvis uppfylls</option>
                    <option value="non-compliant">Uppfylls ej</option>
                    <option value="not-applicable">Ej tillämplig</option>
                  </select>

                  <button @click="saveCriterionStatus(criterion)"
                    class="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Spara
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- Summary (if showing summary) -->
    <div v-if="showSummary" class="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
      <h4 class="text-sm font-medium text-neutral-700 mb-2">Sammanfattning</h4>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div class="flex items-center p-3 bg-white rounded-md border border-neutral-200">
          <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 mr-3">
            <svg class="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
          <div>
            <div class="text-sm text-neutral-500">Uppfyllda</div>
            <div class="text-xl font-semibold">{{ summaryCounts.compliant }}</div>
          </div>
        </div>

        <div class="flex items-center p-3 bg-white rounded-md border border-neutral-200">
          <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 mr-3">
            <svg class="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
              </path>
            </svg>
          </span>
          <div>
            <div class="text-sm text-neutral-500">Delvis</div>
            <div class="text-xl font-semibold">{{ summaryCounts.partial }}</div>
          </div>
        </div>

        <div class="flex items-center p-3 bg-white rounded-md border border-neutral-200">
          <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-100 mr-3">
            <svg class="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </span>
          <div>
            <div class="text-sm text-neutral-500">Uppfylls ej</div>
            <div class="text-xl font-semibold">{{ summaryCounts.nonCompliant }}</div>
          </div>
        </div>

        <div class="flex items-center p-3 bg-white rounded-md border border-neutral-200">
          <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-neutral-100 mr-3">
            <svg class="h-5 w-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </span>
          <div>
            <div class="text-sm text-neutral-500">Ej tillämplig</div>
            <div class="text-xl font-semibold">{{ summaryCounts.notApplicable }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import WcagLevelBadge from './WcagLevelBadge.vue'

const props = defineProps({
  description: {
    type: String,
    default: 'Övervaka och hantera webbplatsens efterlevnad av tillgänglighetsstandarder (WCAG 2.2).'
  },
  criteria: {
    type: Array,
    required: true
  },
  showSummary: {
    type: Boolean,
    default: true
  },
  editable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:criteria', 'save-criterion'])

// Track which criteria are expanded
const openCriteria = ref([])

// Active filters
const activeFilters = ref({
  levels: ['A', 'AA'],  // Default to A and AA levels
  principle: 'all',     // All principles
  status: 'all'         // All statuses
})

// Toggle a criterion expanded/collapsed
const toggleCriterion = (id) => {
  if (openCriteria.value.includes(id)) {
    openCriteria.value = openCriteria.value.filter(item => item !== id)
  } else {
    openCriteria.value.push(id)
  }
}

// Toggle a level in the filter
const toggleLevelFilter = (level) => {
  if (activeFilters.value.levels.includes(level)) {
    // Don't remove the last level
    if (activeFilters.value.levels.length > 1) {
      activeFilters.value.levels = activeFilters.value.levels.filter(l => l !== level)
    }
  } else {
    activeFilters.value.levels.push(level)
  }
}

// Available WCAG levels
const levels = [
  { label: 'A', value: 'A', activeClass: 'bg-red-100 text-red-800' },
  { label: 'AA', value: 'AA', activeClass: 'bg-amber-100 text-amber-800' },
  { label: 'AAA', value: 'AAA', activeClass: 'bg-green-100 text-green-800' }
]

// WCAG principles
const principles = [
  { label: '1. Möjlig att uppfatta', value: '1' },
  { label: '2. Hanterbar', value: '2' },
  { label: '3. Begriplig', value: '3' },
  { label: '4. Robust', value: '4' }
]

// Filter criteria based on active filters
const filteredCriteria = computed(() => {
  return props.criteria.filter(criterion => {
    // Filter by level
    if (!activeFilters.value.levels.includes(criterion.level)) {
      return false
    }

    // Filter by principle (using the first number of the criterion ID)
    if (activeFilters.value.principle !== 'all' && !criterion.id.startsWith(activeFilters.value.principle + '.')) {
      return false
    }

    // Filter by status
    if (activeFilters.value.status !== 'all' && criterion.status !== activeFilters.value.status) {
      return false
    }

    return true
  })
})

// Calculate summary counts
const summaryCounts = computed(() => {
  const counts = {
    compliant: 0,
    partial: 0,
    nonCompliant: 0,
    notApplicable: 0
  }

  props.criteria.forEach(criterion => {
    if (criterion.status === 'compliant') {
      counts.compliant++
    } else if (criterion.status === 'partial') {
      counts.partial++
    } else if (criterion.status === 'non-compliant') {
      counts.nonCompliant++
    } else if (criterion.status === 'not-applicable') {
      counts.notApplicable++
    }
  })

  return counts
})

// Calculate overall progress percentage
const overallProgress = computed(() => {
  const total = props.criteria.length - summaryCounts.value.notApplicable
  if (total === 0) return 0

  const value = (summaryCounts.value.compliant + (summaryCounts.value.partial * 0.5)) / total * 100
  return Math.round(value)
})

// Progress color class based on percentage
const progressColorClass = computed(() => {
  if (overallProgress.value >= 80) {
    return 'bg-green-500'
  } else if (overallProgress.value >= 50) {
    return 'bg-amber-500'
  } else {
    return 'bg-red-500'
  }
})

// Text color for progress
const progressTextClass = computed(() => {
  if (overallProgress.value >= 80) {
    return 'text-green-600'
  } else if (overallProgress.value >= 50) {
    return 'text-amber-600'
  } else {
    return 'text-red-600'
  }
})

// Helper function to get status background class
const getStatusBgClass = (status) => {
  switch (status) {
    case 'compliant':
      return 'bg-green-500'
    case 'partial':
      return 'bg-amber-500'
    case 'non-compliant':
      return 'bg-red-500'
    case 'not-applicable':
      return 'bg-neutral-400'
    default:
      return 'bg-neutral-400'
  }
}

// Save a criterion's status change
const saveCriterionStatus = (criterion) => {
  emit('save-criterion', criterion)
  emit('update:criteria', props.criteria)
}

// Watch criteria changes if editable
watch(() => props.criteria, (newCriteria) => {
  if (props.editable) {
    emit('update:criteria', newCriteria)
  }
}, { deep: true })
</script>