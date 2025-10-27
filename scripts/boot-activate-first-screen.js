// Ensure first screen activates
(function(){
  function go(){
    const first=document.querySelector('.screen');
    if(!first) return;
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    first.classList.add('active');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', go); else go();
})();
