---
title: Riktlinje 2.5.2 - Pekaravbrott
description: Funktioner som kan styras med en enstaka pekare kan avbrytas eller ångras för att förhindra oavsiktlig eller felaktig inmatning.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 5
guidelineName: Inmatningsmetoder
criterionNumber: 2
---

# 2.5.2 Pekaravbrott

## Syfte

Att förhindra oavsiktliga aktiveringar och möjliggöra för användare att korrigera misstag när de använder pekgester på touchskärmar eller liknande enheter.

## Beskrivning

Funktioner som kan styras med en enstaka pekare kan avbrytas eller ångras enligt minst ett av följande:

- Ingen nedtryckning: Användningen av nedtryckning av pekaren används inte för att utföra någon del av funktionen.
- Avbryt eller ångra: Funktionen blir komplett vid uppåtrörelse, och en mekanism finns tillgänglig för att avbryta funktionen innan den blir komplett eller för att ångra funktionen efter att den är färdig.
- Uppåtåterkallelse: Uppåtrörelsen återkallar resultatet av föregående nedåtrörelse.
- Väsentligt: Att färdigställa funktionen på nedåtrörelsen är väsentligt.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen för alla funktioner som använder en enstaka pekare erbjuda minst ett av följande:

- Aktivering endast vid uppåtrörelse, inte vid nedtryckning
- Möjlighet att avbryta eller ångra en åtgärd som initierats med en pekare
- Uppåtrörelse som återkallar eller avbryter vad som påbörjats med nedåtrörelse
- Kan visa att nedåtrörelse är nödvändig för funktionen

## Exempel

- Avbrytbara drag-and-drop-funktioner
- Dialogrutor som bekräftar åtgärder innan de slutförs
- Inmatningsfält som kan rensas eller återställas
- Knappar som aktiveras när fingret lyfts, inte när det trycks ned

## Vanliga problem

- Touch-aktiverade funktioner utan ångra-funktion
- Knappar som aktiveras direkt vid nedtryckning vilket kan orsaka oavsiktliga aktiveringar
- Svepgester utan möjlighet att avbryta

## Testmetoder

- Testa alla interaktiva element för att verifiera att de kan avbrytas eller ångras
- Bekräfta att knappar och kontroller aktiveras vid uppåtrörelse snarare än nedtryckning

## Relaterade riktlinjer

- [2.5.1 Pekargester](/wcag/2/5/1/pekargester)
- [3.3.4 Förebyggande av fel (juridiskt, ekonomiskt, data)](/wcag/3/3/4/forebyggande-av-fel)
- [3.3.6 Förebyggande av fel (alla)](/wcag/3/3/6/forebyggande-av-fel-alla)
