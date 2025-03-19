---
title: Audio och video (inspelade)
description: För inspelat audioinnehåll och videoinnehåll tillhandahålls alternativ som ger motsvarande information.
level: A
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsbaserade media
criterionNumber: 1
---

# Framgångskriterium 1.2.1 Audio och video (inspelade)

## Beskrivning

För inspelat audioinnehåll och videoinnehåll gäller följande, förutom när ljudet eller videon är ett mediaalternativ till text och är tydligt märkt som sådant:

- **Inspelat audio:** Ett alternativ för tidsbaserade media tillhandahålls som presenterar motsvarande information som det inspelade audioinnehållet.
- **Inspelad video:** Ett alternativ för tidsbaserade media eller ett audiospår tillhandahålls som presenterar motsvarande information som den inspelade videon.

## Varför detta behövs

Personer med nedsatt hörsel eller syn kan inte ta del av innehåll som presenteras endast i ljud- eller videoformat. Genom att tillhandahålla alternativ såsom transkriptioner för ljud och beskrivande text eller berättarröst för video säkerställer man att informationen är tillgänglig för alla användare.

## Exempel

### Exempel på bra implementering

#### Audio med transkription

```html
<audio controls src="presentation.mp3">
  Din webbläsare stödjer inte audio-elementet.
</audio>
<a href="presentation-transkription.html">Transkription av presentationen</a>
```

#### Video med textbeskrivning

```html
<video controls src="produktdemo.mp4">
  Din webbläsare stödjer inte video-elementet.
</video>
<a href="produktdemo-beskrivning.html"
  >Textbeskrivning av produktdemonstrationen</a
>
```

### Exempel på bristande implementering

#### Audio utan alternativ

```html
<audio controls src="intervju.mp3">
  Din webbläsare stödjer inte audio-elementet.
</audio>
```

#### Video utan ljudspår eller textbeskrivning

```html
<video controls src="montagevideo.mp4">
  Din webbläsare stödjer inte video-elementet.
</video>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html)
- [Webbriktlinjer - R115: Texta inspelad rörlig media](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/texta-inspelad-rorlig-media)
