---
title: 3.1.1 Språk på sidan
description: Ange det huvudsakliga språket för varje webbsida med hjälp av lang-attributet.
level: A
slug: sprak-pa-sidan
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "språk",
    "language",
    "lang-attribut",
    "html-lang",
    "skärmläsare",
    "uttal",
    "översättning",
    "begriplig",
    "läsbar",
  ]
canonical: https://t12t.dev/wcag/3/1/1/sprak-pa-sidan

principleNumber: 3
principleName: Begriplig
guidelineNumber: 1
guidelineName: Läsbar
criterionNumber: 1

og:
  title: 3.1.1 Språk på sidan – WCAG
  description: Ange det huvudsakliga språket för varje webbsida med lang-attributet.
  url: https://t12t.dev/wcag/3/1/1/sprak-pa-sidan
  type: article

datePublished: 2025-07-01
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: yearly # Usually set once per site/template
  priority: 0.9 # Nivå A, fundamental
---

# Språk på sidan

## Beskrivning

Det huvudsakliga mänskliga språket på varje webbsida kan **programmatiskt bestämmas**.

Detta innebär att du måste ange sidans primära språk genom att använda [lang]{.inline-code}-attributet på [\<html\>]{.inline-code}-elementet i början av HTML-dokumentet. Språkkoden ska följa standarden BCP 47 (oftast en två- eller trebokstavskod som "sv" för svenska, "en" för engelska).

## Varför detta behövs

Att ange sidans språk är viktigt för flera anledningar:

- **Skärmläsare:** Hjälpmedel behöver veta språket för att kunna välja rätt talsyntes (röst) och uttala orden korrekt. En svensk text som läses upp med engelskt uttal blir obegriplig, och vice versa.
- **Översättningsverktyg:** Webbläsare och andra verktyg använder språkkoden för att veta vilket språk de ska översätta _från_.
- **Webbläsarfunktioner:** Vissa webbläsare kan anpassa teckensnitt, citationstecken eller andra typografiska detaljer baserat på språket.
- **Sökmotorer:** Kan använda språkinformationen för att indexera sidan korrekt och visa den för relevanta användare.

Det är en grundläggande inställning som möjliggör korrekt tolkning och presentation av innehållet för både människor och maskiner.

---

## Exempel

### Korrekt angivet språk för sidan (Rätt) ✅

[lang]{.inline-code}-attributet sätts på [\<html\>]{.inline-code}-elementet med korrekt språkkod.

::code-group{:labels='["HTML (Svenska) ✅", "HTML (Engelska) ✅"]'}

```html {2} showLineNumbers
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="UTF-8" />
    <title>Min svenska sida</title>
  </head>
  <body>
    <p>Detta är innehåll på svenska.</p>
  </body>
</html>
```

```html {2} showLineNumbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My English Page</title>
  </head>
  <body>
    <p>This is content in English.</p>
  </body>
</html>
```

::
**Resultat:** Webbläsare och hjälpmedel vet att sidans huvudsakliga språk är svenska respektive engelska och kan anpassa uttal, översättning etc. därefter.

### Saknat eller felaktigt språkattribut (Fel) ❌

[lang]{.inline-code}-attributet saknas helt, är tomt, eller innehåller en felaktig kod.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<!-- Fel: lang-attribut saknas helt -->
<!DOCTYPE html>
<html>
  <head>
    <title>Okänt språk?</title>
  </head>
  <body>
    <p>Text...</p>
  </body>
</html>

<!-- Fel: lang-attributet är tomt -->
<!DOCTYPE html>
<html lang="">
  <head>
    <title>Tomt språk</title>
  </head>
  <body>
    <p>Text...</p>
  </body>
</html>

<!-- Fel: Felaktig eller påhittad språkkod -->
<!DOCTYPE html>
<html lang="sve">
  <!-- Fel kod, ska vara "sv" -->
  <head>
    <title>Fel kod</title>
  </head>
  <body>
    <p>Svensk text...</p>
  </body>
</html>

<!-- Fel: Anger fel språk -->
<!DOCTYPE html>
<html lang="en">
  <!-- Fel, innehållet är på svenska -->
  <head>
    <title>Fel språk angivet</title>
  </head>
  <body>
    <p>Detta är svensk text.</p>
  </body>
</html>
```

::
**Resultat:** Hjälpmedel och webbläsare kan gissa språket, men det är inte tillförlitligt. Skärmläsare kan använda fel röst och uttal, vilket gör innehållet svårt eller omöjligt att förstå.

---

## Språkkoder

Använd korrekta språkkoder enligt **BCP 47**. Du kan hitta listor på nätet, t.ex. via IANA Language Subtag Registry. Några vanliga koder:

- [sv]{.inline-code}: Svenska
- [en]{.inline-code}: Engelska
- [fi]{.inline-code}: Finska
- [no]{.inline-code}: Norska (Bokmål)
- [nn]{.inline-code}: Nynorska
- [da]{.inline-code}: Danska
- [de]{.inline-code}: Tyska
- [fr]{.inline-code}: Franska
- [es]{.inline-code}: Spanska

Man kan också specificera region, t.ex. [en-US]{.inline-code} (Engelska - USA) eller [en-GB]{.inline-code} (Engelska - Storbritannien), men det är oftast inte nödvändigt för detta kriterium om inte uttalet eller stavningen skiljer sig markant. Att ange basspråket ([en]{.inline-code}) räcker.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.1.1 Language of Page (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)
- [MDN Web Docs: The lang attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
- [W3C Internationalization: Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/)
- [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) (Officiell lista över språkkoder)
