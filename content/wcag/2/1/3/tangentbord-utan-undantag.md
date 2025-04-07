---
title: 2.1.3 Tangentbord (Utan undantag)
description: Säkerställ att all funktionalitet kan användas med enbart tangentbord, utan några undantag för funktioner baserade på rörelsebana.
level: AAA
slug: tangentbord-utan-undantag
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "tangentbord",
    "tangentbordsnavigation",
    "interaktivitet",
    "operabel",
    "ritfunktion",
    "rörelsebana",
  ]
canonical: https://t12t.dev/wcag/2/1/3/tangentbord-utan-undantag

principleNumber: 2
principleName: Operabel
guidelineNumber: 1
guidelineName: Tangentbordsstyrning
criterionNumber: 3

og:
  title: 2.1.3 Tangentbord (Utan undantag) – WCAG
  description: Säkerställ att all funktionalitet kan användas med enbart tangentbord, utan undantag.
  url: https://t12t.dev/wcag/2/1/3/tangentbord-utan-undantag
  type: article

datePublished: 2025-05-03
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Tangentbord (Utan undantag)

## Beskrivning

All funktionalitet i innehållet kan användas genom ett tangentbordsgränssnitt, utan att kräva specifik tajming för enskilda tangenttryckningar.

Detta kriterium (Nivå AAA) är identiskt med Kriterium 2.1.1 Tangentbord (Nivå A), **förutom** att det **tar bort undantaget** för funktioner som kräver inmatning baserad på användarens rörelsebana.

Det innebär att på AAA-nivå måste **absolut all** funktionalitet kunna utföras med enbart tangentbordet. Även funktioner som normalt utförs genom att dra musen i ett specifikt mönster (som att rita fritt i ett ritprogram) måste ha ett tangentbordsalternativ.

## Varför detta behövs

Att kräva tangentbordsstyrning för all funktionalitet utan undantag säkerställer den högsta nivån av tillgänglighet för användare som är helt beroende av tangentbordet.

- **Personer med grava motoriska funktionsnedsättningar:** Vissa användare kan inte alls använda en mus eller liknande pekdon. Även om en funktion _tekniskt sett_ bygger på en rörelsebana (som att rita), behöver dessa användare ett alternativt sätt att uppnå samma resultat med tangentbordet (t.ex. genom att ange koordinater, använda piltangenter för att rita linje för linje, eller välja färdiga former).
- **Maximera tillgänglighet:** AAA-nivån syftar till att göra innehåll tillgängligt för så många användare som möjligt, inklusive de med de mest komplexa behoven.

Att uppfylla detta krav kan vara utmanande för vissa typer av applikationer (t.ex. komplexa grafiska redigeringsverktyg), men det garanterar att ingen användare utestängs på grund av beroende av mus eller pekdon.

---

## Exempel

### Ritprogram med tangentbordsalternativ (Rätt) ✅

Ett webbaserat ritprogram låter användare rita med musen. För att uppfylla AAA måste det också erbjuda tangentbordsalternativ för att skapa och manipulera former.

::code-group{:labels='["Konceptuella funktioner (Rätt) ✅"]'}

```text [Tangentbordsalternativ]
- Använd piltangenter för att flytta en markör/penna.
- Använd en tangent (t.ex. Mellanslag) för att starta/stoppa ritning.
- Möjlighet att välja verktyg (penna, linje, rektangel, cirkel) via tangentbord (t.ex. med nummer eller bokstavskommandon).
- Möjlighet att ange exakta koordinater eller dimensioner för former via textfält.
- Funktioner för att välja färg, linjetjocklek etc. via tangentbord.
```

::
**Resultat:** Även om den primära interaktionen är musbaserad, kan en användare uppnå samma resultat (rita och redigera) med enbart tangentbordet.

### Drag-och-släpp med tangentbordsalternativ (Rätt) ✅

Som nämnts under 2.1.1 är drag-och-släpp inte undantaget ens på Nivå A. För AAA måste det finnas ett robust tangentbordsalternativ.

::code-group{:labels='["Konceptuell lösning (Rätt) ✅"]'}

```text [Tangentbordsalternativ för drag-och-släpp]
1. Användaren navigerar till objektet som ska flyttas med Tab.
2. Användaren "plockar upp" objektet med en tangentkombination (t.ex. Ctrl+X eller en specifik funktionsknapp).
3. Användaren navigerar till målzonen med Tab (eller piltangenter om det är en lista).
4. Användaren "släpper" objektet med en annan tangentkombination (t.ex. Ctrl+V eller samma funktionsknapp).
ALTERNATIV:
1. Användaren navigerar till objektet.
2. Användaren öppnar en kontextmeny (t.ex. med Meny-tangenten eller Shift+F10).
3. Menyn innehåller alternativ som "Flytta till [Målzon 1]", "Flytta till [Målzon 2]", etc.
```

::
**Resultat:** Drag-och-släpp-funktionen är fullt användbar för tangentbordsanvändare.

### Funktion som enbart kräver musbana (Fel) ❌

Ett spel eller en simulering där spelaren måste följa en komplex, slingrande bana exakt med muspekaren för att lyckas, och inget alternativt sätt att styra (t.ex. med piltangenter med hög precision) erbjuds.

::code-group{:labels='["Exempel (Fel - AAA) ❌"]'}

```text [Beskrivning]
Ett "stadig hand"-spel där användaren måste dra en liten prick genom en smal labyrint utan att vidröra väggarna. Misslyckas om pekaren avviker från den exakta banan. Inget alternativt styrsätt (t.ex. piltangenter) finns.
```

::
**Resultat:** Denna funktion kan inte användas av någon som inte kan styra en mus med den precision som krävs, och eftersom inget tangentbordsalternativ finns, uppfyller den inte AAA-kravet.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.1.3 Keyboard (No Exception) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html)
- [Förstå WCAG SC 2.1.1 (Nivå A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) (Principen är densamma, men undantaget är borttaget).
