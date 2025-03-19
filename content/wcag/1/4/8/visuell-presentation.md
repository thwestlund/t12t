---
title: Visuell presentation
description: För visuell presentation av textblock finns en mekanism för att åstadkomma specifika formateringsval.
level: AAA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 8

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.4.8 Visuell presentation

## Beskrivning

För visuell presentation av textblock finns en mekanism för att åstadkomma följande:

1. Förgrund- och bakgrundsfärger kan väljas av användaren.
2. Bredden överstiger inte 80 tecken eller glyfer (40 för kinesiska, japanska eller koreanska).
3. Text är inte justerad (anpassad till både höger och vänster marginal).
4. Radavståndet är minst 1,5 i textblock och avståndet mellan stycken är minst 1,5 gånger så stort som radavståndet.
5. Textstorlek kan ändras utan hjälpmedelsteknik upp till 200 procent på ett sätt som inte kräver att användaren rullar horisontellt för att läsa en rad i ett fönster med full skärmbredd.

## Varför detta behövs

Personer med dyslexi, andra läs- eller inlärningssvårigheter, eller kognitiva funktionsnedsättningar kan ha svårt att läsa text som inte är optimalt formaterad för deras behov. Även personer med synnedsättningar kan behöva anpassa texten för bättre läsbarhet.

Genom att ge användarna möjlighet att anpassa texten enligt dessa riktlinjer kan du förbättra läsbarheten avsevärt för många. De specifika kriterierna (radlängd, radavstånd, styckesavstånd, textjustering) baseras på forskning om läsbarhet och är särskilt viktiga för personer med lässvårigheter.

Detta kriterium går utöver grundläggande anpassningsbarhet genom att ställa specifika krav på hur text bör kunna presenteras för optimal läsbarhet.

## Exempel

### Exempel på bra implementering

#### Textpresentation med användarkontroller

```html
<div class="article-container">
  <div class="reading-controls">
    <label>
      Textstorlek:
      <select id="font-size-control">
        <option value="100%">Normal</option>
        <option value="125%">Större</option>
        <option value="150%">Mycket större</option>
        <option value="200%">Dubbel storlek</option>
      </select>
    </label>

    <label>
      Färgschema:
      <select id="color-scheme">
        <option value="default">Standard (svart på vitt)</option>
        <option value="dark">Mörkt läge (vitt på svart)</option>
        <option value="sepia">Sepia (mörk text på beige)</option>
        <option value="blue">Blå (gul text på mörkblå)</option>
      </select>
    </label>

    <button id="toggle-justify">Växla textjustering</button>
  </div>

  <article id="readable-content" class="readable-text">
    <h1>Artikelrubrik</h1>
    <p>
      Artikelinnehåll med god läsbarhet. Texten är formaterad med radavstånd på
      1.5 och styckesavstånd på 2.25em. Radlängden är begränsad till max 80
      tecken.
    </p>
    <p>Fler stycken med innehåll...</p>
  </article>
</div>

<style>
  .readable-text {
    max-width: 70ch; /* Ungefär 70-80 tecken per rad */
    line-height: 1.5;
    text-align: left; /* Vänsterjusterad text, inte blocktextjustering */
  }

  .readable-text p {
    margin-bottom: 1.5em; /* Minst 1,5 gånger radavståndet mellan stycken */
  }
</style>

<script>
  // JavaScript för att hantera användarens anpassningar av text
</script>
```

#### CSS som stödjer läsbarhet

```css
/* Grundläggande stilar för god läsbarhet */
.readable-content {
  max-width: 70ch; /* Begränsar textbredden till ca 70-80 tecken */
  line-height: 1.5; /* Radavstånd på 1,5 */
  text-align: left; /* Vänsterjusterad text */
}

.readable-content p {
  margin-bottom: 2.25em; /* 1,5 * radavståndet (1.5) = 2.25 */
}

/* Stöd för olika färgscheman som användaren kan välja */
.light-theme {
  color: #000000;
  background-color: #ffffff;
}

.dark-theme {
  color: #ffffff;
  background-color: #222222;
}

.sepia-theme {
  color: #5b4636;
  background-color: #f4ecd8;
}

/* CSS för att hantera textförstoring upp till 200% utan horisontell scrollning */
@media (max-width: 992px) {
  .readable-content {
    max-width: 100%;
    padding: 0 15px;
  }
}
```

### Exempel på bristande implementering

#### Text utan läsbarhetsstöd

```html
<style>
  .poor-readability {
    width: 100%; /* Kan bli mycket bred på stora skärmar */
    line-height: 1.2; /* För litet radavstånd */
    text-align: justify; /* Blocktextjustering som kan skapa ojämna ordmellanrum */
  }

  .poor-readability p {
    margin-bottom: 0.8em; /* För litet styckesavstånd */
  }

  /* Saknar stöd för användaranpassning av färger */
  /* Saknar stöd för att anpassa textstorlek */
</style>

<div class="poor-readability">
  <p>
    Denna text har dålig läsbarhet med för långa rader, för litet radavstånd,
    blocktextjustering och för litet avstånd mellan stycken. Användaren kan inte
    anpassa färger eller textstorlek.
  </p>
  <p>Mer text i samma format...</p>
</div>
```

#### Fixerad textstorlek som inte kan förstoras

```html
<style>
  .fixed-text {
    font-size: 12px !important; /* Förhindrar förstoring */
    width: 800px; /* Fast bredd */
    white-space: nowrap; /* Text bryter inte om vid förstoring */
  }
</style>

<div class="fixed-text">
  <p>
    Denna text kan inte förstoras ordentligt eftersom storleken är fixerad och
    bredden är fast.
  </p>
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.8 Visual Presentation](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)
- [WebAIM - Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
- [Dyslexia Friendly Style Guide](https://www.dyslexia.com/about-dyslexia/understanding-dyslexia/guide-to-dyslexia-friendly-style/)
- [MDN Web Docs - Readability: The Optimal Line Length](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)
