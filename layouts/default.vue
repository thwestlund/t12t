<template>
  <div class="min-h-screen flex flex-col">
    <BaseTopBar />

    <main id="main-content" class="flex-grow">
      <div>
        <slot />
      </div>
    </main>

    <DefaultFooter />
  </div>
</template>

<script setup lang="ts">
</script>