---
title: 3.2.5 Ändring på begäran
description: Säkerställ att ändringar av kontext endast initieras på användarens begäran, eller att en mekanism finns för att stänga av sådana ändringar.
level: AAA
slug: andring-pa-begaran
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "ändring på begäran",
    "change on request",
    "kontextändring",
    "change of context",
    "automatisk uppdatering",
    "omdirigering",
    "användarkontroll",
    "förutsägbar",
    "operabel",
    "kognitiv",
  ]
canonical: https://t12t.dev/wcag/3/2/5/andring-pa-begaran

principleNumber: 3
principleName: Begriplig
guidelineNumber: 2
guidelineName: Förutsägbar
criterionNumber: 5

og:
  title: 3.2.5 Ändring på begäran – WCAG
  description: Initiera endast kontextändringar på användarens begäran eller erbjud ett sätt att stänga av dem.
  url: https://t12t.dev/wcag/3/2/5/andring-pa-begaran
  type: article

datePublished: 2025-07-14
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Ändring på begäran

## Beskrivning

Förändringar av kontext initieras **endast på användarens begäran**, eller så finns en **mekanism tillgänglig för att stänga av** sådana ändringar.

Detta kriterium (Nivå AAA) är det striktaste gällande kontextändringar och bygger vidare på 3.2.1 (Vid fokus) och 3.2.2 (Vid inmatning) (båda Nivå A). Det kräver att större förändringar i sidans innehåll eller beteende (som att ladda en ny sida, flytta fokus avsevärt, eller byta ut stora delar av innehållet) i princip **aldrig** ska ske automatiskt utan användarens direkta medverkan (t.ex. ett klick på en knapp eller länk).

Det enda undantaget är om det finns en inställning eller kontroll som låter användaren stänga av det automatiska beteendet.

## Varför detta behövs

Att kräva att användaren explicit initierar alla kontextändringar ger maximal kontroll och förutsägbarhet, vilket är avgörande för:

- **Personer med kognitiva funktionsnedsättningar:** Eliminerar helt risken för förvirring orsakad av oväntade uppdateringar, omdirigeringar eller andra automatiska förändringar.
- **Skärmläsaranvändare:** Säkerställer att de alltid har full kontroll över när och hur sidans innehåll eller deras position på sidan ändras. Detta förhindrar desorientering.
- **Användare med begränsad uppmärksamhet:** Förhindrar att automatiska händelser bryter koncentrationen.
- **Alla användare:** Ger en lugnare och mer kontrollerad användarupplevelse.

På AAA-nivå strävar man efter att ta bort alla potentiella hinder, och oväntade kontextändringar är ett signifikant sådant hinder för vissa användare.

---

## Exempel

### Manuell siduppdatering (Rätt) ✅

En nyhetssida uppdaterar inte automatiskt innehållet med nya rubriker. Istället finns en knapp "Ladda senaste nyheterna" som användaren kan klicka på när de vill se uppdateringar.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
En live-blogg visar en diskret text "Nya inlägg finns tillgängliga" och en knapp "Uppdatera flödet". Innehållet ändras inte förrän användaren klickar på knappen.
```

::
**Resultat:** Användaren blir inte avbruten i sin läsning av automatiska uppdateringar utan väljer själv när innehållet ska uppdateras.

### Formulär skickas endast via knapp (Rätt) ✅

Som krävs redan på Nivå A (3.2.2), skickas formulär endast när användaren aktivt klickar på en "Skicka"-knapp, inte automatiskt vid ändring av ett fält. Detta uppfyller även AAA.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<form action="/submit" method="post">
  <!-- Formulärfält -->
  <button type="submit">Skicka in anmälan</button>
  <!-- Ingen automatisk submit via onchange etc. -->
</form>
```

::
**Resultat:** Kontextändringen (att skicka formuläret och eventuellt ladda en ny sida) sker endast på användarens direkta begäran.

### Inställning för att stänga av automatisk omdirigering (Rätt) ✅

En webbplats har en funktion som automatiskt omdirigerar användaren från en gammal sida till en ny efter 5 sekunder. Det finns dock en inställning i användarens profil eller en kryssruta på sidan som låter dem stänga av automatiska omdirigeringar.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
På en sida som snart ska tas bort visas meddelandet: "Denna sida har flyttats. Du kommer att omdirigeras till den nya sidan om 5 sekunder." Bredvid finns en kryssruta: "[] Stäng av automatisk omdirigering på denna webbplats". Om rutan kryssas i stoppas nedräkningen och framtida automatiska omdirigeringar.
```

::
**Resultat:** Även om det finns en automatisk kontextändring, finns en mekanism för att stänga av den, vilket uppfyller AAA-kravet.

### Automatisk omdirigering utan kontroll (Fel) ❌

En sida laddas och efter 3 sekunder omdirigeras användaren automatiskt till en annan sida (t.ex. en annonssida eller en uppdaterad version) utan någon varning eller möjlighet att stoppa det.

::code-group{:labels='["HTML + JavaScript (Fel - AAA) ❌"]'}

```html showLineNumbers
<head>
  <title>Gammal sida</title>
  <!-- Fel: Meta refresh omdirigerar automatiskt utan kontroll -->
  <meta http-equiv="refresh" content="3; url=https://example.com/ny-sida" />
</head>
<body>
  <p>Denna sida flyttas snart...</p>
  <!-- Ingen mekanism för att stoppa omdirigeringen -->
</body>
```

```javascript showLineNumbers
// Fel: JavaScript som omdirigerar automatiskt efter en tid
window.setTimeout(() => {
  // Ingen kontroll för användaren att stoppa detta
  window.location.href = "https://example.com/annan-sida";
}, 5000); // Omdirigerar efter 5 sekunder
```

::
**Resultat:** Användaren tappar kontrollen och kan bli förvirrad av den plötsliga, oväntade sidladdningen.

### Automatisk uppdatering av innehåll (Fel) ❌

En resultattavla för sport uppdateras automatiskt var 10:e sekund genom att hela sidan laddas om, eller genom att stora delar av innehållet byts ut dynamiskt, utan att användaren kan pausa detta.

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
En sida visar live-resultat från en fotbollsmatch. Hela resultatsektionen blinkar till och uppdateras var 15:e sekund. Det finns ingen "Pausa uppdateringar"-knapp.
```

::
**Resultat:** Den automatiska uppdateringen kan vara störande och svår att följa för vissa användare. Eftersom det inte finns någon mekanism för att stänga av den, uppfylls inte AAA-kravet.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.2.5 Change on Request (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html)
- [Förstå WCAG SC 3.2.1 (Nivå A)](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html) (Om kontextändring vid fokus).
- [Förstå WCAG SC 3.2.2 (Nivå A)](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html) (Om kontextändring vid inmatning).
- [W3C Technique G76: Providing a mechanism to request an update of the content instead of updating automatically](https://www.w3.org/WAI/WCAG22/Techniques/general/G76)
- [W3C Technique G110: Using contextual information to select from multiple potential link targets](https://www.w3.org/WAI/WCAG22/Techniques/general/G110) (Exempel på när _inte_ ändra kontext automatiskt).
