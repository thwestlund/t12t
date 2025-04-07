---
title: 2.5.6 Samtidiga indatametoder
description: Säkerställ att webbinnehåll inte begränsar användningen av de indatametoder (t.ex. mus, tangentbord, touch, penna) som är tillgängliga på en plattform, förutom när begränsningen är nödvändig.
level: AAA
slug: samtidiga-indatametoder
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "samtidiga indatametoder",
    "concurrent input mechanisms",
    "indata",
    "input",
    "mus",
    "tangentbord",
    "touch",
    "penna",
    "assistive technology",
    "hjälpmedel",
    "operabel",
    "indatametoder",
  ]
canonical: https://t12t.dev/wcag/2/5/6/samtidiga-indatametoder

principleNumber: 2
principleName: Operabel
guidelineNumber: 5
guidelineName: Indatametoder
criterionNumber: 6

og:
  title: 2.5.6 Samtidiga indatametoder – WCAG
  description: Begränsa inte användningen av tillgängliga indatametoder.
  url: https://t12t.dev/wcag/2/5/6/samtidiga-indatametoder
  type: article

datePublished: 2025-06-15
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Samtidiga indatametoder

## Beskrivning

Webbinnehåll begränsar inte användningen av de indatametoder som är tillgängliga på en plattform, förutom när begränsningen är nödvändig (essential) för att säkerställa innehållets säkerhet eller för att respektera användarens inställningar.

Detta kriterium (Nivå AAA) innebär att en webbplats eller applikation inte får blockera eller störa användningen av olika sätt att mata in information som användaren har tillgång till. Om en användare till exempel har både mus och tangentbord, eller både pekskärm och ett externt tangentbord, ska de kunna växla mellan dessa och använda dem samtidigt (eller i snabb följd) utan att webbplatsen hindrar det eller beter sig konstigt.

Undantag:

- **Säkerhet:** Om begränsningen krävs för att förhindra osäker användning (t.ex. att förhindra automatiserade skript från att simulera både mus och tangentbord samtidigt på ett misstänkt sätt).
- **Användarinställningar:** Om användaren själv har konfigurerat systemet eller webbplatsen att endast tillåta en viss indatametod.

## Varför detta behövs

Många användare, särskilt de som använder hjälpmedel, kombinerar ofta olika indatametoder:

- **Skärmläsaranvändare:** Använder primärt tangentbord, men kan också använda mus eller pekskärm för vissa uppgifter.
- **Personer med motoriska funktionsnedsättningar:** Kan använda en kombination av specialtangentbord, switch-kontroller (som simulerar tangenttryck) och kanske en huvudpekare (som simulerar mus).
- **Användare med pekskärm och penna:** Kan vilja växla mellan att använda fingret och en penna.
- **Användare med talstyrning:** Kombinerar ofta taligenkänning med tangentbord eller mus.

Om en webbplats felaktigt antar att endast en indatametod kommer att användas, eller aktivt blockerar andra metoder när en viss metod används, kan det göra det omöjligt för dessa användare att interagera effektivt. Ett vanligt problem är att webbplatser felaktigt döljer fokusindikatorn ([outline]{.inline-code}) när musen används, vilket sedan gör det svårt att se fokus när användaren växlar tillbaka till tangentbordet.

Att tillåta samtidig användning av olika indataenheter säkerställer en flexibel och robust interaktion för alla.

---

## Exempel

### Webbplats som tillåter växling mellan mus och tangentbord (Rätt) ✅

En användare navigerar på en webbplats. De använder musen för att klicka på en länk, fyller sedan i ett formulärfält med tangentbordet, och använder sedan musen igen för att klicka på "Skicka". Fokusindikatorn förblir synlig (eller blir synlig) när tangentbordet används, oavsett om musen också rörs.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
Webbplatsen lyssnar på både mus- och tangentbordshändelser utan att blockera någon av dem. CSS används korrekt med `:focus-visible` för att visa fokusindikatorn primärt vid tangentbordsnavigation, men den tas inte bort helt för `:focus` om musen används (eller så hanteras det på ett sätt som inte stör växling). Inga skript finns som t.ex. säger "om musrörelse detekteras, inaktivera alla tangentbordshändelser".
```

::
**Resultat:** Användaren kan smidigt växla mellan sina föredragna indatametoder.

### Textredigerare som stödjer touch, penna och tangentbord (Rätt) ✅

En webbaserad textredigerare fungerar lika bra oavsett om användaren skriver med ett fysiskt tangentbord, ett skärmtangentbord via touch, markerar text med fingret, eller använder en penna för att rita eller anteckna (om den funktionen finns). Gränssnittet anpassar sig eventuellt (t.ex. större ikoner vid touch), men blockerar inte någon metod.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
Applikationen är byggd för att hantera olika pekartyper (mus, touch, penna) och tangentbordshändelser. Användaren kan skriva ett ord med tangentbordet, sedan direkt markera det med fingret och välja "Fetstil" från en meny med ett tryck.
```

::
**Resultat:** Flexibel användning med de enheter användaren har tillgängliga.

### Spel som kräver endast mus (Fel) ❌

Ett webbaserat spel är designat så att det _endast_ kan styras med musen. Även om vissa åtgärder _skulle kunna_ mappas till tangentbordet (t.ex. rörelse med piltangenter), har detta inte implementerats, och spelet ignorerar all tangentbordsinput.

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
Ett pusselspel där spelaren måste klicka och dra bitar med musen. Det finns inga tangentbordsalternativ för att välja eller flytta bitar. Tangentbordet kan inte användas alls i spelet.
```

::
**Resultat:** Användare som inte kan använda mus är helt utestängda. Detta bryter även mot 2.1.1 (Tangentbord) på nivå A, men det är också ett brott mot 2.5.6 eftersom tangentbordsmetoden är onödigt begränsad.

### Formulär som inaktiverar fält vid touch (Fel) ❌

Ett formulär fungerar bra med mus och tangentbord. Men om användaren börjar interagera med formuläret via pekskärm, inaktiverar ett dåligt skrivet skript vissa funktioner eller fält, i tron att "touch-användare inte behöver dessa".

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
Ett formulär har avancerade funktioner som nås via högerklick med mus. Ett skript detekterar touch-interaktion och döljer/inaktiverar dessa funktioner, utan att erbjuda något touch-vänligt alternativ (som långtryck för kontextmeny). Användaren kan inte längre komma åt funktionerna även om de ansluter en mus igen under samma session.
```

::
**Resultat:** Webbplatsen begränsar funktionaliteten baserat på den _senast använda_ indatametoden, och hindrar användaren från att använda andra tillgängliga metoder.

### Undantag: Bankapp med säkerhetsbegränsning (Tillåtet) ✅

En bankapplikation upptäcker tecken på att både ett skript (som simulerar tangentbord) och en mänsklig användare (med mus) försöker utföra transaktioner samtidigt från samma session, vilket kan tyda på ett säkerhetsintrång. Appen blockerar tillfälligt sessionen och kräver extra verifiering.

**Resultat:** Begränsningen är nödvändig för att säkerställa kontots säkerhet.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.5.6 Concurrent Input Mechanisms (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms.html)
- [Pointer Events (W3C Recommendation)](https://www.w3.org/TR/pointerevents3/) (API som hjälper till att hantera olika pekartyper mer enhetligt).
