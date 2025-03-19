---
title: Riktlinje 2.5.4 - Rörelse-aktivering
description: Funktionalitet som kan styras genom enhets- eller användarrörelse kan också styras genom gränssnittskomponenter, och reaktion på rörelse kan inaktiveras för att förhindra oavsiktlig aktivering.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 5
guidelineName: Inmatningsmetoder
criterionNumber: 4
---

# 2.5.4 Rörelse-aktivering

## Syfte

Att säkerställa att funktionalitet som kan aktiveras genom rörelse också kan aktiveras med standardkomponenter, och att användare kan förhindra oavsiktlig aktivering genom rörelse.

## Beskrivning

Funktionalitet som kan styras genom enhets- eller användarrörelse kan också styras genom gränssnittskomponenter, och reaktion på rörelse kan inaktiveras för att förhindra oavsiktlig aktivering, förutom när:

- Stödda gränssnitt: Rörelsen används för att styra funktionalitet genom ett tillgänglighetsanpassat gränssnitt.
- Väsentligt: Rörelsen är väsentlig för funktionen och att göra så skulle innebära att aktivitetens syfte går förlorad.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Erbjuda alternativa gränssnittskomponenter för att aktivera funktioner som kan aktiveras med rörelse
- Tillhandahålla en mekanism för att inaktivera rörelsestyrning
- Se till att rörelse endast används som en alternativ inmatningsmetod, inte den enda metoden

## Exempel

- En webbapplikation som låter användare skaka enheten för att ångra en åtgärd erbjuder också en ångra-knapp
- En app som använder lutning för att navigera har också navigeringsknappar och möjlighet att inaktivera lutningsstyrning
- En spelapplikation som kräver rörelse för att simulera en aktivitet erbjuder en alternativ styrmetod

## Vanliga problem

- Appar som endast använder skakfunktioner utan alternativ
- Webbapplikationer som utlöser händelser baserat på enhetsorientering utan möjlighet att inaktivera
- Funktioner som kräver specifika gester utan alternativa inmatningsmetoder

## Testmetoder

- Identifiera alla funktioner som aktiveras genom rörelse
- Verifiera att dessa funktioner också kan aktiveras genom gränssnittskomponenter
- Kontrollera att det finns en mekanism för att inaktivera rörelsestyrning

## Relaterade riktlinjer

- [2.1.1 Tangentbord](/wcag/2/1/1/tangentbord)
- [2.5.1 Pekargester](/wcag/2/5/1/pekargester)
- [2.5.6 Samtidiga inmatningsmekanismer](/wcag/2/5/6/samtidiga-inmatningsmekanismer)
