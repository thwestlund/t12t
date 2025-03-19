---
title: Fokusnot vid fokus
description: När ett användargränssnittskomponent får fokus, orsakar det inte ett betydande kontextbyte.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 4
guidelineName: Navigerbart
criterionNumber: 12
---

# Framgångskriterium 2.4.12 Fokusnot vid fokus

## Beskrivning

När ett användargränssnittskomponent får fokus, orsakar det inte ett betydande kontextbyte.

## Varför detta behövs

När användare navigerar genom en webbsida med tangentbord eller hjälpmedel, flyttas "fokus" från ett interaktivt element till nästa. Om ett element orsakar stora förändringar i webbsidans innehåll eller kontext enbart för att det får fokus (inte för att det aktiveras), kan detta skapa förvirring och desorientering.

Ett betydande kontextbyte kan vara:

- Ett nytt fönster öppnas
- Fokus flyttas till ett annat element
- Navigering till en annan sida
- Betydande förändringar i innehållet på sidan
- Omorganisering av visuella element

Dessa automatiska förändringar kan vara särskilt problematiska för:

- Personer med kognitiva funktionsnedsättningar som kan bli förvirrade av oväntade förändringar
- Personer med motoriska funktionsnedsättningar som kan råka fokusera på fel element
- Personer med synnedsättningar som använder skärmläsare och kan tappa orienteringen
- Tangentbordsanvändare som kan förlora sin plats i navigationssekvensen

## Exempel

### Exempel på bra implementering

#### Navigeringsmeny med undermenyer som visas vid klick, inte vid fokus

```html
<nav>
  <ul class="main-menu">
    <li>
      <button aria-expanded="false" aria-controls="products-menu">
        Produkter
      </button>
      <ul id="products-menu" class="submenu" hidden>
        <li><a href="/produkter/kategori1">Kategori 1</a></li>
        <li><a href="/produkter/kategori2">Kategori 2</a></li>
        <li><a href="/produkter/kategori3">Kategori 3</a></li>
      </ul>
    </li>
    <li>
      <button aria-expanded="false" aria-controls="services-menu">
        Tjänster
      </button>
      <ul id="services-menu" class="submenu" hidden>
        <li><a href="/tjanster/tjanst1">Tjänst 1</a></li>
        <li><a href="/tjanster/tjanst2">Tjänst 2</a></li>
        <li><a href="/tjanster/tjanst3">Tjänst 3</a></li>
      </ul>
    </li>
  </ul>
</nav>

<script>
  const menuButtons = document.querySelectorAll(".main-menu button");

  menuButtons.forEach((button) => {
    // Visa undermeny endast vid klick, inte vid fokus
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !expanded);

      const submenuId = button.getAttribute("aria-controls");
      const submenu = document.getElementById(submenuId);

      if (submenu) {
        submenu.hidden = expanded;
      }
    });
  });
</script>
```

#### Formulär med tooltips som visas vid fokus utan att ändra layout

```html
<style>
  .form-field {
    position: relative;
    margin-bottom: 1em;
  }

  .tooltip {
    position: absolute;
    top: -2.5em;
    left: 0;
    background: #f8f8f8;
    border: 1px solid #ddd;
    padding: 0.5em;
    border-radius: 4px;
    font-size: 0.9em;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s;
    z-index: 100;
  }

  input:focus + .tooltip {
    opacity: 1;
    visibility: visible;
  }
</style>

<form>
  <div class="form-field">
    <label for="username">Användarnamn</label>
    <input type="text" id="username" name="username" />
    <span class="tooltip" role="tooltip"
      >Välj ett användarnamn med minst 5 tecken</span
    >
  </div>

  <div class="form-field">
    <label for="password">Lösenord</label>
    <input type="password" id="password" name="password" />
    <span class="tooltip" role="tooltip"
      >Lösenordet måste innehålla minst 8 tecken, inklusive siffror och
      specialtecken</span
    >
  </div>

  <button type="submit">Registrera</button>
</form>
```

#### Bilder med detaljvy som aktiveras vid klick, inte fokus

```html
<div class="product-gallery">
  <h2>Produktbilder</h2>

  <div class="thumbnails">
    <button class="thumbnail-button" aria-controls="image-detail-1">
      <img src="product-thumb-1.jpg" alt="Produktvy framsida - miniatyr" />
    </button>

    <button class="thumbnail-button" aria-controls="image-detail-2">
      <img src="product-thumb-2.jpg" alt="Produktvy baksida - miniatyr" />
    </button>

    <button class="thumbnail-button" aria-controls="image-detail-3">
      <img src="product-thumb-3.jpg" alt="Produktvy sida - miniatyr" />
    </button>
  </div>

  <div class="detail-view">
    <div id="image-detail-1" class="detail-image">
      <img src="product-large-1.jpg" alt="Produktvy framsida" />
    </div>
    <div id="image-detail-2" class="detail-image" hidden>
      <img src="product-large-2.jpg" alt="Produktvy baksida" />
    </div>
    <div id="image-detail-3" class="detail-image" hidden>
      <img src="product-large-3.jpg" alt="Produktvy sida" />
    </div>
  </div>
</div>

<script>
  const thumbnailButtons = document.querySelectorAll(".thumbnail-button");

  thumbnailButtons.forEach((button) => {
    // Visa detaljbild endast vid klick, inte vid fokus
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("aria-controls");

      // Dölj alla detaljbilder
      document.querySelectorAll(".detail-image").forEach((detail) => {
        detail.hidden = true;
      });

      // Visa målbilden
      document.getElementById(targetId).hidden = false;
    });
  });
</script>
```

### Exempel på bristande implementering

#### Länkar som ändrar innehåll vid fokus

```html
<!-- Dåligt exempel - länk som ändrar sidan vid fokus -->
<nav>
  <ul>
    <li><a href="/" onfocus="loadContent('home')">Hem</a></li>
    <li>
      <a href="/produkter" onfocus="loadContent('products')">Produkter</a>
    </li>
    <li><a href="/kontakt" onfocus="loadContent('contact')">Kontakt</a></li>
  </ul>
</nav>

<div id="content">
  <!-- Här laddas innehåll in automatiskt när länkar får fokus -->
</div>

<script>
  function loadContent(page) {
    // Dålig praxis: Laddar innehåll endast baserat på fokus
    document.getElementById(
      "content"
    ).innerHTML = `Innehåll för ${page}-sidan...`;
  }
</script>
```

#### Formulär med automatisk navigering vid fokus

```html
<!-- Dåligt exempel - väljare som automatiskt aktiverar annan sida vid fokus -->
<form>
  <label for="language-select">Välj språk:</label>

  <!-- Dålig praxis: Select-elementet ändrar sida vid fokus -->
  <select id="language-select" onfocus="this.size=5;" onblur="this.size=1;">
    <option value="sv">Svenska</option>
    <option value="en">Engelska</option>
    <option value="fi">Finska</option>
    <option value="no">Norska</option>
    <option value="da">Danska</option>
  </select>

  <!-- Varje alternativ navigerar automatiskt när det får fokus -->
  <script>
    const select = document.getElementById("language-select");

    select.addEventListener("focus", (event) => {
      // Förändrar select-element vid fokus
      select.size = 5;
    });

    select.addEventListener("blur", (event) => {
      select.size = 1;
    });

    select.addEventListener("change", (event) => {
      // Navigerar automatiskt vid val (kan vara ett problem om
      // användaren bara navigerar med tangentbord)
      window.location.href = "/" + event.target.value;
    });
  </script>
</form>
```

#### Modal som öppnas vid fokus

```html
<!-- Dåligt exempel - modal som öppnas automatiskt vid fokus -->
<button
  onfocus="document.getElementById('help-modal').style.display = 'block';"
  onclick="return false;"
>
  Hjälp
</button>

<div id="help-modal" class="modal" style="display: none;">
  <div class="modal-content">
    <h2>Hjälpinformation</h2>
    <p>
      Här är hjälpinformation som visas automatiskt när knappen får fokus...
    </p>
    <button
      onclick="document.getElementById('help-modal').style.display = 'none';"
    >
      Stäng
    </button>
  </div>
</div>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.4.12 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [W3C WAI - Keyboard Accessibility](https://www.w3.org/WAI/perspective-videos/keyboard/)
- [Deque University - Focus Management](https://dequeuniversity.com/checklists/web/keyboard-focus-management)
- [WebAIM - Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
