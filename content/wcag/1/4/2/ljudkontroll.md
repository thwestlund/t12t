---
title: Ljudkontroll
description: Om ljud spelas automatiskt på en webbsida i mer än 3 sekunder, finns det antingen en mekanism för att pausa eller stoppa ljudet, eller en mekanism för att kontrollera ljudvolymen oberoende av systemets övergripande volymkontroll.
level: A
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 2
---

# Framgångskriterium 1.4.2 Ljudkontroll

## Beskrivning

Om något ljud på en webbsida spelas upp automatiskt i mer än 3 sekunder, ska det antingen finnas en mekanism för att pausa eller stoppa ljudet, eller en mekanism för att kontrollera ljudvolymen oberoende av systemets övergripande volymkontroll.

## Varför detta behövs

Automatiskt uppspelat ljud kan vara störande för många användare, men är särskilt problematiskt för skärmläsaranvändare där det kan störa skärmläsarens tal. Det kan också vara ett stort problem för personer med vissa kognitiva svårigheter som har svårt att filtrera bort bakgrundsljud. Genom att ge användaren kontroll över ljuduppspelning respekterar man användarens preferenser och förbättrar användbarheten för alla.

## Exempel

### Exempel på bra implementering

#### Audio med kontroller

```html
<audio autoplay controls>
  <source src="background-music.mp3" type="audio/mpeg" />
  Din webbläsare stödjer inte ljudelementet.
</audio>
```

#### Video med ljudkontroll

```html
<video autoplay controls>
  <source src="presentation.mp4" type="video/mp4" />
  Din webbläsare stödjer inte videoelementet.
</video>
```

#### JavaScript-baserad ljuduppspelning med anpassade kontroller

```html
<div>
  <button id="playPauseButton" aria-label="Pausa bakgrundsljud">Pausa</button>
  <label for="volumeControl">Volym:</label>
  <input
    type="range"
    id="volumeControl"
    min="0"
    max="1"
    step="0.1"
    value="0.5"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="50"
  />
</div>

<script>
  const audio = new Audio("background-music.mp3");
  audio.loop = true;
  audio.volume = 0.5;

  // Starta uppspelning först efter användarinteraktion (bättre praxis)
  document.addEventListener(
    "click",
    function () {
      if (audio.paused) {
        audio.play();
      }
    },
    { once: true }
  );

  const playPauseButton = document.getElementById("playPauseButton");
  const volumeControl = document.getElementById("volumeControl");

  playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      this.textContent = "Pausa";
      this.setAttribute("aria-label", "Pausa bakgrundsljud");
    } else {
      audio.pause();
      this.textContent = "Spela";
      this.setAttribute("aria-label", "Spela bakgrundsljud");
    }
  });

  volumeControl.addEventListener("input", function () {
    audio.volume = this.value;
    this.setAttribute("aria-valuenow", Math.round(this.value * 100));
  });
</script>
```

### Exempel på bristande implementering

#### Automatiskt uppspelat ljud utan kontroller

```html
<audio autoplay>
  <source src="background-music.mp3" type="audio/mpeg" />
</audio>
```

#### Bakgrundsljud med JavaScript utan kontroller

```html
<script>
  window.onload = function () {
    const audio = new Audio("background-music.mp3");
    audio.loop = true;
    audio.play();
  };
</script>
```

#### Video med automatiskt ljud utan kontroller

```html
<video autoplay>
  <source src="presentation.mp4" type="video/mp4" />
</video>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.2 Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)
- [Webbriktlinjer - R132: Ge användarna möjlighet att pausa eller stänga av ljud och rörelser](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/ge-anvandarna-mojlighet-att-pausa-eller-stanga-av-ljud-och-rorelser)
