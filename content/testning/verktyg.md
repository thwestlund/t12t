---
title: Verktyg för tillgänglighetstestning - T12T
description: En omfattande samling av verktyg, tillägg och resurser för att testa och utvärdera digital tillgänglighet.
---

# Verktyg för tillgänglighetstestning

Rätt verktyg kan göra stor skillnad i ditt arbete med digital tillgänglighet. Här presenterar vi en samling av användbara verktyg för olika aspekter av tillgänglighetstestning, från automatiserade tester till specifika kontroller.

## Automatiserade testverktyg

Dessa verktyg kan utvärdera din kod och identifiera många vanliga tillgänglighetsproblem automatiskt.

### axe DevTools

**Typ:** Webbläsartillägg, API  
**Kostnad:** Gratis och betald version  
**Webbläsare:** Chrome, Firefox  
**Länk:** [axe DevTools](https://www.deque.com/axe/)

axe DevTools är ett kraftfullt utvecklarverktyg som är integrerat i webbläsarens utvecklarverktyg. Det kan identifiera och hjälpa dig åtgärda tillgänglighetsproblem direkt i webbläsaren.

**Fördelar:**
- Få tillgängliga resultat
- Tydliga förklaringar av problem
- Förslag på åtgärder
- Kan köras i CI/CD-pipelines via API

### WAVE (Web Accessibility Evaluation Tool)

**Typ:** Webbläsartillägg, Webbtjänst  
**Kostnad:** Gratis  
**Webbläsare:** Chrome, Firefox  
**Länk:** [WAVE](https://wave.webaim.org/)

WAVE visar tillgänglighetsproblem direkt i kontexten av din webbsida, vilket gör det enkelt att förstå problemen i relation till innehållet.

**Fördelar:**
- Visuell återkoppling direkt på sidan
- Separata visningar för struktur, kontrast och ARIA
- Finns både som webbläsartillägg och webbtjänst

### Lighthouse

**Typ:** Inbyggt i Chrome DevTools, CLI  
**Kostnad:** Gratis  
**Webbläsare:** Chrome  
**Länk:** [Lighthouse](https://developers.google.com/web/tools/lighthouse)

Lighthouse är Googles verktyg för att mäta webbplatsers prestanda, tillgänglighet, SEO och mer. Det är integrerat i Chrome DevTools och ger en poäng för tillgänglighet tillsammans med specifika förbättringsförslag.

**Fördelar:**
- Integrerat i Chrome DevTools
- Automatiska tester av flera områden samtidigt
- Export av rapporter i olika format

## Specifika testverktyg

### Kontrast och färgverktyg

#### Color Contrast Analyzer

**Typ:** Skrivbordsapplikation  
**Kostnad:** Gratis  
**Plattform:** Windows, macOS  
**Länk:** [Color Contrast Analyzer](https://developer.paciellogroup.com/resources/contrastanalyser/)

Ett verktyg för att kontrollera färgkontrast mot WCAG-kriterier.

#### Stark Contrast Checker

**Typ:** Webbläsartillägg  
**Kostnad:** Gratis  
**Webbläsare:** Chrome, Firefox  
**Länk:** [Stark](https://www.getstark.co/)

Ett tillägg som hjälper dig hitta kontrastproblem och simulera olika typer av färgblindhet.

### Rubrikstruktur och landmärken

#### HeadingsMap

**Typ:** Webbläsartillägg  
**Kostnad:** Gratis  
**Webbläsare:** Chrome, Firefox  
**Länk:** [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)

Visar rubrikstruktur och landmärken på webbsidor, vilket hjälper dig att säkerställa logisk struktur och semantik.

### Tangentbordstestning

#### Keyboard-Only Navigation

Inte ett verktyg i sig, men en teknik där du navigerar webbplatsen helt utan mus, enbart med tangentbordet. Viktiga tangenter att använda:

- **Tab:** Flytta framåt mellan interaktiva element
- **Shift+Tab:** Flytta bakåt
- **Enter:** Aktivera knappar och länkar
- **Mellanslag:** Aktivera knappar, kryssa i kryssrutor
- **Piltangenter:** Navigera i menyer, radiogrupper etc.

### Skärmläsare

För djupgående information om skärmläsare, se vår [skärmläsarsektion](/skärmläsare).

## Kodanalyseringsverktyg

Dessa verktyg kan integreras i utvecklingsmiljön för att identifiera tillgänglighetsproblem under utvecklingsprocessen.

### ESLint med jsx-a11y

**Typ:** Linter-plugin  
**Kostnad:** Gratis  
**Länk:** [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

För React-utvecklare erbjuder detta plugin statisk kodanalys för att hitta tillgänglighetsproblem i JSX.

### axe-linter

**Typ:** Linter-plugin  
**Kostnad:** Gratis  
**Länk:** [axe-linter](https://github.com/dequelabs/axe-linter-vscode)

VS Code-tillägg som använder axe-core för att hitta tillgänglighetsproblem i HTML, React, Vue och Angular.

## Verktyg för att simulera funktionsnedsättningar

Dessa verktyg hjälper dig att bättre förstå hur din webbplats upplevs av användare med olika funktionsnedsättningar.

### NoCoffee Vision Simulator

**Typ:** Webbläsartillägg  
**Kostnad:** Gratis  
**Webbläsare:** Chrome  
**Länk:** [NoCoffee](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl)

Simulerar olika synnedsättningar, som katarakt, färgblindhet och synfältsbortfall.

### Funkify

**Typ:** Webbläsartillägg  
**Kostnad:** Gratis och betald version  
**Webbläsare:** Chrome  
**Länk:** [Funkify](https://www.funkify.org/)

Simulerar olika funktionsnedsättningar, inklusive dyslektisk syn, motoriska svårigheter och koncentrationssvårigheter.

## Verktyg för kontinuerlig testning

### Pa11y

**Typ:** Command Line-verktyg, CI-integration  
**Kostnad:** Gratis  
**Länk:** [Pa11y](https://pa11y.org/)

Ett kommandoradsverktyg för automatiserad tillgänglighetstestning, perfekt för integration i CI/CD-pipelines.

### Accessibility Insights

**Typ:** Webbläsartillägg, Skrivbordsprogram  
**Kostnad:** Gratis  
**Webbläsare:** Chrome, Edge  
**Länk:** [Accessibility Insights](https://accessibilityinsights.io/)

Ett verktyg från Microsoft som erbjuder både snabbtester och fullständiga tillgänglighetsutvärderingar.

## Svenska verktyg och resurser

### Funka Nu - Verktyg

**Typ:** Webbtjänst, Tjänster  
**Kostnad:** Varierande (vissa gratistjänster)  
**Länk:** [Funka](https://www.funka.com/verktyg/)

Funka erbjuder verktyg och tjänster specifikt anpassade för nordiska marknaden, inklusive WCAG-granskningar och rådgivning.

### PTS Webbriktlinjer

**Typ:** Webbtjänst  
**Kostnad:** Gratis  
**Länk:** [Webbriktlinjer](https://webbriktlinjer.se/)

Post- och Telestyrelsens riktlinjer för tillgängliga webbplatser, inklusive vägledning och verktygsrekommendationer.

## Integrationsverktyg och lösningar

### Siteimprove

**Typ:** SaaS-plattform  
**Kostnad:** Betald tjänst  
**Länk:** [Siteimprove](https://siteimprove.com/)

En heltäckande plattform för tillgänglighet, kvalitet och SEO som är särskilt populär inom offentlig sektor i Norden.

### Tenon

**Typ:** API, Webbtjänst  
**Kostnad:** Betald tjänst (med gratis API-prov)  
**Länk:** [Tenon](https://tenon.io/)

Ett API-baserat verktyg som kan integreras i ditt arbetsflöde för kontinuerlig tillgänglighetstestning.

## Att välja rätt verktyg

Det finns inget enskilt verktyg som kan hitta alla tillgänglighetsproblem. För bästa resultat:

1. **Använd flera verktyg** - Olika verktyg hittar olika problem
2. **Kombinera automatiserade tester med manuell testning** - Många aspekter kräver mänsklig bedömning
3. **Integrera testning i hela utvecklingsprocessen** - Från design till produktion
4. **Fokusera på att förstå problemen** - Inte bara på att fixa dem när de dyker upp

## Slutsats

Verktygen som presenteras här är ett bra första steg för att förbättra tillgängligheten i dina digitala produkter. Kom ihåg att verktyg är just verktyg - de ersätter inte kunskap, erfarenhet och användartestning med personer som har olika funktionsförmågor.

För mer information om hur du kan genomföra en komplett tillgänglighetsgranskning, se vår guide om [manuell testning](/testning/manuell).