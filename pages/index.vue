<template>
  <main id="main-content">
    <LandingHero title="T12T - Digital Tillgänglighet"
      description="Sveriges kunskapsplattform för att bygga tillgängliga digitala tjänster och webbplatser för alla användare."
      primaryButtonText="Utforska WCAG" primaryButtonUrl="/wcag" secondaryButtonText="Om T12T" secondaryButtonUrl="/om"
      :features="features" />

    <div class="container-main py-16">
      <!-- Main sections -->
      <!--h2 class="text-3xl font-bold text-center mb-12">Utforska våra huvudområden</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <!-- Knowledge Bank Section -->
      <!--Card title="Kunskapsbank"
          description="Omfattande information om tillgänglighetsstandarder, lagstiftning och bästa praxis för webbutvecklare, designers och innehållsskapare."
          linkTo="/kunskapsbank" linkText="Utforska kunskapsbanken" icon="material-symbols:menu-book-outline" />

        <!-- Screen Readers Section -->
      <!--Card title="Skärmläsare"
          description="Guider för hur olika skärmläsare fungerar, kortkommandon och testmetoder för att säkerställa att dina webbplatser fungerar för alla användare."
          linkTo="/skärmläsare" linkText="Lär dig om skärmläsare" icon="material-symbols:accessibility-new-rounded" /-->

      <!-- Testing Section -->
      <!--Card title="Testning"
          description="Metoder och verktyg för att testa och utvärdera tillgängligheten på dina webbplatser och applikationer, både automatiskt och manuellt."
          linkTo="/testning" linkText="Utforska testmetoder" icon="material-symbols:code" />
      </div--->

      <!-- Latest blog posts -->
      <div class="mb-16">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-bold">Senaste från bloggen</h2>
          <NuxtLink to="/blog" class="text-primary hover:underline">Visa alla inlägg</NuxtLink>
        </div>
        <BlogSection />
      </div>
      <i-mdi:menu-book-outline />
      <BaseCtaBannerVue />
    </div>
  </main>
</template>

<script setup lang="ts">
import BlogSection from '~/components/blog/BlogCard.vue'
import Card from '~/components/base/Card.vue'

// Define page metadata
/*useSeoMeta({
  title: 'T12T - Digital Tillgänglighet i Sverige',
  description: 'Sveriges främsta resurs för information om digital tillgänglighet, webbtillgänglighet och universell design för webbutvecklare, designers, och innehållskapare.'
})*/

const features = [
  {
    title: 'Guider & Dokumentation',
    description: 'Omfattande guider om tillgänglighet, standarder och best practices.',
    icon: 'material-symbols:menu-book-outline'
  },
  {
    title: 'Verktyg & Testning',
    description: 'Lär dig använda skärmläsare och testverktyg för att säkerställa tillgänglighet.',
    icon: 'material-symbols:code'
  },
  {
    title: 'Aktuell & Relevant',
    description: 'Uppdaterad kunskap om nya standarder som WCAG och lagkrav som DOS-lagen och EAA.',
    icon: 'material-symbols:info-outline'
  }
]
</script>