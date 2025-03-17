import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
    }),

    blog: defineCollection({
      type: "page",
      source: { include: "blog/**/**/*.md", exclude: ["blog/index.md"] },
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        date: z.date().optional(),
        author: z.string().optional(),
      }),
    }),
  },
});
