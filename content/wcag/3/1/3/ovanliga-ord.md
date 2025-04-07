---
title: 3.1.3 Ovanliga ord
description: Tillhandahåll en mekanism för att identifiera definitioner av ovanliga eller begränsat använda ord och fraser, inklusive idiom och jargong.
level: AAA
slug: ovanliga-ord
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "ovanliga ord",
    "unusual words",
    "definitioner",
    "jargong",
    "idiom",
    "förklaringar",
    "ordlista",
    "glossary",
    "begriplig",
    "läsbar",
    "kognitiv",
  ]
canonical: https://t12t.dev/wcag/3/1/3/ovanliga-ord

principleNumber: 3
principleName: Begriplig
guidelineNumber: 1
guidelineName: Läsbar
criterionNumber: 3

og:
  title: 3.1.3 Ovanliga ord – WCAG
  description: Tillhandahåll definitioner för ovanliga ord, idiom och jargong.
  url: https://t12t.dev/wcag/3/1/3/ovanliga-ord
  type: article

datePublished: 2025-07-03
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Ovanliga ord

## Beskrivning

En mekanism ska finnas tillgänglig för att identifiera specifika definitioner av ord eller fraser som används på ett ovanligt eller begränsat sätt, inklusive **idiom** och **jargong**.

Detta kriterium (Nivå AAA) innebär att om texten innehåller:

- **Ovanliga ord:** Ord som inte tillhör vanlig allmänsvenska eller som används med en speciell betydelse inom ett visst ämnesområde.
- **Idiom:** Fasta uttryck där betydelsen inte direkt framgår av de enskilda orden (t.ex. "att kasta in handduken", "lägga korten på bordet").
- **Jargong:** Specialiserat fackspråk som används inom en viss yrkesgrupp eller hobby och som kan vara obegripligt för utomstående.

...så ska det finnas ett sätt för användaren att få dessa termer förklarade.

Mekanismen för att ge definitioner kan vara:

- En länk till en ordlista (glossary).
- En definition direkt i texten (inline) vid första förekomsten.
- En fotnot eller pop-up som förklarar termen.
- Användning av HTML-elementen [\<dfn\>]{.inline-code} (definition) och [\<abbr\>]{.inline-code} (förkortning med förklaring i [title]{.inline-code}-attributet, även om detta är mindre robust).

## Varför detta behövs

Att förstå alla ord och uttryck i en text kan vara svårt för:

- **Personer med kognitiva funktionsnedsättningar eller lässvårigheter:** Kan ha svårt att förstå komplexa ord, abstrakt fackspråk eller bildliga uttryck (idiom).
- **Personer som inte har språket som modersmål:** Har ofta ett mindre ordförråd och känner inte till specifika idiom eller jargong.
- **Personer som är nya inom ett ämnesområde:** Facktermer och jargong kan vara ett stort hinder för att förstå informationen.
- **Alla användare:** Även personer utan funktionsnedsättning kan stöta på ord eller uttryck de inte förstår.

Att erbjuda definitioner gör innehållet mer tillgängligt och lättare att förstå för en bredare publik.

---

## Exempel

### Länk till ordlista (Rätt) ✅

Ovanliga termer länkas till en central ordlista på webbplatsen.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {3,8} showLineNumbers
<article>
  <h1>Introduktion till Kvantmekanik</h1>
  <p>
    Inom kvantmekaniken beskriver
    <a href="/ordlista#kvanttrassel">kvanttrassel</a>
    ett fenomen där partiklars tillstånd är korrelerade...
  </p>
  <p>
    Schrödingerekvationen används för att beskriva hur ett kvantmekaniskt
    system, som beskrivs av en <a href="/ordlista#vagfunktion">vågfunktion</a>,
    förändras över tid.
  </p>
</article>

<!-- På sidan /ordlista.html -->
<!--
<dl>
  <dt id="kvanttrassel">Kvanttrassel (Quantum Entanglement)</dt>
  <dd>Ett kvantmekaniskt fenomen där...</dd>
  <dt id="vagfunktion">Vågfunktion</dt>
  <dd>En matematisk beskrivning av...</dd>
</dl>
-->
```

::
**Resultat:** Användaren kan klicka på de markerade termerna för att få en definition i ordlistan.

### Definition direkt i texten (Inline) (Rätt) ✅

Första gången en ovanlig term används, ges en kort förklaring inom parentes eller i direkt anslutning.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {2} showLineNumbers
<p>
  Projektet använder agil utveckling, specifikt ramverket
  <dfn>Scrum</dfn> (en iterativ metod för projekthantering där teamet arbetar i
  korta cykler kallade sprintar). Under varje sprint levereras...
</p>

<p>
  Han fick <i lang="la">ad hoc</i> (för detta särskilda ändamål) i uppdrag att
  utreda frågan.
</p>
```

::
**Resultat:** Definitionen är direkt tillgänglig i texten. [\<dfn\>]{.inline-code}-elementet kan användas för att semantiskt markera den definierade termen.

### Förklaring av idiom (Rätt) ✅

Ett idiomatiskt uttryck används, följt av en förklaring.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {2} showLineNumbers
<p>
  Efter flera motgångar valde projektledaren att
  <b>kasta in handduken</b> (det vill säga, ge upp och avsluta projektet).
</p>
```

::
**Resultat:** Användare som inte känner till idiomet får dess betydelse förklarad.

### Odefinierad jargong eller idiom (Fel) ❌

Texten använder facktermer eller idiomatiska uttryck utan någon förklaring eller länk till definition.

::code-group{:labels='["HTML (Fel - AAA) ❌"]'}

```html showLineNumbers
<!-- Fel: "Synergier" och "proaktivt" är jargong som kan vara oklar -->
<p>
  Vi måste identifiera synergier och agera proaktivt för att optimera
  resursallokeringen.
</p>

<!-- Fel: Idiomet "ha is i magen" förklaras inte -->
<p>När marknaden svänger gäller det att ha is i magen.</p>

<!-- Fel: Teknisk term utan förklaring -->
<p>Systemet använder en RESTful API för kommunikation.</p>
```

::
**Resultat:** Användare som inte är insatta i affärsspråk, svenska idiom eller webbteknik kan ha svårt att förstå textens innebörd.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.1.3 Unusual Words (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html)
- [W3C Technique G101: Providing the definition of commonly misused words or phrases](https://www.w3.org/WAI/WCAG22/Techniques/general/G101)
- [W3C Technique G112: Using inline definitions](https://www.w3.org/WAI/WCAG22/Techniques/general/G112)
- [W3C Technique G62: Providing a glossary](https://www.w3.org/WAI/WCAG22/Techniques/general/G62)
- [MDN Web Docs: The Definition element (\<dfn\>)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)
