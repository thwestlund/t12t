---
title: 1.4.7 Låg eller ingen bakgrundsmusik
description: Säkerställ att förinspelat ljudinnehåll som huvudsakligen är tal inte har störande bakgrundsljud, eller att bakgrundsljudet kan stängas av eller är mycket lågt.
level: AAA
slug: lag-eller-ingen-bakgrundsmusik
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "ljud",
    "bakgrundsljud",
    "bakgrundsmusik",
    "tal",
    "hörselnedsättning",
    "kognitiv",
    "skiljbar",
    "podcast",
    "intervju",
  ]
canonical: https://t12t.dev/wcag/1/4/7/lag-eller-ingen-bakgrundsmusik

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 7

og:
  title: 1.4.7 Låg eller ingen bakgrundsmusik – WCAG
  description: Säkerställ att tal i förinspelat ljud lätt kan urskiljas från bakgrundsljud.
  url: https://t12t.dev/wcag/1/4/7/lag-eller-ingen-bakgrundsmusik
  type: article

datePublished: 2025-04-16
# Uppdaterad
dateModified: 2024-05-17

sitemap:
  # Uppdaterad
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Låg eller ingen bakgrundsmusik

## Beskrivning

För **förinspelat ljudinnehåll** som huvudsakligen består av tal i förgrunden (t.ex. en podcast, intervju, ljudbok) måste minst ett av följande villkor vara uppfyllt:

1.  **Inget bakgrundsljud:** Ljudet innehåller inga bakgrundsljud.
2.  **Avstängningsbart:** Bakgrundsljudet kan stängas av (t.ex. via en separat kontroll).
3.  **Lågt bakgrundsljud:** Bakgrundsljudet är minst **20 decibel (dB)** lägre än talet i förgrunden. Detta motsvarar ungefär att bakgrundsljudet upplevs vara fyra gånger tystare än talet. Undantag görs för korta, enstaka ljudeffekter.

Kriteriet gäller **inte** för:

- Audio-CAPTCHA.
- Ljudlogotyper, jinglar, musikstycken eller andra ljudeffekter som är avsedda att vara huvudinnehållet.
- Musikaliska framträdanden som sång eller rap.

## Varför detta behövs

Bakgrundsljud kan göra det mycket svårt eller omöjligt för vissa användare att uppfatta och förstå tal:

- **Personer med hörselnedsättning:** Har ofta svårt att skilja tal från bakgrundsljud, även med hörapparater. En tydlig skillnad i ljudnivå är avgörande.
- **Personer med kognitiva funktionsnedsättningar:** Kan lätt bli distraherade av bakgrundsljud, vilket gör det svårt att fokusera på och bearbeta talet.
- **Skärmläsaranvändare:** Om de lyssnar på ljudinnehåll samtidigt som skärmläsaren, kan bakgrundsljud göra det svårt att höra både innehållet och skärmläsarens tal.
- **Alla användare i bullriga miljöer:** Att lyssna i en miljö med mycket omgivningsljud gör det extra viktigt att talet är tydligt separerat från eventuella bakgrundsljud i själva inspelningen.

Att säkerställa att tal är tydligt och inte dränks av bakgrundsljud gör ljudinnehåll tillgängligt för fler.

---

## Exempel

_(Notera: Exempel för ljud är svåra att visa i kod, så de är beskrivande)_

### Podcast med tydligt tal (Rätt) ✅

En podcast som endast innehåller en eller flera personer som talar, utan någon musik eller andra bakgrundsljud.

**Resultat:** Uppfyller kravet eftersom det inte finns några bakgrundsljud (Villkor 1).

### Intervju med valbar bakgrundsmusik (Rätt) ✅

En videointervju där det finns en diskret bakgrundsmusik, men videospelaren har en separat kontroll för att stänga av endast musikspåret, medan intervjupersonernas röster behålls.

**Resultat:** Uppfyller kravet eftersom bakgrundsljudet kan stängas av (Villkor 2).

::code-group{:labels='["Konceptuell kontroll ✅"]'}

```html [Exempel på kontroll (koncept)]
<div>
  <video id="interviewVideo" controls src="intervju.mp4"></video>
  <div>
    <input
      type="checkbox"
      id="muteBackground"
      onchange="toggleBackgroundAudio()"
    />
    <label for="muteBackground">Stäng av bakgrundsmusik</label>
  </div>
</div>

<script>
  // JavaScript-logik för att faktiskt separera och
  // muta bakgrundsspåret skulle krävas här (mer avancerat).
  // Detta är bara en illustration av kontrollen.
  function toggleBackgroundAudio() {
    // ... kod för att hantera ljudspår ...
    console.log("Växla bakgrundsljud status");
  }
</script>
```

::

### Ljudbok med mycket låg musik (Rätt) ✅

En ljudbok där berättarrösten är tydlig och klar. Ibland förekommer stämningsmusik i bakgrunden, men den är konsekvent mixad så att den är minst 20 dB lägre än berättarrösten.

**Resultat:** Uppfyller kravet eftersom bakgrundsljudet är tillräckligt lågt (Villkor 3).

### Nyhetsinslag med störande bakgrundsljud (Fel) ❌

Ett förinspelat nyhetsinslag från en bullrig gatumiljö där reporterns röst är svår att höra på grund av trafikljud och musik från en närliggande affär. Ljudnivåerna är inte tillräckligt separerade (mindre än 20 dB skillnad) och det finns ingen möjlighet att stänga av bakgrundsljudet.

**Resultat:** Uppfyller inte kravet.

### Undantag: Musikstycke

En inspelning av en orkester som spelar klassisk musik.

**Resultat:** Kriteriet gäller inte, eftersom ljudet är avsett att vara musikaliskt uttryck.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.7 Low or No Background Audio (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html)
- [W3C Techniques: G174: Providing a control with a sufficient contrast ratio that allows users to turn off background audio that plays automatically](https://www.w3.org/WAI/WCAG22/Techniques/general/G174) (Även om G174 nämner automatisk uppspelning, är principen att ge kontroll relevant för detta kriterium också).
