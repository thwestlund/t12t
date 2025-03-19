---
title: Utökad ljudbeskrivning (förinspelad)
description: Utökad ljudbeskrivning tillhandahålls för allt förinspelat videoinnehåll i synkroniserade media.
level: AAA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsbaserade media
criterionNumber: 7
---

# Framgångskriterium 1.2.7 Utökad ljudbeskrivning (förinspelad)

## Beskrivning

När pauser i förgrundljudet inte är tillräckliga för att tillåta ljudbeskrivningar att förmedla innebörden av videon, tillhandahålls utökad ljudbeskrivning för allt förinspelat videoinnehåll i synkroniserade media.

## Varför detta behövs

I vissa videor finns det inte tillräckligt med naturliga pauser i ljudspåret för att infoga meningsfulla ljudbeskrivningar. Många videor innehåller viktiga visuella detaljer men har ett tätt ljudspår utan tillräckligt med tystnad där beskrivningar kan läggas in.

Den utökade ljudbeskrivningen pausar videouppspelningen temporärt för att ge tid för mer detaljerade beskrivningar av visuella element som är viktiga för förståelsen. Detta ger personer med synnedsättning möjlighet att få en fullständig upplevelse av innehållet.

Detta går längre än standardljudbeskrivningar (1.2.5) genom att faktiskt modifiera tidslinjen i uppspelningen för att ge mer omfattande beskrivningar.

## Exempel

### Exempel på bra implementering

#### Video med utökad ljudbeskrivning via separat version

```html
<video controls>
  <source src="standard-video.mp4" type="video/mp4" />
  <track kind="captions" src="textning.vtt" srclang="sv" />
  Din webbläsare stödjer inte videouppspelning.
</video>
<div>
  <p>
    <a href="utokad-ljudbeskrivning.mp4">Version med utökad ljudbeskrivning</a>
    - denna version pausar videon vid behov för att ge mer detaljerade
    beskrivningar av visuella element.
  </p>
</div>
```

#### Interaktiv video med kontroller för utökad ljudbeskrivning

```html
<div>
  <video id="video" controls>
    <source src="presentation.mp4" type="video/mp4" />
  </video>
  <button onclick="enableExtendedAudioDescription()">
    Aktivera utökad ljudbeskrivning
  </button>
</div>
<script>
  // JavaScript-kod för att hantera pauser och spela upp utökade beskrivningar
</script>
```

### Exempel på bristande implementering

#### Video med standard ljudbeskrivning men utan utökad beskrivning

```html
<video controls>
  <source src="utbildning.mp4" type="video/mp4" />
  <track kind="descriptions" src="ljudbeskrivning.vtt" srclang="sv" />
  <!-- Standard ljudbeskrivning finns men ingen utökad ljudbeskrivning -->
</video>
```

#### Video där visuell information beskrivs otillräckligt

```html
<video controls>
  <source src="komplicerad-process.mp4" type="video/mp4" />
  <track kind="descriptions" src="korta-beskrivningar.vtt" srclang="sv" />
  <!-- Ljudbeskrivningarna är för korta för att beskriva den komplexa visuella informationen -->
</video>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.2.7 Extended Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html)
- [W3C WAI - Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/)
- [Beskrivande videotjänst - Syntolkning](https://www.mtm.se/produkter-och-tjanster/syntolkning/)
