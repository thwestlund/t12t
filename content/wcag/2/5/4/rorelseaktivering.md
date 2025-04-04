---
title: 2.5.4 Rörelseaktivering
description: Säkerställ att funktionalitet som aktiveras genom att röra enheten eller genom användarrörelser också kan aktiveras via vanliga gränssnittskomponenter och att rörelseaktiveringen kan stängas av.
level: A
slug: rorelseaktivering
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "rörelseaktivering",
    "motion actuation",
    "enhetsrörelse",
    "device motion",
    "användarrörelse",
    "user motion",
    "skaka",
    "luta",
    "sensor",
    "operabel",
    "indatametoder",
    "motorik",
  ]
canonical: https://t12t.dev/wcag/2/5/4/rorelseaktivering

principleNumber: 2
principleName: Operabel
guidelineNumber: 5
guidelineName: Indatametoder
criterionNumber: 4

og:
  title: 2.5.4 Rörelseaktivering – WCAG
  description: Erbjud alternativ till funktioner som aktiveras av rörelse och tillåt avstängning.
  url: https://t12t.dev/wcag/2/5/4/rorelseaktivering
  type: article

datePublished: 2025-06-13
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Rörelseaktivering

## Beskrivning

Funktionalitet som kan aktiveras genom **rörelse med enheten** (t.ex. skaka, luta) eller **rörelse av användaren** (t.ex. vifta framför en kamera) måste också kunna aktiveras via **vanliga användargränssnittskomponenter** (t.ex. knappar, länkar). Dessutom måste det finnas ett sätt att **stänga av** rörelseaktiveringen för att förhindra oavsiktlig aktivering.

Detta krav gäller **inte** om:

1.  **Rörelsen stöds via ett tillgängligt gränssnitt:** Om operativsystemet eller webbläsaren har inbyggda tillgänglighetsfunktioner som tillåter användaren att utföra motsvarande åtgärd på ett alternativt sätt.
2.  **Rörelsen är nödvändig (essential):** Om rörelsen är absolut nödvändig för funktionen (t.ex. en stegräknare som måste känna av rörelse).
3.  **Avstängning skulle ogiltigförklara aktiviteten:** Om funktionen handlar om att mäta eller reagera på rörelse (t.ex. ett spel som styrs genom att luta enheten).

## Varför detta behövs

Att förlita sig enbart på rörelse för att aktivera funktioner skapar hinder för:

- **Personer med motoriska funktionsnedsättningar:** Kan ha svårt att utföra specifika rörelser som att skaka eller luta enheten med tillräcklig precision eller styrka. Kan också råka aktivera funktioner oavsiktligt på grund av darrningar eller spasmer.
- **Personer vars enheter är monterade:** Enheter monterade på rullstolar eller stativ kan inte enkelt skakas eller lutas.
- **Personer som inte kan utföra vissa kroppsrörelser:** Funktioner som kräver att man viftar eller gör andra gester framför en kamera är inte tillgängliga för alla.
- **Alla användare i vissa situationer:** Det kan vara opraktiskt eller socialt olämpligt att skaka eller vifta med sin enhet. Oavsiktlig aktivering (t.ex. att skaka fram en "ångra"-funktion när man går) kan vara irriterande.

Att erbjuda alternativa kontroller (knappar etc.) och möjlighet att stänga av rörelseaktivering säkerställer att alla kan använda funktionen och undvika oavsiktlig triggning.

---

## Exempel

### "Skaka för att ångra" med alternativ (Rätt) ✅

En applikation låter användaren ångra sin senaste handling genom att skaka enheten. Det finns också en tydlig "Ångra"-knapp synlig i gränssnittet. Dessutom finns en inställning i appen för att helt stänga av "Skaka för att ångra"-funktionen.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
1. Funktion: Ångra senaste handlingen.
2. Rörelseaktivering: Skaka enheten.
3. Alternativ kontroll: En "Ångra"-knapp finns i verktygsfältet.
4. Avstängning: I appens inställningar finns "Inställningar > Gester > Tillåt 'Skaka för att ångra'" (kan bockas ur).
```

::
**Resultat:** Användare som inte kan skaka enheten kan använda Ångra-knappen. Användare som inte vill råka ångra genom oavsiktlig skakning kan stänga av funktionen.

### Luta enheten för att scrolla, med alternativ (Rätt) ✅

En läsapp för långa artiklar erbjuder en funktion där man kan scrolla genom att långsamt luta enheten framåt eller bakåt. Det går dock fortfarande att scrolla på vanligt sätt med fingret (svepning) eller via tangentbord/scrollhjul. Det finns också en inställning för att stänga av scrollning via lutning.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
1. Funktion: Scrolla i text.
2. Rörelseaktivering: Luta enheten.
3. Alternativ kontroll: Standard-scrollning med finger/mus/tangentbord fungerar.
4. Avstängning: Inställning "Aktivera scrollning via lutning" finns och kan stängas av.
```

::
**Resultat:** Lutningsfunktionen är ett extra alternativ, inte det enda sättet. Användare kan stänga av den om den är oönskad eller aktiveras av misstag.

### Endast skaka för att skicka (Fel) ❌

En meddelandeapp kräver att användaren skakar enheten för att skicka ett meddelande. Det finns ingen synlig "Skicka"-knapp.

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
1. Funktion: Skicka meddelande.
2. Rörelseaktivering: Skaka enheten.
3. Alternativ kontroll: Saknas.
4. Avstängning: Saknas.
```

::
**Resultat:** Användare som inte kan skaka enheten, eller vars enhet är monterad, kan inte skicka meddelanden.

### Endast vifta för att byta bild (Fel) ❌

Ett bildgalleri använder enhetens kamera och kräver att användaren viftar med handen framför kameran för att byta till nästa bild. Det finns inga pilar eller knappar för att byta bild.

::code-group{:labels='["Koncept (Fel) ❌"]'}

```text [Beskrivning]
1. Funktion: Byt till nästa bild.
2. Rörelseaktivering: Vifta med handen (användarrörelse).
3. Alternativ kontroll: Saknas.
4. Avstängning: Saknas.
```

::
**Resultat:** Inte tillgängligt för användare som inte kan utföra gesten eller som har stängt av kameran.

### Undantag: Stegräknare (Tillåtet) ✅

En hälsoapp använder enhetens rörelsesensorer för att räkna steg.

**Resultat:** Funktionen är att mäta rörelse, så rörelseaktivering är nödvändig (essential). Kravet gäller inte.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.5.4 Motion Actuation (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html)
- [Webbriktlinjer: R138 Gör det möjligt att använda funktioner utan att behöva röra på enheten eller göra gester framför den](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/gor-det-mojligt-att-anvanda-funktioner-utan-att-behöva-rora-pa-enheten-eller-gora-gester-framfor-den)
- [DeviceMotionEvent (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent) (API för att läsa av enhetsrörelse)
