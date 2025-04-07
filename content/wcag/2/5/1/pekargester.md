---
title: 2.5.1 Pekargester
description: Säkerställ att all funktionalitet som använder komplexa gester (flerpunkts- eller vägbaserade) också kan utföras med en enkel pekargest.
level: A
slug: pekargester
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "pekargester",
    "pointer gestures",
    "gester",
    "touch",
    "mobil",
    "surfplatta",
    "enhandsfattning",
    "motorik",
    "operabel",
    "indatametoder",
  ]
canonical: https://t12t.dev/wcag/2/5/1/pekargester

principleNumber: 2
principleName: Operabel
guidelineNumber: 5
guidelineName: Indatametoder
criterionNumber: 1

og:
  title: 2.5.1 Pekargester – WCAG
  description: Säkerställ att komplexa pekargester har ett enklare alternativ.
  url: https://t12t.dev/wcag/2/5/1/pekargester
  type: article

datePublished: 2025-06-10
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Pekargester

## Beskrivning

All funktionalitet som använder **flerpunktsgester** (t.ex. nypa för att zooma) eller **vägbaserade gester** (t.ex. svepa/swipa, dra en linje) för att fungera kan också användas med en **enkel pekare** (ett finger eller en muspekare) utan en vägbaserad gest, om inte en flerpunkts- eller vägbaserad gest är nödvändig (essential).

Detta innebär att om en funktion kräver att användaren använder mer än ett finger samtidigt (som att zooma in på en karta med två fingrar) eller att de drar fingret/pekaren längs en specifik bana (som att svepa i en karusell), måste det finnas ett alternativt sätt att utföra samma funktion med enkla klick, tryck eller långtryck.

Exempel på enkla pekargester är:

- Ett enkelt tryck eller klick.
- Ett dubbeltryck eller dubbelklick.
- Ett långt tryck eller klick-och-håll.

Undantaget gäller om själva gesten är fundamental för funktionen, till exempel att skriva sin signatur eller rita fritt i ett ritprogram.

## Varför detta behövs

Komplexa gester kan vara svåra eller omöjliga att utföra för:

- **Personer med motoriska funktionsnedsättningar:** Kan ha begränsad rörlighet, darrningar, eller svårt att koordinera flera fingrar eller göra precisa svepningar.
- **Användare med hjälpmedel:** Personer som använder huvudpekare, ögonstyrning, eller munsticka kan oftast bara simulera en enkel pekare (ett klick).
- **Användare med endast en hand tillgänglig:** Nyp-zoom och andra tvåhandsgester är svåra.
- **Alla användare i vissa situationer:** Att använda komplexa gester kan vara svårt på små skärmar, i skakiga miljöer, eller om man har handskar på sig.

Att erbjuda enkla alternativ (oftast i form av knappar eller andra kontroller) gör funktionaliteten tillgänglig för alla, oavsett deras förmåga att utföra komplexa gester.

---

## Exempel

### Karta med zoom-knappar (Rätt) ✅

En interaktiv karta låter användare zooma in och ut genom att "nypa" med två fingrar. Kartan har också synliga knappar med "+" och "-" för att zooma in respektive ut med enkla klick/tryck.

::code-group{:labels='["Konceptuell HTML (Rätt) ✅"]'}

```html showLineNumbers
<div class="map-container">
  <div id="map">
    <!-- Interaktiv karta här (t.ex. Leaflet, Google Maps) -->
  </div>
  <div class="map-controls">
    <button id="zoomInBtn" aria-label="Zooma in">+</button>
    <button id="zoomOutBtn" aria-label="Zooma ut">-</button>
  </div>
</div>

<!-- JavaScript krävs för att koppla knappar till kartans zoom-funktion -->
<script>
  const map = /* ... initiera kartan ... */ ;
  document.getElementById('zoomInBtn').addEventListener('click', () => map.zoomIn());
  document.getElementById('zoomOutBtn').addEventListener('click', () => map.zoomOut());
</script>
```

::
**Resultat:** Användare som inte kan nypa kan ändå zooma med knapparna.

### Bildkarusell med svep och knappar (Rätt) ✅

En karusell på en mobilanpassad sida låter användaren svepa (swipa) åt vänster/höger för att byta bild. Det finns också tydliga "Föregående" och "Nästa" pilar/knappar som kan tryckas på.

::code-group{:labels='["Konceptuell HTML (Rätt) ✅"]'}

```html showLineNumbers
<div class="carousel">
  <!-- Bilder här -->
  <button class="prev" aria-label="Föregående bild">‹</button>
  <button class="next" aria-label="Nästa bild">›</button>
</div>

<!-- JavaScript krävs för svep- och knapplogik -->
```

::
**Resultat:** Användare som har svårt att svepa kan använda knapparna för att navigera.

### Lista med "dra för att radera" och alternativ (Rätt) ✅

En lista med objekt (t.ex. e-postmeddelanden) låter användaren dra ett objekt åt sidan för att visa en "Radera"-knapp. Det finns också ett annat sätt att radera, t.ex. genom att trycka på objektet för att öppna en meny med ett "Radera"-alternativ, eller genom att ha en synlig "Redigera"-knapp som visar kryssrutor och en "Radera"-knapp för markerade objekt.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
Alternativ 1: Tryck på objektet öppnar en meny med "Radera".
Alternativ 2: En "Redigera"-knapp finns. När den aktiveras visas kryssrutor vid varje objekt och en "Radera valda"-knapp visas.
```

::
**Resultat:** Funktionen att radera är inte beroende av den vägbaserade "dra"-gesten.

### Endast nyp-zoom på bild (Fel) ❌

En webbsida visar en bild som endast kan zoomas genom att nypa med två fingrar. Det finns inga knappar eller andra kontroller för att zooma.

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
En produktsida visar en detaljbild. Användaren kan zooma in i bilden, men bara genom att använda en nyp-gest på en pekskärm. Inga zoom-knappar finns.
```

::
**Resultat:** Användare som inte kan utföra nyp-gesten kan inte zooma in i bilden.

### Endast svep för viktig funktion (Fel) ❌

En app kräver att användaren sveper uppåt från botten av skärmen för att komma åt huvudmenyn. Det finns inget synligt meny-alternativ eller knapp för att öppna menyn med ett enkelt tryck.

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
En app för sociala medier. För att se notiser måste användaren svepa ner från skärmens övre kant. Det finns ingen notis-ikon eller knapp att trycka på istället.
```

::
**Resultat:** Användare som har svårt med precisa svepningar, eller använder hjälpmedel som simulerar klick, kan inte komma åt funktionen.

### Undantag: Rita signatur (Tillåtet) ✅

Ett formulär kräver att användaren skriver sin signatur genom att rita med fingret eller musen i en ruta.

**Resultat:** Den vägbaserade gesten (att rita) är nödvändig för funktionen (att skapa en unik signatur). Detta är ett tillåtet undantag. (Dock bör man överväga om en signatur verkligen _är_ nödvändig, eller om en annan autentiseringsmetod kan användas).

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.5.1 Pointer Gestures (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html)
- [Supporting WCAG 2.5.1 with Touchscreen and Device Sensor Inputs (W3C Working Group Note)](https://www.w3.org/TR/pointer-gestures-with-sensor-inputs/)
