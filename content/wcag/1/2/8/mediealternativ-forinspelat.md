---
title: 1.2.8 Mediealternativ (förinspelat)
description: Tillhandahåll ett alternativ för tidsberoende media för allt förinspelat synkroniserat medieinnehåll.
level: AAA
slug: mediealternativ-forinspelat
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "mediealternativ",
    "textalternativ",
    "transkription",
    "visuell beskrivning",
    "förinspelad media",
    "video",
    "synkroniserad media",
  ]
canonical: https://t12t.dev/wcag/1/2/8/mediealternativ-forinspelat

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsberoende media
criterionNumber: 8

og:
  title: 1.2.8 Mediealternativ (förinspelat) – WCAG
  description: Tillhandahåll ett alternativ för tidsberoende media för allt förinspelat synkroniserat medieinnehåll.
  url: https://t12t.dev/wcag/1/2/8/mediealternativ-forinspelat
  type: article

datePublished: 2025-03-27
dateModified: 2024-05-16

sitemap:
  lastmod: 2024-05-16
  changefreq: monthly
  priority: 0.5
---

# Mediealternativ (förinspelat)

## Beskrivning

Ett alternativ för tidsberoende media ska tillhandahållas för allt förinspelat synkroniserat medieinnehåll.

Detta AAA-kriterium kräver att ett fullständigt textbaserat alternativ erbjuds för all förinspelad video med ljud. Detta alternativ ska innehålla:

1.  En transkription av allt ljudinnehåll (dialog, viktiga ljudeffekter).
2.  Beskrivningar av all viktig visuell information (handlingar, miljöer, text i bild, etc.).

I praktiken är detta detsamma som det "fullständiga textalternativet" som var ett av valen i Kriterium 1.2.3 (Nivå AA). Skillnaden är att på Nivå AAA är detta textalternativ _obligatoriskt_, medan på nivå AA kunde man välja mellan detta och syntolkning.

## Varför detta behövs

Ett fullständigt mediealternativ i textform ger tillgång till hela innehållet i videon för personer som:

- Är dövblinda och använder punktskriftsskärmar.
- Har svårt att bearbeta både ljud och bild samtidigt (t.ex. vissa kognitiva funktionsnedsättningar).
- Föredrar att läsa informationen eller behöver kunna söka i texten.
- Inte kan spela upp video eller ljud av tekniska skäl eller på grund av bandbreddsbegränsningar.

Även om syntolkning (Kriterium 1.2.5) och teckenspråk (Kriterium 1.2.6) är viktiga för sina respektive målgrupper, säkerställer ett mediealternativ i text att _alla_ användare, oavsett funktionsförmåga eller teknisk situation, kan ta del av informationen.

## Exempel

### Video med länk till fullständigt textalternativ

Implementationen liknar den som visades för Kriterium 1.2.3, men här är det ett krav på nivå AAA. En tydlig länk till textalternativet placeras i anslutning till videon. Textalternativet presenteras på en separat sida eller i ett expanderbart avsnitt.

::code-group{:labels='["index.html", "textalternativ.html (Utdrag)"]'}

```html {3-4} showLineNumbers
<figure>
  <video controls src="foretagsfilm.mp4" aria-describedby="video-titel"></video>
  <figcaption id="video-titel">Presentation av vårt företag</figcaption>
  <p>
    <a href="foretagsfilm-textalternativ.html"
      >Läs fullständigt textalternativ för videon</a
    >
  </p>
</figure>
```

```html showLineNumbers
<!-- Innehåll i foretagsfilm-textalternativ.html -->
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="UTF-8" />
    <title>Textalternativ: Presentation av vårt företag</title>
  </head>
  <body>
    <h1>Textalternativ: Presentation av vårt företag</h1>

    <p>
      [Video startar med en flygbild över en modern kontorsbyggnad. Logotypen
      "Företagsnamn AB" tonas in. Lugn pianomusik spelas.]
    </p>

    <p>
      <strong>Berättarröst (man):</strong> Välkommen till Företagsnamn AB. Sedan
      2005 har vi varit ledande inom innovativa lösningar.
    </p>

    <p>
      [Klipp till en ljus kontorsmiljö. Människor arbetar vid datorer och
      samtalar i små grupper. Berättarrösten fortsätter över musiken.]
    </p>

    <p>
      <strong>Berättarröst:</strong> Vårt team består av engagerade experter som
      brinner för att hjälpa våra kunder.
    </p>

    <p>[Klipp till VD Anna Andersson som sitter vid ett skrivbord.]</p>

    <p>
      <strong>Anna Andersson:</strong> Vår vision är att skapa en bättre framtid
      genom teknik. [Anna ler mot kameran.]
    </p>

    <p>[Text visas i bild: "Innovation - Kvalitet - Samarbete"]</p>

    <p><strong>Berättarröst:</strong> Vi tror på...</p>

    <p>
      <!-- Fortsättning med all dialog, ljudbeskrivningar och visuella beskrivningar -->
    </p>
  </body>
</html>
```

::

**Viktigt:** Textalternativet måste vara fullständigt och korrekt återge _både_ ljud- och bildinformationen i videon i rätt ordning.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.2.8 Media Alternative (Prerecorded) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html)
- [Webbriktlinjer: R3 Erbjud alternativ till video och ljud](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/erbjud-alternativ-till-video-och-ljud) (Berör konceptet med textalternativ)
- [W3C WAI: Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/) (Övergripande guide)
