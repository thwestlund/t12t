---
title: 2.4.7 Synligt fokus
description: Säkerställ att det interaktiva element som har fokus när man navigerar med tangentbord har en tydlig visuell indikator.
level: AA
slug: synligt-fokus
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "fokus",
    "synligt fokus",
    "focus visible",
    "tangentbord",
    "navigation",
    "fokusindikator",
    "outline",
    "operabel",
    "navigerbar",
  ]
canonical: https://t12t.dev/wcag/2/4/7/synligt-fokus

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 7

og:
  title: 2.4.7 Synligt fokus – WCAG
  description: Säkerställ att det element som har tangentbordsfokus har en tydlig visuell indikator.
  url: https://t12t.dev/wcag/2/4/7/synligt-fokus
  type: article

datePublished: 2025-05-31
dateModified: 2024-05-17

sitemap:
lastmod: 2024-05-17
changefreq: weekly # Common issue
priority: 0.7 # AA, important
---

# Synligt fokus

## Beskrivning

Alla användargränssnittskomponenter som kan användas med tangentbord måste ha ett fokusläge som är **visuellt tydligt**.

Detta innebär att när en användare navigerar med tangentbordet (t.ex. med [Tab]{.inline-code}-tangenten) och ett interaktivt element (som en länk, knapp eller formulärfält) får fokus, ska det synas tydligt vilket element som är aktivt. Detta görs oftast med en visuell ram (outline) eller en annan märkbar förändring i utseendet (t.ex. ändrad bakgrundsfärg eller understrykning).

Webbläsare har en inbyggd standardindikator för fokus (ofta en blå eller svart ram), men denna tas ibland bort av webbutvecklare av estetiska skäl. Om standardindikatorn tas bort, **måste** den ersättas med en annan tydlig visuell indikator.

## Varför detta behövs

En synlig fokusindikator är helt avgörande för användare som navigerar med tangentbord:

- **Tangentbordsanvändare (utan synnedsättning):** Utan en tydlig indikator vet användaren inte var på sidan de befinner sig och vilket element som kommer att aktiveras om de trycker [Enter]{.inline-code} eller [Space]{.inline-code}. Det blir som att använda en mus utan att se muspekaren.
- **Personer med uppmärksamhetsstörningar eller korttidsminnesproblem:** En tydlig indikator hjälper till att hålla reda på var man är på sidan.
- **Skärmläsaranvändare:** Även om skärmläsaren meddelar vilket element som har fokus, drar många seende skärmläsaranvändare nytta av den visuella indikatorn för att snabbare orientera sig.

Att säkerställa synligt fokus är en av de mest grundläggande och viktiga aspekterna av tangentbordstillgänglighet.

---

## Exempel

### Standardfokus eller Förbättrat fokus (Rätt) ✅

Antingen används webbläsarens standardfokusindikator, eller så skapas en egen tydlig indikator med CSS.

::code-group{:labels='["CSS (Rätt) ✅"]'}

```css showLineNumbers
/* Alternativ 1: Lita på webbläsarens standard (ta inte bort den!) */
/* Ingen CSS behövs specifikt här, bara undvik att skriva:
   *:focus { outline: none; } */

/* Alternativ 2: Skapa en egen, tydlig fokusindikator */
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus,
[tabindex]:focus {
  outline: 3px solid blue; /* Tydlig blå ram */
  outline-offset: 2px; /* Lite luft mellan element och ram */
  /* Eller annan tydlig stiländring, t.ex. bakgrundsfärg */
  /* background-color: lightyellow; */
}

/* Rekommendation: Använd :focus-visible för att bara visa
   den tydliga indikatorn vid tangentbordsfokus, inte musklick
   (om webbläsaren stödjer det och man vill ha den skillnaden). */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
[tabindex]:focus-visible {
  outline: 3px solid blue;
  outline-offset: 2px;
}
/* Dölj eventuellt outline för :focus om :focus-visible används */
/* a:focus { outline: none; } */ /* Men var försiktig med detta */
```

::
**Resultat:** När användaren tabbar genom sidan, får det aktiva elementet en tydlig visuell markering (antingen webbläsarens standard eller den anpassade stilen).

### Borttagen fokusindikator (Fel) ❌

CSS används för att helt ta bort fokusindikatorn utan att ersätta den med något annat.

::code-group{:labels='["CSS (Fel) ❌"]'}

```css showLineNumbers
/* Fel: Tar bort all visuell fokusindikering */
*:focus {
  outline: none; /* Eller outline: 0; */
}

a:focus,
button:focus,
input:focus
 /* etc. */ {
  /* Ingen alternativ fokusstil definieras här heller */
  outline: none;
}
```

::
**Resultat:** När en tangentbordsanvändare tabbar genom sidan, händer ingenting visuellt. Det är omöjligt att veta vilket element som är aktivt. Detta gör sidan oanvändbar för dem.

### Otydlig fokusindikator (Fel) ❌

Fokusindikatorn som används har för låg kontrast mot bakgrunden eller är för subtil för att märkas tydligt.

::code-group{:labels='["CSS (Fel) ❌"]'}

```css showLineNumbers
/* Fel: Fokusindikatorn är för svag */
button:focus {
  /* Ljusgrå ram på vit bakgrund har mycket låg kontrast */
  outline: 1px solid #dddddd;
}

a:focus {
  /* Ändrar bara färgen marginellt, svårt att se */
  color: #0000ee; /* Standard blå */
  background-color: #f8f8ff; /* Mycket svag ändring från vit */
}
```

::
**Resultat:** Även om det tekniskt sett finns en fokusstil, är den inte tillräckligt tydlig för att vara användbar. Fokusindikatorn måste ha tillräcklig kontrast mot omgivningen (relaterat till 1.4.11 Kontrast för innehåll som inte är text) och vara märkbar.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.7 Focus Visible (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [Webbriktlinjer: R128 Markera tydligt vilket fält eller element som är i fokus](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/markera-tydligt-vilket-falt-eller-element-som-ar-i-fokus)
- [MDN Web Docs: \:focus pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)
- [MDN Web Docs: \:focus-visible pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
- [WebAIM: Keyboard Accessibility - Visible Focus Indicator](https://webaim.org/techniques/keyboard/focus)
- [A brief note on the disappearance of the focus ring (by Patrick H. Lauke)](https://www.tpgi.com/a-brief-note-on-the-disappearance-of-the-focus-ring/) (Diskuterar problemet med att ta bort outline).
