---
title: 1.2.9 Endast ljud (direktsänt)
description: Tillhandahåll ett alternativ för tidsberoende media för direktsänt innehåll som endast består av ljud.
level: AAA
slug: endast-ljud-direktsant
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "mediealternativ",
    "textalternativ",
    "transkription",
    "direktsändning",
    "live",
    "ljud",
    "audio-only",
  ]
canonical: https://t12t.dev/wcag/1/2/9/endast-ljud-direktsant

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsberoende media
criterionNumber: 9

og:
  title: 1.2.9 Endast ljud (direktsänt) – WCAG
  description: Tillhandahåll ett alternativ för tidsberoende media för direktsänt innehåll som endast består av ljud.
  url: https://t12t.dev/wcag/1/2/9/endast-ljud-direktsant
  type: article

datePublished: 2025-03-28
dateModified: 2024-05-16

sitemap:
  lastmod: 2024-05-16
  changefreq: weekly
  priority: 0.5
---

# Endast ljud (direktsänt)

## Beskrivning

Ett alternativ för tidsberoende media som presenterar motsvarande information ska tillhandahållas för direktsänt innehåll som endast består av ljud.

Detta AAA-kriterium kräver att en realtidstranskription (eller annat textbaserat alternativ som presenterar samma information) erbjuds för ljudsändningar som sker live, till exempel en direktsänd radioprogram, en livepodd, eller ett telefonmöte som strömmas enbart med ljud.

## Varför detta behövs

Liknande Kriterium 1.2.1 (för förinspelat ljud) och 1.2.4 (för direktsänd video), säkerställer detta kriterium att personer som är döva eller har nedsatt hörsel kan ta del av innehållet i direktsända ljudsändningar.

En realtidstranskription gör det möjligt att följa med i vad som sägs samtidigt som det händer. Det gynnar även andra användargrupper i situationer där ljud inte kan eller bör spelas upp, samt personer som föredrar att läsa. Utan detta alternativ utestängs användare från att ta del av information och händelser i realtid.

## Exempel

### Direktsänd ljudström med realtidstranskription

En webbplats sänder ett direktsänt radioprogram eller en ljudkonferens. Intill ljudspelaren visas ett textområde där en transkription av det som sägs uppdateras i realtid. Detta kan åstadkommas med hjälp av en mänsklig skrivtolk eller en automatisk taligenkänningstjänst (ASR) som skickar texten till webbsidan.

::code-group{:labels='["index.html (Koncept)", "Realtidsuppdatering (Koncept)"]'}

```html showLineNumbers
<div class="live-audio-player">
  <h2>Direktsändning: Stadsfullmäktige</h2>
  <audio controls id="live-audio-stream" src="stream-url"></audio>

  <div class="live-transcript" aria-live="polite">
    <h3>Direkttextning:</h3>
    <div id="transcript-output">
      <p><em>Väntar på sändning...</em></p>
      <!-- Transkriptionen uppdateras här dynamiskt -->
    </div>
  </div>
</div>

<script>
  // JavaScript för att ta emot och visa transkriptionen
  const transcriptOutput = document.getElementById("transcript-output");
  const eventSource = new EventSource("/live-transcript-stream"); // Exempel på källa

  eventSource.onmessage = function (event) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = event.data; // Texten från servern
    transcriptOutput.appendChild(newParagraph);
    // Scrolla ner automatiskt (valfritt)
    transcriptOutput.scrollTop = transcriptOutput.scrollHeight;
  };

  eventSource.onerror = function () {
    transcriptOutput.innerHTML =
      "<p><em>Problem med anslutning till textström.</em></p>";
    eventSource.close();
  };
</script>
```

```text
# Realtidsuppdatering i #transcript-output

[ Initialt ]
<p><em>Väntar på sändning...</em></p>

[ Efter en stund ]
<p><em>Väntar på sändning...</em></p>
<p>Ordförande: Jag förklarar mötet öppnat.</p>

[ Lite senare ]
<p><em>Väntar på sändning...</em></p>
<p>Ordförande: Jag förklarar mötet öppnat.</p>
<p>Ordförande: Första punkten på dagordningen är budgetförslaget.</p>
<p>Ledamot Svensson: Jag har en fråga angående post 3.2...</p>

```

::

**Viktigt:**

- Transkriptionen måste ske i realtid och vara så korrekt som möjligt.
- Använd [aria-live="polite"]{.inline-code} (eller [aria-live="assertive"]{.inline-code} om det är mycket viktigt att uppdateringar inte missas) på behållaren för transkriptionen så att skärmläsare meddelar när ny text läggs till.
- Liksom med direktsänd textning för video (Kriterium 1.2.4) kan kvaliteten på ASR variera. Mänsklig skrivtolkning ger ofta högre precision.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.2.9 Audio-only (Live) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html)
- [W3C WAI: Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/) (Övergripande guide)
- [Webbriktlinjer: R3 Erbjud alternativ till video och ljud](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/erbjud-alternativ-till-video-och-ljud) och [R4 Texta video och ljud som publiceras på webbplatsen](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/texta-video-och-ljud-som-publiceras-pa-webbplatsen) (Relaterade principer)
