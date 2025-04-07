---
title: 4.1.3 Statusmeddelanden
description: Säkerställ att statusmeddelanden kan presenteras för användare av hjälpmedel utan att de får fokus.
level: AA
slug: statusmeddelanden
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "statusmeddelanden",
    "status messages",
    "ARIA live regions",
    "aria-live",
    "role status",
    "role alert",
    "hjälpmedel",
    "skärmläsare",
    "dynamiskt innehåll",
    "robust",
    "kompatibel",
  ]
canonical: https://t12t.dev/wcag/4/1/3/statusmeddelanden

principleNumber: 4
principleName: Robust
guidelineNumber: 1
guidelineName: Kompatibel
criterionNumber: 3

og:
  title: 4.1.3 Statusmeddelanden – WCAG
  description: Säkerställ att statusmeddelanden kan presenteras för hjälpmedel utan att få fokus.
  url: https://t12t.dev/wcag/4/1/3/statusmeddelanden
  type: article

datePublished: 2025-08-03
dateModified: 2024-05-18

sitemap:
  lastmod: 2024-05-18
  changefreq: weekly # Dynamic content is common
  priority: 0.7 # AA, important
---

# Statusmeddelanden

## Beskrivning

I innehåll som implementeras med märkspråk kan **statusmeddelanden** bestämmas programmatiskt genom **roll** eller **egenskaper** så att de kan presenteras för användaren av **hjälpmedel** utan att få fokus.

Detta kriterium (Nivå AA, introducerat i WCAG 2.1) innebär att när viktig information visas för användaren, men inte nödvändigtvis är det element som har fokus, måste denna information göras tillgänglig för hjälpmedel som skärmläsare. Detta gäller information som:
- Bekräftar att en handling lyckats (t.ex. "Din profil har sparats", "Varan har lagts i varukorgen").
- Visar resultatet av en handling (t.ex. "Visar 10 av 50 sökresultat").
- Indikerar att något pågår (t.ex. "Laddar...", "Söker...").
- Varnar om ett fel eller problem som inte är direkt kopplat till ett specifikt fält (t.ex. "Sessionen går snart ut", "Inga sökresultat hittades").

Detta uppnås oftast genom att använda **ARIA live regions**. Genom att ge en container-element en specifik [role]{.inline-code} eller ett [aria-live]{.inline-code}-attribut, kan man instruera hjälpmedel att automatiskt läsa upp innehållet i den regionen när det ändras, **utan att flytta tangentbordsfokus** från användarens nuvarande position.

Vanliga tekniker:
-   [role="status"]{.inline-code} eller [aria-live="polite"]{.inline-code}: För vanliga statusuppdateringar och bekräftelser. Skärmläsaren läser upp meddelandet när den har en naturlig paus.
-   [role="alert"]{.inline-code} eller [aria-live="assertive"]{.inline-code}: För viktiga varningar eller felmeddelanden som användaren bör uppmärksammas på snabbare. Detta avbryter oftast skärmläsarens pågående tal. Används med försiktighet för att inte bli för störande.

## Varför detta behövs

Utan programmatisk information om statusmeddelanden missar användare av hjälpmedel viktig feedback:
-   **Skärmläsaranvändare:** Om en användare klickar på "Lägg i varukorg" och det enda som händer är att en liten siffra vid varukorgsikonen ökar visuellt, vet inte skärmläsaranvändaren om handlingen lyckades. Om en live region används kan skärmläsaren meddela "Produkt X har lagts i varukorgen".
-   **Användare med nedsatt syn:** Som kanske inte ser hela skärmen eller små visuella förändringar behöver också få informationen meddelad på annat sätt.
-   **Förhindra onödig fokusflytt:** Tidigare lösningar innebar ibland att man flyttade fokus till statusmeddelandet, vilket avbröt användarens flöde. Live regions löser detta genom att meddela informationen utan att flytta fokus.

Statusmeddelanden ger nödvändig återkoppling och bekräftelse på att interaktioner fungerar som förväntat.

---

## Exempel

### Bekräftelsemeddelande med [role="status"]{.inline-code} (Rätt) ✅

När användaren lägger till en produkt i varukorgen, visas ett meddelande dynamiskt i en container med [role="status"]{.inline-code}.

::code-group{:labels='["HTML + JavaScript (Rätt) ✅"]'}

```html showLineNumbers
<button onclick="addToCart('Produkt A')">Lägg i varukorg</button>
<button onclick="addToCart('Produkt B')">Lägg i varukorg</button>

<!-- En container för statusmeddelanden -->
<div role="status" aria-live="polite" id="status-message" class="visually-hidden">
  <!-- Meddelanden injiceras här via JS -->
  <!-- visually-hidden gör att den inte syns, men läses upp -->
</div>

<style>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
```

```javascript showLineNumbers
function addToCart(productName) {
  // ... logik för att lägga till i varukorg ...
  console.log(productName + ' lades till.');

  // Uppdatera statusmeddelandet
  const statusDiv = document.getElementById('status-message');
  statusDiv.textContent = productName + ' har lagts till i varukorgen.';

  // Valfritt: Rensa meddelandet efter en stund
  setTimeout(() => {
    statusDiv.textContent = '';
  }, 5000); // Rensa efter 5 sekunder
}
```

::
**Resultat:** När en knapp klickas uppdateras texten i [\<div role="status"\>]{.inline-code}. Skärmläsaren kommer då att läsa upp t.ex. "Produkt A har lagts till i varukorgen" utan att flytta fokus från knappen. Klassen [visually-hidden]]{.inline-code} är ett exempel på hur man kan göra meddelandet osynligt visuellt men ändå tillgängligt för skärmläsare, om man inte vill visa det visuellt. Ofta vill man dock visa det visuellt också.

### Varningsmeddelande med [role="alert"]{.inline-code} (Rätt) ✅

Om en användares session är på väg att gå ut, visas ett meddelande i en container med [role="alert"]{.inline-code}.

::code-group{:labels='["HTML + JavaScript (Rätt) ✅"]'}

```html showLineNumbers
<!-- Alert-container, kan vara dold initialt -->
<div role="alert" id="session-alert" style="display: none; color: red;">
  <!-- Meddelande injiceras här -->
</div>
```

```javascript showLineNumbers
function showSessionWarning() {
  const alertDiv = document.getElementById('session-alert');
  alertDiv.textContent = 'Varning! Din session går ut om 2 minuter.';
  alertDiv.style.display = 'block';
}

// Anropa showSessionWarning() när det är dags (se exempel i 3.3.1)
// setTimeout(showSessionWarning, sessionTimeout - warningTime);
```

::
**Resultat:** När texten läggs till i [\<div role="alert"\>]{.inline-code} kommer skärmläsaren troligen att avbryta det den håller på med och läsa upp varningsmeddelandet direkt. Detta är lämpligt för brådskande information.

### Dynamisk uppdatering utan ARIA live region (Fel) ❌

Sökresultat laddas dynamiskt på sidan när användaren skriver i ett sökfält. En text "Visar 5 träffar..." uppdateras visuellt ovanför resultaten, men texten finns inte i en live region.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<input type="search" id="search-input" oninput="updateResults()">
<!-- Fel: Denna text uppdateras, men utan aria-live eller role="status" -->
<div id="result-count"></div>
<div id="search-results">
  <!-- Resultaten laddas här -->
</div>
```

::
**Resultat:** Skärmläsaranvändaren får ingen information om att antalet träffar har uppdaterats när de skriver i sökfältet. De måste manuellt navigera till texten för att höra den.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 4.1.3 Status Messages (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
- [MDN Web Docs: ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [MDN Web Docs: role="status"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)
- [MDN Web Docs: role="alert"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [W3C Technique ARIA19: Using role=alert or aria-live=assertive to alert the user to important changes in content](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA19)
- [W3C Technique ARIA22: Using aria-live="polite" to alert users of changes in content that is not related to the current focus](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22)