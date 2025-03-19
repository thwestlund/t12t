---
title: Teckenspråkstolkning (förinspelad)
description: Teckenspråkstolkning tillhandahålls för allt förinspelat ljudinnehåll i synkroniserade media.
level: AAA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsbaserade media
criterionNumber: 6

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.2.6 Teckenspråkstolkning (förinspelad)

## Beskrivning

Teckenspråkstolkning tillhandahålls för allt förinspelat ljudinnehåll i synkroniserade media.

## Varför detta behövs

För många personer som är döva är teckenspråk deras primära språk. Även om textning hjälper, så är teckenspråkstolkning ofta mer effektivt och naturligt för teckenspråksanvändare.

Teckenspråkstolkning ger en mer direkt översättning av innehållet och inkluderar även nyanserna i tal, tonläge och betoning som kan vara svåra att fånga i text.

Genom att erbjuda teckenspråkstolkning skapar du en mer inkluderande upplevelse för teckenspråksanvändare och ger dem möjlighet att ta del av innehållet på deras primära språk.

## Exempel

### Exempel på bra implementering

#### Video med inbäddad teckenspråkstolkning

```html
<video controls>
  <source src="video-med-teckensprak.mp4" type="video/mp4" />
  <track kind="captions" src="textning.vtt" srclang="sv" label="Svenska" />
  Din webbläsare stödjer inte videouppspelning.
</video>
```

#### Video med separat teckenspråkstolkning som kan väljas till

```html
<div>
  <video id="huvudvideo" controls>
    <source src="forelasning.mp4" type="video/mp4" />
    <track kind="captions" src="textning.vtt" srclang="sv" />
  </video>
  <button onclick="toggleSignLanguage()">Visa/dölj teckenspråkstolkning</button>
  <video id="teckensprakstolkning" class="hidden">
    <source src="teckensprak.mp4" type="video/mp4" />
  </video>
</div>
```

### Exempel på bristande implementering

#### Video utan teckenspråkstolkning

```html
<video controls>
  <source src="konferens.mp4" type="video/mp4" />
  <track kind="captions" src="textning.vtt" srclang="sv" />
  <!-- Saknar teckenspråkstolkning -->
</video>
```

#### Teckenspråkstolkning endast för delar av innehållet

```html
<video controls>
  <source src="lång-presentation.mp4" type="video/mp4" />
  <track kind="captions" src="textning.vtt" srclang="sv" />
</video>
<p>
  Teckenspråkstolkning finns endast tillgänglig för sammanfattningen
  <a href="sammanfattning-teckensprak.mp4">här</a>.
</p>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.2.6 Sign Language (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html)
- [W3C WAI - Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/)
- [Teckenspråk, PDL och TSS](https://www.spsm.se/stod/specialpedagogiskt-stod/sprak-och-kommunikation/teckensprak/)
