---
title: Statusmeddelanden
description: Statusmeddelanden kan programmatiskt bestämmas genom roll eller egenskaper så att de kan presenteras för användaren med hjälpmedel utan att få fokus.
level: AA
principleNumber: 4
principleName: Robust
guidelineNumber: 1
guidelineName: Kompatibel
criterionNumber: 3
---

# Framgångskriterium 4.1.3 Statusmeddelanden

## Beskrivning

I innehåll som implementerats med märkspråk kan statusmeddelanden programmatiskt bestämmas genom roll eller egenskaper så att de kan presenteras för användaren med hjälpmedel utan att få fokus.

## Varför detta behövs

Statusmeddelanden informerar användaren om förändringar i innehållet som kan ha skett som resultat av deras handlingar eller automatiska processer. För användare med hjälpmedel, särskilt skärmläsare, är det viktigt att dessa meddelanden blir tillgängliga utan att avbryta användarens nuvarande aktivitet. Genom att använda ARIA-attribut kan statusmeddelanden förmedlas utan att flytta tangentbordsfokus.

## Exempel

### Exempel på bra implementering

#### Bekräftelse på åtgärd

```html
<div role="status" aria-live="polite">
  Din beställning har lagts till i varukorgen.
</div>
```

#### Felstatus med högre prioritet

```html
<div role="alert" aria-atomic="true">
  Det gick inte att spara dina ändringar. Kontrollera nätverksanslutningen och
  försök igen.
</div>
```

#### Uppdatering av sidinformation

```html
<div aria-live="polite" aria-atomic="true">Sökningen gav 25 resultat.</div>
```

#### Progressindikator

```html
<div role="status" aria-live="polite">
  <p>Laddar upp fil... <span id="progress">30%</span> klart</p>
</div>

<script>
  // Uppdatera förloppsindikatorn
  function updateProgress(percent) {
    document.getElementById("progress").textContent = percent + "%";
  }
</script>
```

### Exempel på bristande implementering

#### Statusmeddelande utan ARIA-attribut

```html
<div class="status-message">Din beställning har lagts till i varukorgen.</div>
```

#### Felmeddelande som inte förmedlas till hjälpmedel

```html
<div class="error-message">Det gick inte att spara dina ändringar.</div>
```

#### JavaScript-alert som avbryter användaren

```javascript
alert("Din beställning har lagts till i varukorgen.");
```

## Länk till mer information

- [WCAG 2.2 - Understanding 4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
- [Webbriktlinjer - R60: Utveckla med WAI-ARIA för bättre tillgänglighet](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/utveckla-med-wai-aria-for-battre-tillganglighet)
