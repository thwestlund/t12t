---
title: 2.2.6 Timeouts
description: Informera användare om hur lång tids inaktivitet som kan leda till dataförlust.
level: AAA
slug: timeouts
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "timeout",
    "tidsgräns",
    "inaktivitet",
    "dataförlust",
    "session",
    "information",
    "operabel",
    "kognitiv",
  ]
canonical: https://t12t.dev/wcag/2/2/6/timeouts

principleNumber: 2
principleName: Operabel
guidelineNumber: 2
guidelineName: Tillräckligt med tid
criterionNumber: 6

og:
  title: 2.2.6 Timeouts – WCAG
  description: Informera användare om hur lång tids inaktivitet som kan leda till dataförlust.
  url: https://t12t.dev/wcag/2/2/6/timeouts
  type: article

datePublished: 2025-05-15
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Timeouts

## Beskrivning

Användare varnas om hur lång användarinaktivitet som kan orsaka dataförlust, om inte datan sparas i mer än 20 timmar när användaren inte gör någonting.

Detta kriterium (Nivå AAA) kräver att om det finns en risk att användaren förlorar data (t.ex. information i ett formulär som inte skickats) på grund av inaktivitet och en efterföljande timeout, måste användaren **i förväg** informeras om hur länge de kan vara inaktiva innan detta sker.

Det kompletterar Kriterium 2.2.1 (som kräver möjlighet att justera/förlänga tidsgränser) och 2.2.5 (som kräver att data bevaras vid återautentisering). Detta kriterium fokuserar specifikt på att _informera_ användaren om själva inaktivitetsgränsen som kan leda till _dataförlust_.

Undantaget är om systemet automatiskt sparar användarens data under minst 20 timmars inaktivitet.

## Varför detta behövs

Att i förväg veta hur länge man kan vara inaktiv innan data riskerar att gå förlorad hjälper användare att planera och undvika problem:

- **Medvetenhet och planering:** Användare som vet att de behöver mer tid, eller som kan bli avbrutna, kan bättre bedöma om de hinner slutföra en uppgift innan en eventuell timeout som raderar deras data.
- **Minskar oro:** Att känna till tidsramen kan minska stress och osäkerhet, särskilt för användare med kognitiva funktionsnedsättningar som oroar sig för att förlora sitt arbete.
- **Komplement till andra krav:** Även om data _bör_ bevaras (2.2.5), kan det finnas situationer där detta inte är fullt möjligt. Att då åtminstone varna om tidsgränsen för dataförlust är ett viktigt skyddsnät på AAA-nivå.

Informationen gör det möjligt för användaren att fatta informerade beslut om hur de interagerar med systemet.

---

## Exempel

### Information vid formulärstart (Rätt) ✅

När användaren startar ett längre formulär visas ett meddelande i början: "Observera: Av säkerhetsskäl kommer osparade ändringar i detta formulär att gå förlorade efter 25 minuters inaktivitet. Kom ihåg att spara dina framsteg om du behöver ta en paus (om sparfunktion finns)."

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```html {3-7} showLineNumbers
<div class="form-container">
  <h1>Ansökningsformulär</h1>
  <p class="timeout-warning">
    <strong>Viktigt:</strong> Om du är inaktiv i mer än 25 minuter kommer
    eventuella osparade data i formuläret att gå förlorade och du kan behöva
    börja om.
  </p>
  <form>
    <!-- Formulärfält -->
  </form>
</div>
```

::
**Resultat:** Användaren är informerad om tidsgränsen för dataförlust _innan_ de börjar fylla i formuläret.

### Information i hjälpavsnitt (Rätt) ✅

Webbplatsens hjälp- eller FAQ-sektion innehåller information om sessionshantering, där det tydligt framgår: "För din säkerhet avslutas din inloggade session automatiskt efter 15 minuters inaktivitet. Om du håller på att fylla i ett formulär när detta sker, och formuläret inte har en 'Spara utkast'-funktion, kan dina data gå förlorade."

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Hjälptext]
**Sessionslängd och säkerhet**
För att skydda ditt konto loggas du automatiskt ut från [Webbplatsens Namn] efter 15 minuters inaktivitet. Om du är mitt uppe i att skriva ett inlägg eller fylla i ett formulär utan sparfunktion när sessionen går ut, kan information som inte skickats gå förlorad. Vi rekommenderar att du slutför din uppgift inom denna tid eller använder eventuella funktioner för att spara utkast.
```

::
**Resultat:** Informationen finns tillgänglig för användaren, även om den inte visas direkt vid varje interaktion.

### Automatisk datarensning utan information (Fel) ❌

Ett system loggar ut användaren efter 10 minuters inaktivitet. Om användaren var mitt i att skriva ett meddelande, rensas meddelandetexten. Användaren informerades aldrig i förväg om denna 10-minutersgräns för dataförlust.

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
Användaren skriver ett långt e-postmeddelande. De tar en kort paus. När de kommer tillbaka har de blivit utloggade, och när de loggar in igen är utkastet borta. Ingenstans på webbplatsen fanns information om att inaktivitet på 10 minuter skulle leda till att utkastet raderas.
```

::
**Resultat:** Användaren drabbas av oväntad dataförlust eftersom de inte varnades om tidsgränsen för inaktivitet.

### Undantag: Långtidssparande (Tillåtet) ✅

Ett online-dokumentredigeringsverktyg (som Google Docs eller Microsoft 365 Online) sparar automatiskt användarens ändringar kontinuerligt eller med mycket korta intervall. Även om användaren är inaktiv i timmar eller dagar, finns dokumentet kvar med de senaste ändringarna när de återvänder.

::code-group{:labels='["Koncept (Tillåtet) ✅"]'}

```text [Beskrivning]
Användaren skriver i ett dokument i en molnbaserad ordbehandlare. Programmet sparar automatiskt var tionde sekund. Användaren kan stänga webbläsaren, vara inaktiv i flera dagar, och sedan öppna dokumentet igen – alla data finns kvar.
```

::
**Resultat:** Eftersom data sparas under mer än 20 timmars inaktivitet (i praktiken kontinuerligt), behöver användaren inte varnas om en specifik inaktivitetsgräns för dataförlust.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.2.6 Timeouts (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/timeouts.html)
- [Förstå WCAG SC 2.2.1 (Nivå A)](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html) (Relaterat krav om att kunna justera/förlänga timeouts).
- [Förstå WCAG SC 2.2.5 (Nivå AAA)](https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating.html) (Relaterat krav om att bevara data vid återautentisering).
