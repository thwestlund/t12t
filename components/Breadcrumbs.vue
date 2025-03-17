<template>
  <nav aria-label="Brödsmulor" class="mb-6">
    <ol class="flex flex-wrap items-center text-sm text-neutral-500">
      <li>
        <NuxtLink to="/" class="hover:text-primary">Hem</NuxtLink>
      </li>

      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
        <svg class="h-4 w-4 mx-2 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>

        <NuxtLink v-if="index < breadcrumbs.length - 1" :to="crumb.path" class="hover:text-primary">
          {{ crumb.text }}
        </NuxtLink>

        <span v-else class="font-medium text-neutral-900">{{ crumb.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
const route = useRoute()

// Generate breadcrumbs based on the current route
const breadcrumbs = computed(() => {
  const path = route.path
  if (path === '/') return []

  const segments = path.split('/').filter(segment => segment)
  const crumbs = []
  let currentPath = ''

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    currentPath += `/${segment}`

    // Skip numeric segments in paths like /blog/2025/03/article
    if (!isNaN(segment) && ['blog'].includes(segments[i - 1])) {
      continue
    }

    // Generate a human-readable name based on the path segment
    let text = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, letter => letter.toUpperCase())

    // Special cases for common paths
    const nameMap = {
      'blog': 'Blogg',
      //'skarmlasare': 'Skärmläsare',
      'testning': 'Testning',
      'sok': 'Sök',
      'kunskapsbank': 'Kunskapsbank',
      'om': 'Om T12T',
      'kontakt': 'Kontakt'
    }

    if (nameMap[segment]) {
      text = nameMap[segment]
    }

    crumbs.push({
      text,
      path: currentPath
    })
  }

  return crumbs
})
</script>