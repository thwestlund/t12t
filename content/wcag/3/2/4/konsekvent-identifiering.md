---
title: 3.2.4 Konsekvent identifiering
description: Säkerställ att komponenter som har samma funktion inom en webbplats identifieras på ett konsekvent sätt.
level: AA
slug: konsekvent-identifiering
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "konsekvent identifiering",
    "consistent identification",
    "etiketter",
    "labels",
    "ikoner",
    "namn",
    "funktion",
    "förutsägbar",
    "operabel",
    "kognitiv",
  ]
canonical: https://t12t.dev/wcag/3/2/4/konsekvent-identifiering

principleNumber: 3
principleName: Begriplig
guidelineNumber: 2
guidelineName: Förutsägbar
criterionNumber: 4

og:
  title: 3.2.4 Konsekvent identifiering – WCAG
  description: Säkerställ att komponenter med samma funktion identifieras konsekvent.
  url: https://t12t.dev/wcag/3/2/4/konsekvent-identifiering
  type: article

datePublished: 2025-07-13
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Konsekvent identifiering

## Beskrivning

Komponenter som har **samma funktionalitet** inom en uppsättning webbsidor (en webbplats) identifieras **konsekvent**.

Detta innebär att om samma funktion förekommer på flera ställen på webbplatsen, ska de komponenter som representerar den funktionen ha samma (eller mycket lika) **etiketter, namn och/eller ikoner** varje gång.

Till exempel:

- Om en ikon med ett förstoringsglas används för sökfunktionen på en sida, bör samma ikon (eller en mycket liknande) användas för sökfunktionen på andra sidor.
- Om en knapp heter "Skicka" i ett formulär, bör den heta "Skicka" (och inte t.ex. "Sänd" eller "Bekräfta") i andra liknande formulär på webbplatsen som utför samma grundläggande handling.
- Om en länk till "Kontakta oss" finns, bör den heta just det konsekvent, inte "Kontakt" på en sida och "Hör av dig" på en annan.

Det handlar om att användaren ska kunna känna igen en funktion och förstå vad den gör baserat på hur den identifierades på andra ställen på webbplatsen.

## Varför detta behövs

Konsekvent identifiering av funktioner minskar förvirring och inlärningströskel:

- **Förutsägbarhet:** Användare lär sig snabbt vad en viss ikon eller etikett betyder och kan lita på att den betyder samma sak på andra sidor.
- **Minskad kognitiv belastning:** Användare behöver inte fundera på om "Sök", "Hitta" och en förstoringsglasikon egentligen är samma funktion. Detta är särskilt viktigt för personer med kognitiva funktionsnedsättningar eller minnesproblem.
- **Effektivare användning:** Användare kan snabbare hitta och använda funktioner de känner igen.
- **Talstyrning:** Användare som använder talstyrning (se 2.5.3 Etikett i namn) förlitar sig på konsekventa etiketter för att kunna aktivera komponenter med röstkommandon.

Inkonsekvent identifiering gör det svårare och mer tidskrävande att använda en webbplats.

---

## Exempel

### Konsekvent sökfunktion (Rätt) ✅

På alla sidor på webbplatsen representeras sökfunktionen av en knapp med en förstoringsglasikon och/eller texten "Sök". Det tillgängliga namnet är också konsekvent.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
- Sida 1 (Header): <button aria-label="Sök"><img src="search-icon.svg"></button>
- Sida 2 (Header): <button aria-label="Sök"><img src="search-icon.svg"></button>
- Sida 3 (Mobil vy): <a href="/sok" aria-label="Sök">Sök</a> (Text istället för ikon, men namnet är detsamma).
```

::
**Resultat:** Användaren lär sig snabbt att förstoringsglaset eller ordet "Sök" betyder att man kan söka.

### Konsekvent "Lägg i varukorg"-knapp (Rätt) ✅

I en webbutik heter knappen för att lägga en produkt i varukorgen alltid "Lägg i varukorg" och har eventuellt samma varukorgsikon bredvid sig på alla produktsidor och listningar.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
- Produktsida A: <button><img src="cart-icon.svg"> Lägg i varukorg</button>
- Produktsida B: <button><img src="cart-icon.svg"> Lägg i varukorg</button>
- Kategorisida (lista): <button aria-label="Lägg Produkt C i varukorg">Lägg i varukorg</button>
```

::
**Resultat:** Funktionen är lätt att känna igen och använda överallt i butiken.

### Inkonsekvent identifiering av hjälpfunktion (Fel) ❌

På en sida finns en länk märkt "Hjälp" som leder till supportcenter. På en annan sida finns en ikon med ett frågetecken (?) som leder till samma supportcenter. På en tredje sida finns en länk märkt "Support".

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
- Sida 1: <a href="/support">Hjälp</a>
- Sida 2: <a href="/support" aria-label="Support"><img src="question-mark.svg"></a>
- Sida 3: <a href="/support">Support</a>
```

::
**Resultat:** Användaren kan bli förvirrad och inte förstå att dessa tre olika identifierarna leder till samma funktion/plats. Det kräver mer ansträngning att lära sig att hitta hjälpfunktionen.

### Inkonsekventa etiketter för samma handling (Fel) ❌

I ett formulär finns knappen "Spara". I ett annat liknande formulär på samma webbplats heter motsvarande knapp "Uppdatera". I ett tredje heter den "Verkställ". Alla knapparna gör i princip samma sak: sparar ändringarna.

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
- Formulär 1: <button>Spara</button>
- Formulär 2: <button>Uppdatera</button>
- Formulär 3: <button>Verkställ</button>
```

::
**Resultat:** Användaren måste stanna upp och tänka efter vad knappen gör i varje formulär, istället för att direkt känna igen funktionen.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.2.4 Consistent Identification (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html)
- [W3C Technique G197: Using labels, names, and text alternatives consistently for content that has the same functionality](https://www.w3.org/WAI/WCAG22/Techniques/general/G197)
