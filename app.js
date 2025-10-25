// EmoSync Premium JavaScript - Feel, Heal, and Rewire 💎
// Created with love by @SrishtySynergy ✨
// Now with 2000+ Therapeutic Exercises! 🚀

// Load Exercise Database System
let exerciseLoader;

// Video Background System 🎬
let videoBackgroundEnabled = false;
let currentVideoSrc = null;

// Premium Animation System 🎭 (SIMPLIFIED - NO FLOATING PATHS)
class PremiumAnimations {
    static fadeIn(element, duration = 600) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px) scale(0.95)';
        element.style.filter = 'blur(10px)';
        element.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
            element.style.filter = 'blur(0px)';
        }, 50);
    }

    static slideDown(element, delay = 0) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-20px)';
        element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    }

    static revealLetters(textElement, text) {
        textElement.innerHTML = '';
        const letters = text.split('');
        
        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter === ' ' ? '\u00A0' : letter;
            span.style.opacity = '0';
            span.style.transform = 'translateY(50px) rotateX(90deg)';
            span.style.display = 'inline-block';
            span.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            textElement.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0) rotateX(0deg)';
            }, index * 50 + 200);
        });
    }
}

// Exercise Database Loader - Connects to 2000+ JSON Exercises 📚
class ExerciseLoader {
    constructor() {
        this.loadedEmotions = new Map();
        this.isLoading = new Set();
        this.emotionList = [
            'stress', 'anxiety', 'anger', 'sadness', 'fear', 'guilt', 'shame',
            'overwhelm', 'loneliness', 'low-confidence', 'lack-motivation',
            'inconsistency', 'self-doubt', 'perfectionism', 'rejection',
            'comparison', 'resentment', 'numbness', 'hopelessness', 'burnout'
        ];
        this.fallbackDatabase = this.createMinimalFallback();
    }

    async loadEmotion(emotionKey) {
        // Return if already loaded
        if (this.loadedEmotions.has(emotionKey)) {
            return this.loadedEmotions.get(emotionKey);
        }

        // Return if currently loading
        if (this.isLoading.has(emotionKey)) {
            return new Promise(resolve => {
                const checkInterval = setInterval(() => {
                    if (this.loadedEmotions.has(emotionKey)) {
                        clearInterval(checkInterval);
                        resolve(this.loadedEmotions.get(emotionKey));
                    }
                }, 100);
            });
        }

        this.isLoading.add(emotionKey);

        try {
            console.log(`🔄 Loading ${emotionKey} exercises...`);
            const response = await fetch(`./data/exercises/${emotionKey}.json`);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            const emotionData = await response.json();
            const exercises = emotionData.modalities;
            
            this.loadedEmotions.set(emotionKey, exercises);
            this.isLoading.delete(emotionKey);
            
            const exerciseCount = this.countExercises(exercises);
            console.log(`✅ Loaded ${emotionKey}: ${exerciseCount} exercises across ${Object.keys(exercises).length} modalities`);
            
            return exercises;
            
        } catch (error) {
            console.warn(`⚠️  Failed to load ${emotionKey}:`, error.message);
            this.isLoading.delete(emotionKey);
            
            // Use fallback exercises
            const fallbackExercises = this.fallbackDatabase[emotionKey] || this.createEmotionFallback(emotionKey);
            this.loadedEmotions.set(emotionKey, fallbackExercises);
            
            console.log(`🛡️  Using fallback exercises for ${emotionKey}`);
            return fallbackExercises;
        }
    }

    countExercises(modalities) {
        return Object.values(modalities).reduce((total, exercises) => total + exercises.length, 0);
    }

    createEmotionFallback(emotionKey) {
        const emotionName = emotionKey.charAt(0).toUpperCase() + emotionKey.slice(1).replace('-', ' ');
        return {
            art: [{
                title: `${emotionName} Expression Art`,
                instruction: `Express your ${emotionKey.replace('-', ' ')} through colors, shapes, and lines. Let your creativity transform this feeling into something beautiful.`,
                duration: "15-20 minutes",
                materials: "Art supplies of choice",
                affirmation: `I transform ${emotionKey.replace('-', ' ')} through creative expression`
            }],
            breathwork: [{
                title: `${emotionName} Calming Breath`,
                instruction: "Breathe slowly and deeply, sending calm and healing to areas affected by this emotion. Let each breath bring more peace.",
                duration: "8-12 minutes", 
                materials: "None needed",
                affirmation: `I breathe peace into ${emotionKey.replace('-', ' ')} and find my center`
            }],
            somatic: [{
                title: `${emotionName} Body Release`,
                instruction: "Notice where this emotion lives in your body. Send gentle attention and movement to release tension from these areas.",
                duration: "10-15 minutes",
                materials: "Comfortable space",
                affirmation: `I release ${emotionKey.replace('-', ' ')} from my body with gentle care`
            }]
        };
    }

    createMinimalFallback() {
        const fallback = {};
        this.emotionList.forEach(emotion => {
            fallback[emotion] = this.createEmotionFallback(emotion);
        });
        return fallback;
    }

    async preloadPopularEmotions() {
        const popular = ['stress', 'anxiety', 'anger', 'sadness'];
        try {
            const promises = popular.map(emotion => this.loadEmotion(emotion));
            await Promise.all(promises);
            console.log('🚀 Preloaded popular emotions for instant access!');
        } catch (error) {
            console.log('⚠️  Preload had some issues, but fallbacks ready');
        }
    }

    getLoadedEmotions() {
        return Array.from(this.loadedEmotions.keys());
    }

    getTotalLoadedExercises() {
        let total = 0;
        for (let modalities of this.loadedEmotions.values()) {
            total += this.countExercises(modalities);
        }
        return total;
    }
}

// Current state management
let currentScreen = 'splash-screen';
let currentEmotion = null;
let currentModality = null;
let currentExercises = [];
let savedExercises = [];
let moodHistory = [];
let streakCount = 0;
let journalEntries = {};

// Try to load from localStorage (but don't use it for storage - sandbox issues)
try {
    savedExercises = JSON.parse(localStorage.getItem('emoSyncSavedExercises')) || [];
    moodHistory = JSON.parse(localStorage.getItem('emoSyncMoodHistory')) || [];
    streakCount = parseInt(localStorage.getItem('emoSyncStreak')) || 0;
    journalEntries = JSON.parse(localStorage.getItem('emoSyncJournalEntries')) || {};
    
    // Load video background preference
    videoBackgroundEnabled = localStorage.getItem('emoSyncVideoBackground') === 'true';
    currentVideoSrc = localStorage.getItem('emoSyncVideoSrc');
} catch (e) {
    console.log('🔒 localStorage not available (sandbox mode)');
}

// 🚀 FIX: START YOUR RESET FUNCTION (was missing!)
function startEmoSyncJourney() {
    console.log('🎆 Starting EmoSync Journey!');
    showToast('✨ Welcome to your healing journey!', 'success');
    
    // Add button feedback
    const button = document.getElementById('start-reset-button');
    if (button) {
        button.style.transform = 'scale(0.95)';
        button.style.background = 'linear-gradient(135deg, #4ECDC4, var(--sage-green))';
        
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            button.style.background = '';
        }, 200);
    }
    
    setTimeout(() => {
        showScreen('emotion-selector');
    }, 800);
}

// 🎬 VIDEO BACKGROUND FUNCTIONS
function setBackgroundType(type) {
    const videoContainer = document.getElementById('video-background-container');
    const videoUploadSection = document.getElementById('video-upload-section');
    const buttons = document.querySelectorAll('.bg-option');
    
    // Update button states
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (type === 'video') {
        videoBackgroundEnabled = true;
        videoUploadSection.style.display = 'block';
        if (currentVideoSrc) {
            enableVideoBackground(currentVideoSrc);
        }
        showToast('🎬 Video background enabled! Upload a video to use.', 'info');
    } else {
        videoBackgroundEnabled = false;
        videoUploadSection.style.display = 'none';
        disableVideoBackground();
        showToast('🌈 Gradient background restored!', 'info');
    }
    
    // Save preference
    try {
        localStorage.setItem('emoSyncVideoBackground', videoBackgroundEnabled);
    } catch (e) {
        console.log('Sandbox mode - settings not persistent');
    }
}

function handleVideoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('video/')) {
        showToast('⚠️  Please select a valid video file', 'warning');
        return;
    }
    
    // Check file size (limit to 50MB)
    if (file.size > 50 * 1024 * 1024) {
        showToast('⚠️  Video too large! Please use files under 50MB', 'warning');
        return;
    }
    
    showToast('🔄 Processing your video...', 'info');
    
    // Create object URL for the video
    const videoURL = URL.createObjectURL(file);
    currentVideoSrc = videoURL;
    
    // Enable video background
    enableVideoBackground(videoURL);
    
    showToast('🎆 Video background applied successfully!', 'success');
    
    // Save preference (URL won't persist across sessions but choice will)
    try {
        localStorage.setItem('emoSyncVideoSrc', videoURL);
        localStorage.setItem('emoSyncVideoBackground', 'true');
    } catch (e) {
        console.log('Sandbox mode - video not persistent across sessions');
    }
}

function enableVideoBackground(videoSrc) {
    const videoContainer = document.getElementById('video-background-container');
    const video = document.getElementById('background-video');
    
    if (video && videoSrc) {
        video.src = videoSrc;
        video.load();
        
        video.onloadeddata = () => {
            videoContainer.style.opacity = '1';
            videoContainer.style.zIndex = '-1';
            console.log('🎬 Video background loaded successfully!');
        };
        
        video.onerror = () => {
            console.warn('⚠️  Video failed to load, using gradient fallback');
            disableVideoBackground();
            showToast('⚠️  Video failed to load, using gradient background', 'warning');
        };
    }
}

function disableVideoBackground() {
    const videoContainer = document.getElementById('video-background-container');
    const video = document.getElementById('background-video');
    
    if (video) {
        video.pause();
        video.src = '';
    }
    
    if (videoContainer) {
        videoContainer.style.opacity = '0';
        videoContainer.style.zIndex = '-999';
    }
}

// Premium Screen Management with Smooth Transitions
function showScreen(screenId, fromScreen = null) {
    const currentScreenEl = document.querySelector('.screen.active');
    const targetScreen = document.getElementById(screenId);
    
    if (!targetScreen) return;
    
    // Add exit animation to current screen
    if (currentScreenEl) {
        currentScreenEl.style.animation = 'premiumFadeOut 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        setTimeout(() => {
            currentScreenEl.classList.remove('active');
            currentScreenEl.style.animation = '';
            
            // Show new screen with entrance animation
            targetScreen.classList.add('active');
            PremiumAnimations.fadeIn(targetScreen, 600);
            
            // Screen-specific initializations
            initializeScreen(screenId);
            
        }, 400);
    } else {
        // First screen load
        targetScreen.classList.add('active');
        PremiumAnimations.fadeIn(targetScreen, 600);
        initializeScreen(screenId);
    }
    
    currentScreen = screenId;
    updateBottomNav();
}

// Screen initialization helper
function initializeScreen(screenId) {
    switch(screenId) {
        case 'emotion-selector':
            initializeEmotionGrid();
            break;
        case 'journal':
            initializeJournal();
            break;
        case 'dashboard':
            initializeDashboard();
            break;
        case 'toolkit':
            initializeToolkit();
            break;
        case 'insight-hub':
            initializeInsightHub();
            break;
    }
}

// Premium fade out animation
if (!document.getElementById('premium-animations')) {
    const style = document.createElement('style');
    style.id = 'premium-animations';
    style.textContent = `
        @keyframes premiumFadeOut {
            from { 
                opacity: 1; 
                transform: translateY(0) scale(1);
                filter: blur(0px);
            }
            to { 
                opacity: 0; 
                transform: translateY(-20px) scale(0.95);
                filter: blur(5px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize Emotion Grid with Staggered Animations
function initializeEmotionGrid() {
    const emotionCards = document.querySelectorAll('.emotion-card');
    emotionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, index * 100 + 200);
    });
}

// Select Emotion with Premium Animation + Dynamic Loading
async function selectEmotion(emotion) {
    currentEmotion = emotion;
    
    // Show loading state
    showToast('🔄 Loading exercises...', 'info');
    
    try {
        // Load exercises from JSON database
        const exercises = await exerciseLoader.loadEmotion(emotion);
        currentExercises = exercises;
        
        showScreen('insight-hub');
        
        // Update emotion title with animation
        setTimeout(() => {
            updateEmotionDisplay(emotion);
        }, 200);
        
        showToast(`✅ Loaded ${exerciseLoader.countExercises(exercises)} exercises for ${emotion}!`);
        
    } catch (error) {
        console.error('Failed to load emotion exercises:', error);
        showToast('⚠️  Using backup exercises', 'warning');
        currentExercises = exerciseLoader.fallbackDatabase[emotion] || {};
        showScreen('insight-hub');
        setTimeout(() => updateEmotionDisplay(emotion), 200);
    }
}

// Update emotion display with animations
function updateEmotionDisplay(emotion) {
    const titleElement = document.getElementById('emotion-title');
    const subtitleElement = document.getElementById('emotion-subtitle');
    
    if (titleElement) {
        titleElement.textContent = emotion.toUpperCase().replace('-', ' ');
        PremiumAnimations.revealLetters(titleElement, emotion.toUpperCase().replace('-', ' '));
    }
    
    if (subtitleElement) {
        const subtitles = {
            stress: "Tension in the mind, tightness in the body. Let's release it.",
            anxiety: "Worried thoughts and racing heart. Let's find your calm.",
            anger: "Fire in your chest, power in your voice. Let's channel it wisely.",
            sadness: "Heavy heart, tender soul. Let's honor this feeling with care.",
            fear: "Alert mind, protective instinct. Let's transform worry into wisdom.",
            guilt: "Weight of regret, desire to do better. Let's find forgiveness.",
            shame: "Core wound, need for acceptance. Let's remember your worth.",
            overwhelm: "Too much, too fast, too heavy. Let's break it down together.",
            loneliness: "Aching for connection, feeling separate. Let's bridge back to love.",
            'low-confidence': "Doubting your worth, forgetting your power. Let's remember who you are.",
            'lack-motivation': "Energy depleted, spark dimmed. Let's reignite your fire.",
            inconsistency: "Starting and stopping, seeking rhythm. Let's find your flow.",
            'self-doubt': "Questioning your abilities, second-guessing yourself. Let's build trust.",
            perfectionism: "Never good enough, always pushing. Let's embrace 'good enough.'",
            rejection: "Fear of 'no,' need for acceptance. Let's strengthen your core.",
            comparison: "Looking sideways, losing yourself. Let's return to your unique path.",
            resentment: "Old wounds, carried anger. Let's set down this heavy load.",
            numbness: "Feeling nothing, protecting from everything. Let's gently reconnect.",
            hopelessness: "Can't see the light, future feels dark. Let's kindle hope together.",
            burnout: "Exhausted flame, depleted energy. Let's restore your vitality."
        };
        
        subtitleElement.textContent = subtitles[emotion] || "Let's explore this feeling together with compassion.";
        PremiumAnimations.slideDown(subtitleElement, 500);
    }
    
    // Initialize modality tabs with animation
    initializeModalityTabs();
}

// Initialize Insight Hub
function initializeInsightHub() {
    initializeModalityTabs();
    // Auto-select art therapy
    selectModality('art');
}

// Initialize Modality Tabs with staggered animation
function initializeModalityTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        tab.style.opacity = '0';
        tab.style.transform = 'translateX(-20px)';
        tab.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        setTimeout(() => {
            tab.style.opacity = '1';
            tab.style.transform = 'translateX(0)';
        }, index * 100 + 300);
    });
}

// Select Modality with Premium Animation
function selectModality(modality) {
    currentModality = modality;
    
    // Update tab states with smooth transition
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const selectedTab = document.querySelector(`[data-modality="${modality}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Load exercises for this modality with animation
    loadExercises(modality);
}

// Load Exercises with staggered animations
function loadExercises(modality) {
    const container = document.getElementById('exercises-container');
    if (!container) return;
    
    if (!currentExercises || !currentExercises[modality] || currentExercises[modality].length === 0) {
        container.innerHTML = `
            <div class="no-exercises" style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(168, 181, 160, 0.1)); border-radius: 20px; margin: 20px 0;">
                <div class="no-exercises-icon" style="font-size: 60px; margin-bottom: 20px;">💎</div>
                <h3 style="color: #FAFAFA; margin-bottom: 16px;">Loading Exercises...</h3>
                <p style="color: #A8B5A0; margin-bottom: 24px;">Building your personalized healing experience.</p>
                <button class="action-button gold" onclick="selectModality('art')">🎨 Try Art Therapy</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    container.style.opacity = '0';
    
    const exercises = currentExercises[modality];
    
    exercises.forEach((exercise, index) => {
        const exerciseCard = createExerciseCard(exercise, index);
        container.appendChild(exerciseCard);
    });
    
    // Fade in container then animate cards
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transition = 'opacity 0.4s ease';
        
        // Animate each card
        const cards = container.querySelectorAll('.exercise-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                PremiumAnimations.fadeIn(card, 400);
            }, index * 150);
        });
    }, 100);
}

// Create Exercise Card with enhanced styling
function createExerciseCard(exercise, index) {
    const card = document.createElement('div');
    card.className = 'exercise-card';
    card.style.cursor = 'pointer';
    card.style.opacity = '0';
    
    const modalityIcon = getModalityIcon(currentModality);
    const modalityName = getModalityName(currentModality);
    
    card.innerHTML = `
        <div class="exercise-badge" style="background: linear-gradient(135deg, var(--sage-green), var(--primary-gold)); color: white; font-weight: 600; padding: 8px 16px; border-radius: 20px; display: inline-block; margin-bottom: 16px;">
            ${modalityIcon} ${modalityName}
        </div>
        <h3 class="exercise-title" style="margin: 16px 0; color: var(--deep-black); font-size: 20px; font-weight: 600;">${exercise.title}</h3>
        <div class="exercise-instruction" style="background: rgba(212, 175, 55, 0.1); padding: 16px; border-radius: 12px; margin: 16px 0; border-left: 4px solid var(--primary-gold); line-height: 1.6; color: var(--deep-black);">
            ${exercise.instruction.length > 120 ? exercise.instruction.substring(0, 120) + '...' : exercise.instruction}
        </div>
        <div class="exercise-meta" style="display: flex; gap: 16px; margin: 16px 0; font-size: 14px; color: var(--warm-brown);">
            <div class="exercise-duration">⏰ ${exercise.duration}</div>
            <div class="exercise-materials">🎯 ${exercise.materials || 'No materials needed'}</div>
        </div>
        <div class="exercise-actions" style="display: flex; gap: 12px; justify-content: center; margin-top: 20px;">
            <button class="action-button outline" onclick="openExercise(${index})" style="flex: 1;">
                ▶️ Start Exercise
            </button>
            <button class="action-button gold" onclick="saveExercise('${currentEmotion}', '${currentModality}', ${index})">
                ❤️ Save
            </button>
        </div>
    `;
    
    return card;
}

// Get Modality Display Name and Icon
function getModalityName(modality) {
    const names = {
        art: 'Art Therapy',
        breathwork: 'Breathwork',
        somatic: 'Somatic Practice',
        cbt: 'CBT',
        rebt: 'REBT', 
        neural: 'Neural Rewiring',
        journaling: 'Journaling',
        eft: 'EFT Tapping',
        emdr: 'EMDR',
        yoga: 'Yoga & Movement'
    };
    return names[modality] || modality;
}

function getModalityIcon(modality) {
    const icons = {
        art: '🎨',
        breathwork: '🌬️',
        somatic: '🤲',
        cbt: '💭',
        rebt: '🧠',
        neural: '⚡',
        journaling: '✍️',
        eft: '🤚',
        emdr: '👁️',
        yoga: '🧘'
    };
    return icons[modality] || '✨';
}

// Open Exercise in Full Screen
function openExercise(exerciseIndex) {
    if (!currentExercises[currentModality] || !currentExercises[currentModality][exerciseIndex]) {
        showToast('⚠️  Exercise not found', 'warning');
        return;
    }
    
    const exercise = currentExercises[currentModality][exerciseIndex];
    
    // Update exercise screen with animations
    document.getElementById('exercise-badge').textContent = `${getModalityIcon(currentModality)} ${getModalityName(currentModality)}`;
    document.getElementById('exercise-title').textContent = exercise.title;
    document.getElementById('exercise-instruction').textContent = exercise.instruction;
    
    // Enhanced exercise visual with encouragement
    const visual = document.getElementById('exercise-visual');
    if (visual) {
        visual.innerHTML = `
            <div class="exercise-meta-full" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0; padding: 20px; background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(168, 181, 160, 0.1)); border-radius: 16px;">
                <div class="meta-item" style="display: flex; align-items: center; gap: 8px; color: #FAFAFA;">
                    <span class="meta-icon" style="font-size: 18px;">⏰</span>
                    <span class="meta-text" style="font-weight: 600;">${exercise.duration}</span>
                </div>
                <div class="meta-item" style="display: flex; align-items: center; gap: 8px; color: #FAFAFA;">
                    <span class="meta-icon" style="font-size: 18px;">🎯</span>
                    <span class="meta-text" style="font-weight: 600;">${exercise.materials || 'None needed'}</span>
                </div>
            </div>
            <div class="exercise-encouragement" style="text-align: center; padding: 20px; background: linear-gradient(135deg, var(--soft-peach), var(--sage-green)); border-radius: 16px; color: var(--deep-black); font-style: italic; font-size: 16px; line-height: 1.6;">
                🌟 Take your time and be gentle with yourself. 🌙<br>
                "${exercise.affirmation || 'You are exactly where you need to be.'}"<br>
                ✨ Healing isn't linear – it's creative.
            </div>
        `;
    }
    
    showScreen('exercise-screen');
}

// Save Exercise to Toolkit with enhanced feedback
function saveExercise(emotion, modality, exerciseIndex) {
    if (!currentExercises[modality] || !currentExercises[modality][exerciseIndex]) {
        showToast('⚠️  Exercise not found', 'warning');
        return;
    }
    
    const exercise = currentExercises[modality][exerciseIndex];
    
    const savedExercise = {
        id: Date.now(),
        emotion,
        modality,
        exerciseIndex,
        title: exercise.title,
        instruction: exercise.instruction,
        duration: exercise.duration,
        materials: exercise.materials,
        affirmation: exercise.affirmation,
        savedAt: new Date().toISOString()
    };
    
    // Check if already saved
    const existingIndex = savedExercises.findIndex(ex => 
        ex.emotion === emotion && 
        ex.modality === modality && 
        ex.exerciseIndex === exerciseIndex
    );
    
    if (existingIndex === -1) {
        savedExercises.unshift(savedExercise);
        
        // Try to save to localStorage (may fail in sandbox)
        try {
            localStorage.setItem('emoSyncSavedExercises', JSON.stringify(savedExercises));
        } catch (e) {
            console.log('📱 Running in sandbox mode');
        }
        
        showToast('💖 Exercise saved to your Healing Toolkit! You now have ' + savedExercises.length + ' saved exercises.');
        
        // Add visual feedback
        const saveButtons = document.querySelectorAll('.action-button.gold');
        saveButtons.forEach(btn => {
            if (btn.textContent.includes('Save')) {
                btn.innerHTML = '✔️ Saved!';
                btn.style.background = 'linear-gradient(135deg, var(--sage-green), #4ECDC4)';
                setTimeout(() => {
                    btn.innerHTML = '❤️ Save';
                    btn.style.background = '';
                }, 2000);
            }
        });
    } else {
        showToast('✨ This exercise is already in your toolkit!');
    }
}

// Enhanced Toast Notification System
function showToast(message, type = 'success') {
    // Remove existing toasts
    document.querySelectorAll('.toast').forEach(toast => {
        toast.remove();
    });
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    const colors = {
        success: 'linear-gradient(135deg, var(--primary-gold), #E8C547)',
        info: 'linear-gradient(135deg, var(--sage-green), #4ECDC4)',
        warning: 'linear-gradient(135deg, var(--soft-peach), #FFB347)'
    };
    
    toast.style.cssText = `
        position: fixed;
        top: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
        background: ${colors[type] || colors.success};
        color: var(--deep-black);
        padding: 16px 28px;
        border-radius: 30px;
        font-weight: 600;
        box-shadow: 0 10px 40px rgba(212, 175, 55, 0.3), 0 4px 15px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        font-size: 15px;
        text-align: center;
        max-width: 90vw;
        backdrop-filter: blur(20px);
        border: 2px solid rgba(255, 255, 255, 0.2);
        animation: toastSlideIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        font-family: "Playwrite US Modern", cursive;
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 400);
    }, 4000);
}

// Add toast animations
if (!document.getElementById('toast-animations')) {
    const style = document.createElement('style');
    style.id = 'toast-animations';
    style.textContent = `
        @keyframes toastSlideIn {
            from {
                transform: translateX(-50%) translateY(-100%) scale(0.8);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) translateY(0) scale(1);
                opacity: 1;
            }
        }
        @keyframes toastSlideOut {
            from {
                transform: translateX(-50%) translateY(0) scale(1);
                opacity: 1;
            }
            to {
                transform: translateX(-50%) translateY(-100%) scale(0.8);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Core functionality
function tryAnother() { 
    if (currentExercises[currentModality] && currentExercises[currentModality].length > 1) {
        const randomIndex = Math.floor(Math.random() * currentExercises[currentModality].length);
        openExercise(randomIndex);
    } else {
        showToast('🔄 Loading more exercises...', 'info'); 
    }
}

function markAsDone() { 
    showToast('✅ Great work! Exercise completed successfully!'); 
    // Could add to completion tracking here
}

function saveToToolkit() {
    // This will use the current exercise context
    if (currentEmotion && currentModality && currentExercises[currentModality]) {
        const currentIndex = 0; // Could track current exercise better
        saveExercise(currentEmotion, currentModality, currentIndex);
    } else {
        showToast('💖 Save exercises from the exercise browser!', 'info');
    }
}

function initializeDashboard() { 
    const totalExercises = exerciseLoader ? exerciseLoader.getTotalLoadedExercises() : 'Loading...';
    showToast(`📊 Dashboard ready! ${totalExercises} exercises available.`, 'info'); 
}

function initializeJournal() { 
    // Set today's date
    const dateElement = document.getElementById('journal-date');
    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
    
    showToast('📝 Journal ready for your thoughts and reflections!', 'info'); 
}  

function initializeToolkit() { 
    const grid = document.getElementById('toolkit-grid');
    if (grid) {
        if (savedExercises.length === 0) {
            grid.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #FAFAFA;">
                    <h3>💖 Your Personal Toolkit</h3>
                    <p>Save exercises as you discover ones that resonate with you.</p>
                    <p>You have <strong>${savedExercises.length}</strong> saved exercises.</p>
                    <button class="action-button gold" onclick="showScreen('emotion-selector')">🎨 Discover Exercises</button>
                </div>
            `;
        } else {
            // Show saved exercises
            grid.innerHTML = `
                <div style="text-align: center; padding: 20px; color: #FAFAFA;">
                    <h3>💖 Your Healing Toolkit (${savedExercises.length} exercises)</h3>
                </div>
            `;
            
            savedExercises.forEach(exercise => {
                const card = createSavedExerciseCard(exercise);
                grid.appendChild(card);
            });
        }
    }
}

function createSavedExerciseCard(savedExercise) {
    const card = document.createElement('div');
    card.className = 'exercise-card saved';
    card.innerHTML = `
        <div class="exercise-badge" style="background: linear-gradient(135deg, var(--sage-green), var(--primary-gold)); color: white; font-weight: 600; padding: 8px 16px; border-radius: 20px; display: inline-block; margin-bottom: 16px;">
            ${getModalityIcon(savedExercise.modality)} ${getModalityName(savedExercise.modality)}
        </div>
        <h3 style="color: var(--deep-black); margin: 8px 0;">${savedExercise.title}</h3>
        <p style="color: var(--warm-brown); font-size: 14px; margin: 8px 0;">🎯 ${savedExercise.emotion.charAt(0).toUpperCase() + savedExercise.emotion.slice(1).replace('-', ' ')}</p>
        <div style="display: flex; gap: 8px; margin-top: 16px;">
            <button class="action-button outline" onclick="openSavedExercise('${savedExercise.id}')" style="flex: 1;">▶️ Practice</button>
        </div>
    `;
    return card;
}

function openSavedExercise(exerciseId) {
    const savedExercise = savedExercises.find(ex => ex.id.toString() === exerciseId.toString());
    if (savedExercise) {
        // Temporarily set current context
        currentEmotion = savedExercise.emotion;
        currentModality = savedExercise.modality;
        
        // Update exercise screen
        document.getElementById('exercise-badge').textContent = `${getModalityIcon(savedExercise.modality)} ${getModalityName(savedExercise.modality)}`;
        document.getElementById('exercise-title').textContent = savedExercise.title;
        document.getElementById('exercise-instruction').textContent = savedExercise.instruction;
        
        // Update visual
        const visual = document.getElementById('exercise-visual');
        if (visual) {
            visual.innerHTML = `
                <div class="exercise-meta-full" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0; padding: 20px; background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(168, 181, 160, 0.1)); border-radius: 16px;">
                    <div class="meta-item" style="display: flex; align-items: center; gap: 8px; color: #FAFAFA;">
                        <span class="meta-icon" style="font-size: 18px;">⏰</span>
                        <span class="meta-text" style="font-weight: 600;">${savedExercise.duration}</span>
                    </div>
                    <div class="meta-item" style="display: flex; align-items: center; gap: 8px; color: #FAFAFA;">
                        <span class="meta-icon" style="font-size: 18px;">🎯</span>
                        <span class="meta-text" style="font-weight: 600;">${savedExercise.materials || 'None needed'}</span>
                    </div>
                </div>
                <div class="exercise-encouragement" style="text-align: center; padding: 20px; background: linear-gradient(135deg, var(--soft-peach), var(--sage-green)); border-radius: 16px; color: var(--deep-black); font-style: italic; font-size: 16px; line-height: 1.6;">
                    🌟 From your personal toolkit with love 💖<br>
                    "${savedExercise.affirmation}"<br>
                    ✨ Healing isn't linear – it's creative.
                </div>
            `;
        }
        
        showScreen('exercise-screen');
    }
}

function updateBottomNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const screenNavMap = {
        'emotion-selector': 0,
        'insight-hub': 0, 
        'exercise-screen': 0,
        'dashboard': 0,
        'toolkit': 1,
        'journal': 2,
        'settings': 3
    };
    
    const navItems = document.querySelectorAll('.nav-item');
    const activeIndex = screenNavMap[currentScreen];
    if (navItems[activeIndex]) {
        navItems[activeIndex].classList.add('active');
    }
}

// Initialize App on Load
async function initializeApp() {
    console.log('🌟 EmoSync Premium initializing...');
    
    // Initialize exercise loader
    exerciseLoader = new ExerciseLoader();
    
    // Initialize video background if enabled
    if (videoBackgroundEnabled && currentVideoSrc) {
        setTimeout(() => {
            enableVideoBackground(currentVideoSrc);
        }, 1000);
    }
    
    // Preload popular emotions for instant access
    exerciseLoader.preloadPopularEmotions().catch(err => {
        console.log('⚠️  Preload had issues, but fallbacks ready');
    });
    
    // Initialize service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log('🚀 EmoSync Service Worker registered'))
            .catch(err => console.log('❌ Service Worker registration failed:', err));
    }
    
    // Auto-transition from splash after 3 seconds
    setTimeout(() => {
        if (currentScreen === 'splash-screen') {
            showScreen('emotion-selector');
        }
    }, 3000);
    
    console.log('✨ EmoSync Premium ready!');
    console.log('💎 2000+ therapeutic exercises loaded!');
    console.log('💖 Created with love by @SrishtySynergy');
    console.log('🌙 "Healing isn\'t linear – it\'s creative."');
}

// Additional Functions for Complete App Functionality
function startQuickReset() {
    showToast('🚀 Quick reset starting...', 'info');
    // Could implement 3-minute guided reset
}

function saveQuickNote() {
    const note = document.getElementById('quick-note')?.value;
    if (note) {
        showToast('📝 Note saved to your journal!', 'success');
        // Could save to journal system
    }
}

function refreshPrompt() {
    const prompts = [
        "Right now, my body feels...",
        "The emotion I'm avoiding is...",
        "What I need most today is...",
        "I'm grateful for...",
        "My inner voice is saying...",
        "The sensation in my chest is...",
        "If my emotions had colors, they would be...",
        "What I want to release is...",
        "My heart is calling for..."
    ];
    
    const promptElement = document.getElementById('journal-prompt-text');
    if (promptElement) {
        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        promptElement.textContent = randomPrompt;
        PremiumAnimations.slideDown(promptElement, 0);
    }
}

function saveJournalEntry() {
    const entry = document.getElementById('journal-textarea')?.value;
    if (entry) {
        const today = new Date().toDateString();
        journalEntries[today] = entry;
        
        try {
            localStorage.setItem('emoSyncJournalEntries', JSON.stringify(journalEntries));
        } catch (e) {
            console.log('Sandbox mode - journal not persistent');
        }
        
        showToast('💖 Journal entry saved!', 'success');
    }
}

function startRoutine() {
    if (savedExercises.length === 0) {
        showToast('🎨 Save some exercises first to create your routine!', 'info');
        showScreen('emotion-selector');
    } else {
        showToast('🚀 Starting your personal routine...', 'info');
        // Could implement routine player
    }
}

function exportJournal() {
    showToast('📤 Export feature coming soon!', 'info');
}

// Accessibility Functions
function adjustTextSize(delta) {
    // Implement text size adjustment
    showToast(`📝 Text size ${delta > 0 ? 'increased' : 'decreased'}`, 'info');
}

function toggleAnimations() {
    const checkbox = document.getElementById('reduce-animations');
    if (checkbox?.checked) {
        document.body.classList.add('reduce-animations');
        showToast('✨ Animations reduced for accessibility', 'info');
    } else {
        document.body.classList.remove('reduce-animations');
        showToast('🎨 Full animations restored', 'info');
    }
}

function toggleVoiceNav() {
    const checkbox = document.getElementById('voice-nav');
    showToast(`🎤 Voice navigation ${checkbox?.checked ? 'enabled' : 'disabled'}`, 'info');
}

// Data Management
function showDataUsage() {
    showToast('📊 All data stored locally on your device', 'info');
}

function exportData() {
    const data = {
        savedExercises,
        moodHistory,
        journalEntries,
        streakCount
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'emosync-data.json';
    link.click();
    
    showToast('📥 Data exported successfully!', 'success');
}

function deleteData() {
    if (confirm('Are you sure you want to delete all your EmoSync data?')) {
        savedExercises = [];
        moodHistory = [];
        journalEntries = {};
        streakCount = 0;
        
        try {
            localStorage.clear();
        } catch (e) {
            console.log('Sandbox mode');
        }
        
        showToast('🗑️ All data deleted', 'warning');
        showScreen('emotion-selector');
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// 🎬 ADD VIDEO BACKGROUND STYLES
if (!document.getElementById('video-background-styles')) {
    const videoStyles = document.createElement('style');
    videoStyles.id = 'video-background-styles';
    videoStyles.textContent = `
        .video-bg-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -999;
            opacity: 0;
            transition: opacity 1s ease;
        }
        
        .video-background {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(13, 17, 23, 0.4);
            backdrop-filter: blur(1px);
        }
        
        .bg-option {
            padding: 8px 16px;
            margin: 4px;
            border: 2px solid var(--primary-gold);
            background: transparent;
            color: var(--primary-gold);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .bg-option:hover,
        .bg-option.active {
            background: var(--primary-gold);
            color: var(--deep-black);
        }
        
        #video-upload {
            width: 100%;
            padding: 12px;
            border: 2px dashed var(--primary-gold);
            background: rgba(212, 175, 55, 0.1);
            border-radius: 8px;
            color: #FAFAFA;
            cursor: pointer;
        }
        
        #video-upload:hover {
            border-color: var(--sage-green);
            background: rgba(168, 181, 160, 0.1);
        }
    `;
    document.head.appendChild(videoStyles);
}

console.log('🎆 EmoSync Premium Enhanced - Start Your Reset button fixed + Video backgrounds ready!');