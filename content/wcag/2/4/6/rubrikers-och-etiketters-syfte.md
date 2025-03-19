---
title: Rubrikers och etiketter syfte
description: Rubriker och etiketter beskriver ämne eller syfte.
level: AA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 4
guidelineName: Navigerbart
criterionNumber: 6
---

# Framgångskriterium 2.4.6 Rubrikers och etiketter syfte

## Beskrivning

Rubriker och etiketter beskriver ämne eller syfte.

## Varför detta behövs

Tydliga och beskrivande rubriker och etiketter gör det enklare för alla användare att hitta information och navigera på webbplatsen. Detta är särskilt viktigt för personer med kognitiva funktionsnedsättningar som kan ha svårt att tolka vaga eller tvetydiga rubriker. Det hjälper även skärmläsaranvändare som ofta navigerar mellan rubriker för att hitta specifikt innehåll.

## Exempel

### Exempel på bra implementering

#### Beskrivande rubriker

```html
<h1>Ansökan om bygglov i Karlstads kommun</h1>

<h2>Vem kan ansöka om bygglov?</h2>

<h2>Vilka handlingar behöver du bifoga?</h2>

<h2>Så här går ansökningsprocessen till</h2>
```

#### Tydliga etiketter för formulärfält

```html
<label for="delivery-address">Leveransadress</label>
<input type="text" id="delivery-address" name="delivery-address" />

<label for="billing-address">Fakturaadress (om annan än leveransadress)</label>
<input type="text" id="billing-address" name="billing-address" />
```

#### Beskrivande knapptext

```html
<button type="submit">Skicka in din ansökan</button>
<button type="button">Spara som utkast</button>
```

### Exempel på bristande implementering

#### Otydliga rubriker

```html
<h1>Information</h1>

<h2>Ansökan</h2>

<h2>Process</h2>

<h2>Övrigt</h2>
```

#### Vaga etiketter

```html
<label for="field1">Namn:</label>
<input type="text" id="field1" name="field1" />

<label for="field2">Information:</label>
<input type="text" id="field2" name="field2" />
```

#### Ospecifika knapptexter

```html
<button type="submit">Skicka</button> <button type="button">Klicka här</button>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
- [Webbriktlinjer - R61: Skriv tydliga och berättande rubriker](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/skriv-tydliga-och-berattande-rubriker)
- [Webbriktlinjer - R55: Skapa tydliga och klickbara fältrubriker](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/skapa-tydliga-och-klickbara-faltrubriker)
