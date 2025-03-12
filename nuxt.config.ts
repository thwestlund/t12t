// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Enable Nuxt Content module
  modules: ["@nuxt/content"],
  // CSS global styles
  css: ["~/assets/css/main.css"],

  // Generate global types
  typescript: {
    strict: true,
    typeCheck: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "sv",
      },
      title: "T12T - Digital Tillgänglighet",
      meta: [
        {
          name: "description",
          content: "Svensk resurs för digital tillgänglighet och t12t",
        },
        {
          name: "keywords",
          content: "tillgänglighet, webbillgänglighet, a11y, t12t, skärmläsare",
        },
      ],
    },
  },

  // Performance and SEO optimizations
  build: {
    transpile: ["vue-router"],
  },

  compatibilityDate: "2025-03-12",
});
