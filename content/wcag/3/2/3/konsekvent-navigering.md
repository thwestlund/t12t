---
title: 3.2.3 Konsekvent navigering
description: Säkerställ att navigeringsmekanismer som upprepas på flera sidor inom en webbplats förekommer i samma relativa ordning varje gång de upprepas.
level: AA
slug: konsekvent-navigering
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "konsekvent navigering",
    "consistent navigation",
    "navigation",
    "menyer",
    "länkar",
    "ordning",
    "struktur",
    "förutsägbar",
    "operabel",
    "kognitiv",
  ]
canonical: https://t12t.dev/wcag/3/2/3/konsekvent-navigering

principleNumber: 3
principleName: Begriplig
guidelineNumber: 2
guidelineName: Förutsägbar
criterionNumber: 3

og:
  title: 3.2.3 Konsekvent navigering – WCAG
  description: Säkerställ att upprepad navigering har samma ordning på olika sidor.
  url: https://t12t.dev/wcag/3/2/3/konsekvent-navigering
  type: article

datePublished: 2025-07-12
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Konsekvent navigering

## Beskrivning

Navigationsmekanismer som upprepas på flera webbsidor inom en uppsättning webbsidor (en webbplats) förekommer i **samma relativa ordning** varje gång de upprepas, såvida inte en ändring initieras av användaren.

Detta innebär att om en webbplats har en huvudmeny, en sökfunktion, eller en sidfotsmeny som visas på flera sidor, ska länkarna och kontrollerna inom dessa navigeringsblock alltid presenteras i samma ordning i förhållande till varandra.

Till exempel, om huvudmenyn innehåller "Hem", "Tjänster", "Om oss", "Kontakt" i den ordningen på startsidan, ska den innehålla samma länkar i samma ordning på sidan "Om oss". Man får lägga till eller ta bort länkar (t.ex. lägga till undermenyalternativ när man är i en viss sektion), men den _inbördes ordningen_ för de länkar som upprepas ska vara densamma.

## Varför detta behövs

Konsekvent navigering gör det lättare för användare att lära sig hur webbplatsen fungerar och att hitta det de letar efter:

- **Förutsägbarhet:** Användare lär sig var olika navigeringsalternativ finns och kan snabbt hitta dem igen på andra sidor.
- **Minskad kognitiv belastning:** Användare behöver inte lära om sig navigationsstrukturen på varje ny sida. Detta är särskilt viktigt för personer med kognitiva funktionsnedsättningar eller minnesproblem.
- **Effektivare navigering:** Särskilt för tangentbordsanvändare och skärmläsaranvändare som förlitar sig på en konsekvent struktur för att snabbt kunna hoppa till rätt sektion eller länk.

En inkonsekvent ordning på navigeringselement kan vara förvirrande och frustrerande.

---

## Exempel

### Konsekvent huvudmeny (Rätt) ✅

Huvudmenyn har samma länkar i samma ordning på alla sidor där den visas.

::code-group{:labels='["HTML (Sida 1 - Rätt) ✅", "HTML (Sida 2 - Rätt) ✅"]'}

```html [index.html]
<nav aria-label="Huvudnavigation">
  <ul>
    <li><a href="/">Hem</a></li>
    <li><a href="/produkter">Produkter</a></li>
    <li><a href="/faq">FAQ</a></li>
    <li><a href="/kontakt">Kontakt</a></li>
  </ul>
</nav>
```

```html [kontakt.html]
<nav aria-label="Huvudnavigation">
  <ul>
    <li><a href="/">Hem</a></li>
    <li><a href="/produkter">Produkter</a></li>
    <li><a href="/faq">FAQ</a></li>
    <li><a href="/kontakt" aria-current="page">Kontakt</a></li>
    <!-- Samma ordning -->
  </ul>
</nav>
```

::
**Resultat:** Oavsett vilken sida användaren är på, finns "Hem" alltid först, "Produkter" som nummer två, osv. Detta gör menyn förutsägbar. Att den aktiva sidan markeras ([aria-current="page"]{.inline-code}) är också bra (se 2.4.8 Plats), men påverkar inte ordningen.

### Konsekvent sidfotsnavigering (Rätt) ✅

Länkarna i sidfoten ("Om cookies", "Tillgänglighet", "Webbplatskarta") visas i samma ordning på alla sidor.

::code-group{:labels='["HTML (Sidfot - Rätt) ✅"]'}

```html showLineNumbers
<footer>
  <nav aria-label="Sidfotslänkar">
    <a href="/cookies">Om cookies</a> |
    <a href="/tillganglighet">Tillgänglighet</a> |
    <a href="/webbplatskarta">Webbplatskarta</a>
  </nav>
  <p>© 2024</p>
</footer>
```

::
**Resultat:** Användaren kan alltid förvänta sig att hitta dessa länkar i samma relativa ordning längst ner på sidan.

### Inkonsekvent ordning i menyn (Fel) ❌

Ordningen på länkarna i huvudmenyn ändras på olika sidor utan att användaren har initierat ändringen.

::code-group{:labels='["HTML (Sida 1 - Fel) ❌", "HTML (Sida 2 - Fel) ❌"]'}

```html [index.html]
<nav aria-label="Huvudnavigation">
  <ul>
    <li><a href="/">Hem</a></li>
    <li><a href="/tjanster">Tjänster</a></li>
    <li><a href="/priser">Priser</a></li>
    <li><a href="/blogg">Blogg</a></li>
  </ul>
</nav>
```

```html [tjanster.html]
<nav aria-label="Huvudnavigation">
  <ul>
    <!-- Fel: Ordningen är ändrad! -->
    <li><a href="/tjanster" aria-current="page">Tjänster</a></li>
    <li><a href="/priser">Priser</a></li>
    <li><a href="/">Hem</a></li>
    <li><a href="/blogg">Blogg</a></li>
  </ul>
</nav>
```

::
**Resultat:** Användaren som lärde sig att "Hem" var först på startsidan blir förvirrad när den plötsligt är tredje länken på tjänstesidan. Detta bryter mot kravet på konsekvent relativ ordning.

### Ändring initierad av användaren (Tillåtet) ✅

En webbplats erbjuder användaren möjlighet att anpassa vilka länkar som visas i en personlig snabbmeny. När användaren själv lägger till, tar bort eller ändrar ordning på dessa länkar är det en tillåten ändring.

::code-group{:labels='["Koncept (Tillåtet) ✅"]'}

```text [Beskrivning]
En användare går till sina profilinställningar och drar "Mina fakturor"-länken till första platsen i sin personliga meny. På nästa sida visas "Mina fakturor" först i den menyn.
```

::
**Resultat:** Eftersom ändringen initierades av användaren själv, är detta undantaget från kravet på konsekvens.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.2.3 Consistent Navigation (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html)
- [W3C Technique G61: Presenting repeated components in the same relative order each time they appear](https://www.w3.org/WAI/WCAG22/Techniques/general/G61)
