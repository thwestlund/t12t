<template>
  <div class="relative">
    <!-- Search button (for mobile) -->
    <button v-if="!isSearchOpen" @click="openSearch" type="button"
      class="md:hidden p-2 text-neutral-600 hover:text-primary" aria-label="Öppna sök">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>

    <!-- Search form -->
    <div v-show="isSearchOpen || isDesktop" class="relative">
      <form @submit.prevent="performSearch" class="flex">
        <label :for="inputId" class="sr-only">Sök på T12T</label>
        <div class="relative flex-grow">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <input :id="inputId" ref="searchInput" v-model="searchQuery" type="search"
            class="block w-full rounded-md border border-neutral-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            :placeholder="placeholder" :aria-label="placeholder" @focus="isSearchFocused = true" @blur="handleBlur" />
        </div>
        <button type="submit"
          class="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Sök
        </button>
        <button v-if="isSearchOpen && !isDesktop" @click="closeSearch" type="button"
          class="ml-2 p-2 text-neutral-600 hover:text-primary" aria-label="Stäng sök">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </form>

      <!-- Search results dropdown -->
      <div v-if="isSearchFocused && searchResults.length > 0"
        class="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-80 overflow-auto focus:outline-none"
        role="listbox">
        <div v-for="(result, index) in searchResults" :key="index"
          class="cursor-pointer select-none relative py-2 px-4 hover:bg-neutral-100">
          <NuxtLink :to="result.path" class="block hover:no-underline" @click="closeSearch">
            <div class="text-sm font-medium text-secondary">{{ result.title }}</div>
            <div class="text-xs text-neutral-500 truncate">{{ result.path }}</div>
          </NuxtLink>
        </div>
        <div v-if="searchPerformed && searchResults.length === 0" class="py-2 px-4 text-sm text-neutral-500">
          Inga resultat för "{{ searchQuery }}"
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Sök på T12T...'
  },
  limit: {
    type: Number,
    default: 10
  }
})

const router = useRouter()
const inputId = `search-input-${Math.random().toString(36).substring(2, 9)}`

const searchQuery = ref('')
const searchResults = ref<{ title: string; path: string }[]>([])
const isSearchFocused = ref(false)
const isSearchOpen = ref(false)
const searchPerformed = ref(false)
const searchInput = ref<HTMLInputElement | null>(null)

const isDesktop = ref(false)

// Check if we're on desktop
onMounted(() => {
  isDesktop.value = window.innerWidth >= 768 // md breakpoint in Tailwind

  const handleResize = () => {
    isDesktop.value = window.innerWidth >= 768
  }

  window.addEventListener('resize', handleResize)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })
})

// Search functions
const performSearch = async () => {
  if (!searchQuery.value.trim()) return

  searchPerformed.value = true

  try {
    // In a real implementation, you would use Nuxt Content's queryContent API
    // const results = await queryContent('/')
    //   .where({ $or: [
    //     { title: { $regex: searchQuery.value, $options: 'i' } },
    //     { description: { $regex: searchQuery.value, $options: 'i' } },
    //     { body: { $regex: searchQuery.value, $options: 'i' } }
    //   ]})
    //   .limit(props.limit)
    //   .find()

    // For demo purposes, we'll use mock data
    const mockResults = [
      { title: 'WCAG 2.2 - Vad innebär de nya riktlinjerna?', path: '/blog/2025/03/tillganglighet-wcag-22' },
      { title: 'Skärmläsare - Guider och information', path: '/skärmläsare' },
      { title: 'NVDA Skärmläsarguide', path: '/skärmläsare/nvda' },
      { title: 'Manuell tillgänglighetstestning', path: '/testning/manuell' }
    ].filter(item =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.path.toLowerCase().includes(searchQuery.value.toLowerCase())
    )

    searchResults.value = mockResults

    // If we have no results and we're not just searching, navigate to search page
    if (mockResults.length === 0 && searchQuery.value.length > 2) {
      router.push(`/sok?q=${encodeURIComponent(searchQuery.value)}`)
      closeSearch()
    }
  } catch (error) {
    console.error('Search error:', error)
    searchResults.value = []
  }
}

// When the search query changes, update results
watch(searchQuery, (newValue) => {
  if (newValue.trim().length > 2) {
    performSearch()
  } else {
    searchResults.value = []
    searchPerformed.value = false
  }
})

// UI handlers
const openSearch = () => {
  isSearchOpen.value = true

  // Focus the input after opening
  nextTick(() => {
    searchInput.value?.focus()
  })
}

const closeSearch = () => {
  isSearchOpen.value = false
  searchQuery.value = ''
  searchResults.value = []
  isSearchFocused.value = false
}

const handleBlur = () => {
  // Slight delay to allow clicking on search results
  setTimeout(() => {
    isSearchFocused.value = false
  }, 200)
}
</script>