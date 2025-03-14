<script setup lang="ts">
const props = defineProps({
  error: Object
})

// SEO for error page
useSeoMeta({
  title: () => props.error?.statusCode === 404
    ? 'Sidan hittades inte - T12T'
    : 'Ett fel har inträffat - T12T',
  robots: 'noindex, nofollow',
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <div
      class="min-h-[70vh] flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div class="max-w-max mx-auto">
        <main class="sm:flex">
          <p class="text-4xl font-extrabold text-primary sm:text-5xl">
            {{ error?.statusCode || 'Fel' }}
          </p>
          <div class="sm:ml-6">
            <div class="sm:border-l sm:border-neutral-200 sm:pl-6">
              <h1 class="text-4xl font-extrabold text-secondary tracking-tight sm:text-5xl">
                <template v-if="error?.statusCode === 404">
                  Sidan hittades inte
                </template>
                <template v-else>
                  Ett fel har inträffat
                </template>
              </h1>
              <p class="mt-4 text-base text-neutral-600">
                <template v-if="error?.statusCode === 404">
                  Vi kunde tyvärr inte hitta den sida du letar efter. Den kan ha flyttats, tagits bort
                  eller så är adressen felstavad.
                </template>
                <template v-else>
                  Det uppstod ett oväntat fel. Vi ber om ursäkt för besväret och arbetar på att åtgärda problemet.
                </template>
              </p>
            </div>
            <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <button @click="handleError"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Gå till startsidan
              </button>
              <NuxtLink to="/kontakt"
                class="inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md bg-white text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Kontakta oss
              </NuxtLink>
            </div>
          </div>
        </main>

        <div class="mt-12">
          <h2 class="text-lg font-medium text-secondary mb-4">Du kan också prova:</h2>
          <div class="mt-4 bg-white shadow rounded-lg overflow-hidden">
            <div class="border-b border-neutral-200">
              <NuxtLink to="/kunskapsbank" class="block hover:bg-neutral-50 p-4">
                <h3 class="text-base font-medium text-secondary">Kunskapsbank</h3>
                <p class="mt-1 text-sm text-neutral-600">Utforska vår omfattande kunskapsbas om digital tillgänglighet
                </p>
              </NuxtLink>
            </div>
            <div class="border-b border-neutral-200">
              <NuxtLink to="/skärmläsare" class="block hover:bg-neutral-50 p-4">
                <h3 class="text-base font-medium text-secondary">Skärmläsarguider</h3>
                <p class="mt-1 text-sm text-neutral-600">Lär dig hur du testar med olika skärmläsare</p>
              </NuxtLink>
            </div>
            <div>
              <NuxtLink to="/blog" class="block hover:bg-neutral-50 p-4">
                <h3 class="text-base font-medium text-secondary">Blogg</h3>
                <p class="mt-1 text-sm text-neutral-600">Läs våra senaste artiklar om digital tillgänglighet</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>