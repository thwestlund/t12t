<template>
  <nav aria-label="Breadcrumbs" class="mb-4 lg:mb-6">
    <ol class="flex flex-wrap flex-row text-sm gap-1">
      <li class="flex items-center">
        <NuxtLink to="/" class="text-neutral-600 hover:text-primary px-2 py-3">
          Hem
        </NuxtLink>
        <svg class="h-4 w-4 text-neutral-400 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </li>
      <li v-if="isWcagPath" class="flex items-center">
        <NuxtLink to="/wcag" class="text-neutral-600 hover:text-primary px-2 py-3">
          WCAG
        </NuxtLink>
        <svg 
          v-if="breadcrumbs.length > 0" class="h-4 w-4 text-neutral-400 mx-2" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </li>
      <template v-for="(crumb, index) in breadcrumbs" :key="index">
        <li class="flex items-center">

          <span :class="index < breadcrumbs.length - 1 ? text-primary : text-secondary" class=" font-medium">{{ crumb.title }}</span>
          <svg 
            v-if="index < breadcrumbs.length - 1" class="h-4 w-4 text-neutral-400 mx-2" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const route = useRoute();
const breadcrumbs = ref([]);

// Check if the current path is in the WCAG section
const isWcagPath = computed(() => {
  return route.path.startsWith('/wcag');
});

// Process the current route to generate breadcrumbs
const generateBreadcrumbs = async () => {
  const newBreadcrumbs = [];

  // Extract route parts for WCAG path
  const pathParts = route.path.split('/').filter(part => part);

  // Skip "wcag" (already in the static breadcrumb)
  const relevantParts = isWcagPath.value ? pathParts.slice(1) : pathParts;

  // For WCAG paths, handle special structure (principle/guideline/criterion)
  if (relevantParts.length > 0 && isWcagPath.value) {
    try {
      // For each path segment, build breadcrumb
      for (let i = 0; i < relevantParts.length - 1; i++) {
        // Build the correct path with proper prefix
        const currentPath = `/wcag/${relevantParts.slice(0, i + 1).join('/')}`;
        const content = await queryCollection('wcag').where('id', 'LIKE', `%${currentPath.substring(1)}%`).first();
        // Determine what type of item this is
        let title;

        if (i === 0) {
          // This is a principle (1, 2, 3, 4)
          const principleTitles = {
            '1': 'Möjlig att uppfatta',
            '2': 'Hanterbar',
            '3': 'Begriplig',
            '4': 'Robust',
            '5': 'Likhet'
          };
          title = `${relevantParts[i]}. ${principleTitles[relevantParts[i]] || 'Princip'}`;
        }
        else if (i === 1) {
          // This is a guideline
          console.log('relevantParts[i - 1]:', relevantParts[i - 1]);
          title = `${relevantParts[i - 1]}.${relevantParts[i]} ${content?.guidelineName || 'Riktlinje'}`;
        }
        else if (i === 2) {
          // This is a criterion
          //const content = await queryCollection('wcag').where('id', 'LIKE', `%${currentPath.substring(1)}%`).first();

          if (content) {
            title = `${content.title}`;
          } else {
            title = `${relevantParts[i - 2]}.${relevantParts[i - 1]}.${relevantParts[i]} Kriterium`;
          }
        }
        else {
          // This is a subpage or additional content
          //const content = await queryCollection('wcag').where('id', 'LIKE', `%${currentPath.substring(1)}%`).first();
          title = content?.title || relevantParts[i];
        }

        newBreadcrumbs.push({
          title,
          path: currentPath
        });
      }
    } catch (error) {
      console.error('Error generating breadcrumbs:', error);
    }
  }

  breadcrumbs.value = newBreadcrumbs;
};

// Generate breadcrumbs on route change
watch(
  () => route.path,
  () => {
    generateBreadcrumbs();
  },
  { immediate: true }
);
</script>