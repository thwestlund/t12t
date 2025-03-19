---
title: Riktlinje 3.2.5 - Ändringar på begäran
description: Ändringar av sammanhang initieras endast på begäran av användaren, eller så finns det en mekanism för att stänga av sådana ändringar.
level: AAA
principleNumber: 3
principleName: Begriplig
guidelineNumber: 2
guidelineName: Förutsägbar
criterionNumber: 5
---

# 3.2.5 Ändringar på begäran

## Syfte

Att minimera risken för förvirring och desorientering genom att säkerställa att användaren har kontroll över kontextändringar eller att det finns en mekanism för att stänga av automatiska ändringar.

## Beskrivning

Ändringar av sammanhang initieras endast på begäran av användaren, eller så finns det en mekanism för att stänga av sådana ändringar.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Säkerställa att alla kontextändringar sker endast på användarens begäran
- Om automatiska kontextändringar förekommer, tillhandahålla en mekanism för att stänga av dessa
- Ge användaren kontroll över ändringar av sammanhang som kan vara förvirrande eller desorienterande
- Undvika automatiska omdirigeringar, auto-refresh och popup-fönster som inte efterfrågas

## Exempel

- Ett alternativ för att inaktivera automatisk uppdatering av sidan
- En inställning för att stänga av automatiska bildspel
- Möjlighet att inaktivera automatiska omdirigeringar
- Kontroller för att pausa innehåll som uppdateras automatiskt, som nyhetsflöden

## Vanliga problem

- Popup-fönster som öppnas utan användarens begäran
- Automatisk omdirigering till en annan sida efter en viss tid
- Automatisk uppdatering av innehåll som förvirrar användaren
- Bildspel eller karuseller som automatiskt byter innehåll utan möjlighet att pausa

## Testmetoder

- Identifiera alla instanser av automatiska kontextändringar
- Verifiera att dessa ändringar endast sker på användarens begäran eller kan inaktiveras
- Testa att kontroller för att inaktivera automatiska ändringar fungerar korrekt

## Relaterade riktlinjer

- [3.2.1 Vid fokus](/wcag/3/2/1/vid-fokus)
- [3.2.2 Vid inmatning](/wcag/3/2/2/vid-inmatning)
- [2.2.2 Paus, stopp, dölj](/wcag/2/2/2/paus-stopp-dolj)
