---
title: 1.4.8 Visuell presentation
description: Ge användare möjlighet att anpassa den visuella presentationen av textblock, inklusive bredd, justering, rad- och styckeavstånd.
level: AAA
slug: visuell-presentation
keywords:
  [
    "WCAG",
    "tillgänglighet",
    "visuell presentation",
    "textblock",
    "radlängd",
    "marginaljustering",
    "radavstånd",
    "styckeavstånd",
    "läsbarhet",
    "kognitiv",
    "dyslexi",
    "skiljbar",
  ]
canonical: https://t12t.dev/wcag/1/4/8/visuell-presentation

principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Skiljbar
criterionNumber: 8

og:
  title: 1.4.8 Visuell presentation – WCAG
  description: Ge användare möjlighet att anpassa den visuella presentationen av textblock.
  url: https://t12t.dev/wcag/1/4/8/visuell-presentation
  type: article

datePublished: 2025-04-17
dateModified: 2024-05-17

sitemap:
  lastmod: 2024-05-17
  changefreq: monthly
  priority: 0.4 # AAA-kriterier lägre prio
---

# Visuell presentation

## Beskrivning

För den visuella presentationen av **textblock** ska en mekanism finnas tillgänglig för att uppnå följande, utan att information eller funktion går förlorad:

1.  **Anpassade färger:** Användaren kan välja förgrunds- och bakgrundsfärger.
2.  **Bredd:** Radbredden är inte mer än 80 tecken eller glyfer (40 för CJK - kinesiska, japanska, koreanska).
3.  **Justering:** Text är inte marginaljusterad (justified) åt båda marginalerna (vänster- eller högerjustering är OK).
4.  **Radavstånd:** Radavståndet (ledande) är minst 1.5 gånger teckenstorleken inuti stycken.
5.  **Styckeavstånd:** Avståndet mellan stycken är minst 1.5 gånger radavståndet.
6.  **Textstorlek:** Text kan ändras i storlek upp till 200 procent utan att hjälpmedel krävs (detta täcks redan av 1.4.4 på AA-nivå, men upprepas här för sammanhanget).

Detta kriterium (Nivå AAA) syftar till att säkerställa att användare med nedsatt syn eller kognitiva funktionsnedsättningar (som dyslexi) kan anpassa textens utseende för optimal läsbarhet, eller att standardpresentationen uppfyller vissa läsbarhetskrav. "Mekanism" kan innebära att webbplatsen erbjuder kontroller för detta, eller att webbplatsen är byggd så att användarens egna inställningar (via webbläsare eller hjälpmedel) kan appliceras utan att sidan går sönder.

## Varför detta behövs

Möjligheten att anpassa textens presentation är avgörande för många användare:

- **Personer med nedsatt syn:** Behöver ofta specifika färgkombinationer med hög kontrast eller möjlighet att förstora text och justera avstånd för att kunna läsa.
- **Personer med dyslexi och andra lässvårigheter:** Kan ha stor nytta av kortare radlängder, ökat rad- och styckeavstånd, och vänsterjusterad text (marginaljusterad text skapar oregelbundna mellanrum mellan ord som kan försvåra läsningen).
- **Kognitiva funktionsnedsättningar:** En luftig och konsekvent layout med lagom radlängd underlättar fokus och förståelse.

Att uppfylla dessa krav, antingen som standard eller genom att tillåta anpassning, gör textinnehåll mer tillgängligt och bekvämt att läsa för en bredare publik.

---

## Exempel

### Flexibel och läsbar textlayout (Rätt) ✅

Denna CSS skapar en layout som respekterar kraven för bredd, justering och avstånd, samt tillåter användaren att zooma och potentiellt ändra färger via webbläsarinställningar eller tillägg.

::code-group{:labels='["CSS (Läsbar standard) ✅"]'}

```css showLineNumbers
body {
  /* Låter användaren (eller webbläsaren) sätta standardfärger,
     eller så sätts färger med god kontrast (AAA rekommenderas) */
  background-color: #ffffff;
  color: #000000; /* Uppfyller 1.4.6 Kontrast (Förbättrad) */
}

.text-block {
  font-size: 1rem; /* Basstorlek, kan zoomas av användaren */
  line-height: 1.5; /* Krav: minst 1.5 */
  max-width: 80ch; /* Krav: max 80 tecken bredd (ch-enheten är teckenbredd) */
  /* Alternativt: max-width: 40em; (ca 80 tecken för de flesta typsnitt) */
  text-align: left; /* Krav: inte 'justify' */
  margin-left: auto; /* Centrera blocket om så önskas */
  margin-right: auto;
}

.text-block p {
  /* Krav: Styckeavstånd minst 1.5 * radavstånd */
  /* Om line-height är 1.5, blir detta 1.5 * 1.5 = 2.25 */
  margin-bottom: 2.25rem;
  /* Alternativ: Använd em relativt till font-size, t.ex. margin-bottom: 1.5em;
     vilket ofta räcker om line-height är 1.5, men 2.25rem är striktare */
}

/* Säkerställ att inga !important blockerar användarens färgval om möjligt */
```

::
**Resultat:** Textblocket har en maximal bredd som främjar läsbarhet, är vänsterjusterad, har tillräckligt rad- och styckeavstånd som standard, och kan förstoras och få sina färger ändrade av användaren utan att layouten går sönder.

### Layout som försvårar läsning (Fel) ❌

Denna CSS skapar problem genom fasta layouter, marginaljustering och för täta avstånd.

::code-group{:labels='["CSS (Problem för läsbarhet) ❌"]'}

```css showLineNumbers
body {
  /* Kan ha otillräcklig kontrast (bryter mot 1.4.6) */
  background-color: #eeeeee;
  color: #777777;
}

.narrow-justified-block {
  font-size: 14px; /* Svårare att utgå ifrån för relativa enheter */
  line-height: 1.2; /* Fel: För tätt, mindre än 1.5 */
  width: 400px; /* Fast bredd, kan bli mer än 80 tecken om texten zoomas mycket */
  text-align: justify; /* Fel: Försvårar för personer med dyslexi */
  margin: 10px;
}

.narrow-justified-block p {
  margin-bottom: 5px; /* Fel: För litet styckeavstånd (t.ex. < 1.5 * line-height) */
}

/* Användning av !important kan förhindra användarens anpassningar */
.narrow-justified-block {
  color: #777777 !important;
  background-color: #eeeeee !important;
}
```

::
**Resultat:** Texten är marginaljusterad, har för tätt rad- och styckeavstånd, och kan ha en radlängd som blir för lång vid förstoring om den fasta bredden är olämplig. [!important]{.inline-code} kan hindra användaren från att ändra färger.

---

## Länk till mer information

- [WCAG 2.2: Success Criterion 1.4.8 Visual Presentation (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)
- [Webbriktlinjer: R115 Gör det möjligt att anpassa textens utseende](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/gor-det-mojligt-att-anpassa-textens-utseende)
- [CSS basic user interface module Level 4 - text-align](https://www.w3.org/TR/css-ui-4/#propdef-text-align) (Specifikt [text-align: justify]{.inline-code})
- [CSS ch unit - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/length#ch) (För att sätta maxbredd baserat på tecken)
