---
title: 1.2.4 Textning av media (direktsändning)
description: Tillhandahåll textning för allt direktsänt ljudinnehåll i synkroniserad media.
level: AA
slug: textning-direktsandning
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "textning",
    "captions",
    "direktsändning",
    "live",
    "synkroniserad media",
    "video",
    "ljud",
  ]
canonical: https://t12t.dev/wcag/1/2/4/textning-direktsandning

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 2
guidelineName: Tidsberoende media
criterionNumber: 4

og:
  title: 1.2.4 Textning av media (direktsändning) – WCAG
  description: Tillhandahåll textning för allt direktsänt ljudinnehåll i synkroniserad media.
  url: https://t12t.dev/wcag/1/2/4/textning-direktsandning
  type: article

datePublished: 2025-03-23
# Uppdaterad
dateModified: 2024-05-16

sitemap:
  # Uppdaterad
  lastmod: 2024-05-16
  changefreq: weekly
  priority: 0.6
---

# Textning av media (direktsändning)

## Beskrivning

Textning ska tillhandahållas för allt direktsänt ljudinnehåll i synkroniserad media.

Detta innebär att för livesändningar som innehåller både ljud och bild (t.ex. webbsända evenemang, nyhetssändningar, direktsända möten) måste realtidstextning erbjudas samtidigt som sändningen pågår. Textningen ska täcka allt tal och viktiga ljudhändelser.

## Varför detta behövs

Precis som för förinspelad media (Kriterium 1.2.2) är textning avgörande för att personer som är döva eller har nedsatt hörsel ska kunna ta del av direktsänt innehåll i realtid.

Det gynnar även andra användare i bullriga eller tysta miljöer, de som inte har språket som modersmål, eller de som helt enkelt föredrar att ha textstöd. Utan direktsänd textning utestängs en stor grupp från att delta och ta del av information samtidigt som alla andra.

## Exempel

### Direktsänd video med integrerad textning

Många plattformar för videoströmning (t.ex. YouTube Live, Vimeo Live) har inbyggt stöd för att ta emot och visa direktsänd textning, ofta via standardprotokoll som CEA-608/708 eller via API:er. Textningen skapas vanligtvis av en mänsklig skrivtolk eller via automatisk taligenkänning (ASR - Automatic Speech Recognition) i realtid och skickas till videoplattformen som sedan bäddar in den i videoströmmen.

**Konceptuell implementation:**

Plattformen eller videospelaren tar emot textningsdata parallellt med video- och ljudströmmen och visar den synkroniserat. Användaren kan oftast aktivera/deaktivera textningen via en knapp i spelarens gränssnitt.

::code-group{:labels='["Användargränssnitt (Koncept)"]'}

```text
+--------------------------------------------+
|                                            |
|        Direktsänd Video                    |
|                                            |
|                                            |
|  Live-textning visas här...                |
+--------------------------------------------+
| [Play/Paus] [Volym] [⚙️] [CC] [Fullscreen] |
+--------------------------------------------+
                            ^
                            |
      Knapp för att aktivera/deaktivera textning (CC)
```

::

**Teknisk bakgrund (förenklat):**

1.  Ljud från direktsändningen skickas till en skrivtolk eller ASR-tjänst.
2.  Text skapas i realtid.
3.  Texten skickas till videoplattformen/servern.
4.  Plattformen synkroniserar och bäddar in texten i videoströmmen.
5.  Videospelaren hos användaren visar texten om den är aktiverad.

**Viktigt:** Kvaliteten på automatisk taligenkänning kan variera. För hög precision, särskilt vid viktiga evenemang eller när det finns mycket specifik terminologi, är mänsklig skrivtolkning ofta att föredra, även om det är dyrare.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.2.4 Captions (Live) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html)
- [W3C WAI: Captions/Subtitles](https://www.w3.org/WAI/media/av/captions/) (Innehåller information om både live och förinspelat)
