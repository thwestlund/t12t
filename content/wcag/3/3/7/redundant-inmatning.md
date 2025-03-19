---
title: Riktlinje 3.3.7 - Redundant inmatning
description: Information som tidigare har lämnats in av eller tillhandahållits till användaren är tillgänglig för återanvändning när så är nödvändigt, såvida inte denna information skulle vara redundant för det aktuella sammanhanget eller användaren måste lägga in informationen igen av säkerhetsskäl.
level: AA
principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningsstöd
criterionNumber: 7
---

# 3.3.7 Redundant inmatning

## Syfte

Att minimera användarens ansträngning genom att inte kräva att samma information anges flera gånger, vilket är särskilt viktigt för personer med motoriska eller kognitiva funktionsnedsättningar.

## Beskrivning

Information som tidigare har lämnats in av eller tillhandahållits till användaren är tillgänglig för återanvändning när så är nödvändigt, såvida inte denna information skulle vara redundant för det aktuella sammanhanget eller användaren måste lägga in informationen igen av säkerhetsskäl.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Återanvända information som användaren tidigare har angett när samma information efterfrågas igen
- Automatiskt fylla i fält där informationen redan är känd
- Ge användaren möjlighet att spara information för framtida användning
- Endast begära att information anges på nytt när det är nödvändigt av säkerhetsskäl eller om informationen inte längre är relevant

## Exempel

- Ett formulär som automatiskt fyller i leveransadressen baserat på faktureringsadressen om användaren anger att de är samma
- En webbplats som kommer ihåg användarens adress vid framtida besök
- En e-handelsplattform som sparar användarens betalningsinformation för framtida köp
- En applikation som förifyller användaruppgifter i olika formulär genom hela webbplatsen

## Vanliga problem

- Tvinga användare att ange samma information flera gånger i olika steg av en process
- Kräva att användare fyller i samma information i separata formulär
- Webbplatser som inte sparar användarinformation mellan sessioner när det skulle vara lämpligt
- Applikationer som inte utnyttjar tillgänglig information för att förenkla inmatningsprocesser

## Testmetoder

- Identifiera alla platser där användare ombeds ange information
- Kontrollera om tidigare angiven information återanvänds när det är lämpligt
- Verifiera att redundant inmatning endast krävs när det är nödvändigt av säkerhetsskäl

## Relaterade riktlinjer

- [3.3.2 Etiketter eller instruktioner](/wcag/3/3/2/etiketter-eller-instruktioner)
- [3.3.4 Förebyggande av fel (juridiskt, ekonomiskt, data)](/wcag/3/3/4/forebyggande-av-fel-juridiskt-ekonomiskt-data)
- [3.3.6 Förebyggande av fel (alla)](/wcag/3/3/6/forebyggande-av-fel-alla)
