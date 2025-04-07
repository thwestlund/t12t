---
title: 1.3.4 Orientering
description: Lås inte innehållets visning och funktion till en specifik skärmorientering (stående eller liggande), om inte en viss orientering är nödvändig.
level: AA
slug: orientering
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "orientering",
    "skärmorientering",
    "stående",
    "liggande",
    "portrait",
    "landscape",
    "rotation",
    "anpassningsbar",
    "mobil",
    "surfplatta",
  ]
canonical: https://t12t.dev/wcag/1/3/4/orientering

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 3
guidelineName: Anpassningsbar
criterionNumber: 4

og:
  title: 1.3.4 Orientering – WCAG
  description: Lås inte innehållets visning och funktion till en specifik skärmorientering, om inte en viss orientering är nödvändig.
  url: https://t12t.dev/wcag/1/3/4/orientering
  type: article

datePublished: 2025-04-01
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6
---

# Orientering

## Beskrivning

Innehållet begränsar inte dess visning och funktion till en enda skärmorientering, såsom stående (portrait) eller liggande (landscape), såvida inte en specifik skärmorientering är nödvändig (essentiell).

Detta innebär att en webbplats eller webbapplikation ska fungera och visas korrekt oavsett om användaren håller sin enhet (t.ex. mobiltelefon, surfplatta) i stående eller liggande läge. Innehållet ska anpassa sig till den valda orienteringen.

Att låsa orienteringen är endast tillåtet om det finns en stark anledning, till exempel för att funktionen i sig kräver det (som att skanna en check i en bankapp som kan kräva stående läge, eller ett spel designat för liggande läge).

## Varför detta behövs

- **Användare med fysiska funktionsnedsättningar:** Vissa användare har sina enheter monterade i en fast position, till exempel på en rullstol eller ett stativ. Om innehållet är låst till en orientering som de inte kan använda, blir det otillgängligt.
- **Användare med begränsad motorik:** Det kan vara svårt eller omöjligt för vissa användare att fysiskt rotera enheten.
- **Användare med nedsatt syn:** Kan föredra liggande läge för att få längre textrader eller mer horisontellt utrymme, vilket kan underlätta läsning vid förstoring.

Att tillåta båda orienteringarna ger användarna flexibilitet att använda innehållet på det sätt som passar dem bäst.

---

## Exempel

### Responsiv webbplats (Fungerar i båda lägen) ✅

En webbplats som använder responsiv design anpassar sin layout automatiskt när enheten roteras. Kolumner kan flyttas om, textstorlekar justeras, och bilder skalas om för att passa den nya skärmbredden och -höjden.

::code-group{:labels='["Koncept (CSS Media Query)"]'}

```css [Styling för olika orienteringar] showLineNumbers
/* Generella stilar */
body {
  font-size: 16px;
}

/* Stilar specifika för liggande läge */
@media (orientation: landscape) {
  .container {
    display: flex; /* Använd flexbox för kolumner */
  }
  nav {
    width: 25%; /* Smalare nav */
  }
  main {
    width: 75%; /* Bredare huvudinnehåll */
  }
}

/* Stilar specifika för stående läge */
@media (orientation: portrait) {
  .container {
    display: block; /* Element under varandra */
  }
  nav,
  main {
    width: 100%; /* Full bredd */
  }
}
```

::

**Resultat:** Användaren kan rotera sin enhet och webbplatsen anpassar sig och förblir fullt användbar i både stående och liggande läge.

### Webbplats låst till en orientering (Fel, om inte nödvändigt) ❌

En webbplats eller webbapp kan tekniskt låsa orienteringen (t.ex. via inställningar i en webbapps manifest eller via JavaScript som försöker förhindra rotation). Detta bryter mot kriteriet om det inte finns en nödvändig anledning.

::code-group{:labels='["Exempel på låsning (Web App Manifest) ❌"]'}

```json [manifest.json]
{
  "name": "Min App",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait" /* Låser till stående läge */
}
```

::

**Resultat:** Användaren tvingas använda enheten i stående läge, även om liggande vore bättre eller nödvändigt för dem. Om enheten är monterad i liggande läge blir appen oanvändbar.

### Nödvändig (Essentiell) Låsning (Undantag) ✅

Vissa specifika fall kan kräva en låst orientering:

- En bankapp som har en funktion för att skanna en check, vilket kräver stående läge för kameran.
- Ett pianospel eller en app för att simulera ett instrument som kräver liggande läge för att få plats med alla tangenter/kontroller.
- En presentation eller bildspel som är designat för att visas i ett specifikt format (t.ex. alltid liggande).

I dessa fall är låsningen acceptabel eftersom funktionaliteten i sig är beroende av orienteringen.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.3.4 Orientation (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)
