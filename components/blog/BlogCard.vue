<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" v-if="posts">
    <div v-for="post in posts" :key="post.path"
      class="card relative bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow p-2">
      <div class="p-6">
        <h3 class="text-lg font-semibold text-secondary line-clamp-3">
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
        <p>Läs <NuxtLink class="readmore text-clip" :to="post.path">{{ post.title }}</NuxtLink>
        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').order('date', 'ASC').limit(3).all()
)

</script>

<style lang="scss">
.card .readmore::after {
  content: "";
  display: block;
  inset: 0;
  position: absolute;
  z-index: 1;
}
</style>