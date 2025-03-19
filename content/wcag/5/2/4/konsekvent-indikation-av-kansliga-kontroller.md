---
title: Riktlinje 5.2.4 - Konsekvent indikation av känsliga kontroller
description: Gränssnittskomponenter vars aktivering kan resultera i betydande förändringar för användaren eller dataförlust, indikeras på ett konsekvent sätt inom produkten.
level: AA
principleNumber: 5
principleName: Tillgängligt
guidelineNumber: 2
guidelineName: Ytterligare gester
criterionNumber: 4

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# 5.2.4 Konsekvent indikation av känsliga kontroller

## Syfte

Att hjälpa användare identifiera och vara medvetna om gränssnittskomponenter som kan orsaka betydande förändringar eller dataförlust, genom konsekvent visuell indikation av sådana känsliga kontroller.

## Beskrivning

Gränssnittskomponenter vars aktivering kan resultera i betydande förändringar för användaren eller dataförlust, indikeras på ett konsekvent sätt inom produkten.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Identifiera alla gränssnittskomponenter som kan orsaka betydande förändringar eller dataförlust
- Använda konsekvent visuell design för att indikera dessa känsliga kontroller
- Särskilja känsliga kontroller från vanliga kontroller genom tydliga visuella signaler
- Bibehålla konsekvens i denna indikation genom hela produkten

## Exempel

- Röd färg eller varningssymboler för knappar som tar bort data eller avslutar sessioner
- Dialogrutor som bekräftar känsliga åtgärder innan de genomförs
- Särskilda ikoner som konsekvent används för att markera destruktiva åtgärder
- Kontroller för att publicera eller dela information markeras med en konsekvent design

## Vanliga problem

- Inkonsekvent design av knappar för viktiga åtgärder som "Ta bort" eller "Avbryt prenumeration"
- Känsliga åtgärder som inte visuellt skiljer sig från vanliga navigeringsåtgärder
- Knappar som utför destruktiva åtgärder placerade för nära vanliga åtgärdsknappar
- Avsaknad av visuella indikatorer för att markera åtgärder som inte kan ångras

## Testmetoder

- Identifiera alla känsliga kontroller i gränssnittet
- Verifiera att dessa kontroller har en konsekvent visuell indikation
- Kontrollera att designen tydligt skiljer känsliga kontroller från vanliga kontroller
- Utvärdera om användare kan identifiera känsliga kontroller baserat på deras utseende

## Relaterade riktlinjer

- [3.2.4 Konsekvent identifiering](/wcag/3/2/4/konsekvent-identifiering)
- [3.3.4 Förebyggande av fel (juridiskt, ekonomiskt, data)](/wcag/3/3/4/forebyggande-av-fel-juridiskt-ekonomiskt-data)
- [3.3.6 Förebyggande av fel (alla)](/wcag/3/3/6/forebyggande-av-fel-alla)
