<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Sökresultat</h1>

    <!-- Search form -->
    <form @submit.prevent="performSearch" class="mb-8">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-grow">
          <label for="search-query" class="sr-only">Sökterm</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <input id="search-query" v-model="searchQuery" type="search"
              class="block w-full rounded-md border border-neutral-300 bg-white py-3 pl-10 pr-3 text-base placeholder-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              :placeholder="'Sök på T12T...'" :aria-label="'Sök på T12T...'" />
          </div>
        </div>
        <button type="submit"
          class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Sök
        </button>
      </div>

      <!-- Search filters -->
      <div class="mt-4 flex flex-wrap gap-4">
        <div>
          <label for="content-type" class="block text-sm font-medium text-neutral-700 mb-1">Innehållstyp</label>
          <select id="content-type" v-model="contentTypeFilter"
            class="block w-full rounded-md border border-neutral-300 bg-white py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
            <option value="">Alla typer</option>
            <option value="blog">Blogg</option>
            <option value="skärmläsare">Skärmläsare</option>
            <option value="testning">Testning</option>
            <option value="kunskapsbank">Kunskapsbank</option>
          </select>
        </div>

        <div>
          <label for="sort-order" class="block text-sm font-medium text-neutral-700 mb-1">Sortera efter</label>
          <select id="sort-order" v-model="sortOrder"
            class="block w-full rounded-md border border-neutral-300 bg-white py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
            <option value="relevance">Relevans</option>
            <option value="date">Datum (nyast först)</option>
            <option value="title">Titel (A-Ö)</option>
          </select>
        </div>
      </div>
    </form>

    <!-- Search results -->
    <div>
      <!-- Search stats -->
      <div v-if="searchPerformed" class="mb-6 text-neutral-600">
        {{ searchStats }}
      </div>

      <!-- Results list -->
      <div v-if="searchResults.length > 0" class="divide-y divide-neutral-200">
        <div v-for="(result, index) in searchResults" :key="index" class="py-6">
          <div class="text-sm text-primary mb-1">{{ getContentType(result.path) }}</div>
          <h2 class="text-xl font-semibold mb-2">
            <NuxtLink :to="result.path" class="hover:text-primary">
              {{ result.title }}
            </NuxtLink>
          </h2>
          <p class="text-neutral-600 mb-2">{{ result.description }}</p>
          <div class="flex items-center text-sm text-neutral-500">
            <span v-if="result.date">{{ formatDate(result.date) }}</span>
            <span v-if="result.author" class="ml-4">Av: {{ result.author }}</span>
          </div>
          <div v-if="result.tags && result.tags.length" class="mt-2 flex flex-wrap gap-2">
            <span v-for="tag in result.tags" :key="tag"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- No results -->
      <div v-else-if="searchPerformed" class="py-12 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-neutral-300 mb-4" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="text-xl font-medium text-neutral-900 mb-1">Inga resultat hittades</h2>
        <p class="text-neutral-600">Vi hittade inga resultat för "{{ searchQuery }}"</p>

        <div class="mt-8 max-w-xl mx-auto">
          <h3 class="text-lg font-medium mb-4">Tips för din sökning:</h3>
          <ul class="list-disc pl-5 text-neutral-600 space-y-2 text-left">
            <li>Kontrollera din stavning</li>
            <li>Försök med färre eller andra sökord</li>
            <li>Sök på mer generella termer</li>
            <li>Prova utan filter</li>
          </ul>
        </div>
      </div>

      <!-- Loading state -->
      <div v-else-if="isLoading" class="py-12 text-center">
        <p class="text-xl">Söker...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Sök - T12T - Digital Tillgänglighet',
  description: 'Sök bland alla artiklar, guider och resurser om digital tillgänglighet på T12T.',
  robots: 'noindex, follow'
})

const route = useRoute()
const searchQuery = ref(route.query.q?.toString() || '')
const contentTypeFilter = ref('')
const sortOrder = ref('relevance')
interface SearchResult {
  title: string;
  path: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
}

const searchResults = ref<SearchResult[]>([])
const searchPerformed = ref(false)
const isLoading = ref(false)

// Search stats
const searchStats = computed(() => {
  if (searchResults.value.length === 0) return 'Inga resultat'

  return `Visar ${searchResults.value.length} resultat för "${searchQuery.value}"`
})

// Watch for URL query parameter changes
watch(() => route.query.q, (newVal) => {
  if (newVal && typeof newVal === 'string') {
    searchQuery.value = newVal
    performSearch()
  }
})

// Perform search when page loads if query is present
if (searchQuery.value) {
  performSearch()
}

// Perform search function
async function performSearch() {
  if (!searchQuery.value.trim()) return

  isLoading.value = true
  searchPerformed.value = true

  try {
    // In a real implementation, you would query the content
    // const results = await queryContent('/')
    //   .where({ ... })
    //   .find()

    // For demo purposes, we'll use mock data
    await new Promise(resolve => setTimeout(resolve, 500)) // Simulate loading

    const mockResults = [
      {
        title: 'WCAG 2.2 - Vad innebär de nya riktlinjerna?',
        path: '/blog/2025/03/tillganglighet-wcag-22',
        description: 'En genomgång av de viktigaste förändringarna i WCAG 2.2 och hur de påverkar ditt arbete med tillgänglig webbutveckling.',
        date: '2025-03-10',
        author: 'Anna Svensson',
        tags: ['WCAG', 'Standarder', 'Webbutveckling']
      },
      {
        title: 'Skärmläsare - Guider och information',
        path: '/skärmläsare',
        description: 'Lär dig hur olika skärmläsare fungerar, hur du testar med dem, och viktiga kortkommandon för tillgänglighetsutvärdering.',
        date: '2025-02-15'
      },
      {
        title: 'NVDA Skärmläsarguide',
        path: '/skärmläsare/nvda',
        description: 'En komplett guide till NVDA - installation, grundläggande och avancerade kortkommandon, samt hur du testar din webbplats för tillgänglighet.',
        date: '2025-02-20'
      },
      {
        title: 'Manuell tillgänglighetstestning',
        path: '/testning/manuell',
        description: 'Guide till hur du utför manuella tester för att hitta tillgänglighetsproblem som automatiserade verktyg inte kan upptäcka.',
        date: '2025-01-30',
        tags: ['Testning', 'Manuell testning', 'Checklistor']
      }
    ]

    // Filter results
    let filteredResults = mockResults.filter(item => {
      // Filter by content type
      if (contentTypeFilter.value && !item.path.includes(contentTypeFilter.value)) {
        return false
      }

      // Filter by search query
      return (
        item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase())))
      )
    })

    // Sort results
    if (sortOrder.value === 'date') {
      filteredResults = filteredResults.sort((a, b) => {
        return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
      })
    } else if (sortOrder.value === 'title') {
      filteredResults = filteredResults.sort((a, b) => {
        return a.title.localeCompare(b.title)
      })
    }

    searchResults.value = filteredResults
  } catch (error) {
    console.error('Search error:', error)
    searchResults.value = []
  } finally {
    isLoading.value = false
  }
}

// Watch for filter changes
watch([contentTypeFilter, sortOrder], () => {
  if (searchPerformed.value) {
    performSearch()
  }
})

// Helper functions
const getContentType = (path: string) => {
  if (path.startsWith('/blog')) return 'Blogg'
  if (path.startsWith('/skärmläsare')) return 'Skärmläsare'
  if (path.startsWith('/testning')) return 'Testning'
  if (path.startsWith('/kunskapsbank')) return 'Kunskapsbank'
  return 'Artikel'
}

const formatDate = (date: string) => {
  if (!date) return ''

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('sv-SE', options)
}
</script>