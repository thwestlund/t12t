---
title: Riktlinje 5.3.2 - Svarstid
description: När en tidsinteraktion startas av en produkts gränssnitt, kan användaren förlänga tidsgränsen med minst 10 gånger den ursprungliga tidsgränsen.
level: A
principleNumber: 5
principleName: Tillgängligt
guidelineNumber: 3
guidelineName: Åtgärder
criterionNumber: 2

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# 5.3.2 Svarstid

## Syfte

Att säkerställa att användare har tillräckligt med tid att slutföra uppgifter när gränssnittet ställer tidsgränser, särskilt viktigt för personer med kognitiva nedsättningar, motoriska svårigheter eller andra funktionsnedsättningar.

## Beskrivning

När en tidsinteraktion startas av en produkts gränssnitt, kan användaren förlänga tidsgränsen med minst 10 gånger den ursprungliga tidsgränsen.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Identifiera alla tidsgränser som startas av gränssnittet
- Erbjuda en mekanism för att förlänga tidsgränsen
- Säkerställa att användaren kan förlänga tiden till minst 10 gånger den ursprungliga tidsgränsen
- Göra förlängningsfunktionen lättillgänglig och enkel att använda

## Exempel

- En inloggningssession med en tidsgräns på 15 minuter som kan förlängas till minst 150 minuter
- Ett formulär som automatiskt sparar inmatad data och tillåter användaren att fortsätta efter eventuell timeout
- En betalningssida som erbjuder en "Behöver mer tid"-knapp som förlänger tidsgränsen
- En quiz-applikation som låter användaren pausa tidtagningen och återuppta den när de är redo

## Vanliga problem

- Sessioner som avslutas utan förvarning eller möjlighet till förlängning
- Tidsgränser som är för korta för användare med vissa funktionsnedsättningar
- Förlängningsmekanismer som är svåra att upptäcka eller aktivera
- Automatiska utloggningar utan tillräcklig notifikation i förväg

## Testmetoder

- Identifiera alla tidsbaserade interaktioner i gränssnittet
- Verifiera att det finns mekanismer för att förlänga tidsgränserna
- Kontrollera att förlängningen är minst 10 gånger den ursprungliga tidsgränsen
- Testa att förlängningsmekanismen är lätt att upptäcka och använda

## Relaterade riktlinjer

- [2.2.1 Justerbar tidsavgränsning](/wcag/2/2/1/justerbar-tidsavgransning)
- [2.2.3 Inga tidsgränser](/wcag/2/2/3/inga-tidsgranser)
- [2.2.6 Tidsgränser](/wcag/2/2/6/tidsgranser)
