---
title: Sensoriska kännetecken
description: Instruktioner som tillhandahålls för att förstå och hantera innehåll är inte enbart beroende av sensoriska kännetecken.
level: A
slug: sensoriska-kannetecken
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "sensoriska kännetecken",
    "form",
    "storlek",
    "visuell placering",
    "orientering",
    "ljud",
  ]
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 3
guidelineName: Anpassningsbart
criterionNumber: 3

og:
  title: Sensoriska kännetecken - WCAG
  description: Instruktioner som tillhandahålls för att förstå och hantera innehåll är inte enbart beroende av sensoriska kännetecken.
  url: https://t12t.dev/wcag/sensoriska-kannetecken
  type: article

datePublished: 2025-03-19
dateModified: 2025-03-27

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Sensoriska kännetecken

## Beskrivning

Instruktioner som tillhandahålls för att förstå och hantera innehåll är inte enbart beroende av sensoriska kännetecken hos komponenter såsom form, storlek, visuell placering, orientering eller ljud.

## Varför detta behövs

Personer med olika funktionsnedsättningar, särskilt synnedsättningar, kan ha svårt att uppfatta visuella detaljer eller att höra specifika ljud. Om instruktioner enbart baseras på hur något ser ut eller låter, kan dessa användare inte ta del av informationen.

Genom att tillhandahålla instruktioner som inte enbart förlitar sig på sensoriska kännetecken säkerställer du att alla användare kan förstå och använda innehållet, oavsett deras förmåga att uppfatta visuella eller auditiva detaljer.

Instruktioner bör inkludera text som identifierar objekt med namn eller position i relation till andra namngivna objekt, inte bara med färg, form, ljud eller position.

## Exempel

### Exempel på bra implementering

#### Instruktioner med både visuella och textuella identifierare

```html
<p>
  Klicka på "Fortsätt"-knappen (den gröna knappen i det nedre högra hörnet) för
  att gå vidare.
</p>
```

#### Formulärinstruktioner med tydlig koppling

```html
<form>
  <p>
    Fyll i alla obligatoriska fält markerade med en asterisk (*) och röd text.
  </p>
  <div>
    <label for="namn">Namn *</label>
    <input id="namn" type="text" required aria-required="true" />
  </div>
</form>
```

### Exempel på bristande implementering

#### Instruktioner baserade enbart på färg

```html
<p>Klicka på den röda knappen för att avbryta.</p>
<!-- Ingen annan identifierande information ges -->
```

#### Instruktioner baserade enbart på position

```html
<p>Se informationen i rutan till höger för mer detaljer.</p>
<!-- Ingen identifierande text för rutan, endast dess position -->
```

#### Instruktioner baserade enbart på form

```html
<p>Klicka på den runda ikonen för att visa menyn.</p>
<!-- Ingen annan identifierande information om ikonen -->
```

#### Instruktioner baserade enbart på ljud

```html
<p>När du hör en signal, tryck på Enter.</p>
<!-- Ingen visuell indikation eller alternativt sätt att uppfatta signalen -->
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html)
- [WebAIM - Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [Webbriktlinjer - Ge användaren möjlighet att få hjälp](https://www.digg.se/kunskap-och-stod/digital-tillganglighet/webbriktlinjer-for-tillganglighet/riktlinjer/ge-anvandaren-mojlighet-att-fa-hjalp)
