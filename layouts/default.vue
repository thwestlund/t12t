<template>
  <div class="min-h-screen flex flex-col">
    <TopBar />

    <main class="flex-grow">
      <div>
        <slot />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>