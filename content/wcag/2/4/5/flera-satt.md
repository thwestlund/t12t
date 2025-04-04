---
title: 2.4.5 Flera sätt
description: Erbjud mer än ett sätt att hitta en specifik webbsida inom en uppsättning webbsidor, förutom när sidan är ett steg i en process.
level: AA
slug: flera-satt
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "flera sätt",
    "multiple ways",
    "navigation",
    "sökfunktion",
    "webbplatskarta",
    "site map",
    "länklista",
    "orientering",
    "operabel",
    "navigerbar",
  ]
canonical: https://t12t.dev/wcag/2/4/5/flera-satt

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 5

og:
  title: 2.4.5 Flera sätt – WCAG
  description: Erbjud mer än ett sätt att hitta webbsidor inom en webbplats.
  url: https://t12t.dev/wcag/2/4/5/flera-satt
  type: article

datePublished: 2025-05-29
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Flera sätt

## Beskrivning

Det finns mer än ett sätt att hitta en specifik webbsida inom en uppsättning webbsidor (en webbplats), förutom när webbsidan är resultatet av, eller ett steg i, en process.

Detta innebär att användare ska kunna nå en sida på webbplatsen via minst två olika metoder. Vanliga metoder inkluderar:

1.  **Huvudnavigation:** Menyer och länkar som finns konsekvent på (nästan) alla sidor.
2.  **Sökfunktion:** En möjlighet att söka efter innehåll på webbplatsen.
3.  **Webbplatskarta (Site map):** En sida som listar alla (eller de viktigaste) sidorna på webbplatsen i en hierarkisk struktur.
4.  **Länklista:** En lista över alla sidor (kan likna en webbplatskarta).
5.  **Relaterade länkar:** Länkar inom innehållet som pekar till andra relevanta sidor på webbplatsen.
6.  **Innehållsförteckning:** För längre dokument eller sektioner.

Undantaget gäller sidor som är en del av en sekventiell process, till exempel de olika stegen i en beställning eller ett flerstegsformulär. Det är inte rimligt att kräva en direktlänk till "Steg 3 i kassan" från en webbplatskarta.

## Varför detta behövs

Olika användare föredrar eller behöver olika sätt att navigera och hitta information:

- **Användare som föredrar överblick:** En webbplatskarta eller tydlig navigation ger en bra överblick över webbplatsens struktur.
- **Användare som vet vad de letar efter:** En sökfunktion är ofta det snabbaste sättet att hitta specifik information.
- **Användare som utforskar:** Navigationsmenyer och relaterade länkar hjälper användare att upptäcka innehåll.
- **Personer med kognitiva funktionsnedsättningar:** Kan ha lättare att använda ett visst navigeringssätt (t.ex. sök istället för komplexa menyer). Om ett sätt är svårt, finns ett annat alternativ.
- **Skärmläsaranvändare:** Kan effektivt använda webbplatskartor eller sökfunktioner för att snabbt hitta sidor utan att behöva navigera genom hela menystrukturen.

Att erbjuda flera sätt att navigera gör webbplatsen mer flexibel och lättare att använda för alla.

---

## Exempel

### Webbplats med Navigation, Sök och Webbplatskarta (Rätt) ✅

Webbplatsen erbjuder en huvudmeny (synlig på alla sidor), en sökfunktion (i sidhuvudet) och en länk till en webbplatskarta (i sidfoten).

::code-group{:labels='["Konceptuell HTML (Rätt) ✅"]'}

```html showLineNumbers
<body>
  <header>
    <nav aria-label="Huvudnavigation">
      <ul>
        <li><a href="/">Hem</a></li>
        <li><a href="/tjanster">Tjänster</a></li>
        <li><a href="/om-oss">Om oss</a></li>
      </ul>
    </nav>
    <form action="/sok" method="get" role="search">
      <label for="search-input">Sök på webbplatsen:</label>
      <input type="search" id="search-input" name="q" />
      <button type="submit">Sök</button>
    </form>
  </header>

  <main>
    <!-- Sidans huvudinnehåll -->
  </main>

  <footer>
    <nav aria-label="Sidfotsnavigation">
      <ul>
        <li><a href="/kontakt">Kontakt</a></li>
        <li><a href="/webbplatskarta">Webbplatskarta</a></li>
      </ul>
    </nav>
  </footer>
</body>
```

::
**Resultat:** En användare kan hitta sidan "Om oss" via huvudnavigationen, genom att söka på "Om oss", eller genom att gå till webbplatskartan och hitta länken där. Detta uppfyller kravet med råge (tre sätt erbjuds). Minst två krävs.

### Webbplats med Navigation och Relaterade Länkar (Rätt) ✅

En blogg har en huvudmeny med kategorier. Inom varje blogginlägg finns länkar till andra relaterade inlägg.

::code-group{:labels='["Konceptuell HTML (Rätt) ✅"]'}

```html showLineNumbers
<body>
  <header>
    <nav aria-label="Bloggkategorier">
      <ul>
        <li><a href="/kategori/teknik">Teknik</a></li>
        <li><a href="/kategori/design">Design</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h1>Blogginlägg om Designprinciper</h1>
      <p>Text om principer...</p>
      <p>Läs även om <a href="/inlagg/fallstudie-design">vår fallstudie</a>.</p>

      <aside>
        <h2>Relaterade inlägg</h2>
        <ul>
          <li><a href="/inlagg/typografi-tips">Tips om typografi</a></li>
          <li><a href="/inlagg/fallstudie-design">Fallstudie i design</a></li>
        </ul>
      </aside>
    </article>
  </main>
</body>
```

::
**Resultat:** Användaren kan hitta inlägget "Fallstudie i design" via kategorin "Design" i menyn (om den finns där) och via länken "vår fallstudie" i texten samt länken i "Relaterade inlägg". Detta ger flera sätt.

### Webbplats med endast en navigeringsväg (Fel) ❌

En enkel webbplats där alla undersidor endast kan nås genom att klicka sig framåt från startsidan via en serie länkar. Det finns ingen sökfunktion, ingen webbplatskarta och inga alternativa navigeringsmenyer.

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
En webbplats för ett litet projekt. Från startsidan länkar man till "Projektinfo". Från "Projektinfo" länkar man till "Teamet". Från "Teamet" länkar man till "Kontakt". Det finns inga andra sätt att nå sidan "Teamet" än att gå via Startsida -> Projektinfo.
```

::
**Resultat:** Om en användare vill gå direkt till "Teamet" måste de alltid klicka sig igenom de föregående sidorna. Det finns bara ett sätt att nå sidan, vilket inte uppfyller kravet.

### Undantag: Steg i en process (Tillåtet) ✅

En användare genomför ett köp i en webbutik. Sidorna för "Varukorg", "Leveransadress", "Betalning" och "Bekräftelse" visas i en specifik ordning. Det finns inga direktlänkar till t.ex. "Betalning" från webbplatskartan.

::code-group{:labels='["Koncept (Tillåtet) ✅"]'}

```text [Beskrivning]
Kassaflöde:
1. Varukorg (/cart)
2. Leveransadress (/checkout/shipping)
3. Betalningsmetod (/checkout/payment)
4. Granska och bekräfta (/checkout/confirm)
5. Tack för din beställning (/order/success)

Sidorna 2, 3 och 4 är steg i en process och behöver inte kunna nås på flera sätt.
```

::
**Resultat:** Dessa sidor är undantagna från kravet eftersom de är del av en definierad process.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.5 Multiple Ways (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html)
- [Webbriktlinjer: R126 Gör det möjligt att hitta sidor på olika sätt](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/gor-det-mojligt-att-hitta-sidor-pa-olika-satt)
- [W3C Technique G125: Providing links to navigate to related Web pages](https://www.w3.org/WAI/WCAG22/Techniques/general/G125)
- [W3C Technique G64: Providing a site map](https://www.w3.org/WAI/WCAG22/Techniques/general/G64)
- [W3C Technique G161: Providing a search function to find content](https://www.w3.org/WAI/WCAG22/Techniques/general/G161)
