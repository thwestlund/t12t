---
title: 2.4.8 Plats
description: Tillhandahåll information som hjälper användare att förstå var de befinner sig inom en uppsättning webbsidor.
level: AAA
slug: plats
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "plats",
    "location",
    "orientering",
    "navigation",
    "brödsmulor",
    "breadcrumbs",
    "webbplatskarta",
    "menyhighlight",
    "operabel",
    "navigerbar",
  ]
canonical: https://t12t.dev/wcag/2/4/8/plats

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 8

og:
  title: 2.4.8 Plats – WCAG
  description: Hjälp användare att förstå var de befinner sig på en webbplats.
  url: https://t12t.dev/wcag/2/4/8/plats
  type: article

datePublished: 2025-06-01
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Plats

## Beskrivning

Information om användarens plats inom en uppsättning webbsidor finns tillgänglig.

Detta kriterium (Nivå AAA) innebär att det ska vara lätt för användaren att förstå var de befinner sig i webbplatsens struktur. Det räcker inte att bara veta vilken sida man är på (vilket täcks av 2.4.2 Sidtitel), utan man ska också förstå hur den sidan relaterar till andra sidor på webbplatsen.

Vanliga tekniker för att uppfylla detta är:

1.  **Brödsmulor (Breadcrumbs):** En navigeringsstig som visar hierarkin från startsidan till den aktuella sidan (t.ex. Hem > Produkter > Cyklar > Mountainbikes).
2.  **Tydlig navigationsmarkering:** Den aktiva sidan markeras tydligt i navigeringsmenyer (t.ex. med annan bakgrundsfärg, fet stil eller en ikon).
3.  **Webbplatskarta:** En webbplatskarta visar hela webbplatsens struktur och kan hjälpa användaren att orientera sig.
4.  **Relation till informationsstruktur:** Tydliga rubriker och innehåll som förklarar var sidan passar in i helheten.

## Varför detta behövs

Att förstå sin plats på en webbplats är viktigt för alla användare, men särskilt för:

- **Personer med kognitiva funktionsnedsättningar:** Kan lätt bli desorienterade och tappa bort sig i komplexa strukturer. Tydliga ledtrådar om platsen ger trygghet och underlättar navigering.
- **Personer med nedsatt syn eller skärmläsaranvändare:** Kan inte få en visuell överblick över sidan eller menystrukturen. Information om platsen (t.ex. via brödsmulor eller tydliga menyalternativ) hjälper dem att bygga en mental modell av webbplatsen.
- **Nya besökare:** Alla som är nya på en webbplats behöver hjälp att förstå hur den är uppbyggd.

Tydlig information om plats minskar förvirring och gör det lättare att navigera effektivt.

---

## Exempel

### Brödsmulor (Rätt) ✅

En webbplats som säljer kläder visar en brödsmulesti högst upp på produktsidan.

::code-group{:labels='["HTML (Brödsmulor) ✅"]'}

```html showLineNumbers
<nav aria-label="Brödsmulor" class="breadcrumbs">
  <ol>
    <li><a href="/">Hem</a></li>
    <li><a href="/kategorier/dam">Dam</a></li>
    <li><a href="/kategorier/dam/trojor">Tröjor</a></li>
    <li><span aria-current="page">Stickad V-ringad Tröja</span></li>
  </ol>
</nav>

<main>
  <h1>Stickad V-ringad Tröja</h1>
  <!-- Produktinformation -->
</main>
```

::
**Resultat:** Användaren ser tydligt hierarkin och kan enkelt navigera tillbaka till överordnade kategorier. [aria-current="page"]{.inline-code} informerar hjälpmedel om att detta är den aktuella sidan i stigen.

### Tydlig markering i navigationen (Rätt) ✅

Huvudmenyn visar visuellt vilken sida eller sektion som är aktiv.

::code-group{:labels='["HTML + CSS (Menymarkering) ✅"]'}

```html {4} showLineNumbers
<nav aria-label="Huvudnavigation">
  <ul>
    <li><a href="/">Hem</a></li>
    <li><a href="/tjanster" aria-current="page">Tjänster</a></li>
    <!-- Aktuell sida -->
    <li><a href="/om-oss">Om oss</a></li>
    <li><a href="/kontakt">Kontakt</a></li>
  </ul>
</nav>
```

```css showLineNumbers
/* CSS för att markera det aktiva menyvalet */
nav a[aria-current="page"] {
  font-weight: bold;
  background-color: lightgray;
  /* Eller annan tydlig visuell markering */
  text-decoration: none; /* Ta bort ev. understrykning för tydlighet */
}
```

::
**Resultat:** Användaren ser direkt i menyn vilken sida de befinner sig på. [aria-current="page"]{.inline-code} ger samma information till hjälpmedel.

### Webbplatskarta (Bidrar till uppfyllnad) ✅

En länk till en detaljerad webbplatskarta finns tillgänglig (ofta i sidfoten).

::code-group{:labels='["HTML (Länk till webbplatskarta) ✅"]'}

```html showLineNumbers
<footer>
  <a href="/webbplatskarta">Webbplatskarta</a>
</footer>

<!-- På /webbplatskarta.html finns en lista över alla sidor -->
<!--
<h1>Webbplatskarta</h1>
<ul>
  <li><a href="/">Hem</a></li>
  <li>
    <a href="/tjanster">Tjänster</a>
    <ul>
      <li><a href="/tjanster/webb">Webbutveckling</a></li>
      <li><a href="/tjanster/design">Design</a></li>
    </ul>
  </li>
  ...
</ul>
-->
```

::
**Resultat:** Webbplatskartan ger en överblick över hela strukturen och hjälper användaren att förstå var den aktuella sidan passar in. Webbplatskartan i sig uppfyller inte hela kravet, men är en _del_ av att ge information om plats och ett sätt att hitta sidor (2.4.5).

### Ingen information om plats (Fel) ❌

Användaren är på en undersida djupt inne i webbplatsens struktur. Det finns inga brödsmulor, ingen tydlig markering i navigationen och ingen lättillgänglig webbplatskarta. Sidtiteln (2.4.2) är korrekt men ger inte tillräcklig information om _var_ i hierarkin sidan finns.

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
En användare har klickat sig fram till en specifik supportartikel via flera länkar. Väl på artikelsidan finns ingen indikation på hur den relaterar till andra supportämnen eller webbplatsens struktur i övrigt. Menyn visar ingenting som är markerat som aktivt.
```

::
**Resultat:** Användaren kan känna sig vilsen och har svårt att navigera till relaterade sidor eller förstå sammanhanget.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.8 Location (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/location.html)
- [W3C Technique G65: Providing breadcrumb trails](https://www.w3.org/WAI/WCAG22/Techniques/general/G65)
- [W3C Technique G128: Indicating current location within navigation bars](https://www.w3.org/WAI/WCAG22/Techniques/general/G128)
- [MDN Web Docs: ARIA `aria-current` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)
