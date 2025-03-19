---
title: Orientering
description: Innehållets visning och hantering är inte begränsad till endast en skärmorientering.
level: AA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 3
guidelineName: Anpassningsbart
criterionNumber: 4
---

# Framgångskriterium 1.3.4 Orientering

## Beskrivning

Innehållets visning och hantering är inte begränsad till endast en skärmorientering, såsom stående eller liggande, såvida inte en specifik skärmorientering är nödvändig.

## Varför detta behövs

Vissa användare måste ha sin enhet i en specifik orientering på grund av fysiska begränsningar eller hur de har monterat enheten. Till exempel kan personer med rörelsenedsättningar ha sin mobiltelefon eller surfplatta monterad i en fast position, eller personer med olika typer av synnedsättningar kan behöva använda en specifik orientering för bättre läsbarhet.

Genom att säkerställa att innehållet fungerar i både stående och liggande läge ger du användarna möjlighet att använda webbplatsen eller applikationen i den orientering som passar dem bäst.

Det finns få situationer där en specifik orientering är absolut nödvändig, och detta kriterium säkerställer att sådana begränsningar endast införs när de verkligen behövs.

## Exempel

### Exempel på bra implementering

#### Responsiv design som fungerar i båda orienteringarna

```css
/* CSS som anpassar layouten baserat på tillgängligt utrymme, inte orientering */
@media screen and (min-width: 600px) {
  .container {
    display: flex;
  }
}

@media screen and (max-width: 599px) {
  .container {
    display: block;
  }
}
```

#### App som tillåter både stående och liggande läge

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- Ingen begränsning av orientering -->
```

### Exempel på bristande implementering

#### Webbplats som låser orienteringen

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, user-scalable=no, orientation=portrait"
/>
<!-- Tvingar stående läge utan motivering -->
```

#### App som bara fungerar i en orientering utan motivering

```javascript
// JavaScript som visar ett felmeddelande om användaren roterar enheten
window.addEventListener("orientationchange", function () {
  if (window.orientation === 90 || window.orientation === -90) {
    displayError(
      "Denna app fungerar endast i stående läge. Vänligen rotera din enhet."
    );
  }
});
```

#### CSS som inte anpassar sig efter orientering

```css
/* CSS som endast är designad för en orientering */
.content {
  width: 320px; /* Fast bredd som inte anpassas */
  height: 500px; /* Fast höjd som inte anpassas */
}
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)
- [MDN Web Docs - Responsive design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [W3C - Mobile Accessibility](https://www.w3.org/WAI/standards-guidelines/mobile/)
