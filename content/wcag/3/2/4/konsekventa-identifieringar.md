---
title: Konsekventa identifieringar
description: Komponenter som har samma funktionalitet inom en uppsättning webbsidor identifieras konsekvent.
level: AA
principleNumber: 3
principleName: Begriplig
guidelineNumber: 2
guidelineName: Förutsägbar
criterionNumber: 4
---

# Framgångskriterium 3.2.4 Konsekventa identifieringar

## Beskrivning

Komponenter som har samma funktionalitet inom en uppsättning webbsidor identifieras konsekvent.

## Varför detta behövs

Konsekventa beteckningar och identifieringar för funktioner på en webbplats hjälper användare att förstå och använda innehållet effektivt. Detta är särskilt viktigt för personer med kognitiva funktionsnedsättningar som lättare kan lära sig och komma ihåg en funktion om den alltid har samma etikett. Det underlättar också för skärmläsaranvändare som förlitar sig på att funktioner har konsekventa namn.

## Exempel

### Exempel på bra implementering

#### Konsekventa knappetiketter

```html
<!-- På alla sidor där denna funktion finns används samma etikett -->
<button type="submit">Skicka in formuläret</button>
```

#### Konsekventa ikonbeteckningar

```html
<!-- Ikon med samma alternativ text på alla platser -->
<a href="kundvagn.html">
  <img src="cart-icon.png" alt="Kundvagn" />
  Visa kundvagn
</a>
```

#### Konsekventa fältetiketter

```html
<!-- Samma etikett för e-postfält på alla formulär -->
<label for="email">E-postadress:</label>
<input type="email" id="email" name="email" />
```

### Exempel på bristande implementering

#### Inkonsekventa knappetiketter för samma funktion

```html
<!-- På första formuläret -->
<button type="submit">Skicka in</button>

<!-- På andra formuläret -->
<button type="submit">Slutför</button>

<!-- På tredje formuläret -->
<button type="submit">Spara</button>
```

#### Olika beteckningar för samma ikon

```html
<!-- På första sidan -->
<a href="kundvagn.html">
  <img src="cart-icon.png" alt="Kundvagn" />
</a>

<!-- På andra sidan -->
<a href="kundvagn.html">
  <img src="cart-icon.png" alt="Visa varukorgen" />
</a>
```

#### Olika ARIA-etiketter för samma funktion

```html
<!-- På första sidan -->
<button aria-label="Stäng dialogruta">X</button>

<!-- På andra sidan -->
<button aria-label="Avbryt och återgå">X</button>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html)
- [Webbriktlinjer - R27: Hjälp användaren genom att vara konsekvent](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/hjalp-anvandaren-genom-att-vara-konsekvent)
