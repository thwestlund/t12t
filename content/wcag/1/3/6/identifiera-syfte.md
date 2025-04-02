---
title: Identifiera syfte
description: I innehåll som implementeras med märkspråk kan syftet med användargränssnittskomponenter, ikoner och regioner identifieras programmatiskt.
level: AAA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 3
guidelineName: Anpassningsbart
criterionNumber: 6

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8

og:
  title: Identifiera syfte - WCAG
  description: Syftet med varje region i innehållet kan bestämmas programmatiskt.
  url: https://t12t.dev/wcag/identifiera-syfte
  type: article

datePublished: 2025-03-19
dateModified: 2025-03-27
---

# Identifiera syfte

## Beskrivning

I innehåll som implementeras med märkspråk kan syftet med användargränssnittskomponenter, ikoner och regioner identifieras programmatiskt.

## Varför detta behövs

Personer med olika kognitiva funktionsnedsättningar, inlärningssvårigheter eller minnesproblem kan ha svårt att tolka webbinnehåll eller att förstå vad olika gränssnittselement gör.

Genom att säkerställa att syftet med komponenter, ikoner och regioner kan identifieras programmatiskt möjliggörs för webbläsare och hjälpmedel att anpassa presentationen av innehållet baserat på användarens individuella behov. Detta kan inkludera:

- Ersätta ikoner med mer bekanta alternativ
- Förenkla presentationen av innehållet
- Lägga till symboler eller bilder för att förtydliga
- Omvandla text till lättläst svenska
- Ändra färger, kontrast eller andra visuella aspekter

Denna anpassning kan göra webbplatser betydligt mer tillgängliga och användbara för många användargrupper.

## Exempel

### Exempel på bra implementering

#### Landmärken som identifierar regioner på sidan

```html
<header role="banner">
  <h1>Företagsnamn</h1>
</header>

<nav role="navigation" aria-label="Huvudmeny">
  <ul>
    <li><a href="/">Hem</a></li>
    <li><a href="/produkter">Produkter</a></li>
  </ul>
</nav>

<main role="main">
  <article>
    <h2>Huvudinnehåll</h2>
    <p>Artikeltext här...</p>
  </article>
</main>

<aside role="complementary" aria-label="Relaterad information">
  <h2>Relaterade artiklar</h2>
  <ul>
    <li><a href="/artikel1">Artikel 1</a></li>
  </ul>
</aside>

<footer role="contentinfo">
  <p>Kontaktinformation och copyright</p>
</footer>
```

#### Ikoner med tydligt syfte

```html
<button>
  <svg role="img" aria-label="Sök" focusable="false">
    <title>Sök</title>
    <!-- SVG-innehåll för en sökikon -->
  </svg>
</button>

<a href="tel:+46701234567">
  <svg role="img" aria-label="Ring oss" focusable="false">
    <title>Telefon</title>
    <!-- SVG-innehåll för en telefonikon -->
  </svg>
  +46 70 123 45 67
</a>
```

### Exempel på bristande implementering

#### Regioner utan tydlig identifiering

```html
<div>
  <h1>Företagsnamn</h1>
</div>

<div>
  <ul>
    <li><a href="/">Hem</a></li>
    <li><a href="/produkter">Produkter</a></li>
  </ul>
</div>

<div>
  <h2>Huvudinnehåll</h2>
  <p>Artikeltext här...</p>
</div>
<!-- Inga landmärken eller roller som identifierar regionernas syfte -->
```

#### Ikoner utan tydlig märkning

```html
<button>
  <svg>
    <!-- SVG-innehåll för en ikon utan title eller aria-label -->
  </svg>
</button>

<a href="tel:+46701234567">
  <svg>
    <!-- SVG-innehåll för en telefonikon utan märkning -->
  </svg>
  +46 70 123 45 67
</a>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.3.6 Identify Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html)
- [W3C WAI-ARIA - Landmarks](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_landmark)
- [WebAIM - Semantic Structure](https://webaim.org/techniques/semanticstructure/)
- [MDN Web Docs - ARIA: role attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
