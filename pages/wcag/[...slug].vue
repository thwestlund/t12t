<template>
  <main class="max-w-container" aria-label="Kriterium" id="main-content">
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

definePageMeta({
  layout: 'wcag-layout',
});

const route = useRoute();

// Fetch the content for this criterion
const { data } = await useAsyncData(`wcag-criterion-${route.path}`, () => {
  return queryCollection('wcag').where('id', 'LIKE', '%' + route.path + '%').first();
});
</script>