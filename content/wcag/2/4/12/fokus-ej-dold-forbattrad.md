---
title: 2.4.12 Fokus ej dold (Förbättrad)
description: Säkerställ att hela användargränssnittskomponenten är synlig och inte dold av annat innehåll när den får tangentbordsfokus.
level: AAA
slug: fokus-ej-dold-forbattrad
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "fokus",
    "skymd fokus",
    "dold fokus",
    "dolt fokus",
    "focus obscured",
    "synligt fokus",
    "tangentbord",
    "navigation",
    "sticky header",
    "sticky footer",
    "cookie banner",
    "modal",
    "z-index",
    "operabel",
    "navigerbar",
  ]
canonical: https://t12t.dev/wcag/2/4/12/fokus-ej-dold-forbattrad

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 12

og:
  title: 2.4.12 Fokus ej dold (Förbättrad) – WCAG
  description: Säkerställ att hela den fokuserade komponenten är synlig.
  url: https://t12t.dev/wcag/2/4/12/fokus-ej-dold-forbattrad
  type: article

datePublished: 2025-06-05
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Fokus ej dold (Förbättrad)

## Beskrivning

När en användargränssnittskomponent får tangentbordsfokus, är **ingen del** av komponenten dold på grund av innehåll som skapats av författaren (webbplatsens skapare).

Detta kriterium (Nivå AAA) är en striktare version av Kriterium 2.4.11 Fokus ej dold (Minimum) (Nivå AA). Medan nivå AA bara kräver att _någon del_ av det fokuserade elementet är synligt, kräver nivå AAA att **hela** komponenten ska vara synlig när den får fokus.

Det innebär att fastklistrade (sticky) element, banners eller andra lager inte får täcka ens en liten del av det element som för närvarande har tangentbordsfokus.

## Varför detta behövs

Att säkerställa att _hela_ det fokuserade elementet är synligt ger den bästa möjliga upplevelsen för tangentbordsanvändare och användare med nedsatt syn:

- **Fullständig kontext:** Användaren kan se hela knappen, länken eller fältet, inklusive all dess text och eventuella ikoner, vilket ger fullständig information om elementet innan interaktion.
- **Tydligare fokusindikering:** Om fokusindikatorn (t.ex. en outline) ritas runt hela elementet, blir den också helt synlig, vilket gör det ännu lättare att se var fokus är.
- **Mindre förvirring:** Eliminerar risken för att en delvis dold komponent misstolkas eller är svår att interagera med.
- **Bättre för förstoring:** Användare som använder skärmförstoring har lättare att förstå ett element om de kan se hela dess utsträckning utan att behöva scrolla extra på grund av skymmande lager.

Att uppfylla detta AAA-kriterium kräver noggrann design och implementering av layout och lagerhantering för att undvika all överlappning av fokuserade element.

---

## Exempel

### Sticky sidfot som delvis skymmer fokus (OK för AA, Fel för AAA) ❌

Liknande exempel som för 2.4.11, men nu är det ett problem även om _bara en del_ av elementet skyms. En sticky sidfot täcker den nedre halvan av en knapp längst ner på sidan när knappen får fokus.

::code-group{:labels='["HTML + CSS (Fel - AAA) ❌"]'}

```html showLineNumbers
<main>
  <p>...</p>
  <button>Sista knappen</button>
  <!-- Fokus hamnar här -->
</main>

<footer class="sticky-footer-partial">
  <!-- Sidfot som bara täcker en del -->
</footer>
```

```css showLineNumbers
.sticky-footer-partial {
  position: sticky;
  bottom: 0;
  height: 40px; /* Sidfoten är 40px hög */
  background-color: lightblue;
  z-index: 10;
}

button {
  padding: 15px; /* Knappen är högre än 40px */
  margin-bottom: 10px; /* Ligger nära botten */
}

button:focus {
  outline: 3px solid red;
}

/*
   Problem (AAA): Om knappen får fokus och är placerad så att
   dess nedersta 40 pixlar hamnar bakom .sticky-footer-partial,
   är den delvis dold. Detta är OK för AA, men inte för AAA.
*/
```

::
**Resultat:** Användaren kan se övre delen av knappen och kanske texten, men inte hela knappen och dess fokusram. Detta uppfyller inte AAA.

### Lösning: Säkerställ full synlighet (Rätt) ✅

Lösningarna liknar dem för 2.4.11, men måste vara mer robusta för att garantera att _hela_ elementet är synligt.

::code-group{:labels='["CSS / JS-koncept (Rätt) ✅"]'}

```css [CSS-lösning: Mer marginal/padding]
/* Lösning 1: Ge tillräckligt med utrymme så att hela elementet
   plus dess fokusindikator kan scrollas upp helt ovanför det skymmande lagret. */
main {
  /* padding-bottom måste vara minst footer-höjd + knapp-höjd + fokus-outline + lite marginal */
  padding-bottom: 150px; /* Anpassa efter verkliga mått */
}
```

```javascript [JavaScript-lösning: Scrolla till synlighet]
// Lösning 2: Använd scrollIntoView, men säkerställ att hela elementet syns.
// 'block: nearest' är ofta bra, men man kan behöva finjustera.
const focusableElements = document.querySelectorAll("a, button, input, ...");

focusableElements.forEach((el) => {
  el.addEventListener("focus", (event) => {
    // Mer avancerad kontroll här för att säkerställa att *hela* elRect
    // är inom det synliga området och inte skyms av sticky element.
    // Om inte, använd scrollIntoView noggrant.
    const options = { behavior: "smooth", block: "nearest", inline: "nearest" };
    // Kontrollera om elementet är (delvis) skymt upptill eller nedtill
    // och justera scrollningen om nödvändigt.
    // Exempel: element.scrollIntoViewIfNeeded(true); // (Inte standard, men illustrerar idén)
    event.target.scrollIntoView(options); // Grundläggande försök
  });
});
```

::
**Resultat:** Genom att antingen designa med tillräckliga marginaler eller använda JavaScript för att intelligent scrolla elementet helt inom synligt område när det får fokus, uppfylls AAA-kravet. [scrollIntoView]{.inline-code} med standardalternativ kan ofta vara tillräckligt, men noggrann testning krävs.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.12 Focus Not Obscured (Enhanced) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html)
- [Förstå WCAG SC 2.4.11 (Nivå AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) (För jämförelse med minimikravet).
- [Webbriktlinjer: R133 Markering av fokus ska inte döljas](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/markering-av-fokus-ska-inte-doljas) (Täcker både minimum och enhanced)
- [JavaScript scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
