<template>
  <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
    <div class="bg-primary-light px-4 py-3 border-b border-neutral-200">
      <h2 class="text-lg font-semibold text-primary">{{ title }}</h2>
    </div>

    <nav aria-label="Sidmeny" class="py-2">
      <template v-for="(section, sectionIndex) in navigation" :key="sectionIndex">
        <!-- Section title (if multiple sections) -->
        <div v-if="section.title && navigation.length > 1"
          class="px-4 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          {{ section.title }}
        </div>

        <!-- Section items -->
        <ul class="mb-3">
          <li v-for="(item, itemIndex) in section.items" :key="`${sectionIndex}-${itemIndex}`">
            <!-- Link item -->
            <NuxtLink :to="item.to" class="flex items-center px-4 py-2 text-sm hover:bg-neutral-50"
              :class="isActive(item) ? 'text-primary font-medium bg-primary-light' : 'text-secondary'"
              exact-active-class="">
              <!-- Optional icon -->
              <span v-if="item.icon" class="mr-3 text-neutral-500">
                <component :is="item.icon" class="h-5 w-5" />
              </span>

              <span>{{ item.text }}</span>

              <!-- Indicator for active item -->
              <span v-if="isActive(item)" class="ml-auto">
                <svg class="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </NuxtLink>

            <!-- Nested sub-navigation -->
            <ul v-if="item.children && item.children.length && (isActive(item) || alwaysShowChildren)"
              class="ml-6 border-l border-neutral-200">
              <li v-for="(child, childIndex) in item.children" :key="`${sectionIndex}-${itemIndex}-${childIndex}`">
                <NuxtLink :to="child.to" class="flex items-center px-4 py-2 text-sm border-l-2 hover:bg-neutral-50"
                  :class="isActive(child) ? 'text-primary font-medium border-primary' : 'text-neutral-600 border-transparent'"
                  exact-active-class="">
                  {{ child.text }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>

        <!-- Divider between sections -->
        <div v-if="sectionIndex < navigation.length - 1" class="border-t border-neutral-200 my-2"></div>
      </template>
    </nav>

    <!-- Extra content slot -->
    <div v-if="$slots.extra" class="border-t border-neutral-200 p-4">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const props = defineProps({
  title: {
    type: String,
    default: 'Navigation'
  },
  navigation: {
    type: Array,
    required: true
  },
  alwaysShowChildren: {
    type: Boolean,
    default: false
  }
})

// Check if a navigation item is active
const isActive = (item) => {
  // If it's an exact match
  if (route.path === item.to) {
    return true
  }

  // Check if current path is a sub-path of the item
  // This works for parent items to show as active when a child is active
  const isSubpath = route.path.startsWith(item.to) && item.to !== '/'

  // If it has an "exact" property, respect it
  if (item.exact) {
    return route.path === item.to
  }

  return isSubpath
}
</script>