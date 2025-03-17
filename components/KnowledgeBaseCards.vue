<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    <Card title="WCAG-standarder"
      description="Detaljerad information om Web Content Accessibility Guidelines (WCAG), inklusive principlösningar och implementationsguider."
      linkTo="/kunskapsbank/wcag" linkText="Utforska WCAG" icon="uil:github" />

    <Card title="Lagstiftning"
      description="Information om lagar och regler som påverkar digital tillgänglighet i Sverige och EU, inklusive DOS-lagen och European Accessibility Act."
      linkTo="/kunskapsbank/lagstiftning" linkText="Läs om lagstiftning" icon="uil:github" />
  </div>
</template>

<script setup lang="ts">
import Card from '~/components/base/Card.vue'
</script>