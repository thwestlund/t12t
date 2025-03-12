---
title: Tillgänglighetstestning - T12T
description: Guide till olika metoder och verktyg för att testa tillgänglighet på webbplatser och applikationer.
---

# Tillgänglighetstestning

En avgörande del av arbetet med digital tillgänglighet är att regelbundet testa och utvärdera dina produkter. Denna guide ger dig kunskap om olika testmetoder, verktyg och processer för att säkerställa att dina digitala lösningar är tillgängliga för alla användare.

## Varför testa tillgänglighet?

Tillgänglighetstestning hjälper dig att:

- Identifiera och åtgärda barriärer som stänger ute användare
- Uppfylla lagkrav som DOS-lagen och European Accessibility Act
- Förbättra användarupplevelsen för alla
- Undvika kostsamma omarbetningar sent i utvecklingsprocessen
- Bygga mer robust och framtidssäkrad kod

## Typer av tillgänglighetstester

### Automatiserade tester

Automatiserade verktyg kan snabbt identifiera många tekniska tillgänglighetsproblem. De är bra för att hitta uppenbara fel, men kan inte ersätta manuell testning.

**Fördelar:**
- Snabba resultat
- Konsekvent bedömning
- Lätta att integrera i utvecklingsprocessen

**Begränsningar:**
- Kan bara identifiera ca 30-40% av alla tillgänglighetsproblem
- Kan inte bedöma meningsfullhet (t.ex. om alt-texter är användbara)
- Kan ge felaktiga resultat som kräver mänsklig bedömning

**Populära verktyg:**
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/)
- [WAVE](https://wave.webaim.org/)
- [Siteimprove](https://siteimprove.com/)

### Manuell testning

Manuell testning utförs av människor och innefattar kontroll mot riktlinjer, användning av hjälpmedel och heuristisk utvärdering.

**Fördelar:**
- Kan identifiera problem som automatiserade verktyg missar
- Bedömer kvalitativa aspekter som meningsfullhet och kontext
- Ger djupare insikter om användarupplevelsen

**Populära checklistor och riktlinjer:**
- [WCAG 2.2 Snabbguide](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM Checklist](https://webaim.org/standards/wcag/checklist)
- [A11Y Project Checklist](https://www.a11yproject.com/checklist/)

### Testning med hjälpmedel

Att testa med skärmläsare och andra hjälpmedel ger värdefulla insikter om hur produkten upplevs av personer med funktionsnedsättningar.

**Vanliga hjälpmedel för testning:**
- [NVDA](/skärmläsare/nvda) (gratis skärmläsare för Windows)
- [VoiceOver](/skärmläsare/voiceover) (inbyggd i macOS/iOS)
- [JAWS](/skärmläsare/jaws) (kommersiell skärmläsare för Windows)
- Tangentbordsnavigering (utan mus)
- Skärmförstoring
- Taligenkänning

### Användartestning

Den mest värdefulla formen av tillgänglighetstestning involverar verkliga användare med olika funktionsförmågor.

**Fördelar:**
- Ger autentiska insikter om verkliga utmaningar
- Identifierar problem som experter kan missa
- Skapar empati och förståelse hos utvecklingsteamet

**Tips för användartestning:**
- Rekrytera testdeltagare med olika funktionsförmågor
- Skapa realistiska testscenarier baserade på vanliga användaruppgifter
- Observera utan att ingripa (om inte absolut nödvändigt)
- Ge deltagarna frihet att använda sina egna hjälpmedel och metoder

## Att sätta upp en teststrategi

### 1. Integrera testning i hela utvecklingsprocessen

Tillgänglighetstestning bör inte vara en efterhandskontroll, utan en integrerad del av utvecklingsprocessen:

- **Planering:** Definiera tillgänglighetskrav och acceptanskriterier
- **Design:** Utvärdera designskisser och prototyper
- **Utveckling:** Använd automatiserade tester kontinuerligt
- **QA:** Utför djupare manuella tester och hjälpmedelstester
- **Lansering:** Gör en omfattande tillgänglighetsgranskning
- **Underhåll:** Regelbundna kontroller och utvärderingar

### 2. Skapa en testmatris

En testmatris hjälper dig att säkerställa att du testar på relevanta kombinationer av:

- Webbläsare (Chrome, Firefox, Safari, Edge)
- Operativsystem (Windows, macOS, iOS, Android)
- Hjälpmedel (skärmläsare, tangentbord, förstoringsprogram)
- Skärmstorlekar (desktop, surfplatta, mobil)

### 3. Dokumentera och prioritera problem

När du hittar tillgänglighetsproblem:

1. Dokumentera problemet (vad, var, hur)
2. Koppla till relevant WCAG-kriterium
3. Bedöm allvarlighetsgrad (kritisk, hög, medium, låg)
4. Prioritera åtgärder baserat på påverkan och resurser
5. Följ upp och verifiera lösningar

## Exempeltestfall

### Tangentbordsåtkomst

```
Testfall: TC-A11Y-001
Titel: Tangentbordsnavigering i huvudmenyn
Beskrivning: Verifiera att användare kan navigera och använda huvudmenyn med enbart tangentbordet
WCAG-referens: 2.1.1 Tangentbord (A)

Steg:
1. Navigera till webbplatsen
2. Använd Tab-tangenten för att flytta fokus till huvudmenyn
3. Fortsätt tabba för att navigera genom alla menyalternativ
4. Använd Enter för att aktivera ett menyalternativ med undermenyer
5. Navigera genom undermenyerna
6. Använd Escape för att stänga undermenyn

Förväntade resultat:
- Alla menyalternativ kan nås med Tab
- Fokus är tydligt visuellt indikerat vid varje steg
- Enter öppnar undermenyer
- Piltangenter kan användas för att navigera i undermenyerna
- Escape stänger öppna undermenyer
```

## Verktyg och resurser

För mer detaljerad information om specifika verktyg och metoder, se vår [Verktygsguide](/testning/verktyg).

## Kom ihåg!

Tillgänglighetstestning är inte en engångsåtgärd utan en kontinuerlig process. Genom att regelbundet utvärdera och förbättra din webbplats tillgänglighet säkerställer du att alla användare kan ta del av ditt innehåll och dina tjänster.