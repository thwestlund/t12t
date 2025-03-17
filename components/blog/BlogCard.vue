<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" v-if="posts">
    <div v-for="post in posts" :key="post.path"
      class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
      <NuxtLink :to="post.path" class="block hover:no-underline">
        <div class="p-6">
          <h3 class="text-lg font-semibold mb-2 text-secondary hover:text-primary line-clamp-2">
            {{ post.title }}
          </h3>

          <div class="flex items-center text-sm text-neutral-500 mb-3">
            <NuxtTime v-if="post.date" :datetime="post.date" time-zone="Europe/Stockholm" format="YYYY-MM-DD" />
            <span v-if="post.author" class="ml-2">
              <span class="mx-1">•</span>
              {{ post.author }}
            </span>
          </div>

          <p class="text-neutral-600 line-clamp-3 mb-4">
            {{ post.description }}
          </p>

          <span class="text-primary text-sm font-medium hover:underline">Läs mer</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').order('date', 'ASC').limit(3).all()
)

</script>