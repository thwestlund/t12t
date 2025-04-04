---
title: 2.3.3 Animation från interaktioner
description: Tillåt användare att stänga av rörelseanimationer som utlöses av interaktion, om inte animationen är nödvändig för funktionaliteten eller informationen.
level: AAA
slug: animation-fran-interaktioner
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "animation",
    "rörelse",
    "interaktion",
    "parallax",
    "zoom",
    "övergångar",
    "vestibulär",
    "rörelsekänslighet",
    "operabel",
    "prefers-reduced-motion",
  ]
canonical: https://t12t.dev/wcag/2/3/3/animation-fran-interaktioner

principleNumber: 2
principleName: Operabel
guidelineNumber: 3
guidelineName: Anfall och fysiska reaktioner
criterionNumber: 3

og:
  title: 2.3.3 Animation från interaktioner – WCAG
  description: Tillåt användare att stänga av rörelseanimationer som utlöses av interaktion.
  url: https://t12t.dev/wcag/2/3/3/animation-fran-interaktioner
  type: article

datePublished: 2025-05-22
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Animation från interaktioner

## Beskrivning

Rörelseanimationer som utlöses av användarens interaktion kan stängas av, om inte animationen är nödvändig (essential) för funktionaliteten eller för att förmedla informationen.

Detta kriterium (Nivå AAA) fokuserar på animationer som startar när användaren gör något (t.ex. scrollar, hovrar över ett element, klickar på en knapp) och som involverar rörelse (t.ex. parallax-effekter, in- och utzoomning, element som glider in). Om sådana animationer finns, måste det finnas ett sätt för användaren att stänga av dem.

Undantaget gäller när animationen i sig är det som gör funktionen möjlig eller förståelig (t.ex. animationen av att dra ett objekt eller ändra storlek på ett fönster).

## Varför detta behövs

Vissa typer av rörelseanimationer kan orsaka problem för användare med:

- **Vestibulära störningar:** Animationer som parallax-scrolling (där bakgrund och förgrund rör sig i olika hastigheter), zoom-effekter, eller objekt som flyger in kan utlösa yrsel, illamående, huvudvärk och desorientering.
- **Kognitiva funktionsnedsättningar:** Onödiga animationer kan vara distraherande och göra det svårt att fokusera på innehållet eller uppgiften.
- **Rörelsekänslighet:** Vissa personer kan helt enkelt bli åksjuka eller känna obehag av vissa typer av rörelser på skärmen.

Att ge användaren möjlighet att stänga av dessa potentiellt problematiska animationer är en viktig tillgänglighetsfunktion på AAA-nivå. Ett vanligt sätt att uppfylla detta är att respektera operativsystemets eller webbläsarens inställning för minskad rörelse ([prefers-reduced-motion]{.inline-code}).

---

## Exempel

### Respekt för [prefers-reduced-motion]{.inline-code} (Rätt) ✅

Webbplatsen använder CSS för att skapa en parallax-effekt när användaren scrollar. Den använder också en media query för [prefers-reduced-motion]{.inline-code} för att stänga av effekten om användaren har angett att de föredrar minskad rörelse i sitt operativsystem eller webbläsare.

::code-group{:labels='["CSS (Rätt) ✅"]'}

```css {12-17, 28-38} showLineNumbers
.parallax-section {
  /* Stilar för parallax-effekten (t.ex. med background-attachment: fixed) */
  background-image: url("bakgrund.jpg");
  min-height: 400px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Stäng av parallax om användaren föredrar minskad rörelse */
@media (prefers-reduced-motion: reduce) {
  .parallax-section {
    background-attachment: scroll; /* Ta bort den fixerade bakgrunden */
    /* Alternativt: Lägg till andra stilar för att minska rörelse */
  }
}

/* Exempel på en fade-in-animation som också stängs av */
.fade-in-element {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.fade-in-element.visible {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .fade-in-element {
    transition: none; /* Ta bort övergången */
    opacity: 1; /* Se till att elementet är synligt direkt */
  }
  /* Stäng av andra störande animationer också */
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

::
**Resultat:** Användare som är känsliga för rörelse kan stänga av parallax-effekten och andra animationer genom sina systeminställningar, vilket gör sidan användbar för dem.

### Webbplats-specifik inställning (Rätt) ✅

Utöver att respektera [prefers-reduced-motion]{.inline-code}, erbjuder webbplatsen en egen inställningsknapp (t.ex. "Stäng av animationer") som användaren kan använda direkt på sidan för att deaktivera alla icke-nödvändiga rörelseanimationer.

::code-group{:labels='["Koncept (Rätt) ✅"]'}

```html showLineNumbers
<button id="toggleAnimations">Stäng av animationer</button>
<!-- Hela sidan är omsluten av en container eller body har en klass -->
<body class="animations-enabled">
  <!-- ... sidans innehåll med animationer ... -->
</body>

<script>
  const toggleBtn = document.getElementById("toggleAnimations");
  const bodyEl = document.body;

  toggleBtn.addEventListener("click", () => {
    if (bodyEl.classList.contains("animations-enabled")) {
      bodyEl.classList.remove("animations-enabled");
      bodyEl.classList.add("animations-disabled");
      toggleBtn.textContent = "Slå på animationer";
    } else {
      bodyEl.classList.add("animations-enabled");
      bodyEl.classList.remove("animations-disabled");
      toggleBtn.textContent = "Stäng av animationer";
    }
  });
</script>

<style>
  /* CSS-regler som bara appliceras när animationer är på */
  .animations-enabled .animated-element {
    animation: slideIn 1s forwards;
  }
  /* ... fler animationsregler ... */

  /* Man kan också ha regler för att specifikt nollställa i .animations-disabled */
</style>
```

::
**Resultat:** Ger användaren direkt kontroll över animationerna på just den webbplatsen.

### Påtvingad animation vid interaktion (Fel) ❌

När användaren hovrar över ett kort på en sida, zoomar kortet in och roterar lätt. När användaren scrollar ner på sidan, "flyger" nya sektioner in från sidan. Det finns inget sätt att stänga av dessa effekter.

::code-group{:labels='["CSS (Fel - AAA) ❌"]'}

```css showLineNumbers
.card:hover {
  /* Fel: Påtvingad zoom/rotation utan avstängningsmöjlighet */
  transform: scale(1.1) rotate(3deg);
  transition: transform 0.3s ease;
}

.section-fly-in {
  /* Fel: Påtvingad "fly-in"-animation utan avstängningsmöjlighet */
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.section-fly-in.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Ingen @media (prefers-reduced-motion: reduce) finns */
/* Ingen knapp/inställning för att stänga av animationer finns */
```

::
**Resultat:** Användare som är känsliga för dessa rörelser kan uppleva obehag eller bli distraherade och har inget sätt att undvika det.

### Undantag: Nödvändig animation (Tillåtet) ✅

Användaren drar ett reglage (slider) för att välja ett värde. Animationen av reglagets "tumme" som rör sig längs spåret är nödvändig för att ge visuell återkoppling om den pågående interaktionen och det valda värdet. En annan nödvändig animation är när man drar för att ändra storlek på ett fönster eller en ruta – animationen visar direkt resultatet av interaktionen.

::code-group{:labels='["Koncept (Tillåtet) ✅"]'}

```text [Beskrivning]
En volymkontroll (slider). När användaren drar i reglaget följer den lilla cirkeln (tummen) med direkt under pekaren. Denna rörelse är direkt kopplad till användarens input och visar det aktuella värdet.
```

::
**Resultat:** Denna typ av animation är nödvändig för att förstå och utföra interaktionen och behöver inte kunna stängas av.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.3.3 Animation from Interactions (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interaction.html)
- [MDN Web Docs: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [WebAIM: Motion Sickness and Web Accessibility](https://webaim.org/blog/motion-sickness-and-web-accessibility/)
- [CSS-Tricks: An Introduction to the Reduced Motion Media Query](https://css-tricks.com/an-introduction-to-the-reduced-motion-media-query/)
