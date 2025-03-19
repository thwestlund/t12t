---
title: Delar av innehåll
description: Språk för delar av innehåll som skiljer sig från sidans huvudspråk ska kunna bestämmas programmatiskt.
level: AA
principleNumber: 3
principleName: Begriplig
guidelineNumber: 1
guidelineName: Läsbart
criterionNumber: 2

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 3.1.2 Delar av innehåll

## Beskrivning

Det naturliga språk som används i varje stycke eller fras i innehållet kan bestämmas programmatiskt, förutom för egennamn, tekniska termer, ord som är obestämbara språkmässigt, samt ord eller fraser som har blivit en del av det omgivande språket.

## Varför detta behövs

Många webbplatser innehåller innehåll på mer än ett språk. Det kan handla om citat, låneord, eller hela stycken på ett annat språk än sidans huvudspråk. För att skärmläsare och andra hjälpmedel ska kunna läsa upp och tolka sådan text korrekt behöver språkbyten markeras i koden.

Att markera språkbyten är särskilt viktigt för:

1. **Användare av skärmläsare**: När en skärmläsare stöter på ett språkbyte som är korrekt markerat, kan den växla till rätt uttalsregler för det språket, vilket gör innehållet mer begripligt.

2. **Användare med läs- och skrivsvårigheter**: Hjälpmedel för användare med läs- och skrivsvårigheter kan anpassa textpresentationen baserat på språk.

3. **Automatisk översättning**: Översättningsverktyg kan bättre identifiera vilka delar som inte behöver översättas om de redan är på målspråket.

Detta kriterium kompletterar 3.1.1 (Sidans språk) genom att adressera språkvariationer inom sidan, inte bara sidans primära språk.

## Exempel

### Exempel på bra implementering

#### Flerspråkigt innehåll med korrekt språkmarkering

```html
<p>
  Den svenska konstnären är känd för uttrycket
  <span lang="fr">l'art pour l'art</span>, konsten för konstens skull.
</p>
```

I exemplet ovan är det franska uttrycket "l'art pour l'art" korrekt markerat med `lang="fr"` så att skärmläsare kan byta till franskt uttal för just det uttrycket.

#### Längre textstycke på annat språk

```html
<h2>Internationella reaktioner</h2>

<p>Svenska reaktioner på nyheten var positiva.</p>

<blockquote lang="en">
  <p>
    "This is a significant breakthrough that will benefit international
    cooperation," said the spokesperson for the British delegation.
  </p>
</blockquote>

<p>Även från Tyskland kom liknande kommentarer.</p>
```

Här är ett längre citat på engelska inneslutet i ett `blockquote`-element med `lang="en"`, vilket gör att hela citatet kommer att läsas upp med engelsk uttalsmodell.

#### Artikel med flerspråkigt abstract

```html
<article lang="sv">
  <h1>Ny forskning om klimatförändringar</h1>

  <div class="abstract" lang="en">
    <h2>Abstract</h2>
    <p>
      This paper explores the effects of climate change on Nordic ecosystems,
      with particular focus on the arctic region. Our findings suggest that the
      temperature increase is happening at twice the global average rate in
      these areas.
    </p>
  </div>

  <div class="abstract">
    <h2>Sammanfattning</h2>
    <p>
      Denna artikel undersöker effekterna av klimatförändringar på nordiska
      ekosystem, med särskilt fokus på arktiska regionen. Våra resultat tyder på
      att temperaturökningen sker med dubbelt så hög hastighet som det globala
      genomsnittet i dessa områden.
    </p>
  </div>

  <section>
    <h2>Inledning</h2>
    <p>
      Klimatförändringarnas påverkan på arktiska ekosystem har länge varit ett
      ämne för forskning...
    </p>
  </section>
</article>
```

I detta exempel innehåller artikeln både en engelsk och en svensk sammanfattning (abstract). Den engelska sammanfattningen markeras explicit med `lang="en"`, medan den svenska sammanfattningen ärver språkkoden från artikeln.

### Exempel på bristande implementering

#### Citat på annat språk utan språkmarkering

```html
<!-- DÅLIGT: Språkbyte utan markering -->
<p>
  Konstnären avslutade sin presentation med orden "L'art est la seule chose qui
  permet à l'homme de s'élever au-dessus de lui-même".
</p>
```

I exemplet ovan saknas språkmarkering för det franska citatet, vilket kommer att leda till att skärmläsare försöker läsa det med svenskt uttal, vilket kan göra det obegripligt.

#### Korrekt förbättring

```html
<!-- BRA: Språkbyte med markering -->
<p>
  Konstnären avslutade sin presentation med orden
  <span lang="fr"
    >"L'art est la seule chose qui permet à l'homme de s'élever au-dessus de
    lui-même"</span
  >.
</p>
```

#### Flerspråkig meny utan språkmarkering

```html
<!-- DÅLIGT: Flerspråkig meny utan språkmarkeringar -->
<nav>
  <ul>
    <li><a href="index.html">Hem</a></li>
    <li><a href="about.html">Om oss</a></li>
    <li><a href="services.html">Tjänster</a></li>
    <li><a href="contact.html">Kontakt</a></li>
    <li><a href="en/index.html">English</a></li>
    <li><a href="de/index.html">Deutsch</a></li>
  </ul>
</nav>
```

#### Korrekt förbättring

```html
<!-- BRA: Flerspråkig meny med språkmarkeringar -->
<nav>
  <ul>
    <li><a href="index.html">Hem</a></li>
    <li><a href="about.html">Om oss</a></li>
    <li><a href="services.html">Tjänster</a></li>
    <li><a href="contact.html">Kontakt</a></li>
    <li><a href="en/index.html" lang="en">English</a></li>
    <li><a href="de/index.html" lang="de">Deutsch</a></li>
  </ul>
</nav>
```

## Undantag

Detta kriterium har några undantag där språkmarkering inte är nödvändig:

1. **Egennamn**: Personnamn, platsnamn, företagsnamn, etc. behöver inte markeras med separat språkkod.

   ```html
   <p>Vi besökte Louvre i Paris förra sommaren.</p>
   <!-- "Louvre" och "Paris" behöver inte språkmarkeras -->
   ```

2. **Tekniska termer**: Termer som är etablerade inom ett tekniskt område behöver inte språkmarkeras.

   ```html
   <p>JavaScript är ett programmeringsspråk som används för webbutveckling.</p>
   <!-- "JavaScript" behöver inte språkmarkeras -->
   ```

3. **Ord som är obestämbara språkmässigt**: Ord som inte tydligt tillhör ett specifikt språk behöver inte markeras.

4. **Låneord som är etablerade i språket**: Ord som har blivit en del av det omgivande språket behöver inte markeras.
   ```html
   <p>Vi åt tapas och drack sangria på den lilla restaurangen.</p>
   <!-- "tapas" och "sangria" är låneord som nu är etablerade i svenskan -->
   ```

## Testmetoder

### Manuell testning

1. **Identifiera språkbyten**: Granska innehållet och identifiera alla textstycken eller fraser som är på ett annat språk än sidans huvudspråk.

2. **Granska koden**: Kontrollera att dessa textstycken har korrekt `lang`-attribut som anger språket.

3. **Testa med skärmläsare**: Lyssna på hur skärmläsaren hanterar språkbyten. En korrekt implementering gör att skärmläsaren ändrar sitt uttal när den läser innehåll på andra språk.

### Automatiserad testning

Automatiserade verktyg har begränsad förmåga att identifiera språkbyten i innehåll:

- Vissa tillgänglighetsverktyg kan kontrollera om element med innehåll på ett språk som skiljer sig från sidans huvudspråk har ett `lang`-attribut.
- Textanalysverktyg kan i vissa fall identifiera potentiella språkbyten baserat på ordlista och språkmönster.

Men manuell granskning är oftast nödvändig för att identifiera alla språkbyten korrekt.

### Vanliga fel

- Missade språkmarkeringar för citat eller längre textstycken på främmande språk
- Felaktiga språkkoder (t.ex. använda "sp" istället för "es" för spanska)
- Överanvändning av språkmarkeringar för ord som är undantagna (egennamn, etablerade låneord)
- Inkonsekvent användning av språkmarkeringar på flerspråkiga webbplatser

## Implementering på flerspråkiga webbplatser

För webbplatser som finns i flera språkversioner är det viktigt att varje sida har korrekt `lang`-attribut för hela sidan, och att delar av innehåll som är på ett annat språk markeras korrekt.

```html
<!-- Svensk version av sidan -->
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="UTF-8" />
    <title>Vår flerspråkiga webbplats</title>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="index.html">Hem</a></li>
          <li><a href="en/index.html" lang="en">English</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>Välkommen till vår webbplats</h1>
      <p>Här är lite information på svenska.</p>

      <blockquote lang="en">
        <p>"This is a quote in English that needs to be properly marked."</p>
      </blockquote>
    </main>
  </body>
</html>
```

På motsvarande sätt ska den engelska versionen använda `lang="en"` för hela dokumentet och markera svenska delar med `lang="sv"`.

## Bästa praxis och tips

### Nästade språkmarkeringar

Om ett element redan har ett språkattribut, ärver innehållande element denna språkkod. Om ett element inuti behöver en annan språkkod, läggs den till på det elementet:

```html
<blockquote lang="de">
  <p>
    Einstein sagte:
    <q lang="en">"The only source of knowledge is experience."</q>
  </p>
</blockquote>
```

I exemplet ovan är blockcitatet på tyska (`lang="de"`), men det innehåller ett citat på engelska (`lang="en"`).

### Använd semantiska element

Använd lämpliga semantiska element för att markera innehåll som ofta förekommer på olika språk:

- `<blockquote>` för längre citat
- `<q>` för kortare citat inom löpande text
- `<cite>` för titlar på verk
- `<span>` för kortare fraser när inget annat semantiskt element är lämpligt

### Automatisk språkdetektering

För webbplatser med användarskapat innehåll kan det vara utmanande att identifiera alla språkbyten. Överväg att implementera automatisk språkdetektering som kan lägga till lämpliga språkattribut på servern eller med client-side JavaScript (observera att detta är en förbättring, men inte ett alternativ till att manuellt märka förutsägbara språkbyten).

```javascript
// Exempel på JavaScript som skulle kunna användas för att detektera språk
// och lägga till språkattribut (kräver ett språkdetekteringsbibliotek)
document.querySelectorAll("p, blockquote").forEach(function (element) {
  const text = element.textContent;
  const detectedLang = detectLanguage(text); // Hypotetisk funktion

  if (detectedLang && detectedLang !== document.documentElement.lang) {
    element.setAttribute("lang", detectedLang);
  }
});
```

## Länk till mer information

- [WCAG 2.2 - Understanding 3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html)
- [MDN Web Docs - lang attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
- [W3C Language Tags](https://www.w3.org/International/articles/language-tags/)
- [W3C Internationalization Best Practices](https://www.w3.org/International/techniques/authoring-html#language)
- [Webbriktlinjer - Ange språk för delar av innehåll](https://webbriktlinjer.se/riktlinjer/141-ange-sprak-for-delar-av-innehall/)
