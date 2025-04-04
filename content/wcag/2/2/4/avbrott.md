---
title: 2.2.4 Avbrott
description: Tillåt användare att skjuta upp eller avbryta avbrott, förutom när avbrottet gäller en nödsituation.
level: AAA
slug: avbrott
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "avbrott",
    "interruptions",
    "uppdateringar",
    "meddelanden",
    "kontextändring",
    "uppskjuta",
    "avbryta",
    "kognitiv",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/2/2/4/avbrott

principleNumber: 2
principleName: Operabel
guidelineNumber: 2
guidelineName: Tillräckligt med tid
criterionNumber: 4

og:
  title: 2.2.4 Avbrott – WCAG
  description: Tillåt användare att skjuta upp eller avbryta avbrott, förutom i nödsituationer.
  url: https://t12t.dev/wcag/2/2/4/avbrott
  type: article

datePublished: 2025-05-13
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Avbrott

## Beskrivning

Avbrott kan skjutas upp eller undertryckas av användaren, förutom avbrott som gäller en nödsituation.

Detta kriterium (Nivå AAA) innebär att om en webbplats eller applikation presenterar information som bryter användarens nuvarande aktivitet (t.ex. genom en pop-up, en plötslig uppdatering av innehållet, eller en omdirigering), måste användaren ges möjlighet att skjuta upp eller helt stänga av detta avbrott.

Det enda undantaget är när avbrottet signalerar en **nödsituation**, vilket definieras som en plötslig, oväntad situation eller händelse som kräver omedelbar åtgärd för att bevara hälsa, säkerhet eller egendom.

## Varför detta behövs

Oväntade avbrott kan vara mycket problematiska, särskilt för:

- **Personer med kognitiva funktionsnedsättningar eller uppmärksamhetsstörningar:** Avbrott kan göra att de tappar tråden helt, glömmer vad de höll på med, och har svårt att återuppta sin ursprungliga uppgift.
- **Skärmläsaranvändare:** Ett plötsligt avbrott eller en kontextändring (som att en ny sida laddas eller fokus flyttas oväntat) kan vara desorienterande och kräva att användaren navigerar om för att förstå vad som hände och var de är.
- **Personer med nedsatt syn:** Kan behöva längre tid för att läsa och förstå innehållet. Ett avbrott kan tvinga dem att börja om eller leta efter var de var.

Att ge användaren kontroll över när och om avbrott sker gör det möjligt för dem att arbeta ostört och i sin egen takt, vilket är avgörande för en tillgänglig upplevelse på AAA-nivå.

---

## Exempel

### Diskret avisering (Rätt) ✅

En webbapplikation visar en liten, icke-störande indikator (t.ex. en siffra på en ikon) när nya meddelanden har anlänt. Meddelandena visas inte förrän användaren aktivt klickar på ikonen.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
I en chattapplikation visas en diskret röd prick på chattikonen när ett nytt meddelande kommer. Inget ljud spelas, inget fönster poppar upp. Användaren kan välja att läsa meddelandet när det passar.
```

::
**Resultat:** Användaren blir medveten om ny information utan att bli avbruten i sin nuvarande uppgift.

### Uppskjutbar uppdateringsnotis (Rätt) ✅

Ett program informerar om en tillgänglig programuppdatering via en dialogruta. Dialogrutan har knappar som "Uppdatera nu", "Påminn mig senare" och "Hoppa över den här versionen".

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```text [Beskrivning]
En textredigerare visar en pop-up: "En ny version finns tillgänglig!". Användaren kan välja att starta uppdateringen, be programmet påminna igen om en timme, eller ignorera just denna uppdatering.
```

::
**Resultat:** Användaren kan välja att hantera uppdateringen när det passar och inte bli tvingad att avbryta sitt arbete.

### Plötslig omdirigering (Fel) ❌

Efter att ha loggat in på en sida, omdirigeras användaren automatiskt till en "Välkommen tillbaka!"-sida som visas i 5 sekunder innan de omdirigeras vidare till den sida de egentligen ville nå. Det finns inget sätt att hoppa över välkomstsidan.

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
Användaren klickar på en länk till "Mina sidor". Efter inloggning visas en kort animerad välkomstsida som inte kan hoppas över, innan användaren slutligen hamnar på "Mina sidor". Detta är ett oväntat och påtvingat avbrott/kontextändring.
```

::
**Resultat:** Användaren tvingas vänta och upplever ett onödigt avbrott. För en skärmläsaranvändare kan de plötsliga omdirigeringarna vara förvirrande.

### Påträngande reklam-pop-up (Fel) ❌

Mitt under läsningen av en artikel visas en stor modal annons som täcker innehållet och kräver att användaren klickar på ett litet kryss för att stänga den.

::code-group{:labels='["Koncept (Fel - AAA) ❌"]'}

```text [Beskrivning]
En nyhetssida visar en annons i ett modalfönster som dyker upp efter att användaren scrollat halvvägs ner på sidan. Annonsen blockerar artikeln och måste aktivt stängas.
```

::
**Resultat:** Detta är ett oväntat avbrott som stör läsningen och kräver omedelbar interaktion.

### Undantag: Nödvarning (Tillåtet) ✅

En officiell myndighetssida visar en omedelbar, sidtäckande varning om en pågående naturkatastrof (t.ex. skogsbrand, översvämning) med instruktioner för allmänheten.

::code-group{:labels='["Koncept (Tillåtet) ✅"]'}

```text [Beskrivning]
Krisinformation.se visar en röd varningsruta högst upp på alla sidor, eller ett modalfönster, som informerar om ett VMA (Viktigt Meddelande till Allmänheten) om en gasläcka i ett visst område.
```

::
**Resultat:** Detta är en nödsituation där omedelbar information är avgörande för säkerheten. Avbrottet är därför tillåtet och behöver inte kunna skjutas upp.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.2.4 Interruptions (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html)
- (Digg har ingen specifik riktlinje för 2.2.4, men principen om att undvika störningar täcks generellt i deras material om kognitiv tillgänglighet).
