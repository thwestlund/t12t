---
title: Felförebyggande (juridiskt, ekonomiskt, data)
description: För webbsidor som orsakar juridiska förbindelser eller ekonomiska transaktioner för användaren, ska åtgärder vara reversibla, kontrollerade för fel eller bekräftade.
level: AA
principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningsstöd
criterionNumber: 4

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 3.3.4 Felförebyggande (juridiskt, ekonomiskt, data)

## Beskrivning

För webbsidor som medför juridiska förbindelser eller ekonomiska transaktioner för användaren, som ändrar eller raderar användarstyrda data i datalagringssystem, eller som lämnar in testsvar, gäller minst ett av följande:

- **Reversibelt:** Åtaganden kan ångras.
- **Kontrollerat:** Data som matas in av användaren kontrolleras efter inmatningsfel och användaren ges möjlighet att korrigera dem.
- **Bekräftat:** En mekanism finns tillgänglig för att granska, bekräfta och korrigera information innan åtagandet slutförs.

## Varför detta behövs

Användare kan göra misstag när de fyller i formulär, särskilt vid komplexa handlingar som ekonomiska transaktioner, juridiska åtaganden eller när de raderar viktig information. Genom att erbjuda möjligheter att kontrollera, bekräfta eller ångra åtgärder minskar risken för allvarliga konsekvenser av misstag. Detta är särskilt viktigt för personer med kognitiva funktionsnedsättningar, koncentrationssvårigheter eller inlärningssvårigheter.

## Exempel

### Exempel på bra implementering

#### Bekräftelsesteg för beställning

```html
<!-- Steg 1: Beställningssammanfattning -->
<div id="order-summary">
  <h2>Beställningssammanfattning</h2>

  <div class="order-details">
    <!-- Visa beställningsinformation -->
    <p>Produkt: Bärbara datorn XYZ</p>
    <p>Pris: 9 995 kr</p>
    <p>Antal: 1</p>
    <p>Leveransadress: Storgatan 1, 123 45 Stockholm</p>
  </div>

  <div class="payment-info">
    <p>Betalningsmetod: Kreditkort (slutar med 1234)</p>
  </div>

  <div class="actions">
    <button id="edit-order">Redigera beställning</button>
    <button id="confirm-order">Bekräfta beställning</button>
  </div>
</div>

<!-- Steg 2: Bekräftelsedialog -->
<div
  id="confirmation-dialog"
  role="dialog"
  aria-labelledby="confirm-title"
  hidden
>
  <div class="dialog-content">
    <h2 id="confirm-title">Bekräfta din beställning</h2>
    <p>Du är på väg att slutföra ett köp på 9 995 kr. Vill du fortsätta?</p>

    <div class="dialog-actions">
      <button id="cancel-order">Avbryt</button>
      <button id="complete-order">Slutför köp</button>
    </div>
  </div>
</div>
```

#### Möjlighet att ångra borttagen e-post

```html
<div class="email-item" data-id="12345">
  <div class="email-header">
    <span class="sender">Anna Andersson</span>
    <span class="subject">Möte på fredag</span>
    <span class="date">2023-06-15</span>
  </div>

  <div class="email-actions">
    <button class="delete-button" aria-label="Ta bort e-post">Ta bort</button>
  </div>
</div>

<!-- Notifiering som visas när e-post tas bort -->
<div id="delete-notification" role="alert" hidden>
  <p>E-post borttagen. <button id="undo-delete">Ångra</button></p>
</div>

<script>
  document
    .querySelector(".delete-button")
    .addEventListener("click", function () {
      const emailItem = this.closest(".email-item");
      const emailId = emailItem.dataset.id;

      // Dölj e-post
      emailItem.style.display = "none";

      // Visa ångra-notifiering
      document.getElementById("delete-notification").hidden = false;

      // Spara information för ångra-funktion
      localStorage.setItem("deletedEmail", emailId);

      // Automatisk borttagning efter 10 sekunder om inte ångrat
      setTimeout(function () {
        if (localStorage.getItem("deletedEmail") === emailId) {
          // Permanent borttagning av e-post
          emailItem.remove();
          document.getElementById("delete-notification").hidden = true;
        }
      }, 10000);
    });

  document.getElementById("undo-delete").addEventListener("click", function () {
    const emailId = localStorage.getItem("deletedEmail");

    if (emailId) {
      // Återställ den borttagna e-posten
      const emailItem = document.querySelector(
        `.email-item[data-id="${emailId}"]`
      );
      emailItem.style.display = "block";

      // Dölj ångra-notifiering
      document.getElementById("delete-notification").hidden = true;

      // Rensa sparad information
      localStorage.removeItem("deletedEmail");
    }
  });
</script>
```

#### Kontroll av formulär innan inlämning

```html
<form id="tax-form" method="post" action="/submit-tax">
  <!-- Formulärfält för skatteuppgifter -->

  <!-- Innan formuläret skickas -->
  <button type="button" id="review-button">Granska uppgifter</button>

  <!-- Dölj skicka-knappen tills granskning är gjord -->
  <button type="submit" id="submit-button" hidden>Skicka in deklaration</button>
</form>

<!-- Granskningsöversikt -->
<div id="review-panel" role="dialog" aria-labelledby="review-title" hidden>
  <h2 id="review-title">Granska dina uppgifter</h2>

  <div id="review-content">
    <!-- Innehåll fylls i dynamiskt baserat på formuläruppgifter -->
  </div>

  <div class="warning">
    <p>Varning: Vi har identifierat följande potentiella problem:</p>
    <ul id="warning-list">
      <!-- Varningar fylls i dynamiskt -->
    </ul>
  </div>

  <div class="review-actions">
    <button id="edit-form">Redigera uppgifter</button>
    <button id="approve-form">Godkänn och skicka in</button>
  </div>
</div>

<script>
  document
    .getElementById("review-button")
    .addEventListener("click", function () {
      // Validera formulär
      const form = document.getElementById("tax-form");
      const formData = new FormData(form);

      // Visa granskningspanel
      const reviewPanel = document.getElementById("review-panel");
      reviewPanel.hidden = false;

      // Fyll i granskningsinnehåll
      const reviewContent = document.getElementById("review-content");
      reviewContent.innerHTML = ""; // Rensa tidigare innehåll

      // Lägg till formulärdata för granskning
      for (const [key, value] of formData.entries()) {
        const fieldLabel = form.querySelector(
          `label[for="${key}"]`
        ).textContent;
        const div = document.createElement("div");
        div.className = "review-item";
        div.innerHTML = `<strong>${fieldLabel}</strong>: ${value}`;
        reviewContent.appendChild(div);
      }

      // Kontrollera efter potentiella fel
      checkForErrors(formData);
    });

  function checkForErrors(formData) {
    const warningList = document.getElementById("warning-list");
    warningList.innerHTML = ""; // Rensa tidigare varningar

    // Exempel: Kontrollera om inkomst och utgifter inte stämmer överens
    const income = parseFloat(formData.get("income"));
    const expenses = parseFloat(formData.get("expenses"));

    if (expenses > income * 0.8) {
      const li = document.createElement("li");
      li.textContent =
        "Dina utgifter är ovanligt höga i förhållande till din inkomst.";
      warningList.appendChild(li);
    }

    // Fler kontroller kan läggas till här
  }

  document.getElementById("edit-form").addEventListener("click", function () {
    // Dölj granskningspanel och återgå till formuläret
    document.getElementById("review-panel").hidden = true;
  });

  document
    .getElementById("approve-form")
    .addEventListener("click", function () {
      // Visa skicka-knappen och dölj granskningspanelen
      document.getElementById("submit-button").hidden = false;
      document.getElementById("review-panel").hidden = true;

      // Skrolla till skicka-knappen för att göra den synlig
      document.getElementById("submit-button").scrollIntoView();
    });
</script>
```

### Exempel på bristande implementering

#### Direktköp utan bekräftelse

```html
<div class="product">
  <h2>Bärbara datorn XYZ</h2>
  <p>Pris: 9 995 kr</p>

  <form method="post" action="/purchase">
    <input type="hidden" name="product_id" value="12345" />
    <input type="hidden" name="price" value="9995" />
    <!-- Ingen bekräftelsedialog eller granskningssteg -->
    <button type="submit">Köp nu</button>
  </form>
</div>
```

#### Omedelbar borttagning utan ångra-funktion

```html
<div class="data-item">
  <h3>Personuppgifter</h3>
  <p>Namn: Anna Andersson</p>
  <p>Personnummer: 8001015678</p>

  <form method="post" action="/delete-data">
    <input type="hidden" name="data_id" value="12345" />
    <!-- Ingen bekräftelse eller ångra-funktion -->
    <button type="submit">Ta bort data</button>
  </form>
</div>
```

#### Inlämning av testprov utan varning

```html
<form id="exam-form" method="post" action="/submit-exam">
  <!-- Tentamensfrågor -->

  <!-- Ingen bekräftelse eller varning om obesvarade frågor -->
  <button type="submit">Lämna in</button>
</form>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html)
- [Webbriktlinjer - R103: Hjälp användaren att förebygga fel](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/hjalp-anvandaren-att-forebygga-fel)
