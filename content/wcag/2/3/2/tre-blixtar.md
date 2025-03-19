---
title: Tre blixtar
description: Webbsidor innehåller inga element som blinkar mer än tre gånger under en period på en sekund.
level: AAA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 3
guidelineName: Anfallsframkallande
criterionNumber: 2

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.3.2 Tre blixtar

## Beskrivning

Webbsidor innehåller inga element som blinkar mer än tre gånger under en period på en sekund.

## Varför detta behövs

Till skillnad från kriterium 2.3.1 (nivå A), som tillåter blinkande innehåll om det är under ett visst gränsvärde för ljusstyrka och kontrast, eliminerar detta kriterium alla typer av snabbt blinkande innehåll, oavsett ljusstyrka.

Även blinkande innehåll som inte utlöser epileptiska anfall kan orsaka distraktion, obehag eller förvirring för många användare, särskilt för personer med kognitiva funktionsnedsättningar, uppmärksamhetsstörningar, eller vestibulära störningar (som påverkar balanssinnet).

Genom att helt eliminera snabbt blinkande innehåll skapas en mer bekväm och säker användarupplevelse för en bredare användargrupp, inklusive:

- Personer med vestibulära störningar som kan bli yra eller illamående av blinkande innehåll
- Personer med migrän som kan utlösas av visuell stimulering
- Personer med ADHD som kan bli extra distraherade av blinkande element
- Äldre användare som kan bli mer påverkade av störande visuella element

## Exempel

### Exempel på bra implementering

#### Statisk uppmärksamhetsindikatorer

```html
<style>
  .highlight {
    background-color: #fffacd;
    border-left: 4px solid #ffd700;
    padding: 1em;
    margin: 1em 0;
  }
</style>

<div class="highlight">
  <h3>Viktigt meddelande</h3>
  <p>
    Denna information kräver din uppmärksamhet, men presenteras med statiska
    visuella indikatorer istället för att blinka.
  </p>
</div>
```

#### Progressionsindikator med mjuk animation

```html
<style>
  .progress-bar {
    width: 100%;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background-color: #4caf50;
    width: 0%;
    /* Mjuk övergång istället för blinkande */
    transition: width 1.5s ease-in-out;
  }
</style>

<div class="upload-container">
  <h3>Laddar upp fil...</h3>
  <div class="progress-bar">
    <div class="progress-fill" id="progress"></div>
  </div>
  <p id="status">Förbereder uppladdning...</p>
</div>

<script>
  // Simulera uppladdningsprogression
  let progress = 0;
  const progressElement = document.getElementById("progress");
  const statusElement = document.getElementById("status");

  const interval = setInterval(() => {
    if (progress < 100) {
      progress += 10;
      progressElement.style.width = progress + "%";

      if (progress === 100) {
        statusElement.textContent = "Uppladdning klar!";
        clearInterval(interval);
      } else {
        statusElement.textContent = `Laddar upp: ${progress}% klart...`;
      }
    }
  }, 800);
</script>
```

#### Medieuppspelare med förinställd reduktion av flimrande innehåll

```html
<div class="video-player">
  <h3>Videouppspelare med säkerhetsfilter</h3>

  <div class="player-controls">
    <label>
      <input type="checkbox" id="flicker-reduction" checked />
      Reducera blinkande innehåll (rekommenderat)
    </label>
  </div>

  <video id="video" controls>
    <source src="presentation.mp4" type="video/mp4" />
    Din webbläsare stödjer inte videouppspelning.
  </video>
</div>

<script>
  const video = document.getElementById("video");
  const flickerReduction = document.getElementById("flicker-reduction");

  // Applicera flimmerreduceringsfilter när videon laddas
  video.addEventListener("loadedmetadata", () => {
    applyFlickerReduction();
  });

  // Uppdatera filter när användaren ändrar inställningen
  flickerReduction.addEventListener("change", () => {
    applyFlickerReduction();
  });

  function applyFlickerReduction() {
    if (flickerReduction.checked) {
      // Applicera CSS-filter för att minska flimmer
      video.style.filter = "brightness(0.95) contrast(0.95)";
      // Minska uppspelningshastigheten något
      video.playbackRate = 0.95;
    } else {
      video.style.filter = "none";
      video.playbackRate = 1.0;
    }
  }
</script>
```

### Exempel på bristande implementering

#### Uppmärksamhetsanimetion med snabb blinkning

```html
<!-- Dåligt exempel - snabb blinkning för att dra uppmärksamhet -->
<style>
  .attention-blink {
    animation: blink-animation 0.3s steps(2) infinite;
  }

  @keyframes blink-animation {
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
  <span class="attention-blink">⚠</span>
  Glöm inte att spara dina ändringar innan du fortsätter!
</div>
```

#### Bakgrundsanimation med snabba färgväxlingar

```html
<!-- Dåligt exempel - bakgrund med snabb färgövergång -->
<style>
  .rapid-background {
    background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff);
    background-size: 200% 200%;
    animation: gradient-shift 0.3s ease infinite;
    padding: 20px;
    color: white;
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>

<div class="rapid-background">
  <h2>Vårt specialerbjudande!</h2>
  <p>Innehåll med distraherande, snabbt skiftande bakgrund.</p>
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.3.2 Three Flashes](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes.html)
- [W3C WAI - Seizures and Physical Reactions](https://www.w3.org/WAI/WCAG21/Understanding/seizures-and-physical-reactions.html)
- [Webbriktlinjer - Skapa inte innehåll som kan orsaka anfall](https://www.digg.se/riktlinjer/webbriktlinjer/utforma-innehallet/skapa-inte-innehall-som-kan-orsaka-anfall)
- [Accessible Social - Guide to Safe Web Animation](https://accessible-social.com/blog/guide-to-safe-web-animation/)
