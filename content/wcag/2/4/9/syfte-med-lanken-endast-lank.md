---
title: 2.4.9 Syftet med länken (Endast länk)
description: Säkerställ att syftet med varje länk kan förstås utifrån enbart länktexten.
level: AAA
slug: syfte-med-lanken-endast-lank
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "länktext",
    "länksyfte",
    "link purpose",
    "navigation",
    "skärmläsare",
    "tydlig länk",
    "operabel",
    "navigerbar",
  ]
canonical: https://t12t.dev/wcag/2/4/9/syfte-med-lanken-endast-lank

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 9

og:
  title: 2.4.9 Syftet med länken (Endast länk) – WCAG
  description: Säkerställ att syftet med varje länk kan förstås utifrån enbart länktexten.
  url: https://t12t.dev/wcag/2/4/9/syfte-med-lanken-endast-lank
  type: article

datePublished: 2025-06-02
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Syftet med länken (Endast länk)

## Beskrivning

En mekanism ska finnas tillgänglig som gör att syftet med varje länk kan identifieras utifrån **enbart länktexten**. Undantag görs om länkens syfte skulle vara tvetydigt för användare i allmänhet.

Detta kriterium (Nivå AAA) är en striktare version av Kriterium 2.4.4 Syftet med länken (i sitt sammanhang) (Nivå A). Medan nivå A tillåter att länkens syfte framgår av dess kontext, kräver nivå AAA att länktexten **i sig själv** ska vara tillräckligt beskrivande för att man ska förstå vart den leder, utan att behöva läsa omgivande text.

Det innebär att generiska länktexter som "Läs mer", "Klicka här", "Mer info" generellt **inte** är tillåtna på AAA-nivå, om de inte kompletteras på ett sätt som blir en del av själva länkens namn (t.ex. via [aria-label]{.inline-code}).

**Mekanism:** Kravet säger att en "mekanism ska finnas tillgänglig". Ofta uppfylls detta helt enkelt genom att _alla_ synliga länkar har tydlig text. Alternativt kan det (mer teoretiskt) uppfyllas genom att sidan erbjuder en funktion för att omvandla otydliga länkar till tydliga. Det absolut vanligaste och rekommenderade är dock att skriva tydliga länktexter från början.

## Varför detta behövs

Att länkens syfte framgår av enbart länktexten är särskilt viktigt för:

- **Skärmläsaranvändare som navigerar via länklistor:** Många skärmläsare kan generera en lista med alla länkar på en sida. Om länktexterna är tydliga i sig själva blir denna lista mycket användbar för snabb navigering. Generiska texter gör listan oanvändbar.
- **Förbättrad tydlighet för alla:** Även seende användare som snabbt skannar sidan drar nytta av länkar som direkt förklarar vart de leder.
- **Minskad kognitiv belastning:** Det kräver mindre ansträngning att förstå en länk om syftet är tydligt direkt i texten.

Detta krav maximerar effektiviteten vid länknavigering, särskilt för användare av hjälpmedel.

---

## Exempel

### Tydlig och beskrivande länktext (Rätt) ✅

Länktexten är specifik och förklarar destinationen eller handlingen.

::code-group{:labels='["HTML (Rätt - AAA) ✅"]'}

```html showLineNumbers
<!-- Bra exempel för AAA -->
<p>
  Vår senaste undersökning om digitala vanor finns nu publicerad.
  <a href="/rapporter/digitala-vanor-2024.pdf">
    Läs rapporten "Digitala Vanor 2024" (PDF) </a
  >.
</p>

<ul>
  <li><a href="/konto/installningar">Hantera kontoinställningar</a></li>
  <li><a href="/konto/orderhistorik">Visa orderhistorik</a></li>
  <li><a href="/konto/adressbok">Redigera adressbok</a></li>
</ul>

<p>
  Kontakta <a href="/support/kontakt">kundtjänst via formulär</a> eller ring oss
  på <a href="tel:+468123456">08-123 456</a>.
</p>
```

::
**Resultat:** Varje länktext är unik och beskriver tydligt vart länken leder, även om den tas helt ur sitt sammanhang.

### Komplettering av generisk länktext med ARIA (Rätt, men mindre idealiskt) ✅

Om en generisk text som "Läs mer" _måste_ användas visuellt, kan den kompletteras med [aria-label]{.inline-code} eller annan teknik för att ge ett tydligt namn till hjälpmedel. Den synliga texten blir dock inte tydligare för alla.

::code-group{:labels='["HTML (Rätt med ARIA - AAA) ✅"]'}

```html {6} showLineNumbers
<article>
  <h2>Ny funktion: Mörkt läge</h2>
  <p>Nu kan du växla till mörkt läge för bekvämare läsning i svagt ljus...</p>
  <a href="/nyheter/morkt-lage" aria-label="Läs mer om funktionen Mörkt läge">
    Läs mer
  </a>
</article>

<article>
  <h2>Uppdaterade användarvillkor</h2>
  <p>Vi har uppdaterat våra användarvillkor gällande...</p>
  <a
    href="/villkor-2024"
    aria-label="Läs mer om de uppdaterade användarvillkoren"
  >
    Läs mer
  </a>
</article>
```

::
**Resultat:** Skärmläsare kommer att läsa upp den mer beskrivande texten från [aria-label]{.inline-code} (t.ex. "Läs mer om funktionen Mörkt läge"). Detta uppfyller tekniskt sett kravet då länkens syfte kan identifieras från dess "namn". **Dock** är det alltid bättre för _alla_ användare om den synliga texten är tydlig från början.

### Generisk länktext utan komplettering (Fel) ❌

Att använda generisk länktext utan någon kompletterande information som blir en del av länkens namn uppfyller inte AAA-kravet.

::code-group{:labels='["HTML (Fel - AAA) ❌"]'}

```html showLineNumbers
<!-- Fel för AAA: "Läs mer" är inte tillräckligt beskrivande i sig själv -->
<h2>Artikel A</h2>
<p>Introduktion till artikel A...</p>
<a href="/artikel-a">Läs mer</a>

<h2>Artikel B</h2>
<p>Introduktion till artikel B...</p>
<a href="/artikel-b">Läs mer</a>

<!-- Fel för AAA: "Klicka här" är inte beskrivande -->
<p>För att ladda ner manualen, <a href="/manual.pdf">klicka här</a>.</p>
```

::
**Resultat:** En skärmläsare som listar länkar kommer bara att visa "Läs mer", "Läs mer", "klicka här", vilket är meningslöst.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.9 Link Purpose (Link Only) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html)
- [Förstå WCAG SC 2.4.4 (Nivå A)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) (För jämförelse med det mindre strikta AA-kravet).
- [Webbriktlinjer: R125 Skriv tydliga länkar](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/skriv-tydliga-lankar) (Beskriver även vikten av tydlighet för AAA).
- [W3C Technique G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG22/Techniques/general/G91)
- [W3C Technique ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA1) (Kan användas, men [aria-label]{.inline-code} eller [aria-labelledby]{.inline-code} är oftare lämpligt för att ge länken ett _namn_).
- [MDN Web Docs: ARIA aria-label attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
