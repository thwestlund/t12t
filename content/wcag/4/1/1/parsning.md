---
title: 4.1.1 Parsning
description: Säkerställ att innehåll som använder märkspråk har komplett start- och sluttaggar, korrekt nästlade element, unika ID:n och inga duplicerade attribut, så att det kan tolkas korrekt av hjälpmedel. (Notera - Anses föråldrat för HTML/XHTML).
level: A
slug: parsningg
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "parsning",
    "parsing",
    "HTML",
    "validering",
    "syntax",
    "kompatibilitet",
    "robust",
    "välformulerad kod",
    "obsolete",
  ]
canonical: https://t12t.dev/wcag/4/1/1/parsning

principleNumber: 4
principleName: Robust
guidelineNumber: 1
guidelineName: Kompatibel
criterionNumber: 1

og:
  title: 4.1.1 Parsning – WCAG
  description: Säkerställ att kod kan tolkas korrekt av hjälpmedel (anses föråldrat).
  url: https://t12t.dev/wcag/4/1/1/parsning
  type: article

datePublished: 2025-08-01
dateModified: 2024-05-18

sitemap:
  lastmod: 2024-05-18
  changefreq: yearly # Obsolete criterion
  priority: 0.5 # Level A but obsolete status lowers prio
---

# Parsning

## Beskrivning

I innehåll som implementeras med **märkspråk** (som HTML), har elementen **kompletta start- och sluttaggar**, elementen är **nästlade enligt sina specifikationer**, elementen innehåller **inte duplicerade attribut**, och alla **ID:n är unika**, förutom där specifikationerna tillåter dessa funktioner.

Detta kriterium (Nivå A) krävde ursprungligen att HTML-koden skulle vara tekniskt korrekt enligt specifikationen för att säkerställa att webbläsare och framför allt hjälpmedel kunde tolka (parsa) den på ett tillförlitligt sätt. Specifikt fokuserade det på:

- **Kompletta taggar:** Varje starttagg (t.ex. [\<p\>]{.inline-code}) har en motsvarande sluttagg ([\</p\>]{.inline-code}), förutom för självstängande element (t.ex. [\<img\>]{.inline-code}, [\<br\>]{.inline-code}).
- **Korrekt nästling:** Element stängs i omvänd ordning mot hur de öppnades (t.ex. [\<p\>\<strong\>Text\</strong\>\</p\>]{.inline-code} är korrekt, [\<p\>\<strong\>Text\</p\>\</strong\>]{.inline-code} är fel).
- **Inga duplicerade attribut:** Ett element får inte ha samma attribut specificerat två gånger (t.ex. [\<img src="bild.jpg" src="annanbild.png"\>]{.inline-code}).
- **Unika ID:n:** Värdet på ett [id]{.inline-code}-attribut måste vara unikt på hela sidan (t.ex. det får bara finnas ett element med [id="main-content"]{.inline-code}).

**Notera:** Detta kriterium anses idag vara föråldrat för HTML/XHTML eftersom moderna webbläsare har mycket robusta felhanteringsmekanismer. De lyckas nästan alltid rendera sidan även med dessa typer av fel. Hjälpmedel förlitar sig också på webbläsarens tolkning (DOM-trädet) snarare än att parsa källkoden direkt. Kriteriet är dock fortfarande tekniskt sett en del av WCAG 2.0/2.1/2.2. Välformulerad kod är fortfarande god praxis.

## Varför detta behövdes (Historiskt perspektiv)

Den ursprungliga anledningen till detta kriterium var att:

- **Äldre hjälpmedel och webbläsare:** Tidigare versioner av hjälpmedel eller nischade webbläsare kunde krascha eller feltolka sidan helt om koden innehöll allvarliga syntaxfel. Detta kunde göra sidan helt otillgänglig.
- **Förutsägbarhet:** Välformulerad kod garanterade att DOM-trädet som hjälpmedel interagerar med skulle representera strukturen som avsågs av utvecklaren.

Även om moderna verktyg är mer förlåtande, kan allvarliga parsingsfel fortfarande i sällsynta fall orsaka problem eller leda till att hjälpmedel gissar fel om strukturen. Att skriva validerande eller åtminstone välformulerad kod är fortfarande en rekommenderad praxis för robusthet och underhållbarhet.

---

## Exempel

### Välformulerad kod (Rätt) ✅

Koden följer HTML-syntaxen korrekt.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="UTF-8" />
    <title>Korrekt Kod</title>
  </head>
  <body>
    <header id="page-header">
      <h1>Välkommen</h1>
    </header>
    <main id="main-content">
      <p>Detta är ett <strong>viktigt</strong> stycke.</p>
      <img src="bild.jpg" alt="Beskrivande text" id="hero-image" />
    </main>
    <footer id="page-footer">
      <p>© 2024</p>
    </footer>
  </body>
</html>
```

::
**Resultat:** Koden har korrekta start/sluttaggar, korrekt nästling, inga duplicerade attribut och unika ID:n. Denna kod kan parsas utan problem.

### Felaktig nästling (Fel enligt 4.1.1) ❌

Element är inte korrekt nästlade (stängs i fel ordning).

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<!-- Fel: </strong> borde komma före </p> -->
<p>Detta är <strong>fel nästlat.</p></strong>
```

::
**Resultat:** Även om moderna webbläsare ofta "fixar" detta visuellt, bryter det mot kravet på korrekt nästling.

### Saknad sluttagg (Fel enligt 4.1.1) ❌

Ett element som kräver en sluttagg saknar den.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<div>
  <p>Första stycket.</p>
  <p>Andra stycket, men första</p>
  <p>
    stängdes aldrig.
    <!-- Fel -->
</div>

<!-- Fel: Implicit stängning av <p> kan ske, men koden är inte välformulerad -->
```

::
**Resultat:** Inte välformulerad kod. Webbläsare kan hantera det, men det är tekniskt fel.

### Duplicerade attribut (Fel enligt 4.1.1) ❌

Samma attribut anges två gånger på samma element.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<!-- Fel: class-attributet är duplicerat -->
<div class="container" class="wrapper">Innehåll...</div>
```

::
**Resultat:** Bryter mot kravet. Webbläsare ignorerar oftast det andra attributet.

### Duplicerade ID:n (Fel enligt 4.1.1) ❌

Samma [id]{.inline-code}-värde används på mer än ett element på sidan.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<h2 id="unik-rubrik">Första avsnittet</h2>
<!-- ... annat innehåll ... -->
<p id="unik-rubrik">Ett stycke som felaktigt har samma ID.</p>
<!-- Fel! -->
```

::
**Resultat:** ID:n måste vara unika. Duplicerade ID:n bryter mot HTML-specifikationen och kan orsaka problem med CSS, JavaScript och hjälpmedel som förlitar sig på unika ID:n (t.ex. för [aria-labelledby]{.inline-code}).

---

## Valideringsverktyg

För att kontrollera kodens validitet kan man använda online-verktyg:

- [W3C Markup Validation Service](https://validator.w3.org/)

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 4.1.1 Parsing (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html)
