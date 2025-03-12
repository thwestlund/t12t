<template>
  <div>
    <h1>Blogg</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
        <span v-if="post.date" class="post-date"> - {{ new Date(post.date).toLocaleDateString('sv-SE') }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Get all blog posts ordered by date (newest first)
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

console.log('All blog posts:', posts.value)
</script>

<style scoped>
.post-date {
  color: #666;
  font-size: 0.9em;
}
</style>

<style></style>
