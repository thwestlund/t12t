---
title: Enbart ljud (direktsänt)
description: Ett alternativ för tidsbaserade media som presenterar likvärdig information för direktsänt innehåll med enbart ljud tillhandahålls.
level: AAA
slug: enbart-ljud-direktsant
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "enbart ljud",
    "direktsänt",
    "audio-only",
    "live",
    "tidsbaserade media",
    "realtidstranskribering",
  ]
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsbaserade media
criterionNumber: 9

og:
  title: Enbart ljud (direktsänt) - WCAG
  description: Ett alternativ för tidsbaserade media som presenterar likvärdig information för direktsänt innehåll med enbart ljud tillhandahålls.
  url: https://t12t.dev/wcag/enbart-ljud-direktsant
  type: article

datePublished: 2025-03-19
dateModified: 2025-03-27

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Enbart ljud (direktsänt)

## Beskrivning

Ett alternativ för tidsbaserade media som presenterar likvärdig information för direktsänt innehåll med enbart ljud tillhandahålls.

## Varför detta behövs

Personer som är döva eller har nedsatt hörsel kan inte ta del av direktsänt ljudinnehåll som radiosändningar, ljudpoddar eller telefonmöten som sänds live. De behöver ett textbaserat alternativ i realtid för att kunna följa innehållet.

Realtidstranskribering eller direkttextning av ljudinnehåll ger personer med hörselnedsättning möjlighet att ta del av informationen samtidigt som andra användare, utan att gå miste om viktigt innehåll eller behöva vänta på transkriptioner i efterhand.

Detta är särskilt viktigt i situationer där interaktion eller aktuell information förmedlas, som liveströmmar av nyheter eller evenemang.

## Exempel

### Exempel på bra implementering

#### Direktsänd ljudsändning med realtidstranskribering

```html
<div>
  <audio id="direktradio" controls autoplay>
    <source src="live-stream.mp3" type="audio/mpeg" />
    Din webbläsare stödjer inte ljuduppspelning.
  </audio>
  <div id="realtidstranskribering" aria-live="polite">
    <h3>Direkttranskribering</h3>
    <div id="transkribering-innehall">
      <!-- Uppdateras i realtid via JavaScript -->
      <p>14:32:15 - Programledare: Välkomna till dagens sändning...</p>
    </div>
  </div>
</div>
```

#### Webbinarium med ljud och samtidig textning

```html
<div class="webinar-container">
  <audio controls>
    <source src="webinar-audio.mp3" type="audio/mpeg" />
  </audio>
  <div class="live-transcript" aria-live="polite">
    <h3>Live-transkription</h3>
    <div id="transcript-content">
      <!-- Uppdateras via server eller API -->
    </div>
  </div>
  <script>
    // Kod för att hämta och visa realtidstranskription
  </script>
</div>
```

### Exempel på bristande implementering

#### Direktsänd ljudström utan textalternativ

```html
<audio controls autoplay>
  <source src="livesandning.mp3" type="audio/mpeg" />
  Din webbläsare stödjer inte ljuduppspelning.
</audio>
<!-- Inget textalternativ tillhandahålls -->
```

#### Ljudsändning med transkription som bara publiceras i efterhand

```html
<audio id="direktsandning" controls>
  <source src="forelasning-live.mp3" type="audio/mpeg" />
</audio>
<p>
  En transkription av denna sändning kommer att finnas tillgänglig några timmar
  efter att sändningen avslutats.
</p>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.2.9 Audio-only (Live)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html)
- [W3C WAI - Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/)
- [Real-time text (RTT) – W3C](https://www.w3.org/TR/real-time-text/)
