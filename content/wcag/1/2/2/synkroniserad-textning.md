---
title: 1.2.2 Textning av media (förinspelad)
description: Tillhandahåll textning för allt förinspelat ljudinnehåll i synkroniserad media.
level: A
slug: textning-av-media-forinspelad
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "textning",
    "captions",
    "förinspelad media",
    "video",
    "ljud",
    "synkroniserad media",
  ]
canonical: https://t12t.dev/wcag/1/2/2/synkroniserad-textning

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsberoende media
criterionNumber: 2

og:
  title: 1.2.2 Textning av media (förinspelad) – WCAG
  description: Tillhandahåll textning för allt förinspelat ljudinnehåll i synkroniserad media.
  url: https://t12t.dev/wcag/1/2/2/synkroniserad-textning
  type: article

datePublished: 2025-03-21
# Uppdaterad
dateModified: 2024-05-16

sitemap:
  # Uppdaterad
  lastmod: 2024-05-16
  changefreq: monthly
  priority: 0.7
---

# Textning av media (förinspelad)

## Beskrivning

Textning ska tillhandahållas för allt förinspelat ljudinnehåll i synkroniserad media, förutom när mediet är ett mediealternativ till text och tydligt märkt som sådant.

Synkroniserad media innebär media där ljud och bild är samordnade, till exempel en film eller en föreläsningsinspelning med både video och ljud. Textningen ska innehålla allt tal samt viktiga ljudhändelser (t.ex. [musik], [applåder], [dörr stängs]) som behövs för att förstå innehållet.

## Varför detta behövs

Textning är avgörande för personer som är döva eller har nedsatt hörsel, eftersom de inte kan ta del av ljudinformationen.

Det är också till nytta för:

- Personer som befinner sig i bullriga miljöer där ljudet är svårt att höra.
- Personer som befinner sig i tysta miljöer där ljud inte kan spelas upp (t.ex. bibliotek, kontor).
- Personer som inte har språket som modersmål och kan ha lättare att följa med via text.
- Personer som lär sig bättre genom att läsa samtidigt som de lyssnar.
- Sökmotorer, som kan indexera textinnehållet.

## Exempel

### Video med textningsfil

En video ([\<video\>]{.inline-code}) inkluderas på en webbsida. En separat textningsfil (ofta i WebVTT-format, [.vtt]{.inline-code}) länkas in med hjälp av [\<track\>]{.inline-code}-elementet. Attributet [kind="captions"]{.inline-code} anger att det är textning för döva och hörselskadade. [srclang]{.inline-code} anger språket för textningen och [label]{.inline-code} ger en läsbar etikett för textningsspåret.

::code-group{:labels='["index.html", "textning.vtt"]'}

```html {3-8} showLineNumbers
<video controls width="640" height="360">
  <source src="forelasning.mp4" type="video/mp4" />
  <track
    label="Svenska"
    kind="captions"
    srclang="sv"
    src="textning_sv.vtt"
    default
  />
  <!-- 'default' gör att textningen visas automatiskt om möjligt -->
  <!-- Fallback-text -->
  Din webbläsare stödjer inte videoelementet.
</video>
```

```vtt showLineNumbers
WEBVTT

00:00:00.500 --> 00:00:03.800
Välkomna till dagens föreläsning om webbtillgänglighet.

00:00:04.200 --> 00:00:07.000
Idag ska vi prata om vikten av textning.
[Skratt från publiken]

00:00:07.500 --> 00:00:10.100
Textning gör innehållet tillgängligt för fler.
```

::

**Notera:** Textningsfilen ([.vtt]{.inline-code}) innehåller tidsstämplad text som synkroniseras med ljudet i videon. Den inkluderar både tal och relevanta ljudhändelser.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.2.2 Captions (Prerecorded) (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html)
- [Webbriktlinjer: R4 Texta video och ljud som publiceras på webbplatsen](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/texta-video-och-ljud-som-publiceras-pa-webbplatsen)
- [MDN Web Docs: WebVTT (Web Video Text Tracks)](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)
- [MDN Web Docs: The Track element (\<track\>)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
- [W3C WAI: Captions/Subtitles](https://www.w3.org/WAI/media/av/captions/)
