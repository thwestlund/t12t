---
title: 1.2.3 Syntolkning eller mediealternativ (förinspelat)
description: Tillhandahåll syntolkning eller ett fullständigt textalternativ för förinspelad video.
level: AA
slug: syntolkning-eller-mediealternativ-forinspelat
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "syntolkning",
    "audio description",
    "mediealternativ",
    "textalternativ",
    "förinspelad media",
    "video",
  ]
canonical: https://t12t.dev/wcag/1/2/3/syntolkning-eller-mediealternativ-forinspelat

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsberoende media
criterionNumber: 3

og:
  title: 1.2.3 Syntolkning eller mediealternativ (förinspelat) – WCAG
  description: Tillhandahåll syntolkning eller ett fullständigt textalternativ för förinspelad video.
  url: https://t12t.dev/wcag/1/2/3/syntolkning-eller-mediealternativ-forinspelat
  type: article

datePublished: 2025-03-22
# Uppdaterad
dateModified: 2024-05-16

sitemap:
  # Uppdaterad
  lastmod: 2024-05-16
  changefreq: monthly
  priority: 0.6 # AA-kriterier kan ha något lägre prio än A
---

# Syntolkning eller mediealternativ (förinspelat)

## Beskrivning

Ett alternativ för tidsberoende media eller en syntolkning av det förinspelade videoinnehållet ska tillhandahållas för synkroniserad media, förutom när mediet är ett mediealternativ till text och tydligt märkt som sådant.

Det innebär att för en video med ljud och bild (t.ex. en film, dokumentär, instruktionsvideo) där viktig visuell information inte framgår av det vanliga ljudspåret, måste du erbjuda antingen:

1.  **Syntolkning:** Ett extra ljudspår som beskriver viktiga visuella detaljer (handlingar, karaktärer, miljöer, text i bild) under tysta pauser i det ordinarie ljudspåret.
2.  **Mediealternativ:** Ett fullständigt textalternativ som inkluderar både transkription av ljudet (dialog, ljudeffekter) _och_ beskrivningar av den visuella informationen.

## Varför detta behövs

Personer som är blinda eller har grav synnedsättning missar viktig information som endast presenteras visuellt i en video.

- **Syntolkning** ger dem möjlighet att följa med i handlingen och förstå sammanhanget genom ljudbeskrivningar i realtid.
- Ett **fullständigt textalternativ** ger motsvarande information i läsbar form, vilket också kan vara till nytta för personer med kognitiva funktionsnedsättningar som har svårt att bearbeta både ljud och bild samtidigt, eller för personer som föredrar att läsa.

Att erbjuda ett av dessa alternativ säkerställer att alla användare får tillgång till hela innehållet i videon.

---

## Exempel

### Video med syntolkningsspår

En video implementeras med [\<video\>]{.inline-code}-elementet. Utöver eventuell textning ([kind="captions"]{.inline-code}) läggs ett [\<track\>]{.inline-code}-element till med [kind="descriptions"]{.inline-code}. Detta spår innehåller den tidsstämplade syntolkningen.

::code-group{:labels='["index.html", "syntolkning.vtt"]'}

```html {4-8} showLineNumbers
<video controls width="640" height="360">
  <source src="instruktionsfilm.mp4" type="video/mp4" />
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
  />
  Din webbläsare stödjer inte videoelementet.
</video>
```

```vtt showLineNumbers
WEBVTT

00:00:05.100 --> 00:00:08.300
[Tystnad i dialog]
Personen plockar upp en röd skruvmejsel från bordet.

00:00:15.700 --> 00:00:19.000
[Tystnad i dialog]
Hon för in mejseln i skruvhålet och vrider åt höger. En grön lampa tänds.
```

::

### Video med länk till fullständigt textalternativ

Istället för syntolkning kan ett fullständigt textalternativ erbjudas. Detta presenteras oftast på en separat sida eller i ett utökningsbart avsnitt under videon. Länken till textalternativet ska vara tydlig.

::code-group{:labels='["index.html"]'}

```html {3-4} showLineNumbers
<figure>
  <video controls src="produkt-demo.mp4" aria-describedby="video-titel"></video>
  <figcaption id="video-titel">Demonstration av produkt X</figcaption>
  <p>
    <a href="produkt-demo-textalternativ.html"
      >Läs fullständigt textalternativ för videon</a
    >
  </p>
</figure>

<!-- Innehåll i produkt-demo-textalternativ.html (exempel) -->
<!--
<h1>Textalternativ: Demonstration av produkt X</h1>
<p>Videon börjar med att visa produkten på ett bord.</p>
<p><strong>Presentatör:</strong> Välkommen! Idag ska vi titta på Produkt X.</p>
<p>Presentatören lyfter produkten. Den är blå med silverdetaljer.</p>
<p><strong>Presentatör:</strong> Som ni ser är den kompakt och lätt.</p>
<p>Hon trycker på en knapp på sidan. En skärm tänds och visar en logotyp.</p>
... (fortsättning med all dialog och visuell beskrivning) ...
-->
```

::

**Notera:** För nivå AA räcker det med _antingen_ syntolkning _eller_ ett fullständigt textalternativ.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html)
- [Webbriktlinjer: R3 Erbjud alternativ till video och ljud](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/erbjud-alternativ-till-video-och-ljud) (Täcker även 1.2.1) och [R5 Syntolka video som publiceras på webbplatsen](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/syntolka-video-som-publiceras-pa-webbplatsen)
- [MDN Web Docs: The Track element ([\<track\>]{.inline-code})](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
- [W3C WAI: Audio Description](https://www.w3.org/WAI/media/av/description/)
