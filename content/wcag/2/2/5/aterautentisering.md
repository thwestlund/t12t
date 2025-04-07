---
title: 2.2.5 Återautentisering
description: Säkerställ att användare inte förlorar data när en autentiserad session upphör och de behöver logga in igen.
level: AAA
slug: aterautentisering
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "återautentisering",
    "re-authentication",
    "session",
    "timeout",
    "inloggning",
    "dataförlust",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/2/2/5/aterautentisering

principleNumber: 2
principleName: Operabel
guidelineNumber: 2
guidelineName: Tillräckligt med tid
criterionNumber: 5

og:
  title: 2.2.5 Återautentisering – WCAG
  description: Säkerställ att användare inte förlorar data när de behöver logga in igen.
  url: https://t12t.dev/wcag/2/2/5/aterautentisering
  type: article

datePublished: 2025-05-14
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Återautentisering

## Beskrivning

När en autentiserad session upphör (t.ex. på grund av timeout), kan användaren fortsätta aktiviteten utan dataförlust efter att ha återautentiserat sig (loggat in igen).

Detta kriterium (Nivå AAA) innebär att om en användare blir utloggad medan de håller på med en uppgift (t.ex. fyller i ett långt formulär, skriver ett inlägg, genomför en transaktion i flera steg), ska all data de har matat in finnas kvar när de loggar in igen. De ska kunna fortsätta där de slutade utan att behöva börja om från början.

## Varför detta behövs

Att förlora data på grund av en timeout är frustrerande för alla användare, men det kan vara ett oöverstigligt hinder för personer som behöver extra tid eller lätt tappar koncentrationen:

- **Användare som behöver lång tid:** Personer med motoriska funktionsnedsättningar, kognitiva funktionsnedsättningar eller de som använder hjälpmedel kan ta betydligt längre tid på sig att fylla i formulär eller slutföra uppgifter. Risken för timeout är högre, och att behöva göra om allt arbete kan vara utmattande eller omöjligt.
- **Minskad stress och frustration:** Att veta att ens arbete sparas även om sessionen bryts minskar stressen och osäkerheten kring att interagera med tidskänsliga system.

Detta krav säkerställer att användarens ansträngning inte går förlorad på grund av systemets sessionshantering.

---

## Exempel

### Formulärdata sparas vid timeout (Rätt) ✅

En användare fyller i ett långt ansökningsformulär online. Sessionen har en timeout på 30 minuter (med varning och förlängningsmöjlighet enligt 2.2.1). Om användaren trots detta blir utloggad (t.ex. tar en lång paus), sparas de data som redan fyllts i på servern (eller i webbläsarens lokala lagring). När användaren loggar in igen, presenteras formuläret med alla tidigare ifyllda fält intakta, så att de kan fortsätta där de slutade.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
1. Användaren fyller i fält 1-10 i ett formulär med 20 fält.
2. Sessionen går ut. Användaren presenteras med inloggningssidan.
3. Användaren loggar in igen.
4. Användaren återförs till formuläret. Fält 1-10 är fortfarande ifyllda med de data som angavs tidigare.
5. Användaren kan fortsätta fylla i fält 11-20.
```

::
**Resultat:** Ingen dataförlust sker vid återautentisering. Användarens arbete respekteras.

### Webbutikens varukorg sparas (Rätt) ✅

En användare lägger varor i en varukorg i en webbutik under en längre tid. Sessionen går ut. När användaren loggar in igen finns alla varor kvar i varukorgen.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
1. Användaren lägger 5 produkter i varukorgen.
2. Användaren blir utloggad på grund av inaktivitet.
3. Användaren loggar in igen.
4. Varukorgen innehåller fortfarande de 5 produkterna.
```

::
**Resultat:** Användaren behöver inte leta upp och lägga till alla varor igen.

### Formulärdata rensas vid timeout (Fel) ❌

En användare fyller i ett komplext formulär. Sessionen går ut och användaren måste logga in igen. När de återvänder till formulärsidan är alla fält tomma och de måste börja om från början.

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
1. Användaren fyller i ett formulär.
2. Timeout inträffar, användaren loggas ut.
3. Användaren loggar in igen.
4. Formuläret visas tomt. Allt tidigare arbete är förlorat.
```

::
**Resultat:** Detta leder till dataförlust och stor frustration för användaren. Uppfyller inte AAA-kravet.

**Tekniska lösningar:**
För att uppnå detta kan man använda:

- **Server-side lagring:** Spara formulärdata temporärt på servern kopplat till användarens konto eller session.
- **Webbläsarens lagring:** Använda [localStorage]{.inline-code} eller [sessionStorage]{.inline-code} för att spara data lokalt i användarens webbläsare. Detta kan vara enklare för vissa data men kan gå förlorat om användaren byter webbläsare eller rensar data. Server-side är oftast mer robust för viktig data.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.2.5 Re-authenticating (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating.html)
- [Förstå WCAG SC 2.2.1 (Nivå A)](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html) (Grundläggande krav på att hantera timeouts).
