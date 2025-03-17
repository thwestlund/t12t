<template>
  <div class="w-full overflow-hidden rounded-lg border border-neutral-200 shadow-sm">
    <div class="bg-primary-light px-4 py-3 border-b border-neutral-200">
      <h3 class="text-lg font-semibold text-primary">{{ title }}</h3>
      <p v-if="description" class="mt-1 text-sm text-neutral-600">{{ description }}</p>
    </div>
    
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-neutral-200">
        <thead class="bg-neutral-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Kommando
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Funktion
            </th>
            <th v-if="showNotes" scope="col" class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Anteckning
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-neutral-200">
          <tr v-for="(shortcut, index) in shortcuts" :key="index" class="hover:bg-neutral-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <kbd 
                v-for="(key, keyIndex) in formatKeyboardShortcut(shortcut.command)" 
                :key="keyIndex"
                class="inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded mx-0.5"
              >
                {{ key }}
              </kbd>
            </td>
            <td class="px-6 py-4 text-sm text-neutral-800">
              {{ shortcut.function }}
            </td>
            <td v-if="showNotes" class="px-6 py-4 text-sm text-neutral-600">
              {{ shortcut.note || '-' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Tangentbordsgenvägar'
  },
  description: {
    type: String,
    default: ''
  },
  shortcuts: {
    type: Array,
    required: true
  },
  showNotes: {
    type: Boolean,
    default: false
  }
})

// Helper function to format keyboard shortcuts for nice display
const formatKeyboardShortcut = (shortcut) => {
  // Special case for simple key commands
  if (!shortcut.includes('+') && !shortcut.includes(',')) {
    return [shortcut]
  }
  
  // Handle combined shortcuts (with +)
  if (shortcut.includes('+')) {
    return shortcut.split('+').map(key => key.trim())
  }
  
  // Handle sequential shortcuts (with ,)
  if (shortcut.includes(',')) {
    return shortcut.split(',').map(key => key.trim())
  }
  
  return [shortcut]
}
</script>