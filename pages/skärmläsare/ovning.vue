<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Öva skärmläsarnavigation</h1>

    <div class="prose max-w-none mb-8">
      <p>
        På denna sida kan du öva på att använda en skärmläsare och lära dig grundläggande tangentbordskommandon.
        Prova att navigera med tangentbordet och en skärmläsare för att få praktisk erfarenhet av hur
        personer med synnedsättning använder webben.
      </p>
    </div>

    <!-- Tab navigation for different screen readers -->
    <div class="mb-8">
      <div class="border-b border-neutral-200">
        <nav class="-mb-px flex space-x-8" aria-label="Skärmläsare">
          <button v-for="tab in screenReaderTabs" :key="tab.id" @click="activeTab = tab.id"
            class="py-2 px-1 border-b-2 font-medium text-base whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            :class="activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'"
            :aria-current="activeTab === tab.id ? 'page' : undefined">
            {{ tab.name }}
          </button>
        </nav>
      </div>
    </div>

    <!-- Shortcuts grid -->
    <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden mb-8">
      <div class="px-6 py-4 bg-primary-light border-b border-neutral-200">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold text-primary">Vanliga kortkommandon för {{ activeScreenReader.name }}</h2>
          <span class="text-sm text-neutral-600">{{ activeScreenReader.platform }}</span>
        </div>
      </div>

      <div class="divide-y divide-neutral-200">
        <div v-for="(category, categoryIndex) in activeScreenReader.shortcutCategories" :key="categoryIndex"
          class="px-6 py-4">
          <h3 class="text-base font-medium text-secondary mb-4">{{ category.name }}</h3>

          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-neutral-200">
              <thead class="bg-neutral-50">
                <tr>
                  <th scope="col"
                    class="px-3 py-2 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider w-1/3">
                    Kommando</th>
                  <th scope="col"
                    class="px-3 py-2 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Funktion
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-neutral-200">
                <tr v-for="(shortcut, shortcutIndex) in category.shortcuts" :key="shortcutIndex"
                  class="hover:bg-neutral-50">
                  <td class="px-3 py-2 whitespace-nowrap">
                    <div class="flex flex-wrap gap-1">
                      <kbd v-for="(key, keyIndex) in formatKeyboardShortcut(shortcut.keys)" :key="keyIndex"
                        class="inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">
                        {{ key }}
                      </kbd>
                    </div>
                  </td>
                  <td class="px-3 py-2 text-sm text-neutral-800">
                    {{ shortcut.description }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Practice area -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Övningsområde</h2>
      <p class="mb-4 text-neutral-600">
        Här kan du öva på att använda skärmläsare med {{ activeScreenReader.name }}.
        Aktivera din skärmläsare och prova kommandona ovan för att navigera i denna struktur.
      </p>

      <div class="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
        <h3 id="practice-heading" class="text-xl font-bold mb-4">Välkommen till övningsområdet</h3>

        <p id="practice-intro" class="mb-6">
          Detta är en övning i att använda skärmläsare. Prova att navigera mellan rubriker, länkar,
          listor och formulärelement. Du kan också prova att läsa innehåll eller söka efter specifik text.
        </p>

        <h4 id="practice-section1" class="text-lg font-semibold mb-2">Navigera mellan rubriker</h4>
        <p class="mb-4">
          Använd <kbd>H</kbd> för att gå till nästa rubrik eller <kbd>1</kbd>-<kbd>6</kbd> för att gå till
          specifika rubriknivåer.
        </p>

        <h4 id="practice-section2" class="text-lg font-semibold mb-2">Utforska länkar</h4>
        <p class="mb-2">Här är några länkar att navigera mellan:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><a href="#"
              @click.prevent="announceAction('Du klickade på länken till Tillgänglighet')">Tillgänglighet</a></li>
          <li><a href="#" @click.prevent="announceAction('Du klickade på länken till Skärmläsare')">Skärmläsare</a></li>
          <li><a href="#"
              @click.prevent="announceAction('Du klickade på länken till Navigeringstips')">Navigeringstips</a></li>
        </ul>

        <h4 id="practice-section3" class="text-lg font-semibold mb-2">Interaktiva element</h4>

        <p id="practice-btn-desc" class="mb-2">Prova att interagera med denna knapp:</p>
        <button @click="toggleExpanded"
          class="mb-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          :aria-expanded="expanded" aria-controls="expandable-section">
          {{ expanded ? 'Dölj mer information' : 'Visa mer information' }}
        </button>

        <div id="expandable-section" v-show="expanded" class="mb-6 p-4 bg-neutral-50 rounded-md">
          <p>Detta extra innehåll visas och döljs när du klickar på knappen ovan. Skärmläsare meddelar när expanderbara
            regioner öppnas och stängs.</p>
        </div>

        <h4 id="practice-section4" class="text-lg font-semibold mb-2">Formulärelement</h4>
        <form @submit.prevent="submitForm" class="mb-6 space-y-4">
          <div>
            <label for="practice-name" class="block text-sm font-medium text-neutral-700 mb-1">Namn</label>
            <input id="practice-name" v-model="formData.name" type="text"
              class="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
              aria-describedby="name-hint" />
            <div id="name-hint" class="mt-1 text-sm text-neutral-600">Ange ditt namn här</div>
          </div>

          <div>
            <fieldset class="border-0 p-0 m-0">
              <legend class="block text-sm font-medium text-neutral-700 mb-1">Vilka hjälpmedel använder du?</legend>
              <div class="space-y-2">
                <div class="flex items-center">
                  <input id="assistive-tech-1" v-model="formData.assistiveTech" type="checkbox" value="screen-reader"
                    class="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded" />
                  <label for="assistive-tech-1" class="ml-2 block text-sm text-neutral-900">Skärmläsare</label>
                </div>
                <div class="flex items-center">
                  <input id="assistive-tech-2" v-model="formData.assistiveTech" type="checkbox" value="magnifier"
                    class="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded" />
                  <label for="assistive-tech-2" class="ml-2 block text-sm text-neutral-900">Skärmförstoring</label>
                </div>
                <div class="flex items-center">
                  <input id="assistive-tech-3" v-model="formData.assistiveTech" type="checkbox" value="keyboard"
                    class="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded" />
                  <label for="assistive-tech-3"
                    class="ml-2 block text-sm text-neutral-900">Tangentbordsnavigering</label>
                </div>
              </div>
            </fieldset>
          </div>

          <div>
            <label for="practice-experience"
              class="block text-sm font-medium text-neutral-700 mb-1">Erfarenhetsnivå</label>
            <select id="practice-experience" v-model="formData.experience"
              class="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary">
              <option value="">Välj en nivå</option>
              <option value="beginner">Nybörjare</option>
              <option value="intermediate">Mellannivå</option>
              <option value="advanced">Avancerad</option>
            </select>
          </div>

          <div>
            <button type="submit"
              class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Skicka
            </button>
          </div>
        </form>

        <h4 id="practice-section5" class="text-lg font-semibold mb-2">En datasamling</h4>
        <p class="mb-2">Prova att navigera i denna tabell:</p>
        <div class="overflow-x-auto mb-6">
          <table class="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <caption class="sr-only">Digital tillgänglighet i olika länder</caption>
            <thead class="bg-neutral-50">
              <tr>
                <th scope="col"
                  class="px-3 py-2 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Land</th>
                <th scope="col"
                  class="px-3 py-2 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Lagstiftning
                </th>
                <th scope="col"
                  class="px-3 py-2 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Standard
                </th>
                <th scope="col"
                  class="px-3 py-2 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Implementeringsår</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-neutral-200">
              <tr>
                <td class="px-3 py-2 whitespace-nowrap text-sm text-neutral-900">Sverige</td>
                <td class="px-3 py-2 whitespace-nowrap text-sm text-neutral-900">DOS-lagen</td>
                <td class="px-3 py-2 whitespace-nowrap text-sm text-neutral-900">WCAG 2.1 AA</td>
                <td class="px-3 py-2 whitespace-nowrap text-sm text-neutral-900">2019</td>
              </tr>
              <tr>
                <td class="px-3 py-2 whitespace-nowrap text-sm text-neutral-900">EU</td>
                <td class="px-3 py-2 whitespace-nowrap text-sm text-neutral-900">Web Accessibility Directive</td>
                <td class="px-3 py-2 whitespace-nowrap text-sm text-neutral-900">EN 301 549</td>
                <td class="px-3 py-2 whitespace-nowrap text-sm text-neutral-900">2016</td>
              </tr>
              <tr>
                <td class="px-3 py-2 whitespace-nowrap text-sm text-neutral-900">USA</td>
                <td class="px-3 py-2 whitespace-nowrap text-sm text-neutral-900">Section 508</td>
                <td class="px-3 py-2 whitespace-nowrap text-sm text-neutral-900">WCAG 2.0 AA</td>
                <td class="px-3 py-2 whitespace-nowrap text-sm text-neutral-900">2018</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Live region for announcements -->
    <div aria-live="polite" class="sr-only">
      {{ announcement }}
    </div>

    <!-- Feedback area -->
    <div v-if="submitMessage" :class="[submitSuccess ? 'bg-green-50' : 'bg-amber-50', 'p-4 rounded-md mb-8']">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg v-if="submitSuccess" class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <svg v-else class="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
            </path>
          </svg>
        </div>
        <div class="ml-3">
          <p :class="[submitSuccess ? 'text-green-800' : 'text-amber-800', 'text-sm font-medium']">
            {{ submitMessage }}
          </p>
        </div>
      </div>
    </div>

    <!-- Tips and next steps -->
    <div class="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
      <h2 class="text-xl font-bold mb-4">Tips för att komma vidare</h2>
      <ul class="space-y-2 mb-6">
        <li class="flex items-start">
          <svg class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Experimentera med tangentbordskommandona för att bli bekväm med dem.</span>
        </li>
        <li class="flex items-start">
          <svg class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Besök våra guider för <NuxtLink to="/skärmläsare/nvda" class="text-primary hover:underline">NVDA
            </NuxtLink>, <NuxtLink to="/skärmläsare/jaws" class="text-primary hover:underline">JAWS</NuxtLink> eller
            <NuxtLink to="/skärmläsare/voiceover" class="text-primary hover:underline">VoiceOver</NuxtLink> för mer
            detaljerade instruktioner.</span>
        </li>
        <li class="flex items-start">
          <svg class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Testa att besöka olika webbplatser och analysera deras tillgänglighet med din skärmläsare.</span>
        </li>
      </ul>

      <NuxtLink to="/testning" class="inline-flex items-center text-primary hover:underline">
        <span>Utforska våra tillgänglighetstestningsguider</span>
        <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Set page metadata
useSeoMeta({
  title: 'Öva på skärmläsarnavigation - T12T',
  description: 'Lär dig hur du använder skärmläsare genom praktiska övningar och exempel. Perfekt för nybörjare och de som vill förbättra sina färdigheter i tillgänglighetstestning.'
})

// Tabs for different screen readers
const screenReaderTabs = [
  { id: 'nvda', name: 'NVDA' },
  { id: 'voiceover', name: 'VoiceOver' },
  { id: 'jaws', name: 'JAWS' }
]

// Active tab state
const activeTab = ref('nvda')

// Screen reader data
const screenReaderData = {
  nvda: {
    name: 'NVDA',
    platform: 'Windows',
    shortcutCategories: [
      {
        name: 'Grundläggande navigation',
        shortcuts: [
          { keys: 'NVDA+Mellanslag', description: 'Starta/stoppa läsning' },
          { keys: 'Ctrl', description: 'Avbryt läsning' },
          { keys: 'NVDA+F7', description: 'Öppna elementlistor (rubriker, länkar, etc.)' },
          { keys: 'Tab', description: 'Navigera till nästa interaktiva element' },
          { keys: 'Shift+Tab', description: 'Navigera till föregående interaktiva element' }
        ]
      },
      {
        name: 'Elementnavigation',
        shortcuts: [
          { keys: 'H', description: 'Hoppa till nästa rubrik' },
          { keys: 'Shift+H', description: 'Hoppa till föregående rubrik' },
          { keys: '1-6', description: 'Hoppa till rubriknivå 1-6' },
          { keys: 'K', description: 'Hoppa till nästa länk' },
          { keys: 'F', description: 'Hoppa till nästa formulärelement' },
          { keys: 'T', description: 'Hoppa till nästa tabell' },
          { keys: 'B', description: 'Hoppa till nästa knapp' }
        ]
      }
    ]
  },
  voiceover: {
    name: 'VoiceOver',
    platform: 'macOS',
    shortcutCategories: [
      {
        name: 'Grundläggande navigation',
        shortcuts: [
          { keys: 'VO+A', description: 'Läs allt från nuvarande position' },
          { keys: 'Ctrl', description: 'Stoppa läsning' },
          { keys: 'VO+U', description: 'Öppna rotorn (för att välja element)' },
          { keys: 'Tab', description: 'Navigera till nästa interaktiva element' },
          { keys: 'Shift+Tab', description: 'Navigera till föregående interaktiva element' }
        ]
      },
      {
        name: 'Elementnavigation',
        shortcuts: [
          { keys: 'VO+Cmd+H', description: 'Hoppa till nästa rubrik' },
          { keys: 'VO+Cmd+Shift+H', description: 'Hoppa till föregående rubrik' },
          { keys: 'VO+Cmd+L', description: 'Hoppa till nästa länk' },
          { keys: 'VO+Cmd+F', description: 'Hoppa till nästa formulärelement' },
          { keys: 'VO+Cmd+T', description: 'Hoppa till nästa tabell' },
          { keys: 'VO+Höger pil', description: 'Gå till nästa element' }
        ]
      }
    ]
  },
  jaws: {
    name: 'JAWS',
    platform: 'Windows',
    shortcutCategories: [
      {
        name: 'Grundläggande navigation',
        shortcuts: [
          { keys: 'Insert+Nedpil', description: 'Läs allt från nuvarande position' },
          { keys: 'Ctrl', description: 'Stoppa läsning' },
          { keys: 'Insert+F10', description: 'Öppna elementlista' },
          { keys: 'Tab', description: 'Navigera till nästa interaktiva element' },
          { keys: 'Shift+Tab', description: 'Navigera till föregående interaktiva element' }
        ]
      },
      {
        name: 'Elementnavigation',
        shortcuts: [
          { keys: 'H', description: 'Hoppa till nästa rubrik' },
          { keys: 'Shift+H', description: 'Hoppa till föregående rubrik' },
          { keys: '1-6', description: 'Hoppa till rubriknivå 1-6' },
          { keys: 'K', description: 'Hoppa till nästa länk' },
          { keys: 'F', description: 'Hoppa till nästa formulärelement' },
          { keys: 'T', description: 'Hoppa till nästa tabell' }
        ]
      }
    ]
  }
}

// Computed property to get active screen reader data
const activeScreenReader = computed(() => {
  return screenReaderData[activeTab.value]
})

// Form data for practice area
const formData = ref({
  name: '',
  assistiveTech: [],
  experience: ''
})

// State for interactive elements
const expanded = ref(false)
const toggleExpanded = () => {
  expanded.value = !expanded.value
  announceAction(expanded.value ? 'Mer information har visats' : 'Mer information har dolts')
}

// Form submission
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitForm = () => {
  if (!formData.value.name) {
    submitMessage.value = 'Vänligen ange ditt namn'
    submitSuccess.value = false
    announceAction('Formuläret kunde inte skickas. Vänligen ange ditt namn.')
    return
  }

  submitMessage.value = 'Tack för ditt bidrag!'
  submitSuccess.value = true
  announceAction('Formuläret har skickats framgångsrikt. Tack för ditt bidrag!')

  // Reset form after successful submission
  setTimeout(() => {
    formData.value = {
      name: '',
      assistiveTech: [],
      experience: ''
    }
  }, 1000)
}

// Live region for screen reader announcements
const announcement = ref('')

const announceAction = (message) => {
  announcement.value = message

  // Clear announcement after a short time
  setTimeout(() => {
    announcement.value = ''
  }, 5000)
}

// Format keyboard shortcuts for display
const formatKeyboardShortcut = (shortcut) => {
  if (!shortcut.includes('+')) {
    return [shortcut]
  }

  return shortcut.split('+').map(key => key.trim())
}
</script>