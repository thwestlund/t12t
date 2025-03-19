---
title: Riktlinje 5.2.2 - Gränssnittsriktning
description: Om ett användargränssnitt erbjuder en riktningsbegränsad vy, är det väsentliga innehållet och funktionaliteten i denna vy också tillgängligt i en icke-riktningsbegränsad vy, såvida inte den riktningsbegränsade presentationen är nödvändig.
level: AA
principleNumber: 5
principleName: Tillgängligt
guidelineNumber: 2
guidelineName: Ytterligare gester
criterionNumber: 2

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# 5.2.2 Gränssnittsriktning

## Syfte

Att säkerställa att innehåll och funktionalitet är tillgängligt oberoende av hur enheten är orienterad (liggande eller stående läge), om inte en specifik orientering är absolut nödvändig.

## Beskrivning

Om ett användargränssnitt erbjuder en riktningsbegränsad vy, är det väsentliga innehållet och funktionaliteten i denna vy också tillgängligt i en icke-riktningsbegränsad vy, såvida inte den riktningsbegränsade presentationen är nödvändig.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Tillhandahålla allt väsentligt innehåll och funktionalitet oavsett skärmorientering
- Undvika att låsa gränssnittet till endast liggande eller stående läge
- Säkerställa att användare kan komma åt all funktionalitet oavsett hur de håller sin enhet
- Endast begränsa orienteringen när det är absolut nödvändigt för funktionen (t.ex. för en bankapplication eller piano-app)

## Exempel

- En responsiv webbplats som anpassar layouten för både liggande och stående läge
- En applikation som omorganiserar innehåll baserat på skärmorientering utan att begränsa funktionalitet
- Ett gränssnitt som erbjuder alternativa layouter optimerade för olika orienteringar
- En videoapp som visar kontroller i både liggande och stående läge

## Vanliga problem

- Mobilappar som endast fungerar i en specifik orientering utan funktionellt behov
- Webbplatser som visar "Vänd enheten" meddelanden istället för att anpassa innehållet
- Funktioner som är otillgängliga i vissa orienteringar utan motivering
- Dåligt designade gränssnitt som inte anpassar sig efter enhetens orientering

## Testmetoder

- Testa webbplatsen eller applikationen i både liggande och stående orientering
- Verifiera att allt väsentligt innehåll och funktionalitet är tillgängligt i båda orienteringarna
- Kontrollera att layouten anpassas korrekt vid ändring av orientering
- Identifiera om eventuella orienteringsbegränsningar är nödvändiga för funktionen

## Relaterade riktlinjer

- [1.3.4 Orientation](/wcag/1/3/4/orientation)
- [1.4.10 Omflödning](/wcag/1/4/10/omflodning)
- [2.5.5 Målstorlek](/wcag/2/5/5/malstorlek)
