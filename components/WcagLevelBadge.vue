<template>
  <span class="items-center px-2.5 py-0.5 rounded-full text-xs font-medium" :class="levelClass" :title="levelTitle">
    {{ level }}
  </span>
</template>

<script setup>
const props = defineProps({
  level: {
    type: String,
    required: true,
    validator: (value) => ['A', 'AA', 'AAA'].includes(value)
  }
})

const levelClass = computed(() => {
  const classes = {
    'A': 'bg-red-100 text-red-800',
    'AA': 'bg-amber-100 text-amber-800',
    'AAA': 'bg-green-100 text-green-800'
  }

  return classes[props.level] || 'bg-neutral-100 text-neutral-800'
})

const levelTitle = computed(() => {
  const titles = {
    'A': 'Nivå A - Grundläggande tillgänglighetskrav',
    'AA': 'Nivå AA - Standard för de flesta webbplatser, inklusive offentliga organisationer',
    'AAA': 'Nivå AAA - Högsta nivån av tillgänglighet'
  }

  return titles[props.level] || ''
})
</script>