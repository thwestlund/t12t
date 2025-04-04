---
title: 1.4.3 Kontrast (Minimum)
description: Säkerställ tillräcklig kontrast mellan text och dess bakgrund, samt för grafiska element och gränssnittskomponenter.
level: AA
slug: kontrast-minimum
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "kontrast",
    "textkontrast",
    "färgkontrast",
    "synnedsättning",
    "läsbarhet",
    "skiljbar",
  ]
canonical: https://t12t.dev/wcag/1/4/3/kontrast-minimum

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 3

og:
  title: 1.4.3 Kontrast (Minimum) – WCAG
  description: Säkerställ tillräcklig kontrast mellan text och dess bakgrund, samt för grafiska element och gränssnittskomponenter.
  url: https://t12t.dev/wcag/1/4/3/kontrast-minimum
  type: article

datePublished: 2025-04-12
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: weekly # Kontrast är ett vanligt problem
  priority: 0.7 # AA, viktigt och vanligt
---

# Kontrast (Minimum)

## Beskrivning

Den visuella presentationen av text och bilder av text har ett kontrastförhållande på minst **4.5:1**, förutom i följande fall:

- **Stor text:** Text som är stor (minst 18 punkter eller 14 punkter fet stil) och bilder av stor text ska ha ett kontrastförhållande på minst **3:1**.
- **Oviktig text (Incidental):** Text eller bilder av text som är en del av en inaktiv användargränssnittskomponent, som är ren dekoration, som inte är synlig för någon, eller som är en del av en bild som innehåller annat betydande visuellt innehåll, har inga kontrastkrav.
- **Logotyper:** Text som är en del av en logotyp eller ett varumärke har inga kontrastkrav.

(Notera: Även om detta kriterium ursprungligen fokuserade på text, täcker det nu implicit även kontrasten för **grafiska objekt och användargränssnittskomponenter** via hänvisning från kriterium 1.4.11 (Kontrast för innehåll som inte är text), som kräver minst **3:1** för dessa element.)

## Varför detta behövs

Tillräcklig kontrast mellan förgrund (text, ikoner) och bakgrund är avgörande för läsbarheten, särskilt för:

- **Personer med nedsatt syn:** Inklusive många äldre personer, som behöver högre kontrast för att kunna urskilja text och grafiska element.
- **Personer med färgblindhet:** Vissa färgkombinationer som har tillräcklig ljuskontrast kan fortfarande vara svåra att urskilja om luminansskillnaden är låg. WCAG:s kontrastformel tar hänsyn till luminans.
- **Alla användare i vissa situationer:** Läsning på mobila enheter i starkt solljus, på skärmar med låg kvalitet, eller i dåligt upplysta miljöer blir mycket lättare med god kontrast.

Att uppfylla minimikraven för kontrast säkerställer att innehållet är läsbart för en bredare publik.

---

## Exempel

### Textkontrast

Beräkna kontrastförhållandet mellan textfärg och bakgrundsfärg.

::code-group{:labels='["CSS (Rätt) ✅", "CSS (Fel) ❌"]'}

```css [Tillräcklig kontrast]
/* Exempel 1: Mörkgrå text (#333) på vit bakgrund (#FFF) */
/* Kontrast: 11.68:1 (Uppfyller 4.5:1 för normal text) */
body {
  background-color: #ffffff;
  color: #333333;
  font-size: 16px; /* Normal storlek */
}

/* Exempel 2: Mellangrå text (#767676) på vit bakgrund (#FFF) */
/* Kontrast: 4.54:1 (Precis godkänt för normal text) */
.subtle-text {
  color: #767676;
  font-size: 14px; /* Normal storlek */
}

/* Exempel 3: Ljusgrå text (#949494) på vit bakgrund (#FFF) */
/* Kontrast: 3.04:1 (Uppfyller 3:1 för stor text) */
h2 {
  color: #949494;
  font-size: 24px; /* Stor text (>= 18pt ≈ 24px) */
}
```

```css [Otillräcklig kontrast]
/* Exempel 1: Ljusgrå text (#999) på vit bakgrund (#FFF) */
/* Kontrast: 2.75:1 (Underkänt för normal text, kräver 4.5:1) */
.too-light {
  color: #999999;
  background-color: #ffffff;
  font-size: 16px; /* Normal storlek */
}

/* Exempel 2: Mörk text (#444) på mörk bakgrund (#555) */
/* Kontrast: 1.21:1 (Mycket dåligt, underkänt för all text) */
.dark-on-dark {
  color: #444444;
  background-color: #555555;
}

/* Exempel 3: Orange text (#FFA500) på vit bakgrund (#FFF) */
/* Kontrast: 3.00:1 (Underkänt för normal text, kräver 4.5:1.
   Skulle vara precis godkänt för stor text.) */
.warning {
  color: #ffa500;
  background-color: #ffffff;
  font-size: 16px; /* Normal storlek */
}
```

::

**Vad är "Stor text"?**

- Minst **18 punkter** (ca 24 CSS-pixlar vid standardinställningar)
- Eller minst **14 punkter** (ca 18.7 CSS-pixlar) och **fet stil** ([font-weight: bold]{.inline-code} eller 700).

### Kontrast för grafiska objekt och gränssnittskomponenter (Referens till 1.4.11)

Även om detta kriterium (1.4.3) historiskt fokuserade på text, kräver det relaterade kriteriet 1.4.11 (Nivå AA) ett kontrastförhållande på minst **3:1** för:

- **Visuella gränser** för användargränssnittskomponenter (t.ex. ramen runt ett textfält, en knapp).
- **Visuell information** som krävs för att förstå tillståndet för en komponent (t.ex. skillnaden mellan en ikryssad och en tom kryssruta, positionen för en switch-kontroll).
- **Delar av grafik** som krävs för att förstå innehållet (t.ex. linjer i ett diagram, väsentliga delar av en ikon).

Undantag finns för inaktiva komponenter, fall där utseendet bestäms av webbläsaren och inte ändras av författaren, eller när en specifik presentation är nödvändig (t.ex. i en logotyp).

---

## Verktyg för att mäta kontrast

Det finns många verktyg online och som webbläsartillägg för att mäta kontrastförhållandet mellan två färger:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [TPGi Colour Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/) (Applikation för datorn)
- Inbyggda utvecklarverktyg i webbläsare (ofta vid färgväljaren i CSS-inspektören)

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Webbriktlinjer: R111 Se till att text och grafik har tillräcklig kontrast mot bakgrunden](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/se-till-att-text-och-grafik-har-tillracklig-kontrast-mot-bakgrunden) (Täcker både 1.4.3 och 1.4.11)
- [Understanding SC 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) (Relaterat kriterium för grafik och UI)
