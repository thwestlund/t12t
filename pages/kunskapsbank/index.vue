<template>
  <div>
    <h1 class="text-3xl md:text-4xl font-bold mb-6">Kunskapsbank</h1>

    <div class="prose max-w-none mb-8">
      <p class="text-lg text-neutral-700">
        Välkommen till T12T:s kunskapsbank om digital tillgänglighet. Här hittar du omfattande
        information om standarder, riktlinjer, lagstiftning och praktiska implementationstekniker
        för att göra dina digitala tjänster tillgängliga för alla användare.
      </p>
    </div>

    <KnowledgeBaseCards />

    <BaseContributionBanner />
  </div>
</template>

<script setup lang="ts">

// SEO metadata
/*useSeoMeta({
  title: 'Kunskapsbank - Digital Tillgänglighet - T12T',
  description: 'Omfattande information om tillgänglighetsstandarder, lagstiftning, utvecklingsmetoder och best practices för digital tillgänglighet i Sverige.'
})*/
</script>