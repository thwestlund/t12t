---
title: 2.4.11 Fokus ej dold (Minimum)
description: Säkerställ att en användargränssnittskomponent inte är helt dold av annat innehåll skapat av författaren när den får tangentbordsfokus.
level: AA
slug: fokus-ej-dold-minimum
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "fokus",
    "dold fokus",
    "dolt fokus",
    "skymd fokus",
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
canonical: https://t12t.dev/wcag/2/4/11/fokus-ej-dold-minimum

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 11

og:
  title: 2.4.11 Fokus ej dold (Minimum) – WCAG
  description: Säkerställ att fokuserade element inte är helt dölja av annat innehåll.
  url: https://t12t.dev/wcag/2/4/11/fokus-ej-dold-minimum
  type: article

datePublished: 2025-06-04
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: weekly # Common issue with sticky elements/banners
  priority: 0.7 # AA, important
---

# Fokus ej dold (Minimum)

## Beskrivning

När en användargränssnittskomponent får tangentbordsfokus, är den inte **helt dold** på grund av innehåll som skapats av författaren (webbplatsens skapare).

Detta kriterium (Nivå AA) säkerställer att när en användare navigerar med tangentbordet och ett element får fokus, ska åtminstone en del av elementet vara synligt. Det får inte vara helt täckt av annat innehåll, som till exempel:

- Fastklistrade (sticky) sidhuvuden eller sidfötter.
- Cookie-banners eller andra meddelandebanners.
- Icke-modala dialogrutor eller hjälptexter som visas över sidan.

**Minimum:** Notera att detta är ett minimikrav. Det räcker att _någon del_ av det fokuserade elementet är synligt. För en bättre användarupplevelse (och för att uppfylla det striktare AAA-kravet 2.4.12), bör hela elementet vara synligt.

## Varför detta behövs

Om det element som har fokus är helt dolt, även om det har en synlig fokusindikator (enligt 2.4.7), vet tangentbordsanvändaren fortfarande inte _vad_ det är som har fokus.

- **Tangentbordsanvändare:** Kan inte se vilken länk, knapp eller fält de är på väg att interagera med. Detta gör navigation och interaktion omöjlig eller mycket svår. De kan trycka [Enter]{.inline-code} på ett element utan att veta vad det gör.
- **Användare med nedsatt syn:** Som använder tangentbord och kanske viss förstoring kan helt missa var fokus befinner sig om elementet är skymt.

Att säkerställa att det fokuserade elementet åtminstone är delvis synligt är nödvändigt för att tangentbordsnavigation ska fungera.

---

## Exempel

### Sticky sidfot skymmer fokuserat element (Fel) ❌

En webbsida har en sidfot som är fastklistrad längst ner på skärmen ([position: sticky]{.inline-code} eller [position: fixed]{.inline-code}). När användaren tabbar till den sista länken på sidan, hamnar den länken (och dess fokusindikator) helt bakom den fastklistrade sidfoten.

::code-group{:labels='["HTML + CSS (Fel) ❌"]'}

```html showLineNumbers
<body>
  <main>
    <p>...</p>
    <p>...</p>
    <a href="/sista-lanken">Sista länken på sidan</a>
  </main>

  <footer class="sticky-footer">
    <!-- Sidfotsinnehåll som skymmer -->
    <p>© 2024 Webbplats AB</p>
  </footer>
</body>
```

```css showLineNumbers
.sticky-footer {
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: lightgrey;
  padding: 1em;
  z-index: 10; /* Se till att den ligger överst */
}

main {
  /* Se till att det finns utrymme för sidfoten,
     men detta löser inte fokusproblemet om inte
     extra padding läggs till längst ner! */
  padding-bottom: 5em; /* Kan behövas för att scrolla upp innehållet */
}

a:focus {
  outline: 3px solid blue; /* Fokus syns, men elementet är dolt */
}

/*
   Problem: När 'Sista länken på sidan' får fokus, och sidan är
   scrollad så att länken är längst ner i viewporten, kommer
   .sticky-footer att ligga ovanpå och helt dölja länken.
*/
```

::
**Resultat:** Användaren ser inte vad som har fokus när de når slutet av sidan, eftersom sidfoten täcker det.

### Cookie-banner skymmer fokuserat element (Fel) ❌

En cookie-banner visas längst ner (eller upp) på sidan när den laddas. Om användaren börjar tabba innan bannern har stängts, kan fokus hamna på element som ligger helt bakom bannern.

::code-group{:labels='["HTML + CSS (Fel) ❌"]'}

```html showLineNumbers
<body>
  <header>
    <a href="/">Hem</a>
    <a href="/om">Om</a>
    <!-- Fokus kan hamna här -->
  </header>
  <main>...</main>
  <footer>...</footer>

  <div class="cookie-banner">
    <p>Vi använder cookies... <button>OK</button></p>
  </div>
</body>
```

```css showLineNumbers
.cookie-banner {
  position: fixed;
  top: 0; /* Eller bottom: 0; */
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1em;
  z-index: 1000; /* Ligger överst */
}

a:focus {
  outline: 3px solid hotpink;
}

/*
   Problem: Om bannern ligger högst upp (top: 0) och användaren
   trycker Tab, kan fokus hamna på "Hem" eller "Om"-länkarna
   i headern, men de är helt dolda bakom bannern.
*/
```

::
**Resultat:** Användaren kan inte se de första fokuserbara elementen på sidan förrän cookie-bannern har hanterats.

### Lösning: Säkerställ synlighet (Rätt) ✅

Lösningarna handlar om att designa så att överlappning inte sker, eller att använda JavaScript för att hantera scrollning eller [z-index]{.inline-code} vid fokus.

::code-group{:labels='["CSS / JS-koncept (Rätt) ✅"]'}

```css [CSS-lösning för sticky footer]
/* Lösning 1: Lägg till tillräcklig padding/marginal längst ner på main
   så att det sista elementet kan scrollas upp ovanför footern. */
main {
  /* padding-bottom måste vara minst lika hög som footern + lite extra */
  padding-bottom: 100px; /* Justera efter footer-höjden */
}

/* Lösning 2 (Mer komplex): Ändra z-index på fokus */
/* Detta kan vara knepigt att få rätt och kan ha sidoeffekter */
*:focus-visible {
  position: relative; /* Krävs för z-index */
  z-index: 11; /* Högre än footerns z-index (10 i exemplet) */
  /* Kan behöva kombineras med bakgrundsfärg för att täcka det bakom */
  background-color: white;
}
```

```javascript [JavaScript-lösning: Scrolla vid fokus]
// Lösning 3: Scrolla elementet till synlighet när det får fokus
const focusableElements = document.querySelectorAll("a, button, input, ...");

focusableElements.forEach((el) => {
  el.addEventListener("focus", (event) => {
    // Kontrollera om elementet är skymt (detta är den svåra delen)
    const elRect = event.target.getBoundingClientRect();
    const footer = document.querySelector(".sticky-footer");
    const footerRect = footer ? footer.getBoundingClientRect() : null;

    // Förenklad kontroll: Om elementets nederkant är under footerns överkant
    if (footerRect && elRect.bottom > footerRect.top) {
      // Scrolla elementet så att det blir synligt
      event.target.scrollIntoView({ behavior: "smooth", block: "nearest" });
      // 'nearest' försöker scrolla minimalt, 'center' centrerar, etc.
    }
    // Liknande logik behövs för sticky header eller banners
  });
});
```

::
**Resultat:** Genom att säkerställa tillräckligt utrymme, hantera [z-index]{.inline-code} korrekt, eller använda JavaScript för att scrolla det fokuserade elementet till synlighet, undviker man att fokus blir helt skymt.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.11 Focus Not Obscured (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [CSS position: sticky](https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky)
- [CSS z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [JavaScript scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
