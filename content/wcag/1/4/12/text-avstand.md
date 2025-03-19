---
title: Textavstånd
description: Inget innehåll eller funktionalitet går förlorad när användaren anpassar textavstånd enligt specifika kriterier.
level: AA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 12
---

# Framgångskriterium 1.4.12 Textavstånd

## Beskrivning

Ingen förlust av innehåll eller funktionalitet uppstår när användaren anpassar text med följande stilar:

- Radavstånd (line-height) till minst 1,5 gånger textstorleken;
- Avstånd efter stycken till minst 2 gånger textstorleken;
- Teckenavstånd (letter-spacing) till minst 0,12 gånger textstorleken;
- Ordavstånd (word-spacing) till minst 0,16 gånger textstorleken.

## Varför detta behövs

Vissa användare behöver justera textavstånd för att göra innehållet mer läsbart, särskilt personer med dyslexi eller andra kognitiva funktionsnedsättningar. Genom att säkerställa att webbsidan fungerar korrekt när dessa inställningar ändras blir innehållet mer tillgängligt för alla. Webbplatser som inte klarar justerade textavstånd kan leda till dold text, överlappande element eller andra problem som gör innehållet svårt eller omöjligt att läsa.

## Exempel

### Exempel på bra implementering

#### Flexibel textlayout med CSS

```css
body {
  /* Bas-inställningar som fungerar väl med anpassad text spacing */
  font-family: Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: normal;
  word-spacing: normal;
}

p {
  margin-bottom: 2em; /* Avstånd efter stycke minst 2 gånger textstorleken */
}

.container {
  max-width: 100%;
  overflow-wrap: break-word;
  hyphens: auto;
}

/* Använd relative units för att respektera användarens textanpassningar */
.card {
  padding: 1em;
  margin-bottom: 1.5em;
}

/* Undvik fixed height på behållare med text */
.text-box {
  min-height: 5em;
  height: auto;
}
```

#### Responsiv layout som anpassar sig till textspacing

```html
<style>
  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .card {
    padding: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    /* Viktigt: Ingen fast höjd */
  }

  .card-title {
    font-size: 1.25rem;
    margin-bottom: 1em;
    /* Tillåt att titeln flyter över flera rader vid behov */
    overflow-wrap: break-word;
  }

  .card-content {
    /* Minsta höjd snarare än fast höjd */
    min-height: 100px;
    /* Säkerställ att innehåll inte klipps av */
    overflow: visible;
  }
</style>

<div class="content-wrapper">
  <div class="card">
    <h2 class="card-title">Vår tjänst</h2>
    <div class="card-content">
      <p>Vi erbjuder skräddarsydda lösningar för ditt företag.</p>
    </div>
  </div>

  <div class="card">
    <h2 class="card-title">Om oss</h2>
    <div class="card-content">
      <p>Vi har över 20 års erfarenhet i branschen.</p>
    </div>
  </div>
</div>
```

### Exempel på bristande implementering

#### Fast höjd på textbehållare

```css
.text-container {
  height: 150px; /* Fast höjd */
  overflow: hidden; /* Döljer text som inte passar */
}
```

#### Innehåll som inte anpassar sig till ökade textavstånd

```html
<style>
  .sidebar {
    width: 200px;
    padding: 10px;
  }

  .sidebar-item {
    height: 40px; /* Fast höjd kan orsaka problem med ökade radavstånd */
    line-height: 40px; /* Fast line-height respekterar inte användares inställningar */
    white-space: nowrap; /* Förhindrar textbrytning */
    overflow: hidden; /* Döljer text som inte passar */
    text-overflow: ellipsis; /* Visar "..." för klippt text */
  }
</style>

<div class="sidebar">
  <div class="sidebar-item">Inställningar för ditt konto</div>
  <div class="sidebar-item">Hantera betalningar och fakturor</div>
  <div class="sidebar-item">Säkerhet och inloggningar</div>
</div>
```

#### Överlappande element vid ökade textavstånd

```html
<style>
  .feature-box {
    position: relative;
    padding: 10px;
    margin-bottom: 20px; /* Fast marginal som inte anpassar sig efter textstorlek */
  }

  .feature-title {
    font-size: 18px;
  }

  .feature-description {
    margin-top: 5px; /* För litet avstånd när textspacing ökar */
  }

  .feature-image {
    position: absolute;
    bottom: 10px;
    right: 10px;
    /* Ingen hänsyn till ökad textstorlek kan orsaka överlappning */
  }
</style>

<div class="feature-box">
  <h3 class="feature-title">Vår nya produkt</h3>
  <p class="feature-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra
    magna ac sapien gravida.
  </p>
  <img class="feature-image" src="product.jpg" alt="Produktbild" />
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- [Webbriktlinjer - R6: Se till att det går att öka avstånd mellan tecken, rader, stycken och ord](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/se-till-att-det-gar-att-oka-avstand-mellan-tecken-rader-stycken-och-ord)
