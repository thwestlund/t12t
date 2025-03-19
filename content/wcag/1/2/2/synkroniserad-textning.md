---
title: Synkroniserad textning
description: Synkroniserade undertexter tillhandahålls för allt inspelat audioinnehåll i synkroniserade media.
level: A
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsbaserade media
criterionNumber: 2

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.2.2 Synkroniserad textning

## Beskrivning

Synkroniserade undertexter tillhandahålls för allt förinspelat audioinnehåll i synkroniserade media, förutom när mediet är ett mediaalternativ till text och är tydligt märkt som sådant.

## Varför detta behövs

Personer som är döva eller har nedsatt hörsel kan inte ta del av information som endast presenteras via ljud. Synkroniserade undertexter gör det möjligt för dessa användare att följa med i både visuellt och ljudbaserat innehåll i videoklipp.

## Exempel

### Exempel på bra implementering

#### Video med undertexter via track-element

```html
<video controls>
  <source src="forelasning.mp4" type="video/mp4" />
  <track
    kind="captions"
    src="forelasning-undertexter.vtt"
    srclang="sv"
    label="Svenska"
    default
  />
  Din webbläsare stödjer inte video-elementet.
</video>
```

#### Video med inbäddade undertexter

```html
<iframe
  src="https://www.youtube-nocookie.com/embed/videoID?cc_load_policy=1"
  title="Videoföreläsning med undertexter"
  allowfullscreen
></iframe>
```

### Exempel på bristande implementering

#### Video utan undertexter

```html
<video controls src="intervju.mp4">
  Din webbläsare stödjer inte video-elementet.
</video>
```

#### Videospelare utan möjlighet att aktivera undertexter

```html
<video controls>
  <source src="forelasning.mp4" type="video/mp4" />
  Din webbläsare stödjer inte video-elementet.
</video>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html)
- [Webbriktlinjer - R115: Texta inspelad rörlig media](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/texta-inspelad-rorlig-media)
