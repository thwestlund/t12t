---
title: Kontrast
description: Den visuella presentationen av text och text i form av bild har ett kontrastvärde på minst 7:1.
level: AAA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 6
---

# Framgångskriterium 1.4.6 Kontrast

## Beskrivning

Den visuella presentationen av text och text i form av bild har ett kontrastvärde på minst 7:1, förutom i följande fall:

- **Stor text:** Stor text och text i form av bild av stor text har ett kontrastvärde på minst 4,5:1;
- **Oväsentlig:** Text eller text i form av bild som är en del av en inaktiv komponent i användargränssnittet, som är rent dekorativ, som inte är synlig för någon, eller som är en del av en bild som innehåller annat visuellt innehåll med väsentlig information, har inga kontrastkrav.
- **Logotyper:** Text som är en del av en logotyp eller ett varumärkesnamn har inga minimikrav för kontrastvärde.

## Varför detta behövs

Personer med måttlig till svår synnedsättning, åldersrelaterade synnedgångar eller tillfälligt nedsatt syn på grund av omständigheter som bländande ljus kan ha svårt att läsa text med låg kontrast.

Genom att förbättra kontrasten mellan text och bakgrund utöver standardkraven (1.4.3 Kontrast minimum) kan fler personer läsa texten utan hjälpmedel, även under ogynnsamma förhållanden som dålig belysning eller reflektioner.

Den förbättrade kontrasten på 7:1 för normaltext och 4,5:1 för stor text representerar en högre nivå av tillgänglighet än minimikravet på 4,5:1 respektive 3:1 i nivå AA.

## Exempel

### Exempel på bra implementering

#### Text med hög kontrast

```html
<style>
  .high-contrast-text {
    color: #000000; /* Svart text */
    background-color: #ffffff; /* Vit bakgrund */
    /* Kontrastvärde: 21:1 */
  }

  .high-contrast-large-text {
    color: #1a5fb4; /* Mörkblå text */
    background-color: #ffffff; /* Vit bakgrund */
    font-size: 24px;
    font-weight: bold;
    /* Kontrastvärde: 5.5:1, vilket överstiger kravet på 4.5:1 för stor text */
  }
</style>

<p class="high-contrast-text">
  Denna text har mycket hög kontrast och är lätt att läsa för de flesta
  användare.
</p>

<h2 class="high-contrast-large-text">
  Denna rubrik använder större text och har tillräcklig kontrast
</h2>
```

#### Länkar med tillräcklig kontrast mot omgivande text och bakgrund

```html
<style>
  body {
    color: #000000; /* Svart text */
    background-color: #ffffff; /* Vit bakgrund */
  }

  a {
    color: #0000b3; /* Mörkblå länkfärg */
    /* Kontrastvärde mot vit bakgrund: 10:1 */
  }
</style>

<p>
  Denna text innehåller en <a href="/exempel">länk</a> som har tillräcklig
  kontrast både mot bakgrunden och den omgivande texten.
</p>
```

### Exempel på bristande implementering

#### Text med otillräcklig kontrast för AAA-nivå

```html
<style>
  .insufficient-contrast {
    color: #767676; /* Grå text */
    background-color: #ffffff; /* Vit bakgrund */
    /* Kontrastvärde: 4.6:1 - tillräckligt för AA men inte för AAA */
  }

  .insufficient-contrast-large {
    color: #6c6c6c; /* Ljusgrå text */
    background-color: #f0f0f0; /* Ljusgrå bakgrund */
    font-size: 24px;
    /* Kontrastvärde: 3.2:1 - tillräckligt för stor text på AA-nivå men inte på AAA-nivå */
  }
</style>

<p class="insufficient-contrast">
  Denna text har tillräcklig kontrast för AA-nivå men inte för den förbättrade
  AAA-nivån.
</p>

<h2 class="insufficient-contrast-large">
  Denna rubrik har för låg kontrast för AAA-nivån
</h2>
```

#### Länkar med otillräcklig kontrast för AAA-nivå

```html
<style>
  body {
    color: #000000; /* Svart text */
    background-color: #ffffff; /* Vit bakgrund */
  }

  a {
    color: #6490bb; /* Ljusblå länkfärg */
    /* Kontrastvärde mot vit bakgrund: 3.1:1 - tillräckligt för AA men inte för AAA */
  }
</style>

<p>
  Denna text innehåller en <a href="/exempel">länk</a> som har tillräcklig
  kontrast för AA-nivå men inte för den förbättrade AAA-nivån.
</p>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.6 Contrast (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html)
- [Webbriktlinjer - Se till att text och bakgrund har tillräcklig kontrast](https://www.digg.se/kunskap-och-stod/digital-tillganglighet/webbriktlinjer-for-tillganglighet/riktlinjer/se-till-att-text-och-bakgrund-har-tillracklig-kontrast)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio Calculator](https://contrast-ratio.com/)
