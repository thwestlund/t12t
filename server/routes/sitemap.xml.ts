// server/routes/sitemap.xml.ts
export default defineEventHandler(async (event) => {
  // Fetch your dynamic URLs here
  const urls = [
    { url: "/", lastmod: "2025-03-13" },
    { url: "/about", lastmod: "2025-03-13" },
  ];

  setResponseHeader(event, "content-type", "application/xml");
  return `<?xml version="1.0" encoding="UTF-8"?>
 <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ${urls
     .map(
       (page) => `
<url>
<loc>https://t12t.dev${page.url}</loc>
<lastmod>${page.lastmod}</lastmod>
</url>
`
     )
     .join("\n")}
</urlset>`;
});
