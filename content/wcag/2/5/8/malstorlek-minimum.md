---
title: Målstorlek (minimum)
description: Storleken på målytan för pekarinmatning är minst 24 x 24 CSS-pixlar, utom när målet är inbäddat i en mening.
level: AA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 5
guidelineName: Inmatningsmetoder
criterionNumber: 8
---

# Framgångskriterium 2.5.8 Målstorlek (minimum)

## Beskrivning

Målstorleken för pekares inmatningspunkt är minst 24 x 24 CSS-pixlar, förutom när:

- **Likvärdigt:** Målet är tillgängligt genom en likvärdig länk eller kontroll på samma sida som är minst 24 x 24 CSS-pixlar.
- **Inbäddat:** Målet finns i en mening eller block av text.
- **Styrt av webbläsaren:** Storleken på målet bestäms av webbläsaren och ändras inte av författaren.
- **Nödvändigt:** En särskild presentation av målet är nödvändig för informationen som förmedlas.

## Varför detta behövs

Klickbara element som är för små kan vara svåra att träffa för personer med motoriska funktionsnedsättningar, för äldre användare med nedsatt precision i handrörelser, och för alla som använder pekskärmar. Genom att säkerställa att klickbara mål har tillräcklig storlek förbättras användbarheten för alla, särskilt för de med motoriska svårigheter.

## Exempel

### Exempel på bra implementering

#### Knappar med tillräcklig storlek

```css
.button {
  min-width: 44px;
  min-height: 44px;
  padding: 10px;
}
```

#### Navigationslänkar med god träffyta

```css
.nav-link {
  display: inline-block;
  padding: 12px;
}
```

#### Kryssrutor med utökad klickbar yta

```html
<style>
  .checkbox-container {
    padding: 10px;
    display: inline-block;
  }

  .checkbox-container input {
    margin: 0;
  }

  /* Använd label för att utöka klickbar yta */
  .checkbox-container label {
    padding: 8px;
    display: inline-block;
  }
</style>

<div class="checkbox-container">
  <input type="checkbox" id="consent" name="consent" />
  <label for="consent">Jag godkänner villkoren</label>
</div>
```

### Exempel på bristande implementering

#### För små knappar

```css
.icon-button {
  width: 16px;
  height: 16px;
  padding: 0;
}
```

#### Små klickbara ikoner utan utökad träffyta

```html
<a href="settings.html">
  <img src="settings-icon.png" width="16" height="16" alt="Inställningar" />
</a>
```

#### Tätt placerade länkikoner

```html
<div class="social-icons">
  <a href="#"
    ><img src="facebook.png" width="20" height="20" alt="Facebook"
  /></a>
  <a href="#"><img src="twitter.png" width="20" height="20" alt="Twitter" /></a>
  <a href="#"
    ><img src="instagram.png" width="20" height="20" alt="Instagram"
  /></a>
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [Webbriktlinjer - R34: Gör länkar och klickbara ytor tillräckligt stora](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/gor-lankar-och-klickbara-ytor-tillrackligt-stora)
