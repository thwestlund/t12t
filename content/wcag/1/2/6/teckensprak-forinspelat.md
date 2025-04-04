---
title: 1.2.6 Teckenspråk (förinspelad)
description: Tillhandahåll teckenspråkstolkning för allt förinspelat ljudinnehåll i synkroniserad media.
level: AAA
slug: teckensprak-forinspelat
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "teckenspråk",
    "sign language",
    "förinspelad media",
    "video",
    "ljud",
    "synkroniserad media",
  ]
canonical: https://t12t.dev/wcag/1/2/6/teckensprak-forinspelat

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsberoende media
criterionNumber: 6

og:
  title: 1.2.6 Teckenspråk (förinspelad) – WCAG
  description: Tillhandahåll teckenspråkstolkning för allt förinspelat ljudinnehåll i synkroniserad media.
  url: https://t12t.dev/wcag/1/2/6/teckensprak-forinspelat
  type: article

datePublished: 2025-03-25
dateModified: 2024-05-16

sitemap:
  lastmod: 2024-05-16
  changefreq: monthly
  priority:
---

# Teckenspråk (förinspelad)

## Beskrivning

Teckenspråkstolkning ska tillhandahållas för allt förinspelat ljudinnehåll i synkroniserad media.

Detta kriterium (Nivå AAA) kräver att en teckenspråkstolkning erbjuds för videor som innehåller ljud. Tolkningen ska presenteras synkroniserat med det ursprungliga ljudet och bilden.

## Varför detta behövs

För många personer som är döva eller har grav hörselnedsättning är teckenspråk deras förstaspråk. Även om textning (Kriterium 1.2.2) ger tillgång till det talade innehållet, kan det skrivna språket vara ett andraspråk för dem.

Teckenspråkstolkning förmedlar inte bara det som sägs, utan även tonfall, nyanser och känslor på ett sätt som är naturligt för teckenspråkiga användare. Att erbjuda teckenspråkstolkning ger denna grupp en mer fullständig och jämlik tillgång till informationen i videon.

## Exempel

### Video med integrerad teckenspråkstolk

Den vanligaste metoden är att spela in en teckenspråkstolk och sedan redigera in denna tolk som en bild-i-bild i den ursprungliga videon. Tolken placeras vanligtvis i ett hörn så att den är synlig men inte skymmer viktig information i huvudvideon.

**Konceptuell visualisering:**

::code-group{:labels='["Video med tolk"]'}

```text
+-----------------------------------------+
|                                         |
|        Huvudvideoinnehåll               |
|                                         |
|                    +------------------+ |
|                    | Teckenspråks-    | |
|                    | tolk syns här    | |
|                    |                  | |
|                    +------------------+ |
+-----------------------------------------+
| [Play/Paus] [Volym] [...] [CC] [Fullscreen] |
+-----------------------------------------+
```

::

**Alternativ implementation:**

Vissa plattformar eller specialanpassade spelare kan tekniskt stödja separata videospår, där användaren kan välja att visa eller dölja teckenspråkstolkningsvideon. Detta är dock mindre vanligt och mer komplext att implementera än att integrera tolken direkt i huvudvideon.

**Viktigt:**

- Se till att tolken är tydligt synlig och väl belyst.
- Placeringen av tolken bör vara konsekvent och inte skymma väsentligt innehåll som text eller viktiga visuella element i huvudvideon.
- Tolkningen måste vara synkroniserad med ljudet och händelserna i videon.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.2.6 Sign Language (Prerecorded) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html)
- [Webbriktlinjer: R6 Använd teckenspråk för att tolka video och ljud](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/anvand-teckensprak-for-att-tolka-video-och-ljud)
- [W3C WAI: Sign Language Interpretation](https://www.w3.org/WAI/media/av/sign-languages/)
