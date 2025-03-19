---
title: Fokusordning
description: Om en webbsida kan navigeras sekventiellt och navigeringssekvenserna påverkar betydelse eller funktion, får fokuserbara komponenter fokus i en ordning som bevarar betydelse och användbarhet.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 4
guidelineName: Navigerbart
criterionNumber: 3
---

# Framgångskriterium 2.4.3 Fokusordning

## Beskrivning

Om en webbsida kan navigeras sekventiellt och navigeringssekvenserna påverkar betydelse eller funktion, får fokuserbara komponenter fokus i en ordning som bevarar betydelse och användbarhet.

## Varför detta behövs

En logisk fokusordning är avgörande för användare som navigerar med tangentbord eller tangentbordsliknande hjälpmedel. När fokusordningen inte följer en logisk sekvens blir det förvirrande och svårt att förstå sidans struktur och funktion. Detta påverkar särskilt personer med kognitiva eller visuella funktionsnedsättningar som förlitar sig på en logisk ordningsföljd för att förstå och interagera med innehållet.

## Exempel

### Exempel på bra implementering

#### Formulärfält i logisk ordning

```html
<form>
  <div>
    <label for="name">Namn:</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="email">E-post:</label>
    <input type="email" id="email" name="email" />
  </div>
  <div>
    <label for="message">Meddelande:</label>
    <textarea id="message" name="message"></textarea>
  </div>
  <div>
    <button type="submit">Skicka</button>
  </div>
</form>
```

#### Modal dialog med korrekt fokusspärr

```html
<div id="modal" role="dialog" aria-labelledby="modal-title">
  <h2 id="modal-title">Bekräfta åtgärd</h2>
  <p>Är du säker på att du vill fortsätta?</p>
  <button id="confirm-btn">Ja, fortsätt</button>
  <button id="cancel-btn">Avbryt</button>
</div>

<script>
  const modal = document.getElementById("modal");
  const firstFocusable = document.getElementById("confirm-btn");
  const lastFocusable = document.getElementById("cancel-btn");

  // Sätt fokus på första elementet när modalen öppnas
  firstFocusable.focus();

  // Hantera tab-navigering inom modalen
  lastFocusable.addEventListener("keydown", function (e) {
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();
      firstFocusable.focus();
    }
  });

  firstFocusable.addEventListener("keydown", function (e) {
    if (e.key === "Tab" && e.shiftKey) {
      e.preventDefault();
      lastFocusable.focus();
    }
  });
</script>
```

### Exempel på bristande implementering

#### Ologisk tabuleringsordning via tabindex

```html
<div>
  <a href="page1.html" tabindex="3">Länk 1</a>
  <a href="page2.html" tabindex="1">Länk 2</a>
  <a href="page3.html" tabindex="2">Länk 3</a>
</div>
```

#### Formulär där knappen kommer före fälten i HTML

```html
<form>
  <button type="submit">Skicka</button>

  <div>
    <label for="name">Namn:</label>
    <input type="text" id="name" name="name" />
  </div>

  <div>
    <label for="email">E-post:</label>
    <input type="email" id="email" name="email" />
  </div>
</form>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [Webbriktlinjer - R136: Skapa en logisk tabbordning](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/placera-element-i-en-logisk-tabbordning)
