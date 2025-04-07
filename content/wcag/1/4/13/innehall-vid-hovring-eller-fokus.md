---
title: 1.4.13 Innehåll vid hovring eller fokus
description: Säkerställ att ytterligare innehåll som visas vid hovring (hover) eller när ett element får fokus är avfärdningsbart, hovringsbart och beständigt.
level: AA
slug: innehall-vid-hovring-eller-fokus
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "hovring",
    "hover",
    "fokus",
    "focus",
    "tooltip",
    "popup",
    "popover",
    "nedsatt syn",
    "förstoring",
    "motorik",
    "skiljbar",
  ]
canonical: https://t12t.dev/wcag/1/4/13/innehall-vid-hovring-eller-fokus

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 13

og:
  title: 1.4.13 Innehåll vid hovring eller fokus – WCAG
  description: Säkerställ att innehåll som visas vid hovring/fokus är avfärdningsbart, hovringsbart och beständigt.
  url: https://t12t.dev/wcag/1/4/13/innehall-vid-hovring-eller-fokus
  type: article

datePublished: 2025-04-22
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Innehåll vid hovring eller fokus

## Beskrivning

När mottagande och sedan borttagande av pekarens hovring (hover) eller tangentbordets fokus utlöser ytterligare innehåll att bli synligt och sedan dolt, ska följande vara sant:

1.  **Avfärdningsbart (Dismissible):** Det finns en mekanism för att avfärda det extra innehållet utan att flytta pekarens hovring eller tangentbordets fokus, om inte det extra innehållet kommunicerar ett indatafel eller inte skymmer eller ersätter annat innehåll. (Att trycka på [Esc]{.inline-code}-tangenten är en vanlig mekanism).
2.  **Hovringsbart (Hoverable):** Om pekarens hovring kan utlösa det extra innehållet, då kan pekaren flyttas över det extra innehållet utan att det försvinner.
3.  **Beständigt (Persistent):** Det extra innehållet förblir synligt tills hovrings- eller fokustriggern tas bort, användaren avfärdar det, eller dess information inte längre är giltig.

Detta kriterium gäller vanligtvis för saker som egna verktygstips (tooltips), undermenyer som visas vid hovring, eller informations-popovers som dyker upp när man fokuserar på ett fält eller hovrar över en ikon. Det gäller **inte** för innehåll som styrs av webbläsaren själv (t.ex. vanliga [title]{.inline-code}-attributets tooltip) eller när utseendet är helt bundet till fokusstilen (som en extra tjock fokusram).

## Varför detta behövs

Innehåll som bara visas kortvarigt eller försvinner när man försöker interagera med det skapar stora problem, särskilt för:

- **Personer med nedsatt syn som använder förstoring:** När de hovrar över ett element som utlöser en tooltip, kan tooltippen dyka upp utanför det förstorade området. De måste kunna flytta muspekaren (och därmed det förstorade fönstret) till tooltippen för att läsa den, utan att den försvinner (Hovringsbart). Om tooltippen täcker över viktigt innehåll måste de kunna avfärda den utan att flytta fokus (Avfärdningsbart). Tooltippen måste också vara kvar tillräckligt länge för att hinna läsas (Beständigt).
- **Personer med nedsatt motorik:** Kan ha svårt att hålla muspekaren helt stilla eller att snabbt flytta den till det nya innehållet. Om innehållet försvinner vid minsta rörelse blir det oåtkomligt.
- **Alla användare:** Det kan vara frustrerande om en undermeny eller tooltip försvinner precis när man ska klicka på den eller läsa klart.

Kriteriet säkerställer att användare har tillräcklig kontroll och tid för att uppfatta och interagera med innehåll som visas vid hovring eller fokus.

---

## Exempel

### Tillgänglig Tooltip/Popover (Rätt) ✅

En tooltip som visas när man hovrar eller fokuserar på en informationsikon. Den implementeras så att den uppfyller kraven.

::code-group{:labels='["HTML + CSS + JS (Koncept) ✅"]'}

```html [HTML-struktur]
<span class="info-trigger" tabindex="0" aria-describedby="info-tooltip">
  <img src="info-icon.svg" alt="Mer information" />
  <span class="tooltip" id="info-tooltip" role="tooltip" hidden>
    Detta är en detaljerad förklaring som visas vid hovring/fokus. Den stannar
    kvar så att du kan flytta musen hit. Tryck Esc för att stänga.
  </span>
</span>
```

```css [CSS för synlighet och position]
.info-trigger {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  bottom: 100%; /* Positionera ovanför ikonen */
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  padding: 1em;
  border: 1px solid black;
  background-color: lightyellow;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 5px;
  z-index: 10; /* Säkerställ att den ligger ovanpå */
}

/* Visa tooltip vid hovring eller fokus inom triggern */
.info-trigger:hover .tooltip,
.info-trigger:focus-within .tooltip {
  display: block; /* Eller 'visibility: visible', etc. */
}

/* 'hidden' används för att dölja initialt och för JS */
[hidden] {
  display: none;
}
```

```javascript [JavaScript för Esc-avfärdning]
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    // Hitta alla synliga tooltips och dölj dem
    document.querySelectorAll(".tooltip:not([hidden])").forEach((tooltip) => {
      tooltip.setAttribute("hidden", "");
    });
  }
});

// Grundläggande logik för att visa/dölja med JS (kan göras mer robust)
// och säkerställa att fokus på trigger eller tooltip håller den öppen.
const triggers = document.querySelectorAll(".info-trigger");
triggers.forEach((trigger) => {
  const tooltip = trigger.querySelector(".tooltip");
  if (!tooltip) return;

  let hideTimeout;

  const showTooltip = () => {
    clearTimeout(hideTimeout);
    tooltip.removeAttribute("hidden");
  };

  const hideTooltip = () => {
    // Liten fördröjning för att tillåta musflytt till tooltip
    hideTimeout = setTimeout(() => {
      // Kolla om fokus är inom trigger eller tooltip innan den döljs
      if (
        !trigger.contains(document.activeElement) &&
        !tooltip.contains(document.activeElement)
      ) {
        tooltip.setAttribute("hidden", "");
      }
    }, 100); // 100ms fördröjning
  };

  trigger.addEventListener("mouseenter", showTooltip);
  trigger.addEventListener("focusin", showTooltip); // Fokus på trigger eller inuti

  trigger.addEventListener("mouseleave", hideTooltip);
  trigger.addEventListener("focusout", (e) => {
    // Kolla om det nya fokuset är utanför komponenten
    if (!trigger.contains(e.relatedTarget)) {
      hideTooltip();
    }
  });

  // Säkerställ att musen över tooltip håller den öppen
  tooltip.addEventListener("mouseenter", () => clearTimeout(hideTimeout));
  tooltip.addEventListener("mouseleave", hideTooltip);
});
```

::
**Resultat:**

1.  **Avfärdningsbart:** Tryck på [Esc]{.inline-code} stänger tooltippen.
2.  **Hovringsbart:** När tooltippen visas kan användaren flytta muspekaren in över tooltippen utan att den försvinner (tack vare [:focus-within]{.inline-code} / [:hover]{.inline-code} på föräldern eller JS-logik med fördröjning/fokuscheck).
3.  **Beständigt:** Tooltippen stannar kvar så länge musen är över triggern ELLER tooltippen, eller tills fokus flyttas bort eller den avfärdas.

### Undermeny som försvinner för snabbt (Fel) ❌

En navigeringsmeny där undermenyer visas vid hovring, men de försvinner omedelbart om muspekaren rör sig utanför huvudmenyalternativet, även om användaren försöker flytta musen diagonalt ner till undermenyn.

::code-group{:labels='["Beskrivning av problem (Fel) ❌"]'}

```text [Scenario]
1. Användaren hovrar över "Produkter" i huvudmenyn.
2. En undermeny med "Produkt A", "Produkt B", "Produkt C" visas under "Produkter".
3. Användaren försöker flytta muspekaren snett nedåt från "Produkter" till "Produkt B".
4. Precis när muspekaren lämnar "Produkter"-elementet (även om det bara är för en pixel eller en bråkdels sekund på väg mot undermenyn), försvinner undermenyn.
```

::
**Resultat:**

1.  **Inte Hovringsbart:** Användaren kan inte flytta muspekaren till undermenyn utan att den försvinner.
2.  **Inte Beständigt:** Undermenyn försvinner för tidigt.

**Lösning:** Kräver ofta JavaScript eller smart CSS-design (t.ex. genom att göra hela området inklusive mellanrummet mellan huvud- och undermeny hovringsbart, eller använda små fördröjningar innan undermenyn döljs).

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.13 Content on Hover or Focus (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
- [Designing Accessible Menus - Smashing Magazine](https://www.smashingmagazine.com/2017/11/designing-accessible-menus/) (Diskuterar relaterade utmaningar)
