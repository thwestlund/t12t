---
title: Flera sätt
description: Det finns mer än ett sätt att hitta en webbsida i en uppsättning webbsidor.
level: AA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 4
guidelineName: Navigerbart
criterionNumber: 5

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.4.5 Flera sätt

## Beskrivning

Det finns mer än ett sätt att hitta en webbsida i en uppsättning webbsidor, förutom när webbsidan är resultatet av, eller ett steg i, en process.

## Varför detta behövs

Olika användare har olika förmågor, preferenser och behov när det gäller att navigera på en webbplats. Genom att erbjuda flera sätt att hitta innehåll kan användare välja den navigationsmetod som fungerar bäst för deras specifika situation.

Att erbjuda olika navigationsmetoder är särskilt fördelaktigt för:

- Personer med kognitiva funktionsnedsättningar som kan föredra konsekvent hierarkisk navigation
- Personer med synnedsättningar som kan föredra sökfunktionalitet
- Personer med motoriska funktionsnedsättningar som kan ha svårt med vissa typer av navigationsmekanismer
- Personer med inlärningssvårigheter som kan föredra en innehållsförteckning eller webbkarta

Genom att erbjuda flera navigationsalternativ ökar du användbarheten för alla användare och säkerställer att ingen utesluts på grund av sin föredragna navigationsmetod.

## Exempel

### Exempel på bra implementering

#### Webbplats med flera navigationsmekanismer

```html
<body>
  <header>
    <h1>Företagsnamn</h1>

    <!-- Navigationsmetod 1: Huvudmeny -->
    <nav aria-label="Huvudmeny">
      <ul>
        <li><a href="/">Hem</a></li>
        <li><a href="/produkter">Produkter</a></li>
        <li><a href="/tjanster">Tjänster</a></li>
        <li><a href="/om-oss">Om oss</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
    </nav>

    <!-- Navigationsmetod 2: Sökfunktion -->
    <form role="search" aria-label="Webbplatssökning">
      <label for="search">Sök:</label>
      <input type="search" id="search" name="q" />
      <button type="submit">Sök</button>
    </form>
  </header>

  <main>
    <h2>Välkommen till vår webbplats</h2>
    <!-- Innehåll -->
  </main>

  <aside>
    <!-- Navigationsmetod 3: Relaterade länkar -->
    <nav aria-label="Relaterade sidor">
      <h3>Relaterade sidor</h3>
      <ul>
        <li><a href="/blogg">Vår blogg</a></li>
        <li><a href="/nyheter">Senaste nytt</a></li>
        <li><a href="/kundcase">Kundcase</a></li>
      </ul>
    </nav>
  </aside>

  <footer>
    <!-- Navigationsmetod 4: Fotnavigation -->
    <nav aria-label="Fotmeny">
      <ul>
        <li><a href="/sitemap">Webbkarta</a></li>
        <li><a href="/a-o">A till Ö</a></li>
        <li><a href="/vanliga-fragor">Vanliga frågor</a></li>
        <li><a href="/cookies">Cookies</a></li>
        <li><a href="/integritetspolicy">Integritetspolicy</a></li>
      </ul>
    </nav>
  </footer>
</body>
```

#### Produktsida med flera navigationsalternativ

```html
<div class="product-page">
  <!-- Navigationsmetod 1: Brödsmulor -->
  <nav aria-label="Brödsmulor" class="breadcrumbs">
    <ol>
      <li><a href="/">Hem</a></li>
      <li><a href="/produkter">Produkter</a></li>
      <li><a href="/produkter/mobiler">Mobiltelefoner</a></li>
      <li aria-current="page">MobilX Pro</li>
    </ol>
  </nav>

  <!-- Produktinformation -->
  <main>
    <h1>MobilX Pro</h1>
    <!-- Produktinnehåll -->
  </main>

  <!-- Navigationsmetod 2: Kategorinavigation -->
  <aside>
    <nav aria-label="Produktkategorier">
      <h2>Produktkategorier</h2>
      <ul>
        <li><a href="/produkter/mobiler">Mobiltelefoner</a></li>
        <li><a href="/produkter/surfplattor">Surfplattor</a></li>
        <li><a href="/produkter/laptops">Laptops</a></li>
        <li><a href="/produkter/tillbehor">Tillbehör</a></li>
      </ul>
    </nav>
  </aside>

  <!-- Navigationsmetod 3: Relaterade produkter -->
  <section aria-labelledby="related-title">
    <h2 id="related-title">Relaterade produkter</h2>
    <ul class="product-grid">
      <li>
        <a href="/produkt/mobilx-lite">
          <img src="mobilx-lite.jpg" alt="MobilX Lite" />
          <div>MobilX Lite</div>
        </a>
      </li>
      <li>
        <a href="/produkt/mobilx-tillbehor">
          <img src="tillbehor.jpg" alt="MobilX Tillbehör" />
          <div>MobilX Tillbehör</div>
        </a>
      </li>
    </ul>
  </section>

  <!-- Navigationsmetod 4: Taggar -->
  <section aria-labelledby="tags-title">
    <h2 id="tags-title">Relaterade taggar</h2>
    <ul class="tag-list">
      <li><a href="/tag/smartphone">smartphone</a></li>
      <li><a href="/tag/android">android</a></li>
      <li><a href="/tag/5g">5G</a></li>
      <li><a href="/tag/mobilx">mobilx</a></li>
    </ul>
  </section>
</div>
```

### Exempel på bristande implementering

#### Webbplats med endast en navigationsväg

```html
<!-- Dåligt exempel - endast en navigationsmetod -->
<body>
  <header>
    <h1>Företagsnamn</h1>

    <!-- Endast en navigationsmetod: Huvudmeny -->
    <nav>
      <ul>
        <li><a href="/">Hem</a></li>
        <li><a href="/avdelning1">Avdelning 1</a></li>
        <li><a href="/avdelning2">Avdelning 2</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Välkommen</h2>
    <p>Innehåll här...</p>
    <!-- Inga alternativa navigationsvägar som sök, webbkarta, eller tagglistor -->
  </main>

  <footer>
    <p>&copy; 2023 Företagsnamn</p>
    <!-- Ingen ytterligare navigation i sidfoten -->
  </footer>
</body>
```

#### Djupt nästlad innehållssida utan alternativa vägar

```html
<!-- Dåligt exempel - djupt nästlad sida utan alternativa navigationsvägar -->
<body>
  <header>
    <h1>Teknisk dokumentation</h1>
    <nav>
      <ul>
        <li><a href="/">Dokumentationsportal</a></li>
        <li><a href="/manualer">Manualer</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Installation av komponent B i system X</h2>
    <p>Detaljerade instruktioner här...</p>

    <!-- Endast en väg hit och ingen tydlig väg tillbaka -->
    <div class="pagination">
      <a href="tidigare-steg.html">Föregående</a>
      <a href="nasta-steg.html">Nästa</a>
    </div>
  </main>

  <!-- Inga brödsmulor, sökfunktion, relaterade länkar, eller webbkarta -->
</body>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html)
- [Webbriktlinjer - Erbjud användarna flera olika sätt att navigera](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/erbjud-anvandarna-flera-olika-satt-att-navigera)
- [Nielsen Norman Group - Site Maps](https://www.nngroup.com/articles/site-map-usability/)
- [UX Planet - Navigation Design: How to Create a User-Friendly Website](https://uxplanet.org/navigation-design-how-to-create-a-user-friendly-website-2e891b0c05af)
