---
title: Meningsfull ordning
description: När den ordning som innehåll presenteras i påverkar dess betydelse, kan en korrekt läsordning programmatiskt bestämmas.
level: A
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 3
guidelineName: Anpassningsbart
criterionNumber: 2
---

# Framgångskriterium 1.3.2 Meningsfull ordning

## Beskrivning

När den ordning som innehåll presenteras i påverkar dess betydelse, kan en korrekt läsordning programmatiskt bestämmas.

## Varför detta behövs

För personer som använder hjälpmedel, särskilt skärmläsare, är det viktigt att innehållet presenteras i en meningsfull ordning. Hjälpmedel följer den ordning som finns i HTML-koden, inte den visuella presentationen på skärmen. När layout har skapats med CSS eller tabeller för layout kan den visuella ordningen skilja sig från ordningen i koden, vilket kan göra innehållet svårbegripligt.

## Exempel

### Exempel på bra implementering

#### Logisk HTML-struktur som följer presentationsordningen

```html
<header>
  <h1>Sidtitel</h1>
  <nav>Huvudnavigering</nav>
</header>
<main>
  <article>
    <h2>Artikelrubrik</h2>
    <p>Första stycket...</p>
    <p>Andra stycket...</p>
  </article>
</main>
<aside>
  <h2>Relaterade länkar</h2>
  <ul>
    <li><a href="#">Länk 1</a></li>
    <li><a href="#">Länk 2</a></li>
  </ul>
</aside>
<footer>Sidfot med kontaktinformation</footer>
```

#### Formulär med logisk tabuleringsordning

```html
<form>
  <div>
    <label for="firstName">Förnamn:</label>
    <input type="text" id="firstName" name="firstName" />
  </div>
  <div>
    <label for="lastName">Efternamn:</label>
    <input type="text" id="lastName" name="lastName" />
  </div>
  <div>
    <label for="email">E-post:</label>
    <input type="email" id="email" name="email" />
  </div>
  <button type="submit">Skicka</button>
</form>
```

### Exempel på bristande implementering

#### Layout som bryter läsordningen

```html
<div style="display: grid; grid-template-columns: 1fr 1fr;">
  <div style="grid-column: 2;">Det här ska läsas först</div>
  <div style="grid-column: 1;">Men det här kommer först i DOM</div>
</div>
```

#### Formulär med ologisk ordning

```html
<form>
  <input type="text" id="firstName" name="firstName" />
  <label for="firstName">Förnamn:</label>
  <input type="text" id="lastName" name="lastName" />
  <label for="lastName">Efternamn:</label>
</form>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)
- [Webbriktlinjer - R122: Ordna innehållet i en meningsfull ordning för alla](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/ordna-innehallet-i-en-meningsfull-ordning-for-alla)
