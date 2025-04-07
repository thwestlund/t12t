---
title: 3.3.7 Tillgänglig autentisering (Minimum)
description: Säkerställ att autentiseringsprocesser inte förlitar sig enbart på kognitiva funktionstester, eller att en alternativ, tillgänglig metod eller hjälpmedel erbjuds.
level: AA
slug: tillganglig-autentisering-minimum
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
    "begriplig",
    "inmatningshjälp",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/3/3/7/tillganglig-autentisering-minimum

principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningshjälp
criterionNumber: 7

og:
  title: 3.3.7 Tillgänglig autentisering (Minimum) – WCAG
  description: Kräver inte att användare ska klara kognitiva tester för att logga in, om inte alternativ eller hjälp finns.
  url: https://t12t.dev/wcag/3/3/7/tillganglig-autentisering-minimum
  type: article

datePublished: 2025-07-26
dateModified: 2024-05-17 # Kriteriet är nytt i WCAG 2.2

sitemap:
  lastmod: 2024-05-17
  changefreq: weekly # Authentication is very common
  priority: 0.7 # AA, important new criterion
---

# Tillgänglig autentisering (Minimum)

## Beskrivning

En **kognitiv funktionstest** (en uppgift som kräver att användaren kommer ihåg, manipulerar eller skriver av information) får **inte** krävas för något steg i en autentiseringsprocess, om inte minst ett av följande gäller:

1.  **Alternativ metod:** En annan autentiseringsmetod finns tillgänglig som inte förlitar sig på ett kognitivt funktionstest.
2.  **Hjälpmedel:** En mekanism finns tillgänglig för att hjälpa användaren att slutföra det kognitiva funktionstestet.

Detta kriterium (Nivå AA, nytt i WCAG 2.2) syftar till att göra inloggningsprocesser tillgängliga för personer med olika kognitiva funktionsnedsättningar.

**Vad är ett kognitivt funktionstest i detta sammanhang?**

- **Minneskrävande:** T.ex. att komma ihåg ett lösenord eller ett användarnamn. Att känna igen bilder (som i bild-CAPTCHA) eller sitt eget namn/e-post/telefonnummer räknas _inte_ som ett minnestest här.
- **Transkription:** Att skriva av text eller koder, t.ex. från en förvrängd bild (CAPTCHA) eller från en separat autentiseringsapp. Att kopiera och klistra in en kod räknas _inte_ som transkription här.
- **Pussellösning:** T.ex. att lösa matematiska problem, identifiera mönster, eller lösa ordpussel som en del av inloggningen.
- **Beräkning:** Att utföra matematiska beräkningar.

**Vad är _inte_ ett kognitivt funktionstest (enligt detta kriterium)?**

- Att känna igen objekt (t.ex. "klicka på alla bilder med trafikljus").
- Att identifiera personligt innehåll som användaren själv angett (t.ex. "vilken av dessa bilder laddade du upp?").
- Att skriva in sitt användarnamn, e-postadress eller telefonnummer (räknas som personlig identifikation, inte ett minnestest).

## Varför detta behövs

Kognitiva funktionstester kan utgöra oöverstigliga hinder för många användare:

- **Personer med minnessvårigheter:** Har svårt att komma ihåg komplexa lösenord eller koder.
- **Personer med dyslexi eller andra läs-/skrivsvårigheter:** Kan ha svårt att skriva av förvrängd text (CAPTCHA) korrekt.
- **Personer med nedsatt processhastighet eller exekutiva funktioner:** Kan ha svårt att lösa pussel eller utföra beräkningar under tidspress eller i en stressig inloggningssituation.
- **Personer med nedsatt syn:** Kan ha svårt att både se och skriva av visuella CAPTCHAs, och att komma ihåg komplexa lösenord kan vara extra belastande.

Genom att erbjuda alternativa inloggningsmetoder (som engångskoder via SMS/e-post, biometri, eller "magiska länkar") eller genom att tillåta hjälpmedel (som lösenordshanterare och möjligheten att kopiera/klistra in koder), blir autentiseringen tillgänglig för fler.

---

## Exempel

### Inloggning med lösenord + alternativ (Rätt) ✅

En webbplats kräver användarnamn och lösenord (vilket är ett minnestest). Men den erbjuder också ett alternativ: "Logga in med en engångskod skickad till din e-post".

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
Inloggningssida:
- Fält för Användarnamn
- Fält för Lösenord
- Knapp "Logga in"
- Länk: "Glömt lösenord?"
- Länk/Knapp: "Logga in med engångskod via e-post" (Alternativ metod)
```

::
**Resultat:** Användare som har svårt att komma ihåg lösenordet kan använda den alternativa metoden (Villkor 1).

### Inloggning med 2FA-kod + tillåt klistra in (Rätt) ✅

Efter att ha angett lösenord kräver sidan en sexsiffrig kod från en autentiseringsapp (vilket är ett transkriptionstest). Webbplatsen tillåter dock att användaren kopierar koden från appen och klistrar in den i fältet på webbplatsen.

::code-group{:labels='["HTML + Koncept (Rätt) ✅"]'}

```html showLineNumbers
<label for="2fa-code">Ange kod från autentiseringsapp:</label>
<!-- Fältet blockerar inte inklistring (paste) -->
<input
  type="text"
  id="2fa-code"
  name="2fa_code"
  inputmode="numeric"
  autocomplete="one-time-code"
/>
```

::
**Resultat:** Eftersom användaren kan klistra in koden istället för att skriva av den, finns en mekanism som hjälper till att slutföra testet (Villkor 2). [autocomplete="one-time-code"]{.inline-code} kan också hjälpa.

### CAPTCHA med bara förvrängd text (Fel) ❌

En webbplats använder en CAPTCHA som kräver att användaren tyder och skriver av förvrängda bokstäver och siffror. Det finns inget alternativ (som en ljud-CAPTCHA eller en annan metod).

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
Ett formulär skyddas av en bild-CAPTCHA som visar "fG8hYp" i förvrängd form. Användaren måste skriva in dessa tecken. Inga alternativ erbjuds.
```

::
**Resultat:** Detta är ett transkriptionstest utan alternativ eller hjälpmedel (inom ramen för webbplatsen). Uppfyller inte kravet. (Moderna CAPTCHA som reCAPTCHA v3 eller hCaptcha som inte kräver direkt interaktion är oftast OK).

### Inloggning kräver endast lösenord (Fel) ❌

En webbplats kräver endast användarnamn och lösenord för inloggning. Det finns inga alternativa metoder och inga specifika mekanismer på webbplatsen för att hjälpa till med lösenordet (förutom webbläsarens inbyggda funktioner, vilka inte räcker enligt WCAG för att uppfylla Villkor 2).

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
Inloggningssida:
- Fält för Användarnamn
- Fält för Lösenord
- Knapp "Logga in"
- Länk: "Glömt lösenord?" (Detta är för återställning, inte en *alternativ inloggningsmetod*)
- Inga andra alternativ finns.
```

::
**Resultat:** Inloggningen förlitar sig enbart på ett minnestest (lösenordet) utan att erbjuda en alternativ metod eller en inbyggd hjälpfunktion (Villkor 1 eller 2 är inte uppfyllda).

### Bild-CAPTCHA ("Klicka på alla bussar") (OK enligt detta kriterium) ✅

En webbplats använder en CAPTCHA där användaren ska identifiera och klicka på bilder som innehåller ett visst objekt (t.ex. bussar, cyklar, trafikljus).

**Resultat:** Detta klassas som _objektigenkänning_ och är specifikt undantaget från definitionen av ett kognitivt funktionstest i detta kriterium. Därmed uppfylls kravet, även om denna typ av CAPTCHA kan ha andra tillgänglighetsproblem (t.ex. för synskadade, vilket kräver ljudalternativ enligt andra kriterier).

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.3.7 Accessible Authentication (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html)
- [Webbriktlinjer: R146 Kräv inte att användare ska klara kognitiva tester för att logga in](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/krav-inte-att-anvandare-ska-klara-kognitiva-tester-for-att-logga-in)
- [Definition of Cognitive Function Test (WCAG Glossary)](https://www.w3.org/TR/WCAG22/#dfn-cognitive-function-test)
- [Understanding Success Criterion 3.3.7: Accessible Authentication (Minimum) (W3C Understanding Document)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html) (Ger detaljerade förklaringar och exempel).
