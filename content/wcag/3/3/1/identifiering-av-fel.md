---
title: Identifiering av fel
description: Om ett inmatningsfel upptäcks automatiskt, identifieras det felaktiga objektet, och felet beskrivs för användaren i text.
level: A
principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningsstöd
criterionNumber: 1
---

# Framgångskriterium 3.3.1 Identifiering av fel

## Beskrivning

Om ett inmatningsfel upptäcks automatiskt, identifieras det felaktiga objektet, och felet beskrivs för användaren i text.

## Varför detta behövs

När användare gör fel vid inmatning är det viktigt att de får veta exakt vad som är fel och var felet finns. Detta hjälper alla användare, men är särskilt viktigt för personer med kognitiva funktionsnedsättningar, inlärningssvårigheter eller synnedsättningar. Genom att tydligt identifiera vilket fält som innehåller felet och förklara vad som är fel, kan användaren enklare korrigera misstaget.

## Exempel

### Exempel på bra implementering

#### Formulär med tydliga felmeddelanden

```html
<form>
  <div>
    <label for="username">Användarnamn:</label>
    <input
      type="text"
      id="username"
      name="username"
      required
      aria-describedby="username-error"
    />
    <div id="username-error" class="error-message" aria-live="polite" hidden>
      Användarnamn är obligatoriskt.
    </div>
  </div>

  <div>
    <label for="password">Lösenord:</label>
    <input
      type="password"
      id="password"
      name="password"
      required
      minlength="8"
      aria-describedby="password-error"
    />
    <div id="password-error" class="error-message" aria-live="polite" hidden>
      Lösenordet måste innehålla minst 8 tecken.
    </div>
  </div>

  <button type="submit">Logga in</button>
</form>

<script>
  document.querySelector("form").addEventListener("submit", function (e) {
    let isValid = true;

    // Validera användarnamn
    const usernameInput = document.getElementById("username");
    const usernameError = document.getElementById("username-error");

    if (!usernameInput.value.trim()) {
      usernameError.hidden = false;
      usernameInput.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      usernameError.hidden = true;
      usernameInput.removeAttribute("aria-invalid");
    }

    // Validera lösenord
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("password-error");

    if (passwordInput.value.length < 8) {
      passwordError.hidden = false;
      passwordInput.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      passwordError.hidden = true;
      passwordInput.removeAttribute("aria-invalid");
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
</script>
```

#### Sammanfattning av fel i början av formulär

```html
<form>
  <div id="error-summary" class="error-summary" aria-live="assertive" hidden>
    <h2>Rätta till följande fel:</h2>
    <ul id="error-list"></ul>
  </div>

  <!-- Resten av formuläret -->
</form>

<script>
  function showErrors(errors) {
    const errorSummary = document.getElementById("error-summary");
    const errorList = document.getElementById("error-list");

    if (errors.length > 0) {
      errorList.innerHTML = "";
      errors.forEach((error) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${error.id}`;
        link.textContent = error.message;
        li.appendChild(link);
        errorList.appendChild(li);
      });

      errorSummary.hidden = false;
    } else {
      errorSummary.hidden = true;
    }
  }
</script>
```

### Exempel på bristande implementering

#### Formulär utan tydliga felmeddelanden

```html
<form>
  <div>
    <label for="username">Användarnamn:</label>
    <input type="text" id="username" name="username" required />
  </div>

  <div>
    <label for="password">Lösenord:</label>
    <input type="password" id="password" name="password" required />
  </div>

  <div class="error-message">Formuläret innehåller fel.</div>

  <button type="submit">Logga in</button>
</form>
```

#### Fel som bara indikeras med färg

```html
<style>
  .error {
    border-color: red;
  }
</style>

<form>
  <div>
    <label for="email">E-post:</label>
    <input type="email" id="email" name="email" class="error" />
  </div>
  <button type="submit">Skicka</button>
</form>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
- [Webbriktlinjer - R2: Ge begripliga felmeddelanden](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/ge-begripliga-felmeddelanden)
