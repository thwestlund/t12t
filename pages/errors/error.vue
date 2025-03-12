<script setup lang="ts">
const props = defineProps({
  error: Object
})

// SEO for error page
useSeoMeta({
  title: 'Sidan hittades inte - T12T',
  robots: 'noindex, nofollow',
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="error-container">
    <div class="error-content">
      <h1 v-if="error?.statusCode === 404">
        Sidan hittades inte
      </h1>
      <h1 v-else>
        Ett fel har inträffat
      </h1>

      <div class="error-message">
        <p v-if="error?.statusCode === 404">
          Vi kunde tyvärr inte hitta den sida du letar efter. Den kan ha flyttats, tagits bort
          eller så är adressen felstavad.
        </p>
        <p v-else>
          Det uppstod ett oväntat fel. Vi ber om ursäkt för besväret.
        </p>
      </div>

      <div class="error-options">
        <button @click="handleError" class="primary-button">
          Gå till startsidan
        </button>

        <div class="additional-options">
          <p>Du kan också prova att:</p>
          <ul>
            <li>Använda sökfunktionen för att hitta information</li>
            <li>Gå till <NuxtLink to="/kunskapsbank">kunskapsbanken</NuxtLink>
            </li>
            <li>Besöka <NuxtLink to="/blogg">bloggen</NuxtLink> för aktuella artiklar</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-container {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.error-content {
  max-width: 600px;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #333;
}

.error-message {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #555;
}

.error-options {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.primary-button {
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.primary-button:hover {
  background-color: #0055aa;
}

.primary-button:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

.additional-options {
  margin-top: 2rem;
  text-align: left;
}

.additional-options p {
  margin-bottom: 0.5rem;
}

.additional-options ul {
  padding-left: 1.5rem;
  list-style-type: disc;
}

.additional-options li {
  margin-bottom: 0.5rem;
}

.additional-options a {
  color: #0066cc;
  text-decoration: none;
}

.additional-options a:hover {
  text-decoration: underline;
}
</style>