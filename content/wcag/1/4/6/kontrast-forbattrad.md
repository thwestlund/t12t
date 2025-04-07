---
title: 1.4.6 Kontrast (Förbättrad)
description: Säkerställ högre kontrast mellan text och dess bakgrund än minimikravet, för att ytterligare förbättra läsbarheten.
level: AAA
slug: kontrast-forbattrad
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "kontrast",
    "förbättrad kontrast",
    "textkontrast",
    "färgkontrast",
    "synnedsättning",
    "läsbarhet",
    "skiljbar",
  ]
canonical: https://t12t.dev/wcag/1/4/6/kontrast-forbattrad

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 6

og:
  title: 1.4.6 Kontrast (Förbättrad) – WCAG
  description: Säkerställ högre kontrast mellan text och dess bakgrund än minimikravet.
  url: https://t12t.dev/wcag/1/4/6/kontrast-forbattrad
  type: article

datePublished: 2025-04-15
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Kontrast (Förbättrad)

## Beskrivning

Den visuella presentationen av text och bilder av text har ett kontrastförhållande på minst **7:1**, förutom i följande fall:

- **Stor text:** Text som är stor (minst 18 punkter eller 14 punkter fet stil) och bilder av stor text ska ha ett kontrastförhållande på minst **4.5:1**.
- **Oviktig text (Incidental):** Text eller bilder av text som är en del av en inaktiv användargränssnittskomponent, som är ren dekoration, som inte är synlig för någon, eller som är en del av en bild som innehåller annat betydande visuellt innehåll, har inga kontrastkrav.
- **Logotyper:** Text som är en del av en logotyp eller ett varumärke har inga kontrastkrav.

Detta kriterium (Nivå AAA) är en striktare version av Kriterium 1.4.3 Kontrast (Minimum) (Nivå AA). Det kräver högre kontrast mellan text och bakgrund.

## Varför detta behövs

Även om minimikontrasten (4.5:1 och 3:1) gör innehållet tillgängligt för många, kan personer med mer betydande synnedsättningar (som inte använder specialiserade hjälpmedel som kan förbättra kontrasten) fortfarande ha svårt att läsa texten.

Den förbättrade kontrasten ([7:1]{.inline-code} för normal text och [4.5:1]{.inline-code} för stor text) ger en ännu bättre läsbarhet och gynnar särskilt:

- Personer med måttlig synnedsättning.
- Personer som upplever försämrat färgseende eller kontrastkänslighet på grund av ålder.
- Alla användare i situationer med mycket omgivande ljus (t.ex. utomhus) eller på skärmar med begränsad kontrast.

Att uppfylla detta AAA-kriterium gör webbplatsen mer robust och användbar för en ännu bredare grupp människor.

---

## Exempel

### Textkontrast (Förbättrad)

Beräkna kontrastförhållandet mellan textfärg och bakgrundsfärg med de högre AAA-kraven.

::code-group{:labels='["CSS (Rätt - AAA) ✅", "CSS (Uppfyller AA, men inte AAA) ⚠️"]'}

```css [Tillräcklig kontrast (AAA)]
/* Exempel 1: Svart text (#000) på vit bakgrund (#FFF) */
/* Kontrast: 21:1 (Uppfyller 7:1 för normal text) */
body {
  background-color: #ffffff;
  color: #000000;
  font-size: 16px; /* Normal storlek */
}

/* Exempel 2: Mörkgrå text (#4a4a4a) på vit bakgrund (#FFF) */
/* Kontrast: 7.06:1 (Precis godkänt för normal text enligt AAA) */
.dark-grey-aaa {
  color: #4a4a4a;
  font-size: 14px; /* Normal storlek */
}

/* Exempel 3: Mellangrå text (#757575) på vit bakgrund (#FFF) */
/* Kontrast: 4.6:1 (Uppfyller 4.5:1 för stor text enligt AAA) */
h2 {
  color: #757575;
  font-size: 24px; /* Stor text (>= 18pt ≈ 24px) */
  font-weight: bold; /* Eller 14pt fet */
}
```

```css [Otillräcklig kontrast för AAA]
/* Exempel 1: Mörkgrå text (#595959) på vit bakgrund (#FFF) */
/* Kontrast: 6.0:1 (Uppfyller AA:s 4.5:1, men INTE AAA:s 7:1 för normal text) */
.normal-text-aa-ok {
  color: #595959;
  background-color: #ffffff;
  font-size: 16px; /* Normal storlek */
}

/* Exempel 2: Ljusare grå text (#888) på vit bakgrund (#FFF) */
/* Kontrast: 3.55:1 (Uppfyller AA:s 3:1 för stor text, men INTE AAA:s 4.5:1) */
h3 {
  color: #888888;
  background-color: #ffffff;
  font-size: 18pt; /* Stor text */
}
```

::

**Vad är "Stor text"?** (Samma definition som för 1.4.3)

- Minst **18 punkter** (ca 24 CSS-pixlar vid standardinställningar)
- Eller minst **14 punkter** (ca 18.7 CSS-pixlar) och **fet stil** ([font-weight: bold]{.inline-code} eller 700).

**Notera:** Detta kriterium gäller specifikt text och bilder av text. Det finns inget motsvarande AAA-krav för högre kontrast på grafiska objekt och UI-komponenter (där gäller fortfarande AA-kravet 3:1 från 1.4.11).

---

## Verktyg för att mäta kontrast

Samma verktyg som för 1.4.3 kan användas, men du behöver jämföra resultaten mot de striktare AAA-gränsvärdena ([7:1]{.inline-code} och [4.5:1]{.inline-code}).

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [TPGi Colour Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/) (Applikation för datorn)
- Inbyggda utvecklarverktyg i webbläsare (ofta vid färgväljaren i CSS-inspektören, visar ofta både AA och AAA-status)

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.6 Contrast (Enhanced) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html)
