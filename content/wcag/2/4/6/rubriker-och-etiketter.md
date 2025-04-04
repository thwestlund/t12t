---
title: 2.4.6 Rubriker och etiketter
description: Säkerställ att rubriker och etiketter beskriver ämnet eller syftet för det innehåll de är associerade med.
level: AA
slug: rubriker-och-etiketter
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "rubriker",
    "headings",
    "etiketter",
    "labels",
    "formulär",
    "struktur",
    "semantik",
    "navigation",
    "operabel",
    "navigerbar",
  ]
canonical: https://t12t.dev/wcag/2/4/6/rubriker-och-etiketter

principleNumber: 2
principleName: Operabel
guidelineNumber: 4
guidelineName: Navigerbar
criterionNumber: 6

og:
  title: 2.4.6 Rubriker och etiketter – WCAG
  description: Säkerställ att rubriker och etiketter beskriver ämnet eller syftet.
  url: https://t12t.dev/wcag/2/4/6/rubriker-och-etiketter
  type: article

datePublished: 2025-05-30
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Rubriker och etiketter

## Beskrivning

Rubriker och etiketter beskriver ämnet eller syftet.

Detta innebär att:

1.  **Rubriker** ([\<h1\>]{.inline-code} - [\<h6\>]{.inline-code}) ska tydligt indikera innehållet i det avsnitt de hör till. De hjälper till att organisera innehållet och skapa en logisk struktur.
2.  **Etiketter** ([\<label\>]{.inline-code}) för formulärfält och andra användargränssnittskomponenter ska tydligt beskriva vad användaren förväntas mata in eller vad komponenten gör.

Beskrivningen ska vara tydlig och informativ så att användaren förstår vad de kan förvänta sig.

## Varför detta behövs

Beskrivande rubriker och etiketter är viktiga för flera användargrupper:

- **Skärmläsaranvändare:** Använder rubriker för att snabbt få en överblick över sidans struktur och för att navigera direkt till relevanta avsnitt. Tydliga etiketter är avgörande för att förstå och fylla i formulär korrekt.
- **Personer med kognitiva funktionsnedsättningar:** En tydlig struktur med informativa rubriker underlättar förståelsen av innehållet. Tydliga etiketter minskar risken för missförstånd i formulär.
- **Tangentbordsanvändare:** Kan lättare orientera sig och förstå syftet med olika kontroller om de har tydliga etiketter.
- **Alla användare:** Tydliga rubriker gör det lättare att skumma innehållet och hitta det man letar efter. Tydliga etiketter minskar risken för felinmatning i formulär.

Bra rubriker och etiketter skapar en bättre struktur och gör innehållet lättare att förstå och använda.

---

## Exempel

### Informativa rubriker (Rätt) ✅

Rubrikerna beskriver tydligt innehållet i sina respektive avsnitt och följer en logisk hierarki.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<main>
  <h1>Om företaget</h1>
  <p>Grundläggande information...</p>

  <section>
    <h2>Vår historia</h2>
    <p>Hur allting började...</p>
  </section>

  <section>
    <h2>Vårt team</h2>
    <p>Presentation av medarbetare...</p>
    <article>
      <h3>Anna Andersson - VD</h3>
      <p>Annas bakgrund...</p>
    </article>
    <article>
      <h3>Bo Bergman - Utvecklare</h3>
      <p>Bos expertis...</p>
    </article>
  </section>

  <section>
    <h2>Kontaktuppgifter</h2>
    <p>Adress och telefon...</p>
  </section>
</main>
```

::
**Resultat:** Rubrikerna ger en tydlig struktur och beskriver innehållet. Användare kan snabbt förstå vad varje avsnitt handlar om och navigera via rubrikerna.

### Otydliga eller missvisande rubriker (Fel) ❌

Rubriker som är vaga, endast används för stil, eller inte beskriver det följande innehållet.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<main>
  <!-- Fel: Rubrik 1 är för generell och säger inget om företagets namn -->
  <h1>Information</h1>

  <!-- Fel: Använder <h4> direkt efter <h1>, bryter hierarkin.
       Dessutom är "Detaljer" för vagt. -->
  <h4>Detaljer</h4>
  <p>Företagets historia...</p>

  <!-- Fel: Använder fet text istället för en riktig rubrik för struktur -->
  <p><strong>Medarbetare</strong></p>
  <p>Presentation av medarbetare...</p>

  <!-- Fel: Rubriken beskriver inte det faktiska innehållet -->
  <h2>Viktigt!</h2>
  <p>Våra ordinarie öppettider är...</p>
</main>
```

::
**Resultat:** Strukturen blir otydlig. Skärmläsaranvändare kan inte navigera effektivt. Rubriker som "Detaljer" eller "Viktigt!" ger ingen information om ämnet. Att använda fet stil istället för rubrikelement bryter den semantiska strukturen.

### Tydliga och korrekt kopplade etiketter (Rätt) ✅

Formulärfält har tydliga, synliga [<label>]{.inline-code}-element som är korrekt kopplade med [for]{.inline-code}-attributet.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html {2,5,9} showLineNumbers
<form>
  <label for="fullname">Fullständigt namn:</label>
  <input type="text" id="fullname" name="name" />

  <label for="email_address">E-postadress:</label>
  <input type="email" id="email_address" name="email" />

  <input type="checkbox" id="subscribe" name="subscribe" value="yes" />
  <label for="subscribe">Prenumerera på nyhetsbrevet</label>
  <!-- Label kan komma efter för checkbox/radio -->

  <button type="submit">Skicka</button>
</form>
```

::
**Resultat:** Varje fält har en tydlig beskrivning. Klickar användaren på etiketten flyttas fokus till det associerade fältet. Skärmläsare läser upp etiketten när fältet får fokus.

### Otydliga, saknade eller felkopplade etiketter (Fel) ❌

Formulärfält saknar etiketter, har otydliga etiketter, eller etiketterna är inte korrekt kopplade.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<form>
  <!-- Fel: Saknar <label> helt. Placeholder är inte en ersättning! -->
  <input type="text" id="fname" name="first_name" placeholder="Förnamn" />

  <!-- Fel: Otydlig etikett -->
  <label for="data1">Data:</label>
  <input type="text" id="data1" name="user_data" />

  <!-- Fel: <label> finns men är inte kopplad med 'for' -->
  <p>Lösenord:</p>
  <!-- Detta är inte en <label> -->
  <input type="password" id="pwd" name="password" />

  <!-- Fel: Kopplingen är fel ('for' pekar på fel id) -->
  <label for="tfn">Telefon:</label>
  <input type="tel" id="telefonnummer" name="phone" />
</form>
```

::
**Resultat:** Användare, särskilt de med skärmläsare, vet inte vad som ska fyllas i fälten. Placeholders försvinner när man börjar skriva och är inte en tillförlitlig etikett. Felaktiga kopplingar gör att klick på etiketten inte fungerar och att skärmläsare inte kan associera etiketten korrekt.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.4.6 Headings and Labels (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
- [Webbriktlinjer: R127 Använd beskrivande rubriker och etiketter](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/anvand-beskrivande-rubriker-och-etiketter)
- [MDN Web Docs: Heading elements (\<h1\>-\<h6\>)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
- [MDN Web Docs: The Label element (\<label\>)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- [WebAIM: Semantic Structure - Headings](https://webaim.org/techniques/semanticstructure/#headings)
- [WebAIM: Creating Accessible Forms - Form Labels](https://webaim.org/techniques/forms/labels)
