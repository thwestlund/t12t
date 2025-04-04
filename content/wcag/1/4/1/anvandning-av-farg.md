---
title: 1.4.1 Användning av färg
description: Säkerställ att färg inte är det enda visuella sättet att förmedla information, indikera en handling, uppmana till respons eller särskilja ett visuellt element.
level: A
slug: anvandning-av-farg
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "färg",
    "färgblindhet",
    "kontrast",
    "visuell information",
    "uppfatta",
  ]
canonical: https://t12t.dev/wcag/1/4/1/anvandning-av-farg

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 1

og:
  title: 1.4.1 Användning av färg – WCAG
  description: Säkerställ att färg inte är det enda visuella sättet att förmedla information eller särskilja element.
  url: https://t12t.dev/wcag/1/4/1/anvandning-av-farg
  type: article

datePublished: 2025-04-10
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.8 # A-kriterier har hög prio
---

# Användning av färg

## Beskrivning

Färg används inte som det enda visuella sättet att förmedla information, indikera en handling, uppmana till respons eller särskilja ett visuellt element.

Detta innebär att om färg används för att kommunicera något viktigt (t.ex. status, obligatoriska fält, skillnaden mellan olika dataserier i ett diagram), måste det också finnas ett annat visuellt sätt att förmedla samma information. Detta andra sätt ska inte vara beroende av att kunna urskilja färger.

## Varför detta behövs

- **Personer med färgblindhet:** Cirka 8% av männen och 0,5% av kvinnorna har någon form av färgseende-defekt (oftast röd-grön färgblindhet). Om information endast kodas med färg (t.ex. röda felmeddelanden, gröna framgångsmeddelanden) kan de missa eller misstolka informationen.
- **Personer med nedsatt syn:** Vissa synnedsättningar påverkar färgseendet eller förmågan att urskilja färger med låg kontrast.
- **Användare med monokroma skärmar:** Vissa enheter eller inställningar (t.ex. högkontrastläge) visar innehåll utan färg.
- **Alla användare i vissa situationer:** Starkt solljus eller dålig skärmkvalitet kan göra det svårt att urskilja färger.

Genom att tillhandahålla ett komplement till färg, såsom text, ikoner, mönster, understrykning eller fetstil, säkerställer man att informationen är tillgänglig för alla, oavsett deras förmåga att se färg.

---

## Exempel

### Statusindikatorer

Om färg används för att visa status (t.ex. rött för fel, grönt för ok) måste en ikon eller text också användas.

::code-group{:labels='["Exempel (Rätt) ✅", "Exempel (Fel) ❌"]'}

```html [Färg + Ikon/Text]
<!-- Rätt: Ikon och/eller text kompletterar färgen -->
<style>
  .status {
    display: inline-block;
    padding: 0.2em 0.5em;
    border-radius: 4px;
    color: white;
  }
  .error {
    background-color: red;
  }
  .success {
    background-color: green;
  }
  .icon::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 0.3em;
  } /* Exempel med Font Awesome */
  .icon-error::before {
    content: "\f071"; /* warning sign */
  }
  .icon-success::before {
    content: "\f00c"; /* check mark */
  }
</style>
<span>Status: <span class="status error icon icon-error">Fel</span></span>
<span>Status: <span class="status success icon icon-success">OK</span></span>
```

```html [Endast färg]
<!-- Fel: Användaren måste se skillnad på röd/grön färg -->
<style>
  .status {
    display: inline-block;
    width: 1em;
    height: 1em;
    border-radius: 50%;
  }
  .error {
    background-color: red;
  }
  .success {
    background-color: green;
  }
</style>
<span>Status: <span class="status error"></span></span>
<span>Status: <span class="status success"></span></span>
```

::

### Länkar i löpande text

Länkar måste kunna särskiljas från omgivande text även utan färg. Vanligtvis görs detta med understrykning.

::code-group{:labels='["CSS (Rätt) ✅", "CSS (Fel) ❌"]'}

```css [Färg + Understrykning]
/* Rätt: Understrykning är ett ickefärgberoende sätt att
   identifiera länkar */
p {
  color: black;
}
a {
  color: blue;
  text-decoration: underline;
}

/* Alternativ (Rätt): Om man absolut inte vill ha understrykning
   ALLTID, måste kontrasten vara hög (3:1 mot text, 4.5:1 mot bakgrund)
   OCH det måste finnas en annan visuell skillnad vid hover/fokus,
   ofta genom att lägga till understrykning då. Detta täcks även av 1.4.11. */
a:hover,
a:focus {
  text-decoration: underline;
}
```

```css [Endast färg skiljer länkar]
/* Fel: Om en användare inte kan se blått, eller om
   kontrasten är låg, syns inte länken */
p {
  color: black;
}
a {
  color: blue;
  text-decoration: none;
} /* Ingen understrykning */
```

::

### Obligatoriska formulärfält

Att endast markera obligatoriska fält med röd färg (t.ex. röd etikett eller röd ram) räcker inte.

::code-group{:labels='["Exempel (Rätt) ✅", "Exempel (Fel) ❌"]'}

```html [Röd etikett + Asterisk/Text]
<style>
  .required-label {
    color: red;
  }
</style>

<!-- Rätt: Asterisk (*) eller text (obligatoriskt) läggs till -->
<label for="name" class="required-label">Namn: *</label>
<input type="text" id="name" name="name" required aria-required="true" />

<!-- Eller -->
<label for="email">E-post (obligatoriskt):</label>
<input type="email" id="email" name="email" required aria-required="true" />
```

```html [Endast röd etikett]
<style>
  .required-label {
    color: red;
  }
</style>
<label for="name" class="required-label">Namn:</label>
<input type="text" id="name" name="name" />
<!-- Fel: 'required-label' använder bara färg -->
```

::
**Notera:** Attributet [required]{.inline-code} och [aria-required="true"]{.inline-code} är också viktiga för att programmatiskt indikera att fältet är obligatoriskt (täcks av andra kriterier som 3.3.2 Etiketter eller instruktioner och 4.1.2 Namn, roll, värde).

### Diagram

I diagram (t.ex. stapeldiagram, linjediagram) får inte färg vara det enda sättet att skilja mellan olika dataserier. Använd även mönster, olika typer av linjer, eller direkta etiketter på serierna.

_(Inget kodexempel här, då det handlar om visuell design av diagram)._

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.1 Use of Color (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [Webbriktlinjer: R109 Använd inte enbart färg för att förmedla information eller särskilja innehåll](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/anvand-inte-enbart-farg-for-att-formedla-information-eller-sarskilja-innehall)
