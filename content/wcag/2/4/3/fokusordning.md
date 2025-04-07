---
title: 2.4.3 Fokusordning
description: Säkerställ att ordningen som element får fokus i när man navigerar med tangentbord är logisk och meningsfull.
level: A
slug: fokusordning
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "fokusordning",
    "focus order",
    "tangentbord",
    "navigation",
    "DOM-ordning",
    "tabbordning",
    "operabel",
    "navigerbar",
  ]
canonical: https://t12t.dev/wcag/2/4/3/fokusordning

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 3

og:
  title: 2.4.3 Fokusordning – WCAG
  description: Säkerställ att ordningen som element får fokus i är logisk.
  url: https://t12t.dev/wcag/2/4/3/fokusordning
  type: article

datePublished: 2025-05-27
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Fokusordning

## Beskrivning

Om en webbsida kan navigeras sekventiellt (t.ex. med tangentbord) och navigeringsordningen påverkar betydelse eller användning, ska fokuserbara komponenter få fokus i en ordning som **bevarar mening och funktion**.

Detta innebär att när en användare trycker på [Tab]{.inline-code} (eller [Shift+Tab]{.inline-code}) för att flytta mellan länkar, knappar, formulärfält och andra interaktiva element, ska ordningen vara logisk och förutsägbar. Den ska vanligtvis följa den visuella läsordningen (t.ex. från vänster till höger, uppifrån och ner i västerländska språk).

Fokusordningen bestäms normalt av elementens ordning i HTML-koden (DOM-ordningen). Problem uppstår oftast när CSS används för att visuellt flytta om element på ett sätt som skapar en stor skillnad mellan den visuella layouten och kodordningen.

## Varför detta behövs

En ologisk fokusordning gör det svårt och förvirrande att använda en webbsida med tangentbord:

- **Tangentbordsanvändare:** Om fokus hoppar oväntat mellan olika delar av sidan (t.ex. från huvudmenyn till sidfoten och sedan tillbaka till huvudinnehållet) blir det svårt att förstå var man är och hur man interagerar med sidan effektivt.
- **Skärmläsaranvändare:** Är helt beroende av en logisk fokusordning för att förstå sidans struktur och flöde. Hoppig fokusordning gör det mycket svårt att bygga en mental modell av sidan.
- **Personer med kognitiva funktionsnedsättningar:** En oförutsägbar fokusordning ökar den kognitiva belastningen och kan leda till fel och frustration.

En konsekvent och logisk fokusordning är grundläggande för effektiv tangentbordsnavigation.

---

## Exempel

### Logisk fokusordning (Rätt) ✅

HTML-strukturen följer den visuella layouten. Även om CSS Grid eller Flexbox används för layout, är källkoden ordnad på ett logiskt sätt.

::code-group{:labels='["HTML (Logisk ordning) ✅", "CSS (Exempel) ✅"]'}

```html showLineNumbers
<body>
  <header>
    <a href="/">Logotyp</a>
    <nav>
      <a href="/sida1">Sida 1</a>
      <a href="/sida2">Sida 2</a>
    </nav>
  </header>
  <main>
    <h1>Huvudinnehåll</h1>
    <p>Text...</p>
    <form>
      <label for="fname">Förnamn:</label>
      <input type="text" id="fname" />
      <button type="submit">Skicka</button>
    </form>
  </main>
  <footer>
    <a href="/kontakt">Kontakt</a>
  </footer>
</body>
```

```css showLineNumbers
/* Även med komplex CSS-layout, så länge DOM-ordningen är logisk
   och inga tabindex med positiva värden används felaktigt,
   blir fokusordningen oftast korrekt. */
body {
  display: grid;
  grid-template-areas:
    "header header"
    "main   main"
    "footer footer";
  /* ... andra grid- eller flexbox-egenskaper ... */
}
header {
  grid-area: header;
}
main {
  grid-area: main;
}
footer {
  grid-area: footer;
}
```

::
**Resultat:** När användaren tabbar går fokus i en förutsägbar ordning: Logotyp -> Sida 1 -> Sida 2 -> Förnamn fält -> Skicka knapp -> Kontakt länk.

### Ologisk fokusordning p.g.a. CSS (Fel) ❌

CSS används för att visuellt placera element i en annan ordning än i koden, vilket leder till att fokus hoppar ologiskt.

::code-group{:labels='["HTML (Ologisk pga CSS) ❌", "CSS (som skapar problemet) ❌"]'}

```html {1-3, 5-7, 9-11} showLineNumbers
<div class="wrapper">
  <!-- Kommer först i DOM -->
  <div class="sidebar">
    <a href="/hjalp">Hjälp</a>
  </div>

  <!-- Kommer sist i DOM -->
  <div class="main-content">
    <a href="/artikel">Artikel</a>
    <button>Spara</button>
  </div>

  <!-- Kommer i mitten i DOM -->
  <div class="secondary-nav">
    <a href="/profil">Profil</a>
  </div>
</div>
```

```css showLineNumbers
.wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  /* Visuell ordning: sidebar, main-content, secondary-nav */
  grid-template-areas:
    "sidebar main"
    "sidebar secondary";
}

.sidebar {
  grid-area: sidebar;
} /* Visas först (vänster) */

.main-content {
  grid-area: main;
} /* Visas i mitten (höger, uppe) */

.secondary-nav {
  grid-area: secondary;
} /* Visas sist (höger, nere) */

/*
   DOM-ordning: sidebar, secondary-nav, main-content
   Visuell ordning: sidebar, main-content, secondary-nav
   Fokusordning (följer DOM): Hjälp -> Profil -> Artikel -> Spara
   Detta är ologiskt jämfört med den visuella layouten!
   Fokus hoppar från vänster kolumn (Hjälp) till höger kolumn nere (Profil)
   och sedan upp i höger kolumn (Artikel, Spara).
*/
```

::
**Resultat:** Fokusordningen ("Hjälp" -> "Profil" -> "Artikel" -> "Spara") följer DOM-strukturen men stämmer inte alls med den visuella layouten där "Artikel" och "Spara" visas före "Profil". Detta är förvirrande. Lösningen är att ändra DOM-ordningen så att den bättre matchar den logiska/visuella ordningen: Sidebar, Main Content, Secondary Nav.

### Felaktig användning av [tabindex]{.inline-code} (Fel) ❌

Att använda [tabindex]{.inline-code} med positiva värden (t.ex. [tabindex="1"]{.inline-code}, [tabindex="2"]{.inline-code}) bör undvikas eftersom det åsidosätter den naturliga DOM-ordningen och är mycket svårt att underhålla. Det leder nästan alltid till en bruten fokusordning.

::code-group{:labels='["HTML (Fel tabindex) ❌"]'}

```html showLineNumbers
<a href="/hem">Hem</a>
<!-- Får fokus sist (standard tabindex=0) -->
<input type="text" tabindex="2" />
<!-- Får fokus näst först -->
<button tabindex="1">Sök</button>
<!-- Får fokus först -->
<a href="/om">Om</a>
<!-- Får fokus sist (standard tabindex=0) -->
```

::
**Resultat:** Fokusordningen blir: Sök-knapp -> Textfält -> Hem-länk -> Om-länk. Detta är helt ologiskt och skapat av felaktig användning av [tabindex]{.inline-code}. Använd [tabindex="0"]{.inline-code} för att inkludera anpassade element i den naturliga ordningen och [tabindex="-1"]{.inline-code} för att göra något fokuserbart endast via script, men undvik positiva värden.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.3 Focus Order (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [MDN Web Docs: tabindex attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
- [WebAIM: Keyboard Accessibility - Tabindex](https://webaim.org/techniques/keyboard/tabindex)
- [Understanding SC 1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html) (Relaterat kriterium om logisk läsordning som ofta sammanfaller med fokusordning).
