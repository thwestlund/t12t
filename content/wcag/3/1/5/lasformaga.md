---
title: 3.1.5 Läsförmåga
description: Tillhandahåll kompletterande innehåll eller en version som inte kräver mer än grundskoleutbildning för att förstå text, när text kräver mer avancerad läsförmåga.
level: AAA
slug: lasformaga
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "läsförmåga",
    "reading level",
    "lättläst",
    "plain language",
    "begriplig",
    "läsbar",
    "kognitiv",
    "lässvårigheter",
  ]
canonical: https://t12t.dev/wcag/3/1/5/lasformaga

principleNumber: 3
principleName: Begriplig
guidelineNumber: 1
guidelineName: Läsbar
criterionNumber: 5

og:
  title: 3.1.5 Läsförmåga – WCAG
  description: Erbjud alternativ eller komplement när text kräver avancerad läsförmåga.
  url: https://t12t.dev/wcag/3/1/5/lasformaga
  type: article

datePublished: 2025-07-05
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Läsförmåga

## Beskrivning

När text kräver en mer avancerad läsförmåga än vad som motsvarar ungefär **sju till nio års grundskoleutbildning** ska **kompletterande innehåll** eller en **alternativ version** som inte kräver mer än denna nivå finnas tillgänglig.

Detta kriterium (Nivå AAA) innebär att om din webbplats innehåller text som är språkligt komplex (långa meningar, svåra ord, abstrakt resonemang), bör du erbjuda hjälp för att göra den mer begriplig. Detta kan vara:

- **Kompletterande innehåll:** Illustrationer, bilder, video, ljud eller symboler som förklarar eller sammanfattar den komplexa texten.
- **Alternativ version:** En version av texten skriven på ett enklare språk (lättläst) som motsvarar nivån för grundskoleutbildning.

Man behöver inte förenkla egennamn (som personnamn, platser, organisationer) eller titlar på verk (som boktitlar). Bedömningen av läsnivån görs på texten _utan_ dessa.

## Varför detta behövs

Text som är svår att läsa utgör ett hinder för många människor:

- **Personer med kognitiva funktionsnedsättningar eller lässvårigheter (t.ex. dyslexi):** Har stor nytta av text som är skriven på ett enklare språk med kortare meningar och vanligare ord.
- **Personer som inte har språket som modersmål:** Förstår enklare språk mycket bättre än komplext eller byråkratiskt språk.
- **Personer med nedsatt hörsel (som har teckenspråk som förstaspråk):** Det skrivna språket kan vara ett andraspråk, och enklare text är lättare att förstå.
- **Ovana läsare eller personer med låg utbildningsnivå:** Har svårt att ta till sig komplex information.
- **Alla användare i stressade situationer:** Även vana läsare föredrar och förstår enklare språk bättre när de är stressade eller har ont om tid.

Att erbjuda lättare alternativ eller kompletterande stöd gör informationen tillgänglig och begriplig för en betydligt bredare publik.

---

## Exempel

### Lättläst version av myndighetstext (Rätt) ✅

En myndighet publicerar en juridisk text om nya regler. Texten är komplex och svår att förstå. Högst upp på sidan finns en tydlig länk: "Läs en sammanfattning på lättläst svenska". Länken leder till en separat sida där samma information förklaras med enklare ord, kortare meningar och eventuellt bilder.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```html showLineNumbers
<article>
  <h1>Förordning (2024:123) om nya bostadsbidrag</h1>
  <p>
    <a href="/lattlast/bostadsbidrag-2024"
      >Läs en sammanfattning på lättläst svenska</a
    >
  </p>
  <p>
    Enligt 5 § första stycket skall den som ansöker om bostadsbidrag styrka sin
    rätt till bidraget genom att tillhandahålla... (komplex juridisk text)
  </p>
</article>

<!-- På sidan /lattlast/bostadsbidrag-2024.html -->
<!--
<h1>Nya regler för bostadsbidrag (Lättläst)</h1>
<p>Från år 2024 gäller nya regler om du söker bostadsbidrag.</p>
<p>Du måste visa att du har rätt att få bidraget.
   Det gör du genom att skicka in papper som visar...</p>
 (Enkel text, korta meningar)
-->
```

::
**Resultat:** Användare som har svårt med den juridiska texten kan välja att läsa den lättlästa versionen istället.

### Komplex artikel med sammanfattning och bilder (Rätt) ✅

En vetenskaplig artikel på en webbplats förklarar ett komplicerat ämne. Artikeln inleds med en kort, enkel sammanfattning (abstract på enkelt språk). I texten finns också förklarande diagram och illustrationer som hjälper till att visualisera koncepten.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
En artikel om kvantfysik.
- Innehåller en "Sammanfattning för alla" i början.
- Använder diagram för att visa partikelinteraktioner.
- Använder analogier för att förklara komplexa idéer.
- Kompletterar texten med korta videoklipp som förklarar grunderna.
```

::
**Resultat:** Även om huvudtexten är avancerad, ger sammanfattningen och de visuella hjälpmedlen (kompletterande innehåll) stöd för förståelsen.

### Komplex text utan alternativ eller stöd (Fel) ❌

En webbplats publicerar användarvillkor eller en policy skriven på mycket formellt och komplext juridiskt språk, utan någon sammanfattning, lättläst version eller förklarande illustrationer.

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
Användarvillkoren för en tjänst är 10 sidor långa och innehåller meningar som "Underlåtenhet att efterfölja stipulerade åtaganden kan resultera i omedelbar terminering av tjänsteavtalet utan föregående notifikation." Ingen lättläst version eller sammanfattning erbjuds.
```

::
**Resultat:** Många användare kommer inte att förstå villkoren fullt ut, vilket kan leda till problem. Uppfyller inte AAA-kravet.

### Undantag: Shakespeares samlade verk (Tillåtet) ✅

En webbplats publicerar originaltexterna till William Shakespeares pjäser.

**Resultat:** Texterna är litterära verk där originalspråket är nödvändigt. Att kräva en lättläst version skulle förstöra verkets karaktär. Egennamn och titlar är undantagna. Kravet gäller inte.

---

## Bedöma läsnivå

Det finns olika metoder och index för att bedöma läsbarhet, t.ex. LIX (Lä Läsbarhetsindex). Dessa verktyg kan ge en fingervisning, men en manuell bedömning av ordval, meningslängd och struktur är också viktig. Målet är text som kan förstås av någon med ungefär 7-9 års skolgång.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.1.5 Reading Level (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html)
- [W3C Technique G86: Providing a text summary to identify the purpose of a link](https://www.w3.org/WAI/WCAG22/Techniques/general/G86) (Även om G86 handlar om länkar, är principen om sammanfattning relevant).
- [W3C Technique G153: Making the text easier to read](https://www.w3.org/WAI/WCAG22/Techniques/general/G153)
- [W3C Technique G160: Providing supplemental content](https://www.w3.org/WAI/WCAG22/Techniques/general/G160)
- [Institutet för språk och folkminnen: Lättläst](https://www.isof.se/lar-dig-mer/webbsprak/skriv-for-webben/lattlast) (Råd om att skriva lättläst svenska).
