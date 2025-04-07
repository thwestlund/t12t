---
title: 2.2.2 Pausa, stoppa, dölj
description: Ge användare möjlighet att pausa, stoppa eller dölja innehåll som rör sig, blinkar, rullar eller uppdateras automatiskt.
level: A
slug: pausa-stoppa-dolj
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "rörligt innehåll",
    "blinkande innehåll",
    "scrollande innehåll",
    "auto-uppdatering",
    "animation",
    "karusell",
    "slider",
    "pausa",
    "stoppa",
    "dölja",
    "operabel",
    "distraktion",
    "epilepsi",
  ]
canonical: https://t12t.dev/wcag/2/2/2/pausa-stoppa-dolj

principleNumber: 2
principleName: Operabel
guidelineNumber: 2
guidelineName: Tillräckligt med tid
criterionNumber: 2

og:
  title: 2.2.2 Pausa, stoppa, dölj – WCAG
  description: Ge användare kontroll över innehåll som rör sig, blinkar, rullar eller uppdateras automatiskt.
  url: https://t12t.dev/wcag/2/2/2/pausa-stoppa-dolj
  type: article

datePublished: 2025-05-11
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: weekly # Moving content is common
  priority: 0.9 # Nivå A, fundamental
---

# Pausa, stoppa, dölj

## Beskrivning

För information som **rör sig, blinkar, rullar** eller **uppdateras automatiskt**, måste alla följande vara sanna:

1.  **Rörligt, blinkande, rullande:** För innehåll som startar automatiskt, varar mer än 5 sekunder, och presenteras parallellt med annat innehåll, ska det finnas en mekanism för användaren att **pausa, stoppa eller dölja** det. Undantag görs om rörelsen är nödvändig (essential) för aktiviteten.
2.  **Auto-uppdatering:** För innehåll som uppdateras automatiskt, startar automatiskt, och presenteras parallellt med annat innehåll, ska det finnas en mekanism för användaren att **pausa, stoppa eller dölja** det, eller **kontrollera frekvensen** på uppdateringen. Undantag görs om den automatiska uppdateringen är nödvändig.

Detta innebär att användaren måste ges kontroll över animationer, bildspel (karuseller/sliders), scrollande text (tickers), blinkande element och automatiskt uppdaterade informationsflöden (som aktiekurser eller nyhetsrubriker) som kan störa eller vara svåra att använda.

## Varför detta behövs

Innehåll som rör sig eller uppdateras automatiskt kan orsaka problem för många användare:

- **Distraktion:** Rörelse och blinkningar kan vara extremt distraherande för personer med uppmärksamhetsstörningar eller kognitiva funktionsnedsättningar, vilket gör det svårt att koncentrera sig på annat innehåll på sidan.
- **Läsbarhet:** Scrollande text eller snabbt uppdaterad information kan vara omöjlig att läsa för personer med nedsatt syn, dyslexi eller de som behöver längre tid att bearbeta information. Skärmläsare kan också ha svårt att läsa upp innehåll som ständigt ändras.
- **Vestibulära störningar:** Vissa typer av rörelse, särskilt parallax-effekter eller stora animationer, kan utlösa yrsel, illamående eller desorientering hos personer med vestibulära störningar.
- **Fotosensitivitet:** Blinkande innehåll kan i värsta fall utlösa anfall hos personer med fotosensitiv epilepsi (detta täcks mer specifikt av 2.3.1, men att kunna stoppa blinkningar här är också relevant).

Att ge användaren kontroll över dessa typer av innehåll är avgörande för att de ska kunna använda sidan utan att bli störda, må dåligt eller hindras från att läsa annat innehåll.

---

## Exempel

### Bildkarusell med kontroller (Rätt) ✅

Ett automatiskt roterande bildspel (karusell) har tydliga knappar för att pausa/starta rotationen, samt knappar för att manuellt gå till nästa/föregående bild.

::code-group{:labels='["Konceptuell HTML (Rätt) ✅"]'}

```html {8-11, 17-33} showLineNumbers
<div class="carousel">
  <div class="slides">
    <!-- Slide 1 -->
    <!-- Slide 2 -->
    <!-- Slide 3 -->
  </div>
  <div class="controls">
    <button class="prev">Föregående</button>
    <button class="play-pause">Pausa</button>
    <!-- Kan växla till "Spela" -->
    <button class="next">Nästa</button>
  </div>
</div>

<!-- JavaScript behövs för att hantera logiken -->
<script>
  // Exempel: Lägg till event listener på play-pause-knappen
  const playPauseBtn = document.querySelector(".play-pause");
  let isPlaying = true; // Antag att den startar automatiskt

  playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
      // Pausa karusellen...
      playPauseBtn.textContent = "Spela";
      isPlaying = false;
      console.log("Karusell pausad.");
    } else {
      // Starta karusellen...
      playPauseBtn.textContent = "Pausa";
      isPlaying = true;
      console.log("Karusell startad.");
    }
  });
  // Lägg även till logik för prev/next och själva rotationen
</script>
```

::
**Resultat:** Användaren kan när som helst pausa det automatiska bytet av bilder och interagera med karusellen i sin egen takt.

### Scrollande nyhetsticker med kontroller (Rätt) ✅

En sektion på sidan visar scrollande nyhetsrubriker. Det finns en tydlig "Paus"-knapp bredvid tickern.

::code-group{:labels='["Konceptuell HTML (Rätt) ✅"]'}

```html {7} showLineNumbers
<div class="news-ticker-container">
  <div class="news-ticker">
    <span>Senaste nytt: Artikel A...</span>
    <span>Artikel B...</span>
    <span>Artikel C...</span>
  </div>
  <button class="ticker-control">Pausa</button>
</div>

<!-- CSS/JavaScript behövs för scroll-animationen och paus-logiken -->
```

::
**Resultat:** Användare som tycker att den scrollande texten är svår att läsa eller distraherande kan pausa den.

### Auto-uppdaterad information med paus (Rätt) ✅

En aktieportföljsida visar kurser som uppdateras automatiskt var 30:e sekund. Det finns en "Pausa uppdateringar"-knapp.

::code-group{:labels='["Konceptuell HTML (Rätt) ✅"]'}

```html {6, } showLineNumbers
<div class="stock-portfolio">
  <h2>Min Portfölj</h2>
  <div id="stockData">
    <!-- Aktiedata laddas här -->
  </div>
  <button id="updateControl">Pausa uppdateringar</button>
</div>

<script>
  let autoUpdateInterval;
  let isUpdating = true;

  function fetchStockData() {
    console.log("Hämtar aktiedata...");
    // ... ladda och visa data ...
  }

  function startUpdates() {
    fetchStockData(); // Hämta direkt
    autoUpdateInterval = setInterval(fetchStockData, 30000); // Uppdatera var 30e sek
    isUpdating = true;
    document.getElementById("updateControl").textContent =
      "Pausa uppdateringar";
  }

  function stopUpdates() {
    clearInterval(autoUpdateInterval);
    isUpdating = false;
    document.getElementById("updateControl").textContent =
      "Återuppta uppdateringar";
  }

  document.getElementById("updateControl").addEventListener("click", () => {
    if (isUpdating) {
      stopUpdates();
    } else {
      startUpdates();
    }
  });

  startUpdates(); // Starta när sidan laddas
</script>
```

::
**Resultat:** Användaren kan stoppa de automatiska uppdateringarna för att kunna läsa informationen i lugn och ro eller för att förhindra distraktion.

### Blinkande annons utan kontroll (Fel) ❌

En animerad GIF-annons som blinkar intensivt och spelas upp i en loop utan någon paus- eller stoppknapp.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<!-- Fel: Blinkande/animerad bild utan kontroller -->
<img src="blinkande-annons.gif" alt="Reklam för Produkt X" />
```

::
**Resultat:** Användaren kan inte stoppa den distraherande eller potentiellt skadliga blinkningen. (Obs: Om blinkningen är tillräckligt intensiv kan den även bryta mot 2.3.1).

### Undantag: Nödvändig animation (Tillåtet) ✅

En animerad progress bar (laddningsindikator) som visar hur långt en filuppladdning har kommit. Animationen är direkt kopplad till processen och slutar när uppladdningen är klar.

::code-group{:labels='["HTML (Tillåtet) ✅"]'}

```html showLineNumbers
<label for="fileProgress">Laddar upp fil:</label>
<progress id="fileProgress" max="100" value="70">70%</progress>
<!-- Animationen (fyllnadsgraden) är nödvändig för att visa status -->
```

::
**Resultat:** Animationen är nödvändig för att förmedla information om processens fortskridande och är därför undantagen från kravet på paus/stopp.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.2.2 Pause, Stop, Hide (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
