---
title: Kontrast (minimum)
description: Den visuella presentationen av text och text i form av bild har ett kontrastvärde på minst 4,5:1.
level: AA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 3

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.4.3 Kontrast (minimum)

## Beskrivning

Den visuella presentationen av text och text i form av bild har ett kontrastvärde på minst 4,5:1, förutom för följande:

- **Stor text:** Stor text och bilder av stor text har ett kontrastvärde på minst 3:1.
- **Oväsentligt:** Text eller text i form av bild som är en del av en inaktiv komponent i användargränssnittet, som är ren dekoration, som inte är synlig för någon, eller som är del av en bild som innehåller annat betydande visuellt innehåll, har inga kontrastkrav.
- **Logotyper:** Text som är del av en logotyp eller ett varumärkesnamn har inga kontrastkrav.

## Varför detta behövs

Tillräcklig kontrast mellan text och bakgrund är avgörande för att personer med nedsatt syn, färgblindhet eller åldersrelaterade synförändringar ska kunna läsa och förstå innehållet. Även användare som läser under suboptimala förhållanden, som i starkt solljus, gynnas av bra kontrast.

## Exempel

### Exempel på bra implementering

#### Text med god kontrast

```css
/* Mörk text mot ljus bakgrund - kontrast ca 14:1 */
.content {
  color: #000000; /* Svart text */
  background-color: #ffffff; /* Vit bakgrund */
}

/* Ljus text mot mörk bakgrund - kontrast ca 14:1 */
.dark-mode {
  color: #ffffff; /* Vit text */
  background-color: #000000; /* Svart bakgrund */
}

/* Stor rubriktext - kontrast ca 3:1 */
h1 {
  font-size: 24px;
  color: #757575; /* Grå text */
  background-color: #ffffff; /* Vit bakgrund */
}
```

### Exempel på bristande implementering

#### Text med otillräcklig kontrast

```css
/* Ljusgrå text mot vit bakgrund - kontrast bara 2.6:1 */
.subtle-text {
  color: #bbbbbb;
  background-color: #ffffff;
}

/* Mörkblå text mot svart bakgrund - kontrast bara 2.5:1 */
.dark-theme {
  color: #1a237e;
  background-color: #000000;
}
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Webbriktlinjer - R126: Tillhandahåll tillräckliga kontraster](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/tillhandahall-tillrackliga-kontraster)
