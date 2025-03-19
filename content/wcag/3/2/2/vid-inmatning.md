---
title: Riktlinje 3.2.2 - Vid inmatning
description: Att ändra inställningen för en komponent i användargränssnittet orsakar inte automatiskt en förändring av sammanhang såvida inte användaren har blivit informerad om beteendet före användning av komponenten.
level: A
principleNumber: 3
principleName: Begriplig
guidelineNumber: 2
guidelineName: Förutsägbar
criterionNumber: 2

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# 3.2.2 Vid inmatning

## Syfte

Att säkerställa att användarens inmatningar inte orsakar oväntade kontextändringar utan att användaren blivit informerad i förväg.

## Beskrivning

Att ändra inställningen för en komponent i användargränssnittet orsakar inte automatiskt en förändring av sammanhang såvida inte användaren har blivit informerad om beteendet före användning av komponenten.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Förhindra att kontextändringar sker automatiskt när användaren ändrar inställning för en komponent
- Informera användaren i förväg om en kontextändring kommer att ske vid inmatning
- Ge användaren möjlighet att bekräfta en åtgärd innan en kontextändring genomförs
- Säkerställa att formulär inte skickas automatiskt vid inmatning utan användarens avsikt

## Exempel

- En dropdown-meny som visar ett varningsmeddelande innan den navigerar till en ny sida vid val
- Ett formulär som kräver att användaren klickar på en "Skicka"-knapp istället för att skickas automatiskt
- Kryssrutor som beskriver vad som kommer att hända när de markeras
- Ett sökfält som kräver en bekräftelse (t.ex. genom att klicka på sökknappen) innan sökningen genomförs

## Vanliga problem

- Formulär som skickas automatiskt när ett val görs i en rullgardinsmeny
- Kryssrutor som orsakar sidladdningar när de markeras
- Radio-knappar som automatiskt navigerar användaren till en ny sida vid val
- Datumväljare som orsakar omedelbara uppdateringar av sidan när ett datum väljs

## Testmetoder

- Testa alla inmatningskomponenter för att verifiera att de inte orsakar oväntade kontextändringar
- Kontrollera att användaren informeras i förväg om en komponent kommer att orsaka en kontextändring
- Verifiera att formulär kräver en tydlig användaraktion för att skickas

## Relaterade riktlinjer

- [3.2.1 Vid fokus](/wcag/3/2/1/vid-fokus)
- [3.2.5 Ändringar på begäran](/wcag/3/2/5/andringar-pa-begaran)
- [3.3.2 Etiketter eller instruktioner](/wcag/3/3/2/etiketter-eller-instruktioner)
