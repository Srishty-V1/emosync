// Auto-hide back button after 2s of no scroll/touch/mouse
(function(){
  let hideTimer=null;
  const HIDE_DELAY=2000;
  function getBtn(){return document.querySelector('.back-button');}
  function show(){const b=getBtn(); if(!b) return; b.classList.remove('hidden');}
  function hide(){const b=getBtn(); if(!b) return; b.classList.add('hidden');}
  function reset(){show(); if(hideTimer) clearTimeout(hideTimer); hideTimer=setTimeout(hide, HIDE_DELAY);}
  ['scroll','wheel','touchstart','mousemove','keydown'].forEach(ev=>{
    window.addEventListener(ev, reset, {passive:true});
  });
  document.addEventListener('DOMContentLoaded', reset);
  // Also expose to app lifecycle screens
  window._resetBackButtonTimer = reset;
})();
