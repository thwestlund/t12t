---
title: Riktlinje 5.2.1 - Dragbara gränssnittskomponenter
description: Om ett användargränssnitt innehåller gränssnittskomponenter som kan dras, kan dessa komponenter flyttas genom andra metoder, om inte dragning är nödvändig för funktionen.
riktlinjeNumber: 5.2.1
riktlinjeName: Dragbara gränssnittskomponenter
level: A
principleNumber: 5
principleName: Tillgängligt
guidelineNumber: 2
guidelineName: Ytterligare gester
criterionNumber: 1
---

# 5.2.1 Dragbara gränssnittskomponenter

## Syfte

Att säkerställa att användare som inte kan utföra drag-och-släpp-operationer ändå kan använda gränssnitt där sådana operationer finns.

## Beskrivning

Om ett användargränssnitt innehåller gränssnittskomponenter som kan dras, kan dessa komponenter flyttas genom andra metoder, om inte dragning är nödvändig för funktionen.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Erbjuda alternativa metoder för att flytta eller manipulera dragbara gränssnittskomponenter
- Se till att alla funktioner som kan utföras genom att dra också kan utföras genom andra metoder
- Endast kräva draggester när det är absolut nödvändigt för funktionen
- Tillhandahålla tangentbordsalternativ eller andra inmatningsmetoder för dragoperationer

## Exempel

- En sorterbar lista som kan sorteras genom både drag-och-släpp och genom knappar för att flytta upp/ner
- En filuppladdning som accepterar både drag-och-släpp och en traditionell "Bläddra"-knapp
- Ett kanban-gränssnitt där kort kan flyttas mellan kolumner både genom att dras och genom kontextmenyer
- En bildeditor där objekt kan positioneras både genom drag-och-släpp och genom att ange koordinater

## Vanliga problem

- Drag-och-släpp-gränssnitt utan tangentbordsalternativ
- Funktioner som endast kan nås genom att dra element
- Sorteringsfunktioner som enbart förlitar sig på dragoperationer
- Interaktiva kartor eller diagram där positionering endast kan göras genom draggning

## Testmetoder

- Identifiera alla gränssnittskomponenter som kan dras
- Verifiera att det finns alternativa metoder för att utföra samma funktioner
- Testa gränssnittet med endast tangentbord för att säkerställa att alla funktioner är tillgängliga
- Kontrollera att de alternativa metoderna är tydligt kommunicerade till användaren

## Relaterade riktlinjer

- [2.1.1 Tangentbord](/wcag/2/1/1/tangentbord)
- [2.5.1 Pekargester](/wcag/2/5/1/pekargester)
- [2.5.3 Etikett i namn](/wcag/2/5/3/etikett-i-namn)
