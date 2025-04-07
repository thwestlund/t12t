---
title: 3.2.6 Konsekvent hjälp
description: Om en webbplats erbjuder någon form av hjälpfunktion, se till att den finns på en konsekvent plats inom webbplatsen.
level: A
slug: konsekvent-hjalp
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "konsekvent hjälp",
    "consistent help",
    "hjälp",
    "support",
    "kontakt",
    "FAQ",
    "navigation",
    "placering",
    "förutsägbar",
    "operabel",
    "kognitiv",
  ]
canonical: https://t12t.dev/wcag/3/2/6/konsekvent-hjalp

principleNumber: 3
principleName: Begriplig
guidelineNumber: 2
guidelineName: Förutsägbar
criterionNumber: 6

og:
  title: 3.2.6 Konsekvent hjälp – WCAG
  description: Om hjälp erbjuds, se till att den finns på en konsekvent plats.
  url: https://t12t.dev/wcag/3/2/6/konsekvent-hjalp
  type: article

datePublished: 2025-07-15
dateModified: 2024-05-17 # Kriteriet är nytt i WCAG 2.2

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Konsekvent hjälp

## Beskrivning

Om en webbsida innehåller någon av följande **hjälpmekanismer**, och dessa mekanismer upprepas på flera webbsidor, måste de förekomma på **samma relativa plats** i förhållande till annat innehåll inom uppsättningen av webbsidor (webbplatsen), såvida inte en ändring initieras av användaren:

- Kontaktinformation för människor (t.ex. telefonnummer, e-postadress).
- Kontaktmekanism för människor (t.ex. kontaktformulär, chattfunktion).
- Självhjälpsalternativ (t.ex. länk till FAQ, hjälpavsnitt, supportdatabas).
- En helautomatiserad kontaktmekanism (t.ex. en chatbot).

Detta kriterium (Nivå A, nytt i WCAG 2.2) liknar 3.2.3 (Konsekvent navigering), men fokuserar specifikt på placeringen av _hjälpfunktioner_. Om en webbplats erbjuder en länk till "Kontakta oss" eller en "Hjälp"-sektion, ska denna länk eller funktion finnas på samma ställe (t.ex. alltid i sidhuvudet, alltid i sidfoten, alltid längst upp till höger) på alla sidor där den förekommer.

## Varför detta behövs

När användare stöter på problem eller har frågor är det viktigt att de snabbt och enkelt kan hitta hjälp:

- **Förutsägbarhet:** Användare lär sig var de kan hitta hjälp och behöver inte leta på olika ställen på varje ny sida.
- **Minskad stress och frustration:** Att lätt kunna hitta hjälp när man kört fast minskar stress, särskilt för användare som redan kämpar med innehållet eller gränssnittet.
- **Effektivitet:** Användare kan snabbare få den hjälp de behöver för att slutföra sin uppgift.
- **Särskilt viktigt för vissa grupper:** Personer med kognitiva funktionsnedsättningar, ångest, eller de som är ovana vid webben har extra stor nytta av att hjälpfunktioner är lätta att hitta och alltid finns på samma plats.

Konsekvent placering av hjälp gör det mer sannolikt att användare hittar och använder de stödresurser som erbjuds.

---

## Exempel

### Hjälplänk alltid i sidhuvudet (Rätt) ✅

På varje sida på webbplatsen finns en länk märkt "Hjälp & kontakt" längst upp till höger i sidhuvudet.

::code-group{:labels='["Konceptuell HTML (Rätt) ✅"]'}

```html showLineNumbers
<body>
  <header>
    <!-- Logotyp, huvudmeny... -->
    <div class="header-help">
      <a href="/hjalp">Hjälp & kontakt</a>
    </div>
  </header>
  <main>
    <!-- Sidans innehåll -->
  </main>
  <footer>
    <!-- Sidfot -->
  </footer>
</body>
```

```css showLineNumbers
/* CSS för att placera hjälplänken konsekvent, t.ex. längst upp till höger */
.header-help {
  position: absolute; /* Eller använd flexbox/grid i headern */
  top: 10px;
  right: 10px;
}
```

::
**Resultat:** Användaren kan alltid förvänta sig att hitta hjälplänken på samma plats i sidhuvudet, oavsett vilken sida de besöker.

### Kontaktinformation alltid i sidfoten (Rätt) ✅

Varje sida på webbplatsen har en sidfot som innehåller företagets telefonnummer och en länk till ett kontaktformulär. Denna information presenteras på samma sätt och på samma relativa plats i sidfoten på alla sidor.

::code-group{:labels='["Konceptuell HTML (Rätt) ✅"]'}

```html showLineNumbers
<footer>
  <div class="contact-info">
    <p>Telefon: <a href="tel:+468123456">08-123 456</a></p>
    <p><a href="/kontakt">Kontakta oss via formulär</a></p>
  </div>
  <p>© 2024</p>
</footer>
```

::
**Resultat:** Användaren vet att de alltid kan scrolla ner till botten av sidan för att hitta kontaktuppgifterna.

### Hjälpfunktion på olika platser (Fel) ❌

På startsidan finns en "Chatta med oss"-knapp längst ner till höger. På produktsidorna finns istället en länk "Frågor? Se vår FAQ" i en sidomeny. På kontaktsidan finns ett formulär, men ingen chatt eller FAQ-länk.

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
- Startsida: Chatt-knapp nere till höger.
- Produktsida: FAQ-länk i vänster sidomeny.
- Annan sida: Hjälplänk i sidfoten.
```

::
**Resultat:** Användaren måste leta efter hjälpfunktionen på olika ställen beroende på vilken sida de är på. Det saknas konsekvens i placeringen.

### Undantag: Steg i en process (OK om hjälp saknas där)

Om en sida är ett steg i en process (t.ex. kassan i en webbutik) och _inte_ innehåller någon av de upprepade hjälpfunktionerna (kanske för att minimera distraktioner), bryter det inte mot kravet. Kravet gäller bara _om_ en hjälpfunktion upprepas på flera sidor – då måste den placeras konsekvent _när_ den upprepas.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.2.6 Consistent Help (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html)
- [Understanding Success Criterion 3.2.6: Consistent Help (W3C Understanding Document)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html) (Innehåller definition av "mekanism" och "samma relativa plats").
