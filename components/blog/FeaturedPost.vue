<template>
  <div v-if="featuredPost" class="mb-12 bg-neutral-50 rounded-xl overflow-hidden shadow-md">
    <div class="p-6 md:p-8">
      <div class="mb-2 text-sm font-medium text-primary">Utvalt inlägg</div>
      <h2 class="text-2xl font-bold mb-3">
        <NuxtLink :to="featuredPost.path" class="hover:text-primary hover:no-underline">
          {{ featuredPost.title }}
        </NuxtLink>
      </h2>
      <p class="text-neutral-600 mb-4">{{ featuredPost.description }}</p>
      <div class="flex items-center">
        <span class="text-sm text-neutral-500">
          <NuxtTime 
            v-if="featuredPost.date" :datetime="featuredPost.date" time-zone="Europe/Stockholm"
            format="YYYY-MM-DD" />
        </span>
        <span class="mx-2 text-neutral-300">•</span>
        <span v-if="featuredPost.author" class="text-sm text-neutral-500">
          {{ featuredPost.author }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/collection'


const props = defineProps({
  posts: {
    type: Array as PropType<BlogPost[]>,
    required: true
  }
})

const featuredPost = computed(() => {
  if (props.posts && props.posts.length > 0) {
    return props.posts[0];
  }
  return null;
})
</script>