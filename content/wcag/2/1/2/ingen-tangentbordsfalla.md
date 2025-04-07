---
title: 2.1.2 Ingen tangentbordsfälla
description: Säkerställ att tangentbordsfokus inte fastnar i en del av innehållet, så att användaren alltid kan navigera vidare med enbart tangentbordet.
level: A
slug: ingen-tangentbordsfalla
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "tangentbord",
    "tangentbordsfälla",
    "keyboard trap",
    "fokus",
    "navigation",
    "modal",
    "widget",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/2/1/2/ingen-tangentbordsfalla

principleNumber: 2
principleName: Operabel
guidelineNumber: 1
guidelineName: Tangentbordsstyrning
criterionNumber: 2

og:
  title: 2.1.2 Ingen tangentbordsfälla – WCAG
  description: Säkerställ att tangentbordsfokus inte fastnar i en del av innehållet.
  url: https://t12t.dev/wcag/2/1/2/ingen-tangentbordsfalla
  type: article

datePublished: 2025-05-02
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Ingen tangentbordsfälla

## Beskrivning

Om tangentbordsfokus kan flyttas till en komponent på sidan med hjälp av tangentbordet, då ska fokus också kunna flyttas **från** komponenten med enbart tangentbordet. Om det krävs mer än standardtangenter (som [Tab]{.inline-code}, [Shift+Tab]{.inline-code}, piltangenter) för att flytta fokus, måste användaren informeras om hur man gör.

Enkelt uttryckt: Användaren får inte fastna i en del av sidan när de navigerar med tangentbordet. Det måste alltid gå att "tabba" vidare eller använda andra standardtangenter för att lämna en komponent eller en sektion.

## Varför detta behövs

- **Användare som endast använder tangentbord:** Om fokus fastnar i en komponent (t.ex. en inbäddad mediaspelare, en komplex widget, eller en felaktigt implementerad modal dialogruta) kan användaren inte nå resten av sidan. De blir helt blockerade och kan behöva ladda om sidan för att komma loss.
- **Skärmläsaranvändare:** Är beroende av att kunna navigera sekventiellt genom sidan med tangentbordet. En tangentbordsfälla gör att de inte kan fortsätta läsa eller interagera med efterföljande innehåll.

Att undvika tangentbordsfällor är avgörande för grundläggande tangentbordsnavigation och tillgänglighet.

---

## Exempel

### Korrekt implementerad modal dialogruta (Rätt) ✅

En modal dialogruta (pop-up) ska hantera fokus korrekt. När den öppnas ska fokus flyttas in i dialogen. Användaren ska kunna navigera mellan elementen inuti (t.ex. med [Tab]{.inline-code}). När dialogen stängs (t.ex. med [Esc]{.inline-code}-tangenten eller genom att aktivera en stängningsknapp) ska fokus återställas till det element som hade fokus innan dialogen öppnades. Fokus ska inte kunna lämna dialogrutan och hamna på sidan bakom så länge dialogen är öppen.

::code-group{:labels='["Konceptuell JavaScript (Rätt) ✅"]'}

```javascript showLineNumbers
const modal = document.getElementById("myModal");
const openButton = document.getElementById("openModalBtn");
const closeButton = modal.querySelector(".closeBtn");
let previousActiveElement;

function openModal() {
  previousActiveElement = document.activeElement; // Spara föregående fokus
  modal.style.display = "block";
  // Flytta fokus till första fokuserbara elementet i modalen, t.ex. stäng-knappen
  closeButton.focus();
  // Lägg till event listener för att fånga Tab/Shift+Tab inom modalen
  modal.addEventListener("keydown", trapFocus);
}

function closeModal() {
  modal.style.display = "none";
  modal.removeEventListener("keydown", trapFocus);
  // Återställ fokus till elementet som öppnade modalen
  if (previousActiveElement) {
    previousActiveElement.focus();
  }
}

function trapFocus(event) {
  if (event.key !== "Tab") return;

  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey) {
    // Shift + Tab
    if (document.activeElement === firstElement) {
      lastElement.focus(); // Flytta till sista
      event.preventDefault();
    }
  } else {
    // Tab
    if (document.activeElement === lastElement) {
      firstElement.focus(); // Flytta till första
      event.preventDefault();
    }
  }
  // Lyssna också på Esc för att stänga
  if (event.key === "Escape") {
    closeModal();
  }
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

// Lägg till Esc-hantering globalt eller på modalen när den är öppen
// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Escape' && modal.style.display === 'block') {
//     closeModal();
//   }
// });
```

::
**Resultat:** Fokus hanteras korrekt. Användaren kan navigera inom modalen, och när den stängs återgår fokus till rätt plats. Fokus fastnar inte.

### Inbäddat innehåll som skapar en fälla (Fel) ❌

Ett vanligt problem är inbäddat innehåll från tredje part (t.ex. en video, karta, eller en annons) som inte är korrekt byggt. När användaren tabbar in i det inbäddade innehållet, kanske [Tab]{.inline-code} och [Shift+Tab]{.inline-code} bara cirkulerar inom det inbäddade innehållet och aldrig återvänder till huvudsidan.

::code-group{:labels='["HTML (Potentiell Fälla) ❌"]'}

```html showLineNumbers
<header>...</header>
<nav>...</nav>
<main>
  <p>Lite text här...</p>

  <!-- Tredjeparts widget eller iframe som kan vara en fälla -->
  <iframe
    src="https://example.com/widget"
    title="Exempel Widget"
    width="400"
    height="300"
  ></iframe>
  <!-- Om widgeten inuti iframen inte tillåter att man
       tabbar UT ur den, fastnar användaren här. -->

  <p>Mer text efter widgeten...</p>
</main>
<footer>...</footer>
```

::
**Resultat:** Om [iframe]{.inline-code}-innehållet inte hanterar fokus korrekt kan en tangentbordsanvändare tabba in i den, men sedan inte komma ut igen för att nå texten efteråt eller sidfoten. Detta är en tangentbordsfälla. Lösningen ligger oftast hos den som skapat det inbäddade innehållet, men man bör vara medveten om risken och testa detta. Ibland kan [tabindex="-1"]{.inline-code} på [iframe]{.inline-code} användas för att initialt hoppa över den i tabbordningen, men då måste det finnas ett annat sätt att nå funktionaliteten inuti.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.1.2 No Keyboard Trap (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [MDN Web Docs: Using the dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) (Det moderna [\<dialog\>]{.inline-code}-elementet hanterar ofta fokus bättre än egna lösningar).
- [WAI-ARIA Authoring Practices: Modal Dialog Example](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/) (Visar korrekt implementering av en modal)
