---
title: 2.4.2 Sidtitel
description: Säkerställ att varje webbsida har en titel som beskriver sidans ämne eller syfte.
level: A
slug: sidtitel
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "sidtitel",
    "title-element",
    "HTML-titel",
    "navigation",
    "orientering",
    "skärmläsare",
    "operabel",
    "navigerbar",
  ]
canonical: https://t12t.dev/wcag/2/4/2/sidtitel

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 2

og:
  title: 2.4.2 Sidtitel – WCAG
  description: Säkerställ att varje webbsida har en titel som beskriver dess ämne eller syfte.
  url: https://t12t.dev/wcag/2/4/2/sidtitel
  type: article

datePublished: 2025-05-26
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Sidtitel

## Beskrivning

Webbsidor har titlar som beskriver sidans ämne eller syfte.

Detta innebär att varje HTML-sida måste ha ett [\<title\>]{.inline-code}-element inuti [\<head\>]{.inline-code}-elementet. Innehållet i [\<title\>]{.inline-code}-elementet ska vara meningsfullt och hjälpa användaren att förstå vad sidan handlar om. Titeln bör vara unik för varje sida på webbplatsen, eller åtminstone för varje unik sektion eller uppgift.

## Varför detta behövs

Sidtiteln är ofta det första som en användare möter och är viktig för orientering och navigation:

- **Skärmläsare:** Läser upp sidtiteln när sidan laddas. En tydlig titel hjälper användaren att snabbt avgöra om de har hamnat rätt. De kan också använda skärmläsarfunktioner för att lista öppna fönster/flikar baserat på deras titlar.
- **Webbläsarflikar och bokmärken:** Sidtiteln visas i webbläsarens fönstertitel, flikar och i bokmärkeslistor. En informativ titel gör det lättare att hitta tillbaka till rätt sida och att skilja mellan olika flikar.
- **Sökmotorresultat:** Sidtiteln är en viktig faktor för sökmotorer och visas ofta som den klickbara rubriken i sökresultaten. En bra titel hjälper användare att välja rätt länk.
- **Kognitivt stöd:** En tydlig titel hjälper alla användare att snabbt förstå sidans syfte och var de befinner sig på webbplatsen.

En frånvarande, otydlig eller duplicerad sidtitel gör det svårare för användare att navigera effektivt och förstå sammanhanget.

---

## Exempel

### Tydlig och unik sidtitel (Rätt) ✅

Titeln beskriver sidans specifika innehåll och inkluderar ofta webbplatsens namn för kontext.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="UTF-8" />
    <!-- Exempel 1: Kontaktsida -->
    <title>Kontakta oss - Exempel Företag AB</title>
    <!-- Exempel 2: Specifik produktsida -->
    <title>Produkt X Specifikationer - Exempel Företag AB</title>
    <!-- Exempel 3: Sökresultatsida -->
    <title>Sökresultat för 'cykelhjälm' - Sportbutiken Online</title>
    <!-- Exempel 4: Steg i en process -->
    <title>Leveransadress (Steg 2 av 4) - Kassa - Min Webbshop</title>
  </head>
  <body>
    <!-- Sidans innehåll -->
  </body>
</html>
```

::
**Resultat:** Dessa titlar gör det enkelt att identifiera sidan i flikar, bokmärken och för skärmläsare. Formatet "Unik Sida - Webbplatsnamn" är vanligt och rekommenderat.

### Otydlig eller frånvarande sidtitel (Fel) ❌

Titeln är för generell, identisk på flera sidor, eller saknas helt.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="UTF-8" />
    <!-- Fel: För generell, säger inget om innehållet -->
    <title>Startsida</title>
    <!-- Fel: Samma titel används på alla sidor -->
    <title>Exempel Företag AB</title>
    <!-- Fel: Filnamnet är ingen bra titel -->
    <title>page_checkout_v2.html</title>
    <!-- Fel: Ingen titel alls (visar oftast filnamnet eller URL:en i fliken) -->
    <!-- <title>...</title> saknas -->
  </head>
  <body>
    <!-- Sidans innehåll -->
  </body>
</html>
```

::
**Resultat:** Användare får svårt att skilja mellan flikar, förstå sidans innehåll direkt, eller hitta tillbaka via historik/bokmärken. Om titeln saknas blir upplevelsen ännu sämre.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.2 Page Titled (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)
- [Webbriktlinjer: R123 Skriv beskrivande sidtitlar](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/skriv-beskrivande-sidtitlar)
- [MDN Web Docs: The Title element (\<title\>)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
- [WebAIM: Accessible Page Titles](https://webaim.org/techniques/pagetitle/)
