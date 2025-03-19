---
title: Etiketter eller instruktioner
description: Etiketter eller instruktioner tillhandahålls när innehåll kräver inmatning från användare.
level: A
principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningsstöd
criterionNumber: 2

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 3.3.2 Etiketter eller instruktioner

## Beskrivning

Etiketter eller instruktioner tillhandahålls när innehåll kräver inmatning från användare.

## Varför detta behövs

Tydliga etiketter och instruktioner hjälper alla användare att förstå vilken information som förväntas i ett formulärfält och hur den ska formateras. Detta är särskilt viktigt för personer med kognitiva funktionsnedsättningar, inlärningssvårigheter, eller personer som använder hjälpmedel som skärmläsare. Genom att tillhandahålla tydliga instruktioner minskar man risken för fel och frustration vid inmatning.

## Exempel

### Exempel på bra implementering

#### Tydliga etiketter och formatinstruktioner

```html
<div>
  <label for="phoneNumber">Telefonnummer:</label>
  <input
    type="tel"
    id="phoneNumber"
    name="phoneNumber"
    aria-describedby="phoneHint"
  />
  <span id="phoneHint">Ange telefonnummer i format: 070-123 45 67</span>
</div>
```

#### Placeholder som komplement till etikett

```html
<div>
  <label for="birthdate">Födelsedatum:</label>
  <input
    type="date"
    id="birthdate"
    name="birthdate"
    placeholder="ÅÅÅÅ-MM-DD"
    aria-describedby="dateHint"
  />
  <span id="dateHint">Ange datum i format år-månad-dag, t.ex. 1980-01-15</span>
</div>
```

#### Fältgrupp med legendetikett

```html
<fieldset>
  <legend>Leveransalternativ</legend>

  <div>
    <input type="radio" id="delivery1" name="delivery" value="standard" />
    <label for="delivery1">Standardleverans (3-5 arbetsdagar)</label>
  </div>

  <div>
    <input type="radio" id="delivery2" name="delivery" value="express" />
    <label for="delivery2">Expressleverans (1-2 arbetsdagar)</label>
  </div>
</fieldset>
```

#### Instruktioner före formulär

```html
<div>
  <h2>Registreringsformulär</h2>
  <p>Fält markerade med * är obligatoriska.</p>

  <form>
    <div>
      <label for="name">Namn: *</label>
      <input type="text" id="name" name="name" required />
    </div>

    <div>
      <label for="email">E-post: *</label>
      <input type="email" id="email" name="email" required />
    </div>

    <div>
      <label for="website">Webbplats:</label>
      <input type="url" id="website" name="website" />
    </div>

    <button type="submit">Registrera</button>
  </form>
</div>
```

### Exempel på bristande implementering

#### Formulärfält utan etiketter

```html
<div>
  <input type="text" name="username" />
  <input type="password" name="password" />
  <button type="submit">Logga in</button>
</div>
```

#### Otydliga etiketter utan formatinstruktioner

```html
<div>
  <label for="dob">Datum:</label>
  <input type="text" id="dob" name="dob" />
</div>
```

#### Placeholder istället för etikett

```html
<div>
  <input type="text" name="name" placeholder="Namn" />
  <input type="email" name="email" placeholder="E-post" />
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [Webbriktlinjer - R55: Skapa tydliga och klickbara fältrubriker](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/skapa-tydliga-och-klickbara-faltrubriker)
