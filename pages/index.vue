<template>
  <div>
    <LandingHero title="T12T - Digital Tillgänglighet"
      description="Sveriges kunskapsplattform för att bygga tillgängliga digitala tjänster och webbplatser för alla användare."
      primaryButtonText="Utforska kunskapsbanken" primaryButtonUrl="/kunskapsbank" secondaryButtonText="Om T12T"
      secondaryButtonUrl="/om" :features="features" />

    <div class="container-main py-16">
      <!-- Main sections -->
      <h2 class="text-3xl font-bold text-center mb-12">Utforska våra huvudområden</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Section: Kunskapsbank -->
        <div
          class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
          <div class="p-6">
            <div class="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            <h3 class="text-xl font-semibold mb-3">Kunskapsbank</h3>
            <p class="text-neutral-600 mb-4">
              Omfattande information om tillgänglighetsstandarder, lagstiftning och bästa praxis för
              webbutvecklare, designers och innehållsskapare.
            </p>

            <NuxtLink to="/kunskapsbank" class="inline-flex items-center text-primary hover:underline">
              <span>Utforska kunskapsbanken</span>
              <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                </path>
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Section: Skärmläsare -->
        <div
          class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
          <div class="p-6">
            <div class="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 013.9-2.33m-1.415 9.9a5 5 0 01-7.072 0m9.9-2.828a9 9 0 010-12.728m-9.9 2.828a9 9 0 012.33-3.9" />
              </svg>
            </div>

            <h3 class="text-xl font-semibold mb-3">Skärmläsare</h3>
            <p class="text-neutral-600 mb-4">
              Guider för hur olika skärmläsare fungerar, kortkommandon och testmetoder
              för att säkerställa att dina webbplatser fungerar för alla användare.
            </p>

            <NuxtLink to="/skärmläsare" class="inline-flex items-center text-primary hover:underline">
              <span>Lär dig om skärmläsare</span>
              <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                </path>
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Section: Testning -->
        <div
          class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
          <div class="p-6">
            <div class="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h3 class="text-xl font-semibold mb-3">Testning</h3>
            <p class="text-neutral-600 mb-4">
              Metoder och verktyg för att testa och utvärdera tillgängligheten på dina
              webbplatser och applikationer, både automatiskt och manuellt.
            </p>

            <NuxtLink to="/testning" class="inline-flex items-center text-primary hover:underline">
              <span>Utforska testmetoder</span>
              <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                </path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Latest blog posts -->
      <div class="mb-16">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-bold">Senaste från bloggen</h2>
          <NuxtLink to="/blog" class="text-primary hover:underline">Visa alla inlägg</NuxtLink>
        </div>
        <BlogSection />
      </div>

      <BaseCtaBannerVue />
    </div>
  </div>
</template>

<script setup lang="ts">
// Define page metadata
useSeoMeta({
  title: 'T12T - Digital Tillgänglighet i Sverige',
  description: 'Sveriges främsta resurs för information om digital tillgänglighet, webbtillgänglighet och universell design för webbutvecklare, designers, och innehållskapare.'
})

// Feature cards for the hero section
const features = [
  {
    title: 'Guider & Dokumentation',
    description: 'Omfattande guider om tillgänglighet, standarder och best practices.',
    icon: markRaw({
      render() {
        return h('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          class: 'h-8 w-8',
          fill: 'none',
          viewBox: '0 0 24 24',
          stroke: 'currentColor'
        }, [
          h('path', {
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': '2',
            d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
          })
        ])
      }
    })
  },
  {
    title: 'Verktyg & Testning',
    description: 'Lär dig använda skärmläsare och testverktyg för att säkerställa tillgänglighet.',
    icon: markRaw({
      render() {
        return h('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          class: 'h-8 w-8',
          fill: 'none',
          viewBox: '0 0 24 24',
          stroke: 'currentColor'
        }, [
          h('path', {
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': '2',
            d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
          }),
          h('path', {
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': '2',
            d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          })
        ])
      }
    })
  },
  {
    title: 'Aktuell & Relevant',
    description: 'Uppdaterad kunskap om nya standarder som WCAG och lagkrav som DOS-lagen och EAA.',
    icon: markRaw({
      render() {
        return h('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          class: 'h-8 w-8',
          fill: 'none',
          viewBox: '0 0 24 24',
          stroke: 'currentColor'
        }, [
          h('path', {
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': '2',
            d: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
          })
        ])
      }
    })
  }
]

// Format date to Swedish locale
const formatDate = (date: string) => {
  if (!date) return ''

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('sv-SE', options)
}
</script>