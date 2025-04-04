---
title: 1.4.5 Bilder av text
description: Använd riktig text istället för bilder av text, om inte bilden är anpassningsbar av användaren eller om en specifik presentation är nödvändig.
level: AA
slug: bilder-av-text
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "bilder av text",
    "image of text",
    "text",
    "CSS",
    "anpassningsbar",
    "läsbarhet",
    "skiljbar",
    "logotyp",
  ]
canonical: https://t12t.dev/wcag/1/4/5/bilder-av-text

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 5

og:
  title: 1.4.5 Bilder av text – WCAG
  description: Använd riktig text istället för bilder av text när det är möjligt.
  url: https://t12t.dev/wcag/1/4/5/bilder-av-text
  type: article

datePublished: 2025-04-14
# Uppdaterad
dateModified: 2024-05-17

sitemap:
  # Uppdaterad
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Bilder av text

## Beskrivning

Om de teknologier som används gör det möjligt att åstadkomma den visuella presentationen, används text för att förmedla information snarare än bilder av text, förutom i följande fall:

1.  **Anpassningsbar:** Bilden av text kan visuellt anpassas till användarens krav (t.ex. genom att låta användaren ändra typsnitt, storlek, färg och bakgrund). _(Detta är sällan praktiskt genomförbart för vanliga bildformat som JPG, PNG, GIF)._
2.  **Nödvändig (Essential):** En specifik presentation av texten är nödvändig för den information som förmedlas. Exempel på detta är logotyper och varumärken.

Detta innebär att du bör använda faktisk HTML-text, formaterad med CSS, istället för att bädda in text i bilder, för all text som inte är en logotyp eller där utseendet inte är absolut avgörande.

## Varför detta behövs

Bilder av text skapar flera problem för tillgänglighet och användbarhet:

- **Förstoring:** När bilder av text förstoras blir de ofta pixliga och suddiga, vilket försämrar läsbarheten (till skillnad från vektorgrafik eller vanlig text som skalar skarpt).
- **Anpassning:** Användare kan inte ändra textens utseende (färg, bakgrundsfärg, typsnitt, radavstånd) för att passa sina behov, vilket är avgörande för många med nedsatt syn eller lässvårigheter som dyslexi. Webbläsare och hjälpmedel kan anpassa vanlig text.
- **Skärmläsare:** Även om bilden har en alt-text (Kriterium 1.1.1), kan skärmläsaranvändare inte interagera med texten på samma sätt som med vanlig text (t.ex. markera, kopiera, slå upp ord).
- **Översättning:** Automatiska översättningsverktyg kan inte översätta text som är inbäddad i bilder.
- **Sökbarhet:** Sökmotorer kan inte indexera text i bilder lika effektivt som vanlig text.
- **Bandbredd:** Bilder av text tar ofta mer bandbredd än motsvarande vanlig text och CSS.

Att använda vanlig text löser alla dessa problem och gör innehållet mer flexibelt och tillgängligt.

---

## Exempel

### Använda HTML-text och CSS (Rätt) ✅

För rubriker, knappar, menyer och brödtext är det bäst att använda HTML-element och styla dem med CSS för att uppnå önskat utseende.

::code-group{:labels='["HTML + CSS (Rätt) ✅"]'}

```html [HTML-struktur]
<h1>Viktig Rubrik</h1>
<p>Detta är ett stycke text som beskriver något.</p>
<button class="fancy-button">Klicka här</button>
```

```css [CSS-styling]
/* CSS kan användas för att skapa nästan vilket utseende som helst */
h1 {
  font-family: "Georgia", serif;
  font-size: 2.5rem;
  color: #2a52be; /* Någon blå färg */
  text-shadow: 1px 1px 2px grey;
}

p {
  font-family: "Arial", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.fancy-button {
  font-family: "Verdana", sans-serif;
  font-size: 1.1rem;
  color: white;
  background-color: #008000; /* Grön */
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}
```

::
**Resultat:** Texten är skarp vid förstoring, kan anpassas av användaren (färger, typsnitt via användarstilar eller webbläsarinställningar), läses korrekt av skärmläsare, kan översättas och indexeras.

### Använda bild av text för vanlig text (Fel) ❌

Att använda en bildfil för att visa en rubrik eller annan viktig text bryter mot kriteriet (om det inte är en logotyp).

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<!-- Fel: Rubriken är inbäddad i en bild -->
<img src="rubrik.png" alt="Viktig Rubrik" />

<!-- Fel: Knappen använder en bild istället för text och CSS -->
<button>
  <img src="klicka-har-knapp.gif" alt="Klicka här" />
</button>
```

::
**Resultat:** Texten i bilden blir pixlig vid förstoring, kan inte anpassas av användaren, och förlitar sig helt på alt-texten för skärmläsare (ingen möjlighet att interagera med texten).

### Undantag: Logotyp (Tillåtet) ✅

Text som är en del av en logotyp eller ett varumärke är undantagen från kravet.

::code-group{:labels='["HTML (Logotyp) ✅"]'}

```html showLineNumbers
<!-- Tillåtet: Texten är en del av företagets logotyp -->
<img src="foretagslogotyp.svg" alt="Företaget AB - Vår slogan här" />
```

::
**Resultat:** Även om logotypen innehåller text är det tillåtet att använda en bild, eftersom den specifika visuella presentationen är nödvändig för varumärkesidentiteten. (SVG är att föredra framför rasterformat som PNG/JPG för logotyper eftersom det skalar bättre).

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.5 Images of Text (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html)
- [Webbriktlinjer: R113 Använd text istället för bilder för att visa text](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/anvand-text-istallet-for-bilder-for-att-visa-text)-
