---
title: 2.2.1 Justerbar tidsgräns
description: Ge användare möjlighet att stänga av, justera eller förlänga tidsgränser som satts av innehållet, med vissa undantag.
level: A
slug: justerbar-tidsgrans
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "tidsgräns",
    "timeout",
    "session",
    "formulär",
    "tid",
    "justerbar",
    "förlänga",
    "operabel",
  ]
canonical: https://t12t.dev/wcag/2/2/1/justerbar-tidsgrans

principleNumber: 2
principleName: Operabel
guidelineNumber: 2
guidelineName: Tillräckligt med tid
criterionNumber: 1

og:
  title: 2.2.1 Justerbar tidsgräns – WCAG
  description: Ge användare möjlighet att stänga av, justera eller förlänga tidsgränser.
  url: https://t12t.dev/wcag/2/2/1/justerbar-tidsgrans
  type: article

datePublished: 2025-05-10
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.9 # Nivå A, fundamental
---

# Justerbar tidsgräns

## Beskrivning

För varje tidsgräns som sätts av innehållet måste minst ett av följande vara sant:

1.  **Avstängning:** Användaren tillåts stänga av tidsgränsen innan den påträffas.
2.  **Justering:** Användaren tillåts justera tidsgränsen innan den påträffas, över ett brett intervall som är minst tio gånger standardinställningen.
3.  **Förlängning:** Användaren varnas innan tiden går ut och ges minst 20 sekunder på sig att förlänga tidsgränsen med en enkel åtgärd (t.ex. trycka på mellanslagstangenten). Användaren ska kunna förlänga tidsgränsen minst tio gånger.

Detta krav gäller **inte** om tidsgränsen är:

- **En del av en realtidshändelse:** T.ex. i en auktion där tiden är synkroniserad för alla deltagare och det inte finns någon möjlighet att förlänga tiden.
- **Nödvändig (Essential):** Om tidsgränsen är avgörande för aktiviteten och att förlänga den skulle göra aktiviteten ogiltig (t.ex. ett tidsbegränsat prov där tiden är en del av bedömningen).
- **Längre än 20 timmar:** Om tidsgränsen är satt till mer än 20 timmar anses den vara tillräckligt lång för att inte utgöra ett hinder.

## Varför detta behövs

Många användare behöver mer tid än genomsnittet för att läsa, förstå och agera på webbinnehåll:

- **Personer med nedsatt syn:** Kan behöva längre tid att läsa text, särskilt om de använder förstoringsverktyg eller skärmläsare.
- **Personer med kognitiva funktionsnedsättningar eller lässvårigheter:** Kan behöva extra tid för att bearbeta information och förstå instruktioner.
- **Personer med motoriska funktionsnedsättningar:** Kan behöva längre tid för att fysiskt mata in information eller aktivera kontroller.
- **Skärmläsaranvändare:** Att navigera och lyssna på innehåll tar ofta längre tid än att skumma visuellt.

Oväntade eller korta tidsgränser (som automatisk utloggning från en session eller tidsbegränsade formulär) kan leda till att användaren förlorar sitt arbete, blir frustrerad eller helt enkelt inte hinner slutföra sin uppgift. Att ge kontroll över tidsgränserna är avgörande för dessa användare.

---

## Exempel

### Session Timeout med förlängning (Rätt) ✅

En webbplats loggar automatiskt ut användare efter 15 minuters inaktivitet. 2 minuter innan tiden går ut visas en tydlig dialogruta: "Du kommer snart att loggas ut på grund av inaktivitet. Vill du förbli inloggad?". Dialogrutan har en knapp "Ja, fortsätt" som förlänger sessionen med ytterligare 15 minuter. Användaren kan förlänga sessionen flera gånger.

::code-group{:labels='["Konceptuell JavaScript (Rätt) ✅"]'}

```javascript showLineNumbers
let inactivityTimer;
let warningTimer;
const sessionLength = 15 * 60 * 1000; // 15 minuter
const warningTime = 2 * 60 * 1000; // 2 minuter varning
let extensions = 0;
const maxExtensions = 10;

function startTimers() {
  clearTimeout(warningTimer);
  clearTimeout(inactivityTimer);

  warningTimer = setTimeout(showWarning, sessionLength - warningTime);
  inactivityTimer = setTimeout(logout, sessionLength);
  console.log("Timers started.");
}

function showWarning() {
  if (extensions < maxExtensions) {
    // Visa en dialogruta/meddelande för användaren
    const extend = confirm(
      "Du kommer snart att loggas ut. Vill du förlänga sessionen?"
    );
    if (extend) {
      extendSession();
    } else {
      // Låt timeout ske eller logga ut direkt
      logout();
    }
  } else {
    // Informera att max antal förlängningar nåtts (valfritt)
    console.log("Max antal förlängningar nåtts.");
    // Låt den sista timeouten ske
  }
}

function extendSession() {
  extensions++;
  console.log(`Session förlängd (${extensions}/${maxExtensions}).`);
  // Anropa servern för att faktiskt förlänga sessionen
  // fetch('/api/extend-session');
  startTimers(); // Starta om timers
}

function logout() {
  console.log("Loggar ut...");
  // window.location.href = '/logout';
}

// Återställ timers vid användaraktivitet
document.addEventListener("mousemove", startTimers);
document.addEventListener("keypress", startTimers);

// Starta vid sidladdning
startTimers();
```

::
**Resultat:** Användaren varnas i god tid och kan enkelt förlänga sessionen (uppfyller villkor 3).

### Tidsbegränsat formulär med justerbar tid (Rätt) ✅

Ett onlineformulär måste fyllas i inom 30 minuter. Innan användaren startar formuläret finns en inställning där de kan välja att förlänga tiden till 60 minuter, 90 minuter, eller stänga av tidsgränsen helt (om det inte är ett "nödvändigt" fall som ett prov).

::code-group{:labels='["Konceptuellt formulär (Rätt) ✅"]'}

```html showLineNumbers
<h2>Ansökningsformulär</h2>
<p>Du har normalt 30 minuter på dig att fylla i detta formulär.</p>
<div>
  <label for="timeLimit">Anpassa tidsgräns:</label>
  <select id="timeLimit">
    <option value="30">30 minuter (Standard)</option>
    <option value="60">60 minuter</option>
    <option value="90">90 minuter</option>
    <option value="none">Ingen tidsgräns</option>
  </select>
</div>
<button onclick="startForm(document.getElementById('timeLimit').value)">
  Starta formuläret
</button>

<div id="formArea" style="display: none;">
  <!-- Själva formuläret här -->
  <p>Tid kvar: <span id="timerDisplay"></span></p>
</div>

<script>
  let formTimer;
  function startForm(minutes) {
    document.getElementById("formArea").style.display = "block";
    if (minutes !== "none") {
      let seconds = parseInt(minutes) * 60;
      // Starta nedräkning... (logik för timer behövs)
      console.log(`Startar formulär med ${minutes} minuters gräns.`);
    } else {
      console.log("Startar formulär utan tidsgräns.");
      document.getElementById("timerDisplay").textContent = "Ingen";
    }
  }
</script>
```

::
**Resultat:** Användaren kan justera eller stänga av tidsgränsen innan den aktiveras (uppfyller villkor 1 eller 2).

### Plötslig utloggning utan varning (Fel) ❌

Användaren arbetar i ett system och blir plötsligt utloggad med meddelandet "Din session har gått ut" utan någon förvarning eller möjlighet att förlänga.

**Resultat:** Uppfyller inte kravet. Användaren ges ingen chans att agera innan tiden går ut.

### Undantag: Online-auktion (Tillåtet) ✅

En webbplats håller en live-auktion online. Varje budgivningsrunda har en fast tidsgräns (t.ex. 1 minut) som räknas ner synkront för alla deltagare. Att tillåta en enskild användare att förlänga tiden skulle vara orättvist och göra auktionen ogiltig.

**Resultat:** Tidsgränsen är en del av en realtidshändelse och är nödvändig, därför gäller inte kravet.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.2.1 Timing Adjustable (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)
- [Webbriktlinjer: R119 Ge användaren möjlighet att förlänga tidsbegränsningar](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/ge-anvandaren-mojlighet-att-forlanga-tidsbegransningar)
