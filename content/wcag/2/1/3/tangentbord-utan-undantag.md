---
title: Tangentbord (utan undantag)
description: All funktionalitet kan hanteras via ett tangentbordsgränssnitt utan krav på specifik timing för enskilda tangenttryckningar.
level: AAA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 1
guidelineName: Tillgängligt via tangentbord
criterionNumber: 3

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.1.3 Tangentbord (utan undantag)

## Beskrivning

All funktionalitet i innehållet kan hanteras via ett tangentbordsgränssnitt utan krav på specifik timing för enskilda tangenttryckningar.

## Varför detta behövs

Personer som inte kan använda mus eller andra pekdon, till exempel personer med motoriska funktionsnedsättningar, synnedsättningar eller personer som använder specialanpassade tangentbord, måste kunna använda alla funktioner på webbplatsen med enbart tangentbord.

Till skillnad från 2.1.1 (Tangentbord, nivå A), finns det i detta kriterium inga undantag. Även funktioner som normalt kräver finmotorisk kontroll, som ritverktyg eller kartor, måste göras tillgängliga via tangentbord. Detta kan kräva alternativa metoder eller gränssnitt för att uppnå samma resultat.

Genom att uppfylla detta kriterium säkerställer du fullständig tillgänglighet för alla användare oavsett deras förmåga att använda pekdon.

## Exempel

### Exempel på bra implementering

#### Ritverktyg med tangentbordsalternativ

```html
<div
  class="drawing-app"
  role="application"
  aria-label="Ritverktyg"
  tabindex="0"
>
  <div class="toolbar">
    <button id="pen-tool" aria-pressed="true" tabindex="0">Penna</button>
    <button id="eraser-tool" aria-pressed="false" tabindex="0">
      Suddgummi
    </button>
    <button id="clear" tabindex="0">Rensa</button>
  </div>

  <div class="canvas-container">
    <canvas id="drawing-canvas" tabindex="0" aria-label="Rityta"></canvas>
    <div class="keyboard-instructions">
      <p>Tangentbordskommandon:</p>
      <ul>
        <li>Piltangenter: Flytta markören</li>
        <li>P: Välj penna</li>
        <li>E: Välj suddgummi</li>
        <li>Mellanslag: Börja/sluta rita</li>
        <li>C: Rensa canvas</li>
      </ul>
    </div>
  </div>
</div>

<script>
  // JavaScript för att hantera både mus- och tangentbordsinteraktioner
  document.getElementById("drawing-canvas").addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        // Flytta markören uppåt
        break;
      case "ArrowDown":
        // Flytta markören nedåt
        break;
      case "ArrowLeft":
        // Flytta markören vänster
        break;
      case "ArrowRight":
        // Flytta markören höger
        break;
      case " ":
        // Börja/sluta rita
        break;
      case "p":
      case "P":
        // Välj penna
        break;
      case "e":
      case "E":
        // Välj suddgummi
        break;
      case "c":
      case "C":
        // Rensa canvas
        break;
    }
  });
</script>
```

#### Karta med fullständig tangentbordssupport

```html
<div
  class="map-container"
  role="application"
  aria-label="Interaktiv karta"
  tabindex="0"
>
  <div id="map"></div>

  <div class="map-controls">
    <button id="zoom-in" aria-label="Zooma in" tabindex="0">+</button>
    <button id="zoom-out" aria-label="Zooma ut" tabindex="0">-</button>
    <select id="location-select" tabindex="0">
      <option value="">Välj plats</option>
      <option value="stockholm">Stockholm</option>
      <option value="gothenburg">Göteborg</option>
      <option value="malmo">Malmö</option>
    </select>
  </div>

  <div class="map-layers" role="group" aria-label="Kartlager">
    <label> <input type="checkbox" checked tabindex="0" /> Vägar </label>
    <label> <input type="checkbox" checked tabindex="0" /> Topografi </label>
    <label> <input type="checkbox" tabindex="0" /> Kollektivtrafik </label>
  </div>

  <div class="keyboard-instructions">
    <h3>Tangentbordsnavigation</h3>
    <ul>
      <li>Piltangenter: Panorera kartan</li>
      <li>+/-: Zooma in/ut</li>
      <li>Home: Återgå till ursprungsvy</li>
      <li>L: Öppna platslistan</li>
      <li>Tab: Navigera mellan kontroller och markörer på kartan</li>
    </ul>
  </div>
</div>

<script>
  // JavaScript för att implementera fullständig tangentbordsstyrning
</script>
```

### Exempel på bristande implementering

#### Obehörigt drag-and-drop-gränssnitt

```html
<!-- Dåligt exempel - ett drag-and-drop-gränssnitt utan tangentbordsalternativ -->
<div class="sortable-list">
  <h2>Ordna objekten genom att dra och släppa</h2>
  <ul id="sortable">
    <li class="draggable" draggable="true">Objekt 1</li>
    <li class="draggable" draggable="true">Objekt 2</li>
    <li class="draggable" draggable="true">Objekt 3</li>
  </ul>
  <!-- Inga instruktioner eller alternativ för tangentbordsanvändare -->
</div>
```

#### Spel utan tangentbordsstöd

```html
<!-- Dåligt exempel - ett spel som endast kan spelas med mus -->
<div class="game-container">
  <h2>Klicka på bollen</h2>
  <div id="game-area">
    <div class="target"></div>
  </div>
  <div class="score">Poäng: 0</div>
  <!-- Ingen möjlighet att spela med tangentbord -->
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.1.3 Keyboard (No Exception)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html)
- [W3C WAI - Keyboard Compatibility](https://www.w3.org/WAI/perspective-videos/keyboard/)
- [WebAIM - Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
