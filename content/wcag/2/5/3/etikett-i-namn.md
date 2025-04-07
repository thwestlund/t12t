---
title: 2.5.3 Etikett i namn
description: Säkerställ att det tillgängliga namnet för en komponent innehåller den text som är synlig i dess etikett.
level: A
slug: etikett-i-namn
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "etikett i namn",
    "label in name",
    "tillgängligt namn",
    "accessible name",
    "etikett",
    "label",
    "talinmatning",
    "talstyrning",
    "aria-label",
    "operabel",
    "indatametoder",
  ]
canonical: https://t12t.dev/wcag/2/5/3/etikett-i-namn

principleNumber: 2
principleName: Operabel
guidelineNumber: 5
guidelineName: Indatametoder
criterionNumber: 3

og:
  title: 2.5.3 Etikett i namn – WCAG
  description: Säkerställ att det tillgängliga namnet för en komponent innehåller den synliga etiketttexten.
  url: https://t12t.dev/wcag/2/5/3/etikett-i-namn
  type: article

datePublished: 2025-06-12
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: weekly # Common issue with custom components/aria
  priority: 0.9 # Nivå A, fundamental
---

# Etikett i namn

## Beskrivning

För användargränssnittskomponenter med **etiketter som inkluderar text eller bilder av text**, måste det **tillgängliga namnet (accessible name)** innehålla den text som presenteras visuellt.

Detta innebär att om en knapp visuellt har texten "Skicka beställning", måste det namn som hjälpmedel (som skärmläsare och talstyrningsprogram) får för knappen också innehålla "Skicka beställning". Det tillgängliga namnet får innehålla mer text (t.ex. "Skicka beställning till kundtjänst"), men det måste börja med eller åtminstone inkludera den synliga texten.

Det **tillgängliga namnet** bestäms av en specifik algoritm (Accessible Name and Description Computation) och kan komma från olika källor, i prioritetsordning:

1.  [aria-labelledby]{.inline-code} (om det används)
2.  [aria-label]{.inline-code} (om det används och inget [aria-labelledby]{.inline-code} finns)
3.  Elementets eget innehåll (t.ex. texten inuti ett [\<button\>]{.inline-code} eller [\<a\>]{.inline-code}-element)
4.  Ett associerat [\<label\>]{.inline-code}-element (för formulärkontroller)
5.  [title]{.inline-code}-attributet (används som sista utväg, rekommenderas ej för detta syfte)

Problemet uppstår oftast när [aria-label]{.inline-code} används för att ge ett _annat_ namn än det som syns visuellt.

## Varför detta behövs

Detta krav är främst till för att stödja användare av **talstyrning (voice control)** och **talinmatning (speech input)**:

- **Talstyrning:** Användare interagerar med sidan genom att säga namnet på det element de vill aktivera (t.ex. "Klicka Skicka beställning"). Om det tillgängliga namnet (som talstyrningsprogrammet använder) inte matchar den synliga etiketten, kommer kommandot inte att fungera. Användaren ser "Skicka beställning" men måste kanske säga "Klicka Skicka" för att det ska fungera, vilket är förvirrande och ineffektivt.
- **Tydlighet för alla:** Även om det primärt hjälper talstyrning, bidrar det också till konsekvens och minskar förvirring om det namn som skärmläsare meddelar matchar det som syns på skärmen.

Att säkerställa att etiketten finns i namnet skapar en mer robust och förutsägbar interaktion för användare med olika inmatningsmetoder.

---

## Exempel

### Standardknapp och -länk (Rätt) ✅

För vanliga knappar och länkar kommer det tillgängliga namnet normalt från innehållet, vilket uppfyller kravet automatiskt.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<!-- Tillgängligt namn: "Sök produkter" (från innehållet) -->
<button>Sök produkter</button>

<!-- Tillgängligt namn: "Läs mer om våra tjänster" (från innehållet) -->
<a href="/tjanster">Läs mer om våra tjänster</a>
```

::
**Resultat:** Det tillgängliga namnet matchar exakt den synliga etiketten. En användare kan säga "Klicka Sök produkter".

### Formulärfält med korrekt [\<label\>]{.inline-code} (Rätt) ✅

Det tillgängliga namnet för ett formulärfält kommer från dess associerade [\<label\>]{.inline-code}.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<!-- Tillgängligt namn: "Förnamn:" (från <label>) -->
<label for="fname">Förnamn:</label>
<input type="text" id="fname" name="firstname" />
```

::
**Resultat:** Det tillgängliga namnet matchar den synliga etiketten.

### Användning av [aria-label]{.inline-code} som kompletterar (Rätt) ✅

[aria-label]{.inline-code} används för att lägga till information, men den synliga texten inkluderas fortfarande i början.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<!-- Visuell etikett: "Spara" -->
<!-- Tillgängligt namn: "Spara ändringar i profil" (innehåller "Spara") -->
<button aria-label="Spara ändringar i profil">Spara</button>
```

::
**Resultat:** Talstyrning fungerar fortfarande om användaren säger "Klicka Spara", eftersom "Spara" finns i början av det tillgängliga namnet. Skärmläsaren ger också mer kontext.

### Användning av [aria-label]{.inline-code} som helt ersätter (Fel) ❌

[aria-label]{.inline-code} används för att ge ett helt annat tillgängligt namn än den synliga etiketten.

::code-group{:labels='["HTML (Fel) ❌"]'}

```html showLineNumbers
<!-- Visuell etikett: "OK" -->
<!-- Tillgängligt namn: "Bekräfta och stäng dialog" (innehåller INTE "OK") -->
<button aria-label="Bekräfta och stäng dialog">OK</button>

<!-- Visuell etikett: "Läs mer" -->
<!-- Tillgängligt namn: "Artikel om webbtillgänglighet" (innehåller INTE "Läs mer") -->
<a href="/artikel" aria-label="Artikel om webbtillgänglighet">Läs mer</a>
```

::
**Resultat:** En användare som försöker säga "Klicka OK" eller "Klicka Läs mer" kommer att misslyckas, eftersom talstyrningsprogrammet letar efter "Bekräfta och stäng dialog" respektive "Artikel om webbtillgänglighet".

### Lösning för [aria-label]{.inline-code}-exemplet ovan (Rätt) ✅

Inkludera den synliga texten i början av [aria-label]{.inline-code}.

::code-group{:labels='["HTML (Rätt) ✅"]'}

```html showLineNumbers
<!-- Visuell etikett: "OK" -->
<!-- Tillgängligt namn: "OK - Bekräfta och stäng dialog" -->
<button aria-label="OK - Bekräfta och stäng dialog">OK</button>

<!-- Visuell etikett: "Läs mer" -->
<!-- Tillgängligt namn: "Läs mer - Artikel om webbtillgänglighet" -->
<a href="/artikel" aria-label="Läs mer - Artikel om webbtillgänglighet"
  >Läs mer</a
>

<!-- Alternativ (ofta bättre): Gör den synliga texten mer beskrivande -->
<a href="/artikel">Läs mer om webbtillgänglighet</a>
```

::
**Resultat:** Nu fungerar talstyrning med den synliga etiketten, samtidigt som skärmläsare får den extra informationen. Att göra den synliga texten tydligare från början är dock oftast den bästa lösningen för alla.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.5.3 Label in Name (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)
- [Accessible Name and Description Computation 1.1 (W3C Recommendation)](https://www.w3.org/TR/accname-1.1/)
- [Understanding WCAG SC 2.5.3: Label in Name (W3C Understanding Document)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html#intent)
