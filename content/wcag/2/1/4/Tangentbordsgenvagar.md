---
title: Tangentbordsgenvagar
description: Om en snabbtangent implementeras i innehåll med endast bokstäver, skiljetecken, siffror eller symboler finns det ett sätt att stänga av eller ändra snabbtangenten.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 1
guidelineName: Tillgängligt via tangentbord
criterionNumber: 4

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.1.4 Tangentbordsgenvagar

## Beskrivning

Om en snabbtangent i innehåll implementeras med endast bokstäver (inklusive stora och små bokstäver), skiljetecken, siffror eller symboler, gäller åtminstone ett av följande:

- **Avstängning:** Det finns en mekanism för att stänga av snabbtangenten;
- **Ändra:** Det finns en mekanism för att ändra snabbtangenten till att inkludera minst en icke-utskrivbar tangent (t.ex. Ctrl, Alt, osv.);
- **Aktiv endast vid fokus:** Snabbtangenten för en komponent i användargränssnittet är endast aktiv när komponenten har fokus.

## Varför detta behövs

Personer som använder röstigenkänningsprogram eller de som har motoriska nedsättningar kan av misstag aktivera snabbtangenter när de dikterar text eller när de upplever ofrivilliga rörelser. Detta kan leda till oavsiktliga handlingar.

Till exempel kan en person som dikterar en text säga "a, b, c" och om "c" är en snabbtangent på webbplatsen kan detta oavsiktligt utlösa en funktion.

Personer med tremor eller spasticitet kan också oavsiktligt trycka på tangenter, vilket kan aktivera snabbtangenter som inte var avsedda.

Genom att tillåta användare att stänga av eller anpassa snabbtangenter, eller genom att säkerställa att de endast aktiveras med modifierartangenter (som Ctrl eller Alt) eller när ett element har fokus, minimeras risken för oavsiktlig aktivering.

## Exempel

### Exempel på bra implementering

#### Snabbtangenter med modifierartangent

```html
<div class="video-player" tabindex="0">
  <video src="video.mp4" controls></video>
  <div class="keyboard-shortcuts">
    <h3>Tangentbordsgenvägar</h3>
    <ul>
      <li><kbd>Ctrl</kbd> + <kbd>P</kbd>: Spela/Pausa</li>
      <li><kbd>Ctrl</kbd> + <kbd>M</kbd>: Ljud av/på</li>
      <li><kbd>Ctrl</kbd> + <kbd>F</kbd>: Fullskärm</li>
    </ul>
  </div>
</div>

<script>
  const player = document.querySelector(".video-player");
  const video = player.querySelector("video");

  document.addEventListener("keydown", (e) => {
    // Snabbtangenter använder alla Ctrl-modifierare
    if (e.ctrlKey) {
      switch (e.key) {
        case "p":
          if (video.paused) video.play();
          else video.pause();
          e.preventDefault();
          break;
        case "m":
          video.muted = !video.muted;
          e.preventDefault();
          break;
        case "f":
          if (document.fullscreenElement) document.exitFullscreen();
          else video.requestFullscreen();
          e.preventDefault();
          break;
      }
    }
  });
</script>
```

#### Snabbtangenter som endast är aktiva vid fokus

```html
<div class="image-gallery" tabindex="0">
  <div class="gallery-info">
    <p>
      Använd vänster/höger piltangenter för att navigera när galleriet har
      fokus.
    </p>
  </div>
  <div class="gallery-container">
    <img src="image1.jpg" alt="Bild 1" id="current-image" />
  </div>
  <div class="gallery-controls">
    <button id="prev">Föregående</button>
    <button id="next">Nästa</button>
  </div>
</div>

<script>
  const gallery = document.querySelector(".image-gallery");

  // Snabbtangenter fungerar endast när galleriet har fokus
  gallery.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      showPreviousImage();
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      showNextImage();
      e.preventDefault();
    }
  });

  function showPreviousImage() {
    // Kod för att visa föregående bild
  }

  function showNextImage() {
    // Kod för att visa nästa bild
  }
</script>
```

#### Inställningar för att anpassa eller inaktivera snabbtangenter

```html
<div class="editor-container">
  <div class="editor-settings">
    <h3>Inställningar</h3>
    <div class="settings-group">
      <h4>Tangentbordsgenvägar</h4>
      <label>
        <input type="checkbox" id="enable-shortcuts" checked />
        Aktivera tangentbordsgenvägar
      </label>
      <button id="customize-shortcuts">Anpassa genvägar</button>
    </div>
  </div>

  <div class="editor" tabindex="0" contenteditable="true">
    Textredigerare med genvägar
  </div>
</div>

<script>
  const editor = document.querySelector(".editor");
  const enableShortcutsCheckbox = document.getElementById("enable-shortcuts");
  let shortcutsEnabled = true;

  enableShortcutsCheckbox.addEventListener("change", (e) => {
    shortcutsEnabled = e.target.checked;
  });

  editor.addEventListener("keydown", (e) => {
    if (!shortcutsEnabled) return;

    // Implementera genvägar här
    if (e.key === "b" && e.ctrlKey) {
      // Fet text
      document.execCommand("bold", false);
      e.preventDefault();
    }
  });
</script>
```

### Exempel på bristande implementering

#### Snabbtangenter utan modifierartangent som inte kan inaktiveras

```html
<!-- Dåligt exempel - enkelttangenter utan möjlighet att inaktivera -->
<div class="player">
  <video src="video.mp4"></video>
  <p>Genvägar: P: spela/pausa, M: ljud av/på, F: fullskärm</p>
</div>

<script>
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "p":
        // Spela/pausa
        break;
      case "m":
        // Ljud av/på
        break;
      case "f":
        // Fullskärm
        break;
    }
  });
</script>
```

#### Globala snabbtangenter utan inställningar

```html
<!-- Dåligt exempel - globala snabbtangenter som alltid är aktiva -->
<header>
  <nav>
    <p>Navigera snabbt: tryck H för hem, S för sök, C för kontakt</p>
  </nav>
</header>

<script>
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "h":
        window.location.href = "/";
        break;
      case "s":
        window.location.href = "/search";
        break;
      case "c":
        window.location.href = "/contact";
        break;
    }
  });
</script>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html)
- [ARIA Authoring Practices - Keyboard Shortcuts](https://www.w3.org/TR/wai-aria-practices/#keyboard)
- [MDN Web Docs - KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [W3C WAI - How to Meet Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/quickref/#character-key-shortcuts)
