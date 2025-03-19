---
title: Riktlinje 2.5.3 - Etikett i namn
description: För användargränssnittskomponenter med etiketter som innehåller text eller bilder av text, måste namnet innehålla den text som visas visuellt.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 5
guidelineName: Inmatningsmetoder
criterionNumber: 3

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# 2.5.3 Etikett i namn

## Syfte

Att säkerställa att användare som använder olika inmatningsmetoder kan interagera med gränssnittskomponenter genom att referera till deras synliga etiketter.

## Beskrivning

För användargränssnittskomponenter med etiketter som innehåller text eller bilder av text, måste namnet som kan bestämmas programmatiskt innehålla den text som visas visuellt.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Säkerställa att den programmatiskt bestämbara namnet för en komponent innehåller samma text som visas visuellt
- Ordna texten i namnet så att den visuellt synliga texten förekommer först i det programmatiskt bestämbara namnet
- Tillgodose att användare som använder röststyrning kan interagera med komponenter genom att uttala deras synliga etikett

## Exempel

- En knapp med texten "Skicka" har "Skicka" som sitt programmatiskt bestämbara namn
- En länk med texten "Läs mer" har "Läs mer om produkten" som sitt programmatiskt bestämbara namn, där "Läs mer" kommer först
- Ett formulärfält med etiketten "Namn" har "Namn" som en del av sitt programmatiskt bestämbara namn

## Vanliga problem

- Knappar eller länkar där det programmatiskt bestämbara namnet inte matchar den visuella texten
- Formfält där den programmatiskt bestämbara etiketten inte innehåller samma text som den visuella etiketten
- Ikoner med text som har namn som inte innehåller den visuella texten

## Testmetoder

- Inspektera koden för att kontrollera att programmatiskt bestämbara namn för komponenter innehåller den visuella texten
- Testa med röststyrning för att verifiera att komponenter kan aktiveras genom att säga deras visuella etikett

## Relaterade riktlinjer

- [1.1.1 Icke-textuellt innehåll](/wcag/1/1/1/icke-textuellt-innehall)
- [2.4.6 Rubriker och etiketter](/wcag/2/4/6/rubriker-och-etiketter)
- [3.3.2 Etiketter eller instruktioner](/wcag/3/3/2/etiketter-eller-instruktioner)
