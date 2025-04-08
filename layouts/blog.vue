<template>
  <div class="min-h-screen flex flex-col">
    <BaseTopBar />

    <div class="bg-primary-light">
      <div class="container-main py-3 lg:py-6">
        <NuxtLink to="/blog" class="text-primary hover:underline inline-flex items-center">
          <Icon name="line-md:arrow-left" class="h-4 w-4 mr-2" />
          Tillbaka till blogg
        </NuxtLink>
      </div>
    </div>

    <main id="main-content" class="flex-grow">
      <div class="container-main py-8">
        <div class="max-w-80ch">
          <slot />

          <!-- Blog post footer with related posts and tags could go here -->
          <div v-if="$route.params.slug" class="mt-12 pt-8 border-t border-neutral-200">
            <div class="flex flex-col md:flex-row md:justify-between">
              <div class="mb-6 md:mb-0">
                <h2 class="text-xl font-semibold mb-4">Taggar</h2>
                <div class="flex flex-wrap gap-2">
                  <NuxtLink 
                    v-for="tag in blogTags" :key="tag" :to="`/blog/tag/${tag}`"
                    class="bg-neutral-100 hover:bg-neutral-200 px-3 py-1 rounded-full text-sm">
                    {{ tag }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>


    <DefaultFooter />
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)
const route = useRoute()

// Get tags from the current blog post if viewing a specific post
const blogTags = computed(() => {
  if (route.params.slug) {
    // This would need to be replaced with actual tag data from your content
    return ['WCAG', 'Standarder', 'Webbutveckling']
  }
  return []
})

// Close mobile menu when route changes
watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})
</script>