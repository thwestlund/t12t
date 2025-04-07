---
title: 3.3.6 Felhantering (Alla fel)
description: För alla formulär där användaren måste skicka in information, se till att inskickade data antingen är reversibla, kontrollerade, eller bekräftade.
level: AAA
slug: felhantering-alla-fel
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "felhantering",
    "förebygga fel",
    "error prevention",
    "formulär",
    "skicka data",
    "ångra",
    "kontrollera",
    "bekräfta",
    "begriplig",
    "inmatningshjälp",
    "operabel",
    "kognitiv",
  ]
canonical: https://t12t.dev/wcag/3/3/6/felhantering-alla-fel

principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningshjälp
criterionNumber: 6

og:
  title: 3.3.6 Felhantering (Alla fel) – WCAG
  description: Förebygg fel vid all inskickning av data från användaren.
  url: https://t12t.dev/wcag/3/3/6/felhantering-alla-fel
  type: article

datePublished: 2025-07-25
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Felhantering (Alla fel)

## Beskrivning

För webbsidor som kräver att användaren **skickar in information**, måste minst ett av följande vara sant:

1.  **Reversibel:** Inskickade data kan ångras.
2.  **Kontrollerad:** Data som användaren matat in valideras för indatafel och användaren ges möjlighet att korrigera felen.
3.  **Bekräftad:** En mekanism finns tillgänglig för att granska, bekräfta och korrigera information innan den slutligen skickas in.

Detta kriterium (Nivå AAA) är en utökning av Kriterium 3.3.4 (Felhantering - Förebygga fel, Nivå AA). Medan 3.3.4 endast gällde specifika situationer (rättsliga åtaganden, finansiella transaktioner, datamodifiering/-radering, testresultat), gäller detta AAA-kriterium för **alla** situationer där användaren skickar in information, till exempel:

- Skicka ett kontaktformulär.
- Publicera ett blogginlägg eller en kommentar.
- Skicka ett enkelt sökformulär.
- Anmäla sig till ett nyhetsbrev.

Samma tre mekanismer gäller: handlingen måste kunna ångras, eller så måste data kontrolleras för fel innan inskickning, eller så måste användaren få en chans att granska och bekräfta.

## Varför detta behövs

Att utöka kravet på felprevention till _all_ inskickning av data ger en ännu högre nivå av stöd och säkerhet för användare, särskilt de som lätt gör misstag eller har svårt att korrigera dem:

- **Minskar alla typer av fel:** Förhindrar att användare av misstag skickar iväg ofärdiga kommentarer, felaktiga sökningar, eller kontaktformulär med stavfel i e-postadressen.
- **Ökad trygghet:** Användare kan känna sig tryggare när de interagerar med formulär, i vetskap om att det finns skyddsnät mot misstag.
- **Stöd för kognitiva funktionsnedsättningar:** Personer som har svårt att upptäcka eller korrigera sina egna fel får hjälp genom validering eller bekräftelsesteg.
- **Bättre datakvalitet:** Genom att kontrollera data eller låta användaren bekräfta minskar risken för att felaktig information skickas till systemet.

På AAA-nivå prioriteras användarens kontroll och möjligheten att undvika och korrigera alla typer av misstag vid inskickning av information.

---

## Exempel

_(Många exempel liknar de för 3.3.4, men nu appliceras de på alla typer av formulär)_

### Kommentarsformulär med förhandsgranskning (Rätt) ✅

Ett kommentarsfält på en blogg. När användaren klickar på "Skicka kommentar" visas först en förhandsgranskning av kommentaren, tillsammans med en "Bekräfta"-knapp och en "Redigera"-knapp.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning av flöde]
1. Användaren skriver en kommentar i ett textfält.
2. Användaren klickar "Skicka kommentar".
3. En förhandsgranskning visas: "Din kommentar: [kommentaren här]".
4. Knappar visas: "Bekräfta och publicera" och "Gå tillbaka och redigera".
5. Kommentaren publiceras först när användaren klickar "Bekräfta".
```

::
**Resultat:** Uppfyller villkor 3 (Bekräftad). Användaren kan läsa igenom och korrigera innan publicering.

### Kontaktformulär med validering (Rätt) ✅

Ett enkelt kontaktformulär validerar att obligatoriska fält (t.ex. namn, e-post) är ifyllda och att e-postadressen har ett giltigt format innan formuläret tillåts skickas. Felmeddelanden visas tydligt (enligt 3.3.1 och 3.3.3).

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning av flöde]
1. Användaren fyller i kontaktformuläret men missar e-postadressen.
2. Användaren klickar "Skicka meddelande".
3. Systemet upptäcker att e-postfältet är tomt.
4. Ett felmeddelande "E-postadress måste fyllas i" visas vid fältet.
5. Formuläret skickas inte. Användaren kan fylla i e-postadressen och försöka igen.
```

::
**Resultat:** Uppfyller villkor 2 (Kontrollerad). Förhindrar att ofullständiga formulär skickas.

### Nyhetsbrevsprenumeration med ångra-möjlighet (Rätt) ✅

När en användare anmäler sig till ett nyhetsbrev skickas ett bekräftelsemejl till den angivna adressen. Mejlet innehåller en länk för att bekräfta prenumerationen, men också en länk eller information om hur man _avbryter_ prenumerationen om anmälan var ett misstag (t.ex. "Om du inte vill prenumerera, ignorera detta mejl eller klicka här för att avbryta").

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
1. Användaren anger e-postadress och klickar "Prenumerera".
2. Ett mejl skickas: "Bekräfta din prenumeration genom att klicka här. Om du ångrar dig, klicka här för att avbryta."
3. Prenumerationen aktiveras först efter bekräftelse, och kan avbrytas.
```

::
**Resultat:** Uppfyller villkor 1 (Reversibel) och/eller 3 (Bekräftad, via e-post). Misstag kan enkelt rättas till.

### Sökfält som skickar direkt vid Enter utan kontroll (Fel) ❌

Ett sökfält på en webbplats skickar iväg sökningen direkt när användaren trycker Enter, även om fältet är tomt eller innehåller uppenbara stavfel. Det finns ingen kontroll eller förslag.

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
1. Användaren skriver "cykelhjäml" i sökfältet.
2. Användaren trycker Enter.
3. Sökningen utförs direkt på "cykelhjäml" utan att systemet föreslår "cykelhjälm" eller frågar "Menade du...?".
```

::
**Resultat:** Även om detta är vanligt beteende, uppfyller det strikt taget inte AAA om inga förslag eller kontroller ges. Bättre vore att åtminstone föreslå korrigeringar på resultatsidan (vilket uppfyller villkor 2 retroaktivt). För att vara strikt AAA _innan_ inskickning skulle man kunna validera för tomma fält eller ge stavningsförslag via JavaScript.

### Enkelt formulär utan någon felhantering (Fel) ❌

Ett formulär med ett enda fält, t.ex. för att skicka feedback, skickar informationen direkt vid klick på "Skicka" utan någon validering (t.ex. att fältet inte är tomt), utan bekräftelse, och utan möjlighet att ångra.

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
1. Användaren ska skriva feedback i ett textfält.
2. Användaren klickar av misstag på "Skicka feedback" innan de skrivit något.
3. Ett tomt meddelande skickas. Ingen varning, ingen bekräftelse.
```

::
**Resultat:** Bryter mot AAA eftersom ingen av de tre skyddsmekanismerna finns. Åtminstone en kontroll (t.ex. att fältet inte är tomt) borde finnas.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.3.6 Error Prevention (All) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all.html)
- [Förstå WCAG SC 3.3.4 (Nivå AA)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html) (För jämförelse med det mindre omfattande AA-kravet).
- (De tekniska länkarna är desamma som för 3.3.4).
