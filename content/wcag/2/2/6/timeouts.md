---
title: Timeouts
description: Användare varnas för varaktigheten av användarens inaktivitet som kan orsaka dataförlust, såvida inte data bevaras i mer än 20 timmar när användaren inte vidtar några åtgärder.
level: AAA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 2
guidelineName: Tillräckligt med tid
criterionNumber: 6

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.2.6 Timeouts

## Beskrivning

Användare varnas för varaktigheten av användarens inaktivitet som kan orsaka dataförlust, såvida inte data bevaras i mer än 20 timmar när användaren inte vidtar några åtgärder.

## Varför detta behövs

Många användare, särskilt personer med kognitiva eller inlärningssvårigheter, kan behöva ta pauser under längre interaktioner med en webbplats. Om data förloras på grund av att en session löper ut under en inaktivitetsperiod utan varning, kan det leda till frustration, upprepat arbete och i vissa fall oförmåga att slutföra viktiga uppgifter.

Timeout-varningar är särskilt viktiga för:

- Personer med kognitiva funktionsnedsättningar som kan behöva längre tid att bearbeta information
- Personer med uppmärksamhetsstörningar som kan bli distraherade och lämna en uppgift tillfälligt
- Personer med motoriska funktionsnedsättningar som behöver längre tid för att interagera med gränssnitt
- Äldre användare som kan arbeta i långsammare takt
- Alla användare som kan behöva pausa sitt arbete för att hantera avbrott

Genom att tydligt informera om timeout-varaktighet innan användaren börjar en process, kan de bättre planera sin interaktion och undvika dataförlust.

## Exempel

### Exempel på bra implementering

#### Formulär med tydlig timeout-information

```html
<form action="/submit-application" method="post">
  <div class="form-header">
    <h2>Ansökningsformulär</h2>
    <div class="timeout-info" role="status">
      <p>
        <strong>OBS:</strong> Din session kommer att vara aktiv i
        <span id="timeout-duration">60 minuter</span> från senaste aktivitet. Om
        du behöver mer tid, klicka på "Spara utkast" för att spara ditt arbete.
      </p>
    </div>
  </div>

  <!-- Formulärfält... -->

  <div class="form-actions">
    <button type="submit">Skicka in</button>
    <button type="button" id="save-draft">Spara utkast</button>
  </div>
</form>

<div
  id="timeout-warning"
  class="modal"
  hidden
  role="alertdialog"
  aria-labelledby="warning-title"
  aria-describedby="warning-desc"
>
  <div class="modal-content">
    <h3 id="warning-title">Session håller på att löpa ut</h3>
    <p id="warning-desc">
      Din session kommer att löpa ut om
      <span id="timeout-countdown">5 minuter</span> på grund av inaktivitet.
      Vill du fortsätta arbeta?
    </p>
    <div class="modal-actions">
      <button id="continue-session">Fortsätt sessionen</button>
      <button id="save-and-exit">Spara och avsluta</button>
    </div>
  </div>
</div>

<script>
  // Visa tidsgräns vid formulärstart
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("timeout-duration").textContent = "60 minuter";
  });

  // Aktivitetsspårning för att återställa timer
  let inactivityTimer;

  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showTimeoutWarning, 55 * 60 * 1000); // Visa varning efter 55 minuter
  }

  // Återställ timer vid användaraktivitet
  ["click", "keypress", "mousemove", "touchstart"].forEach((eventType) => {
    document.addEventListener(eventType, resetInactivityTimer, {
      passive: true,
    });
  });

  // Starta timer när sidan laddas
  resetInactivityTimer();

  // Visa timeout-varning
  function showTimeoutWarning() {
    document.getElementById("timeout-warning").hidden = false;

    // Räkna ned återstående tid
    let secondsLeft = 300; // 5 minuter
    const countdownInterval = setInterval(() => {
      secondsLeft--;

      const minutes = Math.floor(secondsLeft / 60);
      const seconds = secondsLeft % 60;

      document.getElementById(
        "timeout-countdown"
      ).textContent = `${minutes} minut${
        minutes !== 1 ? "er" : ""
      } och ${seconds} sekund${seconds !== 1 ? "er" : ""}`;

      if (secondsLeft <= 0) {
        clearInterval(countdownInterval);
        // Automatiskt spara och logga ut
        saveFormData();
        window.location.href = "/session-expired";
      }
    }, 1000);

    // Fortsätt sessionen
    document
      .getElementById("continue-session")
      .addEventListener("click", () => {
        document.getElementById("timeout-warning").hidden = true;
        clearInterval(countdownInterval);
        resetInactivityTimer();
      });

    // Spara och avsluta
    document.getElementById("save-and-exit").addEventListener("click", () => {
      saveFormData();
      window.location.href = "/saved-draft";
    });
  }

  // Funktion för att spara formulärdata
  function saveFormData() {
    const formData = new FormData(document.querySelector("form"));

    // Spara i localStorage som backup
    const formValues = {};
    for (const [key, value] of formData.entries()) {
      formValues[key] = value;
    }
    localStorage.setItem("saved-form-data", JSON.stringify(formValues));

    // Skicka till server
    fetch("/api/save-draft", {
      method: "POST",
      body: formData,
      credentials: "same-origin",
    });
  }
</script>
```

#### E-handel med tydlig korginformation

```html
<div class="shopping-cart">
  <div class="cart-header">
    <h2>Din varukorg</h2>
    <div class="cart-info" role="status">
      <p>
        Varor sparas i varukorgen i 24 timmar. Efter det måste du lägga till dem
        igen.
      </p>
    </div>
  </div>

  <div class="cart-items">
    <!-- Varukorgsobjekt... -->
  </div>

  <div class="cart-actions">
    <button type="button" id="save-for-later">Spara för senare</button>
    <button type="button" id="proceed-to-checkout">Till kassan</button>
  </div>
</div>

<script>
  // Visa förfallodatum/tid för varukorgen
  function updateCartExpiryInfo() {
    const cartTimestamp = localStorage.getItem("cart-timestamp");

    if (cartTimestamp) {
      const expiryDate = new Date(
        parseInt(cartTimestamp) + 24 * 60 * 60 * 1000
      );
      const formattedDate = expiryDate.toLocaleDateString();
      const formattedTime = expiryDate.toLocaleTimeString();

      const cartInfo = document.querySelector(".cart-info p");
      cartInfo.textContent = `Varor sparas i varukorgen till ${formattedDate} kl ${formattedTime}.`;
    }
  }

  // Uppdatera tidsstämpel när användaren lägger till varor
  function updateCartTimestamp() {
    localStorage.setItem("cart-timestamp", Date.now());
    updateCartExpiryInfo();
  }

  // Uppdatera information när sidan laddas
  document.addEventListener("DOMContentLoaded", () => {
    updateCartExpiryInfo();
  });

  // Uppdatera tidsstämpel när användaren interagerar med varukorgen
  document
    .getElementById("save-for-later")
    .addEventListener("click", updateCartTimestamp);
</script>
```

### Exempel på bristande implementering

#### Formulär utan timeout-information

```html
<!-- Dåligt exempel - inget meddelande om timeout-period -->
<form action="/apply" method="post">
  <h2>Ansökningsformulär</h2>

  <!-- Formulärfält... -->

  <button type="submit">Skicka in</button>
</form>

<script>
  // Session timeout efter 30 minuter utan varning
  setTimeout(() => {
    window.location.href = "/session-expired";
  }, 30 * 60 * 1000);
</script>
```

#### Överraskande dataförlust

```html
<!-- Dåligt exempel - varning kommer först när det är för sent -->
<div class="editor">
  <h2>Online dokumentredigerare</h2>

  <div contenteditable="true" class="document-content">
    <!-- Redigerbart innehåll -->
  </div>

  <button id="save">Spara dokument</button>
</div>

<script>
  // Förlorar data utan varning
  let sessionTimeout;

  function checkSession() {
    fetch("/api/session-status")
      .then((response) => response.json())
      .then((data) => {
        if (!data.active) {
          // Användaren får bara veta att sessionen har upphört
          // efter att det redan har hänt, utan möjlighet att återställa
          alert("Din session har löpt ut och ditt arbete har inte sparats.");
          window.location.href = "/login";
        }
      });
  }

  // Kontrollera bara sessionen var 10:e minut, utan varning innan
  setInterval(checkSession, 10 * 60 * 1000);
</script>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.2.6 Timeouts](https://www.w3.org/WAI/WCAG22/Understanding/timeouts.html)
- [W3C WAI - User Notifications](https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html)
- [Nielsen Norman Group - Session Timeout Guidelines](https://www.nngroup.com/articles/session-timeouts/)
- [WebAIM - Cognitive Disabilities](https://webaim.org/articles/cognitive/)
