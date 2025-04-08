export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxt/icon",
    "nuxt-time",
    "@nuxt/eslint",
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
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
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // Performance and SEO optimizations
  build: {
    transpile: ["vue-router"],
  },

  compatibilityDate: "2025-03-12",

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-light-high-contrast",
          },
          langs: [
            "javascript",
            "typescript",
            "css",
            "json",
            "bash",
            "html",
            "vue",
          ],
        },
        remarkPlugins: {
          "remark-gfm": {},
          "remark-rehype": {},
        },
        rehypePlugins: {
          "rehype-highlight": {},
          "rehype-highlight-code-lines": {},
        },
      },
    },
    renderer: {
      alias: {
        p: "CustomParagraph",
        pre: "ProsePre",
      },
    },
  },
});