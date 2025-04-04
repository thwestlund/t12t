---
title: 1.3.1 Info och relationer
description: Gör information, struktur och relationer som förmedlas visuellt tydliga även för hjälpmedel genom kod.
level: A
slug: info-och-relationer
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "semantik",
    "HTML",
    "struktur",
    "relationer",
    "rubriker",
    "listor",
    "tabeller",
    "formulär",
    "info and relationships",
  ]
canonical: https://t12t.dev/wcag/1/3/1/info-och-relationer

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 3
guidelineName: Anpassningsbar
criterionNumber: 1

og:
  title: 1.3.1 Info och relationer – WCAG
  description: Gör information, struktur och relationer som förmedlas visuellt tydliga även för hjälpmedel genom kod.
  url: https://t12t.dev/wcag/1/3/1/info-och-relationer
  type: article

datePublished: 2025-03-29
dateModified: 2024-05-16

sitemap:
  lastmod: 2024-05-16
  changefreq: monthly
  priority: 0.8
---

# Info och relationer

## Beskrivning

Information, struktur och relationer som förmedlas genom presentation (visuell layout, formatering) ska kunna avgöras programmeringsmässigt eller finnas tillgängliga i text.

Detta innebär att den mening eller det syfte som kommuniceras visuellt genom:

- **Struktur:** T.ex. rubriker, stycken, listor, sektioner.
- **Relationer:** T.ex. koppling mellan en etikett och ett formulärfält, rader och kolumner i en tabell, eller gruppering av relaterade kontroller.
- **Information:** T.ex. text som är fet eller kursiv för att indikera viktighet eller betoning.

...måste också representeras i koden (vanligtvis HTML) med korrekta semantiska element och attribut.

## Varför detta behövs

Hjälpmedel som skärmläsare förlitar sig på den underliggande koden för att förstå och presentera innehållet för användaren.

- **Navigering:** Korrekta rubrikelement ([\<h1\>]{.inline-code}–[\<h6\>]{.inline-code}) låter skärmläsaranvändare snabbt hoppa mellan olika avsnitt på sidan. Listelement ([\<ul\>]{.inline-code}, [ \<ol\>]{.inline-code}, [\<li\>]{.inline-code}) gör det möjligt att förstå gruppering och antal punkter.
- **Förståelse:** Semantiska element som [\<table\>]{.inline-code}, [\<th\>]{.inline-code}, [\<td\>]{.inline-code} hjälper användaren att förstå relationerna mellan celler i en tabell. Korrekt kopplade etiketter ([\<label\>]{.inline-code}) till formulärfält ([\<input\>]{.inline-code}, [\<textarea\>]{.inline-code}, [\<select\>]{.inline-code}) är avgörande för att veta vad som ska fyllas i. Element som [\<strong\>]{.inline-code} och [\<em\>]{.inline-code} förmedlar viktighet och betoning som annars bara syns visuellt.
- **Anpassning:** När strukturen är korrekt kodad kan användare anpassa presentationen (t.ex. genom att ta bort CSS) utan att förlora information om struktur och relationer.

Om man bara använder visuell formatering (t.ex. större text för rubriker, indrag för listor) utan semantisk kod, blir sidan en oformaterad vägg av text för hjälpmedelsanvändare, vilket gör den svår eller omöjlig att navigera och förstå.

---

## Exempel

### Rubriker

Använd korrekta rubrikelement för att markera avsnitt och underavsnitt. Använd inte vanliga stycken stylade som rubriker.

::code-group{:labels='["Korrekt ✅", "Fel ❌"]'}

```html {1, 3} showLineNumbers
<h1>Huvudrubrik för sidan</h1>
<p>Lite text...</p>
<h2>Underrubrik för ett avsnitt</h2>
<p>Mer text...</p>
```

```html {1, 3} showLineNumbers
<p style="font-size: 2em; font-weight: bold;">Huvudrubrik för sidan</p>
<p>Lite text...</p>
<p style="font-size: 1.5em; font-weight: bold;">Underrubrik för ett avsnitt</p>
<p>Mer text...</p>
```

::

### Listor

Använd [\<ul\>]{.inline-code} för oordnade listor och [\<ol\>]{.inline-code} för ordnade listor. Använd inte stycken med bindestreck eller siffror.

::code-group{:labels='["Korrekt ✅", "Fel ❌"]'}

```html showLineNumbers
<ul>
  <li>Första punkten</li>
  <li>Andra punkten</li>
</ul>

<ol>
  <li>Steg ett</li>
  <li>Steg två</li>
</ol>
```

```html showLineNumbers
<p>- Första punkten</p>
<p>- Andra punkten</p>
<br />
<p>1. Steg ett</p>
<p>2. Steg två</p>
```

::

### Betoning och viktighet

Använd [\<em\>]{.inline-code} för betoning och [\<strong\>]{.inline-code} för stark viktighet. Använd inte bara CSS för att göra text fet eller kursiv om det har semantisk betydelse.

::code-group{:labels='["Korrekt ✅", "Fel ❌"]'}

```html showLineNumbers
<!-- Betoning -->
<p>Du <em>måste</em> svara innan fredag.</p>

<!-- Viktighet -->
<p><strong>Varning:</strong> Rör inte vid utrustningen.</p>
```

```html showLineNumbers
<p>Du <span style="font-style: italic;">måste</span> svara innan fredag.</p>
<p>
  <span style="font-weight: bold;">Varning:</span> Rör inte vid utrustningen.
</p>
```

::

### Datatabeller

Använd korrekta tabellelement inklusive [\<caption\>]{.inline-code}, [\<th\>]{.inline-code} med [scope]{.inline-code}-attribut för att definiera rad- och kolumnrubriker.

::code-group{:labels='["Korrekt ✅"]'}

```html {2, 4, 5, 7, 10} showLineNumbers
<table>
  <caption>
    Försäljning per kvartal
  </caption>
  <thead>
    <tr>
      <th scope="col">Kvartal</th>
      <th scope="col">Försäljning (tkr)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Q1</th>
      <td>500</td>
    </tr>
    <tr>
      <th scope="row">Q2</th>
      <td>650</td>
    </tr>
  </tbody>
</table>
```

::

### Formuläretiketter

Associera varje formulärkontroll ([\<input\>]{.inline-code}, [\<textarea\>]{.inline-code}, [\<select\>]{.inline-code}) med en [\<label\>]{.inline-code} med hjälp av attributen [for]{.inline-code} och [id]{.inline-code}.

::code-group{:labels='["Korrekt ✅", "Fel ❌"]'}

```html {1, 2} showLineNumbers
<label for="anvnamn">Användarnamn:</label>
<input type="text" id="anvnamn" name="username" />

<label for="meddelande">Meddelande:</label>
<textarea id="meddelande" name="message"></textarea>
```

```html showLineNumbers
Användarnamn:
<input type="text" name="username" />
<br />
Meddelande:
<textarea name="message"></textarea>
```

::

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.3.1 Info and Relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [Webbriktlinjer: R101 Använd element och attribut på ett sätt som överensstämmer med specifikationerna](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/anvand-element-och-attribut-pa-ett-satt-som-overensstammer-med-specifikationerna) och relaterade riktlinjer för rubriker, listor, tabeller etc.
- [MDN Web Docs: HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) (Se specifika element som [\<h1\>-\<h6\>]{.inline-code}, [\<ul\>]{.inline-code}, [\<ol\>]{.inline-code}, [\<li\>]{.inline-code}, [\<strong\>]{.inline-code}, [\<em\>]{.inline-code}, [\<table\>]{.inline-code}, [\<label\>]{.inline-code})
- [W3C WAI Tutorials: Semantic Structure](https://www.w3.org/WAI/tutorials/page-structure/semantic-structure/)
