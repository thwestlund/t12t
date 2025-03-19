---
title: Avbrott
description: Avbrott kan skjutas upp eller stoppas av användaren.
level: AAA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 2
guidelineName: Tillräckligt med tid
criterionNumber: 4

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.2.4 Avbrott

## Beskrivning

Avbrott kan skjutas upp eller stoppas av användaren, förutom avbrott som involverar en nödsituation.

## Varför detta behövs

Avbrott, som popupfönster, uppdateringar och notiser, kan vara störande och förvirrande för många användare, särskilt för personer med kognitiva funktionsnedsättningar, uppmärksamhetsstörningar eller personer som använder skärmläsare.

När användare blir avbrutna kan de:

- Förlora fokus och behöva börja om med en uppgift
- Glömma vad de höll på med
- Uppleva stress och ångest
- Missta ett avbrott för innehåll de aktivt sökte

Personer med vissa kognitiva funktionsnedsättningar, som ADHD eller autism, kan ha särskilt svårt att återfå fokus efter ett avbrott. Skärmläsaranvändare kan bli särskilt förvirrade om fokus plötsligt flyttas till ett nytt element.

Genom att ge användare kontroll över när och hur avbrott sker, kan de interagera med innehållet på ett sätt som fungerar för deras individuella behov.

## Exempel

### Exempel på bra implementering

#### Skjutbar notification

```html
<div id="notification" class="notification" role="status" aria-live="polite">
  <div class="notification-content">
    <h3>Ny version tillgänglig</h3>
    <p>En uppdatering av webbplatsen finns tillgänglig.</p>
  </div>
  <div class="notification-actions">
    <button id="notification-later">Visa senare</button>
    <button id="notification-dismiss">Stäng</button>
    <button id="notification-update">Uppdatera nu</button>
  </div>
</div>

<script>
  const notification = document.getElementById("notification");

  // Visa notifikation på ett icke-störande sätt
  setTimeout(() => {
    notification.classList.add("show");
  }, 30000); // Visa efter 30 sekunder

  // Skjut upp notifikationen
  document
    .getElementById("notification-later")
    .addEventListener("click", () => {
      notification.classList.remove("show");
      // Schemalägg för senare
      localStorage.setItem("notification-snoozed", Date.now());
    });

  // Stäng notifikationen
  document
    .getElementById("notification-dismiss")
    .addEventListener("click", () => {
      notification.classList.remove("show");
      // Spara att användaren avfärdat notifikationen
      localStorage.setItem("notification-dismissed", "true");
    });
</script>
```

#### Chattwdget med användarkontroll

```html
<div id="chat-widget" class="chat-widget minimized">
  <div class="chat-header">
    <h3>Kundtjänst</h3>
    <div class="chat-controls">
      <button id="chat-minimize" aria-label="Minimera chat">_</button>
      <button id="chat-preferences" aria-label="Inställningar">⚙️</button>
      <button id="chat-close" aria-label="Stäng chat">×</button>
    </div>
  </div>

  <div id="chat-preferences-panel" class="hidden">
    <h4>Chattinställningar</h4>
    <label>
      <input type="checkbox" id="pref-autoshow" /> Visa chatten automatiskt
    </label>
    <label>
      <input type="checkbox" id="pref-sound" /> Spela ljud vid nya meddelanden
    </label>
    <label>
      <input type="checkbox" id="pref-notifications" /> Visa notifieringar
    </label>
    <button id="save-preferences">Spara inställningar</button>
  </div>

  <div class="chat-body">
    <!-- Chattinnehåll -->
  </div>
</div>

<script>
  const chatWidget = document.getElementById("chat-widget");

  // Minimera/maximera chatten
  document.getElementById("chat-minimize").addEventListener("click", () => {
    chatWidget.classList.toggle("minimized");
  });

  // Stäng chatten
  document.getElementById("chat-close").addEventListener("click", () => {
    chatWidget.classList.add("hidden");
    localStorage.setItem("chat-closed", "true");
  });

  // Visa/dölj inställningspanelen
  document.getElementById("chat-preferences").addEventListener("click", () => {
    document
      .getElementById("chat-preferences-panel")
      .classList.toggle("hidden");
  });

  // Spara användarens inställningar
  document.getElementById("save-preferences").addEventListener("click", () => {
    const autoshow = document.getElementById("pref-autoshow").checked;
    const sound = document.getElementById("pref-sound").checked;
    const notifications = document.getElementById("pref-notifications").checked;

    localStorage.setItem("chat-pref-autoshow", autoshow);
    localStorage.setItem("chat-pref-sound", sound);
    localStorage.setItem("chat-pref-notifications", notifications);

    document.getElementById("chat-preferences-panel").classList.add("hidden");
  });
</script>
```

### Exempel på bristande implementering

#### Påtvingad uppdatering

```html
<!-- Dåligt exempel - påtvingad uppdatering utan möjlighet att skjuta upp -->
<div class="update-notification">
  <p>Uppdaterar sidan om <span id="countdown">5</span> sekunder...</p>
</div>

<script>
  let countdown = 5;

  const timer = setInterval(() => {
    countdown--;
    document.getElementById("countdown").textContent = countdown;

    if (countdown <= 0) {
      clearInterval(timer);
      location.reload(); // Tvingar omladdning
    }
  }, 1000);
</script>
```

#### Autostart-video utan kontroller

```html
<!-- Dåligt exempel - video som startar automatiskt utan möjlighet att pausa -->
<video autoplay src="promo-video.mp4">
  Din webbläsare stödjer inte videouppspelning.
</video>

<script>
  // Video spelas automatiskt efter 10 sekunder
  setTimeout(() => {
    const video = document.querySelector("video");
    video.play();
  }, 10000);
</script>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.2.4 Interruptions](https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html)
- [WebAIM - Cognitive Disabilities: Design Considerations](https://webaim.org/articles/cognitive/design)
- [W3C WAI - Designing for People with Attention Deficit Disorder](https://www.w3.org/WAI/cognitive/attention/)
- [Nielsen Norman Group - Interruption Science](https://www.nngroup.com/articles/interruption-science/)
