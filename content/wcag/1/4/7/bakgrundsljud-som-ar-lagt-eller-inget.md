---
title: Bakgrundsljud som är lågt eller inget
description: För förinspelat ljudinnehåll som innehåller tal i förgrunden håller bakgrundsljuden en låg nivå.
level: AAA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 7

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 1.4.7 Bakgrundsljud som är lågt eller inget

## Beskrivning

För förinspelat ljudinnehåll som (1) i huvudsak innehåller tal i förgrunden, (2) inte är en ljudversion av CAPTCHA eller ljudlogotyp, och (3) inte är vokalisering med avsikt att primärt vara musikaliskt uttryck såsom sång eller rap, gäller minst ett av följande:

- **Inget bakgrundsljud:** Ljudet innehåller inget bakgrundsljud.
- **Avstängningsbart:** Bakgrundsljudet kan stängas av.
- **20 dB lägre:** Bakgrundsljudet är minst 20 decibel lägre än talet i förgrunden, med undantag för enstaka ljud som varar i högst 1-2 sekunder.

## Varför detta behövs

Personer med hörselnedsättning, kognitiva funktionsnedsättningar eller inlärningssvårigheter kan ha svårt att uppfatta tal när det finns bakgrundsljud. Även för personer utan funktionsnedsättningar kan distraherande bakgrundsljud försvåra förståelsen av innehållet.

Genom att säkerställa att bakgrundsljud är minst 20 dB lägre än talet (vilket motsvarar ungefär en fjärdedel av volymen), ge möjlighet att stänga av bakgrundsljudet, eller helt eliminera det, gör du innehållet mer tillgängligt för alla användare.

Detta är särskilt viktigt för instruktionsvideos, utbildningsmaterial och informationsinnehåll där förståelsen av det talade innehållet är avgörande.

## Exempel

### Exempel på bra implementering

#### Videopresentation med separata ljudspår

```html
<video controls>
  <source src="presentation.mp4" type="video/mp4" />
  Din webbläsare stödjer inte videouppspelning.
</video>

<div class="audio-controls">
  <button id="toggleMusic">Slå på/av bakgrundsmusik</button>
  <label>
    Bakgrundsvolym:
    <input type="range" id="bgVolume" min="0" max="100" value="0" />
  </label>
</div>

<script>
  // JavaScript för att hantera separata ljudspår och volyminställningar
</script>
```

#### Ljudfil med optimalt ljudförhållande

```html
<figure>
  <audio controls>
    <source src="podcast-optimized.mp3" type="audio/mpeg" />
    Din webbläsare stödjer inte ljuduppspelning.
  </audio>
  <figcaption>
    Podcast där bakgrundsljud är minst 20 dB lägre än talarens röst för optimal
    tydlighet.
  </figcaption>
</figure>
```

#### Webinarinspelning utan bakgrundsljud

```html
<video controls>
  <source src="webinar-clean-audio.mp4" type="video/mp4" />
  Din webbläsare stödjer inte videouppspelning.
</video>
<p>
  Denna webinarinspelning har producerats i en tyst miljö utan bakgrundsljud för
  maximal tydlighet.
</p>
```

### Exempel på bristande implementering

#### Instruktionsvideo med distraherande bakgrundsmusik

```html
<video controls>
  <source src="instruction-loud-music.mp4" type="video/mp4" />
  Din webbläsare stödjer inte videouppspelning.
</video>
<!-- Video där bakgrundsmusiken är för hög i relation till talarens röst -->
```

#### Ljudintervju utan ljudkontroller

```html
<audio autoplay>
  <source src="interview-background-noise.mp3" type="audio/mpeg" />
</audio>
<!-- Ljudfil som automatiskt spelas upp med distraherande bakgrundsljud och utan möjlighet att justera eller stänga av bakgrundsljudet -->
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.7 Low or No Background Audio](https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html)
- [W3C WAI - Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/)
- [Digital ljudproduktion och tillgänglighet - SPSM](https://www.spsm.se/stod/tillganglighet/tillgangliga-digitala-miljoer/)
