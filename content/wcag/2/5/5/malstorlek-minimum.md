---
title: 2.5.5 Målstorlek (Minimum)
description: Säkerställ att klick- och tryckytor (mål) är tillräckligt stora för att vara lätta att träffa, med vissa undantag.
level: AA
slug: malstorlek-minimum
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
  ]
canonical: https://t12t.dev/wcag/2/5/5/malstorlek-minimum

principleNumber: 2
principleName: Operabel
guidelineNumber: 5
guidelineName: Indatametoder
criterionNumber: 5

og:
  title: 2.5.5 Målstorlek (Minimum) – WCAG
  description: Säkerställ att klick- och tryckytor är tillräckligt stora.
  url: https://t12t.dev/wcag/2/5/5/malstorlek-minimum
  type: article

datePublished: 2025-06-14
dateModified: 2024-05-17 # Kriteriet är från WCAG 2.1, uppdaterad info 2.2
# WCAG 2.1 SC, not new in 2.2. Updated date retained.

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.7 # AA, important, especially for mobile
---

# Målstorlek (Minimum)

## Beskrivning

Storleken på målet för pekarens inmatning är minst **44 gånger 44 CSS-pixlar**, förutom när:

1.  **Motsvarande (Equivalent):** Målet är tillgängligt genom en likvärdig länk eller kontroll på samma sida som är minst 44x44 CSS-pixlar.
2.  **Inline:** Målet finns inuti en mening eller ett textblock (t.ex. en länk i löpande text).
3.  **Nödvändig (Essential):** En specifik presentation av målet är nödvändig för den information som förmedlas (t.ex. punkter på en interaktiv karta där de måste ligga tätt).
4.  **Användaragentens kontroll:** Målets storlek bestäms av användaragenten (webbläsaren/OS) och har inte ändrats av författaren (webbutvecklaren).

Detta innebär att klickbara ytor som knappar, ikoner som fungerar som länkar, och andra interaktiva element ska ha en minsta klickyta som motsvarar 44x44 CSS-pixlar. Det är _klickytan_, inte nödvändigtvis den synliga _ikonen_, som måste vara tillräckligt stor. Ofta uppnås detta genom att lägga till [padding]{.inline-code} runt elementet.

## Varför detta behövs

Tillräckligt stora klickytor är viktiga för:

- **Personer med motoriska funktionsnedsättningar:** Användare med darrningar, begränsad precision eller som använder alternativa pekdon (t.ex. huvudpekare) behöver större mål för att kunna träffa dem på ett tillförlitligt sätt.
- **Användare med pekskärm:** Fingertoppar är mycket större och mindre precisa än en muspekare. Små mål är svåra att träffa utan att råka träffa ett närliggande element. Detta gäller särskilt på mobila enheter.
- **Alla användare i vissa situationer:** Att använda en enhet på en skakig buss, med handskar, eller när man är stressad gör det svårare att träffa små mål.

Större klickytor minskar risken för felklick och gör gränssnittet enklare och mindre frustrerande att använda.

---

## Exempel

### Knappar med tillräcklig storlek (Rätt) ✅

Knappar är designade med tillräcklig höjd och bredd, eller har tillräcklig padding för att uppnå en klickyta på minst 44x44 CSS-pixlar.

::code-group{:labels='["HTML + CSS (Rätt) ✅"]'}

```html showLineNumbers
<button class="big-enough-button">Bekräfta</button>

<button class="icon-button" aria-label="Inställningar">
  <img src="settings-icon.svg" alt="" />
  <!-- Ikonen kan vara liten -->
</button>
```

```css showLineNumbers
.big-enough-button {
  font-size: 1rem;
  padding: 15px 25px; /* Ger en total höjd/bredd > 44px */
  min-height: 44px; /* Säkerställer minst höjd */
  min-width: 44px; /* Säkerställer minst bredd */
}

.icon-button {
  /* Även om ikonen inuti är t.ex. 24x24 px... */
  width: 44px; /* ...sätter vi knappens storlek till minst 44x44 */
  height: 44px;
  padding: 10px; /* Centrera ikonen med padding */
  border: 1px solid grey;
  background-color: white;
  box-sizing: border-box; /* Se till att padding/border räknas in korrekt */
}
```

::
**Resultat:** Båda knapparna har en klickyta som är minst 44x44 pixlar, vilket gör dem lättare att träffa.

### Små klickbara ikoner (Fel) ❌

Små ikoner (t.ex. 20x20 pixlar) används som länkar eller knappar utan tillräcklig padding runt omkring för att öka klickytan.

::code-group{:labels='["HTML + CSS (Fel) ❌"]'}

```html showLineNumbers
<a href="/delete" class="small-icon-link" aria-label="Radera objekt">
  <img src="trash-icon.png" alt="" style="width: 20px; height: 20px;" />
</a>

<button class="very-small-button">X</button>
```

```css showLineNumbers
.small-icon-link {
  display: inline-block;
  /* Ingen padding eller min-width/min-height definierad,
     klickytan blir bara bildens storlek (20x20px) */
  border: none;
  padding: 0;
}

.very-small-button {
  font-size: 12px;
  padding: 2px 5px; /* Blir mycket mindre än 44x44 px */
  min-height: auto; /* Tar bort ev. standard minimum */
  min-width: auto;
}
```

::
**Resultat:** Dessa element har en klickyta som är mindre än 44x40 pixlar, vilket gör dem svåra att träffa, särskilt på pekskärmar.

### Länk i löpande text (Undantag: Inline) ✅

En länk mitt i ett textstycke.

::code-group{:labels='["HTML (Tillåtet Undantag) ✅"]'}

```html showLineNumbers
<p>
  För mer information om våra tjänster, besök vår
  <a href="/tjanster">tjänstesida</a>. Du kan också läsa om
  <a href="/om-oss">företagets historia</a>.
</p>
```

::
**Resultat:** Även om texten i länken inte är 44 pixlar hög, är detta tillåtet eftersom länken är "inline" i ett textblock. Att kräva 44px höjd här skulle förstöra radavståndet.

### Tätt placerade punkter på en karta (Undantag: Essential) ✅

En interaktiv karta visar många små punkter som representerar platser. Att göra varje punkt 44x44 pixlar skulle göra kartan oläslig eftersom punkterna skulle överlappa varandra helt.

::code-group{:labels='["Koncept (Tillåtet Undantag) ✅"]'}

```text [Beskrivning]
En karta visar hundratals små prickar som representerar butiker. Användaren kan klicka på en prick för att få mer info. Prickarna är små (t.ex. 10x10 px) för att kunna visas korrekt på kartan.
```

::
**Resultat:** Den specifika presentationen (små punkter på en karta) är nödvändig för att informationen ska kunna förmedlas. (Dock bör man överväga alternativ som att zooma in eller visa en lista med platser för att underlätta interaktion).

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 2.5.5 Target Size (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [Understanding Success Criterion 2.5.5: Target Size (Minimum) (W3C Understanding Document)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) (Innehåller detaljerade förklaringar och exempel på undantagen).
- [Target Size and Pointer Gestures (Inclusive Mobile Experience)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html) (Äldre förståelsedokument från 2.1, men relevant).
