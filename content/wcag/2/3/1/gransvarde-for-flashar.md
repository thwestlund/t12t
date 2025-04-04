---
title: 2.3.1 Gränsvärde för flashar
description: Säkerställ att webbsidor inte innehåller något som flashar mer än tre gånger per sekund, eller att flashen ligger under de allmänna gränsvärdena för flash och röd flash.
level: A
slug: gransvarde-for-flashar
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "flashar",
    "blinkningar",
    "epilepsi",
    "fotosensitivitet",
    "anfall",
    "visuella effekter",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/2/3/1/gransvarde-for-flashar

principleNumber: 2
principleName: Operabel
guidelineNumber: 3
guidelineName: Anfall och fysiska reaktioner
criterionNumber: 1

og:
  title: 2.3.1 Gränsvärde för flashar – WCAG
  description: Undvik innehåll som flashar på ett sätt som kan utlösa anfall.
  url: https://t12t.dev/wcag/2/3/1/gransvarde-for-flashar
  type: article

datePublished: 2025-05-20
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental safety issue
---

# Gränsvärde för flashar

## Beskrivning

Webbsidor innehåller inte någonting som flashar (blinkar) mer än **tre gånger** under en sekund, eller så ligger flashen under de **allmänna gränsvärdena för flash och röd flash**.

Detta innebär att snabbt blinkande eller flimrande innehåll måste undvikas. Regeln är enkel:

- **Frekvens:** Inget får blinka mer än 3 gånger per sekund (3 Hz).

Om något _ändå_ blinkar snabbare än så, måste det uppfylla _båda_ dessa villkor för att vara tillåtet (vilket är mer komplext att säkerställa):

1.  **Storlek:** Det blinkande området måste vara tillräckligt litet (under ett visst tröskelvärde för synfältet, definierat i WCAG).
2.  **Kontrast och färg:** Kontrasten mellan de blinkande tillstånden får inte vara för hög, och särskilt mättade röda färger får inte användas i snabba blinkningar.

Det absolut säkraste och enklaste sättet att uppfylla detta krav är att **aldrig ha innehåll som blinkar mer än tre gånger per sekund.**

## Varför detta behövs

- **Fotosensitiv epilepsi:** Vissa personer (särskilt barn och ungdomar) har fotosensitiv epilepsi, vilket innebär att snabba blinkningar eller vissa visuella mönster kan utlösa epileptiska anfall. Tröskelvärdet ligger ofta runt 3 till 30 Hz (blinkningar per sekund). Att begränsa blinkningar till max 3 Hz minskar risken avsevärt.
- **Vestibulära störningar och migrän:** Snabbt blinkande eller flimrande innehåll kan också utlösa yrsel, illamående, huvudvärk eller andra obehag hos personer med vestibulära störningar, migrän eller andra känsligheter.
- **Allmän irritation och distraktion:** Även för användare utan specifika diagnoser kan snabbt blinkande innehåll vara mycket irriterande och distraherande.

Att följa detta kriterium är en grundläggande säkerhetsåtgärd för att skydda användare från potentiellt skadligt innehåll.

---

## Exempel

### Långsam blinkning (Rätt) ✅

En ikon blinkar långsamt (t.ex. en gång per sekund) för att indikera en ny avisering.

::code-group{:labels='["Konceptuell CSS (Rätt) ✅"]'}

```css showLineNumbers
/* Långsam blinkning (1 Hz = 1 gång/sekund) */
.slow-blink {
  animation: blinker 2s linear infinite; /* 2s cykel = 0.5 Hz, eller 1s cykel = 1Hz */
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
```

::
**Resultat:** Blinkningen är långsammare än 3 gånger per sekund och utgör därför ingen risk för anfall.

### Video med snabba klipp eller stroboskop (Fel) ❌

En video innehåller en sekvens med mycket snabba klipp, blixtar eller stroboskopeffekter som skapar blinkningar snabbare än 3 gånger per sekund över ett stort område av skärmen.

::code-group{:labels='["Beskrivning (Fel) ❌"]'}

```text [Beskrivning]
En musikvideo innehåller scener med stroboskopbelysning som blinkar 10 gånger per sekund. Effekten täcker nästan hela videoytan.
```

::
**Resultat:** Detta bryter mot gränsvärdet och kan vara farligt för personer med fotosensitiv epilepsi. Videon skulle behöva redigeras för att ta bort eller kraftigt reducera dessa effekter, eller så måste det blinkande området vara mycket litet och inte innehålla farliga röda färger.

### Snabbt blinkande annons (Fel) ❌

En animerad bannerannons använder snabba färgväxlingar eller blinkningar för att fånga uppmärksamhet, och frekvensen överstiger 3 Hz.

::code-group{:labels='["Beskrivning (Fel) ❌"]'}

```text [Beskrivning]
En GIF-annons växlar snabbt mellan en ljusgul och en mörklila bakgrund 5 gånger per sekund. Annonsen tar upp en märkbar del av skärmen.
```

::
**Resultat:** Detta är inte tillåtet och kan vara skadligt. Animationen måste göras långsammare (max 3 Hz).

---

## Verktyg för analys

Det finns verktyg som kan analysera video eller animerat innehåll för att upptäcka potentiellt skadliga flashar:

- **PEAT (Photosensitive Epilepsy Analysis Tool):** Ett verktyg utvecklat av Trace Center vid University of Wisconsin-Madison (kan vara svårt att få tag på numera, men principen är relevant).
- Vissa videoredigeringsprogram eller onlinetjänster kan ha funktioner för att upptäcka eller varna för snabba flashar.

Manuell granskning är dock viktig – om något _ser ut_ att blinka snabbt, bör det undersökas och åtgärdas. Det säkraste är att designa bort behovet av snabba blinkningar från början.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.3.1 Three Flashes or Below Threshold (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)
- [Webbriktlinjer: R121 Undvik innehåll som kan orsaka epileptiska anfall](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/undvik-innehall-som-kan-orsaka-epileptiska-anfall)
- [Understanding WCAG 2.2: General Flash and Red Flash Thresholds](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html#dfn-general-flash-and-red-flash-thresholds) (Detaljerad definition av gränsvärdena om man behöver gå djupare än 3 Hz-regeln).
