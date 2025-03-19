---
title: Innehåll vid hovring eller fokus
description: När ytterligare innehåll visas vid hovring eller tangentbordsfokus och sedan döljs, gäller specifika krav.
level: AA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 13

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.4.13 Innehåll vid hovring eller fokus

## Beskrivning

När ytterligare innehåll visas och sedan döljs vid hovring med pekare eller tangentbordsfokus, gäller följande:

- **Dismissable:** Det finns en mekanism för att avfärda (stänga) det extra innehållet utan att flytta pek- eller tangentbordsfokus, såvida inte det extra innehållet förmedlar ett inmatningsfel eller inte döljer eller ersätter annat innehåll.
- **Hoverable:** Om pekhovring kan utlösa det extra innehållet, kan pekaren flyttas över det extra innehållet utan att innehållet försvinner.
- **Persistent:** Det extra innehållet förblir synligt tills hovringen eller fokuseringen flyttas bort, användaren avfärdar det, eller dess information inte längre är giltig.

## Varför detta behövs

När extra innehåll visas vid hovring eller fokus (t.ex. tooltips, dropdown-menyer), är det viktigt att användare kan interagera med detta innehåll utan att det försvinner oväntat. Detta är särskilt viktigt för personer med motoriska funktionsnedsättningar som kan ha svårt att hålla muspekaren stilla, eller användare som behöver tid att läsa och förstå innehållet. Genom att följa dessa tre principer säkerställer man att alla användare kan ta del av det extra innehållet på ett användbart sätt.

## Exempel

### Exempel på bra implementering

#### Tooltip med kontroll och kvarstannande innehåll

```html
<style>
  .tooltip-container {
    position: relative;
    display: inline-block;
  }

  .tooltip {
    position: absolute;
    left: 0;
    top: 100%;
    width: 250px;
    background-color: #333;
    color: white;
    padding: 10px;
    border-radius: 4px;
    display: none;
    z-index: 100;
  }

  .tooltip-container:hover .tooltip,
  .tooltip-container:focus-within .tooltip,
  .tooltip.active {
    display: block;
  }

  .close-tooltip {
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
</style>

<div class="tooltip-container">
  <button aria-describedby="help-tip">Hjälp</button>

  <div id="help-tip" class="tooltip" role="tooltip">
    <button class="close-tooltip" aria-label="Stäng hjälptips">×</button>
    <p>
      Detta är ett hjälptips som förklarar funktionen. Du kan hovra över denna
      text utan att den försvinner.
    </p>
  </div>
</div>

<script>
  // Stäng tooltip med ESC eller när stängknappen klickas
  document
    .querySelector(".close-tooltip")
    .addEventListener("click", function (e) {
      e.stopPropagation(); // Förhindra att klicken påverkar föräldraelement
      this.closest(".tooltip").classList.remove("active");
    });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".tooltip").forEach(function (tooltip) {
        tooltip.classList.remove("active");
      });
    }
  });
</script>
```

#### Dropdown-meny som stannar öppen

```html
<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown:hover .dropdown-content,
  .dropdown:focus-within .dropdown-content,
  .dropdown-content.active {
    display: block;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover,
  .dropdown-content a:focus {
    background-color: #f1f1f1;
  }

  .close-dropdown {
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    cursor: pointer;
  }
</style>

<div class="dropdown">
  <button
    class="dropdown-button"
    aria-expanded="false"
    aria-controls="dropdown-menu"
  >
    Meny
  </button>

  <div id="dropdown-menu" class="dropdown-content">
    <button class="close-dropdown" aria-label="Stäng meny">×</button>
    <a href="#">Länk 1</a>
    <a href="#">Länk 2</a>
    <a href="#">Länk 3</a>
  </div>
</div>

<script>
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Uppdatera aria-expanded när dropdown öppnas/stängs
  dropdownButton.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !expanded);

    if (!expanded) {
      dropdownContent.classList.add("active");
    } else {
      dropdownContent.classList.remove("active");
    }
  });

  // Stäng dropdown när stängknappen klickas
  document
    .querySelector(".close-dropdown")
    .addEventListener("click", function (e) {
      e.stopPropagation();
      dropdownContent.classList.remove("active");
      dropdownButton.setAttribute("aria-expanded", "false");
    });

  // Stäng dropdown med ESC-tangenten
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      dropdownButton.getAttribute("aria-expanded") === "true"
    ) {
      dropdownContent.classList.remove("active");
      dropdownButton.setAttribute("aria-expanded", "false");
    }
  });
</script>
```

### Exempel på bristande implementering

#### Tooltip som försvinner när man försöker hovra över den

```html
<style>
  .info-icon {
    position: relative;
    display: inline-block;
    cursor: help;
  }

  .tooltip {
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 5px;
    border-radius: 4px;
    width: 200px;
    display: none;
  }

  .info-icon:hover .tooltip {
    display: block;
  }

  /* När användaren försöker hovra över tooltppen försvinner den */
</style>

<span class="info-icon">
  i
  <span class="tooltip"
    >Denna tooltip försvinner om du försöker hovra över den eftersom den är
    kopplad till hover på förälderelementet.</span
  >
</span>
```

#### Dropdown utan stängfunktion

```html
<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>

<div class="dropdown">
  <button>Meny</button>

  <div class="dropdown-content">
    <!-- Ingen stängknapp eller ESC-hantering -->
    <a href="#">Länk 1</a>
    <a href="#">Länk 2</a>
    <a href="#">Länk 3</a>
  </div>
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
- [Webbriktlinjer - R143: Utforma responsiva formulärkontroller och menyer](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/utforma-responsiva-formularkontroller-och-menyer)
