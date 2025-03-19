---
title: Parsningsbar
description: I innehåll som implementeras med märkspråk har element fullständiga start- och sluttaggar, element är kapslade enligt specifikationerna, element innehåller inte dubbla attribut, och alla ID är unika.
level: A
principleNumber: 4
principleName: Robust
guidelineNumber: 1
guidelineName: Kompatibel
criterionNumber: 1

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 4.1.1 Parsningsbar

## Beskrivning

I innehåll som implementeras med märkspråk har element fullständiga start- och sluttaggar, element är kapslade enligt specifikationerna, element innehåller inte dubbla attribut, och alla ID:n är unika, förutom när specifikationerna tillåter dessa egenskaper.

## Varför detta behövs

Korrekt kodad HTML är avgörande för att hjälpmedel ska kunna tolka och presentera innehållet korrekt. När HTML-koden innehåller fel eller är skriven på ett sätt som inte följer specifikationerna, kan webbläsare och hjälpmedel tolka koden på olika sätt, vilket kan göra innehållet otillgängligt eller obegripligt för vissa användare.

## Exempel

### Exempel på bra implementering

#### Korrekt kapslad HTML

```html
<div>
  <h2>Rubrik</h2>
  <p>Brödtext med <a href="länk.html">länk</a>.</p>
</div>
```

#### Fullständiga start- och sluttaggar

```html
<section>
  <h1>Rubrik</h1>
  <p>Första stycket.</p>
  <p>Andra stycket.</p>
</section>
```

#### Unika ID:n

```html
<div id="sektion1">Första sektionen</div>
<div id="sektion2">Andra sektionen</div>
```

### Exempel på bristande implementering

#### Saknad sluttagg

```html
<div>
  <p>Text utan sluttagg.</p>
</div>
```

#### Felaktig kapsling

```html
<p><strong>Fetstilt text <em>och kursiv</strong> text</em></p>
```

#### Dubbla attribut

```html
<div class="box" class="container">Innehåll</div>
```

#### Dubbla ID:n

```html
<div id="content">Första innehållet</div>
<div id="content">Andra innehållet</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 4.1.1 Parsing](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html)
- [Webbriktlinjer - R80: Följ standarder](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/folj-standarder)
