---
title: 1.4.4 Ändra textstorlek
description: Säkerställ att text kan förstoras upp till 200% utan att innehåll eller funktion går förlorad, och utan att kräva horisontell rullning.
level: AA
slug: andra-textstorlek
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "textstorlek",
    "zoom",
    "förstoring",
    "läsbarhet",
    "responsiv design",
    "relativa enheter",
    "skiljbar",
  ]
canonical: https://t12t.dev/wcag/1/4/4/andra-textstorlek

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 4

og:
  title: 1.4.4 Ändra textstorlek – WCAG
  description: Säkerställ att text kan förstoras upp till 200% utan problem.
  url: https://t12t.dev/wcag/1/4/4/andra-textstorlek
  type: article

datePublished: 2025-04-13
# Uppdaterad
dateModified: 2024-05-17

sitemap:
  # Uppdaterad
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Ändra textstorlek

## Beskrivning

Text (utom text i textning och bilder av text) kan ändras i storlek upp till **200 procent** utan att innehåll eller funktion går förlorad.

Detta innebär att användare måste kunna förstora texten på en webbsida till dubbel storlek med hjälp av webbläsarens inbyggda funktioner för textzoom (eller anpassade kontroller om sådana erbjuds), utan att:

1.  **Innehåll försvinner:** Text får inte bli avklippt, övertäckt eller på annat sätt oläslig.
2.  **Funktionalitet går förlorad:** Knappar, länkar och andra kontroller måste förbli synliga och användbara.
3.  **Horisontell rullning krävs för att läsa textrader:** När fönstret är maximerat ska användaren inte behöva rulla horisontellt för att läsa en hel rad text. (Vertikal rullning är acceptabelt och förväntat när texten förstoras).

## Varför detta behövs

- **Personer med nedsatt syn:** Många användare behöver förstora text för att kunna läsa den bekvämt. Om layouten bryts samman, innehåll försvinner eller de tvingas rulla i sidled för varje textrad, blir webbplatsen mycket svår eller omöjlig att använda.
- **Äldre användare:** Synförmågan försämras ofta med åldern, vilket ökar behovet av textförstoring.
- **Användare med specifika skärmupplösningar eller inställningar:** Vissa användare har systeminställningar för större text som standard.

Att bygga webbplatser med flexibla layouter som hanterar textförstoring säkerställer att innehållet är tillgängligt och användbart för fler människor. Detta uppnås oftast genom att använda responsiv design och relativa enheter ([rem]{.inline-code}, [em]{.inline-code}, [%]{.inline-code}) för storleksangivelser snarare än fasta pixelvärden ([px]{.inline-code}) för både text och containrar.

---

## Exempel

### Flexibel layout med relativa enheter (Rätt) ✅

Genom att använda relativa enheter för textstorlek och containrar (särskilt bredd och höjd där det är relevant) kan layouten anpassa sig när användaren zoomar texten.

::code-group{:labels='["CSS (relativa enheter) ✅"]'}

```css showLineNumbers
/* Använd 'rem' för textstorlek så att den skalar med
   användarens basinställning eller webbläsarens textzoom */
html {
  font-size: 100%; /* Eller t.ex. 16px som bas */
}

body {
  font-size: 1rem; /* 1 * basstorleken */
  line-height: 1.5; /* Relativt radavstånd */
}

h1 {
  font-size: 2rem; /* 2 * basstorleken */
  margin-bottom: 1rem;
}

.container {
  width: 90%; /* Procentuell bredd anpassar sig */
  max-width: 60rem; /* Maxbredd i rem, skalar med text */
  margin: 0 auto;
  padding: 1rem;
}

button {
  padding: 0.5rem 1rem; /* Padding i rem anpassas */
  font-size: 0.9rem;
}
```

::
**Resultat:** När användaren ökar textstorleken (t.ex. via webbläsarens "Zoom Text Only" eller ändrar basstorlek) kommer texten att bli större, och containrar med relativa mått kommer att anpassa sig. Texten radbryts inom containern och ingen horisontell rullning krävs för att läsa raderna.

### Fast layout med pixelvärden som orsakar problem (Fel) ❌

Om containrar har fasta bredder och/eller höjder i pixlar, och texten inuti förstoras, kan texten antingen flöda utanför containern, bli avklippt (om [overflow: hidden]{.inline-code} används), eller tvinga fram horisontell rullning inom containern eller för hela sidan.

::code-group{:labels='["CSS (fasta enheter) ❌"]'}

```css showLineNumbers
body {
  font-size: 16px; /* Kan förstoras av användaren... */
}

.fixed-container {
  width: 300px; /* Fast bredd i pixlar */
  height: 100px; /* Fast höjd i pixlar */
  padding: 10px;
  border: 1px solid black;
  overflow: hidden; /* ...men om texten blir för stor klipps den av! */
}

.fixed-width-column {
  width: 500px; /* Fast bredd */
  margin: 20px;
  padding: 15px;
  border: 1px solid grey;
  /* Om texten inuti förstoras så mycket att en rad blir bredare
     än 500px minus padding, kommer horisontell rullning krävas
     för att läsa raden, eller så bryts ord konstigt. */
}
```

::
**Resultat:** När textstorleken ökas till 200%:

1.  I [.fixed-container]{.inline-code} kommer texten sannolikt att bli för stor för den fasta höjden och klippas av på grund av [overflow: hidden]{.inline-code}. **Funktion/innehåll går förlorad.**
2.  I [.fixed-width-column]{.inline-code} kan texten tvinga fram en horisontell rullningslist för att läsa långa rader, eller så flödar den utanför om [overflow]{.inline-code} inte är satt. **Kräver horisontell rullning.**

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.4 Resize text (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
- [MDN Web Docs: CSS values and units (rem, em, %)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [WebAIM: Fonts - Relative Sizing](https://webaim.org/techniques/fonts/#relative)
