---
title: 1.4.2 Ljudkontroll
description: Tillhandahåll en mekanism för att pausa, stoppa eller justera volymen för ljud som spelas automatiskt i mer än 3 sekunder.
level: A
slug: ljudkontroll
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "ljud",
    "audio",
    "autoplay",
    "ljudkontroll",
    "pausa",
    "stoppa",
    "volym",
    "skärmläsare",
    "skiljbar",
  ]
canonical: https://t12t.dev/wcag/1/4/2/ljudkontroll

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 2

og:
  title: 1.4.2 Ljudkontroll – WCAG
  description: Tillhandahåll kontroller för ljud som spelas automatiskt i mer än 3 sekunder.
  url: https://t12t.dev/wcag/1/4/2/ljudkontroll
  type: article

datePublished: 2025-04-11
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.8 # A-kriterier har hög prio
---

# Ljudkontroll

## Beskrivning

Om något ljud på en webbsida spelas upp automatiskt i mer än 3 sekunder, ska det finnas antingen:

1.  En mekanism för att **pausa eller stoppa** ljudet, ELLER
2.  En mekanism för att **kontrollera ljudvolymen** oberoende av den övergripande systemvolymen.

Detta innebär att användaren måste ges kontroll över ljud som startar automatiskt och varar längre än en mycket kort stund.

## Varför detta behövs

- **Störningar för skärmläsare:** Automatiskt spelande ljud kan dränka eller störa talet från en skärmläsare, vilket gör det omöjligt för användaren att navigera eller förstå sidans innehåll.
- **Koncentrationssvårigheter:** Oväntat eller oönskat ljud kan vara mycket störande för personer med kognitiva funktionsnedsättningar, uppmärksamhetsstörningar eller ångest.
- **Plötsliga ljud:** Kan vara skrämmande eller obehagligt för vissa användare.
- **Miljö:** Användare kan befinna sig i miljöer där ljud är olämpligt (t.ex. bibliotek, kontor) och behöver kunna stänga av det snabbt.

Att ge användaren kontroll över automatiskt spelande ljud är avgörande för att inte störa eller blockera deras interaktion med webbplatsen. Det bästa är oftast att undvika automatiskt spelande ljud helt, men om det används måste detta krav uppfyllas.

---

## Exempel

### Ljudspelare med kontroller (Rätt) ✅

Standard HTML5-ljudelementet med [controls]{.inline-code}-attributet inkluderar automatiskt kontroller för play/paus och volym. Om ljudet inte är inställt på att spela automatiskt ([autoplay]{.inline-code}) uppfylls kravet eftersom användaren initierar ljudet. Om [autoplay]{.inline-code} används, uppfylls kravet eftersom kontrollerna finns tillgängliga.

::code-group{:labels='["HTML (med kontroller) ✅"]'}

```html showLineNumbers
<!-- Användaren har full kontroll: kan starta, pausa, ändra volym -->
<audio controls src="musik.mp3">
  Din webbläsare stödjer inte ljudelementet.
</audio>

<!-- Även om autoplay används (vilket bör undvikas!),
     ger 'controls' användaren möjlighet att pausa/stoppa/justera volym -->
<audio controls autoplay src="bakgrundsljud.ogg">
  Din webbläsare stödjer inte ljudelementet.
</audio>
```

::

### Video med ljud och kontroller (Rätt) ✅

Samma princip gäller för video med ljud. Standardkontroller för video inkluderar paus/stopp och volym.

::code-group{:labels='["HTML (med kontroller) ✅"]'}

```html showLineNumbers
<!-- Användaren har full kontroll -->
<video controls width="640" height="360">
  <source src="film.mp4" type="video/mp4" />
  Din webbläsare stödjer inte videoelementet.
</video>
```

::

### Automatiskt spelande ljud utan kontroller (Fel) ❌

Om ljud spelas automatiskt i mer än 3 sekunder och det inte finns någon synlig kontroll för att pausa, stoppa eller justera volymen (förutom systemvolymen), uppfylls inte kravet.

::code-group{:labels='["HTML (utan kontroller) ❌"]'}

```html showLineNumbers
<!-- Fel: Ljudet startar automatiskt och spelar i mer än 3 sekunder,
     men det finns inga inbyggda kontroller för användaren -->
<audio autoplay src="långt_bakgrundsljud.mp3">
  <!-- Ingen 'controls'-attribut -->
</audio>

<!-- Även om det finns en anpassad spelare byggd med JavaScript,
     måste den ha en tydlig paus/stopp-knapp ELLER volymkontroll -->
```

::

**Viktigt:** Kravet gäller ljud som spelar i **mer än 3 sekunder**. Mycket korta ljudeffekter som spelas automatiskt (t.ex. ett kort "klick"-ljud när man trycker på en knapp) behöver inte nödvändigtvis en kontroll, även om även dessa bör användas sparsamt.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.2 Audio Control (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)
- [MDN Web Docs: The Audio element (\<audio\>)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
