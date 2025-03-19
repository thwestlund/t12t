---
title: Riktlinje 5.3.1 - Popup-blockering
description: Nya fönster, popup-fönster eller andra elementerbjuder specifika stängningsfunktioner såvida inte att stänga den typen av element skulle betyda att syftet med innehållet går förlorat.
level: A
principleNumber: 5
principleName: Tillgängligt
guidelineNumber: 3
guidelineName: Åtgärder
criterionNumber: 1

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# 5.3.1 Popup-blockering

## Syfte

Att säkerställa att användare kan stänga popup-fönster och andra överliggande element som visas på skärmen, så att de kan fortsätta interagera med det underliggande innehållet.

## Beskrivning

Nya fönster, popup-fönster eller andra element erbjuder specifika stängningsfunktioner såvida inte att stänga den typen av element skulle betyda att syftet med innehållet går förlorat.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Förse alla popup-fönster, modala dialogrutor och överlägg med en tydlig stängningsknapp
- Säkerställa att stängningsfunktionen är synlig och lättåtkomlig
- Tillåta att popup-fönster kan stängas med både mus och tangentbord
- Endast undanta popup-fönster från kravet på stängningsfunktion om stängning skulle göra att syftet med innehållet går förlorat

## Exempel

- En modal dialogruta med en tydlig "X" eller "Stäng"-knapp i hörnet
- Ett popup-fönster som kan stängas genom att klicka utanför fönstret
- Ett överlägg som kan stängas med Escape-tangenten
- Cookiemeddelanden med tydliga val för "Acceptera", "Avvisa" eller "Stäng"

## Vanliga problem

- Popup-fönster utan synliga stängningsknappar
- Överlägg som inte kan stängas med tangentbordet
- Modala dialogrutor där stängningsknappen är svår att hitta eller för liten
- Automatiska popup-fönster som blockerar åtkomst till det underliggande innehållet utan tydlig åtgärd för att stänga dem

## Testmetoder

- Identifiera alla popup-fönster, modala dialogrutor och överlägg på webbplatsen
- Verifiera att varje element har en tydlig stängningsfunktion
- Testa att stängningsfunktionen fungerar med både mus och tangentbord
- Kontrollera att stängningsfunktionen är visuellt synlig och lätt att upptäcka

## Relaterade riktlinjer

- [2.1.1 Tangentbord](/wcag/2/1/1/tangentbord)
- [2.4.3 Fokusordning](/wcag/2/4/3/fokusordning)
- [3.2.5 Ändringar på begäran](/wcag/3/2/5/andringar-pa-begaran)
