/* EmoSync App Logic - restored from working commit eb3682a804772360c52108d5a805c0d0fa7af9b9 */
// Initialize app on load
document.addEventListener('DOMContentLoaded', function() {
    showScreen('splash-screen');
    setupEventListeners();
    new BeamsBackground();
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    const target=document.getElementById(screenId);
    if(target){target.classList.add('active');}
}

function startEmoSyncJourney(){ showScreen('emotion-selector'); }

function selectEmotion(emotion){
    const titleEl=document.getElementById('emotion-title');
    if(titleEl){ titleEl.textContent=(emotion||'').toUpperCase().replace('-',' ')+' ✨'; }
    showScreen('insight-hub');
}

function selectModality(modality){
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    const tab=document.querySelector(`[data-modality="${modality}"]`);
    if(tab){ tab.classList.add('active'); }
}

function setupEventListeners(){
    const cta=document.getElementById('start-reset-button');
    if(cta){ cta.addEventListener('click', startEmoSyncJourney); }
    document.querySelectorAll('.emotion-card').forEach(card=>{
        card.addEventListener('click',()=>{ const e=card.dataset.emotion; if(e) selectEmotion(e); });
    });
    document.querySelectorAll('.tab').forEach(tab=>{
        tab.addEventListener('click',()=>{ const m=tab.dataset.modality; if(m) selectModality(m); });
    });
}

class BeamsBackground{ constructor(){ this.canvas=document.getElementById('beamsCanvas'); if(!this.canvas) return; this.ctx=this.canvas.getContext('2d'); this.beams=[]; this.isVisible=true; this.updateSize(); this.createBeams(); this.animate(); window.addEventListener('resize',()=>this.updateSize()); document.addEventListener('visibilitychange',()=>{ this.isVisible=!document.hidden; if(this.isVisible) this.animate(); }); }
updateSize(){ const dpr=window.devicePixelRatio||1; const rect=this.canvas.getBoundingClientRect(); this.canvas.width=rect.width*dpr; this.canvas.height=rect.height*dpr; this.canvas.style.width=rect.width+'px'; this.canvas.style.height=rect.height+'px'; if(this.ctx){ this.ctx.setTransform(1,0,0,1,0,0); this.ctx.scale(dpr,dpr);} }
createBeam(){ const w=this.canvas.clientWidth||this.canvas.width; const h=this.canvas.clientHeight||this.canvas.height; return { x:Math.random()*w*1.5-w*0.25, y:Math.random()*h*1.5-h*0.25, width:30+Math.random()*60, length:h*2.5, angle:-35+Math.random()*10, speed:.6+Math.random()*1.2, opacity:.12+Math.random()*.16, hue:190+Math.random()*70, pulse:Math.random()*Math.PI*2, pulseSpeed:.02+Math.random()*.03}; }
createBeams(){ this.beams=Array.from({length:30},()=>this.createBeam()); }
resetBeam(b,i){ const w=this.canvas.clientWidth||this.canvas.width; const h=this.canvas.clientHeight||this.canvas.height; const col=i%3; const sp=w/3; b.y=h+100; b.x=col*sp+sp/2+(Math.random()-.5)*sp*.5; b.width=100+Math.random()*100; b.speed=.5+Math.random()*.4; b.hue=190+(i*70)/this.beams.length; b.opacity=.2+Math.random()*.1; }
drawBeam(b){ if(!this.ctx) return; this.ctx.save(); this.ctx.translate(b.x,b.y); this.ctx.rotate((b.angle*Math.PI)/180); const op=b.opacity*(.8+Math.sin(b.pulse)*.2); const g=this.ctx.createLinearGradient(0,0,0,b.length); g.addColorStop(0,`hsla(${b.hue},85%,65%,0)`); g.addColorStop(.1,`hsla(${b.hue},85%,65%,${op*.5})`); g.addColorStop(.4,`hsla(${b.hue},85%,65%,${op})`); g.addColorStop(.6,`hsla(${b.hue},85%,65%,${op})`); g.addColorStop(.9,`hsla(${b.hue},85%,65%,${op*.5})`); g.addColorStop(1,`hsla(${b.hue},85%,65%,0)`); this.ctx.fillStyle=g; this.ctx.fillRect(-b.width/2,0,b.width,b.length); this.ctx.restore(); }
animate(){ if(!this.isVisible||!this.ctx) return; const w=this.canvas.clientWidth||this.canvas.width; const h=this.canvas.clientHeight||this.canvas.height; this.ctx.clearRect(0,0,w,h); this.ctx.filter='blur(35px)'; this.beams.forEach((b,i)=>{ b.y-=b.speed; b.pulse+=b.pulseSpeed; if(b.y+b.length<-100) this.resetBeam(b,i); this.drawBeam(b); }); requestAnimationFrame(()=>this.animate()); }}
