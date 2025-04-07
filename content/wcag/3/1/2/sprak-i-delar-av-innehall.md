---
title: 3.1.2 Språk i delar av innehållet
description: Ange språket för textavsnitt eller fraser som skiljer sig från sidans huvudsakliga språk med hjälp av lang-attributet.
level: AA
slug: sprak-i-delar-av-innehall
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "språk",
    "language",
    "lang-attribut",
    "främmande ord",
    "citat",
    "skärmläsare",
    "uttal",
    "begriplig",
    "läsbar",
  ]
canonical: https://t12t.dev/wcag/3/1/2/sprak-i-delar-av-innehall

principleNumber: 3
principleName: Begriplig
guidelineNumber: 1
guidelineName: Läsbar
criterionNumber: 2

og:
  title: 3.1.2 Språk i delar av innehållet – WCAG
  description: Ange språket för textavsnitt som skiljer sig från sidans huvudsakliga språk.
  url: https://t12t.dev/wcag/3/1/2/sprak-i-delar-av-innehall
  type: article

datePublished: 2025-07-02
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Språk i delar av innehållet

## Beskrivning

Det mänskliga språket för varje passage eller fras i innehållet kan **programmatiskt bestämmas**. Undantag görs för egennamn, tekniska termer, ord med obestämt språk och ord eller fraser som har blivit en del av språket i den omgivande texten.

Detta kriterium (Nivå AA) bygger vidare på 3.1.1 Språk på sidan. Om en sida som huvudsakligen är på svenska innehåller ett citat, en fras eller ett längre avsnitt på ett annat språk (t.ex. engelska eller franska), måste språket för just den delen anges med [lang]{.inline-code}-attributet på ett omgivande element (t.ex. [\<span\>]{.inline-code}, [\<p\>]{.inline-code}, [\<blockquote\>]{.inline-code}).

Undantagen gäller ord som är så vanliga att de blivit en del av svenskan (t.ex. "online", "feedback"), egennamn (som personnamn eller företagsnamn), eller specifika tekniska termer.

## Varför detta behövs

Precis som för hela sidan (3.1.1) är detta viktigt för att hjälpmedel ska kunna tolka och presentera innehållet korrekt:

- **Skärmläsare:** När en skärmläsare stöter på ett avsnitt markerat med ett annat språk, kan den byta till en röst och ett uttal som passar det språket. Detta gör att främmande ord och citat uttalas korrekt och blir begripliga, istället för att läsas upp med felaktigt svenskt uttal.
- **Översättningsverktyg:** Korrekt uppmärkning hjälper automatiska verktyg att förstå vilka delar som _inte_ ska översättas på samma sätt som huvudinnehållet.
- **Visuell presentation:** Webbläsare kan potentiellt använda informationen för att tillämpa korrekt typografi (t.ex. citationstecken) för det specifika språket.

Korrekt uppmärkning av språkskiften är avgörande för att skärmläsaranvändare ska kunna förstå innehåll med blandade språk.

---

## Exempel

### Korrekt markerat språk för fras/citat (Rätt) ✅

[lang]{.inline-code}-attributet används på ett element som omsluter text på ett främmande språk.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {3,7} showLineNumbers
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>Språkexempel</title>
  </head>
  <body>
    <p>
      Hon utbrast <q lang="en">Oh, how wonderful!</q> när hon såg presenten.
    </p>

    <p>
      Det franska uttrycket <i lang="fr">c'est la vie</i> betyder ungefär
      "sådant är livet".
    </p>

    <blockquote lang="de">
      <p>Man muss immer wieder mit neuen Augen sehen.</p>
      <footer>- Gustav Mahler</footer>
    </blockquote>
  </body>
</html>
```

::
**Resultat:** En skärmläsare som läser den första meningen kommer att använda svenskt uttal fram till [\<q\>]{.inline-code}-elementet, byta till engelskt uttal för "Oh, how wonderful!", och sedan återgå till svenskt uttal. Likaså för det franska och tyska exemplet.

### Omarkerad text på främmande språk (Fel) ❌

Text på ett annat språk än sidans huvudsakliga språk finns med, men utan någon [lang]{.inline-code}-märkning.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html {4,6} showLineNumbers
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>Fel språkexempel</title>
  </head>
  <body>
    <!-- Fel: "Hello world" kommer läsas med svenskt uttal -->
    <p>Mitt första program skrev ut "Hello world".</p>

    <!-- Fel: Hela citatet kommer läsas med svenskt uttal -->
    <p>Som Shakespeare skrev: <q>To be or not to be</q>.</p>
  </body>
</html>
```

::
**Resultat:** Skärmläsaren kommer att försöka uttala "Hello world" och "To be or not to be" med svenska ljudregler, vilket låter fel och kan vara svårt att förstå.

### Undantag: Lånord och namn (Tillåtet) ✅

Ord som är etablerade lånord i svenskan eller egennamn behöver normalt inte märkas upp.

::code-group{:labels='["HTML (Tillåtet Undantag) ✅"]'}

```html showLineNumbers
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>Undantag</title>
  </head>
  <body>
    <!-- OK: "online" och "feedback" är vanliga lånord -->
    <p>Vi hade ett möte online och fick bra feedback.</p>

    <!-- OK: "Charles de Gaulle" är ett egennamn -->
    <p>Flygplatsen är uppkallad efter Charles de Gaulle.</p>

    <!-- OK: "WCAG" är en teknisk term/akronym -->
    <p>Vi följer riktlinjerna i WCAG 2.2.</p>
  </body>
</html>
```

::
**Resultat:** Dessa ord är så integrerade eller specifika att det oftast inte är nödvändigt eller ens önskvärt att byta uttal. Skärmläsare hanterar dem oftast rimligt bra med standardspråket.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.1.2 Language of Parts (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html)
- [MDN Web Docs: The lang attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
- [W3C Technique H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG22/Techniques/html/H58)
