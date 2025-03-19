---
title: Tangentbordsfängelse
description: Om tangentbordsfokus kan flyttas till en komponent på sidan med hjälp av ett tangentbordsgränssnitt, så kan fokus flyttas bort från den komponenten med enbart tangentbordsgränssnitt.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 1
guidelineName: Tillgängligt via tangentbord
criterionNumber: 2

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.1.2 Tangentbordsfängelse

## Beskrivning

Om tangentbordsfokus kan flyttas till en komponent på sidan med hjälp av ett tangentbordsgränssnitt, så kan fokus flyttas bort från den komponenten med enbart tangentbordsgränssnitt. Om det kräver mer än oviktade piltangenter eller tabbtangenter eller andra standardmetoder för att avsluta, så får användaren information om hur fokus kan flyttas bort.

## Varför detta behövs

Tangentbordsanvändare måste kunna navigera genom hela sidan utan att fastna i något element. Om en användare inte kan flytta fokus från ett element riskerar de att bli "fångade" och kan inte komma åt resten av innehållet på sidan. Detta är särskilt viktigt för personer med motoriska funktionsnedsättningar som förlitar sig på tangentbordsnavigering eller alternativa inmatningsenheter.

## Exempel

### Exempel på bra implementering

#### Modal dialog med korrekt hantering av tangentbordsfokus

```html
<button id="openDialog">Öppna dialog</button>

<div
  id="dialog"
  role="dialog"
  aria-labelledby="dialogTitle"
  aria-modal="true"
  hidden
>
  <h2 id="dialogTitle">Dialogruta</h2>
  <p>Detta är innehållet i dialogen.</p>

  <form>
    <label for="name">Namn:</label>
    <input type="text" id="name" name="name" />

    <div class="buttons">
      <button type="button" id="cancelButton">Avbryt</button>
      <button type="submit" id="confirmButton">Bekräfta</button>
    </div>
  </form>
</div>

<script>
  const openButton = document.getElementById("openDialog");
  const dialog = document.getElementById("dialog");
  const cancelButton = document.getElementById("cancelButton");
  const firstFocusableElement = document.getElementById("name");
  const lastFocusableElement = document.getElementById("confirmButton");

  // Lagra elementet som hade fokus innan dialogen öppnades
  let previouslyFocusedElement;

  openButton.addEventListener("click", function () {
    // Spara tidigare fokuserat element
    previouslyFocusedElement = document.activeElement;

    // Visa dialog
    dialog.hidden = false;

    // Sätt fokus på första fokusbara elementet
    firstFocusableElement.focus();
  });

  // Stäng dialog och återställ fokus
  function closeDialog() {
    dialog.hidden = true;

    // Återställ fokus till elementet som hade fokus innan dialogen öppnades
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }

  cancelButton.addEventListener("click", closeDialog);

  // Hantera tangenttryckningar i dialogen
  dialog.addEventListener("keydown", function (e) {
    // ESC-tangent stänger dialogen
    if (e.key === "Escape") {
      closeDialog();
      return;
    }

    // TRAP FOCUS: Se till att Tab inte navigerar utanför dialogen
    if (e.key === "Tab") {
      // Skift+Tab går bakåt
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      }
      // Tab går framåt
      else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
  });
</script>
```

#### Videospelare med escape-tangent för att lämna fullskärmsläge

```html
<div class="video-player">
  <video id="video" src="video.mp4" controls></video>
  <button id="fullscreenButton">Fullskärm</button>
</div>

<script>
  const video = document.getElementById("video");
  const fullscreenButton = document.getElementById("fullscreenButton");

  fullscreenButton.addEventListener("click", function () {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  });

  // Visa instruktioner när fullskärmsläge aktiveras
  document.addEventListener("fullscreenchange", showInstructions);
  document.addEventListener("webkitfullscreenchange", showInstructions);
  document.addEventListener("mozfullscreenchange", showInstructions);
  document.addEventListener("MSFullscreenChange", showInstructions);

  function showInstructions() {
    if (document.fullscreenElement) {
      // Skapa ett element för instruktioner
      const instructions = document.createElement("div");
      instructions.className = "fullscreen-instructions";
      instructions.textContent = "Tryck på ESC för att lämna fullskärmsläge";

      // Lägg till instruktioner till videon och göm dem efter några sekunder
      video.parentNode.appendChild(instructions);
      setTimeout(function () {
        instructions.style.opacity = "0";
      }, 3000);
    }
  }
</script>
```

### Exempel på bristande implementering

#### Dropdown-meny som fångar tangentbordsfokus

```html
<div class="dropdown">
  <button id="dropdownButton">Meny</button>
  <div class="dropdown-content">
    <a href="#link1">Länk 1</a>
    <a href="#link2">Länk 2</a>
    <a href="#link3">Länk 3</a>
  </div>
</div>

<script>
  document
    .getElementById("dropdownButton")
    .addEventListener("click", function () {
      document.querySelector(".dropdown-content").style.display = "block";

      // Focus fångas i dropdown och det finns ingen väg ut
      document.querySelector(".dropdown-content a").focus();
    });
</script>
```

#### Fullskärmsläge utan information om hur man lämnar

```html
<button onclick="openFullscreen()">Öppna i fullskärm</button>

<div id="content">
  <!-- Innehåll här -->
</div>

<script>
  function openFullscreen() {
    const elem = document.getElementById("content");

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }

    // Ingen information till användaren om hur man lämnar fullskärmsläge
  }
</script>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [Webbriktlinjer - R129: Utveckla systemet så att det går att hantera med enbart tangentbordet](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/utveckla-systemet-sa-att-det-gar-att-hantera-med-enbart-tangentbordet)
