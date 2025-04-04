---
title: 1.4.12 Textavstånd
description: Säkerställ att ingen förlust av innehåll eller funktion sker när användare anpassar avstånd för text (radavstånd, teckenavstånd, ordavstånd, styckeavstånd).
level: AA
slug: textavstand
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "textavstånd",
    "radavstånd",
    "teckenavstånd",
    "ordavstånd",
    "styckeavstånd",
    "line height",
    "letter spacing",
    "word spacing",
    "paragraph spacing",
    "läsbarhet",
    "dyslexi",
    "nedsatt syn",
    "skiljbar",
  ]
canonical: https://t12t.dev/wcag/1/4/12/textavstand

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 12

og:
  title: 1.4.12 Textavstånd – WCAG
  description: Säkerställ att innehåll fungerar när användare anpassar textavstånd.
  url: https://t12t.dev/wcag/1/4/12/textavstand
  type: article

datePublished: 2025-04-21
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Textavstånd

## Beskrivning

I innehåll som implementeras med märkspråk som stöder följande egenskaper för textstilar, får ingen förlust av innehåll eller funktionalitet inträffa genom att enbart ställa in dessa och inte ändra någon annan stilegenskap:

1.  **Radavstånd (line height):** Till minst **1.5 gånger** teckenstorleken.
2.  **Styckeavstånd:** Avstånd efter stycken till minst **2 gånger** teckenstorleken.
3.  **Teckenavstånd (letter spacing, tracking):** Till minst **0.12 gånger** teckenstorleken.
4.  **Ordavstånd (word spacing):** Till minst **0.16 gånger** teckenstorleken.

Detta innebär att en webbsida måste vara byggd så att den inte går sönder (t.ex. text blir avklippt, knappar blir oåtkomliga, innehåll överlappar) om en användare använder ett verktyg (t.ex. ett webbläsartillägg eller en anpassad stilmall) för att applicera dessa ökade avstånd för att förbättra läsbarheten. Webbplatsen behöver inte själv erbjuda kontroller för detta, men den får inte förhindra att sådana anpassningar fungerar.

## Varför detta behövs

Möjligheten att justera textavstånd är avgörande för många användare, särskilt:

- **Personer med dyslexi och andra lässvårigheter:** Ökat avstånd mellan rader, ord och tecken kan göra texten mycket lättare att avkoda och följa.
- **Personer med nedsatt syn:** Kan behöva öka avstånden för att kunna urskilja enskilda tecken, ord och rader, särskilt vid förstoring. Ökat radavstånd förhindrar att textrader "flyter ihop".
- **Personer med kognitiva funktionsnedsättningar:** En luftigare textlayout kan minska visuell stress och underlätta läsning och förståelse.

Om webbplatsens design (ofta genom att använda fasta höjder på containrar som innehåller text) förhindrar dessa anpassningar, utestängs användare som är beroende av dem.

---

## Exempel

### Layout som tillåter anpassade avstånd (Rätt) ✅

Genom att undvika fasta höjder på element som innehåller text och använda flexibla layouter, kan sidan anpassa sig när textens avstånd ökar.

::code-group{:labels='["CSS (Flexibel höjd) ✅"]'}

```css showLineNumbers
.text-container {
  width: 100%; /* Anpassar sig i bredd */
  max-width: 70ch; /* Begränsar radlängd för läsbarhet */
  padding: 1rem;
  border: 1px solid grey;
  /* INGEN fast 'height' satt här! Höjden anpassar sig
     automatiskt efter innehållets storlek, även om
     radavstånd, ordavstånd etc. ökar. */
}

.text-container p {
  font-size: 1rem;
  /* Standardavstånd kan sättas, men de kommer att kunna
     skrivas över av användarstilar. */
  line-height: 1.4;
  margin-bottom: 1rem; /* Standard styckeavstånd */
}

button {
  padding: 0.5em 1em; /* Relativ padding */
  font-size: 1rem;
  /* INGEN fast 'height' som kan klippa texten om letter-spacing ökar */
}
```

::
**Resultat:** Om en användare applicerar CSS för att öka [line-height]{.inline-code}, [letter-spacing]{.inline-code}, [word-spacing]{.inline-code} och [margin-bottom]{.inline-code} (för stycken), kommer höjden på [.text-container]{.inline-code} och knapparna att växa för att rymma den utökade texten. Inget innehåll klipps av eller försvinner.

### Layout med fast höjd som klipper text (Fel) ❌

Att sätta en fast höjd på en container som innehåller text är den vanligaste orsaken till problem med detta kriterium. När textavstånden ökas, ryms inte texten längre och blir avklippt om [overflow]{.inline-code} är [hidden]{.inline-code}.

::code-group{:labels='["CSS (Fast höjd) ❌"]'}

```css showLineNumbers
.fixed-height-box {
  width: 300px;
  height: 150px; /* Fast höjd! */
  padding: 10px;
  border: 1px solid black;
  overflow: hidden; /* Klipper innehåll som inte ryms */
  font-size: 16px;
  line-height: 1.3; /* Ganska tätt som standard */
}

.fixed-height-box p {
  margin-bottom: 8px; /* Tätt styckeavstånd */
}
```

::
**Resultat:** Om en användare ökar [line-height]{.inline-code} till 1.5, [margin-bottom]{.inline-code} (för stycken) till 2 gånger teckenstorleken (32px), [letter-spacing]{.inline-code} till 0.12em, och [word-spacing]{.inline-code} till 0.16em, kommer texten att ta betydligt mer plats vertikalt. Eftersom [.fixed-height-box]{.inline-code} har en fast höjd på 150px och [overflow: hidden]{.inline-code}, kommer text som inte längre ryms att bli **avklippt och därmed gå förlorad**.

---

## Testning

Det enklaste sättet att testa detta är att använda ett verktyg, som en [bookmarklet](https://www.tpgi.com/text-spacing-bookmarklet/) (bokmärkesapplet) eller webbläsartillägg, som automatiskt applicerar de specificerade minimiavstånden på sidan. Kontrollera sedan visuellt att ingen text är avklippt, att inget innehåll överlappar på ett sätt som gör det oläsligt, och att all funktionalitet (t.ex. knappar) fortfarande är fullt synlig och användbar.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.12 Text Spacing (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- [Webbriktlinjer: R117 Undvik att låsa textavstånd](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/undvik-att-lasa-textavstand)
- [TPGi: Text Spacing Bookmarklet](https://www.tpgi.com/text-spacing-bookmarklet/) (Verktyg för testning)
