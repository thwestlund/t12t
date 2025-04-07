---
title: 1.2.1 Endast ljud och endast video (förinspelad)
description: Ge ett alternativ till förinspelad media som endast innehåller ljud eller endast video.
level: A
slug: endast-ljud-och-endast-video-forinspelad
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "förinspelad media",
    "ljud",
    "video",
    "textalternativ",
    "transkription",
    "audio-only",
    "video-only",
    "pre-recorded",
  ]
canonical: https://t12t.dev/wcag/1/2/1/audio-och-video

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsberoende media
criterionNumber: 1

og:
  title: 1.2.1 Endast ljud och endast video (förinspelad) – WCAG
  description: Ge ett alternativ till förinspelad media som endast innehåller ljud eller endast video.
  url: https://t12t.dev/wcag/1/2/1/audio-och-video
  type: article

datePublished: 2025-03-20
dateModified: 2024-05-16

sitemap:
  lastmod: 2024-05-16
  changefreq: monthly
  priority: 0.7
---

# Endast ljud och endast video (förinspelad)

## Beskrivning

För **förinspelat innehåll som endast består av ljud** och **förinspelat innehåll som endast består av video** ska ett alternativ för tidsberoende media tillhandahållas som presenterar motsvarande information.

- För **endast ljud:** Ett textalternativ (transkription) som innehåller alla viktiga ljudhändelser och talat innehåll.
- För **endast video:** Antingen ett alternativ i form av text (som beskriver vad som händer visuellt) eller ett ljudspår (syntolkning) som beskriver det visuella innehållet.

## Varför detta behövs

- **För endast ljud:** Personer som är döva eller har hörselnedsättning kan inte ta del av ljudinnehåll. En transkription gör informationen tillgänglig för dem, samt för personer som föredrar att läsa eller befinner sig i miljöer där ljud inte kan spelas upp. Det underlättar också för sökmotorer att indexera innehållet.
- **För endast video:** Personer som är blinda eller har grav synnedsättning kan inte se videoinnehållet. Ett textalternativ eller en syntolkning beskriver de visuella händelserna och gör informationen tillgänglig. Det hjälper även användare i situationer där videon inte kan visas (t.ex. låg bandbredd) eller när användaren inte kan titta på skärmen.

Genom att erbjuda alternativ säkerställer du att alla användare kan ta del av informationen oavsett funktionsförmåga eller situation.

---

## Exempel

### Endast ljud med transkription

Ett ljudklipp (t.ex. en podd eller intervju) presenteras tillsammans med en fullständig transkription av innehållet. Transkriptionen kan visas direkt på sidan inom ett [\<details\>]{.inline-code}-element eller via en länk.

::code-group{:labels='["index.html"]'}

```html {3, 5-12} showLineNumbers
<figure>
  <figcaption>Intervju med expert om webbtillgänglighet</figcaption>
  <audio controls src="intervju.mp3"></audio>
  <!-- Transkription -->
  <details>
    <summary>Visa transkription</summary>
    <div>
      <h3>Transkription</h3>
      <p>
        <strong>Intervjuare:</strong> Välkommen till podden! Kan du berätta
        varför webbtillgänglighet är viktigt?
      </p>
      <p><strong>Expert:</strong> Absolut! Det handlar om att...</p>
      <p>[Musik spelar kort]</p>
      <p><strong>Expert:</strong> ...och det gynnar alla användare.</p>
      <!-- Fortsättning av transkriptionen -->
    </div>
  </details>
</figure>
```

::

### Endast video med textalternativ

En video som endast innehåller visuellt innehåll (t.ex. en tyst animation som visar en process) presenteras med en textbeskrivning som förklarar vad som händer i videon. Beskrivningen kan kopplas till videon med attributet [aria-describedby]{.inline-code}.

::code-group{:labels='["index.html"]'}

```html {2, 4-6} showLineNumbers
<figure>
  <video
    controls
    src="process-animation.mp4"
    aria-describedby="video-beskrivning"
  ></video>
  <figcaption>Animation som visar hur man monterar produkten.</figcaption>
  <p id="video-beskrivning">
    Videon visar steg-för-steg hur del A fästs vid del B med de medföljande
    skruvarna. Därefter visas hur del C snäpps fast på ovansidan.
  </p>
</figure>
```

::

### Endast video med syntolkning (koncept)

För en video med endast visuellt innehåll kan man också erbjuda en syntolkning som ett separat ljudspår. Detta ljudspår beskriver verbalt vad som händer i videon. Tekniskt kan detta implementeras med [\<track\>]{.inline-code}-elementet med [kind="descriptions"]{.inline-code}.

::code-group{:labels='["index.html"]'}

```html {3} showLineNumbers
<video controls muted>
  <source src="visuell-demonstration.mp4" type="video/mp4" />
  <track
    label="Svenska Syntolkning"
    kind="descriptions"
    srclang="sv"
    src="syntolkning.vtt"
  />
  <!-- Fallback för webbläsare som inte stödjer video -->
  Din webbläsare stödjer inte video-elementet.
</video>
```

::

**Notera:** Att skapa syntolkning är ofta mer komplext än att skriva ett textalternativ. För nivå A räcker det med antingen ett textalternativ _eller_ en syntolkning för förinspelad video-utan-ljud.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded) (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html)
- [Webbriktlinjer: Erbjud alternativ till inspelningar som består av enbart ljud eller enbart video](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/erbjud-alternativ-till-inspelningar-som-bestar-av-enbart-ljud-eller-enbart-video) (Delvis relevant)
- [MDN Web Docs: The Track element (\<track\>)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
- [W3C WAI: Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/)
