<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">Blogg</h1>
      <p class="text-lg text-neutral-600">Senaste nyheter, guider och insikter om digital tillgänglighet.</p>
    </div>

    <!-- Featured post (if available) -->
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
            {{ featuredPost.date }}
          </span>
          <span class="mx-2 text-neutral-300">•</span>
          <span v-if="featuredPost.author" class="text-sm text-neutral-500">
            {{ featuredPost.author }}
          </span>
        </div>
      </div>
    </div>

    <!-- All blog posts -->
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="post in posts" :key="post.id"
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
                <span v-if="post.date">{{ post.date }}</span>
                <span v-if="post.author" class="ml-2">
                  <span class="mx-1">•</span>
                  {{ post.author }}
                </span>
              </div>
              <div v-if="post.tags && post.tags.length" class="mt-4 flex flex-wrap gap-2">
                <span v-for="tag in post.tags.slice(0, 3)" :key="tag"
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
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Blogg - T12T - Digital Tillgänglighet',
  description: 'Senaste nyheter, artiklar och insikter om digital tillgänglighet, WCAG-standarder och tillgänglig webbutveckling.'
})

// Get all blog posts ordered by date (newest first)
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

// Get the featured (latest) post
const featuredPost = computed(() => {
  if (posts.value && posts.value.length > 0) {
    return posts.value[0];
  }
  return null;
})

// Format date to Swedish locale
const formatDate = (date: string) => {
  if (!date) return '';

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('sv-SE', options);
}
</script>