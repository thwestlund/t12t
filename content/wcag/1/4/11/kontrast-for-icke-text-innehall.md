---
title: Kontrast för icke-textinnehåll
description: Den visuella presentationen av gränssnittkomponenter och grafiska objekt har en kontrastkvot på minst 3:1 mot intilliggande färger.
level: AA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 11

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.4.11 Kontrast för icke-textinnehåll

## Beskrivning

Den visuella presentationen av följande har en kontrastkvot på minst 3:1 mot intilliggande färger:

- **Användargränssnittskomponenter:** Visuell information som krävs för att identifiera användargränssnittskomponenter och deras tillstånd, förutom för inaktiva komponenter eller där utseendet på komponenten bestäms av användarens webbläsare och inte ändras av författaren;
- **Grafiska objekt:** Delar av grafik som krävs för att förstå innehållet, förutom när en specifik presentation av grafiken är viktig för informationen som förmedlas.

## Varför detta behövs

Personer med måttlig synnedsättning eller färgblindhet kan ha svårt att uppfatta gränssnittskomponenter eller viktiga grafiska element om dessa inte har tillräcklig kontrast mot bakgrunden. Detta gäller även för användare i situationer med dåliga ljusförhållanden eller bländande ljus.

Medan 1.4.3 behandlar kontrasten för text, täcker detta kriterium kontrastbehovet för icke-textinnehåll som:

- Ikoner och knappar
- Formulärelement som kryssrutor och radioknappar
- Fokusindikatorer
- Grafer och diagram
- Gränser som definierar viktiga områden

Detta säkerställer att användare med nedsatt syn kan se och använda viktiga kontroller och visuella element, vilket förbättrar användbarheten för alla.

## Exempel

### Exempel på bra implementering

#### Formulärelement med god kontrast

```html
<style>
  /* Kryssrutor med god kontrast */
  .checkbox-container {
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
  }

  .custom-checkbox {
    position: absolute;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #fff;
    border: 2px solid #333; /* Mörk ram mot ljus bakgrund - kontrast cirka 9.5:1 */
  }

  /* Markerad kryssruta */
  .checked .custom-checkbox::after {
    content: "";
    position: absolute;
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid #333; /* Mörk markering mot ljus bakgrund */
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
</style>

<label class="checkbox-container">
  Jag godkänner villkoren
  <input type="checkbox" class="sr-only" />
  <span class="custom-checkbox"></span>
</label>
```

#### Knappar med tillräcklig kontrast

```html
<style>
  .primary-button {
    background-color: #0056b3; /* Mörkblå */
    color: #ffffff; /* Vit text */
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    /* Kontrast mellan text och bakgrund: 4.6:1 */
  }

  /* Fokusindikator med god kontrast */
  .primary-button:focus {
    outline: 3px solid #ff6b00; /* Orange fokusring */
    /* Kontrast mellan fokusring och bakgrund samt knappar: > 3:1 */
  }
</style>

<button class="primary-button">Skicka</button>
```

#### Diagram med god kontrast

```html
<style>
  .chart-bar {
    height: 25px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }

  .bar-label {
    width: 100px;
  }

  .bar-fill {
    background-color: #2c5282; /* Mörkblå */
    height: 100%;
    /* Kontrast mot vit bakgrund: 7.4:1 */
  }
</style>

<div class="chart">
  <div class="chart-bar">
    <span class="bar-label">Kategori A</span>
    <div
      class="bar-fill"
      style="width: 70%;"
      aria-valuenow="70"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
  <div class="chart-bar">
    <span class="bar-label">Kategori B</span>
    <div
      class="bar-fill"
      style="width: 45%;"
      aria-valuenow="45"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</div>
```

### Exempel på bristande implementering

#### Formulärkontroller med dålig kontrast

```html
<style>
  .low-contrast-input {
    border: 1px solid #c5c5c5; /* Ljusgrå */
    background-color: #f8f8f8; /* Ljus nästan vit */
    padding: 8px;
    /* Kontrast mellan ram och bakgrund: 1.3:1 - för låg */
  }
</style>

<input type="text" class="low-contrast-input" placeholder="Sök..." />
```

#### Ikon med låg kontrast

```html
<style>
  .icon-container {
    background-color: #f0f0f0; /* Ljusgrå bakgrund */
  }

  .low-contrast-icon {
    color: #c0c0c0; /* Ljusgrå ikon */
    /* Kontrast: cirka 1.5:1 - för låg */
  }
</style>

<div class="icon-container">
  <span class="low-contrast-icon">
    <!-- SVG eller ikon-font med för låg kontrast -->
    <svg><!-- ... --></svg>
  </span>
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [Webbriktlinjer - Se till att grafik och formulär har tillräckliga kontraster](https://www.digg.se/kunskap-och-stod/digital-tillganglighet/webbriktlinjer-for-tillganglighet/riktlinjer/se-till-att-text-och-bakgrund-har-tillracklig-kontrast)
- [The A11Y Project - What is color contrast?](https://www.a11yproject.com/posts/what-is-color-contrast/)
- [Contrast Checker for UI Elements](https://www.brandwood.com/a11y/)
