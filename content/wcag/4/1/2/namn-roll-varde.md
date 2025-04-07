---
title: 4.1.2 Namn, roll, värde
description: Säkerställ att alla användargränssnittskomponenter har ett namn och en roll som kan bestämmas programmatiskt, och att tillstånd, egenskaper och värden som kan sättas av användaren också kan sättas programmatiskt, samt att meddelanden om ändringar finns tillgängliga för hjälpmedel.
level: A
slug: namn-roll-varde
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "namn",
    "roll",
    "värde",
    "name",
    "role",
    "value",
    "ARIA",
    "semantik",
    "komponenter",
    "hjälpmedel",
    "skärmläsare",
    "robust",
    "kompatibel",
  ]
canonical: https://t12t.dev/wcag/4/1/2/namn-roll-varde

principleNumber: 4
principleName: Robust
guidelineNumber: 1
guidelineName: Kompatibel
criterionNumber: 2

og:
  title: 4.1.2 Namn, roll, värde – WCAG
  description: Säkerställ att komponenters namn, roll och värde är tillgängliga för hjälpmedel.
  url: https://t12t.dev/wcag/4/1/2/namn-roll-varde
  type: article

datePublished: 2025-08-02
dateModified: 2024-05-18

sitemap:
  lastmod: 2024-05-18
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Namn, roll, värde

## Beskrivning

För alla **användargränssnittskomponenter** (inklusive, men inte begränsat till, formulärelement, länkar och komponenter genererade av skript), kan **namn** och **roll** bestämmas programmatiskt; **tillstånd, egenskaper och värden** som kan sättas av användaren kan också **sättas programmatiskt**; och meddelanden om **ändringar** i dessa finns tillgängliga för användaragenten, inklusive hjälpmedel.

Detta fundamentala kriterium (Nivå A) innebär att all information som behövs för att förstå och använda en interaktiv komponent måste vara tillgänglig för hjälpmedel som skärmläsare. Specifikt:

- **Namn (Name):** Vad komponenten heter eller vilken etikett den har (t.ex. "Förnamn", "Skicka", "Inställningar"). Detta görs oftast via elementets innehåll, ett [\<label\>]{.inline-code}-element, [aria-label]{.inline-code} eller [aria-labelledby]{.inline-code}.
- **Roll (Role):** Vilken typ av komponent det är (t.ex. knapp, länk, kryssruta, textfält). För standard HTML-element (som [\<button\>]{.inline-code}, [\<a\>]{.inline-code}, [\<input type="checkbox"\>]{.inline-code}) anges rollen automatiskt. För anpassade komponenter (byggda med t.ex. [\<div\>]{.inline-code}) måste rollen anges explicit med ARIA-attributet [role]{.inline-code} (t.ex. [role="button"]{.inline-code}).
- **Värde/Tillstånd/Egenskaper (Value/State/Properties):** Information om komponentens aktuella tillstånd eller värde (t.ex. om en kryssruta är ikryssad, värdet i ett textfält, om en flik är vald). För standardelement hanteras detta oftast automatiskt. För anpassade komponenter behöver man använda ARIA-attribut för tillstånd och egenskaper (t.ex. [aria-checked]{.inline-code}, [aria-expanded]{.inline-code}, [aria-valuenow]{.inline-code}). Användare (och hjälpmedel) måste kunna få reda på och, om relevant, ändra dessa värden.

## Varför detta behövs

Hjälpmedel, särskilt skärmläsare, förlitar sig helt på denna programmatiska information för att kunna presentera gränssnittet på ett begripligt sätt för användaren:

- **Identifiering:** Utan ett namn vet användaren inte vad en knapp eller ett fält är till för.
- **Förståelse:** Utan en roll vet användaren inte _hur_ de kan interagera med komponenten (är det en knapp man trycker på, ett fält man skriver i, en länk man följer?).
- **Status:** Utan information om tillstånd och värde vet användaren inte om en kryssruta är markerad, vilket alternativ som är valt i en lista, eller vad som står i ett textfält.
- **Interaktion:** Om värden inte kan sättas programmatiskt, kan hjälpmedel inte hjälpa användaren att fylla i formulär eller ändra inställningar.

Att uppfylla detta krav är grundläggande för att göra interaktivt innehåll tillgängligt och kompatibelt med hjälpmedel. Det säkerställer att den semantiska informationen finns där så att tekniken kan tolka och presentera den korrekt.

---

## Exempel

### Standard HTML-element (Rätt) ✅

Inbyggda HTML-element har oftast namn, roll och värde definierat automatiskt och korrekt, förutsatt att de används på rätt sätt (t.ex. med [\<label\>]{.inline-code}).

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<!-- Knapp: Namn="Spara", Roll=button, Värde/Tillstånd=inte relevant -->
<button>Spara</button>

<!-- Kryssruta: Namn="Acceptera villkor", Roll=checkbox, Tillstånd=checked/unchecked -->
<input type="checkbox" id="terms" checked />
<label for="terms">Acceptera villkor</label>

<!-- Textfält: Namn="E-post", Roll=textbox, Värde=användarens inmatning -->
<label for="email">E-post:</label>
<input type="email" id="email" value="test@example.com" />
```

::
**Resultat:** Hjälpmedel kan korrekt identifiera dessa element som en knapp, en ikryssad kryssruta med etiketten "Acceptera villkor", och ett textfält med etiketten "E-post" som innehåller "test@example.com".

### Anpassad komponent med ARIA (Rätt) ✅

En komponent byggd med [\<div\>]{.inline-code} görs tillgänglig med ARIA.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<!-- Anpassad knapp -->
<div role="button" tabindex="0" aria-label="Stäng fönster">X</div>

<!-- Anpassad switch (växlingsknapp) -->
<div
  role="switch"
  tabindex="0"
  aria-checked="true"
  aria-labelledby="switch-label"
>
  <span id="switch-label">Notifieringar På</span>
  <!-- Visuell representation av switchen -->
</div>
```

::
**Resultat:**

- Första diven identifieras som en [button]{.inline-code} (Roll) med namnet "Stäng fönster" (Namn via [aria-label]{.inline-code}).
- Andra diven identifieras som en [switch]{.inline-code} (Roll) med namnet "Notifieringar På" (Namn via [aria-labelledby]{.inline-code}) och tillståndet "checked" (ikryssad/på). [tabindex="0"]{.inline-code} gör dem fokuserbara.

### Komponent som saknar namn eller roll (Fel) ❌

Interaktiva element saknar nödvändig semantisk information.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<!-- Fel: En div som ser ut som en knapp, men saknar roll och namn -->
<div
  onclick="doSomething()"
  style="cursor: pointer; padding: 5px; border: 1px solid;"
>
  Klicka här
  <!-- Namn finns visuellt, men inte programmatiskt som en knappetikett -->
</div>

<!-- Fel: En span som används som kryssruta utan roll eller tillstånd -->
<span
  onclick="toggleCheck(this)"
  style="border: 1px solid; display: inline-block; width: 1em; height: 1em;"
>
  <!-- Visar en bock visuellt via CSS/JS, men ingen info för hjälpmedel -->
</span>
<label>Alternativ</label>
<!-- Label är inte kopplad till span -->
```

::
**Resultat:** Hjälpmedel vet inte att den första diven ska fungera som en knapp eller vad den heter (mer än vanlig text). Den andra span-taggen identifieras inte som en kryssruta och dess tillstånd (ikryssad/ej ikryssad) är okänt för hjälpmedel.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 4.1.2 Name, Role, Value (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) (Visar hur man bygger vanliga komponenter med korrekt ARIA).
- [Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/) (Specifikationen för hur namn beräknas).
