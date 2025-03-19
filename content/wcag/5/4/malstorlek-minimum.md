---
title: Riktlinje 5.4 - Målstorlek minst 24 CSS-pixlar
description: Storleken på målet för pekarinmatning är minst 24 CSS-pixlar längs två dimensioner utom när målstorleken bestäms av användaren, målet finns i ett textblock, eller den ursprungliga storleken på målet är bevarad.
level: AA
principleNumber: 5
principleName: Tillgängligt
guidelineNumber: 4
guidelineName: Målstorlek
criterionNumber: 1

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# 5.4 Målstorlek minst 24 CSS-pixlar

## Syfte

Att säkerställa att interaktiva element är tillräckligt stora för att enkelt kunna aktiveras av användare med motoriska svårigheter eller nedsatt precision vid pekaranvändning.

## Beskrivning

Storleken på målet för pekarinmatning är minst 24 CSS-pixlar längs två dimensioner utom när:

- Målstorleken bestäms av användaren
- Målet finns i ett textblock
- Den ursprungliga storleken på målet är bevarad (t.ex. en ikon eller bild)

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Säkerställa att alla klickbara element (knappar, länkar, kontroller) är minst 24x24 CSS-pixlar
- Tillhandahålla tillräckligt stora träffytor för touch-interaktioner
- Endast undanta element från detta krav när något av de angivna undantagen gäller
- Se till att det finns tillräckligt utrymme mellan interaktiva element för att förhindra oavsiktliga aktiveringar

## Exempel

- Knappar i ett gränssnitt som är minst 24x24 pixlar
- Kontroller i formulär (kryssrutor, radioknappar) med tillräckligt stora klickområden
- Navigationslänkar med träffytor som är minst 24 pixlar i höjd och bredd
- Touch-vänliga ikoner i mobilgränssnitt

## Vanliga problem

- För små knappar eller kontroller, särskilt på mobila enheter
- Länkar i text som endast har den exakta textens storlek som klickbart område
- Interaktiva element som är placerade för nära varandra, vilket gör det svårt att träffa rätt
- Ikoner eller kontroller som är för små för att enkelt kunna träffas med fingret på touchskärmar

## Testmetoder

- Mät storleken på interaktiva element med utvecklarverktyg
- Kontrollera att klickbara områden är minst 24x24 CSS-pixlar
- Testa gränssnittet på touchenheter för att verifiera att det är lätt att träffa målen
- Utvärdera om undantagen tillämpas korrekt när element är mindre än 24 pixlar

## Relaterade riktlinjer

- [2.5.5 Målstorlek](/wcag/2/5/5/malstorlek)
- [1.4.4 Förändring av textstorlek](/wcag/1/4/4/forandring-av-textstorlek)
- [2.5.1 Pekargester](/wcag/2/5/1/pekargester)
