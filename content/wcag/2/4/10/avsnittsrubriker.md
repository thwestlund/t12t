---
title: Avsnittsrubriker
description: Avsnittsrubriker används för att organisera innehållet.
level: AAA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 4
guidelineName: Navigerbart
criterionNumber: 10
---

# Framgångskriterium 2.4.10 Avsnittsrubriker

## Beskrivning

Avsnittsrubriker används för att organisera innehållet.

## Varför detta behövs

Tydliga och välstrukturerade rubriker hjälper användare att förstå innehållets organisation och att enklare hitta den information de söker. Detta är särskilt viktigt för:

- Personer med kognitiva funktionsnedsättningar som kan ha lättare att förstå och bearbeta innehåll när det är välorganiserat
- Personer med inlärningssvårigheter som kan behöva tydliga markörer för att identifiera innehållssektioner
- Personer som använder skärmläsare, som ofta navigerar genom en sida med hjälp av rubriker
- Personer med koncentrationssvårigheter som kan bli överväldigade av stora textsjok utan tydlig struktur

Välorganiserat innehåll med tydliga rubriker förbättrar också läsbarheten och användbarheten för alla, oavsett funktionsförmåga.

Det är viktigt att notera att detta kriterium inte kräver rubriker på alla sidor eller i alla avsnitt, utan endast att rubriker används när innehållet behöver organiseras i olika sektioner. När rubriker väl används, måste de användas korrekt för att ge en tydlig innehållsstruktur.

## Exempel

### Exempel på bra implementering

#### Välstrukturerad artikel med hierarkiska rubriker

```html
<article>
  <h1>Guide till hållbart byggande</h1>

  <p>Introduktion till artikeln och översikt av innehållet...</p>

  <section>
    <h2>1. Energieffektiva material</h2>
    <p>Information om energieffektiva byggmaterial...</p>

    <section>
      <h3>1.1 Isoleringsmaterial</h3>
      <p>Detaljer om olika typer av isolering...</p>
    </section>

    <section>
      <h3>1.2 Fönster och dörrar</h3>
      <p>Information om energieffektiva fönster och dörrar...</p>
    </section>
  </section>

  <section>
    <h2>2. Förnybara energikällor</h2>
    <p>Översikt av förnybara energialternativ för byggnader...</p>

    <section>
      <h3>2.1 Solenergi</h3>
      <p>Information om solceller och solvärme...</p>
    </section>

    <section>
      <h3>2.2 Geotermisk energi</h3>
      <p>Fördelar med jordvärme och installation...</p>
    </section>
  </section>

  <section>
    <h2>3. Vattenhantering</h2>
    <p>Strategier för effektiv vattenanvändning i byggnader...</p>
  </section>

  <section>
    <h2>Sammanfattning</h2>
    <p>Viktiga slutsatser och rekommendationer...</p>
  </section>
</article>
```

#### FAQ-sida med tydlig rubrikstruktur

```html
<main>
  <h1>Vanliga frågor</h1>

  <p>Här hittar du svar på de vanligaste frågorna om våra tjänster.</p>

  <section>
    <h2>Leverans och frakt</h2>

    <article>
      <h3>Vad kostar frakten?</h3>
      <p>Våra fraktavgifter beror på leveransadress och paketets storlek...</p>
    </article>

    <article>
      <h3>Hur lång tid tar leveransen?</h3>
      <p>Normal leveranstid är 2-4 arbetsdagar inom Sverige...</p>
    </article>
  </section>

  <section>
    <h2>Betalning</h2>

    <article>
      <h3>Vilka betalningsmetoder accepterar ni?</h3>
      <p>
        Vi accepterar alla större kredit- och betalkort, Swish, och faktura via
        Klarna...
      </p>
    </article>

    <article>
      <h3>När dras pengarna från mitt konto?</h3>
      <p>Betalningen dras när din order skickas från vårt lager...</p>
    </article>
  </section>

  <section>
    <h2>Returer och återbetalningar</h2>

    <article>
      <h3>Hur returnerar jag en produkt?</h3>
      <p>
        Du kan enkelt returnera din produkt inom 30 dagar efter mottagande...
      </p>
    </article>

    <article>
      <h3>Hur snabbt får jag min återbetalning?</h3>
      <p>
        När vi har tagit emot din retur behandlas återbetalningen inom 7
        arbetsdagar...
      </p>
    </article>
  </section>
</main>
```

#### Dokumentation med numrerade rubriker

```html
<div class="documentation">
  <h1>Användarmanual: Produktnamn</h1>

  <div class="toc">
    <h2>Innehållsförteckning</h2>
    <nav>
      <ul>
        <li><a href="#section1">1. Installation</a></li>
        <li><a href="#section2">2. Komma igång</a></li>
        <li><a href="#section3">3. Avancerade funktioner</a></li>
        <li><a href="#section4">4. Felsökning</a></li>
      </ul>
    </nav>
  </div>

  <section id="section1">
    <h2>1. Installation</h2>
    <p>Följ dessa steg för att installera produkten...</p>

    <section>
      <h3>1.1 Systemkrav</h3>
      <p>För att använda produkten behöver du...</p>
    </section>

    <section>
      <h3>1.2 Installationsprocess</h3>
      <p>Installationsprocessen består av följande steg...</p>
    </section>
  </section>

  <section id="section2">
    <h2>2. Komma igång</h2>
    <p>När produkten är installerad kan du börja använda den genom att...</p>
  </section>

  <section id="section3">
    <h2>3. Avancerade funktioner</h2>
    <p>Utforska produktens avancerade funktioner...</p>
  </section>

  <section id="section4">
    <h2>4. Felsökning</h2>
    <p>Om du stöter på problem, följ dessa felsökningssteg...</p>
  </section>
</div>
```

### Exempel på bristande implementering

#### Innehåll utan rubriker

```html
<!-- Dåligt exempel - långt innehåll utan rubriker -->
<div class="content">
  <p>Introduktion till ämnet...</p>

  <p>
    Första avsnittet med information om ett specifikt delämne. Här finns mycket
    text som förklarar olika aspekter...
  </p>

  <p>
    Andra avsnittet som behandlar ett annat delämne. Mer detaljerad information
    presenteras här om olika faktorer att överväga...
  </p>

  <p>
    Tredje avsnittet som fokuserar på ytterligare aspekter. Läsaren får här ännu
    mer information utan tydlig struktur...
  </p>

  <p>Slutsatser och rekommendationer...</p>
</div>
```

#### Felaktig rubrikhierarki

```html
<!-- Dåligt exempel - inkonsekvent och hoppad rubrikhierarki -->
<article>
  <h1>Huvudrubrik för artikeln</h1>

  <p>Introduktion till ämnet...</p>

  <!-- Hoppar från h1 till h3 -->
  <h3>Första avsnittet</h3>
  <p>Information om första avsnittet...</p>

  <!-- Backar till h2 -->
  <h2>Andra avsnittet</h2>
  <p>Information om andra avsnittet...</p>

  <!-- Hoppar från h2 till h4 -->
  <h4>Tredje avsnittet</h4>
  <p>Information om tredje avsnittet...</p>

  <!-- Rubriker utan innehållsstruktur -->
  <h3>Sammanfattning</h3>
  <h3>Rekommendationer</h3>
  <p>Några rekommendationer baserade på informationen...</p>
</article>
```

#### Stiliserade stycken istället för rubriker

```html
<!-- Dåligt exempel - användning av stiliserad text istället för semantiska rubriker -->
<div class="document">
  <p class="title">Produktöversikt</p>

  <p>Generell information om produktsortimentet...</p>

  <p class="section-title">Produktkategori A</p>
  <p>Information om produkter i kategori A...</p>

  <p class="section-title">Produktkategori B</p>
  <p>Information om produkter i kategori B...</p>

  <p class="section-title">Produktkategori C</p>
  <p>Information om produkter i kategori C...</p>
</div>

<style>
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    /* Stiliserad som en rubrik men utan semantik */
  }

  .section-title {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    /* Stiliserad som en rubrik men utan semantik */
  }
</style>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.4.10 Section Headings](https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html)
- [W3C WAI - Page Structure Concepts](https://www.w3.org/WAI/tutorials/page-structure/)
- [WebAIM - Semantic Structure](https://webaim.org/techniques/semanticstructure/)
- [MDN Web Docs - Rubriker och landmärken](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#text_content)
