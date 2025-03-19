---
title: Info och relationer
description: Information, struktur och relationer som förmedlas genom presentation kan göras programmatiskt bestämbara eller är tillgängliga i text.
level: A
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 3
guidelineName: Anpassningsbart
criterionNumber: 1

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.3.1 Info och relationer

## Beskrivning

Information, struktur och relationer som förmedlas genom presentation kan göras programmatiskt bestämbara eller är tillgängliga i text.

## Varför detta behövs

Personer som använder hjälpmedel, som skärmläsare, behöver kunna uppfatta informationsstrukturen i digitalt innehåll. När struktur och relationer enbart förmedlas visuellt (genom layout, typsnitt, färger etc.) går denna information förlorad för användare som inte kan se presentationen. Genom att använda semantisk HTML och ARIA-attribut kan dessa strukturer och relationer göras tillgängliga för hjälpmedel.

## Exempel

### Exempel på bra implementering

#### Rubrikstruktur

```html
<h1>Huvudrubrik</h1>
<h2>Underrubrik</h2>
<p>Brödtext...</p>
<h2>Ytterligare underrubrik</h2>
<p>Mer brödtext...</p>
```

#### Listor

```html
<ul>
  <li>Första punkten</li>
  <li>Andra punkten</li>
  <li>Tredje punkten</li>
</ul>
```

#### Formulär med etiketter

```html
<label for="namn">Namn:</label> <input type="text" id="namn" name="namn" />
```

#### Tabeller med rubriker

```html
<table>
  <caption>
    Öppettider
  </caption>
  <thead>
    <tr>
      <th scope="col">Dag</th>
      <th scope="col">Öppettid</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Måndag-fredag</th>
      <td>9-18</td>
    </tr>
    <tr>
      <th scope="row">Lördag</th>
      <td>10-15</td>
    </tr>
  </tbody>
</table>
```

### Exempel på bristande implementering

#### Visuell rubrikstruktur utan korrekta element

```html
<div style="font-size: 24px; font-weight: bold;">Huvudrubrik</div>
<div style="font-size: 18px; font-weight: bold;">Underrubrik</div>
<p>Brödtext...</p>
```

#### Lista utan listelement

```html
<p>• Första punkten<br />• Andra punkten<br />• Tredje punkten</p>
```

#### Formulär utan etikett

```html
<p>Namn:</p>
<input type="text" name="namn" />
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [Webbriktlinjer - R28: Använd HTML:s standardelement på ett korrekt sätt](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/anvand-htmls-standardelement-pa-ett-korrekt-satt)
