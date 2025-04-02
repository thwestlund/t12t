<template>
  <div class="rounded-lg border border-gray-200 overflow-hidden mb-12">
    <!-- Tabs navigation with copy button -->
    <div class="flex justify-between items-center border-b border-gray-200 p-3">
      <!-- Tab buttons on the left -->
      <div class="flex gap-2">
        <button v-for="(label, index) in labels" :key="index" :aria-checked="activeTab === index" role="radio"
          class="px-3 py-2 text-sm border-b-2 border-transparent rounded-md hover:bg-gray-100 focus:outline-none flex items-center gap-1"
          :class="activeTab === index ? 'border-b-2 border-blue-600 bg-gray-100' : ''" @click="setActiveTab(index)">
          <Icon :name="getLanguageIcon(label)" class="h-3 w-3" />
          {{ label }}
        </button>
      </div>

      <!-- Copy button on the right -->
      <button
        class="px-3 py-2 text-sm border border-gray-300 rounded hover:border-green-400 hover:text-green-500 transition-colors focus:outline-none"
        @click="copyActiveCode">
        {{ copyBtnText }}
      </button>
    </div>

    <!-- Content area with a single code display -->
    <div class="bg-white">
      <div ref="codeContainer" class="code-container"></div>

      <!-- Hidden slot to capture the content, won't be rendered -->
      <div class="hidden">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from '#imports';

const props = defineProps({
  labels: {
    type: Array as () => string[],
    required: true
  }
});

// Active tab state
const activeTab = ref(0);
// Reference to the code container where we'll place the active code
const codeContainer = ref<HTMLElement | null>(null);
// Store extracted code blocks
const codeBlocks = ref<HTMLElement[]>([]);
// Track the copy button text
const copyBtnText = ref('Kopiera');

// Extract and store all code blocks when mounted
onMounted(() => {
  setTimeout(() => {
    // Find all pre elements in THIS component's slot content only
    const hiddenSlot = codeContainer.value?.parentElement?.querySelector('.hidden');
    const preElements = hiddenSlot?.querySelectorAll('pre') || [];

    // Store references to all pre elements
    codeBlocks.value = Array.from(preElements) as HTMLElement[];

    // Set the initial active code block
    showCodeBlock(activeTab.value);
  }, 0);
});

// Function to set the active tab and show the corresponding code
const setActiveTab = (index: number) => {
  activeTab.value = index;
  showCodeBlock(index);
};

// Function to show a specific code block
const showCodeBlock = (index: number) => {
  if (!codeContainer.value || codeBlocks.value.length === 0) return;

  // Clear the container
  codeContainer.value.innerHTML = '';

  // If we have a code block for this index, show it
  if (index < codeBlocks.value.length) {
    // Clone the pre element so we don't remove it from its original location
    // This way the slot content remains intact
    const codeBlockClone = codeBlocks.value[index].cloneNode(true) as HTMLElement;

    // Add the clone to our container
    codeContainer.value.appendChild(codeBlockClone);
  }
};

// Function to extract file extension from label
const getExtensionFromLabel = (label: string): string => {
  const parts = label.split('.');
  if (parts.length > 1) {
    return parts[parts.length - 1].toLowerCase();
  }
  return '';
};

const getLanguageIcon = (label: string): string => {
  const extension = getExtensionFromLabel(label);

  switch (extension) {
    case 'html':
      return 'logos:html-5';
    case 'css':
      return 'logos:css-3';
    case 'js':
      return 'logos:javascript';
    case 'ts':
      return 'logos:typescript-icon';
    case 'py':
      return 'logos:python';
    case 'java':
      return 'logos:java';
    case 'php':
      return 'logos:php';
    case 'rb':
      return 'logos:ruby';
    case 'go':
      return 'logos:go';
    case 'rs':
      return 'logos:rust';
    case 'cs':
      return 'logos:c-sharp';
    case 'json':
      return 'logos:json';
    case 'md':
      return 'logos:markdown';
    case 'vue':
      return 'logos:vue';
    case 'jsx':
    case 'tsx':
      return 'logos:react';
    case 'sql':
      return 'logos:mysql';
    case 'xml':
      return 'heroicons:code-bracket-square';
    case 'yml':
    case 'yaml':
      return 'logos:yaml';
    case 'dockerfile':
      return 'logos:docker-icon';
    case 'graphql':
    case 'gql':
      return 'logos:graphql';
    case 'txt':
      return 'heroicons:document-text';
    default:
      return 'heroicons-solid:code';
  }
}

// Function to copy the active code
const copyActiveCode = () => {
  if (!codeContainer.value) return;

  // Get the pre element in the container
  const preElement = codeContainer.value.querySelector('pre');
  if (!preElement) return;

  // Get the text content
  const codeText = preElement.textContent || '';

  // Copy to clipboard
  navigator.clipboard.writeText(codeText)
    .then(() => {
      // Show copied message
      copyBtnText.value = 'Kopierad!';

      // Reset after 2 seconds
      setTimeout(() => {
        copyBtnText.value = 'Kopiera';
      }, 2000);
    })
    .catch(err => {
      console.error('Kunde inte kopiera:', err);
    });
};
</script>

<style>
/* Additional styling for code blocks */
.code-container pre {
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
}

/* Ensure code is properly displayed */
.code-container pre code {
  font-family: monospace;
  font-size: 0.875rem;
  /* text-sm */
}
</style>