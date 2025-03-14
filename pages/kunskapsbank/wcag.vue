<template>
  <div>
    <h1 class="text-3xl md:text-4xl font-bold mb-4">WCAG - Riktlinjer för webbtillgänglighet</h1>
    <p class="text-lg text-neutral-600 mb-8">
      Web Content Accessibility Guidelines (WCAG) är en internationell standard som
      ger riktlinjer för hur man gör webbinnehåll tillgängligt för personer med funktionsnedsättningar.
    </p>

    <!-- WCAG Overview Section -->
    <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-12">
      <h2 class="text-2xl font-bold mb-4">Vad är WCAG?</h2>
      <p class="mb-4">
        WCAG, eller Web Content Accessibility Guidelines, utvecklas av World Wide Web Consortium (W3C)
        genom Accessibility Guidelines Working Group (AG WG). Riktlinjerna utgör grunden för
        de flesta tillgänglighetslagar och standarder över hela världen, inklusive DOS-lagen i Sverige.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 class="text-xl font-semibold mb-3">WCAG:s struktur</h3>
          <p class="mb-3">
            WCAG är organiserad kring fyra grundläggande principer, often kallade "POUR":
          </p>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Perceivable (Möjlig att uppfatta)</strong> - Information och användargränssnitt måste
              presenteras på sätt som användare kan uppfatta.</li>
            <li><strong>Operable (Hanterbar)</strong> - Användargränssnittet och navigeringen måste vara hanterbara.
            </li>
            <li><strong>Understandable (Begriplig)</strong> - Information och hanteringen av användargränssnittet måste
              vara begriplig.</li>
            <li><strong>Robust (Robust)</strong> - Innehållet måste vara robust nog för att kunna tolkas av olika
              användaragenter, inklusive hjälpmedel.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-3">Efterlevnadsnivåer</h3>
          <p class="mb-3">
            WCAG har tre nivåer av efterlevnad:
          </p>
          <div class="space-y-4 mb-4">
            <div class="flex items-start">
              <WcagLevelBadge level="A" class="mt-1 mr-3" />
              <div>
                <p class="font-medium">Nivå A (Minimal)</p>
                <p class="text-sm text-neutral-600">Grundläggande tillgänglighetskrav som måste uppfyllas för att
                  innehållet inte ska vara otillgängligt för många användare.</p>
              </div>
            </div>
            <div class="flex items-start">
              <WcagLevelBadge level="AA" class="mt-1 mr-3" />
              <div>
                <p class="font-medium">Nivå AA (Acceptabel)</p>
                <p class="text-sm text-neutral-600">Den nivå som de flesta organisationer bör sträva efter och som de
                  flesta tillgänglighetslagar (inklusive DOS-lagen) kräver.</p>
              </div>
            </div>
            <div class="flex items-start">
              <WcagLevelBadge level="AAA" class="mt-1 mr-3" />
              <div>
                <p class="font-medium">Nivå AAA (Optimal)</p>
                <p class="text-sm text-neutral-600">Högsta nivån av tillgänglighet, som kan vara svår att uppnå för hela
                  webbplatser men är ett bra mål för specifika innehållstyper.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-xl font-semibold mb-3">Versioner av WCAG</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full border-collapse border border-neutral-300">
            <thead>
              <tr class="bg-neutral-50">
                <th class="border border-neutral-300 px-4 py-2 text-left">Version</th>
                <th class="border border-neutral-300 px-4 py-2 text-left">Publicerad</th>
                <th class="border border-neutral-300 px-4 py-2 text-left">Viktiga ändringar</th>
                <th class="border border-neutral-300 px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-neutral-300 px-4 py-2">WCAG 1.0</td>
                <td class="border border-neutral-300 px-4 py-2">Maj 1999</td>
                <td class="border border-neutral-300 px-4 py-2">Första versionen, fokuserad på HTML</td>
                <td class="border border-neutral-300 px-4 py-2">Föråldrad</td>
              </tr>
              <tr>
                <td class="border border-neutral-300 px-4 py-2">WCAG 2.0</td>
                <td class="border border-neutral-300 px-4 py-2">December 2008</td>
                <td class="border border-neutral-300 px-4 py-2">Teknikoberoende, introducerade de fyra principerna</td>
                <td class="border border-neutral-300 px-4 py-2">Giltig, ISO-standard</td>
              </tr>
              <tr>
                <td class="border border-neutral-300 px-4 py-2">WCAG 2.1</td>
                <td class="border border-neutral-300 px-4 py-2">Juni 2018</td>
                <td class="border border-neutral-300 px-4 py-2">Tillägg för mobil tillgänglighet, låg syn och kognitiva
                  begränsningar</td>
                <td class="border border-neutral-300 px-4 py-2">Aktuell, rekommenderad</td>
              </tr>
              <tr>
                <td class="border border-neutral-300 px-4 py-2">WCAG 2.2</td>
                <td class="border border-neutral-300 px-4 py-2">Oktober 2023</td>
                <td class="border border-neutral-300 px-4 py-2">Ytterligare förbättringar för mobil tillgänglighet och
                  kognitiva begränsningar</td>
                <td class="border border-neutral-300 px-4 py-2">Senaste versionen, rekommenderad</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- WCAG 2.2 New Success Criteria -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Nyheter i WCAG 2.2</h2>
      <p class="text-neutral-600 mb-6">
        WCAG 2.2, som släpptes i oktober 2023, lägger till nio nya framgångskriterier
        till de som redan fanns i WCAG 2.1. Här är en översikt över de nya kriterierna:
      </p>

      <div class="space-y-6">
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div class="px-6 py-3 bg-primary-light border-b border-neutral-200 flex justify-between items-center">
            <div class="flex items-center">
              <WcagLevelBadge level="AA" class="mr-2" />
              <h3 class="text-lg font-semibold">2.4.11 Fokus ej dold</h3>
            </div>
            <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum" target="_blank"
              rel="noopener noreferrer" class="text-sm text-primary hover:underline inline-flex items-center">
              Läs mer
              <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
          <div class="p-6">
            <p class="mb-4">
              När en användargränssnittskomponent får tangentbordsfokus ska komponenten inte vara
              helt dold av annat innehåll (t.ex. modala fönster, expanderbara element).
            </p>
            <AccessibilityCodeExample title="Exempel: Fokus ej dold" :examples="[
              {
                label: 'Problematisk implementering',
                before: '',
                after: '',
                explanation: 'I det förbättrade exemplet används aria-hidden och inert-attributet för att förhindra att fokus hamnar på element som är dolda bakom modalen. Detta säkerställer att användare som navigerar med tangentbord inte hamnar i ett läge där det aktiva elementet är dolt.'
              }
            ]" />
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div class="px-6 py-3 bg-primary-light border-b border-neutral-200 flex justify-between items-center">
            <div class="flex items-center">
              <WcagLevelBadge level="AA" class="mr-2" />
              <h3 class="text-lg font-semibold">2.4.12 Fokussynlighet</h3>
            </div>
            <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance" target="_blank"
              rel="noopener noreferrer" class="text-sm text-primary hover:underline inline-flex items-center">
              Läs mer
              <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
          <div class="p-6">
            <p class="mb-4">
              När en användargränssnittskomponent får tangentbordsfokus ska det finnas en
              synlig indikation som uppfyller minimikrav på area och kontrast.
            </p>
            <AccessibleCodeExample title="Exempel: Tydlig fokusindikator" :examples="[
              {
                label: 'CSS för fokusindikator',
                code: `/* Dålig praxis: Ta bort fokusindikator helt */
:focus {
  outline: none;
}

/* Bra praxis: Tydlig fokusindikator med god kontrast */
:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.25);
}`,
                explanation: 'Det är kritiskt att aldrig helt ta bort fokusindikatorn (:focus { outline: none; }) utan att ersätta den med en annan tydlig visuell indikator. Använd :focus-visible för att leverera en tydlig fokusindikator för tangentbordsanvändare men inte för musklick.',
                wcagReference: '2.4.12'
              }
            ]" />
          </div>
        </div>

        <!-- More success criteria would be added here -->
      </div>
    </div>

    <!-- WCAG Explorer Tool -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Utforska WCAG-kriterier</h2>
      <p class="text-neutral-600 mb-6">
        Använd vårt verktyg för att utforska alla WCAG-kriterier och hitta praktisk implementeringshjälp.
      </p>

      <WcagExplorer />
    </div>

    <!-- WCAG Resources Section -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Resurser för WCAG-implementering</h2>
      <p class="text-neutral-600 mb-6">
        Här hittar du praktiska resurser som hjälper dig att förstå och implementera WCAG i dina projekt.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DownloadResource title="WCAG 2.2 Quick Reference Checklist"
          description="En enkel checklista över alla WCAG 2.2-kriterier på nivå A och AA." type="pdf" fileSize="512 KB"
          downloadUrl="/resources/wcag-2.2-checklista.pdf" :tags="['WCAG 2.2', 'Checklista', 'AA']" author="T12T-teamet"
          color="blue" />

        <DownloadResource title="Tillgängliga komponenter - kodbibliotek"
          description="Exempel på tillgängliga webbutvecklingskomponenter i HTML, CSS och JavaScript." type="zip"
          fileSize="2.4 MB" downloadUrl="/resources/tillgangliga-komponenter.zip"
          :tags="['Komponenter', 'Kod', 'HTML', 'CSS', 'JavaScript']" author="T12T-teamet" color="amber" />

        <DownloadResource title="WCAG 2.2 Nya Kriterier"
          description="Djupgående beskrivning av de nya kriterierna i WCAG 2.2 och hur de skiljer sig från WCAG 2.1."
          type="pdf" fileSize="1.1 MB" downloadUrl="/resources/wcag-2.2-nya-kriterier.pdf"
          :tags="['WCAG 2.2', 'Nya kriterier', 'Implementering']"
          wcagReference="2.4.11, 2.4.12, 2.4.13, 3.2.6, 3.3.7, 3.3.8, 3.3.9" author="T12T-teamet" color="green" />
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 mb-12">
      <h2 class="text-2xl font-bold mb-4">Vanliga frågor om WCAG</h2>

      <Faq :faqs="wcagFaqs" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import WcagLevelBadge from '~/components/WcagLevelBadge.vue'
import AccessibilityCodeExample from '~/components/AccessibilityCodeExample.vue'
import WcagExplorer from '~/components/WcagExplorer.vue'
import DownloadResource from '~/components/DownloadResource.vue'
import Faq from '~/components/Faq.vue'
import RelatedContent from '~/components/RelatedContent.vue'

// Get current route for related content
const route = useRoute()

// SEO metadata
useSeoMeta({
  title: 'WCAG - Riktlinjer för webbtillgänglighet - T12T',
  description: 'Omfattande guide till Web Content Accessibility Guidelines (WCAG) med praktiska exempel, implementeringstips och nyheter om WCAG 2.2.',
})

// FAQ data
const wcagFaqs = [
  {
    question: "Vilken version av WCAG ska jag följa?",
    answer: "För ny utveckling bör du följa den senaste versionen, WCAG 2.2, som släpptes i oktober 2023. Om du jobbar med offentlig sektor i Sverige kräver DOS-lagen minst WCAG 2.1 nivå AA, men det är rekommenderat att uppdatera till WCAG 2.2 när möjligt eftersom den bygger vidare på 2.1 med ytterligare förbättringar."
  },
  {
    question: "Måste min webbplats uppfylla alla kriterier på AAA-nivå?",
    answer: "Nej, det är vanligtvis inte ett krav att uppfylla alla kriterier på AAA-nivå. Både W3C och de flesta tillgänglighetslagar (inklusive DOS-lagen) erkänner att det kan vara svårt eller omöjligt för vissa typer av innehåll att uppfylla alla AAA-kriterier. Nivå AA är standardmålet för de flesta organisationer. Du kan dock implementera specifika AAA-kriterier där det är relevant och möjligt för din webbplats."
  },
  {
    question: "Hur skiljer sig WCAG 2.2 från WCAG 2.1?",
    answer: "WCAG 2.2 bygger vidare på 2.1 och lägger till nio nya framgångskriterier utan att ta bort eller ändra befintliga kriterier. De nya kriterierna fokuserar främst på förbättringar för användare med kognitiva funktionsnedsättningar, bättre mobilanvändbarhet och förbättrad tangentbordsnavigering. Om din webbplats redan uppfyller WCAG 2.1, är det en relativt enkel process att uppdatera till 2.2."
  },
  {
    question: "Vad är skillnaden mellan WCAG och EN 301 549?",
    answer: "WCAG är en global standard specifikt för webbtillgänglighet, utvecklad av W3C. EN 301 549 är en europeisk standard som omfattar tillgänglighetskrav för offentlig upphandling av IKT-produkter och tjänster. EN 301 549 inkorporerar WCAG (för närvarande version 2.1 nivå AA) som en del av sina krav för webbinnehåll, men innehåller också krav för icke-webbaserad programvara, hårdvara, och andra IKT-lösningar."
  },
  {
    question: "Hur vet jag om min webbplats är WCAG-kompatibel?",
    answer: "För att utvärdera WCAG-kompatibilitet behöver du genomföra en kombination av automatiska och manuella tester. Automatiska verktyg som Lighthouse, axe och WAVE kan identifiera många problem, men kan endast upptäcka cirka 30-40% av alla tillgänglighetsproblem. För en fullständig utvärdering bör du komplettera med manuell testning inklusive tangentbordsnavigering, skärmläsartester och användartest med personer med olika funktionsnedsättningar. Se vår sektion om [tillgänglighetstestning](/testning) för mer information."
  },
  {
    question: "Är det lagkrav på att följa WCAG?",
    answer: "I Sverige kräver Lagen om tillgänglighet till digital offentlig service (DOS-lagen) att offentliga webbplatser och appar uppfyller WCAG 2.1 nivå AA. Liknande lagstiftning finns i många andra länder och regioner. European Accessibility Act (EAA) kommer att utöka tillgänglighetskraven till privata företag som tillhandahåller viktiga digitala tjänster från 2025. Även om det kanske inte alltid är ett lagkrav för alla organisationer, är det en god praxis att följa WCAG för att göra ditt innehåll tillgängligt för alla användare."
  }
]
</script>