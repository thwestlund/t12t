---
title: 3.3.8 Tillgänglig autentisering (Förbättrad)
description: Säkerställ att autentiseringsprocesser inte förlitar sig på kognitiva funktionstester och att mekanismer för lösenordsåterställning är tillgängliga.
level: AAA
slug: tillganglig-autentisering-forbattrad
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "autentisering",
    "authentication",
    "kognitivt funktionstest",
    "cognitive function test",
    "captcha",
    "lösenord",
    "minne",
    "pussel",
    "transkription",
    "lösenordsåterställning",
    "begriplig",
    "inmatningshjälp",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/3/3/8/tillganglig-autentisering-forbattrad

principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningshjälp
criterionNumber: 8

og:
  title: 3.3.8 Tillgänglig autentisering (Förbättrad) – WCAG
  description: Kräver inte kognitiva tester för autentisering och stödjer lösenordsåterställning.
  url: https://t12t.dev/wcag/3/3/8/tillganglig-autentisering-forbattrad
  type: article

datePublished: 2025-07-27
dateModified: 2024-05-18 # Updated modification date

sitemap:
  lastmod: 2024-05-18 # Updated modification date
  changefreq: monthly
  priority: 0.4
---

# Tillgänglig autentisering (Förbättrad)

## Beskrivning

Ett **kognitivt funktionstest** (en uppgift som kräver att användaren kommer ihåg, manipulerar eller skriver av information) får **inte** krävas för något steg i en autentiseringsprocess, om inte minst ett av följande gäller:

1.  **Alternativ metod:** En annan autentiseringsmetod finns tillgänglig som inte förlitar sig på ett kognitivt funktionstest.
2.  **Hjälpmedel:** En mekanism finns tillgänglig för att hjälpa användaren att slutföra det kognitiva funktionstestet.
3.  **Objektigenkänning:** Testet går ut på att känna igen objekt.
4.  **Personligt innehåll:** Testet går ut på att identifiera icke-textbaserat innehåll som användaren själv har tillhandahållit till webbplatsen (t.ex. bilder, video, ljud).

**OCH** (detta är tillägget jämfört med 3.3.7):

Om autentiseringsprocessen innefattar ett steg för att återställa lösenord, får **inte heller återställningsprocessen** kräva ett kognitivt funktionstest.

Detta kriterium (Nivå AAA, nytt i WCAG 2.2) är en striktare version av 3.3.7 (Nivå AA). Det ställer samma grundkrav på själva inloggningen (att undvika kognitiva tester utan alternativ/hjälp) men lägger till två nya undantag (objektigenkänning och personligt innehåll är OK) och framför allt ett **krav på att även processen för att återställa lösenordet måste vara tillgänglig** och inte kräva ett kognitivt test.

## Varför detta behövs

Utöver skälen för 3.3.7 (att göra inloggning möjlig för personer med kognitiva svårigheter), adresserar detta AAA-kriterium specifikt återställningsprocessen:

- **Lösenordsåterställning är kritisk:** För användare som har svårt att komma ihåg lösenord är en tillgänglig återställningsprocess avgörande för att de överhuvudtaget ska kunna komma åt sitt konto igen.
- **Undvika moment 22:** Om inloggningen kräver ett lösenord (minnestest) och återställningen också kräver att man kommer ihåg något annat (t.ex. svar på hemliga frågor - också ett minnestest), kan användaren hamna i en återvändsgränd.
- **AAA-nivåns högre krav:** Syftar till att eliminera så många hinder som möjligt, inklusive de som uppstår när användaren glömt sina inloggningsuppgifter.

De nya undantagen för objektigenkänning och personligt innehåll ger viss flexibilitet, då dessa tester anses vara mindre beroende av minne eller transkription än traditionella lösenord eller CAPTCHAs.

---

## Exempel

_(Många exempel liknar 3.3.7, men med fokus på AAA-kraven)_

### Inloggning och återställning utan kognitiva tester (Rätt) ✅

Webbplatsen erbjuder flera inloggningsalternativ:

- Lösenord (OK om alternativ finns)
- Engångskod via SMS (Alternativ metod)
- "Magisk länk" via e-post (Alternativ metod)

Processen för lösenordsåterställning:

1. Användaren anger sin e-postadress.
2. En länk för att skapa ett nytt lösenord skickas till e-postadressen.
3. Användaren klickar på länken och får sätta ett nytt lösenord.
   Inga minnestest (som hemliga frågor) eller CAPTCHAs krävs i återställningsflödet.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
Inloggning: Flera metoder utan krav på kognitivt test (eller med alternativ).
Återställning: Skicka länk till e-post, inga extra tester.
```

::
**Resultat:** Både inloggning och återställning är tillgängliga utan att kräva kognitiva tester (förutom de som har alternativ eller hjälpmedel).

### Inloggning med objektigenkänning (Rätt) ✅

Autentiseringen sker genom att användaren presenteras med ett rutnät av bilder och ska klicka på alla bilder som innehåller ett specifikt objekt (t.ex. en katt).

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
Inloggningssteg: "Verifiera att du är människa genom att klicka på alla bilder som innehåller en cykel."
```

::
**Resultat:** Detta är tillåtet enligt undantag 3, även utan andra alternativ eller hjälpmedel inbyggda i webbplatsen (förutsatt att själva bildtestet är tillgängligt för synskadade etc., vilket täcks av andra kriterier).

### Återställning av lösenord via hemliga frågor (Fel) ❌

Processen för att återställa ett glömt lösenord kräver att användaren svarar korrekt på en eller flera "hemliga frågor" som de ställde in tidigare (t.ex. "Vad hette ditt första husdjur?").

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
Återställningsflöde:
1. Ange användarnamn.
2. Svara på säkerhetsfråga: "Vilken gata växte du upp på?"
3. Om svaret är rätt, får användaren sätta nytt lösenord.
```

::
**Resultat:** Att komma ihåg svaret på en hemlig fråga är ett minnestest. Eftersom återställningsprocessen kräver detta utan alternativ, uppfylls inte AAA-kravet.

### CAPTCHA i återställningsflödet (Fel) ❌

För att få en länk för lösenordsåterställning skickad till sin e-post måste användaren först lösa en CAPTCHA som kräver avskrift av förvrängd text.

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
Formulär för "Glömt lösenord":
1. Fält för E-postadress.
2. Bild-CAPTCHA med förvrängd text att skriva av.
3. Knapp "Skicka återställningslänk".
```

::
**Resultat:** Återställningsprocessen kräver ett transkriptionstest (CAPTCHA) utan tillåtet alternativ eller hjälpmedel. Uppfyller inte AAA.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.3.8 Accessible Authentication (Enhanced) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html)
- [Förstå WCAG SC 3.3.7 (Nivå AA)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html) (Det grundläggande kravet för autentisering).
- [Definition of Cognitive Function Test (WCAG Glossary)](https://www.w3.org/TR/WCAG22/#dfn-cognitive-function-test)
- [Understanding Success Criterion 3.3.8: Accessible Authentication (Enhanced) (W3C Understanding Document)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html) (Ger detaljerade förklaringar).
