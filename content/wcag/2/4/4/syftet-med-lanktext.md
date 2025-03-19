---
title: Syftet med länktext
description: Syftet med varje länk kan fastställas enbart från länktexten eller från länktexten tillsammans med dess programmatiskt fastställda länksammanhang.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 4
guidelineName: Navigerbart
criterionNumber: 4

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.4.4 Syftet med länktext

## Beskrivning

Syftet med varje länk kan fastställas enbart från länktexten eller från länktexten tillsammans med dess programmatiskt fastställda länksammanhang, förutom där syftet med länken skulle vara tvetydigt för användare i allmänhet.

## Varför detta behövs

Tydliga och beskrivande länktexter är avgörande för att användare ska förstå vart en länk leder innan de klickar på den. Detta är särskilt viktigt för personer som använder skärmläsare, som ofta navigerar mellan länkar utan att läsa omgivande text. Även användare med kognitiva funktionsnedsättningar gynnas av tydliga länktexter som klart beskriver målet eller funktionen.

## Exempel

### Exempel på bra implementering

#### Beskrivande länktext

```html
<p>
  Läs mer om
  <a href="tillganglighet.html">hur vi arbetar med digital tillgänglighet</a>.
</p>
```

#### Länk med aria-label för mer kontext

```html
<a
  href="rapport2023.pdf"
  aria-label="Ladda ner årsrapporten 2023 som PDF (5 MB)"
>
  Årsrapport 2023
</a>
```

#### Länk med bild och alternativ text

```html
<a href="kontakt.html"> <img src="kontakt-ikon.png" alt="" /> Kontakta oss </a>
```

#### Länk med programmatiskt associerat sammanhang

```html
<h2 id="aktuellt">Aktuella nyheter</h2>
<ul aria-labelledby="aktuellt">
  <li><a href="nyhet1.html">Nya regler för hemarbete träder i kraft</a></li>
  <li><a href="nyhet2.html">Kommunen öppnar ny återvinningscentral</a></li>
</ul>
```

### Exempel på bristande implementering

#### Ickebeskrivande länktext

```html
<p>För mer information, <a href="info.html">klicka här</a>.</p>
```

#### Upprepande länkar med samma text

```html
<ul>
  <li><a href="produkt1.html">Läs mer</a></li>
  <li><a href="produkt2.html">Läs mer</a></li>
  <li><a href="produkt3.html">Läs mer</a></li>
</ul>
```

#### URL som länktext

```html
<p>
  Besök vår hemsida: <a href="https://www.exempel.se">https://www.exempel.se</a>
</p>
```

#### Länk utan tydligt syfte

```html
<p>Information om våra tjänster finns <a href="tjanster.html">här</a>.</p>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [Webbriktlinjer - R5: Skriv tydliga länkar](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/skriv-tydliga-lankar)
