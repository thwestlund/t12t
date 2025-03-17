<template>
  <div class="bg-gradient-to-b from-primary-light to-white py-12 md:py-20">
    <div class="container-main">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold text-secondary mb-6">
            {{ title }}
          </h1>

          <p class="text-xl text-neutral-700 mb-8">
            {{ description }}
          </p>

          <div class="flex flex-wrap gap-4">
            <NuxtLink :to="primaryButtonUrl"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              {{ primaryButtonText }}
            </NuxtLink>

            <NuxtLink v-if="secondaryButtonText" :to="secondaryButtonUrl"
              class="inline-flex items-center px-6 py-3 border border-neutral-300 text-base font-medium rounded-md bg-white text-secondary hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              {{ secondaryButtonText }}
            </NuxtLink>
          </div>
        </div>

        <div class="hidden lg:block">
          <slot name="image">
            <!-- Default illustration -->
            <svg class="w-full h-auto max-w-lg mx-auto" viewBox="0 0 500 500" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <!-- Abstract illustration representing accessibility -->
              <circle cx="250" cy="250" r="200" fill="#E6F0FF" />
              <path
                d="M250 120C179.471 120 120 179.471 120 250C120 320.529 179.471 380 250 380C320.529 380 380 320.529 380 250C380 179.471 320.529 120 250 120ZM250 150C303.019 150 346.603 193.584 346.603 246.603C346.603 299.622 303.019 343.206 250 343.206C196.981 343.206 153.397 299.622 153.397 246.603C153.397 193.584 196.981 150 250 150Z"
                fill="#0066CC" fill-opacity="0.7" />
              <path
                d="M250 180C213.726 180 184.5 209.226 184.5 245.5C184.5 281.774 213.726 311 250 311C286.274 311 315.5 281.774 315.5 245.5C315.5 209.226 286.274 180 250 180ZM250 200C275.262 200 295.5 220.738 295.5 246C295.5 271.262 275.262 292 250 292C224.738 292 204.5 271.262 204.5 246C204.5 220.738 224.738 200 250 200Z"
                fill="#0066CC" />
              <circle cx="250" cy="246" r="30" fill="#0066CC" />
              <path d="M80 250H120" stroke="#0066CC" stroke-width="6" stroke-linecap="round" />
              <path d="M380 250H420" stroke="#0066CC" stroke-width="6" stroke-linecap="round" />
              <path d="M250 80V120" stroke="#0066CC" stroke-width="6" stroke-linecap="round" />
              <path d="M250 380V420" stroke="#0066CC" stroke-width="6" stroke-linecap="round" />
              <path d="M145 145L172 172" stroke="#0066CC" stroke-width="6" stroke-linecap="round" />
              <path d="M328 328L355 355" stroke="#0066CC" stroke-width="6" stroke-linecap="round" />
              <path d="M145 355L172 328" stroke="#0066CC" stroke-width="6" stroke-linecap="round" />
              <path d="M328 172L355 145" stroke="#0066CC" stroke-width="6" stroke-linecap="round" />
            </svg>
          </slot>
        </div>
      </div>

      <!-- Features section (optional) -->
      <div v-if="features && features.length" class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index"
          class="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
          <Icon v-if="feature.icon" :name="feature.icon" class="h-8 w-8 text-primary" />
          <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
          <p class="text-neutral-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Digital Tillgänglighet'
  },
  description: {
    type: String,
    default: 'Sveriges kunskapsbas för tillgänglig webbutveckling och digitala tjänster.'
  },
  primaryButtonText: {
    type: String,
    default: 'Kom igång'
  },
  primaryButtonUrl: {
    type: String,
    default: '/kunskapsbank'
  },
  secondaryButtonText: {
    type: String,
    default: 'Läs mer'
  },
  secondaryButtonUrl: {
    type: String,
    default: '/om'
  },
  features: {
    type: Array,
    default: () => []
  }
})
</script>