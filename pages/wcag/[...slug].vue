<template>
  <main id="main-content" class="max-w-80ch" aria-label="Kriterium">
    <div class=" bg-white rounded-lg shadow-sm border border-neutral-200 p-6 mb-8">
      <div class="flex flex-wrap items-center justify-between mb-6">
        <span class="text-sm">
          {{ data?.title || 'Framgångskriterium' }}
        </span>

        <div class="flex items-center mt-2 md:mt-0">
          <WcagLevelBadge :level="data?.level || 'A'" class="text-sm" />
        </div>
      </div>
      <ContentRenderer v-if="data" :value="data" class="prose" />
      <p v-else class="text-neutral-500">Laddar innehåll...</p>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import WcagLevelBadge from '~/components/WcagLevelBadge.vue';
import { useWcagSeoMeta } from '~/composables/useSeoMeta';

definePageMeta({
  layout: 'wcag-layout',

});

const route = useRoute();

// Fetch the content for this criterion
const { data } = await useAsyncData(`wcag-criterion-${route.path}`, () => {
  return queryCollection('wcag').where('id', 'LIKE', '%' + route.path + '%').first();
});

useWcagSeoMeta({
  title: "WCAG: " + data.value?.title + " - T12T",
  description: data.value?.description,
  keywords: data.value?.keywords,
  og: {
    title: data.value?.og?.title,
    description: data.value?.og?.description,
  },
  canonical: data.value?.canonical,
})
</script>
