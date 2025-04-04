---
title: 1.3.6 Identifiera syfte
description: Ange programmeringsmässigt syftet för fler typer av användargränssnittskomponenter, ikoner och regioner för att stödja anpassning via hjälpmedel.
level: AAA
slug: identifiera-syfte
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "syfte",
    "komponenter",
    "ikoner",
    "regioner",
    "landmarks",
    "ARIA",
    "anpassningsbar",
    "kognitiv",
    "semantik",
  ]
canonical: https://t12t.dev/wcag/1/3/6/identifiera-syfte

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 3
guidelineName: Anpassningsbar
criterionNumber: 6

og:
  title: 1.3.6 Identifiera syfte – WCAG
  description: Ange programmeringsmässigt syftet för fler typer av komponenter, ikoner och regioner för att stödja anpassning.
  url: https://t12t.dev/wcag/1/3/6/identifiera-syfte
  type: article

datePublished: 2025-04-03
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Identifiera syfte

## Beskrivning

I innehåll som implementeras med märkspråk kan syftet med användargränssnittskomponenter, ikoner och regioner fastställas programmeringsmässigt.

Detta kriterium (Nivå AAA) bygger vidare på 1.3.5 (Identifiera syftet med indatafält) men är bredare. Det kräver att syftet inte bara för vanliga formulärfält, utan även för andra delar av gränssnittet – som knappar, länkar, viktiga sidregioner (t.ex. navigation, huvudinnehåll, sidfot) och ikoner – ska kunna identifieras av programvara, som webbläsare och hjälpmedel.

Detta görs oftast genom att:

1.  Använda korrekta HTML-element (t.ex. [\<nav\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav), [\<main\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main), [\<button\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)).
2.  Använda ARIA-attribut för att förtydliga roller och syften (t.ex. role="search", aria-label="Inställningar").
3.  Potentiellt använda mer detaljerad semantik från standardiserade taxonomier (vilket är mer avancerat och mindre vanligt förekommande).

## Varför detta behövs

Att tydligt definiera syftet med olika gränssnittsdelar möjliggör för avancerade anpassningar som kan vara avgörande för användare med kognitiva funktionsnedsättningar, läs- och skrivsvårigheter, eller andra behov:

- **Symbolstöd:** Hjälpmedel kan ersätta text eller ikoner med symboler från ett symbolbibliotek som användaren är bekant med (t.ex. ersätta ordet "Sök" eller en förstoringsglasikon med en standardiserad söksymbol).
- **Anpassad layout:** Användare kan välja att dölja vissa delar av sidan (t.ex. sidospalter, reklam) och bara fokusera på huvudinnehållet, om regionerna är korrekt uppmärkta.
- **Förenkling:** Ovanliga eller komplexa komponenter kan potentiellt ersättas med enklare, mer välbekanta alternativ av hjälpmedlet.
- **Tydligare navigation:** Landmärken ([\<nav\>]{.inline-code}, [\<main\>]{.inline-code}, etc.) gör det mycket enklare för skärmläsaranvändare att snabbt hoppa mellan olika delar av sidan.

Detta kriterium syftar till att göra webben mer anpassningsbar till individuella behov genom rikare semantisk information.

---

## Exempel

### Använda HTML-landmärken för regioner

Genom att strukturera sidan med HTML:s landmärken kan hjälpmedel identifiera de olika huvuddelarna av sidan.

::code-group{:labels='["HTML (med landmärken) ✅"]'}

```html showLineNumbers
<body>
  <header>
    <!-- Sidhuvud med logotyp, etc. -->
  </header>

  <nav>
    <!-- Huvudnavigation -->
    <ul>
      <li><a href="/">Hem</a></li>
      <li><a href="/om-oss">Om oss</a></li>
    </ul>
  </nav>

  <main>
    <h1>Huvudinnehåll</h1>
    <p>Text och annat innehåll...</p>
  </main>

  <aside>
    <h2>Relaterat</h2>
    <!-- Sidospalt -->
  </aside>

  <footer>
    <!-- Sidfot med kontaktinfo, etc. -->
  </footer>
</body>
```

::
**Resultat:** Skärmläsare kan lista dessa regioner ([banner]{.inline-code}, [navigation]{.inline-code}, [main]{.inline-code}, [complementary]{.inline-code}, [contentinfo]{.inline-code}) och låta användaren hoppa direkt till dem. Andra hjälpmedel kan använda informationen för att anpassa layouten.

### Identifiera syftet med en ikonknapp

En knapp som bara innehåller en ikon (t.ex. ett kugghjul för inställningar) behöver ett textalternativ som beskriver dess syfte. [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) används ofta för detta.

::code-group{:labels='["HTML (ikonknapp) ✅"]'}

```html showLineNumbers
<button aria-label="Inställningar">
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <!-- SVG-kod för kugghjulsikon -->
    <path
      d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-3.2 8.7-11.4 14.6-20.8 14.6c-5.3 0-10.5-1.9-14.7-5.4l-44.6-40.5c-7.7 5.8-15.9 10.9-24.6 15.2l-12.6 49.1c-1.8 7.1-8.3 12.3-15.8 12.3h-89.4c-7.5 0-14-5.2-15.8-12.3l-12.6-49.1c-8.7-4.3-16.9-9.4-24.6-15.2L117 433.1c-4.2 3.5-9.4 5.4-14.7 5.4c-9.4 0-17.6-5.9-20.8-14.6c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C129.7 342.9 129 334.4 129 325.8s.6-17.1 1.7-25.4L87.4 261c-6.9-6.2-9.6-15.9-6.4-24.6c3.2-8.7 11.4-14.6 20.8-14.6c5.3 0 10.5 1.9 14.7 5.4l44.6 40.5c7.7-5.8 15.9-10.9 24.6-15.2L197.9 168c1.8-7.1 8.3-12.3 15.8-12.3h89.4c7.5 0 14 5.2 15.8 12.3l12.6 49.1c8.7 4.3 16.9 9.4 24.6 15.2l44.6-40.5c4.2-3.5 9.4-5.4 14.7-5.4c9.4 0 17.6 5.9 20.8 14.6zM256 389.8c-50.7 0-91.8-41.1-91.8-91.8s41.1-91.8 91.8-91.8s91.8 41.1 91.8 91.8s-41.1 91.8-91.8 91.8z"
    />
  </svg>
</button>
```

::
**Resultat:** Även om knappen visuellt bara visar en ikon, meddelar aria-label="Inställningar" hjälpmedel att knappens syfte är "Inställningar". Hjälpmedel kan då presentera detta för användaren eller använda informationen för anpassning (t.ex. visa en standardiserad inställningsikon). [aria-hidden="true"]{.inline-code} på SVG:n säkerställer att ikonen i sig ignoreras av skärmläsare, så att bara etiketten läses upp.

### Identifiera en sökregion

En grupp fält och knappar som tillsammans utgör en sökfunktion kan märkas upp med [role="search"]{.inline-code} för att tydligt ange dess syfte som en region.

::code-group{:labels='["HTML (sökregion) ✅"]'}

```html showLineNumbers
<form action="/search" method="get" role="search">
  <label for="search-term">Sök på webbplatsen:</label>
  <input type="search" id="search-term" name="q" />
  <button type="submit">Sök</button>
</form>
```

::
**Resultat:** Hjälpmedel kan identifiera detta formulär specifikt som en sökregion. Skärmläsare inkluderar ofta sökregionen i listan över landmärken, vilket gör det enkelt för användare att snabbt navigera dit.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.3.6 Identify Purpose (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html)
- [Webbriktlinjer: R108 Märk upp komponenter, ikoner och regioner så att deras syfte framgår](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/mark-upp-komponenter-ikoner-och-regioner-sa-att-deras-syfte-framgar)
- [WAI-ARIA Authoring Practices: Landmark Regions](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/)
- [MDN Web Docs: ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
- [MDN Web Docs: Using the aria-label attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
