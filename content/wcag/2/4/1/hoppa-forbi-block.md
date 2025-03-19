---
title: Hoppa förbi block
description: En mekanism finns tillgänglig för att kringgå block med innehåll som upprepas på flera webbsidor.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 4
guidelineName: Navigerbart
criterionNumber: 1

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.4.1 Hoppa förbi block

## Beskrivning

En mekanism finns tillgänglig för att kringgå block med innehåll som upprepas på flera webbsidor.

## Varför detta behövs

För tangentbordsanvändare och personer som använder skärmläsare kan det vara extremt tidsödande och frustrerande att behöva navigera genom samma navigationsmenyer, sidhuvuden och andra repeterade element på varje sida innan de kommer till det unika innehållet.

En typisk webbplats kan ha en navigeringsmeny med dussintals länkar, vilket betyder att en tangentbordsanvändare måste trycka på Tab-tangenten många gånger för att nå huvudinnehållet på varje sida. För en skärmläsaranvändare innebär det att lyssna på alla dessa länkar läsas upp på varje sida.

Genom att tillhandahålla en mekanism för att hoppa över dessa upprepade block förbättras användbarheten och tillgängligheten avsevärt för:

- Personer med motoriska funktionsnedsättningar som använder tangentbord
- Personer med synnedsättningar som använder skärmläsare
- Personer med kognitiva funktionsnedsättningar som kan bli förvirrade av att behöva navigera genom samma innehåll upprepade gånger

## Exempel

### Exempel på bra implementering

#### Hoppa till innehållet-länk

```html
<body>
  <a href="#main-content" class="skip-link">Hoppa till huvudinnehåll</a>

  <header>
    <nav aria-label="Huvudnavigation">
      <!-- Navigationsmenyer och andra återkommande element -->
    </nav>
  </header>

  <main id="main-content" tabindex="-1">
    <h1>Sidtitel</h1>
    <!-- Huvudinnehåll på sidan -->
  </main>

  <footer>
    <!-- Sidfot med ytterligare länkar och information -->
  </footer>
</body>

<style>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    padding: 8px;
    background-color: #f8f9fa;
    color: #0066cc;
    z-index: 100;
    transition: top 0.2s;
  }

  .skip-link:focus {
    top: 0;
  }

  /* Säkerställ att målelementet kan få fokus */
  #main-content:focus {
    outline: none;
  }
</style>
```

#### Flera hoppa till-länkar för olika sektioner

```html
<body>
  <div class="skip-links">
    <a href="#main-content">Hoppa till huvudinnehåll</a>
    <a href="#nav">Hoppa till navigation</a>
    <a href="#search">Hoppa till sök</a>
  </div>

  <header>
    <!-- Sidhuvud -->
    <form id="search" role="search">
      <label for="search-input">Sök:</label>
      <input type="search" id="search-input" />
      <button type="submit">Sök</button>
    </form>
  </header>

  <nav id="nav" aria-label="Huvudnavigation">
    <!-- Navigationsmenyer -->
  </nav>

  <main id="main-content" tabindex="-1">
    <!-- Huvudinnehåll -->
  </main>
</body>

<style>
  .skip-links {
    position: absolute;
    top: -100px; /* Döljs utanför skärmen som standard */
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
  }

  .skip-links a {
    position: absolute;
    top: -40px;
    left: 0;
    padding: 10px;
    background-color: #ffffff;
    border: 2px solid #0066cc;
    color: #0066cc;
    text-decoration: none;
    transition: top 0.3s;
  }

  .skip-links a:focus {
    position: relative;
    top: 0;
  }
</style>
```

#### Landmärken och regionnavigering

```html
<body>
  <a href="#main-content" class="visually-hidden skip-link"
    >Hoppa till huvudinnehåll</a
  >

  <header role="banner">
    <h1>Webbplatsens namn</h1>
  </header>

  <nav role="navigation" aria-label="Huvudmeny">
    <ul>
      <li><a href="/">Hem</a></li>
      <li><a href="/om-oss">Om oss</a></li>
      <li><a href="/produkter">Produkter</a></li>
      <li><a href="/kontakt">Kontakt</a></li>
    </ul>
  </nav>

  <aside role="complementary" aria-label="Relaterad information">
    <h2>Relaterade länkar</h2>
    <ul>
      <li><a href="/nyhetsbrev">Nyhetsbrev</a></li>
      <li><a href="/evenemang">Kommande evenemang</a></li>
    </ul>
  </aside>

  <main id="main-content" role="main" tabindex="-1">
    <h2>Välkommen till vår webbplats</h2>
    <p>Huvudinnehåll här...</p>
  </main>

  <footer role="contentinfo">
    <p>&copy; 2023 Företagsnamn. Alla rättigheter förbehållna.</p>
  </footer>
</body>

<style>
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .visually-hidden.skip-link:focus {
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto;
    padding: 10px;
    background-color: #ffffff;
    color: #0066cc;
    z-index: 999;
  }
</style>
```

### Exempel på bristande implementering

#### Ingen möjlighet att hoppa över navigation

```html
<!-- Dåligt exempel - ingen möjlighet att hoppa över återkommande innehåll -->
<body>
  <header>
    <h1>Webbplatsens namn</h1>
  </header>

  <nav>
    <!-- Stort antal navigationslänkar som måste tabbaserad igenom på varje sida -->
    <ul>
      <li><a href="/">Hem</a></li>
      <li><a href="/om-oss">Om oss</a></li>
      <li><a href="/produkter">Produkter</a></li>
      <li><a href="/tjanster">Tjänster</a></li>
      <li><a href="/blogg">Blogg</a></li>
      <li><a href="/kontakt">Kontakt</a></li>
      <!-- Ytterligare navigationslänkar... -->
    </ul>
  </nav>

  <!-- Huvudinnehåll utan ID eller landmärksattribut -->
  <div>
    <h2>Välkommen till vår webbplats</h2>
    <p>Innehåll här...</p>
  </div>
</body>
```

#### Dold hoppa till-länk som inte visas vid fokus

```html
<!-- Dåligt exempel - hoppa till-länk som förblir dold även vid fokus -->
<body>
  <a href="#main" class="hidden-link">Hoppa till innehåll</a>

  <header>
    <!-- Sidhuvud -->
  </header>

  <nav>
    <!-- Navigation -->
  </nav>

  <div id="main">
    <h1>Huvudinnehåll</h1>
    <!-- Innehåll -->
  </div>
</body>

<style>
  .hidden-link {
    display: none; /* Fullständigt dold, även vid fokus */
  }
</style>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)
- [WebAIM - Skip Navigation Links](https://webaim.org/techniques/skipnav/)
- [Webbriktlinjer - Erbjud möjlighet att hoppa förbi återkommande innehåll](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/erbjud-mojlighet-att-hoppa-forbi-aterkommande-innehall)
- [W3C WAI - HTML5 Landmarks Example](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html)
