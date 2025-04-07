---
title: 3.3.3 Förslag vid fel
description: Om ett indatafel upptäcks automatiskt och förslag för korrigering är kända, ge förslag till användaren, om det inte äventyrar säkerhet eller syfte.
level: AA
slug: forslag-vid-fel
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "förslag vid fel",
    "error suggestion",
    "formulär",
    "validering",
    "felhantering",
    "korrigeringsförslag",
    "begriplig",
    "inmatningshjälp",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/3/3/3/forslag-vid-fel

principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningshjälp
criterionNumber: 3

og:
  title: 3.3.3 Förslag vid fel – WCAG
  description: Ge förslag på hur användaren kan korrigera indatafel när det är möjligt.
  url: https://t12t.dev/wcag/3/3/3/forslag-vid-fel
  type: article

datePublished: 2025-07-22
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Förslag vid fel

## Beskrivning

Om ett **indatafel upptäcks automatiskt** och **förslag för korrigering är kända**, då ska förslagen **presenteras för användaren**, såvida det inte skulle äventyra säkerheten eller syftet med innehållet.

Detta kriterium (Nivå AA) bygger vidare på 3.3.1 (Identifiering av indatafel). Förutom att identifiera _att_ ett fel har skett och _vad_ felet är, ska systemet också ge användaren **förslag på hur felet kan rättas till**, om sådana förslag är möjliga att ge.

Exempel på förslag:

- Om ett obligatoriskt fält är tomt: "Fältet [Fältnamn] måste fyllas i."
- Om ett datum har fel format: "Ange datumet som ÅÅÅÅ-MM-DD."
- Om ett användarnamn redan är upptaget: "Användarnamnet 'anna85' är upptaget. Förslag: 'anna85_1', 'anna_85_sthlm'."
- Om ett postnummer inte matchar den angivna orten: "Postnummer 123 45 verkar inte finnas i Stockholm. Kontrollera postnummer och ort."
- Om ett lösenord inte uppfyller kraven: "Lösenordet måste vara minst 8 tecken långt och innehålla minst en siffra."

Undantagen gäller främst säkerhetskänsliga situationer (t.ex. att inte ge förslag som avslöjar giltiga användarnamn eller lösenordsmönster vid en misslyckad inloggning) eller när syftet är att testa användarens kunskap (t.ex. i ett prov).

## Varför detta behövs

Att bara påpeka att något är fel är ofta inte tillräckligt. Förslag på korrigeringar hjälper användare att snabbare och enklare rätta till sina misstag:

- **Minskar gissningar och frustration:** Istället för att användaren ska försöka gissa vad som blev fel eller hur det ska åtgärdas, ger systemet direkt vägledning.
- **Sparar tid:** Användaren kan åtgärda felet direkt istället för att behöva prova sig fram.
- **Stöd för kognitiva funktionsnedsättningar:** Personer som har svårt med problemlösning eller att förstå abstrakta felmeddelanden får konkret hjälp.
- **Stöd för ovana användare:** Användare som är osäkra på formatkrav eller regler får tydliga instruktioner.

Förslag vid fel gör formulär och andra interaktiva processer betydligt mer användarvänliga och effektiva.

---

## Exempel

### Förslag på giltigt format (Rätt) ✅

Användaren skriver in ett telefonnummer med fel format. Felmeddelandet förklarar inte bara att formatet är fel, utan ger också ett exempel på korrekt format.

::code-group{:labels='["HTML + Felmeddelande (Rätt) ✅"]'}

```html {5} showLineNumbers
<div>
  <label for="phone">Telefonnummer:</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    aria-describedby="phone-error"
    aria-invalid="true"
  />
  <!-- Felmeddelande som visas vid fel -->
  <span id="phone-error" class="error-message">
    Ogiltigt format. Ange telefonnummer som 070-123 45 67.
  </span>
</div>
```

::
**Resultat:** Användaren förstår direkt hur telefonnumret ska skrivas in.

### Förslag på ledigt användarnamn (Rätt) ✅

Användaren försöker registrera ett användarnamn som redan är upptaget. Systemet föreslår några alternativa, lediga användarnamn.

::code-group{:labels='["Felmeddelande (Rätt) ✅"]'}

```text [Exempel på felmeddelande]
Användarnamnet "testare" är redan upptaget.
Förslag: testa_re, testare123, testare_gbg
```

::
**Resultat:** Användaren slipper hitta på helt nya namn och kan enkelt välja ett av förslagen.

### Förklaring av lösenordskrav (Rätt) ✅

Användaren väljer ett lösenord som är för kort eller för enkelt. Felmeddelandet specificerar exakt vilka krav som inte är uppfyllda.

::code-group{:labels='["Felmeddelande (Rätt) ✅"]'}

```text [Exempel på felmeddelande]
Lösenordet måste uppfylla följande krav:
- Minst 10 tecken långt (du angav 6)
- Innehålla minst en stor bokstav
- Innehålla minst en siffra (du angav inga siffror)
```

::
**Resultat:** Användaren vet exakt vad som behöver ändras för att lösenordet ska godkännas.

### Vag felidentifiering utan förslag (Fel) ❌

Ett fält för personnummer valideras, och om det är felaktigt visas bara meddelandet "Ogiltigt personnummer".

::code-group{:labels='["Felmeddelande (Fel) ❌"]'}

```text [Exempel på felmeddelande]
Ogiltigt personnummer.
```

::
**Resultat:** Användaren vet inte _varför_ det är ogiltigt. Ett bättre meddelande skulle kunna vara: "Ogiltigt personnummer. Kontrollera att du angett 10 eller 12 siffror i formatet ÅÅMMDDXXXX eller ÅÅÅÅMMDDXXXX." (Dock ska man vara försiktig med att ge för specifika förslag som kan hjälpa någon att gissa sig till giltiga nummer).

### Felaktig inloggning utan förslag (Undantag: Säkerhet) ✅

Vid försök att logga in med fel lösenord visas bara meddelandet "Felaktigt användarnamn eller lösenord". Systemet ger inga förslag som "Lösenordet verkar vara fel" eller "Användarnamnet finns inte", eftersom det skulle ge angripare värdefull information.

::code-group{:labels='["Felmeddelande (Tillåtet Undantag) ✅"]'}

```text [Exempel på felmeddelande]
Felaktigt användarnamn eller lösenord.
```

::
**Resultat:** Även om inget specifikt förslag ges, är detta tillåtet eftersom det skulle äventyra säkerheten att ge mer detaljerad information.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.3.3 Error Suggestion (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html)
- [Förstå WCAG SC 3.3.1 (Nivå A)](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html) (Det grundläggande kravet på att identifiera fel).
- [W3C Technique G177: Providing suggested correction text](https://www.w3.org/WAI/WCAG22/Techniques/general/G177)
- [W3C Technique G84: Providing a text description when the user provides information that is not in the list of allowed values](https://www.w3.org/WAI/WCAG22/Techniques/general/G84)
