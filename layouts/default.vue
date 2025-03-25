<template>
  <div class="min-h-screen flex flex-col">
    <BaseTopBar />

    <main class="flex-grow" id="main-content">
      <div>
        <slot />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>