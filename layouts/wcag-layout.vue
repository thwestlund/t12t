<template>
  <div class="min-h-screen flex flex-col">
    <TopBar />

    <div class="py-4 px-4 lg:py-8 lg:px-8">
      <WcagBreadcrumbs />

      <div class="flex flex-col xl:flex-row gap-8">
        <div class="h-full overflow-auto lg:min-w-96">
          <WcagSidebarDynamic />
        </div>
        <slot />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>