---
title: Textning (direktsänd)
description: Textning tillhandahålls för allt direktsänt ljudinnehåll i synkroniserade media.
level: AA
slug: textning-direktsand
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "textning",
    "direktsändning",
    "captions",
    "live",
    "tidsbaserade media",
  ]
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsbaserade media
criterionNumber: 4

og:
  title: Textning (direktsänd) - WCAG
  description: Textning tillhandahålls för allt direktsänt ljudinnehåll i synkroniserade media.
  url: https://t12t.dev/wcag/textning-direktsand
  type: article

datePublished: 2025-03-19
dateModified: 2025-03-27

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Textning (direktsänd)

## Beskrivning

Textning tillhandahålls för allt direktsänt ljudinnehåll i synkroniserade media.

## Varför detta behövs

Personer som är döva eller har nedsatt hörsel kan inte ta del av ljudinnehåll i direktsända medier som webbsändningar, livesändningar eller videomöten. De behöver textning för att kunna följa med i innehållet.

Textning ger också fördelar för personer som befinner sig i bullriga miljöer, de som tittar utan ljud, och de som har annat modersmål och lättare kan förstå skriven text än talat språk.

Genom att tillhandahålla textning i realtid för direktsänt innehåll säkerställer du att alla användare kan ta del av informationen samtidigt.

## Exempel

### Exempel på bra implementering

#### Direktsänd video med textning

```html
<video id="livesandning" controls>
  <source src="live-stream.mp4" type="video/mp4" />
  <track
    kind="captions"
    src="live-captions.vtt"
    srclang="sv"
    label="Svenska"
    default
  />
</video>
<script>
  // Kod för att uppdatera textningsfilen i realtid
</script>
```

#### Webinar med inbäddad textning och val för användaren

```html
<video id="webinar" controls>
  <source src="webinar-stream.mp4" type="video/mp4" />
</video>
<div>
  <button onclick="toggleCaptions()">Visa/dölj textning</button>
  <div id="captions-container" aria-live="polite"></div>
</div>
```

### Exempel på bristande implementering

#### Direktsänd video utan textning

```html
<video controls autoplay>
  <source src="live-event.mp4" type="video/mp4" />
  <!-- Saknar textning -->
</video>
```

#### Fördröjd textning som inte är synkroniserad

```html
<video controls>
  <source src="direktsandning.mp4" type="video/mp4" />
</video>
<div>
  <p>Textning kommer att finnas tillgänglig efter sändningen.</p>
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html)
- [W3C WAI - Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/)
- [WebVTT - The Web Video Text Tracks Format](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)
