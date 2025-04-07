---
title: 2.1.4 Kortkommandon med enskilda tecken
description: Om kortkommandon som bara använder ett tecken finns, erbjud ett sätt att stänga av dem, ändra dem, eller se till att de bara är aktiva när en specifik komponent har fokus.
level: A
slug: kortkommandon-enskilda-tecken
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "tangentbord",
    "kortkommando",
    "character key shortcut",
    "genväg",
    "tangentbordsstyrning",
    "talinmatning",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/2/1/4/kortkommandon-enskilda-tecken

principleNumber: 2
principleName: Operabel
guidelineNumber: 1
guidelineName: Tangentbordsstyrning
criterionNumber: 4

og:
  title: 2.1.4 Kortkommandon med enskilda tecken – WCAG
  description: Hantera kortkommandon som bara använder ett tecken på ett tillgängligt sätt.
  url: https://t12t.dev/wcag/2/1/4/kortkommandon-enskilda-tecken
  type: article

datePublished: 2025-05-10
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Kortkommandon med enskilda tecken

## Beskrivning

Om ett kortkommando (genväg) implementeras i innehållet med endast bokstäver (stora och små), skiljetecken, siffror eller symboler, måste minst ett av följande gälla:

1.  **Avstängning:** Det finns ett sätt att stänga av kortkommandot.
2.  **Ommappning:** Det finns ett sätt att ändra kortkommandot så att det inkluderar en eller flera modifieringstangenter ([Ctrl]{.inline-code}, [Alt]{.inline-code}, [Shift]{.inline-code}, [Cmd]{.inline-code}).
3.  **Endast vid fokus:** Kortkommandot för en användargränssnittskomponent är endast aktivt när den komponenten har fokus.

Detta krav gäller alltså kortkommandon som aktiveras av ett _enda_ tecken (som [R]{.inline-code} för att svara, [M]{.inline-code} för att tysta ljud, [.]{.inline-code} för att gå till nästa). Kortkommandon som redan från början kräver en modifieringstangent (som [Ctrl+S]{.inline-code} för att spara) omfattas inte.

## Varför detta behövs

Kortkommandon som bara använder ett enda tecken kan oavsiktligt aktiveras, vilket skapar problem för:

- **Användare med talinmatning:** När de dikterar text kan enskilda bokstäver eller ord oavsiktligt trigga ett kortkommando. Om användaren säger "Tryck M" kan det både skriva bokstaven M och samtidigt tysta ljudet om M är ett globalt kortkommando.
- **Tangentbordsanvändare som gör misstag:** Det är lätt att råka trycka på fel tangent. Om ett enda felaktigt tangenttryck utför en oönskad åtgärd (som att skicka ett halvfärdigt meddelande) kan det vara frustrerande och problematiskt.
- **Användare med motoriska svårigheter:** Kan ha svårt att trycka exakt på rätt tangent och kan oftare råka aktivera kortkommandon av misstag.

Genom att erbjuda ett sätt att stänga av, ändra, eller begränsa dessa kortkommandon till när en specifik del av sidan har fokus, minskar man risken för oavsiktlig aktivering.

---

## Exempel

### Kortkommando endast aktivt vid fokus (Rätt) ✅

I en webbmejlklient används bokstaven [R]{.inline-code} för att svara på ett mejl. Detta kortkommando fungerar bara när mejllistan eller ett öppet mejl har tangentbordsfokus. Om användaren skriver i texteditorn för ett nytt mejl, kommer tryck på [R]{.inline-code} bara att skriva bokstaven R.

::code-group{:labels='["Konceptuell JavaScript (Rätt) ✅"]'}

```javascript showLineNumbers
const emailList = document.getElementById("emailList");
const messageView = document.getElementById("messageView");

document.addEventListener("keydown", function (event) {
  // Kolla om fokus är INOM relevant komponent
  const isFocusInsideList = emailList.contains(document.activeElement);
  const isFocusInsideMessage = messageView.contains(document.activeElement);

  if (event.key === "r" || event.key === "R") {
    if (isFocusInsideList || isFocusInsideMessage) {
      // Endast om fokus är på listan eller ett meddelande...
      event.preventDefault(); // Förhindra att 'r' skrivs om fokus är i textfält
      replyToEmail();
    }
    // Om fokus är någon annanstans (t.ex. i en textruta), gör ingenting
  }
});

function replyToEmail() {
  console.log("Svarar på mejl...");
  // ... logik för att svara ...
}
```

::
**Resultat:** Kortkommandot [R]{.inline-code} aktiveras inte oavsiktligt när användaren skriver text eller interagerar med andra delar av sidan.

### Inställning för att stänga av/ändra kortkommandon (Rätt) ✅

En webbapplikation har flera kortkommandon med enskilda tecken (t.ex. [N]{.inline-code} för Nytt objekt, [F]{.inline-code} för Favorit). I applikationens inställningar finns en sektion där användaren kan:

1.  Bocka ur en kryssruta "Aktivera kortkommandon med enskilda tecken".
2.  Klicka på varje kortkommando och definiera en ny tangentkombination (t.ex. ändra [N]{.inline-code} till [Ctrl+Alt+N]{.inline-code}).

::code-group{:labels='["Konceptuell inställningssida (Rätt) ✅"]'}

```html showLineNumbers
<h2>Inställningar för Kortkommandon</h2>
<div>
  <input
    type="checkbox"
    id="enableShortcuts"
    checked
    onchange="toggleShortcuts()"
  />
  <label for="enableShortcuts"
    >Aktivera kortkommandon med enskilda tecken</label
  >
</div>

<div id="shortcutList">
  <p>
    Nytt objekt:
    <button onclick="remapShortcut('new')">N</button>
    <!-- Logik för att låta användaren definiera om -->
  </p>
  <p>
    Markera som favorit:
    <button onclick="remapShortcut('fav')">F</button>
  </p>
  <!-- Fler kortkommandon -->
</div>

<script>
  function toggleShortcuts() {
    /* ... aktivera/deaktivera alla ... */
  }
  function remapShortcut(action) {
    /* ... visa gränssnitt för ommappning ... */
  }
</script>
```

::
**Resultat:** Användaren har full kontroll och kan anpassa eller stänga av kortkommandona för att undvika konflikter eller oavsiktlig aktivering.

### Globala kortkommandon utan anpassning (Fel) ❌

En webbsida använder bokstaven [M]{.inline-code} som ett globalt kortkommando för att tysta/sätta på ljudet för en video på sidan. Kortkommandot är aktivt oavsett var fokus ligger, och det finns ingen inställning för att stänga av eller ändra det.

::code-group{:labels='["Konceptuell JavaScript (Fel) ❌"]'}

```javascript showLineNumbers
// Fel: Denna listener är global och okänslig för fokus.
document.addEventListener("keydown", function (event) {
  if (event.key === "m" || event.key === "M") {
    // Ingen koll på var fokus är!
    // Ingen möjlighet att stänga av!
    toggleMute();
  }
});

function toggleMute() {
  const video = document.querySelector("video");
  if (video) {
    video.muted = !video.muted;
    console.log("Ljud status ändrad via globalt M-kommando.");
  }
}
```

::
**Resultat:** En användare som använder talinmatning och säger ett ord som innehåller "m", eller en tangentbordsanvändare som råkar trycka [M]{.inline-code} när de ska skriva i ett formulärfält, kommer oavsiktligt att tysta eller sätta på ljudet.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.1.4 Character Key Shortcuts (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html)
