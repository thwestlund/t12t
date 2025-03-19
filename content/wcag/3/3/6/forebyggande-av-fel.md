---
title: Riktlinje 3.3.6 - Förebyggande av fel (alla)
description: För webbsidor som kräver att användaren lämnar information, finns minst ett av följande tillgängligt - återkallelse, kontroll, bekräftelse, eller möjlighet att korrigera inlämnad information.
level: AAA
principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningsstöd
criterionNumber: 6
---

# 3.3.6 Förebyggande av fel (alla)

## Syfte

Att hjälpa användare att undvika fel genom att ge dem möjlighet att kontrollera, bekräfta eller korrigera all information de lämnar.

## Beskrivning

För webbsidor som kräver att användaren lämnar information, finns minst ett av följande tillgängligt:

- Återkallelse: Inlämningar är reversibla.
- Kontroll: Data som anges av användaren kontrolleras för inmatningsfel och användaren ges möjlighet att korrigera dem.
- Bekräftelse: En mekanism finns tillgänglig för att granska, bekräfta och korrigera information innan inlämningen slutförs.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen erbjuda minst ett av följande:

- En möjlighet att ångra inlämnad information
- Automatisk kontroll av användarens inmatning med möjlighet att korrigera fel
- En översiktssida där användaren kan granska all information innan slutlig inlämning
- En bekräftelsemekanism som låter användaren verifiera att informationen är korrekt

## Exempel

- Ett formulär som visar en översikt av all inmatad information innan slutlig inlämning
- En e-handelssida som låter användaren granska beställningen innan köp
- Ett registreringsformulär med möjlighet att redigera alla fält på bekräftelsesidan
- En mekanism för att ångra eller ta tillbaka en inlämning inom en viss tidsperiod

## Vanliga problem

- Formulär utan bekräftelsesteg före inlämning
- System som inte tillåter användare att korrigera fel efter upptäckt
- Transaktioner utan ångra-funktion
- Inmatningssystem utan validering eller kontroll av data

## Testmetoder

- Testa alla formulär och identifiera om de erbjuder återkallelse, kontroll eller bekräftelse
- Verifiera att användare ges möjlighet att granska och korrigera information
- Kontrollera att det finns effektiva felförebyggande mekanismer i alla inlämningsprocesser

## Relaterade riktlinjer

- [3.3.1 Identifiering av fel](/wcag/3/3/1/identifiering-av-fel)
- [3.3.3 Förslag vid fel](/wcag/3/3/3/forslag-vid-fel)
- [3.3.4 Förebyggande av fel (juridiskt, ekonomiskt, data)](/wcag/3/3/4/forebyggande-av-fel-juridiskt-ekonomiskt-data)
