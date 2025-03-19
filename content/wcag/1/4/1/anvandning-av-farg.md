---
title: Användning av färg
description: Färg används inte som det enda visuella sättet att förmedla information, indikera en handling, be om respons eller särskilja ett visuellt element.
level: A
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 1
---

# Framgångskriterium 1.4.1 Användning av färg

## Beskrivning

Färg används inte som det enda visuella sättet att förmedla information, indikera en handling, be om respons eller särskilja ett visuellt element.

## Varför detta behövs

Personer med färgblindhet eller andra synnedsättningar kan ha svårt att uppfatta färgskillnader. Cirka 8% av alla män och 0,5% av alla kvinnor har någon form av färgseendedefekt.

När information endast förmedlas genom färg riskerar dessa användare att missa viktig information eller funktionalitet. Dessutom kan situationella begränsningar som dålig belysning, reflektioner på skärmen eller svartvita utskrifter göra färginformation otillgänglig även för användare utan synnedsättningar.

Genom att säkerställa att färg inte är det enda sättet att förmedla information gör du innehållet tillgängligt för alla, oavsett deras förmåga att uppfatta färger.

## Exempel

### Exempel på bra implementering

#### Felmeddelande med både färg och ikon/text

```html
<div class="error" role="alert">
  <span class="error-icon">❌</span>
  <strong>Fel:</strong> Användarnamnet eller lösenordet är felaktigt.
</div>
```

```css
.error {
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  padding: 10px;
}
```

#### Länk som markeras med både färg och understrykning

```html
<style>
  a {
    color: #0066cc;
    text-decoration: underline;
  }
  a:hover,
  a:focus {
    color: #004080;
    text-decoration: underline;
  }
</style>

<p>Besök vår <a href="/kontakt">kontaktsida</a> för mer information.</p>
```

#### Diagram med både färg och mönster

```html
<figure>
  <img
    src="diagram.png"
    alt="Stapeldiagram som visar försäljning per kvartal. Q1: 23%, Q2: 28%, Q3: 31%, Q4: 18%. Varje stapel har både olika färg och olika mönster för att särskilja dem."
  />
  <figcaption>
    Försäljning per kvartal 2023 (Q1: randigt, Q2: prickigt, Q3: rutat, Q4:
    linjerat)
  </figcaption>
</figure>
```

### Exempel på bristande implementering

#### Obligatoriska fält markerade endast med färg

```html
<style>
  .required {
    color: red;
  }
</style>

<form>
  <div>
    <label class="required">Namn</label>
    <input type="text" name="name" />
  </div>
  <div>
    <label>Telefon</label>
    <input type="tel" name="phone" />
  </div>
  <!-- Inget annat indikerar vilka fält som är obligatoriska -->
</form>
```

#### Tillstånd indikeras endast med färg

```html
<style>
  .available {
    color: green;
  }
  .unavailable {
    color: red;
  }
</style>

<p>Produktstatus:</p>
<ul>
  <li class="available">Produkt A</li>
  <li class="unavailable">Produkt B</li>
  <li class="available">Produkt C</li>
  <!-- Inget annat än färg indikerar tillgänglighet -->
</ul>
```

#### Länkar som skiljer sig från omgivande text endast genom färg

```html
<style>
  a {
    color: #0066cc;
    text-decoration: none; /* Ingen understrykning */
  }
</style>

<p>Läs mer om våra tjänster på vår serviceavdelning.</p>
<!-- "serviceavdelning" är en länk, men det framgår endast av färgen -->
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [Webbriktlinjer - R122: Använd inte enbart färg för att förmedla information](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/anvand-inte-enbart-farg-for-att-formedla-information)
- [WebAIM - Color Blindness](https://webaim.org/articles/visual/colorblind)
- [Färgblindhetssimulatorer](https://www.color-blindness.com/coblis-color-blindness-simulator/)
