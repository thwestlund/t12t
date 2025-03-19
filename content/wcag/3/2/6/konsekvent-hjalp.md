---
title: Konsekvent hjälp
description: Hjälpfunktioner presenteras i samma ordning inom en uppsättning webbsidor.
level: A
principleNumber: 3
principleName: Begriplig
guidelineNumber: 2
guidelineName: Förutsägbar
criterionNumber: 6

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 3.2.6 Konsekvent hjälp

## Beskrivning

Om hjälpfunktioner (inklusive hjälp vid inmatning, felidentifiering, -förslag och -förebyggande) är tillgängliga i en uppsättning webbsidor, så presenteras de i samma relativa ordning varje gång de upprepas, om det inte initieras en ändring av användaren.

## Varför detta behövs

Konsekvent placering av hjälpfunktioner på en webbplats gör det enklare för användare, särskilt de med kognitiva funktionsnedsättningar, att hitta och använda dessa funktioner. När hjälpfunktioner presenteras på samma ställe och i samma ordning på olika sidor kan användare lättare identifiera och komma ihåg var de finns, vilket minskar förvirring och förbättrar användarupplevelsen.

## Exempel

### Exempel på bra implementering

#### Konsekvent placering av hjälplänkar

```html
<!-- Samma mönster upprepas på alla sidor -->
<form>
  <div class="form-field">
    <label for="username">Användarnamn:</label>
    <input type="text" id="username" name="username" />
    <a href="help-username.html" class="help-link">Hjälp</a>
  </div>

  <div class="form-field">
    <label for="password">Lösenord:</label>
    <input type="password" id="password" name="password" />
    <a href="help-password.html" class="help-link">Hjälp</a>
  </div>

  <button type="submit">Logga in</button>
</form>
```

#### Konsekvent felmeddelande-struktur

```html
<!-- Samma struktur för felmeddelanden på alla formulär -->
<form>
  <div class="error-summary" id="error-summary" hidden>
    <h2>Rätta till följande fel:</h2>
    <ul></ul>
  </div>

  <div class="form-field">
    <label for="name">Namn:</label>
    <input type="text" id="name" name="name" aria-describedby="name-error" />
    <div id="name-error" class="error-message" hidden></div>
  </div>

  <div class="form-field">
    <label for="email">E-post:</label>
    <input
      type="email"
      id="email"
      name="email"
      aria-describedby="email-error"
    />
    <div id="email-error" class="error-message" hidden></div>
  </div>

  <button type="submit">Skicka</button>
</form>
```

#### Konsekvent placering av hjälpikoner

```html
<!-- Samma mönster för hjälpikoner på alla sidor -->
<div class="form-field">
  <label for="card-number"
    >Kortnummer:
    <button type="button" class="help-icon" aria-label="Hjälp om kortnummer">
      <i class="fa fa-question-circle"></i>
    </button>
  </label>
  <input type="text" id="card-number" name="card-number" />
</div>

<div class="form-field">
  <label for="cvv"
    >CVV-kod:
    <button type="button" class="help-icon" aria-label="Hjälp om CVV-kod">
      <i class="fa fa-question-circle"></i>
    </button>
  </label>
  <input type="text" id="cvv" name="cvv" maxlength="3" />
</div>
```

### Exempel på bristande implementering

#### Inkonsekvent placering av hjälplänkar

```html
<!-- På första sidan -->
<div class="form-field">
  <label for="username">Användarnamn:</label>
  <a href="help-username.html" class="help-link">Hjälp</a>
  <input type="text" id="username" name="username" />
</div>

<!-- På andra sidan -->
<div class="form-field">
  <label for="email">E-post:</label>
  <input type="email" id="email" name="email" />
  <a href="help-email.html" class="help-link">Behöver du hjälp?</a>
</div>
```

#### Inkonsekvent felmeddelande-struktur

```html
<!-- På första formuläret -->
<form>
  <div class="error-summary" id="error-summary">
    <h2>Fel hittades:</h2>
    <ul></ul>
  </div>
  <!-- Formulärfält här -->
</form>

<!-- På andra formuläret -->
<form>
  <!-- Formulärfält här -->
  <div class="errors-at-bottom">
    <p>Följande fel måste åtgärdas:</p>
    <ul></ul>
  </div>
</form>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html)
- [Webbriktlinjer - R103: Hjälp användaren att förebygga fel](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/hjalp-anvandaren-att-forebygga-fel)
