<template>
  <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-4 sticky top-4">
    <h2 class="text-lg font-semibold mb-3">{{ title }}</h2>

    <nav aria-label="Sidnavigation">
      <ul class="space-y-1">
        <li v-for="(link, index) in links" :key="index" class="pl-2">
          <a :href="`#${link.id}`" class="block py-1 border-l-2 hover:text-primary transition-colors" :class="[
            activeSection === link.id
              ? 'text-primary border-primary font-medium'
              : 'text-neutral-600 border-transparent hover:border-neutral-300'
          ]">
            {{ link.text }}
          </a>

          <!-- Render subheadings if they exist -->
          <ul v-if="link.children && link.children.length > 0" class="mt-1 mb-2 space-y-1">
            <li v-for="(child, childIndex) in link.children" :key="`${index}-${childIndex}`">
              <a :href="`#${child.id}`" class="block py-1 pl-4 border-l-2 text-sm hover:text-primary transition-colors"
                :class="[
                  activeSection === child.id
                    ? 'text-primary border-primary font-medium'
                    : 'text-neutral-500 border-transparent hover:border-neutral-300'
                ]">
                {{ child.text }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'På denna sida'
  },
  selector: {
    type: String,
    default: 'h2, h3'
  },
  minHeadings: {
    type: Number,
    default: 2
  },
  contentSelector: {
    type: String,
    default: '.prose'
  },
  offset: {
    type: Number,
    default: 100
  }
})

const links = ref([])
const activeSection = ref('')

// Generate links from page headings
onMounted(() => {
  // Wait for content to be rendered
  setTimeout(() => {
    generateLinks()
    setupIntersectionObserver()
    window.addEventListener('resize', generateLinks)
  }, 500)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', generateLinks)
})

const generateLinks = () => {
  const content = document.querySelector(props.contentSelector)
  if (!content) return

  const headings = content.querySelectorAll(props.selector)
  if (headings.length < props.minHeadings) return

  const newLinks = []
  let currentParent = null

  headings.forEach(heading => {
    // Skip headings without IDs
    if (!heading.id) return

    const link = {
      id: heading.id,
      text: heading.textContent,
      level: parseInt(heading.tagName.substring(1))
    }

    // Check if this is a main heading (h2) or a subheading (h3+)
    if (link.level === 2) {
      link.children = []
      newLinks.push(link)
      currentParent = link
    } else if (currentParent && link.level > 2) {
      currentParent.children.push(link)
    } else {
      newLinks.push(link)
    }
  })

  links.value = newLinks
}

const setupIntersectionObserver = () => {
  const headingElements = document.querySelectorAll(`${props.contentSelector} ${props.selector}`)

  if (!headingElements.length) return

  const observerOptions = {
    root: null,
    rootMargin: `-${props.offset}px 0px -70% 0px`,
    threshold: 0
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Find visible headings
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, observerOptions)

  headingElements.forEach(el => {
    if (el.id) {
      observer.observe(el)
    }
  })
}
</script>