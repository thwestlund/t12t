---
title: 3.2.2 Vid inmatning
description: Säkerställ att ändring av inställningen för en komponent inte automatiskt orsakar en oväntad kontextändring.
level: A
slug: vid-inmatning
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "vid inmatning",
    "on input",
    "kontextändring",
    "change of context",
    "formulär",
    "checkbox",
    "radio button",
    "select",
    "input",
    "förutsägbar",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/3/2/2/vid-inmatning

principleNumber: 3
principleName: Begriplig
guidelineNumber: 2
guidelineName: Förutsägbar
criterionNumber: 2

og:
  title: 3.2.2 Vid inmatning – WCAG
  description: Säkerställ att inmatning eller val i en komponent inte orsakar oväntade kontextändringar.
  url: https://t12t.dev/wcag/3/2/2/vid-inmatning
  type: article

datePublished: 2025-07-11
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Vid inmatning

## Beskrivning

Att ändra inställningen för någon användargränssnittskomponent orsakar **inte automatiskt en förändring av kontexten**, såvida inte användaren har informerats om beteendet innan komponenten används.

Detta innebär att när en användare ändrar värdet i ett formulärelement (t.ex. väljer ett alternativ i en rullgardinsmeny, kryssar i en kryssruta, väljer en radioknapp, eller skriver text i ett textfält), ska detta _inte_ automatiskt leda till en större kontextändring (som att formuläret skickas, en ny sida laddas, eller fokus flyttas dramatiskt).

En sådan automatisk kontextändring är endast tillåten om användaren tydligt har **informerats i förväg** (t.ex. genom en text i anslutning till komponenten) om att en ändring kommer att utlösa en specifik händelse.

## Varför detta behövs

Automatiska kontextändringar vid inmatning kan vara mycket förvirrande och leda till fel:

- **Oväntade handlingar:** Användaren kan oavsiktligt skicka ett ofullständigt formulär, ladda en ny sida mitt i en uppgift, eller förlora sin plats på sidan bara genom att göra ett val eller skriva in data.
- **Svårt att korrigera misstag:** Om ett val i en rullgardinsmeny direkt laddar en ny sida, kan det vara svårt för användaren att gå tillbaka och ändra sitt val om de valde fel.
- **Problem för hjälpmedel:** Skärmläsare och andra hjälpmedel kan bli desorienterade av plötsliga, oväntade uppdateringar av sidan eller fokusflyttningar som triggas av enkel inmatning.
- **Förlust av kontroll:** Användaren känner att de inte har kontroll över interaktionen när systemet reagerar på oväntade sätt.

Interaktioner bör vara förutsägbara. Större förändringar ska normalt initieras av en explicit handling från användaren, som att klicka på en "Skicka"- eller "Nästa"-knapp.

---

## Exempel

### Formulär som kräver "Skicka"-knapp (Rätt) ✅

Ett formulär med olika fälttyper. Att ändra värden i fälten (välja från select, kryssa i checkbox, skriva i textfält) orsakar inga kontextändringar. Formuläret skickas först när användaren klickar på "Skicka"-knappen.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<form action="/process" method="post">
  <label for="country">Land:</label>
  <select id="country" name="country">
    <option value="se">Sverige</option>
    <option value="no">Norge</option>
  </select>

  <input type="checkbox" id="newsletter" name="newsletter" value="yes" />
  <label for="newsletter">Prenumerera på nyhetsbrev</label>

  <label for="comments">Kommentarer:</label>
  <textarea id="comments" name="comments"></textarea>

  <!-- Ingenting händer automatiskt när fälten ändras -->
  <button type="submit">Skicka formulär</button>
</form>
```

::
**Resultat:** Användaren kan fylla i formuläret i lugn och ro och skicka det när de är klara. Interaktionen är förutsägbar.

### Dynamisk uppdatering utan kontextändring (Rätt) ✅

Att välja ett alternativ i en rullgardinsmeny uppdaterar dynamiskt en annan del av _samma sida_ (t.ex. visar relevanta underalternativ) utan att ladda om hela sidan eller flytta fokus oväntat.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
1. Användaren väljer "Sverige" i en land-dropdown.
2. En annan dropdown för "Region/Län" uppdateras omedelbart på samma sida för att visa svenska län.
3. Fokus stannar kvar på land-dropdownen eller flyttas förutsägbart till region-dropdownen. Ingen helladdning av sidan sker.
```

::
**Resultat:** Även om sidan uppdateras dynamiskt, är det en förväntad och lokal förändring som inte desorienterar användaren. Detta räknas _inte_ som en kontextändring i WCAG:s mening.

### Rullgardinsmeny som laddar ny sida direkt (Fel) ❌

En rullgardinsmeny används för navigering, och så fort användaren väljer ett alternativ (via [onchange]{.inline-code}-händelsen) laddas en ny sida. Användaren informerades inte om detta i förväg.

::code-group{:labels='["HTML + JavaScript (Fel) ❌"]'}

```html showLineNumbers
<label for="nav-onchange">Välj kategori:</label>
<!-- Fel: onchange triggar sidladdning utan förvarning -->
<select id="nav-onchange" onchange="window.location.href=this.value;">
  <option value="">Välj...</option>
  <option value="/kategori/a">Kategori A</option>
  <option value="/kategori/b">Kategori B</option>
</select>
<!-- Saknar information om att val leder till omedelbar navigering -->
```

::
**Resultat:** Oväntad kontextändring. Användaren kan råka byta sida av misstag när de bara tänkte titta på alternativen.

### Kryssruta som skickar formulär direkt (Fel) ❌

Att klicka i en kryssruta "Jag godkänner villkoren" skickar automatiskt formuläret utan att användaren behöver klicka på en separat "Skicka"-knapp, och utan förvarning.

::code-group{:labels='["HTML + JavaScript (Fel) ❌"]'}

```html showLineNumbers
<!-- Fel: onchange på checkbox triggar formulärskickning -->
<input type="checkbox" id="terms" name="terms" onchange="this.form.submit()" />
<label for="terms">Jag godkänner villkoren</label>
<!-- Saknar information om att kryssrutan skickar formuläret -->
<button type="submit" style="display: none;">Skicka</button>
<!-- Knapp kanske finns men är dold? -->
```

::
**Resultat:** Oväntad kontextändring. Användaren kanske inte var redo att skicka formuläret än.

### Lösning för ovanstående fel (Rätt) ✅

Om en automatisk kontextändring _är_ önskvärd, informera användaren tydligt i direkt anslutning till komponenten.

::code-group{:labels='["HTML + JavaScript (Rätt - med förvarning) ✅"]'}

```html showLineNumbers
<label for="nav-onchange">Välj kategori (byte sker direkt):</label>
<!-- OK: Användaren informeras om beteendet -->
<select id="nav-onchange" onchange="window.location.href=this.value;">
  <option value="">Välj...</option>
  <option value="/kategori/a">Kategori A</option>
  <option value="/kategori/b">Kategori B</option>
</select>

<br /><br />

<!-- OK: Användaren informeras om beteendet -->
<input type="checkbox" id="terms" name="terms" onchange="this.form.submit()" />
<label for="terms"
  >Jag godkänner villkoren (formuläret skickas när du kryssar i)</label
>
```

::
**Resultat:** Även om kontextändringen sker automatiskt, är den nu förutsägbar eftersom användaren informerades om det i förväg.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.2.2 On Input (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html)
- [W3C Technique G80: Providing a submit button to initiate a change of context](https://www.w3.org/WAI/WCAG22/Techniques/general/G80)
- [W3C Technique G13: Describing what will happen before a change to a form control is made](https://www.w3.org/WAI/WCAG22/Techniques/general/G13)
- [Definition of Change of Context (WCAG Glossary)](https://www.w3.org/TR/WCAG22/#dfn-change-of-context)
