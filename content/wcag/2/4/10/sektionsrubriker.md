---
title: 2.4.10 Sektionsrubriker
description: Använd rubriker för att organisera innehållet i sektioner.
level: AAA
slug: sektionsrubriker
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "sektionsrubriker",
    "section headings",
    "rubriker",
    "headings",
    "struktur",
    "semantik",
    "navigation",
    "organisation",
    "operabel",
    "navigerbar",
  ]
canonical: https://t12t.dev/wcag/2/4/10/sektionsrubriker

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 10

og:
  title: 2.4.10 Sektionsrubriker – WCAG
  description: Använd rubriker för att organisera innehållet i sektioner.
  url: https://t12t.dev/wcag/2/4/10/sektionsrubriker
  type: article

datePublished: 2025-06-03
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Sektionsrubriker

## Beskrivning

Sektionsrubriker används för att organisera innehållet.

Detta kriterium (Nivå AAA) innebär att när innehållet är uppdelat i logiska sektioner, ska dessa sektioner introduceras med beskrivande rubriker ([\<h1\>]{.inline-code} - [\<h6\>]{.inline-code}).

Medan Kriterium 2.4.6 (Rubriker och etiketter, Nivå AA) kräver att _om_ rubriker används, ska de vara beskrivande, kräver detta AAA-kriterium att rubriker faktiskt _ska användas_ för att organisera innehållet i sektioner.

Det handlar alltså inte bara om att _ha_ rubriker, utan att använda dem för att _skapa struktur_ där det är logiskt att dela upp innehållet.

## Varför detta behövs

Att dela upp innehåll i väldefinierade sektioner med tydliga rubriker förbättrar läsbarheten och navigeringen avsevärt, särskilt för:

- **Skärmläsaranvändare:** Kan snabbt få en överblick över sidans innehåll genom att lista rubrikerna och hoppa direkt till den sektion som är mest relevant. Utan rubriker tvingas de lyssna igenom all text sekventiellt.
- **Personer med kognitiva funktionsnedsättningar:** En tydlig struktur med rubriker gör det lättare att förstå hur informationen är organiserad och att hitta specifika delar. Långa, ostrukturerade textblock kan vara överväldigande.
- **Personer med nedsatt syn:** Rubriker (ofta visuellt större) hjälper till att bryta upp texten och gör det lättare att skanna och orientera sig.
- **Alla användare:** En välstrukturerad sida med informativa rubriker är lättare att skumma igenom och förstå för alla.

Användning av sektionsrubriker är en grundläggande princip för att skapa välorganiserat och tillgängligt innehåll.

---

## Exempel

### Innehåll organiserat med rubriker (Rätt) ✅

En längre artikel eller sida är tydligt uppdelad i logiska avsnitt, där varje avsnitt inleds med en beskrivande rubrik ([\<h2\>]{.inline-code}, [\<h3\>]{.inline-code}, etc.).

::code-group{:labels='["HTML (Rätt - AAA) ✅"]'}

```html showLineNumbers
<article>
  <h1>Att välja rätt cykel</h1>
  <p>Introduktion till cykelval...</p>

  <section>
    <h2>Typ av cykling</h2>
    <p>Beskrivning av olika cykeltyper baserat på användning...</p>
    <h3>Mountainbike</h3>
    <p>För terräng...</p>
    <h3>Racercykel</h3>
    <p>För landsväg...</p>
    <h3>Hybridcykel</h3>
    <p>För blandad körning...</p>
  </section>

  <section>
    <h2>Storlek och passform</h2>
    <p>Hur man väljer rätt ramstorlek...</p>
  </section>

  <section>
    <h2>Budget och material</h2>
    <p>Vad man kan förvänta sig i olika prisklasser...</p>
  </section>
</article>
```

::
**Resultat:** Innehållet är logiskt indelat med rubriker. Användare kan enkelt se strukturen (Typ, Storlek, Budget) och hoppa till det avsnitt de är intresserade av. Hierarkin ([\<h1\>]{.inline-code} > [\<h2\>]{.inline-code} > [\<h3\>]{.inline-code}) är också korrekt.

### Långt innehåll utan sektionsrubriker (Fel) ❌

En sida innehåller mycket text om ett ämne, men texten presenteras som ett enda långt block eller är bara uppdelad med styckebrytningar eller horisontella linjer, utan några semantiska rubriker.

::code-group{:labels='["HTML (Fel - AAA) ❌"]'}

```html showLineNumbers
<article>
  <!-- Fel: Endast huvudrubrik, ingen uppdelning av det långa innehållet -->
  <h1>Allt om katter</h1>
  <p>
    Katter är fascinerande djur. De finns i många raser... (Lång text om katters
    historia)
  </p>
  <p>
    Att sköta en katt kräver omsorg. Kosten är viktig... (Lång text om
    kattskötsel)
  </p>
  <hr />
  <!-- Visuell avdelare, men ingen semantisk rubrik -->
  <p>Vanliga kattsjukdomar inkluderar... (Lång text om sjukdomar)</p>
  <p><strong>Sammanfattning</strong></p>
  <!-- Använder fet stil istället för rubrik -->
  <p>Avslutande ord om katter...</p>
</article>
```

::
**Resultat:** Det är svårt för användare att få en överblick över innehållet eller att navigera till specifika delar som skötsel eller sjukdomar. Skärmläsare kan inte erbjuda någon struktur för navigering inom artikeln.

### Använder enbart visuella rubriker (Fel) ❌

Text används för att se ut som rubriker (t.ex. genom större, fet stil), men de är inte kodade med riktiga rubrikelement ([\<h1\>]{.inline-code}-[\<h6\>]{.inline-code}).

::code-group{:labels='["HTML (Fel - AAA) ❌"]'}

```html showLineNumbers
<div class="article">
  <p style="font-size: 2em; font-weight: bold;">Om vår tjänst</p>
  <p>Beskrivning av tjänsten...</p>

  <p style="font-size: 1.5em; font-weight: bold; margin-top: 20px;">Fördelar</p>
  <ul>
    <li>Fördel 1...</li>
    <li>Fördel 2...</li>
  </ul>

  <p style="font-size: 1.5em; font-weight: bold; margin-top: 20px;">Priser</p>
  <p>Prisinformation...</p>
</div>
```

::
**Resultat:** Även om det ser ut som rubriker visuellt, finns det ingen semantisk struktur som hjälpmedel kan använda. Detta uppfyller inte kravet på att _använda_ (semantiska) sektionsrubriker.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.10 Section Headings (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html)
- [Förstå WCAG SC 2.4.6 (Nivå AA)](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html) (Kravet att rubriker ska vara beskrivande).
- [WebAIM: Semantic Structure - Headings](https://webaim.org/techniques/semanticstructure/#headings)
