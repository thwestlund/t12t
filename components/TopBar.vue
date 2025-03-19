<template>
  <header class="bg-white shadow-sm">
    <div class="px-8 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-heading font-bold text-primary hover:no-underline flex items-center">
          <span class="sr-only">T12T - Digital Tillgänglighet</span>
          <span aria-hidden="true">T12T</span>
        </NuxtLink>

        <!-- Skip to main content link -->
        <a href="#main-content"
          class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 z-50">
          Hoppa till innehåll
        </a>

        <nav class="hidden md:block" aria-label="Huvudmeny">
          <ul class="flex space-x-8">
            <li>
              <NuxtLink to="/wcag" class="text-secondary hover:text-primary">WCAG</NuxtLink>
            </li>
            <!--li>
              <NuxtLink to="/kunskapsbank" class="text-secondary hover:text-primary py-2">Kunskapsbank</NuxtLink>
            </li-->
            <!--li>
              <NuxtLink to="/skärmläsare" class="text-secondary hover:text-primary py-2">Skärmläsare</NuxtLink>
            </li-->
            <!--li>
              <NuxtLink to="/testning" class="text-secondary hover:text-primary py-2">Testning</NuxtLink>
            </li-->
            <li>
              <NuxtLink to="/blog" class="text-secondary hover:text-primary py-2">Blogg</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/om" class="text-secondary hover:text-primary py-2">Om T12T</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Mobile menu button -->
        <button @click="isMenuOpen = !isMenuOpen" type="button"
          class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-secondary"
          :aria-expanded="isMenuOpen" aria-controls="mobile-menu" aria-label="Öppna huvudmeny">
          <span class="sr-only">{{ isMenuOpen ? 'Stäng meny' : 'Öppna meny' }}</span>
          <svg class="h-6 w-6" :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }" stroke="currentColor"
            fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="h-6 w-6" :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" stroke="currentColor"
            fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state -->
    <div id="mobile-menu" class="md:hidden" :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
      aria-label="Mobilmeny">
      <div class="pt-2 pb-4 space-y-1">
        <NuxtLink to="/kunskapsbank"
          class="block px-4 py-2 text-base font-medium text-secondary hover:bg-neutral-100">
          Kunskapsbank
        </NuxtLink>
        <NuxtLink to="/skärmläsare" class="block px-4 py-2 text-base font-medium text-secondary hover:bg-neutral-100">
          Skärmläsare
        </NuxtLink>
        <NuxtLink to="/testning" class="block px-4 py-2 text-base font-medium text-secondary hover:bg-neutral-100">
          Testning
        </NuxtLink>
        <NuxtLink to="/blog" class="block px-4 py-2 text-base font-medium text-secondary hover:bg-neutral-100">
          Blogg
        </NuxtLink>
        <NuxtLink to="/om" class="block px-4 py-2 text-base font-medium text-secondary hover:bg-neutral-100">
          Om T12T
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const isMenuOpen = ref(false)

// Close mobile menu when route changes
watch(() => useRoute().fullPath, () => {
  isMenuOpen.value = false
})
</script>