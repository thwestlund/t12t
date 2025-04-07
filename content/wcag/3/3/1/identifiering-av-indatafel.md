---
title: 3.3.1 Identifiering av indatafel
description: Om ett indatafel upptäcks automatiskt, identifiera felet och beskriv det för användaren i text.
level: A
slug: identifiering-av-indatafel
keywords: [
    "WCAG",
    "tillgänglighet",
    "indatafel",
    "error identification",
    "formulär",
    "validering",
    "felmeddelande",
    "textbeskrivning",
    "begriplig",
    "inmatningshjälp",
    "operabel", # Relaterat till att kunna korrigera fel
  ]
canonical: https://t12t.dev/wcag/3/3/1/identifiering-av-indatafel

principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningshjälp
criterionNumber: 1

og:
  title: 3.3.1 Identifiering av indatafel – WCAG
  description: Identifiera och beskriv indatafel i text.
  url: https://t12t.dev/wcag/3/3/1/identifiering-av-indatafel
  type: article

datePublished: 2025-07-20
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: weekly # Forms are common
  priority: 0.9 # Nivå A, fundamental
---

# Identifiering av indatafel

## Beskrivning

Om ett **indatafel upptäcks automatiskt**, ska det felaktiga fältet **identifieras** och felet **beskrivas för användaren i text**.

Detta innebär att när ett formulär valideras (antingen direkt när användaren lämnar ett fält eller när hela formuläret skickas) och ett fel hittas (t.ex. ett obligatoriskt fält är tomt, ett e-postfält har fel format, ett personnummer är ogiltigt), måste systemet:

1.  **Peka ut vilket fält** som innehåller felet (t.ex. genom att markera fältet visuellt, placera felmeddelandet nära fältet, eller lista de felaktiga fälten i början av formuläret).
2.  **Förklara vad som är fel i text.** Det räcker inte att bara markera fältet med röd färg (se 1.4.1 Användning av färg) eller visa en felikon. Felet måste beskrivas med ord så att användaren förstår vad de behöver korrigera.

## Varför detta behövs

Tydlig felidentifiering och felbeskrivning är avgörande för att användare ska kunna förstå och åtgärda fel i formulär:

- **Skärmläsaranvändare:** Kan inte se visuella markeringar som röd färg eller ikoner. De är helt beroende av att felet beskrivs i text och att det är tydligt vilket fält som avses. Felmeddelandet bör vara programmatiskt kopplat till fältet (t.ex. via [aria-describedby]{.inline-code}) så att det läses upp när fältet får fokus.
- **Personer med nedsatt syn eller färgblindhet:** Kan missa fel som endast indikeras med färg. Textbeskrivningar är nödvändiga.
- **Personer med kognitiva funktionsnedsättningar:** Behöver tydliga och konkreta instruktioner om vad som är fel och hur det kan rättas till. Vaga felmeddelanden som "Felaktig inmatning" är inte till hjälp.
- **Alla användare:** Tydliga felmeddelanden sparar tid och frustration för alla genom att snabbt förklara problemet.

Att ge tydlig feedback om fel är en grundläggande del av användarvänlig formulärdesign.

---

## Exempel

### Tydligt felmeddelande kopplat till fält (Rätt) ✅

När formuläret skickas och ett obligatoriskt fält är tomt, markeras fältet visuellt (t.ex. med röd ram) och ett tydligt textmeddelande visas i direkt anslutning till fältet. Fokus flyttas lämpligen till det första felaktiga fältet, och felmeddelandet är kopplat till fältet via [aria-describedby]{.inline-code} eller liknande.

::code-group{:labels='["HTML + JavaScript (Rätt) ✅"]'}

```html {6,11-13} showLineNumbers
<form id="myForm" novalidate>
  <!-- novalidate för att visa anpassad validering -->
  <div>
    <label for="email">E-postadress (obligatoriskt):</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      aria-describedby="email-error"
      aria-invalid="false"
    />
    <span id="email-error" class="error-message" style="display: none;"></span>
  </div>
  <div>
    <!-- Fler fält... -->
  </div>
  <button type="submit">Skicka</button>
  <!-- Sammanfattande felmeddelande (valfritt men rekommenderat) -->
  <div
    id="form-summary-error"
    class="error-summary"
    role="alert"
    style="display: none;"
  >
    Kontrollera fälten markerade nedan.
  </div>
</form>
```

```javascript showLineNumbers
const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const summaryError = document.getElementById("form-summary-error");

form.addEventListener("submit", function (event) {
  let isValid = true;
  // Nollställ tidigare fel
  emailError.textContent = "";
  emailError.style.display = "none";
  emailInput.setAttribute("aria-invalid", "false");
  emailInput.style.borderColor = ""; // Återställ stil
  summaryError.style.display = "none";

  // Validera e-post (förenklat exempel: bara obligatorisk)
  if (emailInput.value.trim() === "") {
    isValid = false;
    emailError.textContent = "E-postadress måste fyllas i.";
    emailError.style.display = "block";
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.style.borderColor = "red"; // Visuell markering
  }
  // Lägg till fler valideringar här...

  if (!isValid) {
    event.preventDefault(); // Förhindra att formuläret skickas
    summaryError.style.display = "block";
    // Flytta fokus till första fältet med fel (eller till sammanfattningen)
    emailInput.focus();
  }
});
```

::
**Resultat:** Om e-postfältet är tomt:

1. Fältet markeras som ogiltigt ([aria-invalid="true"]{.inline-code}) och får en röd ram.
2. Texten "E-postadress måste fyllas i." visas vid fältet.
3. [aria-describedby]{.inline-code} kopplar textmeddelandet till fältet så att skärmläsare läser upp det.
4. Fokus flyttas till det felaktiga fältet.

### Endast visuell markering (Fel) ❌

Ett obligatoriskt fält som är tomt markeras endast genom att dess ram blir röd. Ingen text förklarar felet.

::code-group{:labels='["HTML + CSS (Fel) ❌"]'}

```html showLineNumbers
<label for="name">Namn:</label>
<!-- Fel: Ingen plats för textmeddelande, ingen aria-describedby -->
<input type="text" id="name" required class="error-input" />

<style>
  .error-input {
    border: 2px solid red; /* Endast visuell markering */
  }
</style>
```

::
**Resultat:** Användare som inte kan se färgen, eller skärmläsaranvändare, får ingen information om _vad_ som är fel.

### Vag felbeskrivning (Fel) ❌

Ett fel uppstår och det enda meddelandet som visas är "Felaktig inmatning" högst upp på sidan, utan att peka ut vilket fält eller vad som är fel.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<div class="error-summary">Felaktig inmatning. Försök igen.</div>
<!-- Fel: För vagt, identifierar inte fältet eller felet -->
<form>
  <input type="text" name="field1" />
  <input type="date" name="field2" />
</form>
```

::
**Resultat:** Användaren vet inte vilket fält som orsakade felet eller hur de ska korrigera det.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.3.1 Error Identification (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
- [W3C Technique G83: Providing text descriptions to identify required fields that were not completed](https://www.w3.org/WAI/WCAG22/Techniques/general/G83)
- [W3C Technique SCR18: Providing an alert or notification that alerts the user and identifies the form control(s) with invalid data](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR18) (Använda JavaScript för felhantering)
- [MDN Web Docs: ARIA aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [MDN Web Docs: ARIA aria-invalid attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
