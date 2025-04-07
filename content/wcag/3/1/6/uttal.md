---
title: 3.1.6 Uttal
description: Tillhandahåll en mekanism för att identifiera specifikt uttal av ord där betydelsen är oklar utan att känna till uttalet.
level: AAA
slug: uttal
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "uttal",
    "pronunciation",
    "homografer",
    "homographs",
    "skärmläsare",
    "talsyntes",
    "begriplig",
    "läsbar",
    "kognitiv",
  ]
canonical: https://t12t.dev/wcag/3/1/6/uttal

principleNumber: 3
principleName: Begriplig
guidelineNumber: 1
guidelineName: Läsbar
criterionNumber: 6

og:
  title: 3.1.6 Uttal – WCAG
  description: Tillhandahåll information om uttal när det är nödvändigt för att förstå ordets betydelse.
  url: https://t12t.dev/wcag/3/1/6/uttal
  type: article

datePublished: 2025-07-06
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Uttal

## Beskrivning

En mekanism ska finnas tillgänglig för att identifiera specifikt **uttal** av ord när ordets betydelse i sammanhanget är **tvetydig om man inte känner till uttalet**.

Detta kriterium (Nivå AAA) handlar om ord som stavas likadant men har olika betydelse beroende på hur de uttalas (homografer). Om kontexten inte tydligt avslöjar vilken betydelse som avses, och uttalet är nyckeln till att förstå, måste det finnas ett sätt att få reda på det korrekta uttalet.

Mekanismen kan vara:

- Ljudfil som spelar upp uttalet.
- Länk till en definition som inkluderar uttal (t.ex. i fonetisk skrift eller ljud).
- Fonetisk transkription direkt i texten.
- En förklaring i texten som klargör betydelsen (och därmed det underförstådda uttalet).

Kravet gäller sällan i vanlig löptext där sammanhanget oftast gör betydelsen klar. Det är mer relevant i specifika situationer som ordlistor, språkundervisning, eller när man diskuterar själva orden och deras uttal.

## Varför detta behövs

Homografer kan skapa förvirring, särskilt för:

- **Skärmläsaranvändare:** Talsynteser kan ha svårt att gissa rätt uttal för homografer om kontexten är oklar. Om "desert" (öken) och "desert" (överge) uttalas likadant kan det leda till missförstånd. Att få det korrekta uttalet specificerat hjälper både talsyntesen och användaren.
- **Personer med kognitiva funktionsnedsättningar eller lässvårigheter:** Kan ha svårt att avgöra betydelsen av ett ord som kan uttalas på olika sätt om kontexten är svag.
- **Personer som lär sig språket:** Behöver ofta hjälp med både betydelse och uttal för ord som ser likadana ut.

Att klargöra uttalet när det är avgörande för betydelsen minskar risken för missförstånd.

---

## Exempel

### Ordlista med uttal (Rätt) ✅

En ordlista definierar homografer och inkluderar information om uttal, t.ex. via ljudfiler eller fonetisk skrift.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<dl>
  <dt>Lead</dt>
  <dd>
    1. /liːd/ (verb) - att leda, att vara först.
    <button
      onclick="playAudio('lead_verb.mp3')"
      aria-label="Spela upp uttal av lead (verb)"
    >
      🔊
    </button>
  </dd>
  <dd>
    2. /lɛd/ (substantiv) - metallen bly.
    <button
      onclick="playAudio('lead_noun.mp3')"
      aria-label="Spela upp uttal av lead (substantiv)"
    >
      🔊
    </button>
  </dd>

  <dt>Banen</dt>
  <dd>
    1. /bɑːnən/ (bestämd form av bane) - någons död, olycka.
    <button
      onclick="playAudio('banen_bane.mp3')"
      aria-label="Spela upp uttal av banen (från bane)"
    >
      🔊
    </button>
  </dd>
  <dd>
    2. /bɑːnɛn/ (bestämd form av bana) - väg, spår.
    <button
      onclick="playAudio('banen_bana.mp3')"
      aria-label="Spela upp uttal av banen (från bana)"
    >
      🔊
    </button>
  </dd>
</dl>

<script>
  function playAudio(file) {
    // Logik för att spela upp ljudfil
    new Audio(file).play();
    console.log("Spelar " + file);
  }
</script>
```

::
**Resultat:** Användaren kan se och/eller höra skillnaden i uttal för att förstå de olika betydelserna.

### Förklaring i texten (Rätt) ✅

När en homograf används på ett sätt där uttalet är viktigt för att förstå en poäng, förklaras det.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<p>
  Ordet "kör" kan vara förvirrande. Om jag säger att jag ska till
  <i title="Uttalas /ɕøːr/">kör</i> betyder det en sånggrupp, men om jag säger
  att jag <i title="Uttalas /çøːr/">kör</i> bil, betyder det att jag framför
  fordonet.
</p>
```

::
**Resultat:** Skillnaden i betydelse (och därmed uttal) klargörs i texten. Att använda [title]{.inline-code} för uttal är dock inte en robust lösning i sig (se 3.1.4), men textförklaringen hjälper. Bättre vore att använda ljud eller fonetisk skrift om det är kritiskt.

### Homograf där kontexten är tydlig (Ingen åtgärd krävs) ✅

En homograf används i en mening där sammanhanget gör betydelsen och uttalet uppenbart.

::code-group{:labels='["HTML (Ingen åtgärd krävs) ✅"]'}

```html showLineNumbers
<p>
  Soldaterna fick order om att retirera och inte
  <span lang="en">desert</span> sina poster.
</p>
<p>Sahara är världens största varma <span lang="en">desert</span>.</p>
<p>Han gick först i ledet.</p>
<p>Denna penna innehåller inte led.</p>
```

::
**Resultat:** I dessa fall är betydelsen tydlig från kontexten. Ingen extra mekanism för uttal behövs enligt detta kriterium.

### Homograf utan förklaring i tvetydig kontext (Fel) ❌

En text diskuterar lingvistik och använder en homograf på ett sätt som kan misstolkas om uttalet inte klargörs, och ingen mekanism finns.

::code-group{:labels='["HTML (Fel - AAA) ❌"]'}

```html showLineNumbers
<!-- Fel: Om sammanhanget inte redan klargjort uttalsskillnaden -->
<p>
  Fonetisk transkription kan visa skillnaden mellan orden, till exempel "banen".
  <!-- Vilket "banen" avses här? Ingen förklaring ges. -->
</p>
```

::
**Resultat:** Användaren, särskilt en skärmläsaranvändare vars talsyntes kanske uttalar ordet fel, kan bli förvirrad om vilken betydelse som diskuteras.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.1.6 Pronunciation (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html)
- [W3C Technique G120: Providing the pronunciation of names or specialized terms](https://www.w3.org/WAI/WCAG22/Techniques/general/G120)
- [W3C Technique G121: Linking to definitions](https://www.w3.org/WAI/WCAG22/Techniques/general/G121)
- [International Phonetic Alphabet (IPA) chart](https://www.internationalphoneticassociation.org/content/ipa-chart) (För fonetisk skrift)
