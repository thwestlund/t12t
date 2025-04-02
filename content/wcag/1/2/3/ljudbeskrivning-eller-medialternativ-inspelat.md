---
title: Ljudbeskrivning eller mediealternativ (inspelat)
description: Ett alternativ för tidsbaserade media eller en ljudbeskrivning för förinspelat videoinnehåll tillhandahålls.
level: A
slug: ljudbeskrivning-eller-medialternativ
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "ljudbeskrivning",
    "mediealternativ",
    "inspelat",
    "tidsbaserade media",
    "video",
    "synnedsättning",
  ]
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsbaserade media
criterionNumber: 3

og:
  title: Ljudbeskrivning eller mediealternativ (inspelat) - WCAG
  description: Ett alternativ för tidsbaserade media eller en ljudbeskrivning för förinspelat videoinnehåll tillhandahålls.
  url: https://t12t.dev/wcag/ljudbeskrivning-eller-medialternativ
  type: article

datePublished: 2025-03-19
dateModified: 2025-03-27

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Ljudbeskrivning eller mediealternativ (inspelat)

## Beskrivning

Ett alternativ för tidsbaserade media eller en ljudbeskrivning för förinspelat videoinnehåll tillhandahålls för synkroniserade media, förutom när mediet är ett mediealternativ till text och tydligt är märkt som sådant.

## Varför detta behövs

Personer som är blinda eller har grav synnedsättning kan inte se visuell information i videor. De behöver därför en ljudbeskrivning av viktig visuell information eller ett fullständigt textalternativ som beskriver både ljud och bild för att kunna ta del av innehållet.

Genom att tillhandahålla antingen en ljudbeskrivning eller ett detaljerat mediealternativ säkerställer du att personer med synnedsättning kan få tillgång till samma information som seende användare.

## Exempel

### Exempel på bra implementering

#### Video med ljudbeskrivning

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video-med-ljudbeskrivning.mp4" type="video/mp4" />
  <track kind="descriptions" src="beskrivningar.vtt" srclang="sv" />
  Din webbläsare stödjer inte videouppspelning.
</video>
```

#### Video med fullständigt textalternativ

```html
<video controls aria-describedby="video-beskrivning">
  <source src="presentation.mp4" type="video/mp4" />
  Din webbläsare stödjer inte videouppspelning.
</video>
<div id="video-beskrivning">
  <h3>Fullständig beskrivning av videon</h3>
  <p>
    I denna video presenteras företagets nya produkt. Videon börjar med att visa
    produkten från olika vinklar medan berättarrösten förklarar dess
    funktioner...
  </p>
  <!-- Fortsatt detaljerad beskrivning av både visuellt innehåll och ljud -->
</div>
```

### Exempel på bristande implementering

#### Video utan ljudbeskrivning eller textalternativ

```html
<video controls>
  <source src="presentation.mp4" type="video/mp4" />
  Din webbläsare stödjer inte videouppspelning.
</video>
```

#### Otillräcklig beskrivning

```html
<video controls aria-describedby="beskrivning">
  <source src="instruktion.mp4" type="video/mp4" />
</video>
<p id="beskrivning">Video som visar hur man använder produkten.</p>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html)
- [W3C WAI - Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/)
- [Webbriktlinjer - Tillhandahåll alternativ till videoinspelat material](https://www.digg.se/kunskap-och-stod/digital-tillganglighet/webbriktlinjer-for-tillganglighet/riktlinjer/tillhandahall-alternativ-till-videoinspelat-material)
