---
title: NVDA Skärmläsarguide - T12T
description: En komplett guide till NVDA - installation, grundläggande och avancerade kortkommandon, samt hur du testar din webbplats för tillgänglighet.
---

# NVDA Skärmläsarguide

NVDA (NonVisual Desktop Access) är en gratis och öppen källkod-skärmläsare för Windows. Den är ett av de mest populära hjälpmedlen för personer med synnedsättning och ett utmärkt testverktyg för webbutvecklare.

## Installation

1. Besök [NVDA:s officiella webbplats](https://www.nvaccess.org/download/)
2. Ladda ner den senaste versionen
3. Kör installationsfilen och följ instruktionerna

NVDA kan också köras från ett USB-minne utan installation, vilket är praktiskt i utvecklingsmiljöer med flera användare.

## Komma igång med NVDA

När NVDA är igång hörs en ljudsignal och en röst börjar läsa upp det som är i fokus. För att tillfälligt tysta NVDA, tryck `NVDA + S`. För att helt avsluta programmet, tryck `NVDA + Q`.

> **Notera:** NVDA-tangenten är som standard inställd på Insert-tangenten, men kan också konfigureras till Caps Lock.

### Grundläggande navigering

| Kommando | Funktion |
|----------|----------|
| NVDA + Mellanslag | Starta/stoppa läsning |
| Ctrl | Stoppa omedelbart läsning |
| NVDA + Pil uppåt | Läs aktuell rad |
| NVDA + Pil nedåt | Läs från aktuell position |
| NVDA + Shift + Pil uppåt | Läs från aktiv position till början av dokumentet |
| NVDA + Shift + Pil nedåt | Läs från aktiv position till slutet av dokumentet |

### Navigera i webbläsaren

NVDA erbjuder särskilda navigeringslägen för webbläsare:

- **Bläddringsläge:** Standardläge för att läsa webbsidor
- **Fokusläge:** För att interagera med formulär och andra inmatningselement

Du kan växla mellan dessa lägen med `NVDA + Mellanslag`.

#### Snabbnavigering i bläddringsläge

| Tangent | Navigerar till |
|---------|----------------|
| H | Nästa rubrik |
| 1-6 | Rubriker av specifik nivå (h1-h6) |
| K | Nästa länk |
| F | Nästa formulärelement |
| B | Nästa knapp |
| T | Nästa tabell |
| L | Nästa lista |
| I | Nästa listelement |
| M | Nästa landmärke (landmark) |

Lägg till Shift för att navigera bakåt, t.ex. `Shift + H` för föregående rubrik.

### Elementlistor

NVDA kan visa listor med element på webbsidan, vilket är mycket användbart för utvecklare:

1. Tryck `NVDA + F7` för att öppna elementlistan
2. Välj typ av element du vill lista (rubriker, länkar, landmärken, etc.)
3. Använd piltangenterna för att navigera i listan
4. Tryck Enter för att hoppa till elementet

## Avancerade funktioner

### Testa ARIA-attribut

NVDA är utmärkt för att testa ARIA-implementationer:

- **Roller:** Hör hur ARIA-roller tolkas av skärmläsaren
- **Live-regioner:** Testa hur dynamiska uppdateringar meddelas
- **Expanderbara element:** Kontrollera att tillstånd (expanded/collapsed) meddelas korrekt

### Kompatibilitet med webbläsare

NVDA fungerar med de flesta webbläsare, men prestanda och funktionalitet kan variera:

- **Firefox:** Generellt bäst stöd och integration
- **Chrome:** Bra stöd med vissa begränsningar
- **Edge:** Acceptabelt stöd men kan ha inkonsekvent beteende
- **Internet Explorer:** Begränsat stöd i nyare versioner av NVDA

## Testning av webbplatser med NVDA

### Checklista för utvecklare

1. **Rubrikstruktur:**
   - Navigera med `H` och kontrollera att rubriknivåer (1-6) följer en logisk hierarki
   - Använd `NVDA + F7` och välj "Rubriker" för att se hela strukturen

2. **Navigering:**
   - Testa att navigera enbart med Tab-tangenten
   - Kontrollera att fokusordningen är logisk
   - Verifiera att fokus är synligt visuellt och hörbart

3. **Bilder och alternativa texter:**
   - Lyssna på hur bilder beskrivs
   - Kontrollera att dekorativa bilder ignoreras (aria-hidden="true" eller tom alt="")
   - Verifiera att komplexa bilder har utförliga beskrivningar

4. **Formulär:**
   - Kontrollera att alla fält har tydliga etiketter
   - Verifiera att felmeddelanden läses upp korrekt
   - Testa obligatoriska fält och bekräfta att deras status meddelas

5. **Dynamiskt innehåll:**
   - Testa att uppdateringar i aria-live-regioner läses upp
   - Kontrollera modalfönster, utfällbara menyer och andra interaktiva element

### Vanliga fel som identifieras med NVDA

- **Inkonsekvent navigationsordning:** Element fokuseras i en ordning som inte följer visuell eller logisk struktur
- **Saknade eller otillräckliga alternativa texter:** Bilder beskrivs inte korrekt
- **Formulär utan etiketter:** Inmatningsfält som inte har associerade label-element
- **Otillgängliga knappar:** Knappar som skapats med `<div>` eller `<span>` utan lämpliga ARIA-attribut
- **Osynligt fokus:** Fokusindikatorer som tagits bort utan att ersättas med alternativ

## NVDA-konfiguration för utvecklare

För att optimera NVDA för utveckling, överväg dessa inställningar:

1. Öppna NVDA-menyn med `NVDA + N`
2. Gå till Inställningar -> Dokumentformat
3. Aktivera:
   - "Rapportera dokumentinformation"
   - "Rapportera dokumentens rubrikstruktur"
   - "Rapportera landmärken och regioner"

För webbläsarspecifika inställningar:
1. Öppna NVDA-menyn
2. Gå till Inställningar -> Avancerat
3. Justera webbläsarinställningar enligt dina behov

## Slutsats

NVDA är ett kraftfullt verktyg för att säkerställa tillgänglighet i dina webbprojekt. Genom att regelbundet testa med NVDA kan du identifiera och åtgärda problem som kanske inte upptäcks med automatiska verktyg eller visuell inspektion.

Kom ihåg att kombinera NVDA-tester med andra tillgänglighetstester för att få en heltäckande bild av din webbplats tillgänglighet.