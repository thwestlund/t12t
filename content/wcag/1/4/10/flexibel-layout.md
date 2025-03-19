---
title: Flexibel layout
description: Innehåll kan presenteras utan förlust av information eller funktionalitet och utan att behöva scrolla i två dimensioner.
level: AA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 10

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.4.10 Flexibel layout

## Beskrivning

Innehåll kan presenteras utan förlust av information eller funktionalitet, och utan att behöva scrolla i två dimensioner för:

- Vertikal scrollning för innehåll med bredd motsvarande 320 CSS-pixlar;
- Horisontell scrollning för innehåll med höjd motsvarande 256 CSS-pixlar.

Förutom för de delar av innehållet som kräver tvådimensionell layout för användning eller betydelse.

## Varför detta behövs

När innehåll kräver horisontell scrollning, särskilt i kombination med vertikal scrollning, blir det betydligt svårare att använda för många personer:

- Personer med synnedsättning som använder stark förstoring
- Personer med motoriska funktionsnedsättningar som har svårt att utföra precisa scrollrörelser
- Personer med kognitiva funktionsnedsättningar som kan bli förvirrade av tvådimensionell navigering
- Mobilanvändare som oftast bara har vertikal scrollning tillgänglig

Genom att säkerställa att innehållet omflödas (reflow) för att passa i en smal viewport förbättrar du användbarheten för alla, särskilt på mobila enheter eller vid stark förstoring.

320 CSS-pixlar motsvarar en viewport på 1280px med 400% förstoring, vilket är en vanlig förstoringsgrad för användare med synnedsättning.

## Exempel

### Exempel på bra implementering

#### Responsiv layout med CSS Grid och flexbox

```html
<style>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .card {
    display: flex;
    flex-direction: column;
  }

  /* För smala skärmar */
  @media (max-width: 320px) {
    .container {
      grid-template-columns: 1fr;
    }

    /* Anpassa tabeller för smal vy */
    table {
      display: block;
    }

    th,
    td {
      display: block;
      width: 100%;
    }

    th {
      text-align: left;
    }
  }
</style>

<div class="container">
  <div class="card">
    <h2>Rubrik 1</h2>
    <p>Innehåll som anpassar sig efter tillgängligt utrymme...</p>
  </div>
  <div class="card">
    <h2>Rubrik 2</h2>
    <p>Mer innehåll som anpassar sig...</p>
  </div>
</div>
```

#### Tabell med responsiv design

```html
<style>
  .responsive-table {
    width: 100%;
    overflow-x: auto; /* Tillåter horisontell scrollning vid behov */
  }

  /* För smala skärmar, omvandla tabellen till en listvy */
  @media (max-width: 320px) {
    .responsive-table table,
    .responsive-table thead,
    .responsive-table tbody,
    .responsive-table tr,
    .responsive-table th,
    .responsive-table td {
      display: block;
      width: 100%;
    }

    .responsive-table td {
      /* Lägg till etikett före värdet för varje cell */
      position: relative;
      padding-left: 50%;
    }

    .responsive-table td::before {
      /* Lägg till kolumnrubriken som etikett för varje cell */
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 45%;
      font-weight: bold;
    }
  }
</style>

<div class="responsive-table">
  <table>
    <thead>
      <tr>
        <th>Namn</th>
        <th>Position</th>
        <th>Kontor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Namn">Anna Andersson</td>
        <td data-label="Position">VD</td>
        <td data-label="Kontor">Stockholm</td>
      </tr>
      <!-- Fler rader... -->
    </tbody>
  </table>
</div>
```

### Exempel på bristande implementering

#### Fast bredd som kräver horisontell scrollning

```html
<style>
  .fixed-width-container {
    width: 1000px; /* Fast bredd som inte anpassas */
    margin: 0 auto;
  }
</style>

<div class="fixed-width-container">
  <h1>Rubrik</h1>
  <p>Innehåll som inte omflödas vid förstoring eller på små skärmar...</p>
</div>
```

#### Tabell utan responsiv design

```html
<style>
  .wide-table {
    min-width: 800px; /* Kräver horisontell scrollning på smala skärmar */
  }
</style>

<table class="wide-table">
  <thead>
    <tr>
      <th>Kolumn 1</th>
      <th>Kolumn 2</th>
      <!-- Fler kolumner... -->
      <th>Kolumn 10</th>
    </tr>
  </thead>
  <tbody>
    <!-- Tabellrader... -->
  </tbody>
</table>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- [MDN Web Docs - Responsive design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [W3C WAI - Mobile Accessibility](https://www.w3.org/WAI/standards-guidelines/mobile/)
- [Responsive Tables](https://css-tricks.com/responsive-data-tables/)
