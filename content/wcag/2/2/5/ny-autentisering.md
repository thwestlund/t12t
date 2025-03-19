---
title: Ny autentisering
description: När en autentiserad session upphör kan användaren fortsätta aktiviteten utan att förlora data efter att ha autentiserat sig på nytt.
level: AAA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 2
guidelineName: Tillräckligt med tid
criterionNumber: 5

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.2.5 Ny autentisering

## Beskrivning

När en autentiserad session upphör kan användaren fortsätta aktiviteten utan att förlora data efter att ha autentiserat sig på nytt.

## Varför detta behövs

Användarsessioner som automatiskt avslutas efter en viss tid kan orsaka problem för många användare, särskilt för personer med funktionsnedsättningar som kan behöva längre tid för att slutföra uppgifter. När en användare tvingas autentisera sig på nytt och sedan upptäcker att all inmatad data har gått förlorad, kan detta leda till frustration och onödigt dubbelarbete.

Följande användargrupper påverkas särskilt:

- Personer med motoriska funktionsnedsättningar som behöver längre tid för att mata in information
- Personer med kognitiva funktionsnedsättningar som kan behöva mer tid för att bearbeta uppgifter
- Personer som använder skärmläsare eller andra hjälpmedel som kan göra processen långsammare
- Äldre användare som kan arbeta i långsammare takt

Genom att implementera säker återautentisering utan dataförlust förbättras användarupplevelsen avsevärt för alla, men är särskilt viktigt för tillgängligheten.

## Exempel

### Exempel på bra implementering

#### Formulär med säker sessionstidsförlängning

```html
<form id="application-form" action="/submit" method="post">
  <h2>Ansökan</h2>

  <div class="form-section">
    <label for="name">Namn:</label>
    <input type="text" id="name" name="name" required />
  </div>

  <div class="form-section">
    <label for="description">Beskrivning:</label>
    <textarea id="description" name="description" rows="5"></textarea>
  </div>

  <!-- Fler formulärfält... -->

  <div class="form-controls">
    <button type="submit">Skicka in</button>
    <button type="button" id="save-draft">Spara utkast</button>
  </div>
</form>

<div
  id="session-warning"
  class="modal hidden"
  role="dialog"
  aria-labelledby="session-title"
  aria-describedby="session-desc"
>
  <div class="modal-content">
    <h3 id="session-title">Din session håller på att löpa ut</h3>
    <p id="session-desc">
      Du kommer att loggas ut om <span id="countdown">5</span> minuter. Vill du
      fortsätta din session?
    </p>
    <div class="modal-actions">
      <button id="extend-session">Fortsätt sessionen</button>
      <button id="logout-now">Logga ut nu</button>
    </div>
  </div>
</div>

<script>
  // Spara formulärdata regelbundet till localStorage
  const form = document.getElementById("application-form");

  function saveFormData() {
    const formData = new FormData(form);
    const formObject = {};

    for (let [key, value] of formData.entries()) {
      formObject[key] = value;
    }

    localStorage.setItem("formData", JSON.stringify(formObject));
  }

  // Spara data var 30:e sekund
  setInterval(saveFormData, 30000);

  // Visa varning innan sessionen löper ut
  let sessionCountdown = 300; // 5 minuter i sekunder

  function checkSession() {
    // Simulering av sessionskontroll - i verkligheten skulle detta
    // kontrollera serverns sessionsstatus

    if (sessionCountdown <= 300) {
      // 5 minuter kvar
      document.getElementById("session-warning").classList.remove("hidden");

      const interval = setInterval(() => {
        sessionCountdown--;
        const minutes = Math.floor(sessionCountdown / 60);
        const seconds = sessionCountdown % 60;
        document.getElementById("countdown").textContent = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;

        if (sessionCountdown <= 0) {
          clearInterval(interval);
          // Omdirigera till inloggningssidan, men spara data först
          saveFormData();
          window.location.href =
            "/login?return=" + encodeURIComponent(window.location.pathname);
        }
      }, 1000);
    }
  }

  // Återställ sessionen
  document.getElementById("extend-session").addEventListener("click", () => {
    // Förläng sessionen genom API-anrop
    fetch("/api/extend-session", {
      method: "POST",
      credentials: "same-origin",
    }).then((response) => {
      if (response.ok) {
        sessionCountdown = 1800; // Återställ till 30 minuter
        document.getElementById("session-warning").classList.add("hidden");
      }
    });
  });

  // Kontrollera när formulärsidan laddas
  window.addEventListener("load", () => {
    // Se om det finns sparad data att återställa efter en ny inloggning
    const savedData = localStorage.getItem("formData");

    if (savedData) {
      const formObject = JSON.parse(savedData);

      // Fyll i formulär med sparad data
      for (const key in formObject) {
        const input = form.elements[key];
        if (input) {
          input.value = formObject[key];
        }
      }
    }

    // Starta sessionskontroll
    setTimeout(checkSession, 25 * 60 * 1000); // Kontrollera efter 25 minuter
  });
</script>
```

#### Backup av data före sessionens slut

```html
<div id="editor" class="document-editor">
  <div class="editor-toolbar">
    <!-- Verktygsrad... -->
  </div>

  <div class="editor-content" contenteditable="true">
    <!-- Redigerbart innehåll -->
  </div>
</div>

<script>
  const editor = document.querySelector(".editor-content");

  // Spara data automatiskt
  function autoSave() {
    const content = editor.innerHTML;
    localStorage.setItem("editor-content", content);

    // Skicka till servern om inloggad
    if (isAuthenticated()) {
      saveToServer(content);
    }
  }

  // Spara var 30:e sekund
  const autoSaveInterval = setInterval(autoSave, 30000);

  // Kontrollera autentiseringsstatus
  function checkAuth() {
    fetch("/api/auth-status")
      .then((response) => response.json())
      .then((data) => {
        if (!data.authenticated) {
          // Sessionen har upphört, spara och omdirigera till inloggning
          autoSave();

          // Spara aktuell URL för att återvända efter inloggning
          const returnUrl = encodeURIComponent(window.location.pathname);
          window.location.href = `/login?return=${returnUrl}&data=saved`;
        }
      });
  }

  // Kontrollera autentisering var 5:e minut
  setInterval(checkAuth, 5 * 60 * 1000);

  // Vid sidinladdning, kontrollera om data behöver återställas
  window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);

    // Om användaren kommer tillbaka efter inloggning, återställ data
    if (urlParams.get("restored") === "true") {
      const savedContent = localStorage.getItem("editor-content");
      if (savedContent) {
        editor.innerHTML = savedContent;
      }
    }
  });
</script>
```

### Exempel på bristande implementering

#### Sessionsutloggning som förlorar data

```html
<!-- Dåligt exempel - sessionsutloggning som förlorar all användardata -->
<form action="/submit" method="post">
  <h2>Registrering</h2>

  <div class="form-section">
    <label for="username">Användarnamn:</label>
    <input type="text" id="username" name="username" required />
  </div>

  <!-- Fler formulärfält... -->

  <button type="submit">Registrera</button>
</form>

<script>
  // Kontrollera session
  setInterval(() => {
    fetch("/api/session-status")
      .then((response) => response.json())
      .then((data) => {
        if (!data.active) {
          // Sessionen har utgått, omdirigera utan att spara data
          alert("Din session har löpt ut. Du måste logga in igen.");
          window.location.href = "/login";
        }
      });
  }, 60000);
</script>
```

#### Avslutad session utan varning

```html
<!-- Dåligt exempel - ingen varning eller datalagring innan sessionens slut -->
<div class="application">
  <h1>Min ansökan</h1>

  <textarea id="application-text" rows="10" cols="50"></textarea>

  <button id="submit">Skicka in</button>
</div>

<script>
  // Autentiseringskontroll utan varning eller datalagring
  setTimeout(() => {
    // Efter 30 minuter, tvinga inloggning utan att spara
    window.location.href = "/login";
  }, 30 * 60 * 1000);
</script>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.2.5 Re-authenticating](https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating.html)
- [OWASP - Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [WebAIM - Accessible Forms](https://webaim.org/techniques/forms/)
- [Nielsen Norman Group - Login Walls Stop Users in Their Tracks](https://www.nngroup.com/articles/login-walls/)
