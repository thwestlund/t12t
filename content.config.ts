import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asSitemapCollection({
        type: "page",
        source: "**/*.md",
      })
    ),

    blog: defineCollection(
      asSitemapCollection({
        type: "page",
        source: { include: "blog/**/**/*.md", exclude: ["blog/index.md"] },

        schema: z.object({
          tags: z.array(z.string()).optional(),
          image: z.string().optional(),
          date: z.date().optional(),
          author: z.string().optional(),
        }),
      })
    ),

    wcag: defineCollection(
      asSitemapCollection({
        type: "page",
        source: {
          include: "wcag/**/*.md",
          exclude: ["wcag/**/**/index.md", "wcag/README.md"],
        },

        schema: z.object({
          title: z.string(),
          description: z.string().optional(),
          level: z.enum(["A", "AA", "AAA"]),
          principleNumber: z.string().or(z.number()),
          principleName: z.string(),
          guidelineNumber: z.string().or(z.number()),
          guidelineName: z.string(),
          criterionNumber: z.string().or(z.number()),
        }),
      })
    ),
  },
});
