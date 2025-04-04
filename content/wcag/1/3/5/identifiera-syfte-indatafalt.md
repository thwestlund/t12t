---
title: 1.3.5 Identifiera syftet med indatafält
description: Ange programmeringsmässigt syftet för vanliga indatafält som samlar in information om användaren, så att hjälpmedel och webbläsare kan använda autofyll.
level: AA
slug: identifiera-syfte-indatafalt
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "formulär",
    "indatafält",
    "input",
    "autocomplete",
    "autofyll",
    "personuppgifter",
    "anpassningsbar",
    "kognitiv",
  ]
canonical: https://t12t.dev/wcag/1/3/5/identifiera-syfte-indatafalt

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 3
guidelineName: Anpassningsbar
criterionNumber: 5

og:
  title: 1.3.5 Identifiera syftet med indatafält – WCAG
  description: Ange programmeringsmässigt syftet för vanliga indatafält så att hjälpmedel och webbläsare kan använda autofyll.
  url: https://t12t.dev/wcag/1/3/5/identifiera-syfte-indatafalt
  type: article

datePublished: 2025-04-02

dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Identifiera syftet med indatafält

## Beskrivning

Syftet med varje indatafält som samlar in information om användaren kan fastställas programmeringsmässigt när:

- Indatafältet tjänar ett syfte som identifieras i avsnittet [Input Purposes for User Interface Components](https://www.w3.org/TR/WCAG21/#input-purposes) (Indatafältssyften för användargränssnittskomponenter); och
- Innehållet implementeras med hjälp av tekniker som har stöd för att identifiera det förväntade syftet för formulärindata.

Detta innebär i praktiken att för vanliga formulärfält som frågar efter personuppgifter (t.ex. namn, adress, e-post, telefonnummer, kreditkortsinformation) ska du använda HTML-attributet [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) med ett passande värde från den standardiserade listan.

## Varför detta behövs

- **Autofyll:** Webbläsare och lösenordshanterare kan automatiskt fylla i formulärfält om de vet vad fältet är avsett för (t.ex. "Förnamn", "Postnummer"). Detta sparar tid och minskar ansträngningen för alla användare.
- **Hjälpmedel och kognitivt stöd:**
  - Vissa hjälpmedel kan visa igenkännbara ikoner (t.ex. en brevsymbol för e-postfält) bredvid fälten om syftet är korrekt angivet. Detta hjälper användare med kognitiva funktionsnedsättningar eller lässvårigheter att förstå vad som efterfrågas.
  - Det underlättar för användare som har svårt med minne eller att skriva, då de inte behöver mata in samma information om och om igen.
- **Minskade fel:** Autofyll minskar risken för stavfel och felaktigt formaterad information.

Genom att använda [autocomplete]{.inline-code} gör du formulär enklare och snabbare att fylla i, och mer tillgängliga för en bredare grupp användare.

---

## Exempel

### Formulär med [autocomplete]{.inline-code} (Rätt) ✅

Här har varje relevant fält fått ett [autocomplete]{.inline-code}-attribut med ett standardiserat värde. Webbläsare och hjälpmedel kan nu identifiera syftet och erbjuda autofyll eller andra anpassningar.

::code-group{:labels='["HTML (med autocomplete) ✅"]'}

```html {4,8,12,16} showLineNumbers
<form action="/submit" method="post">
  <div>
    <label for="fname">Förnamn:</label>
    <input type="text" id="fname" name="first_name" autocomplete="given-name" />
  </div>
  <div>
    <label for="lname">Efternamn:</label>
    <input type="text" id="lname" name="last_name" autocomplete="family-name" />
  </div>
  <div>
    <label for="email">E-post:</label>
    <input type="email" id="email" name="email_address" autocomplete="email" />
  </div>
  <div>
    <label for="zip">Postnummer:</label>
    <input type="text" id="zip" name="postal_code" autocomplete="postal-code" />
  </div>
  <button type="submit">Skicka</button>
</form>
```

::

### Formulär utan [autocomplete]{.inline-code} (Fel) ❌

Detta formulär har vanliga fält, men webbläsaren eller hjälpmedlet kan inte säkert identifiera deras syfte för autofyll eller för att visa relevanta ikoner.

::code-group{:labels='["HTML (utan autocomplete) ❌"]'}

```html showLineNumbers
<form action="/submit" method="post">
  <div>
    <label for="fname">Förnamn:</label>
    <input type="text" id="fname" name="first_name" />
  </div>
  <div>
    <label for="lname">Efternamn:</label>
    <input type="text" id="lname" name="last_name" />
  </div>
  <div>
    <label for="email">E-post:</label>
    <input type="email" id="email" name="email_address" />
  </div>
  <div>
    <label for="zip">Postnummer:</label>
    <input type="text" id="zip" name="postal_code" />
    <!-- Otydligt syfte för autofyll -->
  </div>
  <button type="submit">Skicka</button>
</form>
```

::

**Viktigt:** Använd de standardiserade värdena för [autocomplete]{.inline-code} som finns listade i HTML-specifikationen. Använd inte egna påhittade värden om ett standardvärde passar.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.3.5 Identify Input Purpose (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)
- [WCAG 2.1: Input Purposes for User Interface Components](https://www.w3.org/TR/WCAG21/#input-purposes) (Lista över standardiserade värden)
- [Webbriktlinjer: R107 Märk upp formulärfält för autofyll](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/mark-upp-formularfalt-for-autofyll)
- [MDN Web Docs: The HTML autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
