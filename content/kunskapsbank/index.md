---
title: Kunskapsbank - T12T - Digital Tillgänglighet
description: En omfattande resurs för information om tillgänglig webbutveckling, standarder, riktlinjer och best practices.
---

# Kunskapsbank

Välkommen till T12T:s kunskapsbank - en omfattande samling av resurser, guider och dokumentation inom digital tillgänglighet. Här hittar du allt du behöver för att skapa tillgängliga digitala lösningar.

## Varför digital tillgänglighet?

Digital tillgänglighet handlar om att designa och utveckla digitala produkter som kan användas av alla människor, inklusive personer med funktionsnedsättningar. Fördelarna är många:

- **Inkludering** - Fler människor kan använda dina tjänster
- **Bättre användarupplevelse** - Tillgängliga produkter är ofta bättre för alla användare
- **Juridisk efterlevnad** - Uppfyll lagar som DOS-lagen och EAA
- **SEO-fördelar** - Tillgängligt innehåll rankas ofta bättre i sökmotorer
- **Större marknad** - Nå fler potentiella kunder och användare

## Huvudområden

### [WCAG-standarder](/kunskapsbank/wcag)
Web Content Accessibility Guidelines (WCAG) är den internationella standarden för webbtillgänglighet. Lär dig om principer, riktlinjer och hur du implementerar dem i dina projekt.

### [Lagstiftning](/kunskapsbank/lagstiftning)
Få information om aktuella lagar och regler som påverkar digital tillgänglighet i Sverige och EU, inklusive DOS-lagen och European Accessibility Act (EAA).

### [Utveckling](/kunskapsbank/utveckling)
Praktiska guider för tillgänglig webbutveckling inom HTML, CSS, JavaScript och andra tekniker. 

## Kodexempel

Här är ett enkelt exempel på en tillgänglig knapp med både visuell och textuell återkoppling:

```html
<button 
  type="button" 
  aria-pressed="false"
  class="toggle-button"
  id="notification-toggle">
  Aktivera notifikationer
</button>
```

```css
.toggle-button {
  padding: 0.5rem 1rem;
  background-color: #f1f1f1;
  border: 2px solid #333;
  border-radius: 4px;
}

.toggle-button[aria-pressed="true"] {
  background-color: #4CAF50;
  color: white;
}

.toggle-button:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}
```

```javascript
document.getElementById('notification-toggle').addEventListener('click', function(e) {
  const button = e.currentTarget;
  const isPressed = button.getAttribute('aria-pressed') === 'true';
  
  button.setAttribute('aria-pressed', !isPressed);
  
  // Uppdatera texten för skärmläsare
  if (!isPressed) {
    // Använd aria-live för att meddela skärmläsare om statusförändringen
    const liveRegion = document.getElementById('status-message');
    liveRegion.textContent = 'Notifikationer aktiverade';
  } else {
    const liveRegion = document.getElementById('status-message');
    liveRegion.textContent = 'Notifikationer inaktiverade';
  }
});
```

## Resurser och verktyg

Vi har samlat en rad verktyg och resurser som kan hjälpa dig i ditt arbete med digital tillgänglighet:

- [Testverktyg](/testning/verktyg)
- [Skärmläsarguider](/skärmläsare)
- [Färgkontrastanalysatorer](/kunskapsbank/utveckling/fargkontrast)
- [Tillgängliga komponenter](/kunskapsbank/utveckling/komponenter)