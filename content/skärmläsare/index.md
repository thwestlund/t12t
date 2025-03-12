---
title: Skärmläsare - Guider och information - T12T
description: Lär dig hur olika skärmläsare fungerar, hur du testar med dem, och viktiga kortkommandon för tillgänglighetsutvärdering.
---

# Skärmläsare

Skärmläsare är avgörande hjälpmedel för personer med synnedsättningar och en nyckelkomponent i tillgänglig webbutveckling. Denna sektion ger dig den kunskap du behöver för att förstå hur skärmläsare fungerar och hur du kan testa dina webbplatser med dem.

## Vad är en skärmläsare?

En skärmläsare är ett hjälpmedel som tolkar och läser upp information på skärmen för användare. Den omvandlar text, bilder (via alt-texter), länkar och andra element till tal eller punktskrift. För många personer med blindhet eller grav synnedsättning är skärmläsare det primära sättet att interagera med digitala gränssnitt.

## Varför testa med skärmläsare?

Det finns flera viktiga anledningar att inkludera skärmläsartester i din utvecklingsprocess:

1. **Verklig användarupplevelse** - Förstå hur dina användare faktiskt navigerar på din webbplats
2. **Hitta problem som automatiska tester missar** - Många tillgänglighetsproblem upptäcks bara genom manuell testning
3. **Semantik och struktur** - Kontrollera att innehållet presenteras i en logisk ordning och med rätt semantisk struktur
4. **Interaktiva element** - Säkerställ att knappar, formulär och andra interaktiva komponenter fungerar som förväntat

## Populära skärmläsare

### [NVDA (NonVisual Desktop Access)](/skärmläsare/nvda)

NVDA är en gratis, öppen källkod-skärmläsare för Windows. Den är mycket populär bland användare globalt och ett bra val för utvecklartestning.

- **Plattform:** Windows
- **Kostnad:** Gratis
- **Webbläsare:** Fungerar bäst med Firefox och Chrome

### [VoiceOver](/skärmläsare/voiceover)

VoiceOver är den inbyggda skärmläsaren i Apple-produkter, inklusive macOS, iOS och iPadOS. Det är ett kraftfullt verktyg för att testa tillgänglighet på Apple-enheter.

- **Plattform:** macOS, iOS, iPadOS
- **Kostnad:** Ingår i operativsystemet
- **Webbläsare:** Safari

### [JAWS (Job Access With Speech)](/skärmläsare/jaws)

JAWS är en av de mest använda skärmläsarna inom professionella sammanhang, särskilt inom företag och organisationer.

- **Plattform:** Windows
- **Kostnad:** Kommersiell (betalversion)
- **Webbläsare:** Internet Explorer, Chrome, Firefox

## Viktiga kortkommandon för NVDA

Här är några av de vanligaste kortkommandona för NVDA, som är ett bra verktyg att börja med för utvecklingstestning:

| Kommando | Funktion |
|----------|----------|
| NVDA + Mellanslag | Starta/stoppa läsning |
| NVDA + Pil uppåt | Läs aktuell rad |
| NVDA + F7 | Öppna elementlistor (rubriker, länkar, etc.) |
| Tab | Navigera mellan interaktiva element |
| H | Hoppa till nästa rubrik |
| B | Hoppa till nästa knapp |
| L | Hoppa till nästa lista |
| T | Hoppa till nästa tabell |
| NVDA + F1 | Hjälp |

## Bästa praxis för skärmläsartestning

1. **Börja med tangentbordsnavigering** - Kontrollera att alla interaktiva element kan nås och aktiveras med enbart tangentbordet
2. **Testa rubrikstruktur** - Navigera genom rubriker och kontrollera att de följer en logisk hierarki
3. **Kontrollera formulärfält** - Säkerställ att formulärfält har rätt etiketter och felmeddelanden
4. **Lyssna på alt-texter** - Bekräfta att bilder har lämpliga och informativa alternativa texter
5. **Testa dynamiskt innehåll** - Kontrollera att uppdateringar och notifieringar meddelas korrekt till skärmläsare

## Kom igång med testning

[Läs vår guide om hur du kommer igång med tillgänglighetstestning](/testning) för att lära dig mer om hur du integrerar skärmläsartester i din utvecklingsprocess.