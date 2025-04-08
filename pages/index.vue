<template>
  <main id="main-content">
    <LandingHero 
      title="T12T - Digital Tillgänglighet"
      description="Sveriges kunskapsplattform för att bygga tillgängliga digitala tjänster och webbplatser för alla användare."
      primary-button-text="Utforska WCAG" 
      primary-button-url="/wcag" 
      secondary-button-text="Om T12T" 
      secondary-button-url="/om"
      :features="features" />

    <div class="container-main py-16">

      <!-- Latest blog posts -->
      <div class="mb-16">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-bold">Senaste från bloggen</h2>
          <NuxtLink to="/blog" class="text-primary hover:underline">Visa alla inlägg</NuxtLink>
        </div>
        <BlogCards />
      </div>
      
      <BaseCtaBannerVue />

    </div>
  </main>
</template>

<script setup lang="ts">

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