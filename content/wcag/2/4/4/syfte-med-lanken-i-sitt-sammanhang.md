---
title: 2.4.4 Syftet med länken (i sitt sammanhang)
description: Säkerställ att syftet med varje länk kan förstås utifrån själva länktexten, eller från länktexten tillsammans med dess programmatiskt bestämda länk-kontext.
level: A
slug: syfte-med-lanken-i-sitt-sammanhang
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "länktext",
    "länksyfte",
    "link purpose",
    "kontext",
    "navigation",
    "skärmläsare",
    "klicka här",
    "läs mer",
    "operabel",
    "navigerbar",
  ]
canonical: https://t12t.dev/wcag/2/4/4/syfte-med-lanken-i-sitt-sammanhang

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 4

og:
  title: 2.4.4 Syftet med länken (i sitt sammanhang) – WCAG
  description: Säkerställ att syftet med varje länk kan förstås från länktexten eller dess kontext.
  url: https://t12t.dev/wcag/2/4/4/syfte-med-lanken-i-sitt-sammanhang
  type: article

datePublished: 2025-05-28
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: weekly # Common issue
  priority: 0.9 # Nivå A, fundamental
---

# Syftet med länken (i sitt sammanhang)

## Beskrivning

Syftet med varje länk kan förstås utifrån enbart länktexten, eller från länktexten tillsammans med dess **programmatiskt bestämda länk-kontext**. Undantag görs om länkens syfte skulle vara tvetydigt för användare i allmänhet.

Detta innebär att användaren ska kunna förstå vart en länk leder, antingen genom att bara läsa själva länktexten, eller genom att läsa länktexten och den text som är direkt associerad med den i koden.

- **Tydlig länktext:** Länktexten i sig beskriver tydligt destinationen (t.ex. "Läs våra användarvillkor").
- **Tydlig i kontext:** Om länktexten är mer generell (t.ex. "Läs mer"), måste den omgivande texten (som finns i samma stycke [\<p\>]{.inline-code}, listelement [\<li\>]{.inline-code}, tabellcell [\<td\>]{.inline-code}, eller är associerad via ARIA-attribut som [aria-describedby]{.inline-code} eller [aria-labelledby]{.inline-code}) göra syftet tydligt.

**Programmatiskt bestämd kontext** är viktig – det räcker inte att syftet är tydligt _visuellt_ om det inte är tydligt för ett hjälpmedel som läser koden.

## Varför detta behövs

- **Skärmläsaranvändare:** Navigerar ofta genom att hoppa mellan länkar eller generera en lista med alla länkar på sidan. Om länkarna heter "Klicka här", "Läs mer", "Mer info" blir det omöjligt att veta vart de leder utan att läsa den omgivande texten, vilket är ineffektivt.
- **Tangentbordsanvändare:** Behöver veta vart en länk leder _innan_ de aktiverar den för att undvika onödig navigering fram och tillbaka.
- **Personer med kognitiva funktionsnedsättningar:** Tydliga och beskrivande länkar minskar den kognitiva belastningen och gör det lättare att förstå och navigera på sidan.
- **Sökmotoroptimering (SEO):** Beskrivande länktexter kan även förbättra webbplatsens synlighet i sökmotorer.

Tydliga länkar förbättrar navigeringen och förståelsen för alla användare, men är särskilt viktiga för användare med vissa funktionsnedsättningar.

---

## Exempel

### Tydlig länktext (Rätt) ✅

Länktexten beskriver direkt vart länken leder.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<!-- Exempel 1: Direkt beskrivning -->
<p>För mer detaljer, se våra <a href="/villkor">användarvillkor</a>.</p>

<!-- Exempel 2: Länk till dokument -->
<p>Ladda ner <a href="/rapport-2024.pdf">Årsrapport 2024 (PDF)</a>.</p>

<!-- Exempel 3: Länk i en lista -->
<ul>
  <li><a href="/produkter/cyklar">Utforska våra cyklar</a></li>
  <li><a href="/produkter/tillbehor">Se cykeltillbehör</a></li>
</ul>
```

::
**Resultat:** Syftet med varje länk är tydligt även om den tas ur sitt sammanhang. En skärmläsare som läser upp enbart länkarna ger meningsfull information.

### Kontextberoende länktext (Rätt, om kontexten är programmatiskt bestämd) ✅

Generisk länktext som "Läs mer" kan användas om syftet framgår tydligt av den omgivande texten som är programmatiskt kopplad.

::code-group{:labels='["HTML (Rätt - med kontext) ✅"]'}

```html {3, 8, 14} showLineNumbers
<!-- Exempel 1: Länk i samma stycke -->
<p>
  Vi har släppt nya riktlinjer för webbutveckling.
  <a href="/riktlinjer/webb">Läs mer om riktlinjerna</a>.
  <!-- Bättre än bara "Läs mer" -->
</p>

<!-- Exempel 2: Länk i listelement (kontext är hela <li>) -->
<li>
  Nyhet: Kurs i tillgänglighet startar i höst.
  <a href="/kurser/tillganglighet">Mer information</a>.
</li>

<!-- Exempel 3: Använda aria-labelledby för att koppla till rubrik -->
<h2 id="rapport-titel">Rapport om digital inkludering</h2>
<p>Rapporten analyserar nuläget och ger rekommendationer.</p>
<a href="/rapporter/inkludering.pdf" aria-labelledby="rapport-titel"
  >Ladda ner rapporten</a
>.

<!-- Exempel 4: Använda aria-describedby för extra kontext -->
<p id="artikel-intro-1">Vår senaste studie visar...</p>
<a href="/studier/senaste" aria-describedby="artikel-intro-1"
  >Läs hela studien</a
>.

<!-- Exempel 5: Ofta OK om det finns direkt före länk i samma stycke -->
<p>
  Utforska vårt sortiment av ekologiska tvålar.
  <a href="/shop/tvalar">Se alla tvålar</a>.
</p>
```

::
**Resultat:** Även om länktexten i sig kan vara generell (som "Mer information"), gör den programmatiskt kopplade kontexten (samma [\<p\>]{.inline-code}, [\<li\>]{.inline-code}, eller via ARIA) syftet tydligt för hjälpmedel. Att inkludera nyckelord i länken ("Läs mer _om riktlinjerna_") är ofta ännu bättre.

### Otydlig länktext utan tillräcklig kontext (Fel) ❌

Generisk eller oklar länktext där syftet inte framgår, varken av texten själv eller av den programmatiskt bestämda kontexten.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<!-- Fel: Flera "Klicka här"-länkar på samma sida är otydligt -->
<p>För att se schemat, <a href="/schema">klicka här</a>.</p>
<p>För att anmäla dig, <a href="/anmalan">klicka här</a>.</p>

<!-- Fel: "Läs mer" utan tydlig programmatisk koppling till vad det gäller -->
<h2>Senaste Nyheter</h2>
<p>Artikel 1...</p>
<a href="/nyheter/1">Läs mer</a>
<hr />
<p>Artikel 2...</p>
<a href="/nyheter/2">Läs mer</a>
<!-- Om <p> och <a> inte är i samma container (t.ex. <li> eller <div>)
     eller kopplade via ARIA, är kontexten inte programmatiskt bestämd. -->

<!-- Fel: Bara en URL som länktext -->
<p>Besök oss på <a href="https://example.com">https://example.com</a>.</p>
<!-- Svårt för skärmläsare att läsa upp och förstå syftet. -->
```

::
**Resultat:** Skärmläsaranvändare som hör en lista med länkar som "Klicka här", "Klicka här", "Läs mer", "Läs mer" vet inte vart de leder. Att bara visa en URL som länktext är också dålig praxis.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.4 Link Purpose (In Context) (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [Webbriktlinjer: R125 Skriv tydliga länkar](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/skriv-tydliga-lankar)
- [WebAIM: Links and Hypertext - Link Text](https://webaim.org/techniques/hypertext/link_text)
- [MDN Web Docs: Accessibility - ARIA aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [MDN Web Docs: Accessibility - ARIA aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
