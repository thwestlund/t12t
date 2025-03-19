---
title: Text i form av bild (utan undantag)
description: Text i form av bild används enbart för ren dekoration eller där en specifik presentation av texten är nödvändig för informationen som förmedlas.
level: AAA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 9

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.4.9 Text i form av bild (utan undantag)

## Beskrivning

Text i form av bild används enbart för ren dekoration eller där en specifik presentation av texten är nödvändig för informationen som förmedlas.

## Varför detta behövs

Text i form av bild (text som del av en bild) har flera nackdelar jämfört med riktig text:

1. Den kan inte förstoras eller anpassas utan att förlora kvalitet
2. Den kan inte anpassas avseende typsnitt, färg eller avstånd
3. Den kan vara svår att läsa för personer med synnedsättning
4. Den indexeras inte lika bra av sökmotorer
5. Den kan inte översättas automatiskt
6. Den stöds inte alltid väl av skärmläsare

Detta kriterium går längre än 1.4.5 (Text i form av bild, nivå AA) genom att i princip förbjuda all text i form av bild förutom i två specifika fall:

1. När bilden enbart är dekorativ och har null alt-text
2. När den exakta presentationen av texten är nödvändig för den information som förmedlas (t.ex. för att visa en specifik typografi eller handstil)

## Exempel

### Exempel på bra implementering

#### Logotyp med text i form av bild

```html
<a href="/">
  <img src="logotype.png" alt="Företagsnamn" />
</a>
```

#### Dekorativ text i form av bild

```html
<img
  src="decorative-heading.png"
  alt=""
  role="presentation"
  aria-hidden="true"
/>
<h1>Välkommen till vår webbplats</h1>
```

#### Exempel på handskriven text

```html
<figure>
  <img
    src="handwritten-letter.png"
    alt="Handskrivet brev från 1800-talet som säger: 'Käre vän, jag skriver till dig från Stockholm...'"
  />
  <figcaption>
    Handskrivet brev från 1856 som visar den tidens kalligrafi-stil
  </figcaption>
</figure>
```

### Exempel på bristande implementering

#### Rubrik som text i form av bild

```html
<img src="heading-image.png" alt="Våra tjänster" />
<!-- Bör använda en vanlig HTML-rubrik istället -->
```

#### Knapptext som text i form av bild

```html
<button>
  <img src="submit-button.png" alt="Skicka" />
</button>
<!-- Bör använda vanlig text istället -->
```

#### Kontaktinformation som text i form av bild

```html
<img src="contact-info.png" alt="Kontakta oss: info@foretag.se, 08-123 45 67" />
<!-- Bör använda riktig text så att användarna kan kopiera e-post och telefonnummer -->
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.9 Images of Text (No Exception)](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception.html)
- [WebAIM - Images Concepts](https://webaim.org/techniques/images/)
- [Webbriktlinjer - Använd text, inte bilder, för att visa text](https://www.digg.se/kunskap-och-stod/digital-tillganglighet/webbriktlinjer-for-tillganglighet/riktlinjer/anvand-text-inte-bilder-for-att-visa-text)
