---
title: Språkinställning
description: Sidans standardspråk kan programmatiskt bestämmas.
level: A
principleNumber: 3
principleName: Begriplig
guidelineNumber: 1
guidelineName: Läsbart
criterionNumber: 1
---

# Framgångskriterium 3.1.1 Språkinställning

## Beskrivning

Standardspråket för varje webbsida kan programmatiskt bestämmas.

## Varför detta behövs

Att identifiera språket på en webbsida är viktigt för att hjälpmedel, som skärmläsare, ska kunna presentera innehållet korrekt. När sidans språk anges korrekt kan skärmläsare använda rätt uttalsregler, och översättningsverktyg kan bättre förstå innehållet. Detta gör innehållet mer tillgängligt för personer med funktionsnedsättningar och underlättar för användare som talar andra språk.

## Exempel

### Exempel på bra implementering

#### Grundläggande språkinställning i HTML

```html
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>Sidtitel</title>
  </head>
  <body>
    <p>Innehåll på svenska.</p>
  </body>
</html>
```

#### Regional språkvariant

```html
<!DOCTYPE html>
<html lang="sv-FI">
  <head>
    <title>Sidtitel</title>
  </head>
  <body>
    <p>Innehåll på finlandssvenska.</p>
  </body>
</html>
```

### Exempel på bristande implementering

#### Ingen språkinställning

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sidtitel</title>
  </head>
  <body>
    <p>Innehåll utan språkmarkering.</p>
  </body>
</html>
```

#### Fel språkkod

```html
<!DOCTYPE html>
<html lang="se">
  <!-- Fel: "se" är språkkoden för nordsamiska, inte svenska -->
  <head>
    <title>Sidtitel</title>
  </head>
  <body>
    <p>Innehåll på svenska med fel språkkod.</p>
  </body>
</html>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)
- [Webbriktlinjer - R141: Ange sidans språk i koden](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/ange-sidans-sprak-i-koden)
