---
title: 1.2.5 Syntolkning (förinspelad)
description: Tillhandahåll syntolkning för allt förinspelat videoinnehåll i synkroniserad media.
level: AA
slug: syntolkning-forinspelad

keywords:
  [
    "WCAG",
    "tillgänglighet",
    "syntolkning",
    "audio description",
    "förinspelad media",
    "video",
    "synkroniserad media",
  ]
canonical: https://t12t.dev/wcag/1/2/5/syntolkning-forinspelad

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsberoende media
criterionNumber: 5

og:
  title: 1.2.5 Syntolkning (förinspelad) – WCAG
  description: Tillhandahåll syntolkning för allt förinspelat videoinnehåll i synkroniserad media.
  url: https://t12t.dev/wcag/1/2/5/syntolkning-forinspelad
  type: article

datePublished: 2025-03-24
dateModified: 2024-05-16

sitemap:
  lastmod: 2024-05-16
  changefreq: monthly
  priority: 0.6
---

# Syntolkning (förinspelad)

## Beskrivning

Syntolkning ska tillhandahållas för allt förinspelat videoinnehåll i synkroniserad media.

Detta krav bygger vidare på Kriterium 1.2.3 (Syntolkning eller mediealternativ). Medan 1.2.3 tillåter _antingen_ syntolkning _eller_ ett textalternativ på nivå AA, kräver detta kriterium (också nivå AA) att **syntolkning** specifikt ska erbjudas.

Syntolkningen är ett extra ljudspår som beskriver viktig visuell information (handlingar, karaktärer, miljöer, text i bild) som inte framgår av det ordinarie ljudspåret. Den läggs in under naturliga pauser i dialog och andra viktiga ljud.

## Varför detta behövs

För personer som är blinda eller har grav synnedsättning är syntolkning det primära sättet att få tillgång till den visuella informationen i en video i realtid, synkroniserat med handlingen. Medan ett textalternativ (från 1.2.3) ger informationen, erbjuder syntolkning en mer integrerad och följsam upplevelse som liknar hur seende personer uppfattar videon.

Att erbjuda syntolkning gör videoinnehåll mer jämlikt tillgängligt för personer med synnedsättning.

## Exempel

### Video med syntolkningsspår (WebVTT)

Implementationen är densamma som visades för Kriterium 1.2.3. Ett [\<track\>]{.inline-code}-element med [kind="descriptions"]{.inline-code} används för att länka in en WebVTT-fil som innehåller den tidsstämplade syntolkningen.

::code-group{:labels='["index.html", "syntolkning.vtt"]'}

```html {4-8} showLineNumbers
<video controls width="640" height="360">
  <source src="dokumentar.mp4" type="video/mp4" />
  <track
    label="Svenska Textning"
    kind="captions"
    srclang="sv"
    src="textning_sv.vtt"
  />
  <track
    label="Svenska Syntolkning"
    kind="descriptions"
    srclang="sv"
    src="syntolkning_sv.vtt"
    default
  />
  <!-- 'default' kan användas för att föreslå spåret -->
  Din webbläsare stödjer inte videoelementet.
</video>
```

```vtt [kind="descriptions"] showLineNumbers
WEBVTT

00:00:10.200 --> 00:00:14.800
[Musik tonar ut]
En örn cirkulerar högt över en vidsträckt, grön dal. Solen glittrar i en flod nedanför.

00:00:25.500 --> 00:00:29.100
[Tystnad]
Grafik visas: Karta över området med en röd prick som markerar nationalparken.

00:00:35.000 --> 00:00:38.700
[Intervjuperson talar]
Personen i bild, en äldre man med grått skägg, gestikulerar mot kameran.
```

::

**Viktigt:**

- Syntolkningen ska vara koncis och fokuserad på information som är nödvändig för att förstå handlingen eller budskapet.
- Den ska läggas in i pauser så att den inte krockar med viktig dialog eller andra ljud.
- Om det inte finns tillräckligt med pauser kan utökad syntolkning behövas, där videon pausas tillfälligt för att ge plats åt längre beskrivningar (detta är dock mer avancerat och faller under nivå AAA, Kriterium 1.2.7). För nivå AA räcker standard-syntolkning.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.2.5 Audio Description (Prerecorded) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html)
- [Webbriktlinjer: Syntolka videoinspelningar](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/syntolka-videoinspelningar)
- [MDN Web Docs: The Track element ([\<track\>]{.inline-code})](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
- [W3C WAI: Audio Description](https://www.w3.org/WAI/media/av/description/)
