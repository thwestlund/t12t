---
title: 3.2.1 Vid fokus
description: Säkerställ att en komponent inte automatiskt initierar en oväntad kontextändring bara för att den får fokus.
level: A
slug: vid-fokus
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "vid fokus",
    "on focus",
    "kontextändring",
    "change of context",
    "tangentbord",
    "navigation",
    "fokus",
    "förutsägbar",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/3/2/1/vid-fokus

principleNumber: 3
principleName: Begriplig
guidelineNumber: 2
guidelineName: Förutsägbar
criterionNumber: 1

og:
  title: 3.2.1 Vid fokus – WCAG
  description: Säkerställ att fokus inte orsakar oväntade kontextändringar.
  url: https://t12t.dev/wcag/3/2/1/vid-fokus
  type: article

datePublished: 2025-07-10
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Vid fokus

## Beskrivning

När någon användargränssnittskomponent får **fokus**, initierar den inte automatiskt en **förändring av kontexten**.

Detta innebär att bara för att en användare navigerar till ett element med tangentbordet (t.ex. med [Tab]{.inline-code}) eller på annat sätt sätter fokus på det, ska inte detta i sig leda till en större förändring, som att:

- En ny sida laddas.
- Fokus flyttas automatiskt till en helt annan komponent.
- Ett formulär skickas automatiskt.
- Ett nytt fönster öppnas.

En **kontextändring** definieras som en större förändring i sidans innehåll som, om den sker oväntat, kan desorientera användare som inte kan se hela sidan samtidigt. Att t.ex. öppna en undermeny när huvudmenyalternativet får fokus räknas _inte_ som en kontextändring enligt detta kriterium, eftersom det är en förväntad och lokal förändring.

## Varför detta behövs

Om fokus på ett element utlöser en oväntad kontextändring blir det mycket svårt att navigera och använda sidan:

- **Tangentbordsanvändare (inkl. skärmläsaranvändare):** När de tabbar till ett element för att se vad det är eller för att sedan aktivera det, kan de plötsligt hamna på en ny sida eller få fokus flyttat utan att de förstod vad som hände eller varför. De förlorar kontrollen över navigationen.
- **Personer med kognitiva funktionsnedsättningar:** Oväntade förändringar kan vara mycket förvirrande och göra det svårt att förstå flödet och slutföra uppgifter.
- **Alla användare:** Även musanvändare kan råka sätta fokus på ett element (t.ex. genom att klicka i närheten) och bli överraskade av en plötslig, oönskad händelse.

Funktioner ska aktiveras genom en medveten handling från användaren (som att trycka [Enter]{.inline-code}, [Space]{.inline-code}, eller klicka), inte bara genom att elementet får fokus.

---

## Exempel

### Rullgardinsmeny (Dropdown) som kräver aktivering (Rätt) ✅

En rullgardinsmeny ([\<select\>]{.inline-code}) används för att navigera till olika sidor. Användaren kan använda piltangenterna för att välja ett alternativ i listan när menyn har fokus. Sidan byts först när användaren trycker [Enter]{.inline-code} eller när de klickar på en separat "Gå"-knapp.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<label for="nav-select">Gå till sida:</label>
<select id="nav-select">
  <option value="/sida1">Sida 1</option>
  <option value="/sida2">Sida 2</option>
  <option value="/sida3">Sida 3</option>
</select>
<button onclick="goToSelectedPage()">Gå</button>

<script>
  function goToSelectedPage() {
    const select = document.getElementById("nav-select");
    const url = select.value;
    if (url) {
      window.location.href = url;
    }
  }
</script>
```

::
**Resultat:** Att bara tabba till eller använda piltangenterna i [\<select\>]{.inline-code}-listan orsakar ingen kontextändring. Användaren måste aktivt klicka på "Gå" eller aktivera valet på annat sätt.

### Radioknappar som inte ändrar kontext (Rätt) ✅

Ett formulär använder radioknappar. Att välja ett alternativ genom att klicka eller använda piltangenter/mellanslag ändrar bara det valda alternativet, det skickar inte formuläret eller laddar om sidan.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<fieldset>
  <legend>Välj leveransmetod:</legend>
  <input type="radio" id="post" name="delivery" value="post" />
  <label for="post">Post</label><br />
  <input type="radio" id="store" name="delivery" value="store" />
  <label for="store">Hämta i butik</label><br />
</fieldset>
<button type="submit">Fortsätt</button>
```

::
**Resultat:** Att flytta fokus mellan radioknapparna eller välja en orsakar ingen oväntad kontextändring.

### Rullgardinsmeny som navigerar vid fokus/ändring (Fel) ❌

En rullgardinsmeny använder JavaScript för att automatiskt ladda en ny sida så fort ett alternativ väljs med tangentbordet (vilket ofta sätter fokus och ändrar värdet samtidigt) eller direkt när det får fokus på vissa sätt.

::code-group{:labels='["HTML + JavaScript (Fel) ❌"]'}

```html showLineNumbers
<label for="nav-onchange">Snabbnavigering:</label>
<!-- Fel: Använder onchange (eller ibland onfocus) för att byta sida direkt -->
<select id="nav-onchange" onchange="window.location.href=this.value;">
  <option value="">Välj...</option>
  <option value="/page-a">Sida A</option>
  <option value="/page-b">Sida B</option>
</select>
```

::
**Resultat:** En tangentbordsanvändare som tabbar till menyn och sedan använder piltangenterna för att se alternativen riskerar att oavsiktligt ladda en ny sida direkt när de väljer ett alternativ, utan att ha bekräftat sitt val.

### Fokus på ett fält laddar hjälptext som flyttar fokus (Fel) ❌

När ett textfält får fokus, visas en hjälp-pop-up bredvid, och skriptet flyttar automatiskt fokus från textfältet till pop-upen.

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
1. Användaren tabbar till fältet "Personnummer".
2. En informationsruta om format visas bredvid.
3. Fokus flyttas omedelbart till informationsrutan.
4. Användaren måste tabba tillbaka till personnummerfältet för att kunna skriva.
```

::
**Resultat:** Fokus flyttas oväntat bort från det element användaren avsåg att interagera med, vilket är en oönskad kontextändring.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.2.1 On Focus (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html)
- [W3C Technique G107: Using "activate" rather than "focus" as a trigger for changes of context](https://www.w3.org/WAI/WCAG22/Techniques/general/G107)
- [Definition of Change of Context (WCAG Glossary)](https://www.w3.org/TR/WCAG22/#dfn-change-of-context)
