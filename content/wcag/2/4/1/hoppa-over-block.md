---
title: 2.4.1 Hoppa över block
description: Tillhandahåll en mekanism för att hoppa förbi block av innehåll som upprepas på flera webbsidor.
level: A
slug: hoppa-over-block
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "hoppa över block",
    "bypass blocks",
    "skiplänk",
    "skip link",
    "navigation",
    "tangentbord",
    "skärmläsare",
    "landmärken",
    "landmarks",
    "operabel",
    "navigerbar",
  ]
canonical: https://t12t.dev/wcag/2/4/1/hoppa-over-block

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 1

og:
  title: 2.4.1 Hoppa över block – WCAG
  description: Tillhandahåll en mekanism för att hoppa förbi upprepade innehållsblock.
  url: https://t12t.dev/wcag/2/4/1/hoppa-over-block
  type: article

datePublished: 2025-05-25
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Hoppa över block

## Beskrivning

Det ska finnas en mekanism tillgänglig för att hoppa förbi block av innehåll som upprepas på flera webbsidor.

Detta innebär att användare, särskilt de som navigerar med tangentbord, ska kunna hoppa direkt till huvudinnehållet på en sida utan att behöva gå igenom alla länkar i t.ex. sidhuvudet, huvudmenyn eller en sidokolumn varje gång de laddar en ny sida.

Vanliga tekniker för detta är:

1.  **"Hoppa till innehåll"-länk (Skip link):** En länk som är det första fokuserbara elementet på sidan (ofta visuellt dold tills den får fokus) och som flyttar fokus direkt till sidans huvudinnehåll.
2.  **Användning av landmärken (Landmarks):** Korrekt användning av HTML-element som [\<header\>]{.inline-code}, [\<nav\>]{.inline-code}, [\<main\>]{.inline-code}, och [\<aside\>]{.inline-code}, eller motsvarande ARIA-roller, gör att hjälpmedel (som skärmläsare) kan identifiera och hoppa mellan dessa regioner.
3.  **Användning av rubriker:** En tydlig och korrekt rubrikstruktur ([\<h1\>]{.inline-code}, [\<h2\>]{.inline-code}, etc.) gör att användare med skärmläsare eller webbläsartillägg kan navigera direkt till olika avsnitt.

## Varför detta behövs

Utan en mekanism för att hoppa över block måste tangentbordsanvändare (inklusive skärmläsaranvändare och personer med motoriska funktionsnedsättningar) trycka på [Tab]{.inline-code} genom dussintals, ibland hundratals, länkar i navigationen på _varje_ sida de besöker innan de når det unika huvudinnehållet. Detta är extremt tidskrävande och frustrerande.

Att erbjuda ett sätt att hoppa över dessa upprepade block gör navigeringen betydligt effektivare och förbättrar användarupplevelsen markant för dessa grupper.

---

## Exempel

### "Hoppa till innehåll"-länk (Rätt) ✅

En länk placeras allra först i sidans DOM (Document Object Model). Den är ofta dold visuellt men blir synlig när den får tangentbordsfokus (via [Tab]{.inline-code}). Länken pekar till ID:t för huvudinnehållscontainern.

::code-group{:labels='["HTML (Rätt) ✅", "CSS (Exempel) ✅"]'}

```html {1-3, 9} showLineNumbers
<body>
  <a href="#main-content" class="skip-link">Hoppa till huvudinnehållet</a>

  <header>
    <!-- Logotyp, sidtitel, etc. -->
    <nav>
      <!-- Många navigeringslänkar här -->
    </nav>
  </header>

  <main id="main-content">
    <h1>Sidans huvudinnehåll</h1>
    <p>Unikt innehåll för denna sida...</p>
  </main>

  <footer>
    <!-- Sidfot -->
  </footer>
</body>
```

```css showLineNumbers
/* CSS för att dölja länken tills den får fokus */
.skip-link {
  position: absolute;
  top: -40px; /* Flytta utanför skärmen */
  left: 0;
  background: black;
  color: white;
  padding: 8px;
  z-index: 100;
  transition: top 0.1s ease-in-out; /* Mjuk övergång (valfritt) */
}

.skip-link:focus {
  top: 0; /* Gör länken synlig när den får fokus */
}

/* Viktigt: Säkerställ att #main-content kan ta emot fokus */
#main-content:focus {
  outline: none; /* Ta bort standardfokusramen om så önskas,
                     men lämna den om möjligt eller ersätt med egen */
}
/* Alternativt, eller som komplement: sätt tabindex på main */
main:focus {
  outline: none;
}
```

::

**Förklaring till CSS/HTML:**

- Länken placeras först.
- [position: absolute]{.inline-code} och [top: -40px]{.inline-code} döljer den visuellt.
- [:focus-pseudoklassen]{.inline-code} gör den synlig när användaren tabbar till den.
- [href="#main-content"]{.inline-code} länkar till elementet med [id="main-content"]{.inline-code}.
- [main]{.inline-code} elementet behöver kunna ta emot fokus. Även om vissa webbläsare gör detta automatiskt när man navigerar till ett fragment-ID, är det bra att säkerställa det, t.ex. genom att ge det [tabindex="-1"]{.inline-code} (kan fokuseras programmatiskt/via länk men inte via Tab) och styla [:focus]{.inline-code}-tillståndet.

**Resultat:** Första gången en tangentbordsanvändare trycker [Tab]{.inline-code} på sidan, visas "Hoppa till huvudinnehållet"-länken. Trycker de [Enter]{.inline-code}, flyttas fokus direkt till [\<main\>]{.inline-code}-elementet, och de slipper tabba genom hela header/navigationen.

### Användning av landmärken och rubriker (Rätt) ✅

Genom att använda semantiska HTML-element ([\<main\>]{.inline-code}, [\<nav\>]{.inline-code}, etc.) och en logisk rubrikstruktur kan användare med hjälpmedel navigera effektivt. Detta uppfyller också kravet.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {4, 8, 15} showLineNumbers
<body>
  <header>
    <!-- Sidhuvud -->
    <nav aria-label="Huvudnavigation">
      <!-- Huvudmeny -->
    </nav>
  </header>

  <main>
    <h1>Huvudrubrik för sidan</h1>
    <p>...</p>
    <section aria-labelledby="section-heading">
      <h2 id="section-heading">Underrubrik</h2>
      <p>...</p>
    </section>
  </main>

  <aside aria-label="Relaterat innehåll">
    <!-- Sidospalt -->
  </aside>

  <footer>
    <!-- Sidfot -->
  </footer>
</body>
```

::

**Resultat:** Skärmläsaranvändare kan använda kortkommandon för att lista och hoppa direkt till landmärken (som [main]{.inline-code}, [navigation]{.inline-code}) eller till rubriker (som [h1]{.inline-code}, [h2]{.inline-code}). Detta fungerar som en mekanism för att hoppa över block. **OBS:** För att uppfylla _detta specifika_ WCAG-kriterium räcker det oftast inte _enbart_ med landmärken/rubriker för alla användare, då inte alla tangentbordsanvändare har skärmläsare med denna funktionalitet. En "Hoppa till innehåll"-länk rekommenderas starkt som komplement eller primär lösning för nivå A.

### Ingen mekanism för att hoppa över block (Fel) ❌

Sidan har en stor huvudmeny med många länkar, men det finns ingen "Hoppa till innehåll"-länk och ingen tydlig struktur med landmärken eller rubriker som hjälpmedel kan använda effektivt för att hoppa.

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
En webbsida har ett sidhuvud med 50 navigeringslänkar. Direkt efter sidhuvudet kommer huvudinnehållet. Det finns ingen länk i början av sidan för att hoppa över menyn. En tangentbordsanvändare måste trycka Tab 50 gånger på varje sida för att nå huvudinnehållet.
```

::
**Resultat:** Detta skapar en mycket ineffektiv och frustrerande upplevelse för tangentbordsanvändare.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.1 Bypass Blocks (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)
- [Webbriktlinjer: R122 Gör det möjligt att hoppa förbi återkommande innehåll](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/gor-det-mojligt-att-hoppa-forbi-aterkommande-innehall)
- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [MDN Web Docs: HTML landmark elements](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role#html5_sectioning_elements)
