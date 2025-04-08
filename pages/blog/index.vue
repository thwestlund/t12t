<template>
  <div class="max-w-4xl mx-auto py-4 px-4 lg:py-8 lg:px-8">
    <div class="mb-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">Blogg</h1>
      <p class="text-lg text-neutral-600">Senaste nyheter, guider och insikter om digital tillgänglighet.</p>
    </div>

    <FeaturedPost v-if="posts" :posts="posts" />

    <!-- All blog posts -->
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="post in posts" :key="post.id"
          class="border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <NuxtLink :to="post.path" class="block h-full hover:no-underline">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2 text-secondary hover:text-primary">
                {{ post.title }}
              </h2>
              <p v-if="post.description" class="text-neutral-600 mb-4 line-clamp-2">
                {{ post.description }}
              </p>
              <div class="flex items-center mt-auto text-sm text-neutral-500">
                <NuxtTime v-if="post.date" :datetime="post.date" time-zone="Europe/Stockholm" format="YYYY-MM-DD" />
                <span v-if="post.author" class="ml-2">
                  <span class="mx-1">•</span>
                  {{ post.author }}
                </span>
              </div>
              <div v-if="post.tags && post.tags.length" class="mt-4 flex flex-wrap gap-2">
                <span 
                  v-for="tag in post.tags.slice(0, 3)" :key="tag"
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
                  {{ tag }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FeaturedPost from '~/components/blog/FeaturedPost.vue';

definePageMeta({
  layout: 'default'
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
</script>