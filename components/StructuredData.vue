<template>
  <div v-if="false">
    <!-- This component doesn't render anything visible -->
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'

const props = defineProps({
  // Type of structured data (Article, WebPage, FAQPage, etc.)
  type: {
    type: String,
    required: true,
    validator: (value) => [
      'WebSite',
      'WebPage',
      'Article',
      'BlogPosting',
      'FAQPage',
      'BreadcrumbList',
      'Organization',
      'Course'
    ].includes(value)
  },
  // Data to use for the structured data
  data: {
    type: Object,
    required: true
  }
})

// Generate structured data based on the type
const generateStructuredData = () => {
  let structuredData = {}

  // Common properties
  structuredData['@context'] = 'https://schema.org'
  structuredData['@type'] = props.type

  // Add specific properties based on the type
  switch (props.type) {
    case 'WebSite':
      structuredData = {
        ...structuredData,
        name: props.data.name || 'T12T - Digital Tillgänglighet',
        url: props.data.url || 'https://t12t.se',
        description: props.data.description || 'Sveriges kunskapsplattform för digital tillgänglighet',
        inLanguage: props.data.inLanguage || 'sv-SE',
        potentialAction: {
          '@type': 'SearchAction',
          'target': {
            '@type': 'EntryPoint',
            'urlTemplate': `${props.data.url || 'https://t12t.se'}/sok?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      }
      break

    case 'WebPage':
      structuredData = {
        ...structuredData,
        name: props.data.name || document.title,
        description: props.data.description,
        url: props.data.url || window.location.href,
        inLanguage: props.data.inLanguage || 'sv-SE',
        datePublished: props.data.datePublished,
        dateModified: props.data.dateModified || props.data.datePublished,
        isPartOf: {
          '@type': 'WebSite',
          name: 'T12T - Digital Tillgänglighet',
          url: 'https://t12t.se'
        }
      }
      break

    case 'Article':
    case 'BlogPosting':
      structuredData = {
        ...structuredData,
        headline: props.data.headline || document.title,
        description: props.data.description,
        image: props.data.image,
        author: {
          '@type': 'Person',
          name: props.data.author || 'T12T Team'
        },
        publisher: {
          '@type': 'Organization',
          name: 'T12T',
          logo: {
            '@type': 'ImageObject',
            url: props.data.publisherLogo || 'https://t12t.se/logo.png'
          }
        },
        datePublished: props.data.datePublished,
        dateModified: props.data.dateModified || props.data.datePublished,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': props.data.url || window.location.href
        }
      }
      break

    case 'FAQPage':
      structuredData = {
        ...structuredData,
        mainEntity: props.data.questions.map(question => ({
          '@type': 'Question',
          name: question.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: question.answer
          }
        }))
      }
      break

    case 'BreadcrumbList':
      structuredData = {
        ...structuredData,
        itemListElement: props.data.items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      }
      break

    case 'Organization':
      structuredData = {
        ...structuredData,
        name: props.data.name || 'T12T',
        url: props.data.url || 'https://t12t.se',
        logo: props.data.logo || 'https://t12t.se/logo.png',
        sameAs: props.data.socialLinks || [],
        contactPoint: props.data.contactPoints || []
      }
      break

    case 'Course':
      structuredData = {
        ...structuredData,
        name: props.data.name,
        description: props.data.description,
        provider: {
          '@type': 'Organization',
          name: props.data.provider || 'T12T',
          sameAs: props.data.providerUrl || 'https://t12t.se'
        }
      }
      break
  }

  return structuredData
}

// Add the structured data to the page
const addStructuredData = () => {
  // Remove any existing structured data with the same type
  removeStructuredData()

  // Generate the new structured data
  const structuredData = generateStructuredData()

  // Create a new script element
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = `structured-data-${props.type.toLowerCase()}`
  script.innerHTML = JSON.stringify(structuredData)

  // Add it to the head
  document.head.appendChild(script)
}

// Remove the structured data from the page
const removeStructuredData = () => {
  const existingScript = document.getElementById(`structured-data-${props.type.toLowerCase()}`)
  if (existingScript) {
    existingScript.remove()
  }
}

// Add the structured data when the component is mounted
onMounted(() => {
  addStructuredData()
})

// Update the structured data when the data changes
watch(() => props.data, () => {
  addStructuredData()
}, { deep: true })

// Remove the structured data when the component is unmounted
onBeforeUnmount(() => {
  removeStructuredData()
})
</script>