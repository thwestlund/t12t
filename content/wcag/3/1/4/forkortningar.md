---
title: 3.1.4 Förkortningar
description: Tillhandahåll en mekanism för att identifiera den utskrivna formen eller betydelsen av förkortningar.
level: AAA
slug: forkortningar
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "förkortningar",
    "abbreviations",
    "akronymer",
    "acronyms",
    "definitioner",
    "förklaringar",
    "abbr-element",
    "begriplig",
    "läsbar",
    "kognitiv",
  ]
canonical: https://t12t.dev/wcag/3/1/4/forkortningar

principleNumber: 3
principleName: Begriplig
guidelineNumber: 1
guidelineName: Läsbar
criterionNumber: 4

og:
  title: 3.1.4 Förkortningar – WCAG
  description: Tillhandahåll den utskrivna formen eller betydelsen av förkortningar.
  url: https://t12t.dev/wcag/3/1/4/forkortningar
  type: article

datePublished: 2025-07-04
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Förkortningar

## Beskrivning

En mekanism ska finnas tillgänglig för att identifiera den utskrivna formen eller betydelsen av **förkortningar**.

Detta kriterium (Nivå AAA) innebär att när förkortningar (inklusive akronymer och initialismer) används i texten, ska det finnas ett sätt för användaren att få veta vad förkortningen står för.

Mekanismen för detta kan vara:

- Den utskrivna formen anges inom parentes första gången förkortningen används (t.ex. "Web Content Accessibility Guidelines (WCAG)").
- Användning av HTML-elementet [\<abbr\>]{.inline-code} med förklaringen i [title]{.inline-code}-attributet (t.ex. [\<abbr title="Web Content Accessibility Guidelines">WCAG</abbr\>]{.inline-code}).
- En länk från förkortningen till en definition i en ordlista eller i texten.
- En ordlista på webbplatsen som förklarar alla använda förkortningar.

## Varför detta behövs

Förkortningar kan vara obegripliga för användare som inte är bekanta med dem:

- **Personer med kognitiva funktionsnedsättningar eller lässvårigheter:** Kan ha svårt att komma ihåg eller förstå innebörden av förkortningar.
- **Personer som inte har språket som modersmål:** Känner ofta inte till vanliga förkortningar.
- **Personer som är nya inom ett ämnesområde:** Fackspråk innehåller ofta många specifika förkortningar.
- **Skärmläsaranvändare:** Vissa skärmläsare kan uttala förkortningar bokstav för bokstav eller som ett ord beroende på hur de är skrivna. Att få den utskrivna formen presenterad kan hjälpa till att förstå innebörden, även om uttalet inte alltid blir perfekt.

Att förklara förkortningar gör texten mer begriplig för en bredare publik.

---

## Exempel

### Utskriven form vid första omnämnandet (Rätt) ✅

Första gången en förkortning används i ett dokument eller på en sida skrivs den ut helt, med förkortningen inom parentes. Därefter kan bara förkortningen användas.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {2,6} showLineNumbers
<article>
  <p>
    Vi strävar efter att följa Web Content Accessibility Guidelines (WCAG) för
    att göra vårt innehåll tillgängligt.
  </p>
  <p>Att uppfylla WCAG nivå AA är vårt minimimål.</p>
  <p>
    För mer information, kontakta vår VD (Verkställande Direktör). Senare i
    texten kan vi hänvisa till vår VD.
  </p>
</article>
```

::
**Resultat:** Användaren får definitionen direkt vid första mötet med förkortningen.

### Använda [\<abbr\>]{.inline-code}-elementet (Rätt) ✅

Förkortningen markeras med [\<abbr\>]{.inline-code} och den fullständiga utskriften anges i [title]{.inline-code}-attributet. Många webbläsare visar då en tooltip med förklaringen när man hovrar över förkortningen, och vissa hjälpmedel kan läsa upp den.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {2,3} showLineNumbers
<p>
  Studien publicerades av <abbr title="World Health Organization">WHO</abbr>.
  Webbplatsen använder <abbr title="HyperText Markup Language">HTML</abbr> och
  <abbr title="Cascading Style Sheets">CSS</abbr>.
</p>
```

::
**Resultat:** Användare som kan använda musen kan se förklaringen via tooltip. Vissa skärmläsare kan också meddela [title]{.inline-code}-attributet. **OBS:** Förlita sig enbart på [title]{.inline-code} är inte alltid helt robust, då det inte är tillgängligt för tangentbordsanvändare eller på pekskärm utan extra anpassning. Att skriva ut vid första omnämnandet är ofta bättre.

### Länk till ordlista (Rätt) ✅

Förkortningar länkas till en central ordlista där de förklaras.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {2} showLineNumbers
<p>
  För att säkerställa kompatibilitet testar vi mot olika
  <a href="/ordlista#ua"><abbr>UA</abbr></a> (User Agents).
</p>

<!-- På sidan /ordlista.html -->
<!--
<dl>
  <dt id="ua">UA</dt>
  <dd>User Agent. Programvara som hämtar och presenterar webbinnehåll
      för användare, t.ex. en webbläsare.</dd>
</dl>
-->
```

::
**Resultat:** Ger en central plats för alla definitioner, men kräver att användaren navigerar bort för att få förklaringen.

### Oförklarade förkortningar (Fel) ❌

Förkortningar används utan att förklaras vid första omnämnandet, utan [\<abbr\>]{.inline-code}-element, och utan länk till ordlista.

::code-group{:labels='["HTML (Fel - AAA) ❌"]'}

```html showLineNumbers
<!-- Fel: Många förkortningar utan förklaring -->
<p>
  Vår nya SaaS-lösning bygger på en microservice-arkitektur med RESTful APIs. Vi
  använder CI/CD för deployment till AWS. Kontakta vår CTO för mer info.
</p>
```

::
**Resultat:** Texten är obegriplig för användare som inte är insatta i dessa tekniska termer och förkortningar.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.1.4 Abbreviations (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html)
- [W3C Technique G102: Providing the expansion or explanation of an abbreviation](https://www.w3.org/WAI/WCAG22/Techniques/general/G102)
- [W3C Technique H28: Providing definitions for abbreviations by using the abbr element](https://www.w3.org/WAI/WCAG22/Techniques/html/H28)
- [MDN Web Docs: The Abbreviation element (\<abbr\>)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
