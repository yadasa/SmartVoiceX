// Auto-mount liquid glass on the sticky side-card.

import { LiquidGlassSideCard } from './liquid-glass-sidecard.js';

function mount(){
  const el = document.querySelector('.side-card[data-liquid-glass]');
  if(!el || el.__liquidGlassSideCard) return;

  try{
    const inst = new LiquidGlassSideCard(el);
    inst.mount();
    el.__liquidGlassSideCard = inst;
  }catch(err){
    // purely decorative; fail silent
    // console.warn('LiquidGlassSideCard mount failed', err);
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', mount, { once: true });
}else{
  mount();
}
