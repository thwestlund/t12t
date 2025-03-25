---
title: Icke-textuellt innehåll
description: All innehåll som inte är text ska ha ett textalternativ som presenterar motsvarande syfte eller information.
level: A
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 1
guidelineName: Textalternativ
criterionNumber: 1

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.1.1 Icke-textuellt innehåll

## Beskrivning

Allt icke-textuellt innehåll som presenteras för användaren har ett textalternativ som fyller samma syfte, förutom i situationerna nedan:

- **Kontroller och inmatning:** Om det icke-textuella innehållet är en kontroll eller accepterar användarinmatning, så har det ett namn som beskriver dess syfte.
- **Tidsbaserade media:** Om det icke-textuella innehållet är tidsbaserade media, så tillhandahåller textalternativen åtminstone en beskrivande identifiering av innehållet.
- **Test:** Om det icke-textuella innehållet är ett test eller en övning som skulle vara ogiltigt om det presenterades i text, så tillhandahåller textalternativen åtminstone en beskrivande identifiering.
- **Sensorisk:** Om det icke-textuella innehållet i första hand är avsett att skapa en specifik sensorisk upplevelse, så tillhandahåller textalternativen åtminstone en beskrivande identifiering av innehållet.
- **CAPTCHA:** Om syftet med det icke-textuella innehållet är att bekräfta att innehållet nås av en person och inte en dator, så tillhandahålls textalternativ som identifierar och beskriver syftet med det icke-textuella innehållet. Och alternativa former av CAPTCHA som använder olika typer av sensoriska uppfattningar tillhandahålls för att tillgodose olika funktionsnedsättningar.
- **Dekoration, formatering, osynligt:** Om det icke-textuella innehållet endast är för dekoration, endast används för visuell formatering eller inte presenteras för användare, så implementeras det på ett sätt så att det kan ignoreras av hjälpmedel.

## Varför detta behövs

Personer som är blinda eller har grav synnedsättning kan inte se icke-textuellt innehåll som bilder, diagram, knappar eller andra visuella element. För att få tillgång till samma information behöver de textalternativ som skärmläsare och andra hjälpmedel kan läsa upp eller visa i punktskrift.

Textalternativ fungerar också som ersättning för användare som har avstängt bilder för att spara data eller bandbredd, eller i situationer där bilder inte kan laddas eller visas.

Genom att tillhandahålla meningsfulla textalternativ för icke-textuellt innehåll ger du alla användare tillgång till samma information, oavsett hur de tar del av ditt digitala innehåll.

## Exempel

### Exempel på bra implementering

#### Informativ bild med alt-text

::code-group{:labels='["index.html"]'}

```html
<img
  src="diagram-energiforbrukning.png"
  alt="Diagram som visar energiförbrukning per månad under 2023. 
    Högst förbrukning i januari (320 kWh) och december (305 kWh), 
    lägst förbrukning i juli (120 kWh)."
/>
```

::

#### Dekorativ bild

::code-group{:labels='["index.html"]'}

```html
<img src="dekorativ-linje.png" alt="" role="presentation" />
```

::

#### Bildlänk

::code-group{:labels='["index.html"]'}

```html
<a href="kontakt.html">
  <img src="kontakt-ikon.png" alt="Kontakta oss" />
</a>
```

::

#### Logotyp med länk till startsida

::code-group{:labels='["index.html"]'}

```html
<a href="/" aria-label="Företagsnamn - Till startsidan">
  <img src="logo.png" alt="" />
</a>
```

::

#### Komplex bild med långt textalternativ

::code-group{:labels='["index.html"]'}

```html
<figure>
  <img
    src="komplext-diagram.png"
    alt="Organisationsschema för företaget"
    aria-describedby="diagram-beskrivning"
  />
  <figcaption id="diagram-beskrivning">
    Organisationsschemat visar företagets struktur med VD överst, följt av fyra
    avdelningar: Ekonomi, Marknad, Produktion och HR. Varje avdelning har en
    chef och 3-5 medarbetare. Produktionsavdelningen är störst med 5 medarbetare
    och 2 underleverantörer.
  </figcaption>
</figure>
```

::

### Exempel på bristande implementering

#### Bild utan alt-text

::code-group{:labels='["index.html"]'}

```html
<img src="diagram.png" />
```

::

#### Ickebeskrivande alt-text

::code-group{:labels='["index.html"]'}

```html
<img src="graf-2023.png" alt="Bild" />
```

::

#### Filnamn som alt-text

::code-group{:labels='["index.html"]'}

```html
<img src="IMG_20230824.jpg" alt="IMG_20230824.jpg" />
```

::

#### Överflödig alt-text

::code-group{:labels='["index.html"]'}

```html
<img
  src="person.jpg"
  alt="Bild på en person med brunt hår och blå tröja som står framför en byggnad och ler mot kameran en solig dag i augusti när löven börjat falla från träden"
/>
```

::

## Länk till mer information

- [WCAG 2.2 - Understanding 1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [Webbriktlinjer - R1: Beskriv med text allt innehåll som inte är text](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/beskriv-med-text-allt-innehall-som-inte-ar-text)
- [MDN Web Docs - Alt-attributet för bilder](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)
- [W3C WAI - Images Tutorial](https://www.w3.org/WAI/tutorials/images/)
