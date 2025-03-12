<script setup lang="ts">
const route = useRoute()
const slugArray = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]
const slugPath = slugArray.join('/')

const { data: post } = await useAsyncData(`blog-${slugPath}`, () => {
  return queryCollection('blog').path(`/blog/${slugPath}`).first()
})
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
  <ContentRenderer v-if="post" :value="post" />
  <div v-else>Loading...</div>
</template>
