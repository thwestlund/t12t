---
title: 2.2.3 Ingen tidsbegränsning
description: Säkerställ att tidtagning inte är en nödvändig del av aktiviteten som presenteras, förutom för synkroniserad media och realtidshändelser.
level: AAA
slug: ingen-tidsbegransning
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "tidsgräns",
    "timeout",
    "tid",
    "ingen tidtagning",
    "tillräckligt med tid",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/2/2/3/ingen-tidsbegransning

principleNumber: 2
principleName: Operabel
guidelineNumber: 2
guidelineName: Tillräckligt med tid
criterionNumber: 3

og:
  title: 2.2.3 Ingen tidsbegränsning – WCAG
  description: Säkerställ att tidtagning inte är en nödvändig del av aktiviteten som presenteras.
  url: https://t12t.dev/wcag/2/2/3/ingen-tidsbegransning
  type: article

datePublished: 2025-05-12
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Ingen tidsbegränsning

## Beskrivning

Tidtagning är inte en nödvändig del av händelsen eller aktiviteten som presenteras av innehållet. Detta gäller inte för:

- Icke-interaktiv synkroniserad media (t.ex. en vanlig film eller video).
- Realtidshändelser (t.ex. en live-auktion eller ett direktsänt evenemang).

Detta kriterium (Nivå AAA) går ett steg längre än 2.2.1 Justerbar tidsgräns (Nivå A). Istället för att bara kräva att tidsgränser är justerbara eller kan förlängas, kräver detta kriterium att **inga tidsgränser alls** används, om inte tiden i sig är absolut nödvändig för aktiviteten.

## Varför detta behövs

Att helt ta bort onödiga tidsgränser ger maximal flexibilitet och minskar stress för användare som behöver extra tid. Detta är särskilt viktigt för:

- **Personer som behöver mycket tid:** Användare med grava funktionsnedsättningar (motoriska, kognitiva, synmässiga) kan behöva avsevärt längre tid än vad även en förlängd tidsgräns medger.
- **Minska kognitiv belastning:** Att ständigt behöva hålla koll på en tidsgräns och hantera varningar/förlängningar kan vara kognitivt krävande. Att ta bort tidsgränsen helt eliminerar denna stressfaktor.
- **Förhindra dataförlust:** Eliminerar risken att användare förlorar ifyllda data eller framsteg på grund av en tidsgräns som löper ut, även om de erbjudits förlängning.

Att uppfylla detta AAA-kriterium innebär att utforma aktiviteter så att användaren kan genomföra dem helt i sin egen takt, närhelst det är möjligt.

---

## Exempel

### Kunskapstest utan tidsgräns (Rätt) ✅

Ett webbaserat kunskapstest eller en utbildningsmodul låter användaren svara på frågorna i sin egen takt. Det finns ingen klocka som räknar ner och inga konsekvenser om användaren tar lång tid på sig.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
Ett online-prov för att testa förståelse av ett kapitel. Användaren kan läsa frågorna, tänka, och svara utan någon tidspress. Testet avslutas när användaren själv väljer att skicka in det.
```

::
**Resultat:** Alla användare, oavsett hur lång tid de behöver, kan slutföra testet. Tid är inte en faktor.

### Steg-för-steg-guide utan timeout (Rätt) ✅

En guide som leder användaren genom en konfigurationsprocess eller en handledning. Användaren kan stanna på varje steg hur länge som helst utan att sessionen avbryts eller att de tvingas börja om.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
En guide för att installera programvara. Varje steg presenteras på en egen sida eller i en egen sektion. Användaren klickar "Nästa" när de är redo. Det finns ingen automatisk utloggning eller timeout som avbryter processen.
```

::
**Resultat:** Användaren kan följa guiden i sin egen takt utan risk att bli avbruten på grund av tid.

### Formulär som tidsbegränsas i onödan (Fel) ❌

Ett kontaktformulär eller en ansökan online som har en inbyggd tidsgräns (t.ex. 10 minuter) för att fylla i och skicka, trots att det inte finns någon teknisk eller verksamhetsmässig anledning till detta (t.ex. ingen resursbokning i realtid).

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
Ett formulär för att anmäla sig till ett nyhetsbrev. Efter 5 minuter visas ett meddelande "Du har 1 minut kvar!" och sedan rensas formuläret om det inte skickas. Tidsgränsen är inte nödvändig för funktionen.
```

::
**Resultat:** Användare som behöver längre tid för att skriva eller förstå fälten kan misslyckas med att skicka formuläret, trots att tidsgränsen var onödig. Detta uppfyller inte AAA.

### Undantag: Förinspelad video (Tillåtet) ✅

En webbsida visar en förinspelad föreläsning som är 45 minuter lång.

**Resultat:** Detta är synkroniserad media. Tiden är en inneboende del av mediet och kan inte tas bort eller justeras utan att ändra innehållet. Detta är tillåtet.

### Undantag: Live-chatt med support (Tillåtet) ✅

En live-chatt med kundtjänst där supportagenten väntar på svar från användaren. Om användaren inte svarar inom en rimlig tid (t.ex. 5 minuter) kan agenten behöva avsluta chatten för att hjälpa andra kunder.

**Resultat:** Detta kan ses som en realtidshändelse där tid spelar roll för interaktionen och resursanvändningen. Även om en varning är bra (se 2.2.1), är en viss tidsgräns ofta nödvändig här.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.2.3 No Timing (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/no-timing.html)
- [Förstå WCAG SC 2.2.1 (Nivå A)](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html) (För jämförelse och grundläggande krav på justerbar tid).
