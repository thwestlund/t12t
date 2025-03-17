<template>
  <div>
    <h1 class="text-3xl md:text-4xl font-bold mb-4">Jämförelse av skärmläsare</h1>
    <p class="text-lg text-neutral-600 mb-8">
      En detaljerad jämförelse av populära skärmläsare så att du kan välja rätt verktyg
      för testning och utveckling av tillgängliga webbplatser.
    </p>

    <div class="mb-12">
      <ComparisonTable title="Skärmläsare - funktionsjämförelse"
        description="Jämför funktioner och egenskaper hos olika skärmläsare för tillgänglighetstestning"
        :items="screenReaders" :features="screenReaderFeatures" :comparisons="screenReaderComparisons"
        :categories="featureCategories" featureColumnName="Funktion/Egenskap" />
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 mb-12">
      <h2 class="text-2xl font-bold mb-4">Vanliga frågor om skärmläsare</h2>

      <Faq :faqs="frequentlyAskedQuestions" />
    </div>

    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Skärmläsare genom historien</h2>
      <p class="text-neutral-600 mb-6">
        Skärmläsare har utvecklats avsevärt genom åren. Här är en översikt över de viktigaste
        händelserna i utvecklingen av dessa viktiga hjälpmedel.
      </p>

      <AccessibilityTimeline title="Skärmläsares utveckling" :events="timelineEvents"
        :categories="timelineCategories" />
    </div>

    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Nedladdningsbara skärmläsarresurser</h2>
      <p class="text-neutral-600 mb-6">
        Här hittar du guider, översikter och referenskort som kan hjälpa dig att komma igång med
        att använda skärmläsare för tillgänglighetstestning.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DownloadResource title="NVDA Snabbstartsguide"
          description="En kortfattad guide för att komma igång med NVDA skärmläsare för Windows." type="pdf"
          fileSize="1.2 MB" downloadUrl="/resurser/nvda-snabbstartsguide.pdf" date="2025-02-15"
          :tags="['NVDA', 'Windows', 'Guide']" author="T12T-teamet" color="blue" />

        <DownloadResource title="VoiceOver Kortkommandon"
          description="Referenskort med alla viktiga kortkommandon för VoiceOver på macOS och iOS." type="pdf"
          fileSize="842 KB" downloadUrl="/resurser/voiceover-kortkommandon.pdf" date="2025-01-20"
          :tags="['VoiceOver', 'macOS', 'iOS', 'Kortkommandon']" author="T12T-teamet" color="green" />

        <DownloadResource title="Skärmläsartestningsschema"
          description="Mall för att planera och dokumentera skärmläsartester på din webbplats." type="template"
          fileSize="354 KB" downloadUrl="/resurser/skarmlasar-testningsschema.xlsx" date="2025-03-01"
          :tags="['Testning', 'Mall', 'Excel']" author="T12T-teamet" color="amber" />
      </div>
    </div>

    <!--div class="bg-primary-light rounded-lg p-8 mb-12">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:flex-1 mb-6 md:mb-0 md:mr-8">
          <h2 class="text-2xl font-bold text-secondary mb-4">Testa själv med skärmläsare</h2>
          <p class="text-neutral-700 mb-6">
            Vill du få praktisk erfarenhet av att använda skärmläsare? Testa vår interaktiva
            övningssida där du kan lära dig grundläggande navigation och kommandona för olika
            skärmläsare i en säker miljö.
          </p>
          <NuxtLink to="/skärmläsare/ovning"
            class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Öva skärmläsarnavigation
          </NuxtLink>
        </div>
        <div class="md:flex-1">
          <img src="/images/screenreader-practice.svg" alt="Illustration av person som använder skärmläsare"
            class="w-full max-w-md mx-auto" />
        </div>
      </div>
    </div-->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import ComparisonTable from '~/components/ComparisonTable.vue'
import Faq from '~/components/Faq.vue'
import AccessibilityTimeline from '~/components/AccessibilityTimeline.vue'
import DownloadResource from '~/components/DownloadResource.vue'

const route = useRoute()

// SEO metadata
useSeoMeta({
  title: 'Jämförelse av skärmläsare - T12T',
  description: 'Jämför funktioner, plattformar och användbarhet hos populära skärmläsare som NVDA, JAWS, VoiceOver och TalkBack för tillgänglighetstestning.',
})

// Data for comparison table
const screenReaders = [
  {
    id: 'nvda',
    name: 'NVDA',
    description: 'NonVisual Desktop Access',
    logo: '/images/nvda-logo.png'
  },
  {
    id: 'jaws',
    name: 'JAWS',
    description: 'Job Access With Speech',
    logo: '/images/jaws-logo.png'
  },
  {
    id: 'voiceover',
    name: 'VoiceOver',
    description: 'Apple VoiceOver',
    logo: '/images/voiceover-logo.png'
  },
  {
    id: 'talkback',
    name: 'TalkBack',
    description: 'Google TalkBack',
    logo: '/images/talkback-logo.png'
  },
  {
    id: 'narrator',
    name: 'Narrator',
    description: 'Microsoft Narrator',
    logo: '/images/narrator-logo.png'
  }
]

const featureCategories = [
  { value: 'platform', label: 'Plattform' },
  { value: 'navigation', label: 'Navigation' },
  { value: 'browsing', label: 'Webbläsning' },
  { value: 'advanced', label: 'Avancerade funktioner' },
  { value: 'customization', label: 'Anpassning' },
  { value: 'development', label: 'Utveckling' }
]

const screenReaderFeatures = [
  {
    id: 'platforms',
    name: 'Plattformar',
    description: 'Operativsystem som stöds',
    category: 'platform'
  },
  {
    id: 'cost',
    name: 'Kostnad',
    description: 'Prissättning och licens',
    category: 'platform'
  },
  {
    id: 'browser-compatibility',
    name: 'Webbläsarkompatibilitet',
    description: 'Fungerar bäst med dessa webbläsare',
    category: 'platform'
  },
  {
    id: 'element-navigation',
    name: 'Elementnavigation',
    description: 'Navigering mellan olika typer av element',
    category: 'navigation'
  },
  {
    id: 'reading-modes',
    name: 'Läslägen',
    description: 'Olika läslägen för olika situationer',
    category: 'navigation'
  },
  {
    id: 'heading-navigation',
    name: 'Rubriknavigation',
    description: 'Navigering mellan och inom rubriknivåer',
    category: 'navigation'
  },
  {
    id: 'form-support',
    name: 'Formulärstöd',
    description: 'Hantering av formulärelement',
    category: 'browsing'
  },
  {
    id: 'table-navigation',
    name: 'Tabellnavigation',
    description: 'Navigering i tabeller',
    category: 'browsing'
  },
  {
    id: 'aria-support',
    name: 'ARIA-stöd',
    description: 'Stöd för ARIA-landmärken och roller',
    category: 'browsing'
  },
  {
    id: 'braille-support',
    name: 'Punktskriftsstöd',
    description: 'Stöd för punktskriftsdisplayer',
    category: 'advanced'
  },
  {
    id: 'speech-customization',
    name: 'Talanpassning',
    description: 'Möjligheter att anpassa tal och röst',
    category: 'customization'
  },
  {
    id: 'scripting',
    name: 'Scriptmöjligheter',
    description: 'Möjlighet att skapa skript och anpassningar',
    category: 'development'
  },
  {
    id: 'developer-tools',
    name: 'Utvecklarverktyg',
    description: 'Verktyg för utvecklare och testare',
    category: 'development'
  },
  {
    id: 'ease-of-testing',
    name: 'Testningsvänlighet',
    description: 'Hur enkelt det är att använda för tillgänglighetstestning',
    category: 'development'
  }
]

// Comparison data for the screen readers
const screenReaderComparisons = {
  'nvda': {
    'platforms': 'Windows',
    'cost': 'Gratis, öppen källkod',
    'browser-compatibility': 'Firefox, Chrome, Edge',
    'element-navigation': {
      rating: 5,
      note: 'Utmärkt stöd för olika element med enkla snabbkommandon'
    },
    'reading-modes': {
      text: 'Bläddring, Fokus, Granskning',
      note: 'Flera läslägen med möjlighet att konfigurera'
    },
    'heading-navigation': true,
    'form-support': { rating: 4 },
    'table-navigation': { rating: 5 },
    'aria-support': { rating: 5 },
    'braille-support': true,
    'speech-customization': { rating: 4 },
    'scripting': {
      text: 'Python',
      note: 'Robust stöd för Python-baserade tillägg'
    },
    'developer-tools': true,
    'ease-of-testing': {
      rating: 5,
      note: 'Utmärkt för utvecklingstestning'
    }
  },
  'jaws': {
    'platforms': 'Windows',
    'cost': 'Kommersiell (från cirka 9000 SEK)',
    'browser-compatibility': 'Internet Explorer, Chrome, Firefox, Edge',
    'element-navigation': { rating: 5 },
    'reading-modes': { text: 'Bläddring, Formulär, Virtuell markör' },
    'heading-navigation': true,
    'form-support': { rating: 5 },
    'table-navigation': { rating: 5 },
    'aria-support': { rating: 5 },
    'braille-support': true,
    'speech-customization': { rating: 5 },
    'scripting': {
      text: 'Jaws Script',
      note: 'Kraftfullt men komplext scriptspråk'
    },
    'developer-tools': true,
    'ease-of-testing': {
      rating: 4,
      note: 'Kraftfullt men kostsamt'
    }
  },
  'voiceover': {
    'platforms': 'macOS, iOS, iPadOS, tvOS, watchOS',
    'cost': 'Ingår i operativsystemet',
    'browser-compatibility': 'Safari, Chrome (begränsat)',
    'element-navigation': { rating: 4 },
    'reading-modes': { text: 'Objektnavigation, Rotorn' },
    'heading-navigation': true,
    'form-support': { rating: 4 },
    'table-navigation': { rating: 4 },
    'aria-support': { rating: 4 },
    'braille-support': true,
    'speech-customization': { rating: 3 },
    'scripting': { text: 'Begränsat', note: 'Inga direkta scriptmöjligheter' },
    'developer-tools': {
      text: 'Accessibility Inspector',
      note: 'Integrerat med Xcode'
    },
    'ease-of-testing': {
      rating: 3,
      note: 'Bra för Apple-produkter'
    }
  },
  'talkback': {
    'platforms': 'Android',
    'cost': 'Ingår i operativsystemet',
    'browser-compatibility': 'Chrome',
    'element-navigation': { rating: 3 },
    'reading-modes': { text: 'Svepgester, Utforskning' },
    'heading-navigation': true,
    'form-support': { rating: 3 },
    'table-navigation': { rating: 3 },
    'aria-support': { rating: 3 },
    'braille-support': true,
    'speech-customization': { rating: 3 },
    'scripting': false,
    'developer-tools': {
      text: 'Accessibility Scanner',
      note: 'Separat app'
    },
    'ease-of-testing': {
      rating: 3,
      note: 'Bra för mobila appar'
    }
  },
  'narrator': {
    'platforms': 'Windows 10/11',
    'cost': 'Ingår i operativsystemet',
    'browser-compatibility': 'Edge, bättre stöd för UWP-appar',
    'element-navigation': { rating: 3 },
    'reading-modes': { text: 'Skanningsläge, Navigeringsläge' },
    'heading-navigation': true,
    'form-support': { rating: 3 },
    'table-navigation': { rating: 3 },
    'aria-support': { rating: 3 },
    'braille-support': true,
    'speech-customization': { rating: 3 },
    'scripting': false,
    'developer-tools': {
      text: 'Accessibility Insights',
      note: 'Separat verktyg från Microsoft'
    },
    'ease-of-testing': {
      rating: 2,
      note: 'Förbättras men mindre använt för testning'
    }
  }
}

// FAQ data
const frequentlyAskedQuestions = [
  {
    question: "Vilken skärmläsare bör jag använda för tillgänglighetstestning?",
    answer: "För professionell tillgänglighetstestning rekommenderar vi att testa med flera skärmläsare eftersom användare använder olika verktyg. För Windows rekommenderar vi NVDA som förstaval eftersom det är gratis, kraftfullt och har ett stort användarantal. För Mac är VoiceOver det självklara valet, och för mobil testning bör du använda både VoiceOver (iOS) och TalkBack (Android)."
  },
  {
    question: "Måste jag köpa JAWS för att göra tillgänglighetstester?",
    answer: "Nej, du behöver inte köpa JAWS för grundläggande tillgänglighetstestning. NVDA är ett gratis alternativ som erbjuder liknande funktionalitet. JAWS är dock fortfarande populär i företagsmiljöer och bland professionella användare, så för vissa specifika situationer kan det vara värdefullt att testa med JAWS. Det finns en demoversion av JAWS som fungerar i 40 minuter per systemomstart, vilket kan vara tillräckligt för testning."
  },
  {
    question: "Hur mycket tid behöver jag lägga på att lära mig en skärmläsare?",
    answer: "Grundläggande navigering med skärmläsare kan läras på några timmar. För att bli bekväm med att använda en skärmläsare för testning, rekommenderar vi att lägga 2-3 dagar på att öva med verktyget. Fokusera först på att lära dig grundläggande navigering (rubriker, länkar, formulär) och expandera sedan till mer avancerade funktioner. Vår övningssida är ett bra ställe att börja."
  },
  {
    question: "Hur skiljer sig skärmläsare på desktop från mobila enheter?",
    answer: "Mobila skärmläsare som VoiceOver (iOS) och TalkBack (Android) använder främst gester för navigering, medan desktop-skärmläsare som NVDA och JAWS primärt använder tangentbordsgenvägar. Mobila skärmläsare har ofta färre anpassningsmöjligheter och är mer integrerade med operativsystemet. Desktop-skärmläsare erbjuder vanligtvis mer detaljerad kontroll och konfigurationsmöjligheter."
  },
  {
    question: "Hur kan jag aktivera/inaktivera en skärmläsare snabbt under testning?",
    answer: "För varje skärmläsare: \n- NVDA: Tryck NVDA+Q för att avsluta, eller kör NVDA-programmet för att starta\n- JAWS: Tryck JAWSKey+F4 för att avsluta, eller kör JAWS-programmet för att starta\n- VoiceOver (macOS): Tryck Cmd+F5 för att slå på/av\n- Narrator (Windows): Tryck Windows+Ctrl+Enter för att slå på/av\n- TalkBack (Android): Håll nere båda volymknapparna i 3 sekunder\n- VoiceOver (iOS): Trippelklicka på Hemknappen (eller sidoknappen på nyare modeller)"
  }
]

// Timeline data
const timelineCategories = [
  { value: 'tool', label: 'Hjälpmedel' },
  { value: 'milestone', label: 'Milstolpe' },
  { value: 'standard', label: 'Standard' }
]

const timelineEvents = [
  {
    title: 'OutSpoken för Macintosh',
    date: '1989',
    description: 'En av de första kommersiella skärmläsarna för personer med synnedsättning lanserades för Macintosh-datorer.',
    category: 'tool'
  },
  {
    title: 'JAWS for DOS',
    date: '1989',
    description: 'Job Access With Speech (JAWS) lanserades för DOS av Ted Henter, en blind programmerare.',
    category: 'tool'
  },
  {
    title: 'JAWS for Windows',
    date: '1995',
    description: 'JAWS anpassades för Windows-miljön och blev snabbt den ledande skärmläsaren för plattformen.',
    category: 'tool'
  },
  {
    title: 'VoiceOver introduceras i Mac OS X Tiger',
    date: '2005',
    description: 'Apple inkluderade VoiceOver direkt i operativsystemet, vilket markerade en viktig milstolpe för inbyggd tillgänglighet.',
    category: 'milestone'
  },
  {
    title: 'NVDA lanseras',
    date: '2006',
    description: 'NonVisual Desktop Access (NVDA) släpptes som ett gratis, öppen källkod-alternativ till kommersiella skärmläsare, vilket gjorde tillgänglighetsteknologi mer tillgänglig globalt.',
    category: 'tool'
  },
  {
    title: 'VoiceOver kommer till iPhone',
    date: '2009',
    description: 'Med iOS 3 introducerade Apple VoiceOver på iPhone, vilket revolutionerade tillgängligheten för smarta telefoner.',
    category: 'milestone'
  },
  {
    title: 'TalkBack integreras i Android',
    date: '2009',
    description: 'Google började integrera TalkBack som standard i Android-enheter, vilket förbättrade tillgängligheten för Android-plattformen.',
    category: 'tool'
  },
  {
    title: 'ARIA 1.0 blir W3C-rekommendation',
    date: '2014',
    description: 'Accessible Rich Internet Applications (ARIA) 1.0 blev en officiell W3C-rekommendation, vilket förbättrade samspelet mellan webbapplikationer och skärmläsare.',
    category: 'standard'
  },
  {
    title: 'Microsoft Narrator förbättras avsevärt',
    date: '2017',
    description: 'Med Windows 10 Fall Creators Update genomgick Microsoft Narrator betydande förbättringar som gjorde det till ett mer kapabelt tillgänglighetsverktyg.',
    category: 'tool'
  },
  {
    title: 'NVDA når 100 miljoner nedladdningar',
    date: '2022',
    description: 'NVDA-projektet rapporterade över 100 miljoner nedladdningar, vilket visar den enorma påverkan som gratis tillgänglighetsmjukvara har haft globalt.',
    category: 'milestone'
  }
]
</script>