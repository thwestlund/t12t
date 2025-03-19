---
title: Visibilitet av fokus
description: Tangentbordsfokusindikatorn är synlig och har tillräcklig kontrast när komponenter får tangentbordsfokus.
level: AA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 4
guidelineName: Navigerbart
criterionNumber: 11

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.4.11 Visibilitet av fokus

## Beskrivning

När användargränssnittskomponenter får tangentbordsfokus måste hela komponenten ha en fokuseringsindikator med en kontrastkvot på minst 3:1 mot de omgivande färgerna. Det måste också finnas en yta på minst 1 CSS-pixel som har en kontrastkvot på minst 3:1 mot komponenten när den inte har fokus.

## Varför detta behövs

Tangentbordsanvändare behöver kunna se vilken komponent som för närvarande har fokus för att effektivt kunna navigera på en webbplats. Om fokusindikatorn har dålig kontrast eller är för liten kan det vara mycket svårt eller omöjligt för användare med synnedsättningar att se var de befinner sig på sidan. Detta kriterium säkerställer att fokusindikatorn är tillräckligt synlig för alla användare.

## Exempel

### Exempel på bra implementering

#### Fokusindikator med hög kontrast

```css
:focus {
  outline: 3px solid #0066cc; /* Blå outline med god kontrast */
  outline-offset: 2px;
}

/* På mörk bakgrund */
.dark-theme :focus {
  outline: 3px solid #ffcc00; /* Gul outline med god kontrast mot mörk bakgrund */
}
```

#### Fokusindikator med olika visuella indikatorer

```css
:focus {
  outline: 2px solid #000000; /* Svart outline */
  box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.5); /* Blå glow-effekt */
  border-radius: 3px;
}

.btn:focus {
  background-color: #ffffcc; /* Gulaktig bakgrundsfärg när knappen har fokus */
  outline: 2px solid #0066cc;
}
```

#### Förbättrad standardfokusindikator

```css
/* Behåll webbläsarens standardfokusindikator men förstärk den */
:focus {
  outline: auto;
  outline-width: 3px;
  outline-offset: 2px;
}

/* Specifika anpassningar för olika element */
a:focus {
  text-decoration: underline;
  font-weight: bold;
}

button:focus,
input:focus,
select:focus,
textarea:focus {
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.5);
}
```

### Exempel på bristande implementering

#### Borttagen fokusindikator

```css
:focus {
  outline: none; /* Tar bort synlig fokusindikator */
}
```

#### Fokusindikator med för låg kontrast

```css
:focus {
  outline: 1px solid #cccccc; /* Ljusgrå outline med låg kontrast mot vit bakgrund */
}
```

#### För smal fokusindikator

```css
:focus {
  outline: 1px dotted #000000; /* För smal för att vara tydligt synlig */
}
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.4.11 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [Webbriktlinjer - R140: Markera tydligt vilket fält eller element som är i fokus](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/markera-tydligt-vilket-falt-eller-element-som-ar-i-fokus)
