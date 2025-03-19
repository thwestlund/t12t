---
title: Riktlinje 3.3.9 - Tillgängliga autentiseringsmetoder
description: Om en webbsida inkluderar en autentiseringsprocess finns minst en autentiseringsmetod som inte förlitar sig på användarens minne, kognition, språk eller andra kognitiva färdigheter.
level: A
principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningsstöd
criterionNumber: 9
---

# 3.3.9 Tillgängliga autentiseringsmetoder

## Syfte

Att säkerställa att användare med kognitiva funktionsnedsättningar har möjlighet att autentisera sig på webbplatser och i applikationer utan att behöva förlita sig enbart på minneskapacitet eller komplexa kognitiva färdigheter.

## Beskrivning

Om en webbsida inkluderar en autentiseringsprocess finns minst en autentiseringsmetod som inte förlitar sig på användarens minne, kognition, språk eller andra kognitiva färdigheter, såvida inte detta skulle äventyra säkerheten eller syftet med innehållet.

## Uppfyllnadskriterier

För att uppfylla denna riktlinje måste webbplatsen eller applikationen:

- Erbjuda minst en autentiseringsmetod som inte kräver att användaren memorerar komplexa lösenord
- Tillhandahålla alternativ som inte förlitar sig på användarens kognitiva förmågor
- Erbjuda autentiseringsmetoder som är tillgängliga för användare med olika typer av funktionsnedsättningar
- Säkerställa att de alternativa metoderna bibehåller en lämplig säkerhetsnivå

## Exempel

- Inloggning med nyckelhanterare eller lösenordshanterare
- Biometrisk autentisering (fingeravtryck, ansiktsigenkänning)
- Single Sign-On (SSO) med en pålitlig tredjepartstjänst
- Autentisering via e-postlänk eller SMS-kod istället för memorerade lösenord
- Användning av WebAuthn/FIDO2-standarder för lösenordsfri autentisering

## Vanliga problem

- Krav på komplexa lösenord utan alternativ
- Tvåfaktorsautentisering som förlitar sig helt på kognitiva förmågor
- CAPTCHA-lösningar som är kognitivt krävande utan tillgängliga alternativ
- Säkerhetsfrågor som kräver att användaren kommer ihåg specifik information

## Testmetoder

- Identifiera alla autentiseringsprocesser på webbplatsen
- Verifiera att minst en metod inte förlitar sig på användarens kognitiva förmågor
- Testa att alternativa autentiseringsmetoder är fullt funktionella och tillgängliga
- Kontrollera att alternativen bibehåller lämplig säkerhetsnivå

## Relaterade riktlinjer

- [2.2.1 Justerbar tidsavgränsning](/wcag/2/2/1/justerbar-tidsavgransning)
- [3.3.2 Etiketter eller instruktioner](/wcag/3/3/2/etiketter-eller-instruktioner)
- [3.3.4 Förebyggande av fel (juridiskt, ekonomiskt, data)](/wcag/3/3/4/forebyggande-av-fel-juridiskt-ekonomiskt-data)
