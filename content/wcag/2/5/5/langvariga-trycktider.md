---
title: Långvariga trycktider
description: Funktioner som aktiveras genom att trycka och hålla kvar kan också aktiveras på alternativa sätt.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 5
guidelineName: Inmatningsmetoder
criterionNumber: 5

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.5.5 Långvariga trycktider

## Beskrivning

Funktioner som kan styras genom pekarinmatning kan också styras med en enda pekare utan att kräva en sammanhållen tryckrörelse (press-and-hold) eller en tryckrörelse med särskild längd, såvida inte en sammanhållen tryckrörelse eller en tryckrörelse med särskild längd är nödvändig eller viktig för funktionen.

## Varför detta behövs

Långvariga trycktider kan vara svåra att utföra för personer med motoriska funktionsnedsättningar eller personer som använder särskilda hjälpmedel. Genom att erbjuda alternativa sätt att utföra funktioner som vanligtvis aktiveras med "tryck och håll" säkerställer man att alla användare kan interagera med innehållet, oavsett förmåga att utföra komplexa pekrörelser.

## Exempel

### Exempel på bra implementering

#### Kontextmeny med alternativ åtkomst

```html
<div class="context-menu-container">
  <div id="target-element" tabindex="0">
    <p>Högerklicka eller tryck länge här för att öppna kontextmeny</p>
    <button
      class="menu-button"
      aria-label="Öppna meny"
      aria-expanded="false"
      aria-controls="context-menu"
    >
      &#8942;
      <!-- vertikala prickar (kebab-meny) -->
    </button>
  </div>

  <div id="context-menu" class="context-menu" hidden>
    <ul>
      <li><button>Kopiera</button></li>
      <li><button>Klipp ut</button></li>
      <li><button>Klistra in</button></li>
      <li><button>Ta bort</button></li>
    </ul>
  </div>
</div>

<script>
  const targetElement = document.getElementById("target-element");
  const menuButton = document.querySelector(".menu-button");
  const contextMenu = document.getElementById("context-menu");

  // Långvarig tryckning
  let pressTimer;

  targetElement.addEventListener("mousedown", function (e) {
    pressTimer = window.setTimeout(function () {
      showContextMenu(e.clientX, e.clientY);
    }, 500);
  });

  targetElement.addEventListener("mouseup", function () {
    clearTimeout(pressTimer);
  });

  targetElement.addEventListener("mouseleave", function () {
    clearTimeout(pressTimer);
  });

  // Alternativ: Vanlig knapp för att öppna menyn
  menuButton.addEventListener("click", function (e) {
    e.stopPropagation();
    const rect = menuButton.getBoundingClientRect();
    showContextMenu(rect.left, rect.bottom);
  });

  // Alternativ: Högerklick
  targetElement.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    showContextMenu(e.clientX, e.clientY);
  });

  function showContextMenu(x, y) {
    contextMenu.style.left = x + "px";
    contextMenu.style.top = y + "px";
    contextMenu.hidden = false;
    menuButton.setAttribute("aria-expanded", "true");

    // Lägg till en händelselyssnare för att stänga menyn
    document.addEventListener("click", closeContextMenu);
  }

  function closeContextMenu() {
    contextMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", closeContextMenu);
  }
</script>
```

#### Zoom-funktion med alternativa metoder

```html
<div class="image-container">
  <img
    id="zoomable-image"
    src="example-image.jpg"
    alt="Zoombar bild av ett landskap"
  />

  <div class="zoom-controls">
    <button id="zoom-in">Zooma in</button>
    <button id="zoom-out">Zooma ut</button>
  </div>
</div>

<script>
  const image = document.getElementById("zoomable-image");
  const zoomInButton = document.getElementById("zoom-in");
  const zoomOutButton = document.getElementById("zoom-out");

  let scale = 1;
  let isZooming = false;
  let pressTimer;

  // Knapparna som alternativ till long-press
  zoomInButton.addEventListener("click", function () {
    zoomIn();
  });

  zoomOutButton.addEventListener("click", function () {
    zoomOut();
  });

  // Long-press på bilden för att zooma
  image.addEventListener("mousedown", function () {
    pressTimer = window.setTimeout(function () {
      isZooming = true;
      zoomIn();
    }, 500);
  });

  image.addEventListener("mouseup", function () {
    clearTimeout(pressTimer);
    isZooming = false;
  });

  image.addEventListener("mouseleave", function () {
    clearTimeout(pressTimer);
    isZooming = false;
  });

  function zoomIn() {
    if (scale < 3) {
      scale += 0.2;
      updateZoom();
    }
  }

  function zoomOut() {
    if (scale > 0.5) {
      scale -= 0.2;
      updateZoom();
    }
  }

  function updateZoom() {
    image.style.transform = `scale(${scale})`;
  }
</script>
```

### Exempel på bristande implementering

#### Drag-and-drop utan alternativ

```html
<div class="gallery">
  <div class="image-item" draggable="true">
    <img src="image1.jpg" alt="Bild 1" />
    <p class="caption">Håll intryckt och dra för att flytta bilden</p>
  </div>

  <div class="image-item" draggable="true">
    <img src="image2.jpg" alt="Bild 2" />
    <p class="caption">Håll intryckt och dra för att flytta bilden</p>
  </div>

  <!-- Ingen alternativ metod för att ordna om bilderna -->
</div>
```

#### Skjutreglage som kräver långvarig tryckning

```html
<div class="video-player">
  <video id="video" src="video.mp4" controls></video>

  <div class="custom-progress-bar">
    <div class="progress-track">
      <div class="progress-fill"></div>
      <div class="progress-handle"></div>
    </div>
  </div>
</div>

<script>
  const progressHandle = document.querySelector(".progress-handle");
  const progressTrack = document.querySelector(".progress-track");
  const progressFill = document.querySelector(".progress-fill");
  const video = document.getElementById("video");

  // Implementering som kräver att användaren håller nere musknappen
  // men som saknar alternativ som knappar för att hoppa framåt/bakåt
  progressHandle.addEventListener("mousedown", function (e) {
    document.addEventListener("mousemove", moveProgressHandle);
    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", moveProgressHandle);
    });
  });

  function moveProgressHandle(e) {
    const trackRect = progressTrack.getBoundingClientRect();
    const position = (e.clientX - trackRect.left) / trackRect.width;

    // Uppdatera position och videotid
    if (position >= 0 && position <= 1) {
      progressFill.style.width = position * 100 + "%";
      progressHandle.style.left = position * 100 + "%";
      video.currentTime = position * video.duration;
    }
  }
</script>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.5.5 Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size.html)
- [Webbriktlinjer - R34: Gör länkar och klickbara ytor tillräckligt stora](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/gor-lankar-och-klickbara-ytor-tillrackligt-stora)
