---
title: 2.1.1 Tangentbord
description: Säkerställ att all funktionalitet kan nås och användas med enbart tangentbord, utan att kräva specifik tajming för tangenttryckningar.
level: A
slug: tangentbord
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "tangentbord",
    "tangentbordsnavigation",
    "tangentbordsfälla",
    "fokus",
    "interaktivitet",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/2/1/1/tangentbord

principleNumber: 2
principleName: Operabel
guidelineNumber: 1
guidelineName: Tangentbordsstyrning
criterionNumber: 1

og:
  title: 2.1.1 Tangentbord – WCAG
  description: Säkerställ att all funktionalitet kan nås och användas med enbart tangentbord.
  url: https://t12t.dev/wcag/2/1/1/tangentbord
  type: article

datePublished: 2025-05-01
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Tangentbord

## Beskrivning

All funktionalitet i innehållet kan användas genom ett tangentbordsgränssnitt, utan att kräva specifik tajming för enskilda tangenttryckningar. Detta gäller inte om den underliggande funktionen kräver inmatning som beror på användarens rörelsebana och inte bara på start- och slutpunkter.

Detta innebär att en användare måste kunna göra allt på en webbsida med enbart tangentbordet som de kan göra med en mus. Detta inkluderar:

- Navigera till och aktivera länkar och knappar.
- Fylla i och skicka formulär.
- Använda menyer, reglage (sliders), drag-och-släpp-funktioner (om de inte enbart bygger på rörelsebanan) och andra interaktiva komponenter.
- Stänga dialogrutor och pop-up-fönster.

Användaren ska kunna använda standardtangenter som [Tab]{.inline-code} för att flytta fokus mellan interaktiva element, [Enter]{.inline-code} och/eller [Space]{.inline-code} för att aktivera dem, och piltangenter för att navigera inom komponenter som menyer eller reglage.

Undantaget gäller funktioner där själva _sättet_ man rör pekaren på är avgörande, till exempel att rita en figur i ett ritprogram med frihand. Att dra en fil från en punkt till en annan (drag-och-släpp) är **inte** ett undantag, eftersom det bygger på start- och slutpunkt och måste kunna utföras med tangentbord (ofta via en meny eller specialtangenter).

## Varför detta behövs

Många användare är helt beroende av tangentbordet för att navigera och interagera med webbinnehåll:

- **Personer med motoriska funktionsnedsättningar:** Kan inte använda en mus på grund av begränsad rörlighet, darrningar eller andra orsaker.
- **Skärmläsaranvändare:** Navigerar primärt med tangentbordet för att läsa och interagera med innehållet.
- **Personer med tillfälliga begränsningar:** En bruten arm, en trasig mus eller arbete i en skakig miljö kan göra tangentbordet till det enda praktiska alternativet.
- **Avancerade användare ("Power users"):** Föredrar ofta tangentbordet för snabbhet och effektivitet.

Om funktionalitet inte kan nås med tangentbordet, utestängs dessa användare helt från att använda de delarna av webbplatsen.

---

## Exempel

### Använda standard HTML-kontroller (Rätt) ✅

HTML:s inbyggda interaktiva element är designade för att vara tangentbordsstyrda.

::code-group{:labels='["HTML (Standardkontroller) ✅"]'}

```html showLineNumbers
<!-- Länkar är nåbara med Tab, aktiveras med Enter -->
<a href="/om-oss">Om oss</a>

<!-- Knappar är nåbara med Tab, aktiveras med Enter/Space -->
<button onclick="saveData()">Spara</button>

<!-- Formulärfält är nåbara med Tab -->
<label for="username">Användarnamn:</label>
<input type="text" id="username" name="username" />

<label for="country">Land:</label>
<select id="country" name="country">
  <option value="se">Sverige</option>
  <option value="no">Norge</option>
</select>

<input type="checkbox" id="terms" name="terms" />
<label for="terms">Godkänn villkor</label>

<textarea id="message" name="message"></textarea>
```

::
**Resultat:** Alla dessa element kan nås och användas fullt ut med enbart tangentbordet (Tab, Enter, Space, piltangenter vid behov).

### Anpassade kontroller gjorda tillgängliga (Rätt) ✅

Om du bygger egna komponenter (t.ex. med [\<div\>]{.inline-code} eller [\<span\>]{.inline-code} och JavaScript) måste du göra dem tangentbordsstyrda.

::code-group{:labels='["HTML + JavaScript (Anpassad knapp) ✅"]'}

```html {3-4} showLineNumbers
<!-- En div stylad som en knapp, gjord fokuserbar och klickbar -->
<div
  role="button"
  tabindex="0"
  id="customButton"
  onclick="doSomething()"
  onkeydown="handleKeyDown(event)"
  style="border: 1px solid black; padding: 5px; display: inline-block; cursor: pointer;"
>
  Gör något
</div>
```

```javascript showLineNumbers
function doSomething() {
  console.log("Knappen klickades eller aktiverades!");
}

function handleKeyDown(event) {
  // Aktivera på Enter (keyCode 13) eller Space (keyCode 32)
  if (event.key === "Enter" || event.key === " ") {
    // Förhindra standardbeteende för Space (scrolla sidan)
    event.preventDefault();
    doSomething();
  }
}

// Fokusera knappen programmatiskt om det behövs
// document.getElementById('customButton').focus();
```

::
**Resultat:** Genom att lägga till [role="button"]{.inline-code} (för semantik), [tabindex="0"]{.inline-code} (för att göra den fokuserbar med Tab) och en [onkeydown]{.inline-code}-hanterare (för att reagera på Enter/Space), blir den anpassade "knappen" användbar med tangentbord.

### Funktion som bara fungerar med mus (Fel) ❌

Element som bara reagerar på musinteraktion är inte tillgängliga.

::code-group{:labels='["HTML + JavaScript (Endast mus) ❌"]'}

```html showLineNumbers
<!-- Fel: Denna 'knapp' kan bara aktiveras med musen -->
<span
  onclick="openMenu()"
  style="text-decoration: underline; color: blue; cursor: pointer;"
>
  Öppna meny (Endast mus)
</span>

<!-- Fel: Drag-och-släpp som bara fungerar med musdragning -->
<div id="dragItem" draggable="true" ondragstart="drag(event)">Dra mig</div>
<div id="dropZone" ondrop="drop(event)" ondragover="allowDrop(event)">
  Släpp här
</div>
<!-- Saknar helt tangentbordsalternativ för att välja objekt,
     flytta det och släppa det. -->
```

```javascript showLineNumbers
// Ingen tangentbordshantering för 'Öppna meny'
function openMenu() {
  console.log("Meny öppnad via musen.");
  // ... visa menyn ...
}

// Funktioner för drag-och-släpp (ofullständiga exempel)
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  console.log("Objekt släppt med musen.");
}
```

::
**Resultat:** Användare som bara har tangentbord kan inte öppna menyn och inte utföra drag-och-släpp-åtgärden. För drag-och-släpp skulle ett tangentbordsalternativ kunna vara att markera objektet, trycka t.ex. Ctrl+X, navigera till målzonen och trycka Ctrl+V, eller använda en kontextmeny.

**Tangentbordsfälla:** Se också upp för tangentbordsfällor (Kriterium 2.1.2), där fokus kan flyttas _in_ i en komponent (t.ex. en widget eller en modal ruta) men inte kan flyttas _ut_ igen med enbart tangentbordet.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.1.1 Keyboard (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [Webbriktlinjer: R116 Se till att allt innehåll kan nås och användas med enbart tangentbordet](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/se-till-att-allt-innehall-kan-nas-och-anvandas-med-enbart-tangentbordet)
- [MDN Web Docs: Accessibility - Keyboard-navigable JavaScript widgets](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- [MDN Web Docs: tabindex attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
- [WAI-ARIA Authoring Practices - Developing a Keyboard Interface](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)
