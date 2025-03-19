---
title: Mediealternativ (förinspelad)
description: Ett alternativ för tidsbaserade media tillhandahålls för alla förinspelad synkroniserade media och för alla förinspelad enbart vidoemedia.
level: AAA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsbaserade media
criterionNumber: 8

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.2.8 Mediealternativ (förinspelad)

## Beskrivning

Ett alternativ för tidsbaserade media tillhandahålls för all förinspelad synkroniserad media och för all förinspelad enbart videomedia.

## Varför detta behövs

Vissa användare kan ha svårt att bearbeta både visuell och auditiv information samtidigt, eller kan ha både hörsel- och synnedsättningar. För dessa användare kan en fullständig textbaserad beskrivning av allt innehåll i mediet vara nödvändig.

Ett mediealternativ ger en fullständig textbeskrivning av allt som händer i videon, inklusive dialog, viktiga ljud och visuella detaljer. Detta ger användare som varken kan se eller höra videon möjlighet att ta del av samma information.

Detta går längre än textning och ljudbeskrivning genom att erbjuda en komplett textbaserad ersättning för hela mediet.

## Exempel

### Exempel på bra implementering

#### Video med fullständigt textbaserat alternativ

```html
<video controls aria-describedby="transkription">
  <source src="produktdemonstration.mp4" type="video/mp4" />
  <track kind="captions" src="textning.vtt" srclang="sv" />
  <track kind="descriptions" src="ljudbeskrivning.vtt" srclang="sv" />
  Din webbläsare stödjer inte videouppspelning.
</video>
<div id="transkription">
  <h3>Fullständig beskrivning av videon</h3>
  <p>
    [00:00] Videon börjar med en översikt av produkten från olika vinklar.
    Produkten är en blå, handhållen enhet med två knappar på framsidan.
  </p>
  <p>
    [00:15] Maria: "Välkomna till vår demonstration av den nya enheten. Jag
    kommer att visa hur ni enkelt kan använda den i vardagen."
  </p>
  <p>
    [00:22] Maria tar enheten i handen och trycker på den övre knappen. En grön
    lampa tänds i övre hörnet.
  </p>
  <!-- Fortsätter med fullständig beskrivning av hela videon -->
</div>
```

#### Interaktiv presentation med ekvivalent textversion

```html
<div>
  <h2>Produktlansering 2023</h2>
  <video controls>
    <source src="lansering.mp4" type="video/mp4" />
    <track kind="captions" src="textning.vtt" srclang="sv" />
  </video>
  <p>
    <a href="lansering-text.html">Fullständig textversion av presentationen</a>
  </p>
</div>
```

### Exempel på bristande implementering

#### Video med bara transkription av dialog

```html
<video controls>
  <source src="intervju.mp4" type="video/mp4" />
</video>
<div>
  <h3>Transkription</h3>
  <p>Anders: "Vad tycker du om den nya processen?"</p>
  <p>Karin: "Den har verkligen effektiviserat vårt arbetssätt."</p>
  <!-- Transkription innehåller endast dialogen, inte beskrivning av visuella element -->
</div>
```

#### Video med otillräcklig textbeskrivning

```html
<video controls aria-describedby="kort-beskrivning">
  <source src="demonstration.mp4" type="video/mp4" />
</video>
<p id="kort-beskrivning">
  I denna video demonstreras hur man använder verktyget för att skapa en
  rapport.
</p>
<!-- Beskrivningen är för kortfattad och ger inte samma information som videon -->
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.2.8 Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html)
- [W3C WAI - Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/)
- [Creating Accessible Transcripts of Videos - WebAIM](https://webaim.org/techniques/captions/transcripts)
