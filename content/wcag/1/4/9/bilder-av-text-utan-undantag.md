---
title: 1.4.9 Bilder av text (utan undantag)
description: Använd endast bilder av text för ren dekoration eller när en specifik presentation är helt nödvändig, som i logotyper.
level: AAA
slug: bilder-av-text-utan-undantag
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "bilder av text",
    "image of text",
    "text",
    "CSS",
    "anpassningsbar",
    "läsbarhet",
    "skiljbar",
    "logotyp",
    "dekoration",
  ]
canonical: https://t12t.dev/wcag/1/4/9/bilder-av-text-utan-undantag

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 9

og:
  title: 1.4.9 Bilder av text (Utan undantag) – WCAG
  description: Använd endast bilder av text för ren dekoration eller när en specifik presentation är helt nödvändig.
  url: https://t12t.dev/wcag/1/4/9/bilder-av-text-utan-undantag
  type: article

datePublished: 2025-04-18
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Bilder av text (Utan undantag)

## Beskrivning

Bilder av text används endast för **ren dekoration** eller när en **specifik presentation av texten är nödvändig** för den information som förmedlas (t.ex. logotyper).

Detta kriterium (Nivå AAA) är den striktaste versionen gällande bilder av text. Det tar bort undantaget om "anpassningsbarhet" som fanns i Kriterium 1.4.5 (Nivå AA). I praktiken innebär detta att all text som kan representeras med vanlig text och CSS **ska** representeras på det sättet, förutom de två specifika undantagen:

1.  **Ren dekoration:** Bilden har inget informativt syfte och skulle kunna tas bort utan att någon information går förlorad. Den har då tom alt-text ([alt=""]{.inline-code}).
2.  **Nödvändig presentation:** Text i logotyper eller varumärken där den exakta visuella formen är en del av identiteten.

## Varför detta behövs

Att helt undvika bilder av text (förutom de specifika undantagen) maximerar tillgängligheten och anpassningsbarheten av innehållet. Detta är särskilt viktigt på AAA-nivå för att stödja användare med störst behov:

- **Maximal anpassning:** Vanlig text kan fullt ut anpassas av användarens webbläsare eller hjälpmedel (typsnitt, storlek, färger, radavstånd, etc.) på ett sätt som aldrig är möjligt med en bild av text.
- **Bättre prestanda och skalbarhet:** Vanlig text är alltid skarp vid förstoring och laddar snabbare än bilder.
- **Full interaktion för hjälpmedel:** Skärmläsare kan interagera fullt ut med vanlig text (läsa upp tecken för tecken, ord för ord, markera, kopiera), vilket inte går med bilder även om de har alt-text.

Detta krav säkerställer att textinnehåll är så flexibelt och tillgängligt som möjligt.

---

## Exempel

### Använda HTML-text och CSS (Rätt) ✅

För i princip all text på sidan (rubriker, brödtext, knappar, menyer etc.) är detta det enda sättet att uppfylla AAA-kravet (om inte texten är rent dekorativ eller en logotyp).

::code-group{:labels='["HTML + CSS (Rätt - AAA) ✅"]'}

```html [HTML-struktur]
<h2>Viktig underrubrik</h2>
<p>Information som presenteras med vanlig text.</p>
<a href="/nästa" class="action-link">Läs mer</a>
```

```css [CSS-styling]
h2 {
  font-family: "Lato", sans-serif;
  font-size: 1.8rem;
  color: #1a1a1a; /* Hög kontrast */
}

p {
  font-family: "Merriweather", serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #333333; /* Hög kontrast */
  max-width: 75ch; /* Bra radlängd */
}

.action-link {
  display: inline-block;
  padding: 0.5em 1em;
  background-color: darkblue;
  color: white; /* Hög kontrast */
  text-decoration: none;
  font-weight: bold;
}
```

::
**Resultat:** Texten är fullt anpassningsbar, skalar perfekt, och är helt tillgänglig för alla användare och hjälpmedel.

### Bild av text för rubrik eller knapp (Fel) ❌

Att använda en bild för en rubrik, knapptext, eller annan viktig text är inte tillåtet enligt AAA, eftersom presentationen kan uppnås med text och CSS.

::code-group{:labels='["HTML (Fel - AAA) ❌"]'}

```html showLineNumbers
<!-- Fel: Rubriken är en bild. Detta är bara OK om det är en logotyp. -->
<img src="rubrik-bild.png" alt="Vår Tjänst" />

<!-- Fel: Länktexten är en bild. Detta är bara OK om bilden är
     rent dekorativ (alt="") och länkens syfte framgår på annat sätt. -->
<a href="/anmalan">
  <img src="anmal-dig-nu-knapp.jpg" alt="Anmäl dig nu!" />
</a>
```

::
**Resultat:** Uppfyller inte AAA-kravet eftersom vanlig text och CSS kunde ha använts.

### Undantag: Logotyp (Tillåtet) ✅

Text som är en integrerad del av en logotyp är fortfarande tillåten.

::code-group{:labels='["HTML (Logotyp) ✅"]'}

```html showLineNumbers
<!-- Tillåtet: Texten "SuperFöretaget" är en del av logotypen. -->
<img src="/logo.svg" alt="SuperFöretaget - Innovativa Lösningar" />
```

::

### Undantag: Ren dekoration (Tillåtet) ✅

En bild som innehåller text men som inte förmedlar någon information och enbart tjänar som dekoration.

::code-group{:labels='["HTML (Dekorativ bild) ✅"]'}

```html showLineNumbers
<!-- Tillåtet: Bilden är en bakgrundsdekoration med slumpmässiga
     bokstäver och har ingen informativ funktion. -->
<div
  style="background-image: url('text-pattern.png'); height: 200px;"
  role="presentation"
>
  <!-- Annat innehåll här -->
</div>

<!-- Alternativt, om bilden är ett <img>-element: -->
<img src="decorative-text-swirl.png" alt="" />
```

::
**Resultat:** Eftersom bilden är rent dekorativ och har tom alt-text (eller [role="presentation"]{.inline-code} på containern för bakgrundsbilder) är den tillåten.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.9 Images of Text (No Exception) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception.html)
