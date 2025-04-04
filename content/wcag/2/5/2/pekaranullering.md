---
title: 2.5.2 Pekaranullering
description: Säkerställ att funktioner som aktiveras med ett enkelt pekarklick (tryck ned) kan avbrytas eller ångras, eller att de inte aktiveras förrän pekaren släpps upp.
level: A
slug: pekaranullering
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "pekaranullering",
    "pointer cancellation",
    "pekare",
    "musklick",
    "tryckhändelse",
    "down-event",
    "up-event",
    "avbryta",
    "ångra",
    "motorik",
    "operabel",
    "indatametoder",
  ]
canonical: https://t12t.dev/wcag/2/5/2/pekaranullering

principleNumber: 2
principleName: Operabel
guidelineNumber: 5
guidelineName: Indatametoder
criterionNumber: 2

og:
  title: 2.5.2 Pekaranullering – WCAG
  description: Säkerställ att funktioner som aktiveras med pekare kan avbrytas eller ångras.
  url: https://t12t.dev/wcag/2/5/2/pekaranullering
  type: article

datePublished: 2025-06-11
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Pekaranullering

## Beskrivning

För funktionalitet som kan användas med en **enkel pekare** (t.ex. mus, finger på pekskärm, penna), måste minst ett av följande vara sant för resultatet av händelsen:

1.  **Ingen ned-händelse (No Down-Event):** Funktionen aktiveras inte när användaren trycker ned pekaren (vid "down-event"). Den aktiveras först vid "up-event" (när pekaren släpps).
2.  **Avbryt eller Ångra (Abort or Undo):** Funktionen slutförs vid "up-event", OCH det finns en mekanism för att avbryta funktionen innan den slutförs (t.ex. genom att flytta pekaren bort från målet innan man släpper) ELLER för att ångra funktionen efter att den har slutförts.
3.  **Upp upphäver (Up Reversal):** "Up-event" (att släppa pekaren) upphäver resultatet av "down-event" (att trycka ned).
4.  **Nödvändig ned-händelse (Essential):** Att slutföra funktionen vid "down-event" är nödvändigt (essential).

Detta innebär i praktiken att en användare som råkar trycka ned musknappen eller fingret på fel ställe ska kunna undvika att aktivera funktionen genom att dra pekaren/fingret bort från elementet innan de släpper upp knappen/fingret. Standardbeteendet för de flesta knappar och länkar på webben uppfyller detta (villkor 1 eller 2). Om en funktion _måste_ aktiveras direkt vid nedtryckning (villkor 4), är det ett undantag.

## Varför detta behövs

Detta krav hjälper användare som kan ha svårt att använda en pekare korrekt:

- **Personer med motoriska funktionsnedsättningar:** Kan råka trycka ner musknappen eller peka på skärmen av misstag på grund av darrningar, spasmer eller nedsatt precision. Om funktionen aktiveras direkt vid nedtryckning kan de oavsiktligt utföra oönskade handlingar.
- **Användare som ändrar sig:** Alla användare kan råka klicka fel och vill kunna avbryta handlingen innan den genomförs genom att helt enkelt flytta pekaren innan de släpper.
- **Användare med pekskärm:** Det är lätt att råka nudda skärmen. Om åtgärden sker först när man lyfter fingret (up-event) och man kan avbryta genom att dra fingret bort, minskar risken för misstag.

Kravet säkerställer att användare har en möjlighet att "ångra" en pekinteraktion innan den slutförs, vilket minskar risken för fel och frustration.

---

## Exempel

### Standardknapp eller -länk (Rätt) ✅

En vanlig HTML-knapp eller -länk. Handlingen (t.ex. att gå till en ny sida eller skicka ett formulär) sker först när musknappen släpps _medan pekaren är över elementet_ (up-event). Om användaren trycker ner knappen, drar pekaren utanför elementets yta och sedan släpper, händer ingenting.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<!-- Uppfyller villkor 1 eller 2 (standardbeteende) -->
<button onclick="doAction()">Tryck här</button>
<a href="/annan-sida">Gå till annan sida</a>
```

```javascript showLineNumbers
function doAction() {
  // Denna funktion anropas normalt vid 'click'-händelsen,
  // som i de flesta webbläsare sker vid up-event om
  // pekaren fortfarande är över elementet.
  console.log("Åtgärd utförd!");
}
```

::
**Resultat:** Användaren kan trycka ner knappen/länken, ångra sig, dra pekaren bort och släppa utan att åtgärden utförs.

### Drag-och-släpp med avbrytning (Rätt) ✅

En drag-och-släpp-funktion. Användaren trycker ner på ett objekt för att börja dra ([mousedown]{.inline-code}/[touchstart]{.inline-code}). Om de släpper objektet _utanför_ en giltig släppzon ([mouseup]{.inline-code}/[touchend]{.inline-code}), avbryts dragningen och objektet återgår till sin ursprungsplats.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
1. Användaren trycker ner på ett flyttbart objekt (down-event).
2. Användaren drar objektet.
3. Användaren släpper objektet utanför en godkänd släppyta (up-event).
4. Objektet snäpper tillbaka till startpositionen (funktionen avbröts).
   Alternativt:
3b. Användaren släpper objektet över en godkänd släppyta (up-event).
4b. Objektet placeras i släppytan (funktionen slutfördes). En Ångra-knapp visas (uppfyller "Undo"-delen av villkor 2).
```

::
**Resultat:** Användaren kan avbryta drag-och-släpp-operationen genom att släppa på fel ställe, eller ångra den efteråt.

### Knapp som aktiveras direkt vid nedtryckning (Fel) ❌

En knapp som utför en permanent åtgärd (t.ex. "Radera konto permanent") direkt när användaren trycker ner musknappen ([mousedown]{.inline-code}), utan någon möjlighet att avbryta genom att dra bort pekaren och utan någon ångra-funktion.

::code-group{:labels='["HTML + JavaScript (Fel) ❌"]'}

```html showLineNumbers
<!-- Fel: Åtgärden sker på mousedown, inte click/mouseup -->
<button id="deleteBtn">Radera konto permanent</button>
```

```javascript showLineNumbers
const deleteBtn = document.getElementById("deleteBtn");

// Fel: Använder mousedown för en kritisk åtgärd utan avbryt/ångra
deleteBtn.addEventListener("mousedown", () => {
  // Ingen kontroll om användaren drar bort pekaren innan mouseup!
  // Ingen ångra-funktion erbjuds.
  if (confirm("Är du helt säker? Detta kan inte ångras.")) {
    console.log("Kontot raderas omedelbart vid nedtryckning!");
    // permanentDeleteAccount();
  }
});
```

::
**Resultat:** Användare som råkar trycka ner denna knapp kan inte avbryta genom att dra bort pekaren. Om de också råkar bekräfta en eventuell dialogruta är handlingen oåterkallelig. Detta är inte tillåtet om inte nedtryckning är nödvändig.

### Undantag: Pianotangent eller spelkontroll (Tillåtet) ✅

En webbaserad pianoapplikation där en ton spelas direkt när användaren trycker ner en tangent (virtuell tangent på skärmen eller fysisk tangent mappad). Tonen tystnar när tangenten släpps upp.

::code-group{:labels='["Koncept (Tillåtet) ✅"]'}

```text [Beskrivning]
En virtuell pianoklaviatur. När användaren trycker ner en tangent (down-event) spelas motsvarande ton. När tangenten släpps (up-event) tystnar tonen. Att ljudet startar direkt vid nedtryckning är nödvändigt för att kunna spela musik i realtid.
```

::
**Resultat:** Här är det nödvändigt att funktionen (att spela ljud) startar vid nedtryckning för att instrumentet ska vara användbart. Villkor 4 ("Essential") är uppfyllt.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.5.2 Pointer Cancellation (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html)
- [Webbriktlinjer: R136 Ge användaren möjlighet att avbryta eller ångra klick och tryck](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/ge-anvandaren-mojlighet-att-avbryta-eller-angra-klick-och-tryck)
- [Understanding Success Criterion 2.5.2: Pointer Cancellation (W3C Understanding Document)](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html#intent) (Förklarar avsikten och vanliga tekniker).
