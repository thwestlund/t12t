<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    <!-- WCAG Section -->
    <Card title="WCAG-standarder"
      description="Detaljerad information om Web Content Accessibility Guidelines (WCAG), inklusive principlösningar och implementationsguider."
      linkTo="/kunskapsbank/wcag" linkText="Utforska WCAG">
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </template>
    </Card>

    <!-- Legislation Section -->
    <Card title="Lagstiftning"
      description="Information om lagar och regler som påverkar digital tillgänglighet i Sverige och EU, inklusive DOS-lagen och European Accessibility Act."
      linkTo="/kunskapsbank/lagstiftning" linkText="Läs om lagstiftning">
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '~/components/base/Card.vue'
// This is a parent component that uses the KnowledgeBaseCard component
</script>