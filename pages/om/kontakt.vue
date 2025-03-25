<template>
  <div class="max-w-3xl mx-auto py-4">
    <h1 class="text-3xl sm:text-4xl font-bold">Kontakta oss</h1>

    <div class="max-w-none">
      <p>
        Vi på T12T välkomnar frågor, feedback och förslag om vår plattform
        och innehåll. Du kan nå oss på nedastående sätt.
      </p>
    </div>
    <!-- Alternative contact methods -->
    <div class="flex flex-col gap-4">
      <div class="py-5 border-b">
        <h2 class="text-lg font-semibold">Kontaktinformation</h2>
      </div>

      <div class="px-6 py-6">
        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <dt class="text-sm font-medium text-neutral-500">E-post</dt>
            <dd class="mt-1 text-base text-neutral-900">
              <a href="mailto:thommy@forge-it.se" class="text-primary hover:underline">thommy@forge-it.se</a>
            </dd>
          </div>

          <div>
            <dt class="text-sm font-medium text-neutral-500">GitHub</dt>
            <dd class="mt-1 text-base text-neutral-900">
              <a href="https://github.com/thwestlund" target="_blank" rel="noopener noreferrer"
                class="text-primary hover:underline">github.com/thwestlund</a>
            </dd>
          </div>

          <div>
            <dt class="text-sm font-medium text-neutral-500">LinkedIn</dt>
            <dd class="mt-1 text-base text-neutral-900">
              <a href="https://www.linkedin.com/in/thommy-westlund-02090650/" target="_blank" rel="noopener noreferrer"
                class="text-primary hover:underline">https://www.linkedin.com/in/thommy-westlund-02090650/</a>
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- FAQ -->
    <div>
      <div class="px-6 py-5 border-b border-neutral-200">
        <h2 class="text-lg font-semibold">Vanliga frågor</h2>
      </div>

      <div class="px-6 py-6 divide-y divide-neutral-200">
        <div class="py-4">
          <h3 class="text-base font-medium text-neutral-900">Hur kan jag bidra till T12T?</h3>
          <div class="mt-2 text-sm text-neutral-600">
            <p>Vi välkomnar bidrag från samhället! Du kan bidra med innehåll, korrigeringar eller förbättringar genom
              att skicka en pull request till vår GitHub-repo eller kontakta oss direkt via formuläret ovan.</p>
          </div>
        </div>

        <div class="py-4">
          <h3 class="text-base font-medium text-neutral-900">Hur snabbt kan jag förvänta mig svar?</h3>
          <div class="mt-2 text-sm text-neutral-600">
            <p>Vi strävar efter att svara på alla förfrågningar inom 2–3 arbetsdagar.</p>
          </div>
        </div>

        <div class="py-4">
          <h3 class="text-base font-medium text-neutral-900">Kan T12T hjälpa till med tillgänglighetsgranskningar?</h3>
          <div class="mt-2 text-sm text-neutral-600">
            <p>Ja, vi kan hjälpa till med att sätta dig i kontakt med lämpliga experter för tillgänglighetsgranskningar.
              Kontakta oss med information om ditt projekt så återkommer vi med mer information.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO metadata
useSeoMeta({
  title: 'Kontakta oss - T12T',
  description: 'Kontakta T12T för frågor, feedback eller samarbeten kring digital tillgänglighet.'
})

// Form data and state
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacyConsent: false
})

const errors = ref({})
const isSubmitting = ref(false)
const formStatus = ref(null)

// Form validation
const validateForm = () => {
  const newErrors = {}

  if (!formData.value.name.trim()) {
    newErrors.name = 'Namn är obligatoriskt'
  }

  if (!formData.value.email.trim()) {
    newErrors.email = 'E-post är obligatoriskt'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    newErrors.email = 'Vänligen ange en giltig e-postadress'
  }

  if (!formData.value.subject.trim()) {
    newErrors.subject = 'Ämne är obligatoriskt'
  }

  if (!formData.value.message.trim()) {
    newErrors.message = 'Meddelande är obligatoriskt'
  } else if (formData.value.message.length < 10) {
    newErrors.message = 'Meddelandet är för kort (minst 10 tecken)'
  }

  if (!formData.value.privacyConsent) {
    newErrors.privacyConsent = 'Du måste godkänna vår integritetspolicy'
  }

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

// Form submission
const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  formStatus.value = null

  try {
    // In a real implementation, you would submit the form to a backend API
    // For demo purposes, we'll simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Success response
    formStatus.value = {
      type: 'success',
      message: 'Tack för ditt meddelande! Vi återkommer så snart som möjligt.'
    }

    // Reset form on success
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
      privacyConsent: false
    }
  } catch (error) {
    // Error response
    formStatus.value = {
      type: 'error',
      message: 'Det uppstod ett fel vid skickandet av formuläret. Vänligen försök igen senare.'
    }
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
