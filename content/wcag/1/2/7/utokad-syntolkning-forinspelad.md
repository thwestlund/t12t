---
title: 1.2.7 Utökad syntolkning (förinspelad)
description: Tillhandahåll utökad syntolkning där förgrundsljudet har otillräckliga pauser för vanlig syntolkning.
level: AAA
slug: utokad-syntolkning-forinspelad
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "syntolkning",
    "utökad syntolkning",
    "extended audio description",
    "förinspelad media",
    "video",
    "synkroniserad media",
  ]
canonical: https://t12t.dev/wcag/1/2/7/utokad-syntolkning-forinspelad

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsberoende media
criterionNumber: 7

og:
  title: 1.2.7 Utökad syntolkning (förinspelad) – WCAG
  description: Tillhandahåll utökad syntolkning där förgrundsljudet har otillräckliga pauser.
  url: https://t12t.dev/wcag/1/2/7/utokad-syntolkning-forinspelad
  type: article

datePublished: 2025-03-26
dateModified: 2024-05-16

sitemap:
  lastmod: 2024-05-16
  changefreq: monthly
  priority: 0.5 # AAA-kriterier har lägre prioritet
---

# Utökad syntolkning (förinspelad)

## Beskrivning

Där pauser i förgrundsljudet är otillräckliga för att syntolkningen ska kunna förmedla innebörden av videon, ska utökad syntolkning tillhandahållas för allt förinspelat videoinnehåll i synkroniserad media.

Detta AAA-kriterium bygger på Kriterium 1.2.5 (Syntolkning) och specificerar att om det inte finns tillräckligt med tysta luckor i videons ordinarie ljudspår för att lägga in nödvändiga beskrivningar, måste videon pausas tillfälligt för att ge plats åt syntolkningen. När beskrivningen är klar återupptas videon.

## Varför detta behövs

I vissa videor, särskilt de med mycket dialog, snabba klipp, eller kontinuerlig musik/ljudeffekter, finns det helt enkelt inte tillräckligt med tysta pauser för att förmedla all viktig visuell information genom standard-syntolkning (Kriterium 1.2.5).

Utan utökad syntolkning skulle personer med synnedsättning gå miste om central information som behövs för att fullt ut förstå innehållet eller handlingen. Genom att pausa videon säkerställs att all nödvändig visuell information kan beskrivas, vilket ger en mer komplett och jämlik upplevelse.

## Exempel

### Video med utökad syntolkning (Koncept)

Tekniskt sett är detta mer komplext att implementera än standard-syntolkning via [\<track\>]{.inline-code}. Det kräver ofta en specialanpassad videospelare eller en separat version av videon där pauserna och den extra syntolkningen är inbakade.

**Scenario:** En snabb action-scen i en film där mycket händer visuellt samtidigt som det är ljudeffekter och kanske lite dialog.

1.  **Videon spelas:** Normal dialog och ljud hörs.
2.  **Paus krävs:** Spelaren identifierar (via tidsstämplar i en speciell fil eller inbyggd logik) att en syntolkningsbeskrivning behövs, men det finns ingen paus.
3.  **Videon pausas:** Videon fryser visuellt och ljudet tystnar (eller tonas ner kraftigt).
4.  **Syntolkning spelas:** En röst beskriver den komplexa visuella händelsen: "Huvudpersonen hoppar över en exploderande bil samtidigt som hon skjuter mot drönaren ovanför."
5.  **Videon återupptas:** När beskrivningen är klar fortsätter videon och ljudet från där det pausades.

**Implementation (förenklat koncept):**

- **Separat videofil:** En version av videon produceras där pauserna och den extra syntolkningen redan är inbakade i video- och ljudspåren. Användaren väljer denna version.
- **Avancerad spelare:** En videospelare som kan hantera en speciell "utökad syntolkningsfil" (utöver standard VTT) som innehåller instruktioner om när videon ska pausas, vilken beskrivning som ska spelas upp (antingen från en VTT-fil eller ett separat ljudspår), och när videon ska återupptas.

::code-group{:labels='["Konceptuell Spelarlogik"]'}

```javascript
// Pseudokod för hur en spelare KAN hantera utökad AD

// Lyssna på tidsuppdateringar från videon
videoElement.addEventListener("timeupdate", () => {
  const currentTime = videoElement.currentTime;

  // Kolla om det finns en utökad beskrivning som ska starta nu
  const description = checkForExtendedDescription(currentTime);

  if (description && !isPlayingExtendedDescription) {
    // Pausa huvudvideon
    videoElement.pause();
    isPlayingExtendedDescription = true;

    // Spela upp syntolkningsljudet (eller läs text från VTT)
    playExtendedAudio(description.audioSrc, () => {
      // När syntolkningen är klar, återuppta videon
      videoElement.play();
      isPlayingExtendedDescription = false;
    });
  }
});
```

::

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.2.7 Extended Audio Description (Prerecorded) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html)
- [W3C WAI: Audio Description](https://www.w3.org/WAI/media/av/description/) (Berör både standard och utökad)
