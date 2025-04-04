---
title: 2.5.7 Dragrörelser
description: Säkerställ att all funktionalitet som använder en dragrörelse (dra och släpp) också kan utföras med ett enklare pekargränssnitt.
level: AA
slug: dragrorelser
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "dragrörelser",
    "dragging movements",
    "dra och släpp",
    "drag and drop",
    "pekare",
    "motorik",
    "precision",
    "operabel",
    "indatametoder",
  ]
canonical: https://t12t.dev/wcag/2/5/7/dragrorelser

principleNumber: 2
principleName: Operabel
guidelineNumber: 5
guidelineName: Indatametoder
criterionNumber: 7

og:
  title: 2.5.7 Dragrörelser – WCAG
  description: Säkerställ att funktioner som använder dragrörelser har ett enklare alternativ.
  url: https://t12t.dev/wcag/2/5/7/dragrorelser
  type: article

datePublished: 2025-06-16
dateModified: 2024-05-17 # Kriteriet är nytt i WCAG 2.2

sitemap:
  lastmod: 2024-05-17
  changefreq: weekly # Relevant for modern interfaces
  priority: 0.7 # AA, important
---

# Dragrörelser

## Beskrivning

All funktionalitet som kräver en **dragrörelse** (att klicka/trycka, hålla kvar, och flytta pekaren till en annan punkt innan man släpper) för att fungera måste också kunna utföras med ett **enkelt pekargränssnitt** utan att behöva dra.

Detta kriterium (Nivå AA, nytt i WCAG 2.2) liknar 2.5.1 Pekargester, men fokuserar specifikt på "dra och släpp"-liknande interaktioner. Om en funktion kräver att användaren drar ett element från punkt A till punkt B, måste det finnas ett alternativt sätt att uppnå samma resultat med enkla klick eller tryck.

Exempel på enkla pekargränssnitt (single pointer interface) utan dragning:

- Klicka/tryck på källobjektet och sedan klicka/tryck på målobjektet/platsen.
- Klicka/tryck på källobjektet för att välja det, och sedan använda knappar (t.ex. "Flytta upp", "Flytta till mapp X") för att utföra åtgärden.
- Använda en meny som dyker upp när man klickar/trycker på objektet.

Undantag görs om:

1.  **Dragningen är nödvändig (essential):** Själva dragrörelsen är fundamental för funktionen (t.ex. att rita en linje eller forma ett objekt).
2.  **Användaragentens hantering:** Dragningen hanteras helt av användaragenten (webbläsaren/OS) och har inte modifierats av författaren.

## Varför detta behövs

Dragrörelser kräver en viss nivå av motorisk precision och koordination som inte alla användare har:

- **Personer med motoriska funktionsnedsättningar:** Kan ha svårt att hålla musknappen eller fingret nertryckt samtidigt som de flyttar pekaren, eller att släppa vid exakt rätt tidpunkt och plats.
- **Användare med hjälpmedel:** Vissa hjälpmedel (t.ex. huvudpekare, switch-kontroller) kan ha svårt att simulera en kontinuerlig dragrörelse. De är ofta bättre på att simulera enkla klick.
- **Användare med små skärmar eller oprecisa pekdon:** Att dra och släppa kan vara pilligt och leda till fel.

Att erbjuda ett alternativ med enkla klick/tryck gör funktionen tillgänglig för en betydligt bredare grupp användare.

---

## Exempel

### Sortera lista med drag-och-släpp och knappar (Rätt) ✅

En lista med objekt kan sorteras om genom att dra och släppa objekten i önskad ordning. Bredvid varje objekt finns också pilar (upp/ner) som kan klickas för att flytta objektet ett steg i taget.

::code-group{:labels='["Konceptuell HTML (Rätt) ✅"]'}

```html showLineNumbers
<ul>
  <li draggable="true">
    Objekt A
    <button aria-label="Flytta Objekt A uppåt">↑</button>
    <button aria-label="Flytta Objekt A nedåt">↓</button>
  </li>
  <li draggable="true">
    Objekt B
    <button aria-label="Flytta Objekt B uppåt">↑</button>
    <button aria-label="Flytta Objekt B nedåt">↓</button>
  </li>
  <!-- Fler objekt -->
</ul>

<!-- JavaScript krävs för både drag-och-släpp och knapparnas funktion -->
```

::
**Resultat:** Användare som inte kan dra och släppa kan ändå sortera listan med hjälp av upp/ner-knapparna.

### Flytta filer mellan mappar med alternativ (Rätt) ✅

Ett filhanteringsgränssnitt låter användare dra filer till olika mappar. Som alternativ kan användaren:

1. Markera en fil (enkelt klick).
2. Klicka på en "Flytta"-knapp i verktygsfältet.
3. En dialogruta visas där användaren kan välja målmapp från en lista och klicka "OK".
   _eller_
4. Markera en fil.
5. Högerklicka (eller långtryck) för att öppna en kontextmeny.
6. Välj "Flytta till..." och välj mapp i undermenyn.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning av alternativ]
- Markera fil -> Klicka "Flytta"-knapp -> Välj mapp i dialog.
- Markera fil -> Öppna kontextmeny -> Välj "Flytta till..." -> Välj mapp.
```

::
**Resultat:** Filflyttningen är inte beroende av dragrörelsen.

### Slider/reglage (Rätt - ofta inbyggt) ✅

Ett standard HTML-reglage ([<input type="range">]{.inline-code}) låter användaren dra "tummen" för att välja ett värde. De flesta webbläsare tillåter också att man klickar direkt på spåret för att flytta tummen dit, och att man kan justera värdet med piltangenterna när reglaget har fokus.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<label for="volume">Volym:</label>
<input type="range" id="volume" name="volume" min="0" max="100" value="50" />
```

::
**Resultat:** Även om dragning är ett sätt att interagera, finns alternativa sätt (klick på spår, tangentbord) som inte kräver dragning. Detta uppfyller kravet.

### Endast drag-och-släpp för att ladda upp filer (Fel) ❌

Ett formulär har en yta där det står "Dra filer hit för att ladda upp". Det finns ingen "Välj filer"-knapp som öppnar en filväljare.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<div class="drop-zone">Dra filer hit för att ladda upp</div>
<!-- Saknar: <input type="file" id="fileUpload" style="display: none;"> -->
<!-- Saknar: <button onclick="document.getElementById('fileUpload').click()">
                 Välj filer...
              </button> -->
```

::
**Resultat:** Användare som inte kan dra och släppa kan inte ladda upp filer. En "Välj filer"-knapp måste finnas som alternativ.

### Pusselspel som kräver dragning (Fel) ❌

Ett online-pusselspel där användaren måste dra pusselbitarna till rätt plats på spelplanen. Det finns inget alternativ att klicka på en bit och sedan klicka på målpositionen.

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
Ett pussel. För att placera en bit måste användaren klicka, hålla kvar, dra biten till rätt plats och släppa. Det går inte att t.ex. klicka på biten och sedan klicka på platsen den ska till.
```

::
**Resultat:** Användare som har svårt med dragrörelser kan inte spela spelet.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.5.7 Dragging Movements (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)
- [Webbriktlinjer: R140 Gör det möjligt att dra och släppa med ett enklare alternativ](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/gor-det-mojligt-att-dra-och-slappa-med-ett-enklare-alternativ)
- [Understanding Success Criterion 2.5.7: Dragging Movements (W3C Understanding Document)](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) (Innehåller fler exempel och tekniker).
