<template>
  <main class="max-w-container" aria-label="Huvudinnehåll" id="main-content">
    <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 mb-8">
      <h1 class="text-3xl font-bold mb-6">WCAG 2.2 - Riktlinjer för tillgängligt webbinnehåll</h1>

      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">
          Web Content Accessibility Guidelines (WCAG) 2.2 är en internationell standard som ger vägledning för att
          göra webbinnehåll mer tillgängligt för personer med funktionsnedsättningar.
        </p>

        <p>
          WCAG 2.2 bygger på WCAG 2.1 och WCAG 2.0, men innehåller nya framgångskriterier och vägledning som inte
          fanns i tidigare versioner. Standarden är utvecklad genom W3C-processen i samarbete med individer och
          organisationer runt om i världen, med målet att tillhandahålla en gemensam standard för webbtillgänglighet
          som uppfyller behoven hos individer, organisationer och myndigheter internationellt.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">De fyra principerna</h2>

        <p>
          WCAG är uppbyggt kring fyra grundläggande principer som utgör grunden för webbtillgänglighet. Webbinnehåll
          måste vara:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="bg-primary-light p-4 rounded-lg">
            <h3 class="font-bold text-primary mb-2">1. Möjlig att uppfatta</h3>
            <p class="text-sm">
              Information och komponenter i användargränssnittet måste presenteras för användare på sätt som de kan
              uppfatta. Detta innebär att information måste vara tillgänglig för alla sinnen och inte bara beroende
              av exempelvis syn.
            </p>
          </div>

          <div class="bg-primary-light p-4 rounded-lg">
            <h3 class="font-bold text-primary mb-2">2. Hanterbar</h3>
            <p class="text-sm">
              Komponenter i användargränssnittet och navigering måste vara hanterbara. Detta innebär att användare
              måste kunna interagera med gränssnittet på olika sätt, inte bara genom mus.
            </p>
          </div>

          <div class="bg-primary-light p-4 rounded-lg">
            <h3 class="font-bold text-primary mb-2">3. Begriplig</h3>
            <p class="text-sm">
              Information och hantering av användargränssnittet måste vara begriplig. Detta innebär att innehåll ska
              vara läsbart och förutsägbart och att användaren får hjälp att undvika och korrigera misstag.
            </p>
          </div>

          <div class="bg-primary-light p-4 rounded-lg">
            <h3 class="font-bold text-primary mb-2">4. Robust</h3>
            <p class="text-sm">
              Innehållet måste vara robust nog för att kunna tolkas på ett pålitligt sätt av olika användaragenter,
              inklusive hjälpmedel. Det innebär att webbinnehållet ska vara kompatibelt med nuvarande och framtida
              tekniker.
            </p>
          </div>
        </div>

        <h2 class="text-2xl font-bold mt-8 mb-4">Konformitetsnivåer</h2>

        <p>
          WCAG 2.2 har tre nivåer av konformitet:
        </p>

        <ul class="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Nivå A:</strong> Den lägsta nivån av tillgänglighet. Uppfyller grundläggande tillgänglighetskrav
            som är helt nödvändiga.
          </li>
          <li>
            <strong>Nivå AA:</strong> Mellannivån. Tar itu med de största och vanligaste barriärerna för personer
            med funktionsnedsättningar. Detta är den nivå som de flesta organisationer strävar efter och som ofta
            krävs i lagstiftning.
          </li>
          <li>
            <strong>Nivå AAA:</strong> Den högsta nivån av tillgänglighet. Inkluderar allt från nivå A och AA, samt
            ytterligare framgångskriterier. Alla AAA-kriterier är inte alltid tillämpliga för alla typer av
            innehåll.
          </li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">WCAG 2.2 och lagstiftning</h2>

        <p>
          Att följa WCAG 2.2 är ofta en nyckelkomponent för att uppfylla lagkrav på tillgänglighet. I Sverige
          regleras digital tillgänglighet bland annat av:
        </p>

        <ul class="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>DOS-lagen (Lagen om tillgänglighet till digital offentlig service):</strong> Baserar sig på EU:s
            webbtillgänglighetsdirektiv och kräver att offentliga aktörers webbplatser och mobila applikationer
            följer tillgänglighetskraven i EN 301 549, som refererar till WCAG 2.1 nivå AA.
          </li>
          <li>
            <strong>European Accessibility Act (EAA):</strong> En EU-förordning som träder i kraft fullt ut 2025 och
            ställer krav på tillgänglighet för produkter och tjänster, inklusive digitala tjänster.
          </li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Nyheter i WCAG 2.2</h2>

        <p>
          WCAG 2.2, som publicerades i oktober 2023, innehåller nya framgångskriterier som fokuserar på:
        </p>

        <ul class="list-disc pl-6 space-y-2 my-4">
          <li>Förbättrad tillgänglighet för personer med kognitiva funktionsnedsättningar</li>
          <li>Bättre stöd för mobilanvändning</li>
          <li>Starkare riktlinjer för tangentbordsnavigering</li>
          <li>Förenklad interaktion för personer med motoriska funktionsnedsättningar</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Så använder du T12T:s WCAG-guide</h2>

        <p>
          Vår WCAG-guide är strukturerad för att göra det enkelt att hitta specifika framgångskriterier och förstå
          hur de kan implementeras:
        </p>

        <ol class="list-decimal pl-6 space-y-2 my-4">
          <li>Använd sidomenyn till vänster för att navigera genom WCAG:s principer, riktlinjer och kriterier.</li>
          <li>Varje framgångskriterium har en egen sida med beskrivning, förklaring av varför det behövs, praktiska
            exempel och testmetoder.</li>
          <li>För de flesta kriterier finns även sidor med mer detaljerade exempel och testmetoder som du når via
            länkar längst ner på kriteriesidan.</li>
        </ol>

        <div class="bg-blue-50 p-4 rounded-lg my-6 border border-blue-200">
          <h3 class="text-lg font-semibold text-blue-700 mb-2">Tips för att komma igång</h3>
          <p>
            Om du är ny på tillgänglighetsområdet, rekommenderar vi att du börjar med att förstå de fyra principerna
            och sedan utforskar framgångskriterierna på nivå A och AA. Fokusera särskilt på de grundläggande
            aspekterna som textalternativ, tangentbordsnavigering och färgkontrast.
          </p>
        </div>
      </div>
    </div>

    <!-- Feature cards -->
    <!--div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow">
        <h2 class="text-xl font-bold mb-3">Tillgänglighetstestning</h2>
        <p class="text-neutral-600 mb-4">
          Lär dig hur du testar din webbplats mot WCAG-kriterier med både automatiserade verktyg och manuella
          metoder.
        </p>
        <NuxtLink to="/testning" class="text-primary hover:underline inline-flex items-center">
          Till testguiden
          <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
            </path>
          </svg>
        </NuxtLink>
      </div>

      <!--div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow">
        <h2 class="text-xl font-bold mb-3">Skärmläsarguider</h2>
        <p class="text-neutral-600 mb-4">
          Förstå hur du kan testa din webbplats med skärmläsare, ett viktigt steg för att säkerställa
          tillgänglighet.
        </p>
        <NuxtLink to="/skärmläsare" class="text-primary hover:underline inline-flex items-center">
          Till skärmläsarguider
          <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
            </path>
          </svg>
        </NuxtLink>
      </div>
    </div-->
  </main>
</template>

<script setup>
import WcagSidebarDynamic from '~/components/WcagSidebarDynamic.vue';

definePageMeta({
  layout: 'wcag-layout',
})

// Set page metadata for SEO
/*useSeoMeta({
  title: 'WCAG 2.2 - Riktlinjer för tillgängligt webbinnehåll | T12T',
  description: 'Lär dig om WCAG 2.2-standarden, hur den är strukturerad och hur du kan använda den för att göra ditt webbinnehåll mer tillgängligt.'
})*/
</script>