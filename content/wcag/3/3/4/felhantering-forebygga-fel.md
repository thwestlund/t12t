---
title: 3.3.4 Felhantering (Förebygga fel)
description: För webbsidor som orsakar rättsliga åtaganden eller finansiella transaktioner, modifierar/raderar användarkontrollerad data, eller skickar testresultat, se till att handlingen antingen är reversibel, kontrollerad, eller bekräftad.
level: AA
slug: felhantering-forebygga-fel
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "felhantering",
    "förebygga fel",
    "error prevention",
    "rättsliga åtaganden",
    "finansiella transaktioner",
    "radera data",
    "skicka test",
    "ångra",
    "kontrollera",
    "bekräfta",
    "begriplig",
    "inmatningshjälp",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/3/3/4/felhantering-forebygga-fel

principleNumber: 3
principleName: Begriplig
guidelineNumber: 3
guidelineName: Inmatningshjälp
criterionNumber: 4

og:
  title: 3.3.4 Felhantering (Förebygga fel) – WCAG
  description: Förebygg fel vid viktiga eller oåterkalleliga handlingar.
  url: https://t12t.dev/wcag/3/3/4/felhantering-forebygga-fel
  type: article

datePublished: 2025-07-23
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.6 # AA-kriterier
---

# Felhantering (Förebygga fel)

## Beskrivning

För webbsidor som medför **rättsliga åtaganden** eller **finansiella transaktioner** för användaren, som **modifierar eller raderar användarkontrollerad data** i datalagringssystem, eller som **skickar användarens testresultat**, måste minst ett av följande vara sant:

1.  **Reversibel:** Inskickade data kan ångras. Det finns en mekanism för att dra tillbaka handlingen (t.ex. en ångra-knapp, möjlighet att avboka inom en viss tid).
2.  **Kontrollerad:** Data som användaren matat in valideras för indatafel och användaren ges möjlighet att korrigera felen innan handlingen slutförs. (Se 3.3.1 och 3.3.3).
3.  **Bekräftad:** En mekanism finns tillgänglig för att granska, bekräfta och korrigera information innan den slutligen skickas in (t.ex. en sammanfattningssida innan köp, en "Är du säker?"-dialogruta).

Detta kriterium (Nivå AA) syftar till att minimera risken för allvarliga konsekvenser på grund av misstag vid viktiga interaktioner.

## Varför detta behövs

Misstag vid kritiska handlingar kan få stora negativa följder för användaren:

- Att råka genomföra ett köp av fel vara eller till fel pris.
- Att råka radera viktig information (t.ex. ett helt dokument, en kontaktlista).
- Att ingå ett avtal (t.ex. prenumeration) av misstag.
- Att skicka in ett provsvar av misstag innan man är klar.

Detta är särskilt viktigt för:

- **Personer med motoriska funktionsnedsättningar:** Kan lättare råka klicka fel.
- **Personer med kognitiva funktionsnedsättningar:** Kan missförstå instruktioner eller konsekvenserna av en handling.
- **Personer med läs- eller skrivsvårigheter:** Kan göra fler inmatningsfel.
- **Alla användare:** Alla kan göra misstag, särskilt vid stress eller trötthet.

Genom att kräva att handlingen kan ångras, att data kontrolleras, eller att användaren får bekräfta, minskar man risken för oåterkalleliga misstag.

---

## Exempel

### Bekräftelsesteg vid köp (Rätt) ✅

Innan ett köp slutförs i en webbutik visas en sammanfattningssida där användaren kan granska sin beställning (produkter, antal, pris, leveransadress, betalningsmetod) och måste klicka på en knapp som "Bekräfta köp" eller "Slutför beställning" för att transaktionen ska genomföras.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning av flöde]
1. Lägg varor i varukorg.
2. Gå till kassan.
3. Ange leveransadress.
4. Välj betalningsmetod.
5. **Granska beställning:** Visa alla detaljer tydligt.
6. **Bekräfta:** Användaren måste klicka på "Slutför köp".
```

::
**Resultat:** Uppfyller villkor 3 (Bekräftad). Användaren får en chans att upptäcka och korrigera eventuella fel innan pengar dras eller avtal ingås.

### Kontroll av data innan uppdatering (Rätt) ✅

Ett system för att uppdatera kontaktuppgifter i en profil. När användaren klickar på "Spara ändringar", valideras fälten (t.ex. e-postformat). Om fel finns, visas felmeddelanden (enligt 3.3.1 och 3.3.3) och användaren kan korrigera innan datan sparas.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning av flöde]
1. Användaren ändrar sitt telefonnummer i profilinställningarna.
2. Användaren klickar "Spara ändringar".
3. Systemet validerar det nya numret.
4. Om numret har fel format, visas ett felmeddelande och sparningen sker inte. Användaren kan korrigera.
5. Om numret har korrekt format, sparas ändringen.
```

::
**Resultat:** Uppfyller villkor 2 (Kontrollerad). Systemet hjälper användaren att undvika att spara felaktig data.

### Möjlighet att ångra radering (Rätt) ✅

En e-posttjänst flyttar raderade meddelanden till en "Papperskorg" där de ligger kvar i 30 dagar innan de tas bort permanent. Användaren kan när som helst under dessa 30 dagar återställa meddelanden från papperskorgen.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
1. Användaren markerar ett mejl och klickar på "Radera"-ikonen.
2. Mejlet flyttas till mappen "Papperskorg".
3. Användaren kan gå till "Papperskorg", markera mejlet och välja "Återställ" eller "Flytta till inkorg".
```

::
**Resultat:** Uppfyller villkor 1 (Reversibel). Användaren kan ångra en oavsiktlig radering.

### Direkt radering utan bekräftelse (Fel) ❌

En filhanteringstjänst har en "Radera"-knapp bredvid varje fil. Ett klick på knappen tar omedelbart och permanent bort filen utan någon bekräftelsedialog ("Är du säker?") eller möjlighet att ångra.

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
1. Användaren klickar av misstag på "Radera"-ikonen för en viktig fil.
2. Filen försvinner omedelbart och permanent. Ingen papperskorg finns.
```

::
**Resultat:** Ett misstag leder till oåterkallelig dataförlust. Inget av villkoren (Reversibel, Kontrollerad, Bekräftad) är uppfyllt.

### Skicka provsvar direkt (Fel) ❌

I ett online-prov finns en "Skicka svar"-knapp längst ner. Ett klick på knappen skickar omedelbart in provet för rättning, utan någon chans att granska svaren eller bekräfta att man verkligen är klar.

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
1. Studenten svarar på frågor i ett online-prov.
2. Studenten råkar klicka på "Skicka svar".
3. Provet skickas in direkt, även om studenten inte var klar.
```

::
**Resultat:** Ett misstag kan leda till att ett ofullständigt prov skickas in. En bekräftelsedialog eller en granskningssida borde finnas.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html)
- [W3C Technique G98: Providing the ability for the user to review and correct answers before submitting](https://www.w3.org/WAI/WCAG22/Techniques/general/G98)
- [W3C Technique G164: Providing a mechanism to retrieve information submitted in a previous step of a process](https://www.w3.org/WAI/WCAG22/Techniques/general/G164) (Reversibilitet/korrigering)
- [W3C Technique G168: Requesting confirmation to continue with selected action](https://www.w3.org/WAI/WCAG22/Techniques/general/G168)
