---
title: Tillräckliga hjälptexter
description: Sammanhangsberoende hjälp erbjuds.
level: AAA
principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningsstöd
criterionNumber: 5

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 3.3.5 Tillräckliga hjälptexter

## Beskrivning

Sammanhangsberoende hjälp är tillgänglig för:

- **Specifika instruktioner:** Hjälp som förklarar vad användaren behöver göra baserat på det aktuella sammanhanget, inklusive var användaren är och vad som ska göras.
- **Förslag när innehållet behöver vara i ett visst format eller av en viss typ:** Hjälp med exempel som illustrerar det förväntade formatet eller typen av innehåll.

## Varför detta behövs

Sammanhangsberoende hjälp gör det enklare för användare att förstå och interagera med komplexa formulär och uppgifter. Detta är särskilt viktigt för personer med kognitiva funktionsnedsättningar, inlärningssvårigheter eller personer som är ovana vid digitala gränssnitt. Genom att erbjuda hjälp som är relevant för användarens aktuella situation och uppgift, minimeras risken för fel och frustration.

## Exempel

### Exempel på bra implementering

#### Sammanhangsberoende hjälp via tooltip

```html
<div class="form-field">
  <label for="password">Lösenord:</label>
  <input
    type="password"
    id="password"
    name="password"
    aria-describedby="password-help"
  />
  <button
    type="button"
    aria-label="Visa hjälp om lösenord"
    onclick="toggleHelp('password-help')"
  >
    ?
  </button>
  <div id="password-help" class="help-text" hidden>
    <h3>Krav på lösenord:</h3>
    <ul>
      <li>Minst 8 tecken</li>
      <li>Minst en stor bokstav (A-Z)</li>
      <li>Minst en liten bokstav (a-z)</li>
      <li>Minst en siffra (0-9)</li>
      <li>Minst ett specialtecken (!@#$%^&*)</li>
    </ul>
    <p>Exempel på ett starkt lösenord: Ex4mp3l!Pa55</p>
  </div>
</div>

<script>
  function toggleHelp(id) {
    const helpText = document.getElementById(id);
    helpText.hidden = !helpText.hidden;
  }
</script>
```

#### Steg-för-steg-guide i formulär

```html
<form id="application-form">
  <div class="step" id="step1">
    <h2>Steg 1: Personuppgifter</h2>
    <p class="instruction">
      Fyll i dina personuppgifter nedan. Alla fält markerade med * är
      obligatoriska.
    </p>

    <div class="form-field">
      <label for="fullname">Fullständigt namn: *</label>
      <input type="text" id="fullname" name="fullname" required />
      <p class="field-help">
        Ange ditt för- och efternamn som de står i din legitimation.
      </p>
    </div>

    <div class="form-field">
      <label for="personal-number">Personnummer: *</label>
      <input
        type="text"
        id="personal-number"
        name="personal-number"
        required
        pattern="[0-9]{8}-[0-9]{4}"
      />
      <p class="field-help">
        Ange ditt personnummer i formatet ÅÅMMDD-XXXX, t.ex. 19850115-1234
      </p>
    </div>

    <button type="button" onclick="showStep('step2')">Nästa steg</button>
  </div>

  <!-- Fler steg här -->
</form>

<script>
  function showStep(stepId) {
    // Dölj alla steg
    document.querySelectorAll(".step").forEach((step) => {
      step.style.display = "none";
    });

    // Visa det begärda steget
    document.getElementById(stepId).style.display = "block";
  }
</script>
```

#### Kontextuell hjälp vid inmatningsfel

```html
<div class="form-field">
  <label for="email">E-postadress:</label>
  <input
    type="email"
    id="email"
    name="email"
    aria-describedby="email-error"
    oninput="validateEmail(this)"
  />
  <div id="email-error" class="error-message" hidden></div>
</div>

<script>
  function validateEmail(input) {
    const errorElement = document.getElementById("email-error");

    if (input.validity.valueMissing) {
      errorElement.textContent = "Du måste ange en e-postadress.";
      errorElement.hidden = false;
    } else if (input.validity.typeMismatch) {
      errorElement.textContent =
        "Ange en giltig e-postadress, t.ex. namn@exempel.se";
      errorElement.hidden = false;
    } else {
      errorElement.hidden = true;
    }
  }
</script>
```

### Exempel på bristande implementering

#### Generisk hjälp utan sammanhang

```html
<div class="form-field">
  <label for="card-number">Kortnummer:</label>
  <input type="text" id="card-number" name="card-number" />
  <a href="help.html" target="_blank">Hjälp</a>
</div>
```

#### Hjälp utan exempel på format

```html
<div class="form-field">
  <label for="date">Datum:</label>
  <input type="text" id="date" name="date" />
  <p class="field-help">Ange ett giltigt datum.</p>
</div>
```

#### Hjälp som är svår att hitta

```html
<form>
  <!-- Många formulärfält -->

  <p class="small-text">
    För hjälp med att fylla i formuläret, se vår
    <a href="faq.html">FAQ-sida</a>.
  </p>
</form>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 3.3.5 Help](https://www.w3.org/WAI/WCAG22/Understanding/help.html)
- [Webbriktlinjer - R103: Hjälp användaren att förebygga fel](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/hjalp-anvandaren-att-forebygga-fel)
