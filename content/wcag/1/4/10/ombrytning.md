---
title: 1.4.10 Ombrytning (Reflow)
description: Säkerställ att innehåll kan presenteras i en enda kolumn utan att information eller funktion går förlorad, och utan att kräva rullning i två dimensioner.
level: AA
slug: ombrytning
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "ombrytning",
    "reflow",
    "zoom",
    "förstoring",
    "responsiv design",
    "mobil",
    "nedsatt syn",
    "scroll",
    "rullning",
    "skiljbar",
  ]
canonical: https://t12t.dev/wcag/1/4/10/ombrytning

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 10

og:
  title: 1.4.10 Ombrytning (Reflow) – WCAG
  description: Säkerställ att innehåll kan visas i en kolumn utan informationsförlust och utan rullning i två dimensioner.
  url: https://t12t.dev/wcag/1/4/10/ombrytning
  type: article

datePublished: 2025-04-19
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Ombrytning (Reflow)

## Beskrivning

Innehåll kan presenteras utan att information eller funktion går förlorad, och utan att kräva rullning i två dimensioner för:

- **Vertikal rullning:** Innehåll vid en bredd motsvarande **320 CSS-pixlar**.
- **Horisontell rullning:** Innehåll vid en höjd motsvarande **256 CSS-pixlar**.

Undantag gäller för innehåll som kräver presentation i två dimensioner för användning eller mening (t.ex. kartor, diagram, datatabeller, vissa spel).

Detta innebär att när en användare zoomar in kraftigt (vilket motsvarar att se sidan på en mycket smal eller låg skärm), ska allt innehåll och all funktionalitet fortfarande vara tillgänglig utan att behöva panorera (scrolla) både horisontellt och vertikalt samtidigt. Layouten ska "flyta om" (reflow) till en enda kolumn (för vertikal rullning) eller en enda rad/annan anpassad layout (för horisontell rullning).

**Testning:**

- **Vertikal ombrytning:** Ställ in webbläsarfönstrets bredd till 320 CSS-pixlar (motsvarar ofta 400% zoom på en 1280px bred skärm). Kolla att allt innehåll är synligt och fungerar, och att du **endast behöver rulla vertikalt**.
- **Horisontell ombrytning:** Ställ in webbläsarfönstrets höjd till 256 CSS-pixlar. Kolla att allt innehåll är synligt och fungerar, och att du **endast behöver rulla horisontellt**. (Detta är mindre vanligt, oftast relevant för webbapplikationer med horisontell layout).

## Varför detta behövs

- **Personer med nedsatt syn:** Använder ofta kraftig förstoring (zoom). Om de tvingas rulla både horisontellt och vertikalt för att läsa text eller interagera med kontroller, blir det extremt svårt och desorienterande att följa med i innehållet och förstå sammanhanget. De kan lätt tappa bort sig på sidan.
- **Mobilanvändare:** Även om detta kriterium primärt handlar om zoom på datorer, gynnar tekniken (responsiv design) även användare på små skärmar, då innehållet anpassas till en enda kolumn.
- **Personer med kognitiva funktionsnedsättningar:** En layout som kräver rullning i två led ökar den kognitiva belastningen.

Att säkerställa ombrytning till en enda kolumn vid hög zoom är avgörande för att göra webben användbar för personer som behöver förstoring.

---

## Exempel

### Responsiv layout som bryter om (Rätt) ✅

En layout byggd med responsiva tekniker (t.ex. flexbox, grid, media queries, relativa enheter) som anpassar sig till smalare skärmbredder (eller hög zoom) genom att placera innehållselement under varandra i en enda kolumn.

::code-group{:labels='["CSS (Responsiv layout) ✅"]'}

```css showLineNumbers
.container {
  display: flex; /* Använder Flexbox för layout */
  flex-wrap: wrap; /* Tillåter element att radbrytas */
  gap: 1rem; /* Avstånd mellan element */
}

.main-content {
  flex: 2; /* Tar upp mer plats när det finns utrymme */
  min-width: 300px; /* Säkerställer en minsta bredd */
}

.sidebar {
  flex: 1; /* Tar upp mindre plats */
  min-width: 200px;
}

/* Vid smalare skärmar (eller hög zoom) kan man använda
   media queries för att tvinga enkolumnslayout om flex-wrap
   inte räcker eller för att ändra andra stilar. */
@media (max-width: 600px) {
  .container {
    flex-direction: column; /* Stapla elementen vertikalt */
  }
  .main-content,
  .sidebar {
    width: 100%; /* Full bredd i kolumnen */
    min-width: initial; /* Återställ min-width om nödvändigt */
  }
}
```

::
**Resultat:** När fönsterbredden minskas till 320px (eller användaren zoomar in motsvarande), kommer [.main-content]{.inline-code} och [.sidebar]{.inline-code} att staplas vertikalt. Användaren behöver bara rulla nedåt (vertikalt) för att se allt innehåll. Ingen horisontell rullning krävs.

### Layout med fasta element som förhindrar ombrytning (Fel) ❌

Användning av fasta bredder i pixlar, absolut positionering som inte anpassar sig, eller innehåll (som stora bilder utan [max-width: 100%]{.inline-code}) som är bredare än 320px kan tvinga fram horisontell rullning vid zoom.

::code-group{:labels='["CSS (Problem med fasta element) ❌"]'}

```css showLineNumbers
.page-wrapper {
  width: 960px; /* Fast bredd för hela sidcontainern */
  margin: 0 auto;
}

.two-columns {
  display: grid;
  grid-template-columns: 600px 300px; /* Fasta kolumnbredder */
  gap: 20px;
}

.wide-image {
  width: 500px; /* Fast bildbredd, bredare än 320px */
  height: auto;
}

.fixed-element {
  position: fixed; /* Kan överlappa annat innehåll vid zoom */
  right: 20px;
  bottom: 20px;
  width: 200px; /* Fast bredd */
  background-color: lightblue;
  padding: 10px;
}
```

::
**Resultat:** När användaren zoomar in till en effektiv bredd av 320px:

1.  [.page-wrapper]{.inline-code} och [.two-columns]{.inline-code} med sina fasta bredder kommer att vara mycket bredare än skärmen, vilket **kräver horisontell rullning**.
2.  [.wide-image]{.inline-code} är bredare än 320px och kommer att **kräva horisontell rullning** om den inte får en [max-width: 100%]{.inline-code}.
3.  [.fixed-element]{.inline-code} kan täcka över annat innehåll eller hamna utanför skärmen, vilket kan leda till **förlorad information eller funktion** och/eller **kräva horisontell rullning**.

### Undantag: Datatabell

En komplex datatabell med många kolumner behöver inte nödvändigtvis brytas om till en enda kolumn, eftersom relationen mellan kolumner och rader är viktig. Horisontell rullning för att se hela tabellen är acceptabelt i detta fall.

_(Kodexempel för tabell utelämnas då det är ett tillåtet undantag)_

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.10 Reflow (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- [CSS Techniques for WCAG 2.0: C32 - Using media queries and grid CSS to reflow columns](https://www.w3.org/WAI/WCAG22/Techniques/css/C32)
- [CSS Techniques for WCAG 2.0: C38 - Using CSS width, max-width and flexbox to fit labels and inputs](https://www.w3.org/WAI/WCAG22/Techniques/css/C38)
