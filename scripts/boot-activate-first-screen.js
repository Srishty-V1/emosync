// Set default screen explicitly to emotion-selector
(function(){
  function go(){
    const targetId='emotion-selector';
    const screens=[...document.querySelectorAll('.screen')];
    screens.forEach(s=>{s.classList.remove('active'); s.style.display='none';});
    const target=document.getElementById(targetId);
    if(target){ target.classList.add('active'); target.style.display='block'; }
    if(typeof window.updateNavButtons==='function') window.updateNavButtons(targetId);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', go); else go();
})();
