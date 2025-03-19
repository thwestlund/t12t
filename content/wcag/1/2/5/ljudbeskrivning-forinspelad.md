---
title: Ljudbeskrivning (förinspelad)
description: Ljudbeskrivning tillhandahålls för allt förinspelat videoinnehåll i synkroniserade media.
level: AA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsbaserade media
criterionNumber: 5
---

# Framgångskriterium 1.2.5 Ljudbeskrivning (förinspelad)

## Beskrivning

Ljudbeskrivning tillhandahålls för allt förinspelat videoinnehåll i synkroniserade media.

## Varför detta behövs

Personer som är blinda eller har grav synnedsättning kan inte se visuell information i videor. De behöver en ljudbeskrivning som berättar om viktiga visuella detaljer som inte framgår av det befintliga ljudspåret.

En ljudbeskrivning beskriver visuella element som kroppsspråk, miljöer, scenbyte, textinformation på skärmen och andra visuella komponenter som är viktiga för att förstå innehållet.

Till skillnad från 1.2.3 (nivå A) räcker det här inte med ett textalternativ - en faktisk ljudbeskrivning måste tillhandahållas.

## Exempel

### Exempel på bra implementering

#### Video med inbyggd ljudbeskrivning

```html
<video controls>
  <source src="video-med-ljudbeskrivning.mp4" type="video/mp4" />
  <track kind="captions" src="textning.vtt" srclang="sv" label="Svenska" />
  Din webbläsare stödjer inte videouppspelning.
</video>
```

#### Video med separat ljudbeskrivningsspår

```html
<video id="presentation" controls>
  <source src="presentation.mp4" type="video/mp4" />
  <track kind="descriptions" src="ljudbeskrivning.vtt" srclang="sv" />
  Din webbläsare stödjer inte videouppspelning.
</video>
<div>
  <button onclick="toggleAudioDescription()">
    Aktivera/inaktivera ljudbeskrivning
  </button>
</div>
```

### Exempel på bristande implementering

#### Video utan ljudbeskrivning

```html
<video controls>
  <source src="utbildningsvideo.mp4" type="video/mp4" />
  <track kind="captions" src="textning.vtt" srclang="sv" />
  <!-- Saknar ljudbeskrivning -->
</video>
```

#### Endast textalternativ utan faktisk ljudbeskrivning

```html
<video controls aria-describedby="beskrivning">
  <source src="demonstration.mp4" type="video/mp4" />
</video>
<div id="beskrivning">
  <p>I denna video visas hur man använder verktyget...</p>
  <!-- Textbeskrivning finns men ingen faktisk ljudbeskrivning -->
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html)
- [W3C WAI - Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/)
- [Veiledning for lydtekst og synstolking](https://www.uutilsynet.no/veiledning/lydtekst-og-synstolking/226)
