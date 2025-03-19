---
title: Samtida inmatningsmekanismer
description: Webbinnehållet begränsar inte användningen av inmatningsmodaliteter tillgängliga på en plattform.
level: AAA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 5
guidelineName: Inmatningsmetoder
criterionNumber: 6

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.5.6 Samtida inmatningsmekanismer

## Beskrivning

Webbinnehållet begränsar inte användningen av inmatningsmodaliteter tillgängliga på en plattform förutom där begränsningen är nödvändig, krävs för att säkerställa säkerheten i innehållet, eller krävs för att respektera användarinställningar.

## Varför detta behövs

Användare interagerar med digitalt innehåll på många olika sätt beroende på deras förmågor, preferenser eller situationella begränsningar. Vissa använder mus, andra tangentbord, pekskärm, röststyrning eller kombinationer av dessa. Genom att inte begränsa vilka inmatningsmekanismer som kan användas säkerställs att alla användare kan interagera med innehållet på det sätt som fungerar bäst för dem.

## Exempel

### Exempel på bra implementering

#### Webbapplikation som stödjer flera inmatningsmetoder

```html
<div id="drawing-app">
  <canvas
    id="canvas"
    width="800"
    height="600"
    tabindex="0"
    role="application"
    aria-label="Rityta"
  ></canvas>

  <div class="controls">
    <button id="pen-tool" aria-pressed="true">Penna</button>
    <button id="eraser-tool" aria-pressed="false">Suddgummi</button>
    <button id="clear-canvas">Rensa</button>
  </div>
</div>

<script>
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let isDrawing = false;
  let currentTool = "pen";

  // Stöd för mushändelser
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);

  // Stöd för pekskärmshändelser
  canvas.addEventListener("touchstart", handleTouch);
  canvas.addEventListener("touchmove", handleTouch);
  canvas.addEventListener("touchend", stopDrawing);

  // Stöd för tangentbordshändelser
  canvas.addEventListener("keydown", handleKeyboard);

  function startDrawing(e) {
    isDrawing = true;
    draw(e);
  }

  function draw(e) {
    if (!isDrawing) return;

    // Ritfunktionalitet här
  }

  function stopDrawing() {
    isDrawing = false;
  }

  function handleTouch(e) {
    // Förhindra skrollning vid pekskärmsinteraktion
    e.preventDefault();

    const touch = e.touches[0];
    const mouseEvent = new MouseEvent(
      e.type === "touchstart" ? "mousedown" : "mousemove",
      {
        clientX: touch.clientX,
        clientY: touch.clientY,
      }
    );

    canvas.dispatchEvent(mouseEvent);
  }

  function handleKeyboard(e) {
    // Tillhandahåller tangentbordsbaserade alternativ för ritverktyg
    switch (e.key) {
      case "p":
        // Aktivera pennan
        document.getElementById("pen-tool").click();
        break;
      case "e":
        // Aktivera suddgummit
        document.getElementById("eraser-tool").click();
        break;
      case "c":
        // Rensa canvas
        document.getElementById("clear-canvas").click();
        break;
      case "ArrowUp":
      case "ArrowDown":
      case "ArrowLeft":
      case "ArrowRight":
        // Flytta pekaren med piltangenter
        moveCursor(e.key);
        break;
      case "Enter":
      case " ":
        // Rita vid aktuell position
        toggleDrawAtCursor();
        break;
    }
  }

  // Funktioner för att flytta markör och rita med tangentbord
  function moveCursor(direction) {
    // Implementering för att flytta markören med tangentbordet
  }

  function toggleDrawAtCursor() {
    // Implementering för att rita/inte rita vid markören
  }
</script>
```

#### Formulär med stöd för olika inmatningsmetoder

```html
<form>
  <div class="form-field">
    <label for="date">Datum:</label>

    <!-- Datuminmatning som stödjer olika metoder -->
    <input type="date" id="date" name="date" value="2023-06-15" />

    <!-- Alternativ datuminmatning för äldre webbläsare eller användare som föredrar text -->
    <input
      type="text"
      id="date-text"
      name="date-text"
      placeholder="ÅÅÅÅ-MM-DD"
      pattern="\d{4}-\d{2}-\d{2}"
      aria-label="Ange datum i textformat"
      hidden
    />

    <button type="button" id="toggle-date-input">Byt inmatningsmetod</button>
  </div>

  <div class="form-field">
    <label for="color">Välj färg:</label>

    <!-- Färgväljare som stödjer olika metoder -->
    <input type="color" id="color" name="color" value="#3366cc" />

    <!-- Textinmatning för hexkod -->
    <input
      type="text"
      id="color-hex"
      name="color-hex"
      placeholder="#RRGGBB"
      pattern="#[0-9A-Fa-f]{6}"
      aria-label="Ange färg som hexkod"
    />
  </div>

  <button type="submit">Skicka</button>
</form>

<script>
  // Synkronisera de olika inmatningsmetoderna
  const dateInput = document.getElementById("date");
  const dateTextInput = document.getElementById("date-text");
  const toggleDateButton = document.getElementById("toggle-date-input");

  const colorInput = document.getElementById("color");
  const colorHexInput = document.getElementById("color-hex");

  // Hantera byte mellan datuminmatningsmetoder
  toggleDateButton.addEventListener("click", function () {
    if (dateInput.hidden) {
      dateInput.hidden = false;
      dateTextInput.hidden = true;
      dateInput.value = dateTextInput.value;
    } else {
      dateInput.hidden = true;
      dateTextInput.hidden = false;
      dateTextInput.value = dateInput.value;
    }
  });

  // Synkronisera färgväljare och hexkodinmatning
  colorInput.addEventListener("input", function () {
    colorHexInput.value = this.value;
  });

  colorHexInput.addEventListener("input", function () {
    if (this.checkValidity()) {
      colorInput.value = this.value;
    }
  });
</script>
```

### Exempel på bristande implementering

#### Webbapplikation som endast fungerar med mus

```html
<div id="drag-drop-app">
  <div class="item" onmousedown="startDrag(event)" id="item1">Objekt 1</div>
  <div class="item" onmousedown="startDrag(event)" id="item2">Objekt 2</div>
  <div class="dropzone">Släpp här</div>
</div>

<script>
  // Använder endast mushändelser utan alternativ för tangentbord
  function startDrag(event) {
    const item = event.target;

    // Sätt upp dra-funktionalitet med mushändelser
    document.onmousemove = function (e) {
      item.style.left = e.clientX + "px";
      item.style.top = e.clientY + "px";
    };

    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
      checkDropZone(item);
    };
  }

  function checkDropZone(item) {
    // Kontrollera om objektet har släppts i dropzonen
  }

  // Inga alternativ för tangentbord eller andra inmatningsmetoder
</script>
```

#### Mobilwebbapp som inaktiverar zoom

```html
<head>
  <!-- Inaktiverar zoom på mobila enheter -->
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
  />
</head>

<body>
  <div class="app-container">
    <!-- Appinnehåll -->
  </div>

  <script>
    // Förhindrar pinch-to-zoom med händelsehantering
    document.addEventListener(
      "touchmove",
      function (e) {
        if (e.scale !== 1) {
          e.preventDefault();
        }
      },
      { passive: false }
    );

    // Förhindrar dubbeltryck för zoom
    let lastTapTime = 0;
    document.addEventListener("touchend", function (e) {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTapTime;

      if (tapLength < 500 && tapLength > 0) {
        e.preventDefault();
      }

      lastTapTime = currentTime;
    });
  </script>
</body>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.5.6 Concurrent Input Mechanisms](https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms.html)
- [Webbriktlinjer - R6: Se till att det går att öka avstånd mellan tecken, rader, stycken och ord](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/se-till-att-det-gar-att-oka-avstand-mellan-tecken-rader-stycken-och-ord)
