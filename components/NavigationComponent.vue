<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const navigationItems = [
  { label: 'Hem', path: '/' },
  { label: 'Guider', path: '/guider' },
  { label: 'Produkter', path: '/produkter' },
  { label: 'Blogg', path: '/blog' },
  { label: 'Om', path: '/om' }
]
</script>

<template>
  <nav aria-label="Huvudnavigation">
    <button @click="toggleMenu" :aria-expanded="isMenuOpen" class="mobile-menu-toggle">
      {{ isMenuOpen ? 'Stäng meny' : 'Öppna meny' }}
    </button>

    <ul id="main-menu" :class="{ 'menu-open': isMenuOpen }">
      <li v-for="item in navigationItems" :key="item.path">
        <NuxtLink :to="item.path" :aria-current="$route.path === item.path ? 'page' : undefined">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.mobile-menu-toggle {
  display: none;
  /* Show only on mobile */
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: block;
  }

  #main-menu {
    display: none;
  }

  #main-menu.menu-open {
    display: block;
  }
}
</style>