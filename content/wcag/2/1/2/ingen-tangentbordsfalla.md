---
title: Ingen tangentbordsfälla
description: Om tangentbordsfokus kan flyttas till en komponent med hjälp av ett tangentbordsgränssnitt, kan fokus flyttas bort från komponenten med enbart tangentbordsgränssnitt.
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

# Framgångskriterium 2.1.2 Ingen tangentbordsfälla

## Beskrivning

Om tangentbordsfokus kan flyttas till en komponent med hjälp av ett tangentbordsgränssnitt, kan fokus flyttas bort från komponenten med enbart tangentbordsgränssnitt, och om det kräver mer än overskrivna pilar eller tabbtangenter eller andra standardmetoder för att avsluta, informeras användaren om metoden för att flytta fokus.

## Varför detta behövs

Personer som enbart använder tangentbord för att navigera behöver kunna komma till och från alla interaktiva delar på en webbsida. När en användare fastnar i en "tangentbordsfälla" kan de inte fortsätta navigera på sidan.

Exempel på tangentbordsfällor inkluderar:

- Modala dialogrutor utan tydliga instruktioner om hur man stänger dem med tangentbordet
- Inbäddade applikationer eller medieuppspelare som fångar upp tangentbordsfokus
- Formulär som inte går att lämna med tangentbord

Att säkerställa att alla användare kan navigera på hela webbplatsen med tangentbord är grundläggande för tillgänglighet och det här kriteriet förhindrar en av de allvarligaste hindren för tangentbordsnavigation.

## Exempel

### Exempel på bra implementering

#### Modal dialog med tydlig escape-mekanism

```html
<button id="openModal">Öppna dialog</button>

<div
  id="modal"
  role="dialog"
  aria-labelledby="modalTitle"
  aria-modal="true"
  hidden
>
  <div class="modal-content">
    <h2 id="modalTitle">Viktig information</h2>
    <p>Innehåll i dialogrutan...</p>
    <button id="closeModal">Stäng</button>
  </div>
</div>

<script>
  const modal = document.getElementById("modal");
  const openButton = document.getElementById("openModal");
  const closeButton = document.getElementById("closeModal");

  openButton.addEventListener("click", () => {
    modal.hidden = false;
    closeButton.focus(); // Flytta fokus in i dialogen
  });

  closeButton.addEventListener("click", () => {
    modal.hidden = true;
    openButton.focus(); // Återställ fokus till öppningsknappen
  });

  // Stäng med Escape-tangenten
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.hidden = true;
      openButton.focus();
    }
  });
</script>
```

#### Inbäddad mediaspelare med instruktioner

```html
<div
  class="video-player"
  tabindex="0"
  role="application"
  aria-label="Videospelare"
>
  <p class="keyboard-instructions">
    Tryck på Tab för att navigera mellan kontroller. Tryck på Escape för att
    lämna spelaren.
  </p>
  <div class="player-controls">
    <button aria-label="Spela">▶</button>
    <button aria-label="Pausa">⏸</button>
    <button aria-label="Stoppa">⏹</button>
  </div>
  <video src="video.mp4"></video>
</div>

<script>
  const player = document.querySelector(".video-player");

  player.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      // Släpp fokus och gå till nästa fokuserbara element
      const nextFocusable = findNextFocusableElement(player);
      if (nextFocusable) {
        nextFocusable.focus();
      }
    }
  });

  function findNextFocusableElement(currentElement) {
    // Kod för att hitta nästa fokuserbara element
  }
</script>
```

### Exempel på bristande implementering

#### Dialog utan tangentbordsstängning

```html
<!-- Dåligt exempel - en dialogruta som inte kan stängas med tangentbord -->
<div class="modal">
  <div class="modal-content">
    <h2>Viktig information</h2>
    <p>Innehåll i dialogrutan...</p>
    <!-- Ingen stängknapp, ingen Escape-hantering -->
  </div>
</div>
```

#### Inbäddad applikation som fångar fokus

```html
<!-- Dåligt exempel - en inbäddad applikation som fångar tangentbordsfokus -->
<iframe src="external-app.html" title="Extern applikation">
  <!-- Ingen mekanism för att lämna iframe med tangentbordet -->
</iframe>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [WebAIM - Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [Webbriktlinjer - Se till att användaren kan styra webb-TV, ljud och andra medier](https://www.digg.se/kunskap-och-stod/digital-tillganglighet/webbriktlinjer-for-tillganglighet/riktlinjer/se-till-att-anvandaren-kan-styra-webb-tv-ljud-och-andra-medier)
- [MDN Web Docs - Keyboard-navigable JavaScript widgets](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
