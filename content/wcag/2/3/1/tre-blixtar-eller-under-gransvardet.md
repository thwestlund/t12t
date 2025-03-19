---
title: Tre blixtar eller under gränsvärdet
description: Webbsidor innehåller inga element som blinkar mer än tre gånger under en period av en sekund.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 3
guidelineName: Anfallsframkallande
criterionNumber: 1
---

# Framgångskriterium 2.3.1 Tre blixtar eller under gränsvärdet

## Beskrivning

Webbsidor innehåller inga element som blinkar mer än tre gånger under en period av en sekund, eller så är blixten under de allmänna blixt- och röd blixttröskelvärdena.

## Varför detta behövs

Blinkande innehåll, särskilt om det blinkar snabbare än tre gånger per sekund, kan utlösa epileptiska anfall hos personer med fotosensitiv epilepsi. I allvarliga fall kan anfallen leda till medvetslöshet eller till och med livshotande situationer.

Cirka 3-5% av personer med epilepsi har fotosensitiv epilepsi, vilket utgör ungefär 1 av 4 000 personer. Dessutom kan snabbt blinkande innehåll orsaka obehag, yrsel och illamående även hos personer utan epilepsi.

Genom att begränsa eller eliminera blinkande innehåll säkerställs att webbplatsen är säker för alla användare, inklusive de med fotosensitiv epilepsi.

## Exempel

### Exempel på bra implementering

#### Animation med långsam blinkfrekvens

```html
<style>
  .slow-blink {
    animation: slow-blink-animation 2s infinite; /* En blinkning tar 2 sekunder */
  }

  @keyframes slow-blink-animation {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
</style>

<div class="notification">
  <span class="slow-blink">⚠</span> Viktigt meddelande
</div>
```

#### Video med kontroller för att pausa innehåll

```html
<div class="video-container">
  <p class="warning">
    Denna video innehåller några sekvenser med snabba ljusväxlingar.
  </p>

  <video controls>
    <source src="presentation.mp4" type="video/mp4" />
    Din webbläsare stödjer inte videouppspelning.
  </video>

  <div class="video-controls">
    <button id="play-pause">Spela/Pausa</button>
    <button id="slower-playback">Långsammare uppspelning</button>
  </div>
</div>

<script>
  const video = document.querySelector("video");
  const playPauseButton = document.getElementById("play-pause");
  const slowerButton = document.getElementById("slower-playback");

  playPauseButton.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  slowerButton.addEventListener("click", () => {
    // Minska uppspelningshastigheten med 25%
    video.playbackRate = Math.max(0.25, video.playbackRate - 0.25);
  });
</script>
```

#### Varning och möjlighet att inaktivera animationer

```html
<div class="content-with-animations">
  <div class="animation-warning" role="alert">
    <p>
      Denna sida innehåller animationer.
      <button id="disable-animations">Inaktivera alla animationer</button>
    </p>
  </div>

  <div class="animated-content">
    <!-- Animerat innehåll -->
  </div>
</div>

<script>
  document
    .getElementById("disable-animations")
    .addEventListener("click", () => {
      // Lägg till en klass på body-elementet som inaktiverar animationer
      document.body.classList.add("reduce-motion");

      // Spara preferensen
      localStorage.setItem("reduce-motion", "true");

      // Uppdatera knappen
      const button = document.getElementById("disable-animations");
      button.textContent = "Animationer inaktiverade";
      button.disabled = true;
    });

  // Kontrollera om användaren tidigare har inaktiverat animationer
  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("reduce-motion") === "true") {
      document.body.classList.add("reduce-motion");

      const button = document.getElementById("disable-animations");
      button.textContent = "Animationer inaktiverade";
      button.disabled = true;
    }
  });
</script>

<style>
  /* CSS för att respektera användarinställningar */
  @media (prefers-reduced-motion: reduce) {
    .animated-content {
      animation: none !important;
      transition: none !important;
    }
  }

  /* CSS för att respektera användarval på sidan */
  .reduce-motion .animated-content {
    animation: none !important;
    transition: none !important;
  }
</style>
```

### Exempel på bristande implementering

#### Snabbt blinkande reklambanner

```html
<!-- Dåligt exempel - blinkande innehåll som överskrider gränsvärdet -->
<style>
  .flashing-banner {
    animation: flash 0.2s infinite; /* 5 blinkningar per sekund! */
  }

  @keyframes flash {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
</style>

<div class="flashing-banner">SPECIALERBJUDANDE! KLICKA NU!</div>
```

#### Video med blixtrande effekter utan varning

```html
<!-- Dåligt exempel - video med risk för anfall utan varning eller kontroller -->
<video autoplay loop>
  <source src="flashing-lights.mp4" type="video/mp4" />
</video>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)
- [W3C - Seizures and Photosensitive Epilepsy](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)
- [Webbriktlinjer - Orsaka inte epileptiska anfall genom blinkande](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/orsaka-inte-epileptiska-anfall-genom-blinkande)
- [Trace Research & Development Center - Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/)
