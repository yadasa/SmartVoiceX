// Auto-mount LiquidGlassSection on any .glass-section.

import { LiquidGlassSection } from './liquid-glass-section.js';

function mountAll(){
  const sections = Array.from(document.querySelectorAll('.glass-section'));
  sections.forEach((el) => {
    // prevent double-mount
    if (el.__liquidGlass) return;

    try{
      const inst = new LiquidGlassSection(el, {
        maxCards: LiquidGlassSection.MAX_CARDS,
      });
      inst.mount();
      el.__liquidGlass = inst;
    }catch(err){
      // Fail silently: this feature is purely decorative.
      // Uncomment for debugging:
      // console.warn('LiquidGlassSection mount failed', err);
    }
  });
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', mountAll, { once: true });
}else{
  mountAll();
}
