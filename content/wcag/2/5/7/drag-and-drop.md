---
title: Drag and Drop
description: Alla funktioner som använder dra-och-släpp-åtgärder för att flytta innehåll kan göras med endast en pekare.
level: AA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 5
guidelineName: Inmatningsmetoder
criterionNumber: 7

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.5.7 Drag and Drop

## Beskrivning

För alla användargränssnittskomponenter där dra-och-släpp-åtgärder kan utföras med en pekare, finns det minst en alternativ inmatningsmetod som tillåter att funktionen utförs med endast en pekare utan drag-and-drop, såvida inte dra-och-släpp-funktionen är nödvändig eller väsentlig för funktionen.

## Varför detta behövs

Dra-och-släpp-åtgärder kan vara svåra eller omöjliga att utföra för personer med motoriska funktionsnedsättningar. Genom att erbjuda alternativa metoder för att utföra samma uppgift, säkerställer man att alla användare kan interagera med innehållet oavsett deras förmåga att använda drag-and-drop.

## Exempel

### Exempel på bra implementering

#### Filuppladdning med alternativ till drag-and-drop

```html
<div
  id="dropZone"
  tabindex="0"
  role="button"
  aria-label="Dra filer hit eller klicka för att välja filer"
>
  <p>Dra filer hit eller <button id="browseButton">Välj filer</button></p>
  <input type="file" id="fileInput" multiple style="display: none;" />
</div>

<script>
  // Hantera drag-and-drop
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");
  const browseButton = document.getElementById("browseButton");

  // Alternativ metod med klickbar knapp
  browseButton.addEventListener("click", function () {
    fileInput.click();
  });

  // Alternativ metod med tangentbord genom att göra dropZone fokusbar
  dropZone.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      fileInput.click();
    }
  });
</script>
```

#### Sorterbar lista med knappar för upp/ner-rörelse

```html
<ul id="sortableList">
  <li>
    <span>Objekt 1</span>
    <button aria-label="Flytta upp objekt 1" disabled>↑</button>
    <button aria-label="Flytta ner objekt 1">↓</button>
  </li>
  <li>
    <span>Objekt 2</span>
    <button aria-label="Flytta upp objekt 2">↑</button>
    <button aria-label="Flytta ner objekt 2">↓</button>
  </li>
  <li>
    <span>Objekt 3</span>
    <button aria-label="Flytta upp objekt 3">↑</button>
    <button aria-label="Flytta ner objekt 3" disabled>↓</button>
  </li>
</ul>
```

### Exempel på bristande implementering

#### Sorterbar lista utan alternativ till drag-and-drop

```html
<ul id="sortableList">
  <li draggable="true">Objekt 1</li>
  <li draggable="true">Objekt 2</li>
  <li draggable="true">Objekt 3</li>
</ul>

<script>
  // Implementerar bara drag-and-drop-funktionalitet utan alternativ
</script>
```

#### Kanban-tavla utan alternativ för att flytta kort

```html
<div class="kanban-board">
  <div class="column" id="todo">
    <h2>Att göra</h2>
    <div class="card" draggable="true">Uppgift 1</div>
    <div class="card" draggable="true">Uppgift 2</div>
  </div>
  <div class="column" id="doing">
    <h2>Pågående</h2>
  </div>
  <div class="column" id="done">
    <h2>Klart</h2>
  </div>
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.5.7 Drag Movements](https://www.w3.org/WAI/WCAG22/Understanding/drag-movements.html)
- [Webbriktlinjer - R44: Gör det möjligt att ångra funktioner](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/gor-det-mojligt-att-angra-funktioner)
