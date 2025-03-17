<template>
  <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
    <!-- Header section -->
    <div class="px-6 py-4 bg-neutral-50 border-b border-neutral-200">
      <h3 class="text-lg font-semibold text-secondary">WCAG Utforskare</h3>
      <p class="mt-1 text-sm text-neutral-600">Utforska WCAG-kriterier och hitta vägledning för implementering</p>
    </div>

    <!-- Filter and search section -->
    <div class="px-6 py-4 border-b border-neutral-200">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <!-- Level filter -->
        <div>
          <label for="level-filter" class="block text-sm font-medium text-neutral-700 mb-1">Nivå</label>
          <select id="level-filter" v-model="filters.level"
            class="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary text-sm">
            <option value="all">Alla nivåer</option>
            <option value="A">Nivå A</option>
            <option value="AA">Nivå AA</option>
            <option value="AAA">Nivå AAA</option>
          </select>
        </div>

        <!-- Principle filter -->
        <div>
          <label for="principle-filter" class="block text-sm font-medium text-neutral-700 mb-1">Princip</label>
          <select id="principle-filter" v-model="filters.principle"
            class="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary text-sm">
            <option value="all">Alla principer</option>
            <option value="1">1. Möjlig att uppfatta</option>
            <option value="2">2. Hanterbar</option>
            <option value="3">3. Begriplig</option>
            <option value="4">4. Robust</option>
          </select>
        </div>

        <!-- Search input -->
        <div>
          <label for="wcag-search" class="block text-sm font-medium text-neutral-700 mb-1">Sök</label>
          <div class="relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input type="search" id="wcag-search" v-model="searchQuery"
              class="block w-full pl-10 rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary text-sm"
              placeholder="Sök i kriterier..." />
          </div>
        </div>
      </div>
    </div>

    <!-- WCAG criteria list -->
    <div class="px-6 py-4 max-h-[500px] overflow-y-auto">
      <div v-if="filteredCriteria.length === 0" class="py-6 text-center text-neutral-500">
        <svg class="mx-auto h-10 w-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="mt-2 text-sm">Inga kriterier hittades med de valda filtren.</p>
      </div>

      <div v-else class="space-y-4">
        <div v-for="(criterion, index) in filteredCriteria" :key="criterion.id"
          class="border border-neutral-200 rounded-md overflow-hidden hover:shadow-sm transition-shadow">
          <div class="px-4 py-3 flex items-center justify-between cursor-pointer" :class="[
            activeCriterion === criterion.id ? 'bg-primary-light' : 'bg-white',
            'hover:bg-neutral-50'
          ]" @click="toggleCriterion(criterion.id)">
            <div class="flex items-center">
              <WcagLevelBadge :level="criterion.level" class="mr-2" />
              <span class="font-medium text-neutral-700">{{ criterion.id }} - {{ criterion.title }}</span>
            </div>
            <svg class="h-5 w-5 text-neutral-500 transition-transform"
              :class="activeCriterion === criterion.id ? 'transform rotate-180' : ''" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div v-if="activeCriterion === criterion.id" class="px-4 py-3 border-t border-neutral-200 bg-white">
            <div class="prose prose-sm max-w-none">
              <p>{{ criterion.description }}</p>

              <h4 class="text-sm font-medium text-neutral-700 mt-4 mb-2">Syfte</h4>
              <p>{{ criterion.purpose }}</p>

              <div v-if="criterion.techniques && criterion.techniques.length > 0">
                <h4 class="text-sm font-medium text-neutral-700 mt-4 mb-2">Tekniker för implementering</h4>
                <ul class="list-disc pl-4 space-y-1">
                  <li v-for="(technique, techIndex) in criterion.techniques" :key="techIndex">
                    <a :href="technique.url" target="_blank" rel="noopener noreferrer"
                      class="text-primary hover:underline">
                      {{ technique.name }}
                      <span v-if="technique.description" class="text-neutral-600">: {{ technique.description }}</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div v-if="criterion.examples && criterion.examples.length > 0" class="mt-4">
                <h4 class="text-sm font-medium text-neutral-700 mb-2">Exempel</h4>
                <div v-for="(example, exampleIndex) in criterion.examples" :key="exampleIndex" class="mb-3">
                  <div class="bg-neutral-50 rounded-md p-3 text-sm">
                    <div class="mb-2">
                      <span class="font-medium">{{ example.title }}</span>
                    </div>
                    <pre v-if="example.code"
                      class="bg-neutral-100 p-2 rounded text-xs overflow-x-auto">{{ example.code }}</pre>
                    <p v-else>{{ example.description }}</p>
                  </div>
                </div>
              </div>

              <div class="mt-4 flex justify-end">
                <a :href="`https://www.w3.org/WAI/WCAG22/Understanding/${criterion.id}`" target="_blank"
                  rel="noopener noreferrer" class="text-sm text-primary hover:underline inline-flex items-center">
                  Läs mer i W3C dokumentationen
                  <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import WcagLevelBadge from './WcagLevelBadge.vue'

// Sample WCAG criteria data (in a real app, this would come from an API or a larger dataset)
const wcagCriteria = [
  {
    id: '1.1.1',
    title: 'Icke-textuellt innehåll',
    level: 'A',
    principle: '1',
    description: 'Allt icke-textuellt innehåll som presenteras för användaren har ett textalternativ som fyller samma syfte.',
    purpose: 'Att säkerställa att information som förmedlas genom bilder, diagram, ljud och andra icke-textbaserade medier är tillgänglig för personer som inte kan ta del av den ursprungliga presentationen.',
    techniques: [
      {
        name: 'G94: Tillhandahåll textbaserade alternativ för icke-textbaserat innehåll',
        url: 'https://www.w3.org/WAI/WCAG22/Techniques/general/G94'
      },
      {
        name: 'H37: Använd alt-attribut på img-element',
        description: 'Använd meningsfulla alternativtexter för bilder',
        url: 'https://www.w3.org/WAI/WCAG22/Techniques/html/H37'
      }
    ],
    examples: [
      {
        title: 'Bild med alternativtext',
        code: '<img src="logo.png" alt="Företagets logotyp - en blå cirkel med en vit stjärna" />',
      },
      {
        title: 'Dekorativ bild',
        code: '<img src="decoration.png" alt="" role="presentation" />',
      }
    ]
  },
  {
    id: '1.3.1',
    title: 'Information och relationer',
    level: 'A',
    principle: '1',
    description: 'Information, struktur och relationer som förmedlas genom presentation kan bestämmas programmatiskt eller vara tillgängliga i text.',
    purpose: 'Att säkerställa att information och relationer som förmedlas genom visuell eller auditiv formatering också bevaras när presentationen ändras.',
    techniques: [
      {
        name: 'H42: Använd h1-h6 för att identifiera rubriker',
        url: 'https://www.w3.org/WAI/WCAG22/Techniques/html/H42'
      },
      {
        name: 'H48: Använd ol, ul och dl för listor',
        url: 'https://www.w3.org/WAI/WCAG22/Techniques/html/H48'
      }
    ],
    examples: [
      {
        title: 'Korrekt rubrikstruktur',
        code: '<h1>Huvudrubrik</h1>\n<h2>Underrubrik</h2>\n<p>Innehåll...</p>\n<h2>Nästa underrubrik</h2>\n<p>Mer innehåll...</p>',
      }
    ]
  },
  {
    id: '2.4.7',
    title: 'Fokus synligt',
    level: 'AA',
    principle: '2',
    description: 'Alla tangentbordsmanövrerbara användargränssnitt har ett användningsläge där indikatorn för tangentbordsfokus är synlig.',
    purpose: 'Att hjälpa användare som navigerar med tangentbord att veta vilket element som har fokus.',
    techniques: [
      {
        name: 'G149: Använd användar-interface-komponenter som är fokus-synliga som standard',
        url: 'https://www.w3.org/WAI/WCAG22/Techniques/general/G149'
      },
      {
        name: 'C15: Använd CSS för att styra synligheten för en fokusindikator',
        url: 'https://www.w3.org/WAI/WCAG22/Techniques/css/C15'
      }
    ],
    examples: [
      {
        title: 'Tydlig fokusindikator i CSS',
        code: 'a:focus {\n  outline: 2px solid #0066cc;\n  outline-offset: 2px;\n}',
      }
    ]
  },
  {
    id: '3.3.2',
    title: 'Etiketter eller instruktioner',
    level: 'A',
    principle: '3',
    description: 'Etiketter eller instruktioner tillhandahålls när innehåll kräver inmatning från användaren.',
    purpose: 'Att hjälpa användare att förstå vad som förväntas av dem när de ska interagera med innehåll som kräver inmatning.',
    techniques: [
      {
        name: 'G131: Tillhandahåll beskrivande etiketter',
        url: 'https://www.w3.org/WAI/WCAG22/Techniques/general/G131'
      },
      {
        name: 'H44: Använd label-element för att associera textetiketter med formulärkontroller',
        url: 'https://www.w3.org/WAI/WCAG22/Techniques/html/H44'
      }
    ],
    examples: [
      {
        title: 'Formulärfält med etikett',
        code: '<label for="email">E-postadress (obligatorisk)</label>\n<input type="email" id="email" name="email" required />',
      }
    ]
  },
  {
    id: '4.1.2',
    title: 'Namn, roll, värde',
    level: 'A',
    principle: '4',
    description: 'För alla komponenter i användargränssnittet (inklusive men inte begränsat till formuleringselement, länkar och komponenter som genereras av skript), kan namn och roll bestämmas programmatiskt; tillstånd, egenskaper och värden som kan ställas in av användaren kan ställas in programmatiskt; och meddelande om ändringar i dessa objekt är tillgängliga för användarprogram, inklusive hjälpmedel.',
    purpose: 'Att säkerställa att hjälpmedel kan samla in information om, aktivera och hålla användaren informerad om statusen för användargränssnittets komponenter.',
    techniques: [
      {
        name: 'ARIA4: Använda role-attribut för att förklara typen av interaktivt element vars semantik ännu inte är tillgänglig',
        url: 'https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4'
      },
      {
        name: 'H91: Använda HTML-formulärkontroller och länkar',
        url: 'https://www.w3.org/WAI/WCAG22/Techniques/html/H91'
      }
    ],
    examples: [
      {
        title: 'Custom toggle button med ARIA',
        code: '<div role="button" tabindex="0" aria-pressed="false" id="toggle-btn">Aktivera läge</div>',
      }
    ]
  }
]

// Reactive state
const filters = ref({
  level: 'all',
  principle: 'all'
})
const searchQuery = ref('')
const activeCriterion = ref(null)

// Computed properties
const filteredCriteria = computed(() => {
  return wcagCriteria.filter(criterion => {
    // Filter by level
    if (filters.value.level !== 'all' && criterion.level !== filters.value.level) {
      return false
    }

    // Filter by principle
    if (filters.value.principle !== 'all' && !criterion.id.startsWith(filters.value.principle + '.')) {
      return false
    }

    // Filter by search query
    if (searchQuery.value.trim() !== '') {
      const query = searchQuery.value.toLowerCase()
      return (
        criterion.id.toLowerCase().includes(query) ||
        criterion.title.toLowerCase().includes(query) ||
        criterion.description.toLowerCase().includes(query)
      )
    }

    return true
  })
})

// Methods
const toggleCriterion = (id) => {
  if (activeCriterion.value === id) {
    activeCriterion.value = null
  } else {
    activeCriterion.value = id
  }
}
</script>