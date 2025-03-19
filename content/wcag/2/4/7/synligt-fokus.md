---
title: Synligt fokus
description: Alla komponenter som kan användas via tangentbord har en visuell indikation när de får fokus.
level: AA
principleNumber: 2
principleName: Hanterbar
guidelineNumber: 4
guidelineName: Navigerbart
criterionNumber: 7
---

# Framgångskriterium 2.4.7 Synligt fokus

## Beskrivning

Alla componenter i användargränssnittet som kan få tangentbordsfokus har en visuell indikation när de får fokus.

## Varför detta behövs

För användare som navigerar med tangentbord eller andra tangentbordsliknande inmatningsenheter, är det avgörande att kunna se vilket element som har fokus. Utan en tydlig visuell indikation kan det vara svårt eller omöjligt att förstå var i gränssnittet man befinner sig, vilket gör navigering nästan omöjlig för personer som inte kan använda mus.

## Exempel

### Exempel på bra implementering

#### Standard fokusstil bevarad

```css
/* Bevara webbläsarens standardfokusring */
:focus {
  outline: auto;
}
```

#### Förbättrad fokusstil

```css
/* Tydligare fokusmarkering */
:focus {
  outline: 3px solid #2196f3;
  outline-offset: 2px;
}
```

#### Anpassade fokusstilar för olika element

```css
/* Fokus för länktext */
a:focus {
  background-color: #ffeb3b;
  color: #000000;
  text-decoration: underline;
  outline: 2px solid #2196f3;
}

/* Fokus för knappar */
button:focus {
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.5);
  outline: 2px solid #2196f3;
}
```

### Exempel på bristande implementering

#### Borttagen fokusring utan ersättning

```css
/* Detta tar bort visuell indikator för fokus */
:focus {
  outline: none;
}
```

#### Otillräcklig kontrast på fokusindikering

```css
/* Fokusring med för låg kontrast mot bakgrunden */
:focus {
  outline: 1px solid #eeeeee;
}
```

## Länk till mer information

- [WCAG 2.2 - Understanding 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [Webbriktlinjer - R140: Markera tydligt vilket fält eller element som är i fokus](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/markera-tydligt-vilket-falt-eller-element-som-ar-i-fokus)
