# WCAG-sektionen på T12T

Detta dokument beskriver strukturen och implementationen av WCAG-sektionen på T12T-plattformen.

## Översikt

WCAG-sektionen tillhandahåller en komplett guide till Web Content Accessibility Guidelines (WCAG) 2.2 på svenska. Innehållet är strukturerat enligt WCAG\:s principer, riktlinjer och kriterier, och inkluderar:

- Beskrivningar av kriterier
- Förklaringar till varför de är viktiga
- Praktiska kodexempel
- Testmetoder
- Länkar till ytterligare resurser

## Innehållsstruktur

WCAG-innehållet är organiserat i en hierarkisk struktur som motsvarar WCAG\:s egen struktur:

```text
content/
└── wcag/
    ├── index.md                                   # WCAG översikt
    ├── checklista.md                              # WCAG-checklista
    ├── 1/                                         # Princip 1: Möjlig att uppfatta
    │   ├── 1/                                     # Riktlinje 1.1: Textalternativ
    │   │   └── 1/                                 # Kriterium 1.1.1
    │   │       └── icke-textuellt-innehall.md     # Fullständig guide för kriterium 1.1.1
    │   ├── 2/                                     # Riktlinje 1.2: Tidsbaserade media
    │   └── ...
    ├── 2/                                         # Princip 2: Hanterbar
    │   └── ...
    ├── 3/                                         # Princip 3: Begriplig
    │   └── ...
    └── 4/                                         # Princip 4: Robust
        └── ...
```

## Frontmatter-struktur

Varje innehållsfil innehåller frontmatter med metadata som används för att bygga navigeringen och presentera innehållet korrekt.

### För kriterier (t.ex. 1/1/1/icke-textuellt-innehall.md):

```yaml
---
title: 1.1.1 Icke-textuellt innehåll
description: All innehåll som inte är text ska ha ett textalternativ som presenterar motsvarande syfte eller information.
level: A
slug: icke-textuellt-innehall
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "icke-textuellt innehåll",
    "alt-text",
    "webbtillgänglighet",
    "non-text content",
  ]
canonical: https://www.t12t.dev/wcag/1/1/1/icke-textuellt-innehall

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 1
guidelineName: Textalternativ
criterionNumber: 1

og:
  title: 1.1.1 Icke-textuellt innehåll – WCAG
  description: Allt icke-textuellt innehåll ska ha ett textalternativ som presenterar samma information.
  url: https://www.t12t.dev/wcag/1/1/1/icke-textuellt-innehall
  type: article

datePublished: 2025-03-19
dateModified: 2025-03-26

sitemap:
  lastmod: 2025-03-26
  changefreq: monthly
  priority: 0.8
---
```

## Komponenter

### WcagSidebarDynamic.vue

Denna komponent visar en dynamisk sidebar som läser in WCAG-strukturen från innehållsmapparna. Den visar principer, riktlinjer och kriterier i en hierarkisk struktur som kan expanderas och fällas ihop.

### WcagLevelBadge.vue

En enkel komponent som visar WCAG-nivåer (A, AA, AAA) med lämplig färgkodning.

## Sidor

### pages/wcag/ [...slug] .vue

Denna sida hanterar alla WCAG-relaterade URL\:er och bestämmer dynamiskt vilken typ av innehåll som ska visas baserat på URL-strukturen. Den kan visa:

1. WCAG-översiktssidan
2. En principsida
3. En riktlinjesida
4. En kriteriuimsida

## Navigering

Navigeringen är implementerad enligt följande flöde:

1. Användaren navigerar till `/wcag`
2. Överblickssidan visas med en introduktion till WCAG
3. Användaren kan navigera till en princip, t.ex. `/wcag/1`
4. Principöversikten visas tillsammans med en lista över riktlinjer
5. Användaren kan navigera till en riktlinje, t.ex. `/wcag/1/1`
6. Riktlinjeöversikten visas tillsammans med en lista över kriterier
7. Användaren kan navigera till ett kriterium, t.ex. `/wcag/1/1/1/icke-textuellt-innehall`
8. Den detaljerade beskrivningen av kriteriet visas

Användaren kan när som helst använda sidebaren för att snabbt navigera till andra delar av WCAG-strukturen.

## Anpassning och underhåll

### Lägga till nytt innehåll

För att lägga till nytt innehåll, skapa en ny Markdown-fil i rätt mapp enligt strukturen ovan, och inkludera korrekt frontmatter. Navigationssidebaren kommer automatiskt att uppdateras för att inkludera det nya innehållet.

### Uppdatera befintligt innehåll

Redigera helt enkelt den relevanta Markdown-filen. Ändra inte filnamn eller sökvägar eftersom detta kan bryta länkar.

### Ändringar i WCAG

När nya versioner av WCAG släpps, skapa nya mappar och filer som motsvarar de nya kriterierna. Uppdatera även översiktssidan för att reflektera den nya versionen.

## Integration med resten av T12T

WCAG-sektionen är integrerad med resten av T12T på följande sätt:

1. Den använder samma designsystem och komponenter
2. Den delar navigation och sidhuvud/sidfot med huvudwebbplatsen
3. Den är optimerad för sökmotorer med rätt metadata
4. Den stödjer samma söktjänst som resten av webbplatsen

## SEO och tillgänglighet

WCAG-sektionen är optimerad för sökmotorer med:

1. Beskrivande titlar och meta-beskrivningar för varje sida
2. Strukturerade data för att hjälpa sökmotorer förstå innehållet
3. Korrekt användning av rubriker och landmärken
4. Semantisk HTML som följer WCAG\:s egna riktlinjer

Eftersom detta är en webbplats om tillgänglighet är det viktigt att sektionen själv följer alla WCAG-kriterier på nivå AA och många på nivå AAA.
