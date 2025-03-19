---
title: Riktlinje 2.5.1 - Pekargester
description: Alla funktioner som använder flerpunktsgester eller gestaltsbaserade gester för att styra dem kan styras med en enda pekare utan gest, om inte en flerpunktsgest eller gestaltbaserad gest är nödvändig.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 5
guidelineName: Inmatningsmetoder
criterionNumber: 1
---

# 2.5.1 Pekargester

## Syfte

Att säkerställa att innehåll som kan styras genom flerpunktsgester eller gestaltsbaserade gester också kan styras med enklare gester som bara kräver en pekare, för att göra innehållet tillgängligt för användare som inte kan utföra komplexa gester.

## Beskrivning

Alla funktioner som använder flerpunktsgester eller gestaltsbaserade gester för att styra dem kan styras med en enda pekare utan gest, om inte en flerpunktsgest eller gestaltbaserad gest är nödvändig.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Erbjuda alternativa styrsätt med en enda pekare för funktioner som använder flerpunktsgester
- Erbjuda alternativa styrsätt med en enda pekare för funktioner som använder gestbaserade gester
- Endast kräva flerpunktsgester eller gestbaserade gester när det är nödvändigt för funktionen

## Exempel

- En karta som kan zoomas genom att "nypa" med två fingrar erbjuder också zoom-knappar som kan användas med ett finger
- En app som använder svepgester för att navigera mellan sidor erbjuder också en navigeringsmeny som kan användas med enkla tryck

## Vanliga problem

- Kartor eller bildvisare som bara kan zoomas med nypgester
- Appar eller webbgränssnitt som kräver svepgester för att komma åt viktiga funktioner utan alternativ

## Testmetoder

- Identifiera alla interaktioner som använder flerpunktsgester eller gestbaserade gester
- Verifiera att dessa interaktioner också kan utföras med en enda pekare

## Relaterade riktlinjer

- [2.1.1 Tangentbord](/wcag/2/1/1/tangentbord)
- [2.1.3 Tangentbord (utan undantag)](/wcag/2/1/3/tangentbord-utan-undantag)
- [2.5.2 Pekaravbrott](/wcag/2/5/2/pekaravbrott)
