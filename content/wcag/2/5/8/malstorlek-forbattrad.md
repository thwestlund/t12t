---
title: 2.5.8 Målstorlek (Förbättrad)
description: Säkerställ att klick- och tryckytor (mål) är minst 48x48 CSS-pixlar stora, eller att det finns tillräckligt avstånd mellan små mål.
level: AAA
slug: malstorlek-forbattrad
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "målstorlek",
    "target size",
    "klickyta",
    "tryckyta",
    "knappstorlek",
    "pekare",
    "motorik",
    "tremor",
    "darrhänthet",
    "mobil",
    "pekskärm",
    "operabel",
    "indatametoder",
    "avstånd",
    "spacing",
  ]
canonical: https://t12t.dev/wcag/2/5/8/malstorlek-forbattrad

principleNumber: 2
principleName: Operabel
guidelineNumber: 5
guidelineName: Indatametoder
criterionNumber: 8

og:
  title: 2.5.8 Målstorlek (Förbättrad) – WCAG
  description: Säkerställ att klick- och tryckytor är minst 48x48 CSS-pixlar eller har tillräckligt avstånd.
  url: https://t12t.dev/wcag/2/5/8/malstorlek-forbattrad
  type: article

datePublished: 2025-06-17
dateModified: 2024-05-17 # Kriteriet är nytt i WCAG 2.2

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Målstorlek (Förbättrad)

## Beskrivning

Storleken på målet för pekarens inmatning är minst **48 gånger 48 CSS-pixlar**. Detta gäller **inte** om:

1.  **Avstånd (Spacing):** Det finns ett avstånd på minst **24 CSS-pixlar** runt målet som inte innehåller några andra mål. Detta gäller för mål som är mindre än 48x48 pixlar. Kanten på ett mål får inte vara närmare än 24 pixlar från kanten på ett annat mål.
2.  **Inline:** Målet finns inuti en mening eller ett textblock.
3.  **Nödvändig (Essential):** En specifik presentation av målet är nödvändig (t.ex. punkter på en karta).
4.  **Användaragentens kontroll:** Målets storlek bestäms av användaragenten och har inte ändrats av författaren.

Detta kriterium (Nivå AAA, nytt i WCAG 2.2) är en striktare version av 2.5.5 Målstorlek (Minimum) (Nivå AA). Det kräver antingen en **större** minsta målstorlek (48x48 px istället för 44x44 px) **eller** att det finns ett **tydligt avstånd** mellan mindre mål för att minska risken för felklick.

## Varför detta behövs

Även om 44x44 pixlar (Nivå AA) är ett minimum, kan det fortfarande vara för litet för vissa användare eller i vissa situationer. AAA-kravet på 48x48 pixlar, eller tillräckligt avstånd, ger ytterligare förbättringar för:

- **Personer med mer betydande motoriska svårigheter:** Erbjuder en ännu större träffyta eller minskar risken att träffa fel mål om målen ligger tätt.
- **Användare med pekskärm:** 48x48 pixlar motsvarar bättre den genomsnittliga storleken på en fingertopp och rekommenderas ofta i riktlinjer för mobildesign (t.ex. Apples och Googles).
- **Alla användare:** Större mål eller större avstånd mellan mål leder generellt till färre misstag och en bekvämare användning.

Att uppfylla detta AAA-kriterium gör gränssnittet ännu mer robust och användarvänligt, särskilt på pekskärmar.

---

## Exempel

### Stora knappar (48x48 px) (Rätt) ✅

Alla klickbara knappar och ikoner har en minsta dimension på 48x48 CSS-pixlar.

::code-group{:labels='["HTML + CSS (Rätt) ✅"]'}

```html showLineNumbers
<button class="aaa-button">Skicka</button>
<a href="/settings" class="aaa-icon-link" aria-label="Inställningar">⚙️</a>
```

```css showLineNumbers
.aaa-button {
  padding: 15px 30px; /* Ger ofta tillräcklig storlek */
  min-height: 48px; /* Säkerställ AAA-kravet */
  min-width: 48px; /* Säkerställ AAA-kravet */
  font-size: 1.1rem;
}

.aaa-icon-link {
  display: inline-flex; /* För att centrera innehåll */
  justify-content: center;
  align-items: center;
  width: 48px; /* Exakt AAA-kravet */
  height: 48px; /* Exakt AAA-kravet */
  border: 1px solid #ccc;
  border-radius: 50%; /* Cirkulär knapp */
  font-size: 24px; /* Stor ikon */
  text-decoration: none;
  color: black;
}
```

::
**Resultat:** Målen är stora nog att uppfylla AAA-kravet direkt.

### Mindre mål med tillräckligt avstånd (Rätt) ✅

Ikoner eller knappar är mindre än 48x48 px (men kanske uppfyller AA-kravet 44x44 px), men de är placerade med minst 24 px mellanrum till nästa klickbara mål.

::code-group{:labels='["HTML + CSS (Rätt) ✅"]'}

```html showLineNumbers
<div class="icon-toolbar">
  <!-- Dessa ikoner är 44x44 px stora -->
  <button class="aa-sized-icon" aria-label="Spara">💾</button>
  <button class="aa-sized-icon" aria-label="Skriv ut">🖨️</button>
  <button class="aa-sized-icon" aria-label="Hjälp">❓</button>
</div>
```

```css showLineNumbers
.icon-toolbar {
  display: flex;
  gap: 24px; /* AAA-krav: Minst 24px mellanrum mellan målen */
}

.aa-sized-icon {
  width: 44px; /* OK enligt AA, men < 48px */
  height: 44px; /* OK enligt AA, men < 48px */
  padding: 10px;
  font-size: 20px;
  border: 1px solid grey;
}
```

::
**Resultat:** Även om ikonerna i sig är mindre än 48x48, gör avståndet på minst 24px mellan dem att kravet ändå uppfylls genom "Spacing"-undantaget. Risken att träffa fel ikon minskar.

### Små, tätt placerade mål (Fel) ❌

Små ikoner (t.ex. 30x30 px) ligger precis bredvid varandra utan tillräckligt mellanrum.

::code-group{:labels='["HTML + CSS (Fel - AAA) ❌"]'}

```html showLineNumbers
<div class="tight-toolbar">
  <button class="small-tight-icon" aria-label="Fetstil"><b>B</b></button>
  <button class="small-tight-icon" aria-label="Kursiv"><i>I</i></button>
  <button class="small-tight-icon" aria-label="Understruken"><u>U</u></button>
</div>
```

```css showLineNumbers
.tight-toolbar {
  display: flex;
  gap: 4px; /* Fel: Mycket mindre än 24px mellanrum */
}

.small-tight-icon {
  width: 30px; /* Fel: Mindre än 48x48 */
  height: 30px; /* Fel: Mindre än 48x48 */
  padding: 5px;
  font-size: 14px;
  border: 1px solid grey;
  /* Eftersom målen är < 48x48 OCH avståndet är < 24px,
     uppfylls inte AAA-kravet. */
}
```

::
**Resultat:** Målen är både för små och ligger för tätt för att uppfylla AAA-kravet. Det är lätt att träffa fel knapp.

### Länk i löpande text (Undantag: Inline) ✅

(Samma som för 2.5.5) En länk mitt i ett textstycke behöver inte vara 48 px hög eller ha 24 px avstånd.

::code-group{:labels='["HTML (Tillåtet Undantag) ✅"]'}

```html showLineNumbers
<p>Läs mer <a href="/detaljer">om detaljerna</a> i vår rapport.</p>
```

::
**Resultat:** Undantaget för inline-element gäller fortfarande.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.5.8 Target Size (Enhanced) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)
- [Förstå WCAG SC 2.5.5 (Nivå AA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) (För jämförelse med minimikravet).
- [Material Design - Touch targets](https://m2.material.io/design/usability/accessibility.html#layout-and-typography) (Googles rekommendation är minst 48x48 dp).
- [Human Interface Guidelines - Controls](https://developer.apple.com/design/human-interface-guidelines/controls#Buttons) (Apples rekommendation är minst 44x44 pt för iOS).
