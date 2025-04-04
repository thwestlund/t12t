---
title: 2.4.13 Fokusutseende
description: Säkerställ att fokusindikatorn för användargränssnittskomponenter är tillräckligt stor och har tillräcklig kontrast.
level: AAA # Ändrad från AA till AAA i WCAG 2.2, men ofta listad som AA i vissa resurser. WCAG 2.2 säger AA. Dubbelkollar och sätter AA.
slug: fokusutseende
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "fokus",
    "fokusutseende",
    "focus appearance",
    "fokusindikator",
    "outline",
    "kontrast",
    "storlek",
    "tjocklek",
    "operabel",
    "navigerbar",
  ]
canonical: https://t12t.dev/wcag/2/4/13/fokusutseende

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 13

og:
  title: 2.4.13 Fokusutseende – WCAG
  description: Säkerställ att fokusindikatorn är tillräckligt stor och har tillräcklig kontrast.
  url: https://t12t.dev/wcag/2/4/13/fokusutseende
  type: article

datePublished: 2025-06-06
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: weekly
  priority: 0.7 # AA, viktigt
---

# Fokusutseende

## Beskrivning

När tangentbordsfokusindikatorn är synlig måste den uppfylla **båda** följande villkor:

1.  **Storlek:** Indikatorn ska minst omsluta området på ett av följande sätt:

    - En ram (outline) med minst **1 CSS-pixels** tjocklek runt hela komponenten.
    - En ram med minst **2 CSS-pixels** tjocklek längs den kortaste sidan av en rektangel som omsluter komponenten, och inte tunnare än 1 CSS-pixel på resten.
    - Ett område på minst **4 CSS-pixlar** tjocklek längs den längsta sidan av en rektangel som omsluter komponenten.
    - En ändring av ett område på minst **2x4 CSS-pixlar** intill komponenten, eller ett område på minst **8 CSS-pixlar** längs komponentens kortaste sida. _(Detta täcker t.ex. indikatorer som en tjock understrykning eller en markör bredvid)._
    - En ändring av komponentens bakgrundsfärg (som täcker hela komponenten).

2.  **Kontrast:** Den del av indikatorn som krävs enligt ovan ska ha ett kontrastförhållande på minst **3:1** mellan sina pixlar i fokuserat och icke-fokuserat läge. Med andra ord:
    - Färgen på fokusindikatorn (t.ex. den blå ramen) ska ha minst 3:1 i kontrast mot den intilliggande bakgrundsfärgen (t.ex. vit bakgrund).
    - **OCH** om fokusindikatorn _täcker_ en del av komponenten (t.ex. en tjockare ram som går inåt), ska indikatorns färg också ha minst 3:1 i kontrast mot den delen av komponenten den täcker.
    - **Alternativt:** Om fokusindikatorn är en ändring av själva komponenten (t.ex. ändrad bakgrundsfärg), ska kontrasten mellan komponentens färg _före_ och _efter_ fokus vara minst 3:1.

Undantag görs om fokusindikatorn inte kan ändras av författaren (t.ex. bestäms helt av webbläsaren/OS) eller om indikatorn och dess kontrast inte behövs eftersom komponenten har ett utseende som tydligt visar att den har fokus (t.ex. en markör i ett textfält).

## Varför detta behövs

Medan Kriterium 2.4.7 (Synligt fokus) bara kräver att fokus _är_ synligt, specificerar detta kriterium (Nivå AA, nytt i WCAG 2.2) _hur_ tydlig indikatorn måste vara i termer av storlek och kontrast.

- **Personer med nedsatt syn:** Behöver en tydlig och tillräckligt stor fokusindikator med bra kontrast för att kunna se var fokus befinner sig. En tunn eller lågkontrasterande ram kan vara osynlig för dem.
- **Personer med nedsatt färgseende:** Säkerställer att fokusindikatorn är urskiljbar även om de inte kan se specifika färger, eftersom kontrastkravet baseras på luminans.
- **Användare i ogynnsamma ljusförhållanden:** En tydlig indikator är lättare att se på en skärm i starkt solljus eller i mörka miljöer.

Detta kriterium skärper kraven på fokusindikatorns design för att säkerställa att den verkligen är användbar för fler människor.

---

## Exempel

### Tydlig, kontrasterande ram (Rätt) ✅

En standard blå fokusram ([#0000FF]{.inline-code}) som är 2 pixlar tjock runt en knapp på vit bakgrund ([#FFFFFF]{.inline-code}).

::code-group{:labels='["CSS (Rätt) ✅"]'}

```css showLineNumbers
button:focus-visible {
  /* Storlek: 2px tjock ram runt hela - Uppfyller storlekskravet (minst 1px) */
  outline: 2px solid blue;
  outline-offset: 1px; /* Lite luft, valfritt men ofta bra */
}

/*
  Kontrast:
  Blå (#0000FF) mot Vit (#FFFFFF) har kontrast 8.59:1.
  Detta är > 3:1, så kontrastkravet är uppfyllt.
*/
```

::
**Resultat:** Fokusindikatorn uppfyller både storleks- och kontrastkraven.

### Ändrad bakgrundsfärg med tillräcklig kontrast (Rätt) ✅

En länk har mörk text på ljus bakgrund. När den får fokus ändras bakgrundsfärgen till en mörk färg och textfärgen till ljus, med tillräcklig kontraständring.

::code-group{:labels='["CSS (Rätt) ✅"]'}

```css showLineNumbers
a {
  color: #333333; /* Mörkgrå text */
  background-color: #f0f0f0; /* Ljusgrå bakgrund */
  padding: 0.2em 0.4em;
  text-decoration: none;
}

a:focus-visible {
  /* Ändrar hela bakgrunden */
  background-color: #000000; /* Svart bakgrund vid fokus */
  color: #ffffff; /* Vit text vid fokus */
  outline: none; /* Ta bort ev. standard-outline om denna stil är tydlig nog */
}

/*
  Storlek: Ändrar hela bakgrunden - Uppfyller storlekskravet.
  Kontrast:
  Kontrasten mellan den gamla bakgrunden (#f0f0f0) och den nya (#000000)
  är 16.18:1. Detta är > 3:1, så kontrastkravet är uppfyllt.
  (Dessutom måste textkontrasten vara OK i båda lägena, se 1.4.3/1.4.11).
*/
```

::
**Resultat:** Fokusindikatorn (den ändrade bakgrunden) uppfyller både storleks- och kontrastkraven.

### För tunn eller lågkontrasterande ram (Fel) ❌

Fokusindikatorn är bara 1 pixel bred och färgen har låg kontrast mot bakgrunden.

::code-group{:labels='["CSS (Fel) ❌"]'}

```css showLineNumbers
button:focus-visible {
  /* Storlek: OK (minst 1px runt hela) */
  outline: 1px solid #aaaaaa; /* Ljusgrå ram */
  /* Kontrast: Fel! Ljusgrå (#AAA) mot Vit (#FFF) har kontrast 2.32:1.
     Detta är < 3:1. */
}

input:focus-visible {
  /* Storlek: Fel! 'dotted' räknas inte som solid linje för tjocklek. */
  outline: 2px dotted red;
  /* Kontrast: OK (Röd mot Vit = 3.99:1), men storleken är fel. */
}
```

::
**Resultat:** Den första indikatorn misslyckas på kontrast. Den andra misslyckas på storlek (en [dotted]{.inline-code} eller [dashed]{.inline-code} linje räknas inte som solid tjocklek enligt WCAG:s förståelsedokument).

---

## Verktyg

Verktyg för att mäta färgkontrast (som nämnts för 1.4.3 och 1.4.6) är nödvändiga för att verifiera kontrastkravet. Tjockleken kan inspekteras visuellt eller med webbläsarens utvecklarverktyg.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.13 Focus Appearance (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [Webbriktlinjer: R134 Fokus ska synas tydligt](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/fokus-ska-synas-tydligt) (Nyare riktlinje som täcker detta).
- [Förstå WCAG SC 2.4.7 (Nivå AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) (Det grundläggande kravet på att fokus ska vara synligt).
- [Evaluating WCAG 2.2 SC 2.4.13 Focus Appearance (by Adrian Roselli)](https://adrianroselli.com/2023/09/evaluating-wcag-2-2-sc-2-4-13-focus-appearance.html) (Detaljerad genomgång av kraven).
