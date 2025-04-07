---
title: 1.4.11 Kontrast för innehåll som inte är text
description: Säkerställ tillräcklig kontrast för aktiva användargränssnittskomponenter och meningsbärande grafik mot omgivande färger.
level: AA
slug: kontrast-icke-text
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "kontrast",
    "icke-textkontrast",
    "gränssnittskomponenter",
    "grafik",
    "ikoner",
    "diagram",
    "formulär",
    "synnedsättning",
    "skiljbar",
  ]
canonical: https://t12t.dev/wcag/1/4/11/kontrast-icke-text

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 11

og:
  title: 1.4.11 Kontrast för innehåll som inte är text – WCAG
  description: Säkerställ tillräcklig kontrast för aktiva UI-komponenter och meningsbärande grafik.
  url: https://t12t.dev/wcag/1/4/11/kontrast-icke-text
  type: article

datePublished: 2025-04-20

dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Kontrast för innehåll som inte är text

## Beskrivning

Den visuella presentationen av följande har ett kontrastförhållande på minst **3:1** mot omgivande färger:

1.  **Användargränssnittskomponenter:** Visuell information som krävs för att identifiera användargränssnittskomponenter och deras tillstånd (förutom för inaktiva komponenter eller när komponentens utseende bestäms av webbläsaren och inte ändras av författaren). Exempel är ramar runt formulärfält, knappar, visuella indikatorer för fokus, och tillståndsmarkeringar (som en bock i en kryssruta).
2.  **Grafiska objekt:** Delar av grafik som krävs för att förstå innehållet (förutom när en specifik presentation av grafiken är nödvändig för den information som förmedlas). Exempel är ikoner, linjer och sektioner i diagram eller grafer.

## Varför detta behövs

Medan Kriterium 1.4.3 (Kontrast Minimum) primärt fokuserar på text, säkerställer detta kriterium att även viktiga **icke-textuella element** är tillräckligt synliga:

- **Personer med nedsatt syn:** Har ofta svårt att uppfatta element med låg kontrast, vilket gör det svårt att se var man ska klicka, vilka fält som ska fyllas i, eller hur man tolkar ett diagram.
- **Personer med färgblindhet:** Kan ha svårt att skilja på element om skillnaden endast ligger i färgton och inte i ljushet (kontrast). Ett 3:1-förhållande säkerställer oftast tillräcklig ljushetsskillnad.
- **Alla användare:** Tydliga gränser och indikatorer gör gränssnittet lättare att förstå och använda, särskilt på mindre skärmar eller i ogynnsamma ljusförhållanden.

Utan tillräcklig kontrast kan användare missa viktiga kontroller, ha svårt att förstå grafik, eller inte se vilket element som har fokus.

---

## Exempel

### Kontrast för formulärfält (Gränskomponent)

Ramen (border) runt ett textfält behöver ha minst 3:1 i kontrast mot den direkta bakgrunden utanför fältet. Även fältets bakgrundsfärg behöver ha minst 3:1 mot den yttre bakgrunden om den skiljer sig.

::code-group{:labels='["CSS (Rätt) ✅", "CSS (Fel) ❌"]'}

```css [Tillräcklig kontrast för ram]
/* Exempel: Mörkgrå ram (#767676) på vit bakgrund (#FFF) */
/* Kontrast ram mot bakgrund: 4.54:1 (Uppfyller 3:1) */
input[type="text"] {
  border: 1px solid #767676;
  background-color: #ffffff; /* Vit fältbakgrund */
  padding: 0.5em;
}

body {
  background-color: #ffffff; /* Vit sidbakgrund */
}
```

```css [Otillräcklig kontrast för ram]
/* Exempel: Ljusgrå ram (#CCCCCC) på vit bakgrund (#FFF) */
/* Kontrast ram mot bakgrund: 1.64:1 (Underkänt, kräver 3:1) */
input[type="text"].low-contrast {
  border: 1px solid #cccccc;
  background-color: #ffffff;
  padding: 0.5em;
}

body {
  background-color: #ffffff;
}
```

::

### Kontrast för ikon (Grafiskt objekt)

En ikon (t.ex. en kundvagnsikon) behöver ha minst 3:1 i kontrast mot sin bakgrund för att vara lätt att identifiera.

::code-group{:labels='["CSS (Rätt) ✅", "CSS (Fel) ❌"]'}

```css [Tillräcklig kontrast för ikon]
/* Exempel: Mörk ikon (#555555) på ljus bakgrund (#EEE) */
/* Kontrast ikon mot bakgrund: 5.59:1 (Uppfyller 3:1) */
.icon-container {
  background-color: #eeeeee;
  padding: 1em;
  display: inline-block;
}

.cart-icon {
  /* Antag att detta är en SVG eller ikon-font */
  fill: #555555; /* Färg för SVG */
  color: #555555; /* Färg för ikon-font */
  width: 24px;
  height: 24px;
}
```

```css [Otillräcklig kontrast för ikon]
/* Exempel: Mellangrå ikon (#999999) på ljusgrå bakgrund (#DDDDDD) */
/* Kontrast ikon mot bakgrund: 1.94:1 (Underkänt, kräver 3:1) */
.icon-container.low-contrast {
  background-color: #dddddd;
  padding: 1em;
  display: inline-block;
}

.cart-icon.low-contrast {
  fill: #999999;
  color: #999999;
  width: 24px;
  height: 24px;
}
```

::

### Kontrast för fokusindikator

Den visuella indikatorn som visar vilket element som har tangentbordsfokus (ofta en ram eller bakgrundsfärg) måste ha minst 3:1 i kontrast mot hur elementet ser ut utan fokus.

::code-group{:labels='["CSS (Rätt - Fokus) ✅"]'}

```css [Tydlig fokusindikator]
/* Standardfokus (webbläsarstyrd) är ofta OK, men om den tas bort
   eller ändras måste den uppfylla kravet. */

button {
  background-color: #f0f0f0; /* Ljusgrå knapp */
  border: 1px solid #bbbbbb; /* Mellangrå ram */
  padding: 0.5em 1em;
}

/* Fokusstil: Blå ram (stark kontrast mot knappens bakgrund och ram) */
/* Kontrast #005A9C mot #F0F0F0 (bakgrund): 4.78:1 (OK > 3:1) */
/* Kontrast #005A9C mot #BBBBBB (originalram): 3.33:1 (OK > 3:1) */
button:focus-visible {
  outline: 3px solid #005a9c; /* Tydlig blå fokusram */
  outline-offset: 2px;
}

/* Undvik: outline: none; utan att ge ett tydligt alternativ! */
```

::

### Undantag

- **Inaktiv komponent:** En utgråad knapp som inte går att klicka på behöver inte uppfylla kontrastkravet.
- **Webbläsarstandard:** Om utseendet på t.ex. en standardkryssruta helt bestäms av webbläsaren och inte ändras med CSS, behöver den inte uppfylla kravet (även om det är bra om den gör det).
- **Nödvändig presentation:** Färger i en logotyp eller ett fotografi behöver inte ha 3:1 kontrast om den specifika presentationen är avgörande.

---

## Verktyg för att mäta kontrast

Samma verktyg som för textkontrast kan användas. Mät kontrasten mellan det grafiska elementets färg och den/de direkt omgivande färgerna. För gränser och tillstånd kan det krävas att man mäter mot flera angränsande färger.

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [TPGi Colour Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/)
- Inbyggda utvecklarverktyg i webbläsare.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.11 Non-text Contrast (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [Understanding Non-text Contrast - Knowbility](https://knowbility.org/blog/2018/understanding-non-text-contrast/) (Bra blogginlägg med exempel)
