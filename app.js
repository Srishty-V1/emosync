/* EmoSync App Logic - VIBE CODER EDITION! 🚀💎 */

// Initialize app on load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 EmoSync initializing...');
    
    // Initialize with splash screen active
    showScreen('splash-screen');
    
    // Setup all event listeners
    setupEventListeners();
    
    // Initialize beams background
    new BeamsBackground();
    
    console.log('✨ EmoSync ready!');
});

// Core screen navigation
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        updateNavigation(screenId);
    }
}

// Update navigation state
function updateNavigation(activeScreen) {
    // Update swipe nav
    document.querySelectorAll('.nav-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    
    const activeChip = document.querySelector(`[data-screen="${activeScreen}"]`);
    if (activeChip) {
        activeChip.classList.add('active');
    }
    
    // Update bottom nav if it exists
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeNavItem = document.querySelector(`[data-nav="${activeScreen}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
}

// Start journey function
function startEmoSyncJourney() {
    console.log('🚀 Starting EmoSync journey!');
    showScreen('emotion-selector');
}

// Emotion selection
function selectEmotion(emotion) {
    console.log(`🎯 Selected emotion: ${emotion}`);
    
    // Update emotion title
    const titleEl = document.getElementById('emotion-title');
    if (titleEl) {
        titleEl.textContent = emotion.toUpperCase().replace('-', ' ') + ' ✨';
    }
    
    // Show insight hub
    showScreen('insight-hub');
}

// Modality selection
function selectModality(modality) {
    console.log(`🎨 Selected modality: ${modality}`);
    
    // Update active tab
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const selectedTab = document.querySelector(`[data-modality="${modality}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Load exercises for this modality (placeholder)
    loadExercisesForModality(modality);
}

// Load exercises (placeholder)
function loadExercisesForModality(modality) {
    console.log(`📚 Loading exercises for: ${modality}`);
    // Exercise loading logic would go here
}

// Setup all event listeners
function setupEventListeners() {
    // CTA button
    const ctaButton = document.getElementById('start-reset-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', startEmoSyncJourney);
    }
    
    // Emotion cards
    document.querySelectorAll('.emotion-card').forEach(card => {
        card.addEventListener('click', function() {
            const emotion = this.dataset.emotion;
            if (emotion) selectEmotion(emotion);
        });
    });
    
    // Modality tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const modality = this.dataset.modality;
            if (modality) selectModality(modality);
        });
    });
    
    // Back buttons
    document.querySelectorAll('.back-button').forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('onclick');
            if (target) {
                // Extract screen id from onclick
                const match = target.match(/showScreen\('([^']+)'\)/);
                if (match) {
                    showScreen(match[1]);
                }
            }
        });
    });
    
    // Navigation chips
    document.querySelectorAll('.nav-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            const screen = this.dataset.screen;
            if (screen) showScreen(screen);
        });
    });
    
    // Swipe navigation
    setupSwipeNavigation();
    
    console.log('🔗 Event listeners setup complete!');
}

// Swipe navigation setup
function setupSwipeNavigation() {
    const trigger = document.querySelector('.swipe-nav-trigger');
    const overlay = document.querySelector('.nav-overlay');
    const drawer = document.querySelector('.swipe-nav-drawer');
    
    if (trigger) {
        trigger.addEventListener('click', openNavDrawer);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeNavDrawer);
    }
    
    // ESC to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeNavDrawer();
        }
    });
    
    // Touch swipe detection
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', function(e) {
        if (e.touches[0].clientX < 50) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }
    }, { passive: true });
    
    document.addEventListener('touchmove', function(e) {
        if (startX > 0) {
            const deltaX = e.touches[0].clientX - startX;
            const deltaY = Math.abs(e.touches[0].clientY - startY);
            
            // Only trigger if horizontal swipe is dominant
            if (deltaX > 80 && deltaX > deltaY * 2) {
                openNavDrawer();
                startX = 0;
            }
        }
    }, { passive: true });
    
    document.addEventListener('touchend', function() {
        startX = 0;
        startY = 0;
    }, { passive: true });
}

// Navigation drawer functions
function openNavDrawer() {
    const drawer = document.querySelector('.swipe-nav-drawer');
    const overlay = document.querySelector('.nav-overlay');
    
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
}

function closeNavDrawer() {
    const drawer = document.querySelector('.swipe-nav-drawer');
    const overlay = document.querySelector('.nav-overlay');
    
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
}

// Mood tracking
function setMood(moodLevel) {
    document.querySelectorAll('.mood-emoji').forEach(emoji => {
        emoji.classList.remove('active');
    });
    
    const selectedMood = document.querySelector(`[data-mood="${moodLevel}"]`);
    if (selectedMood) {
        selectedMood.classList.add('active');
    }
    
    console.log(`😊 Mood set to: ${moodLevel}`);
}

// Animated Beams Background
class BeamsBackground {
    constructor() {
        this.canvas = document.getElementById('beamsCanvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.beams = [];
        this.animationFrame = null;
        this.isVisible = true;
        
        this.init();
    }
    
    init() {
        this.updateCanvasSize();
        this.createBeams();
        this.animate();
        
        window.addEventListener('resize', () => this.updateCanvasSize());
        document.addEventListener('visibilitychange', () => {
            this.isVisible = !document.hidden;
            if (this.isVisible && !this.animationFrame) {
                this.animate();
            }
        });
    }
    
    updateCanvasSize() {
        if (!this.canvas) return;
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
        
        if (this.ctx) {
            this.ctx.scale(dpr, dpr);
        }
        
        this.createBeams();
    }
    
    createBeam() {
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;
        
        return {
            x: Math.random() * width * 1.5 - width * 0.25,
            y: Math.random() * height * 1.5 - height * 0.25,
            width: 30 + Math.random() * 60,
            length: height * 2.5,
            angle: -35 + Math.random() * 10,
            speed: 0.6 + Math.random() * 1.2,
            opacity: 0.12 + Math.random() * 0.16,
            hue: 190 + Math.random() * 70,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.02 + Math.random() * 0.03
        };
    }
    
    createBeams() {
        this.beams = Array.from({ length: 30 }, () => this.createBeam());
    }
    
    resetBeam(beam, index) {
        if (!this.canvas) return;
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;
        
        const column = index % 3;
        const spacing = width / 3;
        
        beam.y = height + 100;
        beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
        beam.width = 100 + Math.random() * 100;
        beam.speed = 0.5 + Math.random() * 0.4;
        beam.hue = 190 + (index * 70) / this.beams.length;
        beam.opacity = 0.2 + Math.random() * 0.1;
    }
    
    drawBeam(beam) {
        if (!this.ctx) return;
        
        this.ctx.save();
        this.ctx.translate(beam.x, beam.y);
        this.ctx.rotate((beam.angle * Math.PI) / 180);
        
        const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
        
        const gradient = this.ctx.createLinearGradient(0, 0, 0, beam.length);
        gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
        gradient.addColorStop(0.1, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
        gradient.addColorStop(0.4, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
        gradient.addColorStop(0.6, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
        gradient.addColorStop(0.9, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
        this.ctx.restore();
    }
    
    animate() {
        if (!this.isVisible || !this.ctx || !this.canvas) return;
        
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
        this.ctx.filter = 'blur(35px)';
        
        this.beams.forEach((beam, index) => {
            beam.y -= beam.speed;
            beam.pulse += beam.pulseSpeed;
            
            if (beam.y + beam.length < -100) {
                this.resetBeam(beam, index);
            }
            
            this.drawBeam(beam);
        });
        
        this.animationFrame = requestAnimationFrame(() => this.animate());
    }
}

console.log('💎 EmoSync VIBE CODER JS loaded! 🔥✨');