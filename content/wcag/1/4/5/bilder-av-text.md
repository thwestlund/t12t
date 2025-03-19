---
title: Bilder av text
description: Om de tekniker som används kan åstadkomma den visuella presentationen, används text hellre än bilder av text.
level: AA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 5

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.4.5 Bilder av text

## Beskrivning

Om de tekniker som används kan åstadkomma den visuella presentationen, används text hellre än bilder av text, förutom i följande fall:

- **Anpassningsbar:** Bilden av text kan visuellt anpassas efter användarens behov;
- **Nödvändig:** En särskild presentation av text är nödvändig för den information som förmedlas.

Logotyper (text som är en del av en logotyp eller ett varumärkesnamn) betraktas som nödvändiga.

## Varför detta behövs

Text som presenteras som en bild kan inte skalas, anpassas eller manipuleras på samma sätt som riktig text. Detta är problematiskt för personer med synnedsättningar som behöver ändra textstorlek, teckensnitt eller färg för att kunna läsa innehållet. Genom att använda riktig text istället för bilder av text förbättrar man tillgängligheten för alla användare, särskilt de som använder förstoringsverktyg eller anpassar texten efter sina behov.

## Exempel

### Exempel på bra implementering

#### Rubrik med riktig text och CSS

```html
<h1>Välkommen till vår webbplats</h1>

<style>
  h1 {
    font-family: "Playfair Display", serif;
    font-size: 2.5rem;
    color: #333;
    border-bottom: 3px solid #900;
    padding-bottom: 0.5rem;
  }
</style>
```

#### Pull quote med text och styling

```html
<blockquote class="pull-quote">
  <p>Vi strävar efter att göra digital teknik tillgänglig för alla.</p>
  <cite>— Maria Svensson, VD</cite>
</blockquote>

<style>
  .pull-quote {
    font-family: "Georgia", serif;
    font-size: 1.5rem;
    font-style: italic;
    color: #555;
    border-left: 5px solid #008080;
    padding-left: 1rem;
    margin: 2rem 0;
  }

  .pull-quote cite {
    display: block;
    font-size: 1rem;
    margin-top: 0.5rem;
    text-align: right;
  }
</style>
```

#### Knapptext med riktig text

```html
<button class="cta-button">Registrera dig nu</button>

<style>
  .cta-button {
    background-color: #4caf50;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .cta-button:hover {
    background-color: #45a049;
  }
</style>
```

### Exempel på bristande implementering

#### Rubrik som bild

```html
<img src="heading.png" alt="Välkommen till vår webbplats" />
```

#### Citat som bild

```html
<img
  src="quote.jpg"
  alt="Vi strävar efter att göra digital teknik tillgänglig för alla. — Maria Svensson, VD"
/>
```

#### Knapp med text som bild

```html
<a href="register.html">
  <img src="register-button.png" alt="Registrera dig nu" />
</a>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html)
- [Webbriktlinjer - R128: Använd text, inte bilder, för att visa text](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/anvand-text-inte-bilder-for-att-visa-text)
