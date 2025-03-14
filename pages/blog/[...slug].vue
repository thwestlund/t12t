<template>
  <div v-if="post">
    <!-- Post header -->
    <div class="mb-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ post.title }}</h1>
      <div class="flex items-center text-neutral-600">
        <span v-if="post.date" class="mr-4">
          {{ post.date }}
        </span>
        <span v-if="post.author" class="mr-4">
          <span class="mr-1">Av:</span>
          {{ post.author }}
        </span>
        <!--span v-if="readingTime" class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ readingTime }} min läsning
        </span-->
      </div>

      <!-- Tags -->
      <div v-if="post.tags && post.tags.length" class="mt-4 flex flex-wrap gap-2">
        <span v-for="tag in post.tags" :key="tag"
          class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-light text-primary">
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Post content -->
    <div class="prose max-w-none">
      <ContentRenderer :value="post" />
    </div>
  </div>
  <div v-else class="py-12 text-center">
    <p class="text-xl">Laddar inlägg...</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blog'
})

const route = useRoute()
const slugArray = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]
const slugPath = slugArray.join('/')
console.log(route.params.slug)
// Fetch the blog post
const { data: post } = await useAsyncData(`blog-${slugPath}`, () => {
  return queryCollection('blog').path(`/blog/${slugPath}`).first()
})

// Set SEO meta tags
useSeoMeta({
  title: () => post.value?.title ? `${post.value.title} - T12T` : 'Blogg - T12T',
  description: () => post.value?.description || 'Artikel om digital tillgänglighet från T12T'
})

// Calculate reading time based on content length
/*const readingTime = computed(() => {
  if (!post.value || !post.value.body) return null

  // Average reading speed: 200 words per minute
  /const wordCount = post.value.body.split(/\s+/).length
  return Math.ceil(wordCount / 200)
})*/

// Format date to Swedish locale
const formatDate = (date: string) => {
  if (!date) return ''

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('sv-SE', options)
}
</script>