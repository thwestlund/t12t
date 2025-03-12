---
title: WCAG 2.2 - Vad innebär de nya riktlinjerna för webbutvecklare?
description: En genomgång av de viktigaste förändringarna i WCAG 2.2 och hur de påverkar ditt arbete med tillgänglig webbutveckling.
date: 2025-03-10
author: Anna Svensson
tags: 
  - WCAG
  - Standarder
  - Webbutveckling
---

# WCAG 2.2 - Vad innebär de nya riktlinjerna för webbutvecklare?

WCAG (Web Content Accessibility Guidelines) 2.2 blev officiell standard i slutet av 2023, och innehåller flera nya framsteg för att göra webben mer tillgänglig för alla. I den här artikeln går vi igenom de viktigaste förändringarna och vad de betyder för dig som webbutvecklare eller designansvarig.

## De nya riktlinjerna i WCAG 2.2

WCAG 2.2 bygger vidare på WCAG 2.1 och lägger till totalt nio nya framgångskriterier, fördelade över olika nivåer av efterlevnad (A, AA och AAA). Vi fokuserar på de mest relevanta kriterierna för svenska webbutvecklare.

### 2.4.11 Fokus ej dold (AA)

**Vad innebär det?** När en komponent tar emot tangentbordsfokus ska komponenten inte vara helt dold.

**I praktiken:** Detta är en kritisk uppdatering för tangentbordsnavigering. Du måste säkerställa att element som kan ta emot fokus (som knappar, länkar och formulärfält) alltid är synliga när de får fokus. Ett vanligt problem är när fokus hamnar på element som är utanför skärmen eller dolda av andra element.

**Kodexempel:**

```html
<!-- Dåligt exempel -->
<div class="offscreen">
  <a href="#content" class="skip-link">Hoppa till innehåll</a>
</div>

<!-- Bra exempel -->
<div class="offscreen focus-visible">
  <a href="#content" class="skip-link">Hoppa till innehåll</a>
</div>
```

```css
.offscreen {
  position: absolute;
  left: -9999px;
}

/* När elementet får fokus blir det synligt */
.focus-visible:focus-within {
  left: 0;
  top: 0;
  z-index: 100;
}
```

### 2.4.12 Fokussynlighet (AA)

**Vad innebär det?** När en användargränssnittskomponent får tangentbordsfokus ska det finnas en synlig indikator på att komponenten har fokus.

**I praktiken:** Den här riktlinjen stärker 2.4.7 från WCAG 2.1 genom att kräva att fokusindikatorn ska vara tydligt synlig och inte enbart bero på webbläsarens standardutseende. Många webbplatser tar bort standardfokusstilar utan att ersätta dem med något annat, vilket gör det omöjligt för tangentbordsanvändare att se var de befinner sig.

**Kodexempel:**

```css
/* Dåligt exempel */
:focus {
  outline: none;
}

/* Bra exempel */
:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Alternativt kan du använda :focus-visible */
:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}
```

## Hur påverkar detta svenska webbplatser?

Sverige har strikta lagar om digital tillgänglighet, särskilt genom DOS-lagen (Lagen om tillgänglighet till digital offentlig service) som kräver att offentliga webbplatser följer WCAG 2.1 AA. Med WCAG 2.2 kommer kraven att utökas, och organisationer bör börja förbereda sig redan nu.

Enligt Post- och telestyrelsens rekommendationer bör alla offentliga verksamheter ha en plan för att implementera WCAG 2.2 under 2024-2025.

## Praktiska steg för implementering

Här är några praktiska åtgärder du kan vidta för att börja anpassa dina webbplatser till WCAG 2.2:

1. **Genomför en gap-analys** - Identifiera vilka delar av din webbplats som behöver uppdateras för att möta de nya kriterierna
2. **Prioritera mobilanvändning** - Flera av de nya kriterierna fokuserar särskilt på mobila gränssnitt
3. **Uppdatera dina testrutiner** - Säkerställ att dina tillgänglighetstest täcker de nya kriterierna
4. **Utbilda ditt team** - Se till att alla utvecklare och designers förstår de nya riktlinjerna

## Slutsats

WCAG 2.2 representerar ett viktigt steg framåt för webbtillgänglighet, med särskilt fokus på att förbättra upplevelsen för personer med kognitiva funktionsnedsättningar och tangentbordsanvändare. Genom att börja implementera dessa riktlinjer nu kan du säkerställa att dina webbplatser förblir tillgängliga och lagliga i framtiden.

I nästa artikel kommer vi att djupdyka i hur du kan testa efterlevnad av de nya kriterierna med både manuella metoder och automatiserade verktyg.

## Referenser

- [W3C Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
- [Post- och telestyrelsens vägledning för WCAG 2.2](https://pts.se/sv/privat/internet/digital-tillganglighet/)
- [Funka: WCAG 2.2 på svenska](https://www.funka.com/webbinarium-wcag22)