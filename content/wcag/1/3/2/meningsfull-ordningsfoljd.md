---
title: 1.3.2 Meningsfull ordningsföljd
description: Presentera innehåll i en meningsfull ordning så att läsordningen är logisk även utan visuell formatering.
level: A
slug: meningsfull-ordningsfoljd
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "ordningsföljd",
    "läsordning",
    "fokusordning",
    "CSS",
    "DOM",
    "source order",
    "meaningful sequence",
  ]
canonical: https://t12t.dev/wcag/1/3/2/meningsfull-ordningsfoljd

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 3
guidelineName: Anpassningsbar
criterionNumber: 2

og:
  title: 1.3.2 Meningsfull ordningsföljd – WCAG
  description: Presentera innehåll i en meningsfull ordning så att läsordningen är logisk även utan visuell formatering.
  url: https://t12t.dev/wcag/1/3/2/meningsfull-ordningsfoljd
  type: article

datePublished: 2025-03-30
dateModified: 2024-05-16

sitemap:
  lastmod: 2024-05-16
  changefreq: monthly
  priority: 0.8
---

# Meningsfull ordningsföljd

## Beskrivning

När ordningsföljden som innehållet presenteras i påverkar dess betydelse, ska en korrekt läsordning kunna avgöras programmeringsmässigt.

Detta innebär att den ordning som innehållet är strukturerat i koden (oftast HTML-koden, DOM-ordningen) måste vara logisk och meningsfull. Även om CSS används för att visuellt ändra placeringen av element (t.ex. flytta en sidokolumn till vänster eller höger), måste den underliggande kodstrukturen fortfarande följa en sekvens som är begriplig när den läses upp av ett hjälpmedel eller när CSS är inaktiverat.

## Varför detta behövs

- **Skärmläsare:** Läser upp innehållet i den ordning det förekommer i DOM-trädet. Om den visuella layouten (skapad med CSS) avviker kraftigt från kodordningen, blir den upplästa sekvensen obegriplig. Användaren kan höra slutet på en mening före början, eller innehåll från en sidospalt mitt i huvudtexten.
- **Tangentbordsnavigation:** Fokusordningen när man tabbar genom interaktiva element (länkar, knappar, fält) följer normalt DOM-ordningen. En ologisk kodordning leder till en hoppig och oförutsägbar fokusordning, vilket gör det svårt för tangentbordsanvändare att navigera effektivt.
- **Anpassning:** Användare som av olika skäl stänger av CSS (t.ex. för bättre läsbarhet eller med specialiserade hjälpmedel) ser innehållet i den ordning det är kodat. Denna ordning måste vara meningsfull i sig själv.

Att säkerställa en logisk kodordning är grundläggande för att innehållet ska vara robust och fungera för alla användare, oavsett hur de tar del av det.

---

## Exempel

### Korrekt ordning trots visuell omflyttning (CSS Grid/Flexbox)

Även om CSS Grid eller Flexbox används för att visuellt placera en sidomeny ([\<aside\>]{.inline-code}) till vänster om huvudininnehållet ([\<main\>]{.inline-code}), bör huvudininnehållet komma före sidomenyn i HTML-koden för en mer logisk läsordning.

::code-group{:labels='["Korrekt HTML-ordning ✅", "CSS (för visuell ordning)"]'}

```html {1-3, 5-7} showLineNumbers
<main>
  <h1>Huvudinnehåll</h1>
  <p>Detta är det primära innehållet på sidan...</p>
</main>
<aside>
  <h2>Relaterat</h2>
  <p>Länkar och sidoinformation...</p>
</aside>
```

```css showLineNumbers
/* Exempel med CSS Grid */
body {
  display: grid;
  grid-template-columns: 1fr 3fr; /* Visuella kolumner */
  grid-template-areas: "sidebar main"; /* Namnge områden */
}

main {
  grid-area: main; /* Placera <main> i main-området */
}

aside {
  grid-area: sidebar; /* Placera <aside> i sidebar-området */
  /* Nu visas <aside> visuellt till vänster,
     men är fortfarande efter <main> i DOM */
}
```

::

### Felaktig ordning på grund av visuell layout

Här används absolut positionering för att skapa en layout med två kolumner, men HTML-ordningen är ologisk. Sidofältets innehåll kommer före huvudrubriken i koden.

::code-group{:labels='["Fel HTML-ordning ❌", "CSS (som skapar problemet)"]'}

```html {1-4, 6-8} showLineNumbers
<div class="sidebar">
  <!-- Kommer först i koden -->
  <h2>Relaterat</h2>
  <p>Sidoinformation som läses upp först.</p>
</div>
<div class="main-content">
  <!-- Kommer efter i koden -->
  <h1>Huvudrubrik</h1>
  <p>Detta borde läsas upp efter rubriken.</p>
</div>
```

```css showLineNumbers
.main-content {
  margin-left: 220px; /* Skapar plats för sidofältet */
}

.sidebar {
  position: absolute; /* Tar elementet ur flödet */
  top: 0;
  left: 0;
  width: 200px;
  /* Visuellt till vänster, men fel i kodordningen */
}
```

::

**Korrektion:** Placera [\<div class="main-content"\>]{.inline-code} före [\<div class="sidebar"\>]{.inline-code} i HTML-koden och justera CSS därefter (helst med Flexbox eller Grid istället för absolut positionering för layout).

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.3.2 Meaningful Sequence (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)
- [Webbriktlinjer: R104 Gör en webbsida vars betydelse är beroende av läsordningen läsbar även om formateringen tas bort](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/gor-en-webbsida-vars-betydelse-ar-beroende-av-lasordningen-lasbar-aven-om-formateringen-tas-bort)
- [MDN Web Docs: Source Order Matters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items#source_order_matters) (Exempel med Flexbox, men principen gäller generellt)
