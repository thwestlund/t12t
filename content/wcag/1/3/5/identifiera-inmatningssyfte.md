---
title: Identifiera inmatningssyfte
description: Syftet med varje inmatningsfält som samlar in information om användaren kan bestämmas programmatiskt.
level: AA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 3
guidelineName: Anpassningsbart
criterionNumber: 5
---

# Framgångskriterium 1.3.5 Identifiera inmatningssyfte

## Beskrivning

Syftet med varje inmatningsfält som samlar in information om användaren kan bestämmas programmatiskt när:

- Inmatningsfältet har ett syfte som identifierats i avsnittet Input Purposes for User Interface Components i WCAG-specifikationen; och
- Innehållet implementeras med tekniker som stöder identifiering av inmatningsfältets förväntade betydelse för användardata.

## Varför detta behövs

Många användare har svårigheter att fylla i formulär på webben, särskilt personer med kognitiva funktionsnedsättningar, inlärningssvårigheter eller minnesproblem. Genom att programmatiskt identifiera syftet med vanliga inmatningsfält möjliggörs för webbläsare, hjälpmedel och tillägg att:

- Automatiskt fylla i information som användaren redan angett tidigare
- Visa ikoner eller anpassade etiketter som gör det lättare att förstå vad som ska anges
- Anpassa presentationen av formulärfält för att göra dem lättare att använda

Detta kan avsevärt minska den kognitiva belastningen för alla användare och göra webbplatser mer tillgängliga och användbara.

## Exempel

### Exempel på bra implementering

#### Personuppgiftsformulär med autocomplete-attribut

```html
<form>
  <div>
    <label for="name">Namn</label>
    <input type="text" id="name" name="name" autocomplete="name" />
  </div>
  <div>
    <label for="email">E-post</label>
    <input type="email" id="email" name="email" autocomplete="email" />
  </div>
  <div>
    <label for="tel">Telefon</label>
    <input type="tel" id="tel" name="tel" autocomplete="tel" />
  </div>
  <div>
    <label for="street-address">Gatuadress</label>
    <input
      type="text"
      id="street-address"
      name="street-address"
      autocomplete="street-address"
    />
  </div>
  <div>
    <label for="postal-code">Postnummer</label>
    <input
      type="text"
      id="postal-code"
      name="postal-code"
      autocomplete="postal-code"
    />
  </div>
  <div>
    <label for="city">Ort</label>
    <input type="text" id="city" name="city" autocomplete="address-level2" />
  </div>
</form>
```

#### Betalningsinformation med specificerade autocomplete-attribut

```html
<form>
  <div>
    <label for="cc-name">Namn på kort</label>
    <input type="text" id="cc-name" name="cc-name" autocomplete="cc-name" />
  </div>
  <div>
    <label for="cc-number">Kortnummer</label>
    <input
      type="text"
      id="cc-number"
      name="cc-number"
      autocomplete="cc-number"
    />
  </div>
  <div>
    <label for="cc-exp">Utgångsdatum</label>
    <input type="text" id="cc-exp" name="cc-exp" autocomplete="cc-exp" />
  </div>
  <div>
    <label for="cc-csc">Säkerhetskod</label>
    <input type="text" id="cc-csc" name="cc-csc" autocomplete="cc-csc" />
  </div>
</form>
```

### Exempel på bristande implementering

#### Formulär utan autocomplete-attribut

```html
<form>
  <div>
    <label for="name">Namn</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="email">E-post</label>
    <input type="email" id="email" name="email" />
  </div>
  <!-- Inga autocomplete-attribut -->
</form>
```

#### Felaktigt användande av autocomplete-attribut

```html
<form>
  <div>
    <label for="first-name">Förnamn</label>
    <input
      type="text"
      id="first-name"
      name="first-name"
      autocomplete="full-name"
    />
    <!-- Använder felaktigt autocomplete-värde -->
  </div>
  <div>
    <label for="email">E-post</label>
    <input type="text" id="email" name="email" autocomplete="email" />
    <!-- Använder text istället för email som inputtyp -->
  </div>
</form>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)
- [HTML 5.2 - List of autocomplete attribute tokens](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill)
- [Webbriktlinjer - Märk upp formulär tydligt](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/mark-upp-formular-tydligt)
