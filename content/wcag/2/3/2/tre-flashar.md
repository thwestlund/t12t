---
title: 2.3.2 Tre flashar
description: Säkerställ att webbsidor inte innehåller något som flashar mer än tre gånger per sekund.
level: AAA
slug: tre-flashar
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
canonical: https://t12t.dev/wcag/2/3/2/tre-flashar

principleNumber: 2
principleName: Operabel
guidelineNumber: 3
guidelineName: Anfall och fysiska reaktioner
criterionNumber: 2

og:
  title: 2.3.2 Tre flashar – WCAG
  description: Säkerställ att webbsidor inte innehåller något som flashar mer än tre gånger per sekund.
  url: https://t12t.dev/wcag/2/3/2/tre-flashar
  type: article

datePublished: 2025-05-21
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Tre flashar

## Beskrivning

Webbsidor innehåller inte någonting som flashar (blinkar) mer än **tre gånger** under en sekund.

Detta kriterium (Nivå AAA) är en striktare version av Kriterium 2.3.1 Gränsvärde för flashar (Nivå A). Det **tar bort undantaget** om att flashar snabbare än 3 Hz kan vara tillåtna om de ligger under vissa gränsvärden för storlek och kontrast (de "allmänna gränsvärdena för flash och röd flash").

På AAA-nivå är regeln absolut: **ingenting får flasha mer än tre gånger per sekund**, oavsett storlek, kontrast eller färg.

## Varför detta behövs

Även om gränsvärdena i 2.3.1 (Nivå A) minskar risken avsevärt, kan vissa mycket känsliga individer fortfarande påverkas negativt av flashar som ligger precis under dessa trösklar.

Att helt förbjuda flashar snabbare än 3 Hz på AAA-nivå ger den **högsta möjliga säkerhetsnivån** för att skydda användare mot att utlösa anfall eller drabbas av andra negativa fysiska reaktioner. Det eliminerar behovet av komplexa mätningar av storlek och kontrast och gör regeln enkel och robust.

Detta är särskilt viktigt för webbplatser som riktar sig till känsliga grupper eller där högsta möjliga tillgänglighet eftersträvas.

---

## Exempel

### Inga eller långsamma blinkningar (Rätt) ✅

Sidan innehåller inga blinkande element, eller endast element som blinkar långsamt (max 3 gånger per sekund).

::code-group{:labels='["Konceptuell CSS (Rätt) ✅"]'}

```css showLineNumbers
/* OK: Ingen blinkning */
.stable-element {
  background-color: lightblue;
}

/* OK: Mycket långsam blinkning (0.5 Hz) */
.very-slow-blink {
  animation: slow-fade 2s ease-in-out infinite alternate;
}

@keyframes slow-fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}
```

::
**Resultat:** Innehållet uppfyller den strikta AAA-regeln om max 3 flashar per sekund.

### Blinkning snabbare än 3 Hz (Fel) ❌

En liten laddningsindikator (spinner) eller en del av en visualisering blinkar snabbt, till exempel 5 gånger per sekund, även om området är litet och kontrasten inte är maximal.

::code-group{:labels='["Beskrivning (Fel - AAA) ❌"]'}

```text [Beskrivning]
En liten ikon i hörnet av skärmen växlar snabbt färg (t.ex. 4 gånger per sekund) för att visa systemstatus. Även om ikonen är liten och inte röd, bryter den mot AAA-kravet eftersom frekvensen är över 3 Hz.
```

::
**Resultat:** Även om denna blinkning kanske hade varit tillåten enligt Nivå A (om den låg under tröskelvärdena), är den **inte** tillåten enligt den striktare AAA-regeln. Frekvensen måste sänkas till 3 Hz eller lägre.

### Stroboskopliknande effekt i video (Fel) ❌

En video innehåller korta sekvenser med effekter som liknar stroboskop, även om de är avsedda som konstnärligt uttryck.

::code-group{:labels='["Beskrivning (Fel - AAA) ❌"]'}

```text [Beskrivning]
En konstnärlig video på en portföljsida innehåller medvetet snabba, pulserande ljuseffekter som överstiger 3 Hz.
```

::
**Resultat:** Bryter mot AAA-kravet. För att uppfylla AAA måste sådana effekter tas bort eller redigeras så att frekvensen är max 3 Hz.

---

## Verktyg och Testning

Eftersom regeln är absolut (max 3 Hz) är behovet av komplexa analysverktyg (som PEAT) mindre. Fokus ligger på att identifiera _alla_ former av blinkningar och säkerställa att deras frekvens inte överstiger 3 Hz.

- **Manuell granskning:** Titta noggrant på allt animerat eller dynamiskt innehåll. Ser något ut att blinka snabbt?
- **Videoanalys:** Om video används, kan man behöva analysera den bildruta för bildruta i ett redigeringsprogram för att mäta frekvensen på misstänkta sekvenser.

Det bästa är att designa för att undvika snabba blinkningar helt och hållet.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.3.2 Three Flashes (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes.html)
- [Förstå WCAG SC 2.3.1 (Nivå A)](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) (För jämförelse och definition av flash).
