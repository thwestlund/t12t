---
title: Riktlinje 3.2.1 - Vid fokus
description: När en komponent i användargränssnittet får fokus, orsakar det inte en förändring av sammanhang.
level: A
principleNumber: 3
principleName: Begriplig
guidelineNumber: 2
guidelineName: Förutsägbar
criterionNumber: 1
---

# 3.2.1 Vid fokus

## Syfte

Att säkerställa att användare inte möter oväntade kontextändringar när de navigerar på en webbplats eller i en applikation genom att endast tabba till olika element.

## Beskrivning

När en komponent i användargränssnittet får fokus, orsakar det inte en förändring av sammanhang.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Förhindra att kontextändringar sker enbart på grund av att ett element får fokus
- Se till att element som får fokus förblir stabila utan att orsaka oväntade förändringar på sidan
- Kräva ytterligare användaråtgärder (som att klicka) för att aktivera kontextändringar

## Exempel

- Ett formulärfält som behåller sitt fokus utan att automatiskt skicka ett formulär
- En meny som inte automatiskt navigerar till en ny sida när användaren tabbar till en menypost
- En kombobox som inte öppnar en ny sida när användaren tabbar till den
- Ett sökfält som inte startar en sökning bara för att det får fokus

## Vanliga problem

- Formulär som skickas automatiskt när fokus flyttas från ett fält
- Länkar som aktiveras automatiskt när de får fokus
- Dropdown-menyer som orsakar sidnavigering när de får fokus
- Dialogrutor som öppnas automatiskt när fokus flyttas till en viss komponent

## Testmetoder

- Navigera genom gränssnittet med enbart tangentbordet
- Verifiera att när komponenter får fokus sker inga oönskade kontextändringar
- Testa att dropdown-menyer, flikar och andra interaktiva element inte aktiveras enbart genom att få fokus

## Relaterade riktlinjer

- [3.2.2 Vid inmatning](/wcag/3/2/2/vid-inmatning)
- [3.2.5 Ändringar på begäran](/wcag/3/2/5/andringar-pa-begaran)
- [2.1.1 Tangentbord](/wcag/2/1/1/tangentbord)
