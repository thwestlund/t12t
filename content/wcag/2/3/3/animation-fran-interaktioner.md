---
title: Animation från interaktioner
description: Rörelseanimation som utlöses av interaktion kan inaktiveras, såvida den inte är väsentlig för funktionaliteten eller informationen.
level: AAA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 3
guidelineName: Anfallsframkallande
criterionNumber: 3
---

# Framgångskriterium 2.3.3 Animation från interaktioner

## Beskrivning

Rörelseanimation som utlöses av interaktion kan inaktiveras, såvida den inte är väsentlig för funktionaliteten eller informationen som förmedlas.

## Varför detta behövs

Rörelseanimationer på webbsidor kan orsaka fysiskt obehag för vissa användare, särskilt de med vestibulära störningar (som påverkar balansen och rumslig orientering) eller de som är känsliga för rörelse. Detta kan leda till symptom som:

- Yrsel
- Illamående
- Migrän
- Allmänt obehag

Omkring 35% av personer över 40 år har upplevt någon form av vestibulär dysfunktion, och många andra kan känna obehag av rörelseanimationer. Inte alla animationer är problematiska, men de som innehåller betydande rörelse, särskilt icke-linjära rörelser eller zoomningseffekter, kan utlösa symptom.

Genom att erbjuda ett sätt att inaktivera icke-väsentliga rörelseanimationer kan du förbättra tillgängligheten för dessa användare samtidigt som du bibehåller en rikare visuell upplevelse för dem som föredrar det.

## Exempel

### Exempel på bra implementering

#### Global animation control

```html
<header>
  <div class="settings">
    <button id="toggle-animations" aria-pressed="false">
      Inaktivera animationer
    </button>
  </div>
</header>

<main>
  <div class="card-container">
    <div class="card animated">
      <img src="product-image.jpg" alt="Produktbild" />
      <h3>Produktnamn</h3>
      <p>Produktbeskrivning...</p>
    </div>
    <!-- Fler kort... -->
  </div>
</main>

<style>
  /* Standardanimationer */
  .animated {
    transition: transform 0.3s ease-out;
  }

  .animated:hover {
    transform: scale(1.05);
  }

  /* Klass som appliceras när animationer är inaktiverade */
  .animations-disabled .animated {
    transition: none !important;
    transform: none !important;
    animation: none !important;
  }

  /* Respektera operativsystemets inställningar */
  @media (prefers-reduced-motion: reduce) {
    .animated {
      transition: none !important;
      transform: none !important;
      animation: none !important;
    }
  }
</style>

<script>
  const toggleButton = document.getElementById("toggle-animations");

  // Kontrollera om användaren tidigare har inaktiverat animationer
  if (localStorage.getItem("animations-disabled") === "true") {
    document.body.classList.add("animations-disabled");
    toggleButton.setAttribute("aria-pressed", "true");
    toggleButton.textContent = "Aktivera animationer";
  }

  // Lyssna på klick på toggle-knappen
  toggleButton.addEventListener("click", () => {
    const isDisabled = document.body.classList.toggle("animations-disabled");
    toggleButton.setAttribute("aria-pressed", isDisabled.toString());
    toggleButton.textContent = isDisabled
      ? "Aktivera animationer"
      : "Inaktivera animationer";

    // Spara inställningen
    localStorage.setItem("animations-disabled", isDisabled.toString());
  });

  // Lyssna även på operativsystemets inställningar
  window
    .matchMedia("(prefers-reduced-motion: reduce)")
    .addEventListener("change", (e) => {
      if (e.matches) {
        document.body.classList.add("animations-disabled");
        toggleButton.setAttribute("aria-pressed", "true");
        toggleButton.textContent = "Aktivera animationer";
      }
    });
</script>
```

#### Meny med inaktiverbar övergångsanimation

```html
<div class="navigation-container">
  <button id="animation-toggle" class="control-button">
    <span class="icon" aria-hidden="true">🎬</span>
    <span id="animation-label">Inaktivera menyanimationer</span>
  </button>

  <nav>
    <button id="menu-toggle" aria-expanded="false" aria-controls="menu-items">
      Meny
    </button>

    <ul id="menu-items" class="menu animated" hidden>
      <li><a href="/">Hem</a></li>
      <li><a href="/produkter">Produkter</a></li>
      <li><a href="/tjanster">Tjänster</a></li>
      <li><a href="/kontakt">Kontakt</a></li>
    </ul>
  </nav>
</div>

<style>
  .menu.animated {
    transition: opacity 0.3s, transform 0.3s;
    transform-origin: top center;
  }

  .menu.animated.visible {
    opacity: 1;
    transform: scaleY(1);
  }

  .menu.animated:not(.visible) {
    opacity: 0;
    transform: scaleY(0);
  }

  /* När animationer är inaktiverade */
  .menu:not(.animated) {
    transition: none;
    transform: none;
  }
</style>

<script>
  const menuToggle = document.getElementById("menu-toggle");
  const menuItems = document.getElementById("menu-items");
  const animationToggle = document.getElementById("animation-toggle");
  const animationLabel = document.getElementById("animation-label");

  // Hantera menyöppning/stängning
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", (!expanded).toString());

    if (!expanded) {
      menuItems.hidden = false;
      // Fördröj tillägget av visible-klassen för att animationen ska fungera
      requestAnimationFrame(() => {
        menuItems.classList.add("visible");
      });
    } else {
      menuItems.classList.remove("visible");
      // Vänta på att animationen ska slutföras innan menyn döljs
      const hasAnimation = menuItems.classList.contains("animated");

      if (hasAnimation) {
        menuItems.addEventListener(
          "transitionend",
          function hideMenu() {
            menuItems.hidden = true;
            menuItems.removeEventListener("transitionend", hideMenu);
          },
          { once: true }
        );
      } else {
        menuItems.hidden = true;
      }
    }
  });

  // Hantera animation toggle
  animationToggle.addEventListener("click", () => {
    const hasAnimation = menuItems.classList.toggle("animated");

    if (hasAnimation) {
      animationLabel.textContent = "Inaktivera menyanimationer";
      localStorage.setItem("menu-animations", "enabled");
    } else {
      animationLabel.textContent = "Aktivera menyanimationer";
      localStorage.setItem("menu-animations", "disabled");
    }
  });

  // Återställ användarens preferens
  document.addEventListener("DOMContentLoaded", () => {
    const preference = localStorage.getItem("menu-animations");

    if (preference === "disabled") {
      menuItems.classList.remove("animated");
      animationLabel.textContent = "Aktivera menyanimationer";
    }

    // Respektera prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      menuItems.classList.remove("animated");
      animationLabel.textContent = "Aktivera menyanimationer";
    }
  });
</script>
```

### Exempel på bristande implementering

#### Parallax scrollning utan möjlighet till inaktivering

```html
<!-- Dåligt exempel - parallax scrollning utan avstängningsmöjlighet -->
<style>
  .parallax-section {
    background-image: url("background.jpg");
    height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

<section class="parallax-section">
  <div class="content">
    <h2>Vår vision</h2>
    <p>Innehåll som rör sig med parallax-effekt när användaren scrollar...</p>
  </div>
</section>
```

#### Inloggningssida med kraftig övergångseffekt

```html
<!-- Dåligt exempel - kraftig övergångseffekt utan möjlighet att inaktivera -->
<style>
  .login-form {
    animation: zoom-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes zoom-in {
    from {
      transform: scale(0) rotate(10deg);
      opacity: 0;
    }
    to {
      transform: scale(1) rotate(0);
      opacity: 1;
    }
  }
</style>

<div class="login-container">
  <form class="login-form">
    <h2>Logga in</h2>
    <input type="text" placeholder="Användarnamn" />
    <input type="password" placeholder="Lösenord" />
    <button type="submit">Logga in</button>
  </form>
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
- [MDN Web Docs - prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [A List Apart - Designing Safer Web Animation for Motion Sensitivity](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Web Vestibular Disorders - Understanding Vestibular Dysfunction](https://a11yproject.com/posts/understanding-vestibular-disorders/)
