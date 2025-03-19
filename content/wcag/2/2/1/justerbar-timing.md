---
title: Justerbar timing
description: För varje tidsgräns som är satt av innehållet gäller minst en av följande.
level: A
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 2
guidelineName: Tillräckligt med tid
criterionNumber: 1
---

# Framgångskriterium 2.2.1 Justerbar timing

## Beskrivning

För varje tidsgräns som är inställd av innehållet gäller minst ett av följande:

- **Stänga av:** Användaren kan stänga av tidsgränsen innan den löper ut; eller
- **Justera:** Användaren kan justera tidsgränsen över ett brett intervall som är minst tio gånger längre än standardinställningen innan den löper ut; eller
- **Förlänga:** Användaren varnas innan tiden går ut och får minst 20 sekunder på sig att förlänga tidsgränsen med ett enkelt kommando (t.ex. "tryck på mellanslag"), och användaren får förlänga tidsgränsen minst tio gånger; eller
- **Realtidsundantag:** Tidsgränsen är en nödvändig del av en händelse i realtid (t.ex. en auktion) och det finns inget alternativ till tidsgränsen; eller
- **Nödvändigt undantag:** Tidsgränsen är nödvändig och att förlänga den skulle göra aktiviteten ogiltig; eller
- **20-timmarsundantag:** Tidsgränsen är längre än 20 timmar.

## Varför detta behövs

Vissa användare behöver mer tid än andra för att läsa och använda innehåll. Personer med funktionsnedsättningar som påverkar läshastighet, förståelse, finmotorik, eller som använder hjälpmedel, kan behöva mer tid för att slutföra uppgifter. Genom att tillåta användare att justera eller inaktivera tidsgränser säkerställer man att de kan interagera med innehållet i sin egen takt.

## Exempel

### Exempel på bra implementering

#### Inloggningssession med möjlighet att förlänga

```html
<div id="sessionWarning" hidden>
  <p>
    Din session kommer att gå ut om <span id="countdown">60</span> sekunder.
  </p>
  <button id="extendSession">Förläng session</button>
</div>

<script>
  let sessionTimeout;
  let countdownInterval;
  let secondsRemaining = 60;

  function startSessionTimer() {
    // Sätt timeout för 20 minuter
    sessionTimeout = setTimeout(showWarning, 20 * 60 * 1000);
  }

  function showWarning() {
    const warningDiv = document.getElementById("sessionWarning");
    const countdownSpan = document.getElementById("countdown");

    warningDiv.hidden = false;
    secondsRemaining = 60;

    // Uppdatera nedräknaren varje sekund
    countdownInterval = setInterval(function () {
      secondsRemaining--;
      countdownSpan.textContent = secondsRemaining;

      if (secondsRemaining <= 0) {
        clearInterval(countdownInterval);
        // Logga ut användaren
        window.location.href = "logout.html";
      }
    }, 1000);
  }

  document
    .getElementById("extendSession")
    .addEventListener("click", function () {
      // Dölj varningen
      document.getElementById("sessionWarning").hidden = true;

      // Rensa befintliga timers
      clearTimeout(sessionTimeout);
      clearInterval(countdownInterval);

      // Starta om sessionen
      startSessionTimer();
    });

  // Starta sessionstimern när sidan laddas
  startSessionTimer();
</script>
```

#### Undersökning med inaktiverad tidsgräns

```html
<form action="submit-survey.php" method="post">
  <div>
    <input type="checkbox" id="disableTimeout" name="disableTimeout" />
    <label for="disableTimeout">Inaktivera tidsgräns</label>
  </div>

  <div id="timeInfo">
    <p>
      Du har <span id="timeLeft">10:00</span> minuter kvar att slutföra
      undersökningen.
    </p>
  </div>

  <!-- Undersökningens innehåll -->

  <button type="submit">Skicka in</button>
</form>

<script>
  let timeoutId;
  let minutesLeft = 10;
  let secondsLeft = 0;

  function startTimer() {
    timeoutId = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    if (secondsLeft === 0) {
      if (minutesLeft === 0) {
        clearInterval(timeoutId);
        // Skicka in formuläret
        document.querySelector("form").submit();
        return;
      }
      minutesLeft--;
      secondsLeft = 59;
    } else {
      secondsLeft--;
    }

    document.getElementById("timeLeft").textContent =
      minutesLeft + ":" + (secondsLeft < 10 ? "0" : "") + secondsLeft;
  }

  document
    .getElementById("disableTimeout")
    .addEventListener("change", function () {
      if (this.checked) {
        clearInterval(timeoutId);
        document.getElementById("timeInfo").hidden = true;
      } else {
        document.getElementById("timeInfo").hidden = false;
        startTimer();
      }
    });

  // Starta timern
  startTimer();
</script>
```

### Exempel på bristande implementering

#### Automatisk utloggning utan varning

```javascript
// Efter 30 minuter, logga ut användaren utan varning
setTimeout(function () {
  window.location.href = "logout.html";
}, 30 * 60 * 1000);
```

#### Tidsbegränsad sida utan möjlighet att förlänga

```html
<p>
  Denna sida kommer att omdirigeras om <span id="counter">60</span> sekunder.
</p>

<script>
  let seconds = 60;

  setInterval(function () {
    seconds--;
    document.getElementById("counter").textContent = seconds;

    if (seconds <= 0) {
      window.location.href = "timeout.html";
    }
  }, 1000);
</script>
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)
- [Webbriktlinjer - R130: Se till att användaren kan pausa, stoppa eller dölja störande rörelser](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/se-till-att-anvandaren-kan-pausa-stoppa-eller-dolja-storande-rorelser)
