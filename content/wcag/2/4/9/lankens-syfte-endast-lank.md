---
title: Länkens syfte (endast länk)
description: En mekanism finns tillgänglig för att identifiera syftet med varje länk enbart från länktexten.
level: AAA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 4
guidelineName: Navigerbart
criterionNumber: 9
---

# Framgångskriterium 2.4.9 Länkens syfte (endast länk)

## Beskrivning

En mekanism finns tillgänglig för att identifiera syftet med varje länk enbart från länktexten, förutom där länkens syfte skulle vara tvetydigt för användare i allmänhet.

## Varför detta behövs

Tydliga och beskrivande länktexter hjälper alla användare att förstå vart en länk leder utan att behöva förlita sig på omgivande kontext. Detta är särskilt viktigt för:

- Personer som använder skärmläsare, som ofta navigerar genom att hoppa från länk till länk utan att läsa omgivande text
- Personer med kognitiva funktionsnedsättningar som kan ha svårt att förstå vaga länktexter eller minnas kontexten
- Personer som använder röststyrning, där kommandot "klicka på [länktext]" kräver att länktexten är unik och beskrivande
- Personer som föredrar att skanna en sida efter länkar istället för att läsa all text

Till skillnad från 2.4.4 (Länkens syfte, i kontext), som tillåter att länkens syfte förstås från omgivande innehåll, kräver detta kriterium att varje länk ska kunna förstås självständigt, utan någon ytterligare kontext.

## Exempel

### Exempel på bra implementering

#### Beskrivande länkar med tydligt syfte

```html
<p>
  Vår nya produktkatalog för 2023 finns nu tillgänglig.
  <a href="/katalog/2023.pdf">Ladda ner produktkatalogen 2023 (PDF, 3.2 MB)</a>
</p>

<p>
  För mer information om leveransalternativ, besök
  <a href="/leverans">Vår leveransinformation</a>.
</p>

<p>
  Om du har frågor, kan du
  <a href="/kontakt">Kontakta vår kundtjänst</a>.
</p>

<div class="news-items">
  <article>
    <h3>Nytt samarbetsavtal undertecknat</h3>
    <p>Vi har tecknat ett samarbetsavtal med...</p>
    <a href="/nyheter/samarbetsavtal-2023">Läs mer om samarbetsavtalet</a>
  </article>

  <article>
    <h3>Produktlansering i september</h3>
    <p>I september lanserar vi...</p>
    <a href="/nyheter/produktlansering-september"
      >Läs mer om produktlanseringen i september</a
    >
  </article>
</div>
```

#### Länkar med kompletterande information i aria-label

```html
<nav aria-label="Produktkategorier">
  <ul>
    <li>
      <a href="/mobiler" aria-label="Utforska alla mobiltelefoner"
        >Mobiltelefoner</a
      >
    </li>
    <li>
      <a href="/laptops" aria-label="Utforska alla laptops och bärbara datorer"
        >Laptops</a
      >
    </li>
    <li>
      <a
        href="/tillbehor"
        aria-label="Se alla tillbehör till elektronikprodukter"
        >Tillbehör</a
      >
    </li>
  </ul>
</nav>

<div class="popular-articles">
  <h2>Populära artiklar</h2>
  <ul>
    <li>
      <a
        href="/artikel-1"
        aria-label="Läs artikeln: Så väljer du rätt mobiltelefon"
        >Så väljer du rätt mobiltelefon</a
      >
    </li>
    <li>
      <a
        href="/artikel-2"
        aria-label="Läs artikeln: Jämförelse mellan olika laptopmodeller"
        >Jämförelse mellan olika laptopmodeller</a
      >
    </li>
  </ul>
</div>
```

#### Länktext som inkluderar filtyp och storlek

```html
<div class="downloads">
  <h2>Dokument för nedladdning</h2>
  <ul>
    <li>
      <a href="/dokument/arsredovisning.pdf"
        >Årsredovisning 2022 (PDF, 4.2 MB)</a
      >
    </li>
    <li>
      <a href="/dokument/installationsguide.pdf"
        >Installationsguide för produkt XYZ (PDF, 1.8 MB)</a
      >
    </li>
    <li>
      <a href="/dokument/presentation.pptx"
        >Företagspresentation (PowerPoint, 6.5 MB)</a
      >
    </li>
    <li>
      <a href="/dokument/produktdata.xlsx"
        >Produktspecifikationer (Excel, 782 KB)</a
      >
    </li>
  </ul>
</div>
```

### Exempel på bristande implementering

#### Vaga och oklara länkar

```html
<!-- Dåligt exempel - länkar som inte är beskrivande i sig själva -->
<p>
  Vi har nyligen uppdaterat vår integritetspolicy.
  <a href="/integritetspolicy">Klicka här</a> för att läsa den uppdaterade
  versionen.
</p>

<p>
  För ytterligare information om våra tjänster,
  <a href="/tjanster">läs mer</a>.
</p>

<div class="news-items">
  <article>
    <h3>Sommarkampanj</h3>
    <p>Nu lanserar vi vår stora sommarkampanj med rabatter på...</p>
    <a href="/kampanj-sommar">Mer</a>
  </article>

  <article>
    <h3>Nya öppettider</h3>
    <p>Från och med juni ändrar vi våra öppettider till...</p>
    <a href="/oppettider">Mer</a>
  </article>
</div>
```

#### Duplicerade länktexter för olika destinationer

```html
<!-- Dåligt exempel - samma länktext för olika destinationer -->
<div class="products">
  <div class="product">
    <h3>Produkt A</h3>
    <p>Beskrivning av produkt A...</p>
    <a href="/produkter/produkt-a">Mer information</a>
  </div>

  <div class="product">
    <h3>Produkt B</h3>
    <p>Beskrivning av produkt B...</p>
    <a href="/produkter/produkt-b">Mer information</a>
  </div>

  <div class="product">
    <h3>Produkt C</h3>
    <p>Beskrivning av produkt C...</p>
    <a href="/produkter/produkt-c">Mer information</a>
  </div>
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.4.9 Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html)
- [WebAIM - Links and Hypertext](https://webaim.org/techniques/hypertext/)
- [W3C WAI - Writing Good Link Text](https://www.w3.org/WAI/tips/writing/#create-good-link-text)
- [Webbriktlinjer - Skriv beskrivande länktexter](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/skriv-beskrivande-lanktexter)
