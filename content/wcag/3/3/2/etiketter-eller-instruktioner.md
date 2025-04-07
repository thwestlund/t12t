---
title: 3.3.2 Etiketter eller instruktioner
description: Tillhandahåll etiketter (labels) eller instruktioner när innehållet kräver indata från användaren.
level: A
slug: etiketter-eller-instruktioner
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "etiketter",
    "labels",
    "instruktioner",
    "formulär",
    "indata",
    "input",
    "begriplig",
    "inmatningshjälp",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/3/3/2/etiketter-eller-instruktioner

principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningshjälp
criterionNumber: 2

og:
  title: 3.3.2 Etiketter eller instruktioner – WCAG
  description: Tillhandahåll etiketter eller instruktioner för fält som kräver användarindata.
  url: https://t12t.dev/wcag/3/3/2/etiketter-eller-instruktioner
  type: article

datePublished: 2025-07-21
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Etiketter eller instruktioner

## Beskrivning

Etiketter (labels) eller instruktioner tillhandahålls när innehållet kräver indata från användaren.

Detta innebär att varje fält där användaren ska skriva in information (som textfält, kryssrutor, radioknappar, rullgardinsmenyer) måste ha en tydlig **etikett** som beskriver vilken information som efterfrågas, eller **instruktioner** som förklarar hur fältet ska fyllas i.

- **Etiketter:** Är den vanligaste metoden. En synlig text (oftast med HTML-elementet [\<label\>]{.inline-code}) som är direkt kopplad till formulärfältet.
- **Instruktioner:** Kan användas som komplement eller ibland istället för en etikett om det är uppenbart vad fältet avser men formatet behöver förklaras (t.ex. "Ange datum som ÅÅÅÅ-MM-DD"). Instruktionerna ska finnas i nära anslutning till fältet.

## Varför detta behövs

Utan tydliga etiketter eller instruktioner vet användaren inte vad de ska fylla i:

- **Skärmläsaranvändare:** Är helt beroende av att formulärfält har programmatiskt kopplade etiketter ([\<label\>]{.inline-code} med [for]{.inline-code}-attribut). Skärmläsaren läser upp etiketten när fältet får fokus. Utan etikett är fältet obegripligt.
- **Personer med kognitiva funktionsnedsättningar:** Behöver tydliga ledtrådar för att förstå vad som förväntas i varje fält. Oklara eller saknade etiketter ökar risken för fel och frustration.
- **Alla användare:** Tydliga etiketter minskar risken för missförstånd och felinmatningar för alla. Det gör formuläret snabbare och enklare att använda.

Att ge varje inmatningsfält en tydlig beskrivning är grundläggande för att formulär ska vara användbara och tillgängliga.

---

## Exempel

### Korrekt kopplad [\<label\>]{.inline.code} (Rätt) ✅

Den vanligaste och bästa metoden är att använda [\<label\>]{.inline-code}-elementet med ett [for]{.inline-code}-attribut som matchar [id]{.inline-code}-attributet på inmatningsfältet.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {2} showLineNumbers
<div>
  <label for="username">Användarnamn:</label>
  <input type="text" id="username" name="user_name" />
</div>

<div>
  <label for="password">Lösenord:</label>
  <input type="password" id="password" name="user_pass" />
</div>
```

::
**Resultat:** Etiketten är synlig och programmatiskt kopplad. Skärmläsare läser upp "Användarnamn" när textfältet får fokus. Klickar man på etiketten flyttas fokus till fältet.

### [\<label\>]{.inline.code} som omsluter fältet (Implicit Label) (Rätt) ✅

Man kan också omsluta både etikett-texten och inmatningsfältet med ett [\<label\>]{.inline-code}-element. Kopplingen blir då implicit.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {2,5} showLineNumbers
<div>
  <label>
    Förnamn:
    <input type="text" name="first_name" />
  </label>
</div>
<div>
  <label>
    <input type="checkbox" name="subscribe" value="yes" />
    Jag vill prenumerera
  </label>
</div>
```

::
**Resultat:** Fungerar också för de flesta hjälpmedel, även om den explicita kopplingen med [for]{.inline-code}/[id]{.inline-code} ofta anses vara mer robust.

### Instruktioner för specifikt format (Rätt) ✅

Om syftet med fältet är uppenbart (t.ex. från en närliggande rubrik) men formatet behöver förklaras, kan instruktioner användas. Det är dock oftast bäst att _även_ ha en [\<label\>]{.inline-code}.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {3-4} showLineNumbers
<fieldset>
  <legend>Födelsedatum</legend>
  <label for="birthdate">Datum:</label>
  <!-- Label finns -->
  <input type="text" id="birthdate" name="bday" />
  <span class="instructions">Ange datum som ÅÅÅÅ-MM-DD.</span>
  <!-- Instruktion visas nära fältet -->
</fieldset>
```

::
**Resultat:** Användaren får både veta vad fältet gäller (via label/legend) och hur det ska fyllas i (via instruktionen). Instruktionen bör också vara programmatiskt kopplad om möjligt, t.ex. med [aria-describedby]{.inline-code}.

### Saknad etikett (Fel) ❌

Ett inmatningsfält saknar helt en synlig och programmatiskt kopplad etikett. Att bara använda [placeholder]{.inline-code} räcker inte.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<!-- Fel: Saknar <label>. Placeholder är inte en etikett. -->
<input
  type="search"
  id="search"
  name="query"
  placeholder="Sök på webbplatsen..."
/>
```

::
**Resultat:** Skärmläsaranvändare får ingen information om vad fältet är till för (placeholder läses inte alltid upp eller försvinner vid inmatning). Även seende användare kan bli osäkra när placeholder-texten försvinner.

### Oklar etikett (Fel) ❌

Etiketten är för vag eller generell för att man ska förstå vad som ska matas in.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<!-- Fel: Etiketten "Text" är för otydlig. Vad ska skrivas här? -->
<label for="freetext">Text:</label>
<textarea id="freetext" name="user_text"></textarea>
```

::
**Resultat:** Användaren förstår inte syftet med fältet. Etiketten bör vara mer beskrivande, t.ex. "Ditt meddelande:", "Beskriv problemet:", etc.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.3.2 Labels or Instructions (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [MDN Web Docs: The Label element (\<label\>)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- [W3C Technique H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG22/Techniques/html/H44)
- [W3C Technique G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG22/Techniques/general/G131)
- [WebAIM: Creating Accessible Forms - Form Labels](https://webaim.org/techniques/forms/labels)
