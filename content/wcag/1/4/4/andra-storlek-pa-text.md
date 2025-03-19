---
title: Ändra storlek på text
description: Text kan förstoras upp till 200 procent utan hjälpmedel och utan att innehåll eller funktionalitet går förlorad.
level: AA
principleNumber: 1
principleName: Möjlig att uppfatta
guidelineNumber: 4
guidelineName: Urskiljbart
criterionNumber: 4
---

# Framgångskriterium 1.4.4 Ändra storlek på text

## Beskrivning

Med undantag för undertexter och text i form av bild, kan text förstoras utan hjälpmedel upp till 200 procent utan att innehåll eller funktionalitet går förlorad.

## Varför detta behövs

Många användare med nedsatt syn behöver kunna förstora text för att kunna läsa innehållet. Om webbplatsen är konstruerad så att innehåll eller funktionalitet försvinner eller överlappar vid textförstoring, blir dessa användare begränsade i sin möjlighet att ta del av innehållet. Genom att säkerställa att text kan förstoras utan problem ökar tillgängligheten för personer med synnedsättningar.

## Exempel

### Exempel på bra implementering

#### Responsiv design som anpassar sig vid förstoring

```css
.content {
  max-width: 100%;
  font-size: 1rem; /* Relativ textstorlek */
  line-height: 1.5;
}

.container {
  width: 100%;
  overflow-x: auto; /* Möjliggör horisontell skrollning vid behov */
}
```

#### Text som omflödas vid förstoring

```css
p {
  word-wrap: break-word; /* Bryt långa ord */
  overflow-wrap: break-word;
  hyphens: auto; /* Använd avstavning när möjligt */
}
```

### Exempel på bristande implementering

#### Fixerade pixelstorlekar för behållare

```css
.sidebar {
  width: 250px; /* Fast bredd i pixlar */
  font-size: 12px; /* Fast storlek i pixlar */
  overflow: hidden; /* Döljer innehåll som inte får plats */
}
```

#### Överlappande element vid förstoring

```css
.menu {
  position: absolute;
  top: 50px;
  font-size: 14px; /* Fast storlek */
}
```

## Länk till mer information

- [WCAG 2.2 - Understanding 1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
- [Webbriktlinjer - R127: Se till att text går att förstora utan problem](https://www.digg.se/webbriktlinjer/alla-webbriktlinjer/se-till-att-text-gar-att-forstora-utan-problem)
