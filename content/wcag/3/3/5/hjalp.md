---
title: 3.3.5 Hjälp
description: Tillhandahåll kontextkänslig hjälp för funktioner och information på webbplatsen.
level: AAA
slug: hjalp
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "hjälp",
    "help",
    "kontextkänslig hjälp",
    "context-sensitive help",
    "instruktioner",
    "support",
    "begriplig",
    "inmatningshjälp",
    "operabel",
    "kognitiv",
  ]
canonical: https://t12t.dev/wcag/3/3/5/hjalp

principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningshjälp
criterionNumber: 5

og:
  title: 3.3.5 Hjälp – WCAG
  description: Tillhandahåll kontextkänslig hjälp.
  url: https://t12t.dev/wcag/3/3/5/hjalp
  type: article

datePublished: 2025-07-24
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Hjälp

## Beskrivning

**Kontextkänslig hjälp** finns tillgänglig.

Detta kriterium (Nivå AAA) innebär att användaren ska kunna få hjälp och instruktioner som är specifika för den uppgift eller funktion de just nu arbetar med. Hjälpen ska vara lättillgänglig från den plats där den behövs.

Metoder för att erbjuda kontextkänslig hjälp inkluderar:

- **Direkta instruktioner:** Tydliga instruktioner direkt vid formulärfält eller komplexa komponenter (se även 3.3.2 Etiketter eller instruktioner).
- **Hjälp-ikoner/länkar:** En ikon (t.ex. ett frågetecken) eller en "Hjälp"-länk bredvid ett fält eller en sektion, som vid aktivering visar relevant information (t.ex. i en pop-up, ett expanderbart avsnitt, eller genom att länka till ett specifikt avsnitt i en hjälpguide).
- **Automatiska förslag:** När användaren börjar interagera med en komplex funktion, kan systemet erbjuda relevanta tips eller länkar till hjälp.
- **Tillgång till mänsklig hjälp:** Information om hur man kontaktar support (telefon, e-post, chatt) direkt från den aktuella kontexten kan också räknas som kontextkänslig hjälp.
- **Guidad genomgång (Tutorial):** För komplexa processer kan en steg-för-steg-guide erbjudas.

Målet är att användaren inte ska behöva lämna sin nuvarande uppgift för att leta efter hjälp i en generell hjälpsektion, utan få stödet där och då det behövs.

## Varför detta behövs

Många användare kan behöva extra stöd för att förstå och använda webbfunktioner, särskilt komplexa sådana:

- **Personer med kognitiva funktionsnedsättningar eller inlärningssvårigheter:** Har stor nytta av tydliga, kontextuella instruktioner och förklaringar för att kunna slutföra uppgifter.
- **Ovana användare:** Personer som inte är tekniskt vana eller som använder en specifik funktion för första gången behöver ofta vägledning.
- **Personer med nedsatt minne:** Kan behöva påminnelser om hur en funktion fungerar eller vad som krävs i ett visst fält.
- **Alla användare:** Även erfarna användare kan stöta på oklarheter eller komplexa funktioner där kontextkänslig hjälp sparar tid och minskar frustration.

Att erbjuda hjälp direkt i sammanhanget gör webbplatsen mer användarvänlig och minskar risken för att användare ger upp eller gör fel.

---

## Exempel

### Hjälpikon vid formulärfält (Rätt) ✅

Bredvid ett komplicerat formulärfält (t.ex. "Ange referenskod") finns en liten frågetecken-ikon. När användaren klickar på ikonen (eller aktiverar den med tangentbord) visas en liten textruta som förklarar vad referenskoden är och var man hittar den.

::code-group{:labels='["HTML + Koncept (Rätt) ✅"]'}

```html {9-14} showLineNumbers
<div>
  <label for="refCode">Referenskod:</label>
  <input
    type="text"
    id="refCode"
    name="reference"
    aria-describedby="refCodeHelp"
  />
  <button
    aria-label="Hjälp för Referenskod"
    onclick="toggleHelp('refCodeHelp')"
  >
    ?
  </button>
  <span id="refCodeHelp" class="help-text" style="display: none;">
    Referenskoden hittar du på din faktura, längst upp till höger. Den består av
    8 siffror.
  </span>
</div>

<script>
  function toggleHelp(helpId) {
    const helpElement = document.getElementById(helpId);
    if (helpElement) {
      helpElement.style.display =
        helpElement.style.display === "none" ? "block" : "none";
    }
  }
</script>
```

::
**Resultat:** Användaren kan få en förklaring till just det fältet utan att lämna formuläret. [aria-describedby]{.inline-code} kan också användas för att koppla hjälpen till fältet för skärmläsare även när den är synlig.

### Instruktioner direkt i formuläret (Rätt) ✅

Under ett lösenordsfält visas direkt text som förklarar kraven för lösenordet.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {9-12} showLineNumbers
<div>
  <label for="newPassword">Nytt lösenord:</label>
  <input
    type="password"
    id="newPassword"
    name="new_pass"
    aria-describedby="passwordHelp"
  />
  <p id="passwordHelp" class="instructions">
    Minst 12 tecken. Måste innehålla stora och små bokstäver, siffror och
    specialtecken.
  </p>
</div>
```

::
**Resultat:** Användaren ser kraven direkt och behöver inte gissa eller leta efter dem.

### Länk till relevant hjälpsektion (Rätt) ✅

I ett avancerat sökformulär finns en länk "Hur fungerar avancerad sökning?" som leder direkt till den specifika sidan eller avsnittet i hjälpguiden som förklarar just de avancerade sökfunktionerna.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {5} showLineNumbers
<form action="/advanced-search" method="get">
  <h2>Avancerad sökning</h2>
  <!-- Sökfält -->
  <p>
    <a href="/help#advanced-search-tips">Hur fungerar avancerad sökning?</a>
  </p>
  <button type="submit">Sök</button>
</form>
```

::
**Resultat:** Användaren kan lätt få detaljerad hjälp om den specifika funktionen de använder.

### Ingen kontextkänslig hjälp (Fel) ❌

En webbplats har ett komplext flerstegsformulär. Det finns en generell "Hjälp"-länk i sidfoten som leder till en lång sida med FAQ, men ingen specifik hjälp eller instruktion erbjuds vid de enskilda fälten eller stegen i formuläret.

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
Ett formulär för att ansöka om ett lån innehåller många fält med facktermer (t.ex. "Amorteringskrav", "Belåningsgrad"). Det finns inga förklaringar vid fälten. Enda hjälpen är en generell FAQ-länk i sidfoten som täcker hela webbplatsen.
```

::
**Resultat:** Användaren som fastnar på ett specifikt fält måste lämna formuläret och leta igenom den generella hjälpsektionen, vilket är ineffektivt och kan leda till att de ger upp.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.3.5 Help (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/help.html)
- [W3C Technique G71: Providing a help link on every Web page](https://www.w3.org/WAI/WCAG22/Techniques/general/G71) (Generell hjälp)
- [W3C Technique G193: Providing help by an action that is triggered by a user interface control](https://www.w3.org/WAI/WCAG22/Techniques/general/G193) (Kontextkänslig hjälp via kontroll)
- [W3C Technique G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input](https://www.w3.org/WAI/WCAG22/Techniques/general/G184) (Instruktioner)
