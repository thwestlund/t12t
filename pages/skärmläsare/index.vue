<template>
  <div>
    <h1 class="text-3xl md:text-4xl font-bold mb-6">Skärmläsare</h1>
    
    <div class="prose max-w-none mb-8">
      <p class="text-lg text-neutral-700">
        Skärmläsare är avgörande hjälpmedel för personer med synnedsättningar och en nyckelkomponent i 
        tillgänglig webbutveckling. På denna sida hittar du den kunskap du behöver för att förstå hur 
        skärmläsare fungerar och hur du kan testa dina webbplatser med dem.
      </p>
    </div>
    
    <!-- Introduction video section -->
    <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden mb-12">
      <div class="aspect-w-16 aspect-h-9 relative">
        <div class="absolute inset-0 bg-neutral-100 flex items-center justify-center">
          <div class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-neutral-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-neutral-500">Video: Introduktion till skärmläsare</p>
          </div>
        </div>
      </div>
      <div class="p-6">
        <h2 class="text-xl font-bold mb-2">Vad är en skärmläsare?</h2>
        <p class="text-neutral-600 mb-4">
          En skärmläsare är ett hjälpmedel som tolkar och läser upp information på skärmen för användare. 
          Den omvandlar text, bilder (via alt-texter), länkar och andra element till tal eller punktskrift. 
          För många personer med blindhet eller grav synnedsättning är skärmläsare det primära sättet att 
          interagera med digitala gränssnitt.
        </p>
        <div class="flex flex-wrap gap-3">
          <NuxtLink 
            to="/skärmläsare/varfor-testa" 
            class="inline-flex items-center text-primary hover:underline"
          >
            <span>Varför testa med skärmläsare?</span>
            <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </NuxtLink>
          <NuxtLink 
            to="/skärmläsare/introduktion" 
            class="inline-flex items-center text-primary hover:underline"
          >
            <span>Mer om skärmläsare</span>
            <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- Main grid of screen readers -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Populära skärmläsare</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- NVDA Card -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <img src="/images/nvda-logo.png" alt="NVDA Logo" class="h-12 w-12 mr-4">
              <h3 class="text-xl font-semibold">NVDA</h3>
            </div>
            
            <p class="text-neutral-600 mb-4">
              NVDA (NonVisual Desktop Access) är en gratis, öppen källkod-skärmläsare för Windows. 
              Den är mycket populär bland användare globalt och ett utmärkt val för utvecklartestning.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Windows</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Gratis</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Öppen källkod</span>
            </div>
            
            <NuxtLink 
              to="/skärmläsare/nvda" 
              class="inline-flex items-center text-primary hover:underline"
            >
              <span>Läs mer om NVDA</span>
              <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- VoiceOver Card -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <img src="/images/voiceover-logo.png" alt="VoiceOver Logo" class="h-12 w-12 mr-4">
              <h3 class="text-xl font-semibold">VoiceOver</h3>
            </div>
            
            <p class="text-neutral-600 mb-4">
              VoiceOver är den inbyggda skärmläsaren i Apple-produkter, inklusive macOS, iOS och iPadOS. 
              Det är ett kraftfullt verktyg för att testa tillgänglighet på Apple-enheter.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">macOS</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">iOS</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Inbyggd</span>
            </div>
            
            <NuxtLink 
              to="/skärmläsare/voiceover" 
              class="inline-flex items-center text-primary hover:underline"
            >
              <span>Läs mer om VoiceOver</span>
              <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- JAWS Card -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <img src="/images/jaws-logo.png" alt="JAWS Logo" class="h-12 w-12 mr-4">
              <h3 class="text-xl font-semibold">JAWS</h3>
            </div>
            
            <p class="text-neutral-600 mb-4">
              JAWS (Job Access With Speech) är en av de mest använda skärmläsarna inom professionella 
              sammanhang, särskilt inom företag och organisationer.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Windows</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Kommersiell</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Företagsstandard</span>
            </div>
            
            <NuxtLink 
              to="/skärmläsare/jaws" 
              class="inline-flex items-center text-primary hover:underline"
            >
              <span>Läs mer om JAWS</span>
              <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- TalkBack Card -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <img src="/images/talkback-logo.png" alt="TalkBack Logo" class="h-12 w-12 mr-4">
              <h3 class="text-xl font-semibold">TalkBack</h3>
            </div>
            
            <p class="text-neutral-600 mb-4">
              TalkBack är Googles inbyggda skärmläsare för Android-enheter. Den är avgörande för 
              att testa tillgänglighet på Android-appar och webbplatser på mobila enheter.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Android</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Inbyggd</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Mobil</span>
            </div>
            
            <NuxtLink 
              to="/skärmläsare/talkback" 
              class="inline-flex items-center text-primary hover:underline"
            >
              <span>Läs mer om TalkBack</span>
              <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Narrator Card -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <img src="/images/narrator-logo.png" alt="Narrator Logo" class="h-12 w-12 mr-4">
              <h3 class="text-xl font-semibold">Narrator</h3>
            </div>
            
            <p class="text-neutral-600 mb-4">
              Narrator är Microsofts inbyggda skärmläsare för Windows. Medan den tidigare hade 
              begränsningar har den förbättrats avsevärt i nyare versioner av Windows.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Windows</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Inbyggd</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Förbättras ständigt</span>
            </div>
            
            <NuxtLink 
              to="/skärmläsare/narrator" 
              class="inline-flex items-center text-primary hover:underline"
            >
              <span>Läs mer om Narrator</span>
              <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Jämförelse Card -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-light text-primary mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold">Jämförelse</h3>
            </div>
            
            <p class="text-neutral-600 mb-4">
              Osäker på vilken skärmläsare du ska använda? Kolla in vår detaljerade jämförelse 
              av funktioner, plattformar och användningsområden för de populäraste skärmläsarna.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-primary">Funktionsjämförelse</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-primary">Testningsrekommendationer</span>
            </div>
            
            <NuxtLink 
              to="/skärmläsare/jamforelse" 
              class="inline-flex items-center text-primary hover:underline"
            >
              <span>Se jämförelsen</span>
              <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Keyboard commands section -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Grundläggande kortkommandon</h2>
      
      <p class="text-neutral-600 mb-6">
        Här är några av de vanligaste kortkommandona för NVDA, som är ett bra verktyg att börja med 
        för utvecklingstestning. För mer detaljerade guider, besök specifika skärmläsarsidor.
      </p>
      
      <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-neutral-200">
            <thead class="bg-neutral-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Kommando</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Funktion</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-neutral-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex gap-1 flex-wrap">
                    <kbd class="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">NVDA</kbd>
                    <span>+</span>
                    <kbd class="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">Mellanslag</kbd>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-neutral-800">Starta/stoppa läsning</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex gap-1">
                    <kbd class="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">Ctrl</kbd>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-neutral-800">Avbryt läsning</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex gap-1 flex-wrap">
                    <kbd class="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">NVDA</kbd>
                    <span>+</span>
                    <kbd class="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">F7</kbd>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-neutral-800">Öppna elementlistor (rubriker, länkar, etc.)</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex gap-1">
                    <kbd class="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">Tab</kbd>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-neutral-800">Navigera till nästa interaktiva element</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex gap-1">
                    <kbd class="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">H</kbd>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-neutral-800">Hoppa till nästa rubrik</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex gap-1">
                    <kbd class="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">B</kbd>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-neutral-800">Hoppa till nästa knapp</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex gap-1">
                    <kbd class="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">L</kbd>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-neutral-800">Hoppa till nästa lista</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex gap-1">
                    <kbd class="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">T</kbd>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-neutral-800">Hoppa till nästa tabell</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex gap-1 flex-wrap">
                    <kbd class="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">NVDA</kbd>
                    <span>+</span>
                    <kbd class="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded">F1</kbd>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-neutral-800">Hjälp</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="mt-4 flex justify-center">
        <NuxtLink 
          to="/skärmläsare/ovning" 
          class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Öva på skärmläsarnavigation
        </NuxtLink>
      </div>
    </div>
    
    <!-- Best practices section -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Bästa praxis för skärmläsartestning</h2>
      
      <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
        <ul class="divide-y divide-neutral-200">
          <li class="p-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-10 w-10 rounded-md bg-primary-light text-primary">
                  <span class="text-lg font-semibold">1</span>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-secondary">Börja med tangentbordsnavigering</h3>
                <p class="mt-1 text-neutral-600">
                  Kontrollera att alla interaktiva element kan nås och aktiveras med enbart tangentbordet
                  innan du börjar testa med skärmläsare.
                </p>
              </div>
            </div>
          </li>
          
          <li class="p-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-10 w-10 rounded-md bg-primary-light text-primary">
                  <span class="text-lg font-semibold">2</span>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-secondary">Testa rubrikstruktur</h3>
                <p class="mt-1 text-neutral-600">
                  Navigera genom rubriker och kontrollera att de följer en logisk hierarki som hjälper 
                  användaren att förstå sidans struktur.
                </p>
              </div>
            </div>
          </li>
          
          <li class="p-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-10 w-10 rounded-md bg-primary-light text-primary">
                  <span class="text-lg font-semibold">3</span>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-secondary">Kontrollera formulärfält</h3>
                <p class="mt-1 text-neutral-600">
                  Säkerställ att formulärfält har rätt etiketter, att obligatoriska fält kommuniceras 
                  och att felmeddelanden läses upp.
                </p>
              </div>
            </div>
          </li>
          
          <li class="p-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-10 w-10 rounded-md bg-primary-light text-primary">
                  <span class="text-lg font-semibold">4</span>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-secondary">Lyssna på alt-texter</h3>
                <p class="mt-1 text-neutral-600">
                  Bekräfta att bilder har lämpliga och informativa alternativa texter som ger 
                  skärmläsaranvändare samma information som seende användare.
                </p>
              </div>
            </div>
          </li>
          
          <li class="p-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-10 w-10 rounded-md bg-primary-light text-primary">
                  <span class="text-lg font-semibold">5</span>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-secondary">Testa dynamiskt innehåll</h3>
                <p class="mt-1 text-neutral-600">
                  Kontrollera att uppdateringar, notifieringar och dynamiska ändringar på sidan 
                  meddelas korrekt till skärmläsare genom ARIA live regions.
                </p>
              </div>
            </div>
          </li>
        </ul>
        
        <div class="bg-neutral-50 p-6 border-t border-neutral-200">
          <NuxtLink 
            to="/testning/skarmläsare" 
            class="inline-flex items-center text-primary hover:underline"
          >
            <span>Läs vår omfattande guide för skärmläsartestning</span>
            <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <div class="bg-primary-light rounded-lg p-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:flex-1 mb-6 md:mb-0 md:mr-8">
          <h2 class="text-2xl font-bold text-secondary mb-4">Behöver du hjälp med skärmläsartestning?</h2>
          <p class="text-neutral-700 mb-6">
            Känner du dig osäker eller behöver specifik hjälp med skärmläsare? 
            Kontakta oss eller besök vårt community-forum där du kan få stöd 
            från både experter och andra utvecklare.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink 
              to="/om/kontakt" 
              class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Kontakta oss
            </NuxtLink>
            <NuxtLink 
              to="/forum" 
              class="inline-flex items-center px-5 py-2 border border-neutral-300 text-base font-medium rounded-md bg-white text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Besök forumet
            </NuxtLink>
          </div>
        </div>
        <div class="md:flex-1">
          <img 
            src="/images/community-support.svg" 
            alt="Illustration av support och community" 
            class="max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO metadata
useSeoMeta({
  title: 'Skärmläsare: Guider och information - T12T',
  description: 'Lär dig hur olika skärmläsare fungerar, hur du testar med dem, och viktiga kortkommandon för tillgänglighetsutvärdering.'
})
</script>