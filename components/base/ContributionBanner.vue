<template>
  <div class="bg-primary-light rounded-lg p-8">
    <div class="flex flex-col md:flex-row items-center">
      <div class="md:flex-1 mb-6 md:mb-0 md:mr-8">
        <h2 class="text-2xl font-bold text-secondary mb-4">Hjälp till att förbättra T12T</h2>
        <p class="text-neutral-700 mb-6">
          T12T är ett gemenskapsdrivet projekt. Saknar du information eller har du förslag
          på förbättringar? Dina bidrag hjälper oss att göra T12T bättre för alla.
        </p>
        <NuxtLink 
          to="/om/kontakt"
          class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Bidra till T12T
        </NuxtLink>
      </div>
      <div class="md:flex-1">
        <img 
          src="assets/img/undraw_collab_h1mq.svg" alt="Illustration av personer som samarbetar"
          class="max-w-md mx-auto" >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>