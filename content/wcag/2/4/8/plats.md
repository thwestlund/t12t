---
title: Plats
description: Information om användarens plats inom en uppsättning webbsidor finns tillgänglig.
level: AAA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 4
guidelineName: Navigerbart
criterionNumber: 8

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.4.8 Plats

## Beskrivning

Information om användarens plats inom en uppsättning webbsidor finns tillgänglig.

## Varför detta behövs

Att veta sin aktuella plats inom en webbplats hjälper användare att förstå var de befinner sig i förhållande till resten av innehållet och hur de kan navigera till andra delar. Detta är särskilt viktigt för:

- Personer med kognitiva funktionsnedsättningar som kan ha svårt att förstå webbplatsens struktur eller minnas tidigare navigationsval
- Personer med inlärningssvårigheter som kan behöva tydliga visuella och textuella ledtrådar om sin position
- Personer med synnedsättningar som kanske inte kan överblicka hela sidan visuellt
- Alla användare, som kan bli desorienterade på komplexa webbplatser

Genom att tillhandahålla tydlig platsinformation ger du användarna en "mental karta" över webbplatsen, vilket hjälper dem att förstå var de är, var de har varit och vart de kan gå härnäst.

## Exempel

### Exempel på bra implementering

#### Brödsmulor (Breadcrumbs)

```html
<nav aria-label="Brödsmulor" class="breadcrumbs">
  <ol>
    <li><a href="/">Hem</a></li>
    <li><a href="/produkter">Produkter</a></li>
    <li><a href="/produkter/elektronik">Elektronik</a></li>
    <li aria-current="page">Mobiltelefoner</li>
  </ol>
</nav>

<style>
  .breadcrumbs ol {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .breadcrumbs li {
    display: flex;
    align-items: center;
  }

  .breadcrumbs li:not(:last-child)::after {
    content: ">";
    margin: 0 0.5em;
  }

  .breadcrumbs [aria-current="page"] {
    font-weight: bold;
    color: #333;
  }
</style>
```

#### Visuell indikation i navigationsmeny

```html
<header>
  <h1>Företagsnamn</h1>

  <nav aria-label="Huvudmeny">
    <ul>
      <li><a href="/">Hem</a></li>
      <li><a href="/om-oss">Om oss</a></li>
      <li class="current-section">
        <a href="/produkter" aria-current="page">Produkter</a>
        <ul class="submenu">
          <li><a href="/produkter/kategori1">Kategori 1</a></li>
          <li><a href="/produkter/kategori2">Kategori 2</a></li>
          <li><a href="/produkter/kategori3">Kategori 3</a></li>
        </ul>
      </li>
      <li><a href="/tjanster">Tjänster</a></li>
      <li><a href="/kontakt">Kontakt</a></li>
    </ul>
  </nav>
</header>

<style>
  .current-section > a {
    font-weight: bold;
    background-color: #f0f0f0;
    border-bottom: 3px solid #0066cc;
  }

  [aria-current="page"] {
    font-weight: bold;
  }
</style>
```

#### Kombination av flera platsindikationer

```html
<body>
  <!-- Brödsmulor -->
  <nav aria-label="Brödsmulor" class="breadcrumbs">
    <ol>
      <li><a href="/">Hem</a></li>
      <li><a href="/hjalp">Hjälp & Support</a></li>
      <li aria-current="page">Vanliga frågor</li>
    </ol>
  </nav>

  <div class="page-layout">
    <!-- Sidmeny med aktuell sida markerad -->
    <nav aria-label="Hjälpnavigation" class="side-nav">
      <h2>Hjälp & Support</h2>
      <ul>
        <li><a href="/hjalp/guider">Användarguider</a></li>
        <li>
          <a href="/hjalp/vanliga-fragor" aria-current="page">Vanliga frågor</a>
        </li>
        <li><a href="/hjalp/kontakta-support">Kontakta support</a></li>
        <li><a href="/hjalp/garantier">Garantiinformation</a></li>
      </ul>
    </nav>

    <main>
      <h1>Vanliga frågor</h1>

      <!-- Markera aktuell sektion i innehållsförteckning -->
      <nav aria-label="På denna sida" class="table-of-contents">
        <h2>På denna sida</h2>
        <ol>
          <li><a href="#konto">Kontofrågor</a></li>
          <li>
            <a href="#bestallningar" aria-current="true">Beställningsfrågor</a>
          </li>
          <li><a href="#leverans">Leveransfrågor</a></li>
          <li><a href="#retur">Returer och återbetalningar</a></li>
        </ol>
      </nav>

      <!-- Innehållssektioner med tydliga rubriker -->
      <section id="konto">
        <h2>Kontofrågor</h2>
        <!-- Innehåll -->
      </section>

      <section id="bestallningar">
        <h2>Beställningsfrågor</h2>
        <p>Du visar nu beställningsfrågor</p>
        <!-- Innehåll -->
      </section>

      <!-- Fler sektioner... -->
    </main>
  </div>

  <!-- Sidfot med navigering och platsinfo -->
  <footer>
    <p>Du är här: Hjälp & Support > Vanliga frågor</p>
  </footer>
</body>

<style>
  [aria-current="page"],
  [aria-current="true"] {
    font-weight: bold;
    background-color: #f0f0f0;
  }
</style>
```

### Exempel på bristande implementering

#### Webbplats utan platsinformation

```html
<!-- Dåligt exempel - ingen indikation på var användaren befinner sig -->
<body>
  <header>
    <h1>Företagsnamn</h1>
    <nav>
      <ul>
        <li><a href="/">Hem</a></li>
        <li><a href="/om-oss">Om oss</a></li>
        <li><a href="/produkter">Produkter</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Produktkategori X</h2>
    <!-- Innehåll utan indikationer på hierarkisk plats -->
    <p>Här är våra produkter i kategori X.</p>

    <div class="products">
      <!-- Produktlistor utan kontext -->
    </div>
  </main>

  <footer>
    <p>&copy; 2023 Företagsnamn</p>
  </footer>
</body>
```

#### Djupt nästlad innehållsstruktur utan vägledning

```html
<!-- Dåligt exempel - djupt nästlad struktur utan platsinformation -->
<body>
  <header>
    <h1>Kunskapsdatabas</h1>

    <!-- Endast huvudkategorier, ingen indikation på aktuell position -->
    <nav>
      <ul>
        <li><a href="/kategori1">Kategori 1</a></li>
        <li><a href="/kategori2">Kategori 2</a></li>
        <li><a href="/kategori3">Kategori 3</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Hjälpartikel 4.2.7</h2>

    <!-- Innehåll utan kontext inom större struktur -->
    <article>
      <p>Denna artikel förklarar en specifik funktion...</p>
      <!-- Mer innehåll utan indikation på plats i hierarkin -->
    </article>

    <!-- Navigationspilar utan kontext -->
    <div class="navigation">
      <a href="previous-page.html">Föregående</a>
      <a href="next-page.html">Nästa</a>
    </div>
  </main>
</body>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.4.8 Location](https://www.w3.org/WAI/WCAG22/Understanding/location.html)
- [Nielsen Norman Group - Breadcrumbs: 11 Design Guidelines for Desktop and Mobile](https://www.nngroup.com/articles/breadcrumbs/)
- [W3C WAI - Navigational Mechanisms](https://www.w3.org/WAI/tutorials/menus/structure/)
- [UX Booth - Wayfinding for the Web](https://www.uxbooth.com/articles/wayfinding-for-the-web/)
