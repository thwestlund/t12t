<template>
  <div v-if="data">
    <!-- Post header -->
    <div class="mb-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ data.title }}</h1>
      <div class="flex items-center text-neutral-600">
        <span v-if="data.date" class="mr-4">
          <NuxtTime :datetime="data.date" time-zone="Europe/Stockholm" format="YYYY-MM-DD" />
        </span>
        <span v-if="data.author" class="mr-4">
          <span class="mr-1">Av:</span>
          {{ data.author }}
        </span>
      </div>

      <!-- Tags -->
      <div v-if="data.tags && data.tags.length" class="mt-4 flex flex-wrap gap-2">
        <span 
          v-for="tag in data.tags" :key="tag"
          class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-light text-primary">
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Post content -->
    <div class="prose max-w-none">
      <ContentRenderer v-if="data" :value="data" />
    </div>
  </div>
  <div v-else class="py-12 text-center">
    <p class="text-xl">Laddar inlägg...</p>
  </div>
</template>

<script setup lang="ts">
import { useBlogSeoMeta } from '~/composables/useSeoMeta';

definePageMeta({
  layout: 'blog'
})

const route = useRoute()
const slugArray = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]
const slugPath = slugArray.join('/')
// Fetch the blog post
const { data } = await useAsyncData(`blog-${slugPath}`, () => {
  return queryCollection('blog').path(`/blog/${slugPath}`).first()
})


useBlogSeoMeta({
  title: "Inlägg: " + data.value?.title + " - T12T",
  description: data.value?.description,
  keywords: data.value?.keywords,
  og: {
    title: data.value?.og?.title,
    description: data.value?.og?.description,
  },
})
</script>