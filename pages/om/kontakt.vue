<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl sm:text-4xl font-bold mb-6">Kontakta oss</h1>

    <div class="prose max-w-none mb-8">
      <p>
        Vi på T12T välkomnar frågor, feedback och förslag om vår plattform
        och innehåll. Du kan nå oss på flera olika sätt.
      </p>
    </div>

    <!--div class="bg-white shadow-sm rounded-lg overflow-hidden mb-10">
      <div class="px-6 py-5 border-b border-neutral-200">
        <h2 class="text-lg font-semibold">Kontaktformulär</h2>
        <p class="mt-1 text-sm text-neutral-600">Fyll i formuläret nedan så återkommer vi så snart som möjligt.</p>
      </div>

      <div class="px-6 py-6">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-neutral-700">Namn <span
                  class="text-red-500">*</span></label>
              <input id="name" v-model="formData.name" type="text" required
                class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
                :aria-invalid="errors.name ? 'true' : 'false'"
                :aria-describedby="errors.name ? 'name-error' : undefined" />
              <p v-if="errors.name" id="name-error" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-neutral-700">E-post <span
                  class="text-red-500">*</span></label>
              <input id="email" v-model="formData.email" type="email" required
                class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
                :aria-invalid="errors.email ? 'true' : 'false'"
                :aria-describedby="errors.email ? 'email-error' : undefined" />
              <p v-if="errors.email" id="email-error" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-neutral-700">Ämne <span
                class="text-red-500">*</span></label>
            <input id="subject" v-model="formData.subject" type="text" required
              class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
              :aria-invalid="errors.subject ? 'true' : 'false'"
              :aria-describedby="errors.subject ? 'subject-error' : undefined" />
            <p v-if="errors.subject" id="subject-error" class="mt-1 text-sm text-red-600">{{ errors.subject }}</p>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-neutral-700">Meddelande <span
                class="text-red-500">*</span></label>
            <textarea id="message" v-model="formData.message" rows="5" required
              class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
              :aria-invalid="errors.message ? 'true' : 'false'"
              :aria-describedby="errors.message ? 'message-error' : undefined"></textarea>
            <p v-if="errors.message" id="message-error" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
          </div>

          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input id="privacy" v-model="formData.privacyConsent" name="privacy" type="checkbox" required
                class="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
                :aria-invalid="errors.privacyConsent ? 'true' : 'false'"
                :aria-describedby="errors.privacyConsent ? 'privacy-error' : undefined" />
            </div>
            <div class="ml-3 text-sm">
              <label for="privacy" class="font-medium text-neutral-700">Jag godkänner att T12T lagrar mina
                personuppgifter <span class="text-red-500">*</span></label>
              <p class="text-neutral-500">Vi använder dina uppgifter endast för att besvara din förfrågan. Läs vår
                <NuxtLink to="/om/integritetspolicy" class="text-primary hover:underline">integritetspolicy</NuxtLink>.
              </p>
              <p v-if="errors.privacyConsent" id="privacy-error" class="mt-1 text-sm text-red-600">{{
                errors.privacyConsent }}</p>
            </div>
          </div>
          <div v-if="formStatus"
            :class="[formStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800', 'p-4 rounded-md']">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg v-if="formStatus.type === 'success'" class="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <svg v-else class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium">{{ formStatus.message }}</h3>
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <button type="submit"
              class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              :disabled="isSubmitting">
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              {{ isSubmitting ? 'Skickar...' : 'Skicka meddelande' }}
            </button>
          </div>
        </form>
  </div>
  </div-->

    <!-- Alternative contact methods -->
    <div class="bg-white shadow-sm rounded-lg overflow-hidden mb-10">
      <div class="px-6 py-5 border-b border-neutral-200">
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
    <div class="bg-white shadow-sm rounded-lg overflow-hidden">
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
