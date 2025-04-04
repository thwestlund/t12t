---
title: 1.3.3 Sensoriska egenskaper
description: Ge instruktioner som inte enbart förlitar sig på sensoriska egenskaper som form, storlek, visuell placering, orientering eller ljud.
level: A
slug: sensoriska-egenskaper
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "sensoriska egenskaper",
    "form",
    "storlek",
    "placering",
    "ljud",
    "instruktioner",
    "anpassningsbar",
  ]
canonical: https://t12t.dev/wcag/1/3/3/sensoriska-egenskaper

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 3
guidelineName: Anpassningsbar
criterionNumber: 3

og:
  title: 1.3.3 Sensoriska egenskaper – WCAG
  description: Ge instruktioner som inte enbart förlitar sig på sensoriska egenskaper som form, storlek, visuell placering, orientering eller ljud.
  url: https://t12t.dev/wcag/1/3/3/sensoriska-egenskaper
  type: article

datePublished: 2025-03-31
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.8 # A-kriterier har hög prio
---

# Sensoriska egenskaper

## Beskrivning

Instruktioner för att förstå och använda innehåll får inte enbart förlita sig på sensoriska egenskaper hos komponenter, såsom form, färg, storlek, visuell placering, orientering eller ljud.

Det innebär att du inte ska ge instruktioner som till exempel:

- "Klicka på den runda knappen." (Förlitar sig på form)
- "Se informationen i den högra kolumnen." (Förlitar sig på visuell placering)
- "Tryck på den stora, röda ikonen." (Förlitar sig på storlek och färg - färg täcks även av 1.4.1)
- "När du hör ett pip, gå vidare." (Förlitar sig på ljud)

Istället måste det finnas ett annat sätt att identifiera komponenten eller förstå instruktionen, oftast genom text (t.ex. en synlig etikett eller ett namn som hjälpmedel kan läsa upp).

## Varför detta behövs

- **Personer som är blinda:** Kan inte uppfatta information baserad på form, storlek, visuell placering eller orientering.
- **Personer med nedsatt syn:** Kan ha svårt att urskilja former, storlekar eller exakta placeringar. Färgblindhet (täcks främst av 1.4.1) kan också spela in om färg används som enda indikator.
- **Personer som är döva eller har nedsatt hörsel:** Kan inte förlita sig på instruktioner som ges via ljud.
- **Personer med kognitiva funktionsnedsättningar:** Kan finna rent sensoriska eller spatiala instruktioner svåra att tolka.

Genom att erbjuda textbaserade alternativ eller kompletterande information (t.ex. etiketter, namn, text i anslutning) säkerställer man att alla användare kan förstå och agera på instruktionerna, oavsett deras sensoriska förmågor.

---

## Exempel

### Identifiera en knapp

Anta att du har följande knappar, där den ena är visuellt rund och den andra fyrkantig. Instruktionen får inte bara referera till formen.

::code-group{:labels='["HTML","Instruktion (Rätt) ✅", "Instruktion (Fel) ❌"]'}

```html [Knappar] showLineNumbers
<button class="save-button round primary">Spara ändringar</button>
<button class="cancel-button square secondary">Avbryt</button>
```

```text [Refererar till etikett]
För att spara, klicka på knappen 'Spara ändringar'.
```

```text [Refererar till form]
För att spara, klicka på den runda knappen.
```

::

### Hänvisa till ett fält

Anta ett formulär där fält placeras visuellt ovanför varandra. Instruktionen får inte bara referera till placeringen.

::code-group{:labels='["HTML", "Instruktion (Rätt) ✅", "Instruktion (Fel) ❌"]'}

```html [Formulärfält] showLineNumbers
<label for="name">Fullständigt namn:</label>
<input type="text" id="name" name="name" />

<label for="address">Adress:</label>
<input type="text" id="address" name="address" />
```

```text [Refererar till etikett]
Ange ditt namn i fältet märkt 'Fullständigt namn:'.
```

```text [Refererar till placering]
Ange ditt namn i fältet ovanför adressfältet.
```

::

### Indikera slutförd åtgärd

Instruktionen får inte bara förlita sig på ljud.

::code-group{:labels='["Instruktion (Rätt) ✅", "Instruktion (Fel) ❌"]'}

```text [Visuell feedback + ljud]
När uppladdningen är klar visas meddelandet 'Filen har laddats upp'. Ett 'pling'-ljud spelas också upp som bekräftelse.
```

```text [Endast ljud]
Uppladdningen är klar när du hör ett 'pling'-ljud.
```

::

### Hänvisa till innehåll på sidan

Anta en layout med en huvudsektion och en sidosektion. Instruktionen får inte bara referera till den visuella placeringen.

::code-group{:labels='["HTML Struktur", "Instruktion (Rätt) ✅", "Instruktion (Fel) ❌"]'}

```html [Layout] showLineNumbers
<main>
  <h1>Huvudinnehåll</h1>
  <!-- ... -->
</main>
<aside>
  <h2>Relaterade länkar</h2>
  <!-- ... -->
</aside>
```

```text [Refererar till rubrik]
Mer information finns under rubriken 'Relaterade länkar'.
```

```text [Refererar till placering]
Mer information finns i rutan till höger.
```

::

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.3.3 Sensory Characteristics (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html)
- [Webbriktlinjer: R105 Ge inte instruktioner som förutsätter att användaren kan uppfatta form och läge](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/ge-inte-instruktioner-som-forutsatter-att-anvandaren-kan-uppfatta-form-och-lage)
