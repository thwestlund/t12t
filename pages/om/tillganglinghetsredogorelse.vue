<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-bold mb-6">Tillgänglighetsredogörelse</h1>

    <div class="prose max-w-none">
      <p class="lead text-lg text-neutral-700 mb-8">
        T12T strävar efter att göra sin webbplats tillgänglig i enlighet med lagen om tillgänglighet till
        digital offentlig service samt att följa Web Content Accessibility Guidelines (WCAG) 2.2 på AA-nivå.
      </p>

      <section class="mb-10">
        <h2>Hur tillgänglig är vår webbplats?</h2>
        <p>
          Vår webbplats är till största delen förenlig med WCAG 2.2 AA-nivå. Vi arbetar kontinuerligt med
          att förbättra tillgängligheten och åtgärda eventuella brister. Nedan beskriver vi status för
          webbplatsens tillgänglighet och kända begränsningar.
        </p>
      </section>

      <section class="mb-10">
        <h2>Vad vi gör för tillgänglighet</h2>
        <p>
          För att säkerställa god tillgänglighet har vi vidtagit följande åtgärder:
        </p>
        <ul>
          <li>Implementerat en tydlig och konsekvent navigationsstruktur</li>
          <li>Säkerställt korrekt rubrikstruktur och semantiska HTML-element</li>
          <li>Designat sidan med tillräcklig kontrast mellan text och bakgrund</li>
          <li>Tillhandahåller textalternativ för icke-textbaserat innehåll</li>
          <li>Säkerställt att sidan är fullt navigerbar med tangentbord</li>
          <li>Testat kompatibilitet med vanliga skärmläsare (NVDA, VoiceOver, JAWS)</li>
          <li>Implementerat responsiv design för olika skärmstorlekar</li>
          <li>Skapat tydliga och beskrivande länktexter</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2>Rapportera tillgänglighetsproblem</h2>
        <p>
          Vi är tacksamma för feedback som hjälper oss att förbättra webbplatsens tillgänglighet.
          Om du upptäcker problem som inte är beskrivna på denna sida, eller om du anser att vi inte
          uppfyller kraven i lagen, vänligen kontakta oss.
        </p>
        <p>
          Du kan rapportera problem genom att:
        </p>
        <ul>
          <li>Skicka e-post till <a href="mailto:thommy@forge-it.se">thommy@forge-it.se</a></li>
          <li>Använda <NuxtLink to="/om/kontakt">kontaktformuläret</NuxtLink> på vår webbplats</li>
          <li>Skapa ett ärende i vårt <a href="https://github.com/t12t/website/issues">GitHub-repo</a></li>
        </ul>
      </section>

      <section class="mb-10">
        <h2>Kända begränsningar</h2>
        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
          <p class="text-amber-700">
            Denna sektion uppdateras regelbundet allt eftersom vi identifierar och åtgärdar tillgänglighetsproblem.
            Senast uppdaterad: {{ formatDate(new Date()) }}
          </p>
        </div>

        <h3>Innehåll som inte omfattas av tillgänglighetsriktlinjerna</h3>
        <p>
          Följande innehåll omfattas inte av tillgänglighetslagstiftningen och kan ha begränsad tillgänglighet:
        </p>
        <ul>
          <li>Vissa äldre PDF-dokument som publicerades före september 2020</li>
          <li>Tredjepartsinnehåll som varken har finansierats eller utvecklats av T12T</li>
          <li>Inspelade videoföreläsningar skapade före den 23 september 2020</li>
        </ul>

        <h3>Kända tillgänglighetsproblem</h3>
        <table class="min-w-full border-collapse border border-neutral-300 mb-6">
          <thead>
            <tr class="bg-neutral-50">
              <th class="border border-neutral-300 px-4 py-2 text-left">Problem</th>
              <th class="border border-neutral-300 px-4 py-2 text-left">WCAG-referens</th>
              <th class="border border-neutral-300 px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(issue, index) in accessibilityIssues" :key="index" class="hover:bg-neutral-50">
              <td class="border border-neutral-300 px-4 py-2">{{ issue.description }}</td>
              <td class="border border-neutral-300 px-4 py-2">
                <a :href="issue.wcagLink" target="_blank" rel="noopener" class="text-primary hover:underline">
                  {{ issue.wcagReference }}
                </a>
              </td>
              <td class="border border-neutral-300 px-4 py-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  :class="getStatusClass(issue.status)">
                  {{ issue.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="mb-10">
        <h2>Tillgänglighetstester</h2>
        <p>
          Vår webbplats har testats med följande metoder:
        </p>
        <ul>
          <li>Manuell testning med NVDA, VoiceOver och JAWS skärmläsare</li>
          <li>Automatisk testning med axe DevTools, WAVE och Lighthouse</li>
          <li>Tangentbordsnavigationstester</li>
          <li>Kontrastkontroll för färger</li>
          <li>Testning vid olika förstoringsgrader (200%)</li>
          <li>Strukturanalys av HTML och ARIA</li>
        </ul>
        <p>
          Senaste grundliga tillgänglighetstestet genomfördes den 12 mars 2025.
        </p>
      </section>

      <section class="mb-10">
        <h2>Förbättringsplan</h2>
        <p>
          Vi arbetar kontinuerligt med att förbättra webbplatsens tillgänglighet.
          Här är vår nuvarande förbättringsplan:
        </p>
        <ul>
          <li>Förbättra skärmläsarkompatibilitet i kodexempel (planerat Q2 2025)</li>
          <li>Texta alla videoklipp (löpande)</li>
          <li>Förbättra navigation i komplexa tabeller (planerat Q2 2025)</li>
          <li>Implementera bättre fokushantering i interaktiva demo-komponenter (planerat Q2 2025)</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2>Tillsynsmyndighet</h2>
        <p>
          Om du inte är nöjd med hur vi hanterar dina synpunkter kring tillgänglighetsproblem
          kan du kontakta <a href="https://www.digg.se/" target="_blank" rel="noopener">Myndigheten för digital
            förvaltning (DIGG)</a>,
          som ansvarar för tillsyn över lagen om tillgänglighet till digital offentlig service.
        </p>
      </section>
    </div>

    <!-- Related content -->
    <div class="mt-12 pt-8 border-t border-neutral-200">
      <h2 class="text-2xl font-semibold mb-6">Relaterade resurser</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <NuxtLink to="/testning" class="block p-6 h-full hover:no-underline">
            <h3 class="text-lg font-semibold mb-2 text-secondary hover:text-primary">Tillgänglighetstestning</h3>
            <p class="text-neutral-600 text-sm">Lär dig hur du testar digitala lösningar för tillgänglighet med olika
              metoder och verktyg.</p>
          </NuxtLink>
        </div>
        <div class="border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <NuxtLink to="/kunskapsbank/lagstiftning" class="block p-6 h-full hover:no-underline">
            <h3 class="text-lg font-semibold mb-2 text-secondary hover:text-primary">Tillgänglighetslagstiftning</h3>
            <p class="text-neutral-600 text-sm">Information om lagar och regler som påverkar digital tillgänglighet i
              Sverige och EU.</p>
          </NuxtLink>
        </div>
        <div class="border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <NuxtLink to="/om/kontakt" class="block p-6 h-full hover:no-underline">
            <h3 class="text-lg font-semibold mb-2 text-secondary hover:text-primary">Kontakta oss</h3>
            <p class="text-neutral-600 text-sm">Har du frågor eller synpunkter om tillgänglighet? Kontakta oss för hjälp
              och vägledning.</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO metadata
/*useSeoMeta({
  title: 'Tillgänglighetsredogörelse - T12T',
  description: 'Information om T12T webbplatsens tillgänglighet, kända begränsningar och förbättringsplan i enlighet med WCAG 2.2.',
})*/

// Sample data for known accessibility issues
const accessibilityIssues = [
  {
    description: 'Vissa kodexempel saknar tillräcklig kontrast',
    wcagReference: '1.4.3 Kontrast (minimum)',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html',
    status: 'Under åtgärd'
  },
  {
    description: 'Interaktiva demokomponenter kan förbättras för tangentbordsanvändare',
    wcagReference: '2.1.1 Tangentbord',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html',
    status: 'Planerad'
  },
  {
    description: 'Äldre videomaterial saknar undertexter',
    wcagReference: '1.2.2 Textning (förinspelad)',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html',
    status: 'Pågående'
  },
  {
    description: 'PDF-dokument från 2019 saknar korrekt taggning',
    wcagReference: '4.1.2 Namn, roll, värde',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html',
    status: 'Undantag'
  }
]

// Helper functions
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('sv-SE', options)
}

const getStatusClass = (status) => {
  const statusClasses = {
    'Åtgärdad': 'bg-green-100 text-green-800',
    'Under åtgärd': 'bg-amber-100 text-amber-800',
    'Planerad': 'bg-blue-100 text-blue-800',
    'Pågående': 'bg-purple-100 text-purple-800',
    'Undantag': 'bg-neutral-100 text-neutral-800'
  }

  return statusClasses[status] || 'bg-neutral-100 text-neutral-800'
}
</script>