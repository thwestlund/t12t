---
title: Ingen tidsbegränsning
description: Timing är inte en väsentlig del av händelsen eller aktiviteten som presenteras av innehållet.
level: AAA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 2
guidelineName: Tillräckligt med tid
criterionNumber: 3

sitemap:
  lastmod: 2025-03-19
  changefreq: monthly
  priority: 0.8
---

# Framgångskriterium 2.2.3 Ingen tidsbegränsning

## Beskrivning

Timing är inte en väsentlig del av händelsen eller aktiviteten som presenteras av innehållet, förutom för icke-interaktiva synkroniserade media och realtidshändelser.

## Varför detta behövs

Personer med olika funktionsnedsättningar, inklusive kognitiva begränsningar, inlärningssvårigheter eller motoriska nedsättningar, behöver ofta mer tid för att läsa innehåll, orientera sig på en sida eller slutföra uppgifter.

När innehåll har tidsbegränsningar kan dessa användare hindras från att slutföra uppgifter eller tillgodogöra sig informationen på webbplatsen. Detta kan särskilt drabba:

- Personer som behöver längre tid att läsa på grund av kognitiva funktionsnedsättningar
- Personer som använder skärmläsare och behöver mer tid för att navigera och förstå innehållet
- Personer med motoriska nedsättningar som rör sig långsammare på tangentbordet eller använder andra inmatningsmetoder
- Äldre personer som kan behöva mer tid för att slutföra webbaserade uppgifter

Genom att eliminera tidsbegränsningar säkerställs att alla användare kan ta den tid de behöver för att interagera med innehållet.

## Exempel

### Exempel på bra implementering

#### Formulär utan tidsgräns

```html
<form action="/submit" method="post">
  <h2>Ansökan</h2>
  <p>
    Ta den tid du behöver för att fylla i formuläret. Dina uppgifter sparas
    automatiskt.
  </p>

  <div class="form-section">
    <label for="name">Namn:</label>
    <input type="text" id="name" name="name" required />
  </div>

  <div class="form-section">
    <label for="address">Adress:</label>
    <textarea id="address" name="address" rows="3" required></textarea>
  </div>

  <!-- Fler formulärfält... -->

  <div class="form-controls">
    <button type="submit">Skicka in</button>
    <button type="button" id="save-draft">Spara utkast</button>
  </div>
</form>

<script>
  // Autosparfunktion
  const form = document.querySelector("form");
  const formElements = form.elements;

  // Spara utkast automatiskt när användaren skriver
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].addEventListener("change", saveFormState);
  }

  function saveFormState() {
    // Kod för att spara formulärtillstånd i localStorage eller på servern
    console.log("Formulärtillstånd sparat");
  }
</script>
```

#### Quiz eller utbildningsmaterial utan tidsgräns

```html
<div class="quiz-container">
  <h2>Kunskapstest</h2>
  <p>
    Detta test har ingen tidsgräns. Ta den tid du behöver för att besvara
    frågorna.
  </p>

  <div class="question">
    <h3>Fråga 1:</h3>
    <p>Vilket år infördes allmän rösträtt i Sverige?</p>
    <div class="options">
      <label> <input type="radio" name="q1" value="1909" /> 1909 </label>
      <label> <input type="radio" name="q1" value="1921" /> 1921 </label>
      <label> <input type="radio" name="q1" value="1945" /> 1945 </label>
    </div>
  </div>

  <!-- Fler frågor... -->

  <div class="quiz-controls">
    <button type="button" id="check-answers">Kontrollera svar</button>
    <button type="button" id="reset">Börja om</button>
  </div>
</div>
```

### Exempel på bristande implementering

#### Tidsbegränsat formulär

```html
<!-- Dåligt exempel - ett formulär med tidsgräns -->
<form action="/submit" method="post">
  <h2>Biljettbokning</h2>
  <div class="timer">
    Du har <span id="countdown">10:00</span> minuter på dig att slutföra
    bokningen
  </div>

  <div class="form-section">
    <label for="tickets">Antal biljetter:</label>
    <select id="tickets" name="tickets">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>

  <!-- Fler formulärfält... -->

  <button type="submit">Boka nu</button>
</form>

<script>
  // Räknare som kör ut användaren när tiden är slut
  let timeLeft = 600; // 10 minuter i sekunder

  const intervalId = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("countdown").textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(intervalId);
      alert("Tiden är ute! Din bokning avbröts.");
      window.location.href = "/timeout";
    }
  }, 1000);
</script>
```

#### Quiz med tidsbegränsning

```html
<!-- Dåligt exempel - ett quiz med tidsgräns som inte kan förlängas -->
<div class="quiz-container">
  <h2>Snabbtest</h2>
  <div class="timer">Tid kvar: <span id="timer">60</span> sekunder</div>

  <div class="question">
    <p>Vilken är Sveriges huvudstad?</p>
    <div class="options">
      <button>Stockholm</button>
      <button>Göteborg</button>
      <button>Malmö</button>
    </div>
  </div>

  <!-- Fler frågor... -->
</div>

<script>
  let seconds = 60;

  const timer = setInterval(() => {
    seconds--;
    document.getElementById("timer").textContent = seconds;

    if (seconds <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);

  function endQuiz() {
    alert("Tiden är ute! Testet avslutas.");
    // Kod för att avsluta quizet och visa resultat
  }
</script>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.2.3 No Timing](https://www.w3.org/WAI/WCAG22/Understanding/no-timing.html)
- [Webbriktlinjer - Ge användarna möjlighet att styra tidsbestämda händelser](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/ge-anvandarna-mojlighet-att-styra-tidsbestamda-handelser)
- [Web Accessibility Perspective: Accommodating Low Vision and Cognitive Issues](https://www.w3.org/WAI/perspective-videos/)
- [Web Usability - Time Limits](https://www.nngroup.com/articles/time-limits/)
