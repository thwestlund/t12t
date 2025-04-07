import { useRoute } from "vue-router";

interface metaData {
  title: string;
  description?: string;
  keywords?: string[];
  og?: {
    title?: string;
    description?: string;
  };
  canonical?: string;
}

/**
 * Sets custom SEO metadata for a page using the useHead function.
 *
 * @param {metaData} md - An object containing metadata properties.
 * @param {string} md.title - The title of the page.
 * @param {string} md.description - The description of the page.
 * @param {string[]} [md.keywords] - Optional keywords for the page.
 * @param {Object} [md.og] - Optional Open Graph metadata.
 * @param {string} [md.og.title] - The Open Graph title of the page.
 * @param {string} [md.og.description] - The Open Graph description of the page.
 * @param {string} [md.canonical] - The canonical URL of the page.
 */

export function useWcagSeoMeta(md: metaData) {
  const route = useRoute();

  useHead({
    title: md.title,
    meta: [
      { name: "description", content: md.description },
      { name: "keywords", content: md.keywords?.join(", ") },
      { property: "og:title", content: md.og?.title || md.title },
      {
        property: "og:description",
        content: md.og?.description || md.description,
      },
      { property: "og:url", content: md.canonical },
      { property: "og:type", content: "article" },
    ],
    link: [
      {
        rel: "canonical",
        href: md.canonical || `https://t12t.dev${route.path}`,
      },
    ],
  });
}


/**
 * Sets custom SEO metadata for a page using the useHead function.
 *
 * @param {metaData} md - An object containing metadata properties.
 * @param {string} md.title - The title of the page.
 * @param {string} md.description - The description of the page.
 * @param {string[]} [md.keywords] - Optional keywords for the page.
 * @param {Object} [md.og] - Optional Open Graph metadata.
 * @param {string} [md.og.title] - The Open Graph title of the page.
 * @param {string} [md.og.description] - The Open Graph description of the page.
 * @param {string} [md.canonical] - The canonical URL of the page.
 */
export function useBlogSeoMeta(md: metaData) {
  const route = useRoute();

  useHead({
    title: md.title,
    meta: [
      { name: "description", content: md.description },
      { name: "keywords", content: md.keywords?.join(", ") },
      { property: "og:title", content: md.og?.title || md.title },
      {
        property: "og:description",
        content: md.og?.description || md.description,
      },
      { property: "og:url", content: md.canonical },
      { property: "og:type", content: "article" },
    ],
    link: [
      {
        rel: "canonical",
        href: md.canonical || `https://t12t.dev${route.path}`,
      },
    ],
  });
}
