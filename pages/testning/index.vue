<template>
  <div>
    <h1 class="text-3xl md:text-4xl font-bold mb-6">Tillgänglighetstestning</h1>

    <div class="prose max-w-none mb-8">
      <p class="text-lg text-neutral-700">
        En avgörande del av arbetet med digital tillgänglighet är att regelbundet testa och utvärdera
        dina produkter. Denna guide ger dig kunskap om olika testmetoder, verktyg och processer för att
        säkerställa att dina digitala lösningar är tillgängliga för alla användare.
      </p>
    </div>

    <!-- Why test accessibility -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Varför testa tillgänglighet?</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div class="p-6">
            <div class="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Identifiera barriärer</h3>
            <p class="text-neutral-600">
              Hitta och åtgärda hinder som stänger ute användare med funktionsnedsättningar från
              att använda dina digitala produkter.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div class="p-6">
            <div class="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Uppfylla lagkrav</h3>
            <p class="text-neutral-600">
              Säkerställ att din digitala närvaro uppfyller lagkrav som DOS-lagen och European Accessibility Act.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div class="p-6">
            <div class="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Förbättra användarupplevelsen</h3>
            <p class="text-neutral-600">
              Tillgänglig design är bra design för alla. Genom att testa tillgänglighet förbättrar
              du upplevelsen för alla användare.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div class="p-6">
            <div class="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Undvik kostsamma omarbetningar</h3>
            <p class="text-neutral-600">
              Det är både enklare och billigare att åtgärda tillgänglighetsproblem tidigt i utvecklingsprocessen.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div class="p-6">
            <div class="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Bygga robust kod</h3>
            <p class="text-neutral-600">
              Tillgänglighetskrav leder ofta till mer semantisk och robust kod, vilket ger fördelar
              för framtida underhåll och utveckling.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div class="p-6">
            <div class="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Nå en bredare målgrupp</h3>
            <p class="text-neutral-600">
              Cirka 20% av världens befolkning har någon form av funktionsnedsättning. Tillgängliga
              lösningar gör att du kan nå och inkludera fler användare.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Testing types -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Typer av tillgänglighetstester</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Automated testing -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-4">Automatiserade tester</h3>
            <p class="text-neutral-600 mb-4">
              Automatiserade verktyg kan snabbt identifiera många tekniska tillgänglighetsproblem.
              De är bra för att hitta uppenbara fel, men kan inte ersätta manuell testning.
            </p>

            <div class="mb-6">
              <h4 class="text-base font-medium mb-2">Fördelar:</h4>
              <ul class="space-y-1 text-neutral-600">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Snabba resultat</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Konsekvent bedömning</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Lätta att integrera i utvecklingsprocessen</span>
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <h4 class="text-base font-medium mb-2">Begränsningar:</h4>
              <ul class="space-y-1 text-neutral-600">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
                    </path>
                  </svg>
                  <span>Kan bara identifiera ca 30-40% av alla tillgänglighetsproblem</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
                    </path>
                  </svg>
                  <span>Kan inte bedöma meningsfullhet (t.ex. om alt-texter är användbara)</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
                    </path>
                  </svg>
                  <span>Kan ge felaktiga resultat som kräver mänsklig bedömning</span>
                </li>
              </ul>
            </div>

            <h4 class="text-base font-medium mb-2">Populära verktyg:</h4>
            <div class="flex flex-wrap gap-2">
              <a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition">
                Lighthouse
              </a>
              <a href="https://www.deque.com/axe/" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition">
                axe DevTools
              </a>
              <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition">
                WAVE
              </a>
              <a href="https://siteimprove.com/" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition">
                Siteimprove
              </a>
            </div>

            <div class="mt-6">
              <NuxtLink to="/testning/automatiserad" class="inline-flex items-center text-primary hover:underline">
                <span>Läs mer om automatiserad testning</span>
                <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                  </path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Manual testing -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-4">Manuell testning</h3>
            <p class="text-neutral-600 mb-4">
              Manuell testning utförs av människor och innefattar kontroll mot riktlinjer,
              användning av hjälpmedel och heuristisk utvärdering.
            </p>

            <div class="mb-6">
              <h4 class="text-base font-medium mb-2">Fördelar:</h4>
              <ul class="space-y-1 text-neutral-600">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Kan identifiera problem som automatiserade verktyg missar</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Bedömer kvalitativa aspekter som meningsfullhet och kontext</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Ger djupare insikter om användarupplevelsen</span>
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <h4 class="text-base font-medium mb-2">Metoder:</h4>
              <ul class="space-y-1 text-neutral-600">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-neutral-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                    </path>
                  </svg>
                  <span>Kontroll mot riktlinjer och checklistor</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-neutral-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 013.9-2.33m-1.415 9.9a5 5 0 01-7.072 0m9.9-2.828a9 9 0 010-12.728m-9.9 2.828a9 9 0 012.33-3.9">
                    </path>
                  </svg>
                  <span>Testning med hjälpmedel (skärmläsare, tangentbord)</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-neutral-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2">
                    </path>
                  </svg>
                  <span>Simulering av olika funktionsnedsättningar</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-neutral-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                    </path>
                  </svg>
                  <span>Heuristisk utvärdering av experter</span>
                </li>
              </ul>
            </div>

            <h4 class="text-base font-medium mb-2">Populära checklistor och riktlinjer:</h4>
            <div class="flex flex-wrap gap-2">
              <a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition">
                WCAG 2.2 Snabbguide
              </a>
              <a href="https://webaim.org/standards/wcag/checklist" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition">
                WebAIM Checklist
              </a>
              <a href="https://www.a11yproject.com/checklist/" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition">
                A11Y Project Checklist
              </a>
            </div>

            <div class="mt-6">
              <NuxtLink to="/testning/manuell" class="inline-flex items-center text-primary hover:underline">
                <span>Läs mer om manuell testning</span>
                <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                  </path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Assistive tech testing -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-4">Testning med hjälpmedel</h3>
            <p class="text-neutral-600 mb-4">
              Att testa med skärmläsare och andra hjälpmedel ger värdefulla insikter om hur produkten
              upplevs av personer med funktionsnedsättningar.
            </p>

            <div class="mb-6">
              <h4 class="text-base font-medium mb-2">Vanliga hjälpmedel för testning:</h4>
              <ul class="space-y-2 text-neutral-600">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-neutral-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 013.9-2.33m-1.415 9.9a5 5 0 01-7.072 0m9.9-2.828a9 9 0 010-12.728m-9.9 2.828a9 9 0 012.33-3.9">
                    </path>
                  </svg>
                  <div>
                    <span class="font-medium">Skärmläsare</span>
                    <p class="text-sm mt-1">
                      <NuxtLink to="/skärmläsare/nvda" class="text-primary hover:underline">NVDA</NuxtLink> (gratis,
                      Windows),
                      <NuxtLink to="/skärmläsare/voiceover" class="text-primary hover:underline">VoiceOver</NuxtLink>
                      (macOS/iOS),
                      <NuxtLink to="/skärmläsare/jaws" class="text-primary hover:underline">JAWS</NuxtLink>
                      (kommersiell, Windows)
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-neutral-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                    </path>
                  </svg>
                  <div>
                    <span class="font-medium">Skärmförstoring</span>
                    <p class="text-sm mt-1">
                      ZoomText, Windows Magnifier, MacOS Zoom
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-neutral-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                  <div>
                    <span class="font-medium">Tangentbordsnavigation</span>
                    <p class="text-sm mt-1">
                      Testa navigering utan mus
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-neutral-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z">
                    </path>
                  </svg>
                  <div>
                    <span class="font-medium">Taligenkänning</span>
                    <p class="text-sm mt-1">
                      Dragon NaturallySpeaking, Voice Control, Voice Access
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-6">
              <NuxtLink to="/testning/hjalpmedel" class="inline-flex items-center text-primary hover:underline">
                <span>Läs mer om testning med hjälpmedel</span>
                <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                  </path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- User testing -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-4">Användartestning</h3>
            <p class="text-neutral-600 mb-4">
              Den mest värdefulla formen av tillgänglighetstestning involverar verkliga användare
              med olika funktionsförmågor.
            </p>

            <div class="mb-6">
              <h4 class="text-base font-medium mb-2">Fördelar:</h4>
              <ul class="space-y-1 text-neutral-600">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Ger autentiska insikter om verkliga utmaningar</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Identifierar problem som experter kan missa</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Skapar empati och förståelse hos utvecklingsteamet</span>
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <h4 class="text-base font-medium mb-2">Tips för användartestning:</h4>
              <ul class="space-y-1 text-neutral-600">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-neutral-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                    </path>
                  </svg>
                  <span>Rekrytera testdeltagare med olika funktionsförmågor</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-neutral-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                    </path>
                  </svg>
                  <span>Skapa realistiska testscenarier baserade på vanliga användaruppgifter</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-neutral-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                    </path>
                  </svg>
                  <span>Observera utan att ingripa (om inte absolut nödvändigt)</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-neutral-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                    </path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Ge deltagarna frihet att använda sina egna hjälpmedel och metoder</span>
                </li>
              </ul>
            </div>

            <div class="mt-6">
              <NuxtLink to="/testning/anvandartestning" class="inline-flex items-center text-primary hover:underline">
                <span>Läs mer om användartestning</span>
                <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                  </path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testing process -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Att sätta upp en teststrategi</h2>

      <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-4">Integrera testning i hela utvecklingsprocessen</h3>
          <p class="text-neutral-600 mb-6">
            Tillgänglighetstestning bör inte vara en efterhandskontroll, utan en integrerad del av utvecklingsprocessen.
          </p>

          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
              <div class="flex items-center mb-2">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-primary-light text-primary mr-3">
                  <span class="font-semibold">1</span>
                </div>
                <h4 class="font-semibold text-secondary">Planering</h4>
              </div>
              <p class="text-neutral-600 pl-11">
                Definiera tillgänglighetskrav och acceptanskriterier redan i planeringsfasen.
              </p>
            </div>

            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
              <div class="flex items-center mb-2">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-primary-light text-primary mr-3">
                  <span class="font-semibold">2</span>
                </div>
                <h4 class="font-semibold text-secondary">Design</h4>
              </div>
              <p class="text-neutral-600 pl-11">
                Utvärdera designskisser och prototyper för tillgänglighetsproblem.
              </p>
            </div>

            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
              <div class="flex items-center mb-2">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-primary-light text-primary mr-3">
                  <span class="font-semibold">3</span>
                </div>
                <h4 class="font-semibold text-secondary">Utveckling</h4>
              </div>
              <p class="text-neutral-600 pl-11">
                Använd automatiserade tester kontinuerligt under kodningen.
              </p>
            </div>

            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
              <div class="flex items-center mb-2">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-primary-light text-primary mr-3">
                  <span class="font-semibold">4</span>
                </div>
                <h4 class="font-semibold text-secondary">QA</h4>
              </div>
              <p class="text-neutral-600 pl-11">
                Utför djupare manuella tester och hjälpmedelstester.
              </p>
            </div>

            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
              <div class="flex items-center mb-2">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-primary-light text-primary mr-3">
                  <span class="font-semibold">5</span>
                </div>
                <h4 class="font-semibold text-secondary">Lansering</h4>
              </div>
              <p class="text-neutral-600 pl-11">
                Gör en omfattande tillgänglighetsgranskning före lansering.
              </p>
            </div>

            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
              <div class="flex items-center mb-2">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-primary-light text-primary mr-3">
                  <span class="font-semibold">6</span>
                </div>
                <h4 class="font-semibold text-secondary">Underhåll</h4>
              </div>
              <p class="text-neutral-600 pl-11">
                Genomför regelbundna kontroller och utvärderingar av den publicerade webbplatsen.
              </p>
            </div>
          </div>

          <div class="mt-6">
            <NuxtLink to="/testning/strategi" class="inline-flex items-center text-primary hover:underline">
              <span>Läs mer om teststrategier</span>
              <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                </path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!--div class="bg-primary-light rounded-lg p-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:flex-1 mb-6 md:mb-0 md:mr-8">
          <h2 class="text-2xl font-bold text-secondary mb-4">Kom igång med testning</h2>
          <p class="text-neutral-700 mb-6">
            Redo att börja testa din webbplats för tillgänglighet? Vi har samlat enkla steg-för-steg-guider
            och resurser för att hjälpa dig att komma igång.
          </p>
          <NuxtLink to="/testning/kom-igang"
            class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Kom igång med testning
          </NuxtLink>
        </div>
        <div class="md:flex-1">
          <img src="" alt="Illustration av tillgänglighetstestning" class="max-w-md mx-auto" />
        </div>
      </div>
    </div-->
  </div>
</template>

<script setup>
import DownloadResource from '~/components/DownloadResource.vue'

// SEO metadata
useSeoMeta({
  title: 'Tillgänglighetstestning - T12T',
  description: 'Guide till olika metoder och verktyg för att testa tillgänglighet på webbplatser och applikationer.'
})
</script>