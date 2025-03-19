---
title: Autokorrigering
description: När inmatade fel upptäcks automatiskt kan användaren välja att få förslag på korrigering, om inte säkerheten eller syftet skulle äventyras.
level: A
principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningsstöd
criterionNumber: 3
---

# Framgångskriterium 3.3.3 Förslag vid fel

## Beskrivning

Om ett inmatningsfel upptäcks automatiskt och förslag på korrigering är kända, tillhandahålls förslagen till användaren, såvida detta inte skulle äventyra säkerheten eller syftet med innehållet.

## Varför detta behövs

När användare gör fel i inmatning, behöver de hjälp att förstå vad som är fel och hur de kan åtgärda det. Detta är särskilt viktigt för personer med kognitiva funktionsnedsättningar eller inlärningssvårigheter. Genom att ge tydliga instruktioner och förslag på korrigeringar hjälper man användare att slutföra uppgifter utan att behöva gissa sig fram till lösningar.

## Exempel

### Exempel på bra implementering

#### Formulär med förslag vid fel

```html
<form>
  <div>
    <label for="email">E-postadress:</label>
    <input
      type="email"
      id="email"
      name="email"
      aria-describedby="email-error"
    />
    <div id="email-error" class="error-message" hidden>
      Ogiltig e-postadress. En giltig e-postadress innehåller @ och en domän,
      t.ex. namn@exempel.se
    </div>
  </div>

  <div>
    <label for="postalcode">Postnummer:</label>
    <input
      type="text"
      id="postalcode"
      name="postalcode"
      pattern="[0-9]{5}"
      aria-describedby="postalcode-error"
    />
    <div id="postalcode-error" class="error-message" hidden>
      Ogiltigt postnummer. Ange ett 5-siffrigt nummer utan mellanslag, t.ex.
      12345
    </div>
  </div>

  <button type="submit">Skicka</button>
</form>

<script>
  document.querySelector("form").addEventListener("submit", function (e) {
    const emailInput = document.getElementById("email");
    const postalcodeInput = document.getElementById("postalcode");
    let isValid = true;

    // Validera e-post
    if (!emailInput.validity.valid) {
      document.getElementById("email-error").hidden = false;
      isValid = false;
    } else {
      document.getElementById("email-error").hidden = true;
    }

    // Validera postnummer
    if (!postalcodeInput.validity.valid) {
      document.getElementById("postalcode-error").hidden = false;
      isValid = false;
    } else {
      document.getElementById("postalcode-error").hidden = true;
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
</script>
```

#### Sökfält med autokorrigering

```html
<div>
  <label for="search">Sök på webbplatsen:</label>
  <input type="search" id="search" name="q" aria-describedby="search-results" />
  <div id="search-results" role="listbox" hidden></div>
</div>

<script>
  const searchInput = document.getElementById("search");
  const searchResults = document.getElementById("search-results");

  searchInput.addEventListener("input", function () {
    if (this.value.length > 2) {
      // Simulering av sökresultat med förslag
      searchResults.hidden = false;
      searchResults.innerHTML = `
        <div role="option" tabindex="0">Menade du: ${this.value
          .toLowerCase()
          .replace(/ö/, "o")}</div>
        <div role="option" tabindex="0">Förslag 1: ${
          this.value
        } information</div>
        <div role="option" tabindex="0">Förslag 2: ${this.value} ansökan</div>
      `;
    } else {
      searchResults.hidden = true;
    }
  });
</script>
```

### Exempel på bristande implementering

#### Formulär utan förslag på korrigering

```html
<form>
  <div>
    <label for="email">E-postadress:</label>
    <input type="email" id="email" name="email" />
    <div class="error-message" hidden>Ogiltig e-postadress.</div>
  </div>

  <button type="submit">Skicka</button>
</form>
```

#### Felmeddelande utan hjälp till korrigering

```html
<div class="error-summary">
  <h2>Följande fel hittades i formuläret:</h2>
  <ul>
    <li>Felaktigt telefonnummer</li>
    <li>Ogiltigt postnummer</li>
  </ul>
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html)
- [Webbriktlinjer - R2: Ge begripliga felmeddelanden](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/ge-begripliga-felmeddelanden)
