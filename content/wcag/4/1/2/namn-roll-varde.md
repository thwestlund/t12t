---
title: Namn, roll, värde
description: För alla komponenter i användargränssnittet kan namn och roll bestämmas programmatiskt; status, egenskaper och värden kan ställas in programmatiskt; och förändringar i dessa kan göras tillgängliga för hjälpmedel.
level: A
principleNumber: 4
principleName: Robust
guidelineNumber: 1
guidelineName: Kompatibel
criterionNumber: 2

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 4.1.2 Namn, roll, värde

## Beskrivning

För alla komponenter i användargränssnittet (inklusive men inte begränsat till: formulärelement, länkar och komponenter som genereras av skript), kan namn och roll bestämmas programmatiskt; tillstånd, egenskaper och värden som kan ställas in av användaren kan ställas in programmatiskt; och meddelande om ändringar i dessa objekt är tillgängliga för användarprogram, inklusive hjälpmedel.

## Varför detta behövs

För att hjälpmedel ska kunna interagera med användargränssnittskomponenter behöver de information om komponenternas namn, roll och värde. Om denna information saknas eller är felaktig kan personer som använder hjälpmedel inte förstå eller interagera med komponenten. Detta är särskilt viktigt för egna komponenter som inte använder standardelement i HTML.

## Exempel

### Exempel på bra implementering

#### Formulärelement med etikett

```html
<label for="namn">Namn:</label> <input type="text" id="namn" name="namn" />
```

#### Knapp som tydligt anger sin funktion

```html
<button type="submit">Skicka in formuläret</button>
```

#### Anpassad komponent med ARIA-attribut

```html
<div
  role="button"
  tabindex="0"
  aria-pressed="false"
  onclick="toggleMenu()"
  onkeydown="if(event.key === 'Enter' || event.key === ' ') toggleMenu()"
>
  Öppna meny
</div>
```

#### Uppdaterat tillstånd för en komponent

```html
<div role="alert" aria-live="polite">Ditt formulär har skickats in.</div>
```

### Exempel på bristande implementering

#### Formulärelement utan etikett

```html
<input type="text" name="namn" />
```

#### Bilder som fungerar som knappar utan alternativtext

```html
<img src="submit.png" onclick="skickaFormular()" />
```

#### Egna komponenter utan ARIA-attribut

```html
<div class="custom-checkbox" onclick="toggleCheckbox()"></div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [Webbriktlinjer - R60: Utveckla med WAI-ARIA för bättre tillgänglighet](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/utveckla-med-wai-aria-for-battre-tillganglighet)
