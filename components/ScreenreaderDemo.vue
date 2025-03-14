<template>
  <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
    <div class="px-6 py-4 bg-primary-light border-b border-neutral-200">
      <h3 class="text-lg font-semibold text-primary">{{ title }}</h3>
      <p v-if="description" class="mt-1 text-sm text-neutral-600">{{ description }}</p>
    </div>

    <div class="p-6">
      <!-- Code example -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <h4 class="text-sm font-medium text-neutral-500">Kod</h4>
          <button @click="copyCode"
            class="inline-flex items-center text-xs font-medium text-primary hover:text-primary-hover"
            :aria-label="copied ? 'Kopierad' : 'Kopiera kod'">
            <svg v-if="!copied" class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
              </path>
            </svg>
            <svg v-else class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {{ copied ? 'Kopierad!' : 'Kopiera' }}
          </button>
        </div>
        <div class="relative">
          <pre ref="codeBlock"
            class="bg-neutral-50 rounded-md p-4 overflow-x-auto text-sm"><code>{{ code }}</code></pre>
        </div>
      </div>

      <!-- Demo output -->
      <div class="mb-6">
        <h4 class="text-sm font-medium text-neutral-500 mb-2">Resultat</h4>
        <div class="border border-neutral-200 rounded-md p-6 bg-white" :class="{ 'bg-neutral-50': demoHighlighted }">
          <div ref="demoContainer"></div>
        </div>
      </div>

      <!-- Screenreader output -->
      <div>
        <h4 class="text-sm font-medium text-neutral-500 mb-2">Så här låter det för skärmläsare</h4>
        <button @click="playAudio"
          class="inline-flex items-center px-4 py-2 border border-neutral-300 shadow-sm text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-3"
          :aria-label="isPlaying ? 'Pausa uppläsning' : 'Spela upp hur detta låter i en skärmläsare'">
          <svg v-if="!isPlaying" class="mr-2 h-5 w-5 text-neutral-500" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
            </path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <svg v-else class="mr-2 h-5 w-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          {{ isPlaying ? 'Pausa' : 'Spela upp' }}
        </button>

        <div class="bg-neutral-50 rounded-md p-4 text-sm text-neutral-600">
          <p v-html="screenreaderText"></p>
        </div>
      </div>

      <!-- Additional notes -->
      <div v-if="notes" class="mt-6 text-sm text-neutral-600">
        <h4 class="font-medium text-neutral-700 mb-2">Viktigt att tänka på</h4>
        <div class="prose prose-sm" v-html="notes"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  code: {
    type: String,
    required: true
  },
  screenreaderText: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    default: ''
  },
  audioSrc: {
    type: String,
    default: ''
  }
})

const codeBlock = ref(null)
const demoContainer = ref(null)
const copied = ref(false)
const isPlaying = ref(false)
const demoHighlighted = ref(false)
const audio = ref(null)

// Copy code to clipboard
const copyCode = () => {
  if (navigator.clipboard && codeBlock.value) {
    navigator.clipboard.writeText(props.code)
      .then(() => {
        copied.value = true
        setTimeout(() => {
          copied.value = false
        }, 2000)
      })
      .catch(err => {
        console.error('Failed to copy:', err)
      })
  }
}

// Play/pause audio demo
const playAudio = () => {
  if (!audio.value) return

  if (isPlaying.value) {
    audio.value.pause()
  } else {
    audio.value.play()
    highlightDemo()
  }
}

// Highlight the demo while playing
const highlightDemo = () => {
  demoHighlighted.value = true
  setTimeout(() => {
    demoHighlighted.value = false
  }, 1000)
}

// Watch for audio playing state
watch(() => audio.value, (newAudio) => {
  if (newAudio) {
    newAudio.addEventListener('play', () => {
      isPlaying.value = true
    })
    newAudio.addEventListener('pause', () => {
      isPlaying.value = false
    })
    newAudio.addEventListener('ended', () => {
      isPlaying.value = false
    })
  }
})

// Initialize
onMounted(() => {
  // Render demo HTML
  if (demoContainer.value) {
    demoContainer.value.innerHTML = props.code
  }

  // Initialize audio if provided
  if (props.audioSrc) {
    audio.value = new Audio(props.audioSrc)
  } else {
    // Use browser's speech synthesis as a fallback
    if ('speechSynthesis' in window) {
      audio.value = {
        play: () => {
          const utterance = new SpeechSynthesisUtterance(
            props.screenreaderText.replace(/<[^>]*>/g, '')
          )
          utterance.lang = 'sv-SE'
          utterance.rate = 0.9
          speechSynthesis.speak(utterance)
          isPlaying.value = true

          utterance.onend = () => {
            isPlaying.value = false
          }
        },
        pause: () => {
          speechSynthesis.cancel()
          isPlaying.value = false
        }
      }
    }
  }
})
</script>