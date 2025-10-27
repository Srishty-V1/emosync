// EMERGENCY FIX: Force splash screen as default and hide all others
(function(){
  function go(){
    console.log('🚨 BOOT: Fixing screen visibility');
    
    // Hide ALL screens first
    const screens = [...document.querySelectorAll('.screen')];
    screens.forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none';
    });
    
    // Show ONLY splash screen
    const splash = document.getElementById('splash-screen');
    if(splash) { 
      splash.classList.add('active'); 
      splash.style.display = 'block';
      console.log('✅ BOOT: Splash screen activated');
    }
    
    // Update nav to home
    if(typeof window.updateNavButtons === 'function') {
      window.updateNavButtons('emotion-selector');
    }
  }
  
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', go);
  } else {
    go();
  }
})();