---
title: Manuell tillgänglighetstestning - T12T
description: Guide till hur du utför manuella tester för att hitta tillgänglighetsproblem som automatiserade verktyg inte kan upptäcka.
---

# Manuell tillgänglighetstestning

Medan automatiserade verktyg är värdefulla för att hitta tekniska tillgänglighetsproblem, kan de endast identifiera omkring 30-40% av alla potentiella tillgänglighetshinder. För att säkerställa verklig tillgänglighet är manuell testning oumbärlig. Denna guide ger dig metoder, checklistor och tillvägagångssätt för effektiv manuell tillgänglighetstestning.

## Varför är manuell testning nödvändig?

Manuell testning är avgörande för att upptäcka problem som kräver mänskligt omdöme, som:

- **Meningsfullhet:** Är alternativtexter och formuläretiketter informativa och användbara?
- **Kontext:** Fungerar innehållet i sitt sammanhang?
- **Användarupplevelse:** Är upplevelsen logisk och konsekvent?
- **Semantik:** Används HTML-element korrekt för deras avsedda syfte?
- **Funktionalitet:** Fungerar allt som förväntat med olika hjälpmedel?

## Grundläggande tillvägagångssätt

### 1. Tangentbordsnavigering

Testa att använda webbplatsen helt utan mus, endast med tangentbordet.

**Vad du behöver kontrollera:**

- Kan du nå alla interaktiva element (länkar, knappar, formulärfält)?
- Är fokusordningen logisk och följer visuell/innehållsmässig ordning?
- Är fokus tydligt synligt vid varje steg?
- Fungerar tangentbordsgenvägar och fällor (t.ex. modaler) korrekt?
- Kan du komma ur alla menyer och dialoger med Escape-tangenten?

**Nyckeltangenter för testning:**
- **Tab:** Flytta framåt mellan interaktiva element
- **Shift+Tab:** Flytta bakåt
- **Enter:** Aktivera länkar, knappar, skicka formulär
- **Mellanslag:** Aktivera knappar, markera kryssrutor
- **Piltangenter:** Navigera i menyer, radiogrupper, skjutreglage
- **Escape:** Stäng modaler, popup-fönster, menyer

### 2. Skärmläsartestning

Använd en skärmläsare för att navigera webbplatsen. Se vår [skärmläsarsektion](/skärmläsare) för detaljerade instruktioner för olika skärmläsare.

**Vad du behöver kontrollera:**

- Läses innehållet upp i logisk ordning?
- Är bilder, knappar och andra element korrekt beskrivna?
- Meddelas statusändringar (t.ex. formulärfel, bekräftelser)?
- Är formulärfält korrekt kopplade till etiketter?
- Fungerar landmärken och rubriker för att skapa en tydlig struktur?

### 3. Strukturell granskning

Undersök sidans HTML-struktur för att säkerställa korrekt semantik.

**Vad du behöver kontrollera:**

- Används rätt HTML-element för rätt syfte (knappar för actions, länkar för navigation)?
- Följer rubriker (h1-h6) en logisk hierarki?
- Har sidan landmärken (header, nav, main, footer) för enkel navigation?
- Används listor för grupprelaterade element?
- Är tabeller korrekt kodade med rubriker och sammanfattningar?

### 4. Innehållsanalys

Granska innehållet för tydlighet och begriplighet.

**Vad du behöver kontrollera:**

- Är texten klar och koncis?
- Förklaras komplexa termer och förkortningar?
- Finns det tydliga instruktioner för interaktiva element?
- Är felmeddelanden konstruktiva och specifika?
- Är innehållet tillgängligt på ett läsbart sätt?

### 5. Visuell granskning

Kontrollera visuella aspekter av webbplatsen.

**Vad du behöver kontrollera:**

- Är textkontrasten tillräcklig (4.5:1 för normal text, 3:1 för stor text)?
- Förlitar sig informationen enbart på färg?
- Är interaktiva element tydligt identifierbara?
- Är texten läsbar när sidan förstoras 200%?
- Finns det tillräckligt med mellanrum mellan interaktiva element för motoriska begränsningar?

## Systematisk testning med WCAG

WCAG (Web Content Accessibility Guidelines) ger ett strukturerat ramverk för tillgänglighetstestning. Följ dessa steg för systematisk granskning baserad på WCAG:

### 1. Förstå WCAG-principerna

WCAG är organiserat i fyra principer, var och en med specifika riktlinjer och framgångskriterier:

1. **Möjlig att uppfatta (Perceivable):** Information och gränssnitt måste presenteras på sätt som användaren kan uppfatta.
2. **Hanterbar (Operable):** Gränssnittskomponenter måste vara hanterbara.
3. **Begriplig (Understandable):** Information och hantering av gränssnittet måste vara begripligt.
4. **Robust (Robust):** Innehållet måste vara robust nog att fungera med olika hjälpmedel och tekniker.

### 2. Använd WCAG-checklistor

Skapa en checklista baserad på WCAG-kriterier relevanta för din webbplats. Här är en förenklad version med fokus på nivå A och AA:

#### Möjlig att uppfatta:
- [ ] Icke-text innehåll har alternativ text (1.1.1)
- [ ] Förinspelade ljud- och videoinnehåll har textning (1.2.1-1.2.5)
- [ ] Information, struktur och relationer kan programmatiskt fastställas (1.3.1)
- [ ] Sekvensen av innehållet påverkar inte dess betydelse (1.3.2)
- [ ] Instruktioner förlitar sig inte enbart på sensoriska egenskaper (1.3.3)
- [ ] Innehållet är inte begränsat till en specifik skärmorientering (1.3.4)
- [ ] Inmatningssyftet kan programmatiskt fastställas (1.3.5)
- [ ] Färg används inte som det enda sättet att förmedla information (1.4.1)
- [ ] Det finns kontroller för ljud som spelas automatiskt (1.4.2)
- [ ] Kontrasten för text är minst 4.5:1 (1.4.3)
- [ ] Text kan förstoras upp till 200% utan att funktionalitet går förlorad (1.4.4)
- [ ] Text används istället för bilder av text (1.4.5)
- [ ] Innehållet är responsivt och fungerar vid 320px bredd (1.4.10)
- [ ] Icke-text kontrast är minst 3:1 (1.4.11)
- [ ] Textavstånd kan justeras utan att innehåll eller funktionalitet går förlorad (1.4.12)

#### Hanterbar:
- [ ] All funktionalitet är åtkomlig via tangentbord (2.1.1)
- [ ] Användare fastnar inte i någon del av gränssnittet vid tangentbordsnavigering (2.1.2)
- [ ] Tangentkortkommandon kan stängas av eller konfigureras om (2.1.4)
- [ ] Innehåll som kräver tidsbegränsningar kan justeras (2.2.1)
- [ ] Automatiskt rörligt innehåll kan pausas eller stoppas (2.2.2)
- [ ] Inga innehållsblinkningar över tre gånger per sekund (2.3.1)
- [ ] Det finns sätt att hoppa över återkommande innehåll (2.4.1)
- [ ] Sidor har beskrivande titlar (2.4.2)
- [ ] Fokusordningen bevarar mening och funktion (2.4.3)
- [ ] Länksyftet kan förstås från länktexten (2.4.4)
- [ ] Det finns flera sätt att hitta sidor (2.4.5)
- [ ] Rubriker och etiketter beskriver ämne eller syfte (2.4.6)
- [ ] Fokusindikatorn är tydligt synlig (2.4.7)
- [ ] Multipla vägar för att hitta innehåll (2.4.5)
- [ ] Gester för pekskärmar har alternativ (2.5.1)
- [ ] Pekgester kan avbrytas eller ångras (2.5.2)
- [ ] Synliga etiketter finns i namn som kan bestämmas programmatiskt (2.5.3)
- [ ] Funktioner som aktiveras genom rörelse har alternativ (2.5.4)

#### Begriplig:
- [ ] Sidans språk kan fastställas programmatiskt (3.1.1)
- [ ] Språket för specifika delar kan fastställas programmatiskt (3.1.2)
- [ ] När ett element får fokus ändras inte sammanhanget (3.2.1)
- [ ] Användarinmatning ändrar inte sammanhanget automatiskt (3.2.2)
- [ ] Navigeringsmekanismer är konsekventa (3.2.3)
- [ ] Komponenter med samma funktion är identifierbara (3.2.4)
- [ ] Felidentifiering kommuniceras tydligt (3.3.1)
- [ ] Etiketter och instruktioner finns för inmatning (3.3.2)
- [ ] Förslag vid fel ges när möjligt (3.3.3)
- [ ] Viktiga åtgärder kan granskas, bekräftas eller ångras (3.3.4)

#### Robust:
- [ ] HTML är välformad och följer specifikationerna (4.1.1)
- [ ] Namn, roll och värde kan bestämmas programmatiskt för användargränssnittskomponenter (4.1.2)
- [ ] Statusmeddelanden kan bestämmas programmatiskt (4.1.3)

### 3. Dokumentera resultat

För varje tillgänglighetsproblem du hittar, dokumentera:

- Beskrivning av problemet
- Var det förekommer (URL, specifik komponent)
- WCAG-kriterium som inte uppfylls
- Allvarlighetsgrad (kritisk, hög, medium, låg)
- Rekommenderad lösning
- Skärmbilder eller inspelningar som visar problemet

## Smarta testtekniker

### Tillfälliga funktionsnedsättningar

Simulera funktionsnedsättningar för att bättre förstå olika användarupplevelser:

- **Motorik:** Använd endast tangentbord, eller använd mus med fel hand
- **Syn:** Stäng av bildskärmen och använd skärmläsare
- **Hörsel:** Stäng av ljudet när du ser på video
- **Kognition:** Försök använda webbplatsen medan du har en annan uppgift samtidigt

### Testning med olika inställningar

Prova följande variationer:

- Förstora webbläsaren till 200%
- Ändra skärmorienteringen (liggande/stående)
- Använd olika webbläsare och enheter
- Aktivera hög kontrast-läge
- Ändra textstorlek i webbläsarinställningarna
- Avaktivera CSS helt

### Expert-heuristisk utvärdering

Genomför utvärderingar där tillgänglighetsexperter systematiskt granskar webbplatsen baserat på sin expertis och erfarenhet.

**Steg i processen:**
1. Definiera användargrupper och scenarier
2. Välj relevanta heuristiker (riktlinjer) för utvärdering
3. Utför individuella granskningar
4. Sammanställ och prioritera identifierade problem
5. Presentera resultat med specifika exempel och lösningsförslag

## Exempel på testprotokoll

Här är ett exempelprotokoll för att testa ett webbformulär:

```
Testprotokoll: Kontaktformulär (example.com/kontakt)
Testdatum: 2025-03-11
Testare: Anna Svensson

Inledande granskning:
✓ Formuläret har en tydlig rubrik som beskriver syftet
✓ Varje fält har en synlig etikett
✓ Obligatoriska fält är markerade både visuellt och med aria-required
✗ Felmeddelanden visas endast med färg (röd text utan ikon eller symbol)

Tangentbordsnavigering:
✓ Alla fält kan nås med Tab-tangenten
✓ Fokusordningen följer visuell layout
✗ Fokusindikatorn är otydlig på textfält

Skärmläsartestning (NVDA):
✓ Fältetiketter är korrekt associerade med inmatningsfält
✓ Obligatoriska fält meddelas korrekt
✗ Felmeddelanden meddelas inte automatiskt när formuläret skickas

Semantisk struktur:
✓ HTML5 input-typer används korrekt (email, tel)
✓ Fieldset och legend används för att gruppera relaterade fält
✗ Formuläret saknar ett aria-live-område för felmeddelanden

Identifierade problem:
1. Felmeddelanden kommuniceras endast med färg (1.4.1)
   Allvarlighet: Hög
   Lösning: Lägg till ikoner och text som inte förlitar sig på färg

2. Fokusindikator är otydlig (2.4.7)
   Allvarlighet: Medium
   Lösning: Förbättra fokusindikatorer med tjockare ramar och kontrastfärg

3. Felmeddelanden meddelas inte för skärmläsare (4.1.3)
   Allvarlighet: Hög
   Lösning: Använd aria-live-regioner för att annonsera fel
```

## Slutsats

Manuell testning är en avgörande del av ett heltäckande tillgänglighetsarbete. Genom att kombinera systematisk granskning av WCAG-kriterier med användning av hjälpmedel och simulering av olika användarscenarier kan du identifiera och åtgärda tillgänglighetsproblem som automatiserade verktyg inte kan hitta.

För bästa resultat, integrera manuell testning tidigt och kontinuerligt i utvecklingsprocessen, och involvera, när möjligt, användare med olika funktionsförmågor i dina tester.