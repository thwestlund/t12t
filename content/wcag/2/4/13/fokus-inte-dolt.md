---
title: Fokus inte dolt (förbättrad)
description: När ett användargränssnittskomponent får tangentbordsfokus, döljs komponenten inte helt.
level: AA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 4
guidelineName: Navigerbart
criterionNumber: 13
---

# Framgångskriterium 2.4.13 Fokus inte dolt (förbättrad)

## Beskrivning

När ett användargränssnittskomponent får tangentbordsfokus, döljs komponenten inte helt av annat innehåll.

## Varför detta behövs

När användare navigerar med tangentbord eller andra sekventiella navigationshjälpmedel är det avgörande att de kan se vilket element som har fokus. Om fokuserade element döljs helt av annat innehåll, som överlagrande banners, sticky headers, fasta navigationsmenyer eller modala dialogrutor, kan användaren bli förvirrad och tappa orienteringen på sidan.

Detta kriterium är särskilt viktigt för:

- Personer med motoriska funktionsnedsättningar som använder tangentbord för navigering
- Personer med kognitiva funktionsnedsättningar som förlitar sig på visuella indikationer för att förstå var de befinner sig
- Personer med synnedsättningar som använder förstoringsverktyg i kombination med tangentbord
- Personer som använder skärmläsare och periodvis behöver visuell återkoppling

Till skillnad från WCAG 2.1 där detta problem indirekt hanteras, specificerar detta kriterium uttryckligen att fokuserade element inte får döljas helt.

## Exempel

### Exempel på bra implementering

#### Sticky header som justerar position vid fokus

```html
<style>
  .sticky-header {
    position: sticky;
    top: 0;
    background-color: #fff;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  /* När ett element får fokus under headern, kontrollera om det är synligt */
  *:focus {
    outline: 2px solid #0066cc;
    /* Justera scrollposition om elementet är nära toppen */
    scroll-margin-top: 100px;
  }
</style>

<header class="sticky-header">
  <h1>Företagsnamn</h1>
  <nav>
    <ul>
      <li><a href="/">Hem</a></li>
      <li><a href="/produkter">Produkter</a></li>
      <li><a href="/om-oss">Om oss</a></li>
      <li><a href="/kontakt">Kontakt</a></li>
    </ul>
  </nav>
</header>

<main>
  <!-- Huvudinnehåll med fokuserbara element -->
</main>

<script>
  // Säkerställ att fokuserade element är synliga
  document.addEventListener("focusin", (event) => {
    // Kontrollera om elementet är synligt i viewporten
    const rect = event.target.getBoundingClientRect();
    const headerHeight = document.querySelector(".sticky-header").offsetHeight;

    // Om elementet är delvis dolt under headern
    if (rect.top < headerHeight && rect.bottom > 0) {
      // Scrolla för att göra elementet fullt synligt
      window.scrollBy({
        top: rect.top - headerHeight - 10,
        behavior: "smooth",
      });
    }
  });
</script>
```

#### Modal-dialog som hanterar fokus korrekt

```html
<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background-color: #fff;
    padding: 2rem;
    border-radius: 4px;
    width: 80%;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
  }

  /* Säkerställ att fokuserade element i modalen är väl synliga */
  .modal-content *:focus {
    outline: 3px solid #0066cc;
    outline-offset: 2px;
  }
</style>

<button id="open-modal">Öppna dialog</button>

<div id="modal" class="modal" hidden>
  <div
    class="modal-content"
    role="dialog"
    aria-labelledby="modal-title"
    aria-modal="true"
  >
    <h2 id="modal-title">Dialogruta</h2>
    <p>Innehåll i dialogrutan...</p>
    <form>
      <div>
        <label for="name">Namn:</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label for="email">E-post:</label>
        <input type="email" id="email" />
      </div>
      <div class="button-group">
        <button type="submit">Skicka</button>
        <button type="button" id="close-modal">Avbryt</button>
      </div>
    </form>
  </div>
</div>

<script>
  const modal = document.getElementById("modal");
  const openButton = document.getElementById("open-modal");
  const closeButton = document.getElementById("close-modal");
  let previousFocus;

  openButton.addEventListener("click", () => {
    // Spara element som hade fokus
    previousFocus = document.activeElement;

    // Visa modalen
    modal.hidden = false;

    // Sätt fokus på första fokuserbara element i modalen
    const firstFocusable = modal.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (firstFocusable) {
      firstFocusable.focus();
    }

    // Fånga och håll fokus inom modalen
    modal.addEventListener("keydown", trapFocus);
  });

  closeButton.addEventListener("click", closeModal);

  function closeModal() {
    modal.hidden = true;
    modal.removeEventListener("keydown", trapFocus);

    // Återställ fokus
    if (previousFocus) {
      previousFocus.focus();
    }
  }

  function trapFocus(event) {
    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key !== "Tab") return;

    // Identifiera alla fokuserbara element i modalen
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Håll fokus inom modalen
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
</script>
```

#### Chattwdget som inte döljer fokuserade element

```html
<style>
  .chat-widget {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  .chat-header {
    padding: 10px 15px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .chat-body {
    max-height: 300px;
    overflow-y: auto;
    padding: 15px;
  }

  .chat-input {
    padding: 10px;
    border-top: 1px solid #ddd;
  }

  /* När ett element på sidan får fokus, kontrollera om chatten döljer det */
  *:focus:not(.chat-widget *) {
    position: relative;
    z-index: 101; /* Tillfälligt högre z-index än chatten */
  }
</style>

<div class="chat-widget">
  <div class="chat-header">
    <h3>Kundtjänst</h3>
    <button id="toggle-chat">Minimera</button>
  </div>
  <div class="chat-body">
    <p>Välkommen till vår chatt!</p>
  </div>
  <div class="chat-input">
    <input type="text" placeholder="Skriv ditt meddelande..." />
    <button>Skicka</button>
  </div>
</div>

<script>
  // När ett element får fokus, kontrollera om det överlappar med chatten
  document.addEventListener("focusin", (event) => {
    if (event.target.closest(".chat-widget")) {
      // Om fokus är i chatten, gör inget
      return;
    }

    const chatWidget = document.querySelector(".chat-widget");
    const focusedRect = event.target.getBoundingClientRect();
    const chatRect = chatWidget.getBoundingClientRect();

    // Kontrollera om det fokuserade elementet överlappar med chatten
    const overlapsHorizontally =
      focusedRect.right > chatRect.left && focusedRect.left < chatRect.right;

    const overlapsVertically =
      focusedRect.bottom > chatRect.top && focusedRect.top < chatRect.bottom;

    if (overlapsHorizontally && overlapsVertically) {
      // Elementet döljs av chatten, justera positionering
      chatWidget.style.opacity = "0.2";

      // Återställ efter att fokus flyttas
      const resetChat = () => {
        chatWidget.style.opacity = "1";
        event.target.removeEventListener("blur", resetChat);
      };

      event.target.addEventListener("blur", resetChat);
    }
  });
</script>
```

### Exempel på bristande implementering

#### Fast sidhuvud som döljer fokuserat innehåll

```html
<!-- Dåligt exempel - sticky header som döljer fokuserade element -->
<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  .content {
    margin-top: 80px; /* För att undvika att innehåll hamnar under headern */
    padding: 20px;
  }

  /* Ingen mekanism för att säkerställa att fokuserade element är synliga */
</style>

<div class="header">
  <h1>Webbplatsens namn</h1>
  <nav>
    <!-- Navigation -->
  </nav>
</div>

<div class="content">
  <!-- Innehåll som kan döljas av header när det får fokus -->
  <form>
    <div>
      <label for="field1">Fält 1:</label>
      <input id="field1" type="text" />
    </div>
    <!-- Flera fält... -->
    <div>
      <label for="field10">Fält 10:</label>
      <input id="field10" type="text" />
    </div>
  </form>
</div>
```

#### Cookie-banner som döljer fokuserade element

```html
<!-- Dåligt exempel - cookie banner som döljer fokuserade element -->
<style>
  .cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f5f5f5;
    padding: 15px;
    border-top: 1px solid #ddd;
    z-index: 1000;
  }

  /* Ingen mekanism för att hantera fokus som hamnar bakom bannern */
</style>

<div class="cookie-banner">
  <p>Denna webbplats använder cookies för att förbättra din upplevelse.</p>
  <button>Acceptera alla</button>
  <button>Endast nödvändiga</button>
  <button>Anpassa inställningar</button>
</div>

<main>
  <!-- Innehåll där fokuserade element kan döljas av cookie-bannern -->
</main>
```

#### Modal som ej hanterar dolda fokuserade element

```html
<!-- Dåligt exempel - modal som inte tar hänsyn till synligt fokus -->
<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    z-index: 101;
  }
</style>

<div class="overlay">
  <div class="modal">
    <h2>Popup-meddelande</h2>
    <p>Information i popupen...</p>
    <button id="close-popup">Stäng</button>
  </div>
</div>

<main>
  <!-- Huvudinnehåll som är helt dolt av modalen -->
  <a href="/sida1">Länk 1</a>
  <a href="/sida2">Länk 2</a>

  <!-- Ingen kodlogik för att hantera fokus under modalen -->
</main>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.4.13 Focus Not Obscured (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html)
- [W3C WAI - Understanding Focus](https://www.w3.org/WAI/fundamentals/accessibility-principles/#examples-focus)
- [MDN Web Docs - :focus-visible pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
- [Deque University - Visible Focus](https://dequeuniversity.com/checklists/web/keyboard-focus)
