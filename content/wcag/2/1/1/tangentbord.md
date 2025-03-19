---
title: Tangentbordsnavigering
description: All funktionalitet är tillgänglig från ett tangentbord utan att specifika tidsbestämda tangenttryckningar krävs.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 1
guidelineName: Tillgängligt via tangentbord
criterionNumber: 1
---

# Framgångskriterium 2.1.1 Tangentbordsnavigering

## Beskrivning

All funktionalitet i innehållet kan hanteras via ett tangentbordsgränssnitt utan att det krävs specifika tidsbestämda tangenttryckningar för enskilda tangenttryckningar, förutom när den underliggande funktionen kräver inmatning som beror på vägen för användarens rörelse och inte bara på slutpunkterna.

## Varför detta behövs

Många användare kan inte använda mus eller andra pekdon på grund av motoriska funktionsnedsättningar eller synnedsättningar. De förlitar sig istället på tangentbord eller tangentbordsliknande inmatningsenheter. Genom att säkerställa att alla funktioner kan nås och användas med tangentbord ger man dessa användare möjlighet att interagera med webbinnehållet.

## Exempel

### Exempel på bra implementering

#### Klickbara element som är åtkomliga med tangentbord

```html
<button onclick="doSomething()">Klicka här</button>
```

#### Länkar som kan aktiveras med tangentbord

```html
<a href="sida.html">Gå till sidan</a>
```

#### Formulärelement som kan användas med tangentbord

```html
<form>
  <label for="namn">Namn:</label>
  <input type="text" id="namn" name="namn" />
  <label for="email">E-post:</label>
  <input type="email" id="email" name="email" />
  <button type="submit">Skicka</button>
</form>
```

#### Egna komponenter med tangentbordshantering

```html
<div
  role="button"
  tabindex="0"
  onclick="togglePanel()"
  onkeydown="if(event.key === 'Enter' || event.key === ' ') togglePanel()"
>
  Öppna panel
</div>
```

### Exempel på bristande implementering

#### Icke-klickbara div som fungerar som knappar

```html
<div onclick="doSomething()">Klicka här</div>
```

#### Anpassade komponenter utan tangentbordshantering

```html
<div class="custom-dropdown" onclick="showOptions()">Välj alternativ</div>
```

#### Funktioner som bara aktiveras vid mushovring

```html
<div onmouseover="showMenu()">Meny</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [Webbriktlinjer - R129: Utveckla systemet så att det går att hantera med enbart tangentbordet](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/utveckla-systemet-sa-att-det-gar-att-hantera-med-enbart-tangentbordet)
