<template>
  <div
    class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
    <div class="p-6">
      <div class="text-primary mb-4">
        <Icon :name="icon" class="h-8 w-8" />
      </div>

      <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
      <p class="text-neutral-600 mb-4">
        {{ description }}
      </p>

      <NuxtLink if="linkTo" :to="linkTo" class="inline-flex items-center text-primary hover:underline">
        <span>{{ linkText }}</span>
        <svg class="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  linkTo: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>