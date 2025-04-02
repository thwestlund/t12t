<template>
  <main id="main-content" aria-label="Huvudinnehåll" class="container-main py-8">
    <div class="p-6 mb-8">
      <h1 class="text-3xl font-bold mb-6">Om T12T</h1>
      <div class="flex flex-col gap-4">
        <section>
          <h2 class="text-2xl font-bold mt-8 mb-4">Vår vision</h2>
          <p class="mb-4">
            T12T (uttalas "tillgänglighet") är Sveriges främsta resurs för digital tillgänglighet.
            Vår mission är att göra webben mer inkluderande och tillgänglig för alla användare,
            oavsett funktionsförmåga.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mt-8 mb-4">Vem står bakom T12T?</h2>
          <p class="mb-4">
            T12T är skapat av Thommy Westlund med målsättningen att T12T.dev ska bli en community-driven plattform med
            experter inom digital tillgänglighet
            från hela Sverige. Plattformen utvecklas i öppen källkod med målet att sprida kunskap och
            förbättra digitala upplevelser för alla.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mt-8 mb-4">Våra värderingar</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Inkludering" description="Ingen ska utestängas från digitala tjänster"
              icon="mdi:account-group" />

            <Card title="Gemenskap" description="Bygga ett nätverk av experter och intresserade" linkTo="/om/kontakt"
              linkText="Bli en del av gemenskapen" icon="mdi:handshake" />

            <Card title="Innovation" description="Främja tillgängliga och användarvänliga digitala lösningar"
              linkTo="/wcag" linkText="Läs om tillgänglighetsstandards" icon="mdi:lightbulb" />
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mt-8 mb-4">Kontakta oss</h2>
          <p class="mb-4">
            Har du frågor, förslag eller vill bidra?
            <NuxtLink to="/om/kontakt" class="text-primary hover:underline">Kontakta oss här</NuxtLink>.
          </p>
        </section>

        <ContributionBanner />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Card from '~/components/base/Card.vue';
import ContributionBanner from '~/components/base/ContributionBanner.vue';

// Use Nuxt's useHead/useSeoMeta to set SEO metadata
/*useSeoMeta({
  title: 'Om T12T - Sveriges kunskapsplattform för digital tillgänglighet',
  description: 'Lär dig mer om T12T, vår vision, värderingar och hur du kan bidra till att göra webben mer tillgänglig för alla.',
  ogTitle: 'Om T12T - Sveriges kunskapsplattform för digital tillgänglighet',
  ogDescription: 'Lär dig mer om T12T, vår vision, värderingar och hur du kan bidra till att göra webben mer tillgänglig för alla.',
})*/
</script>