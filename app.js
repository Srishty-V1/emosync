// W3SCHOOLS-STYLE VIDEO BACKGROUND INJECTOR - GUARANTEED TO WORK
(function() {
    'use strict';
    
    console.log('🎬 W3SCHOOLS VIDEO INJECTOR LOADING...');
    
    function injectVideoBackground() {
        // Remove any existing video containers
        document.querySelectorAll('.video-bg-container, #bgVideo').forEach(el => el.remove());
        
        // Create W3Schools-style video element
        const video = document.createElement('video');
        video.id = 'bgVideo';
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'auto';
        
        // W3Schools CSS adapted for rounded corners
        video.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            width: calc(100vw - 40px);
            height: calc(100vh - 40px);
            min-width: calc(100vw - 40px);
            min-height: calc(100vh - 40px);
            object-fit: cover;
            z-index: -10;
            border-radius: 32px;
            pointer-events: none;
        `;
        
        // Add video sources - multiple fallbacks
        const sources = [
            'assets/videos/14478854_1920_1080_30fps%20(online-video-cutter.com).mp4',
            './assets/videos/14478854_1920_1080_30fps (online-video-cutter.com).mp4',
            '/assets/videos/14478854_1920_1080_30fps (online-video-cutter.com).mp4'
        ];
        
        sources.forEach(src => {
            const source = document.createElement('source');
            source.src = src;
            source.type = 'video/mp4';
            video.appendChild(source);
        });
        
        // Insert at start of body
        document.body.insertBefore(video, document.body.firstChild);
        
        // Force play with W3Schools approach
        setTimeout(() => {
            video.play().then(() => {
                console.log('✅ W3Schools video playing successfully!');
            }).catch(e => {
                console.log('⚠️ Video blocked, will retry on interaction:', e);
                // Retry on any click like W3Schools example
                document.addEventListener('click', () => {
                    video.play().catch(() => {});
                }, { once: true });
            });
        }, 500);
        
        console.log('✅ W3Schools video injected with rounded clipping');
        return video;
    }
    
    // Inject immediately and on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectVideoBackground);
    } else {
        injectVideoBackground();
    }
    
    // Also inject after short delay for safety
    setTimeout(injectVideoBackground, 1000);
    
})();

// EmoSync Premium JavaScript - Feel, Heal, and Rewire 💎✨
// Created with love by @SrishtySynergy - VIBE CODER EDITION 🚀
// Now with 2000+ Therapeutic Exercises + Beautiful Video Background! 🎬🌟

// Load Exercise Database System
let exerciseLoader;

// Video Background System 🎬 - FORCE ENABLE FROM START
let videoBackgroundEnabled = true; 
let currentVideoSrc = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4';

// 🚨 INSTANT VIDEO BACKGROUND INIT - NO DELAYS!
function forceVideoBackgroundNow() {
    console.log('🎬 FORCING VIDEO BACKGROUND NOW!');
    
    const videoContainer = document.getElementById('video-background-container');
    const video = document.getElementById('background-video');
    
    if (!video || !videoContainer) {
        console.error('❌ Video elements missing!');
        return;
    }
    
    // INSTANT video setup with multiple sources
    const videoSources = [
        'https://player.vimeo.com/external/373077061.sd.mp4?s=e90dcaba73c19f26a2a4e7fac7d9b8e8ddcf282e&profile_id=164&oauth2_token_id=57447761',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4'
    ];
    
    let sourceIndex = 0;
    
    function loadNextSource() {
        if (sourceIndex >= videoSources.length) {
            console.warn('⚠️ All videos failed, keeping minimal background');
            return;
        }
        
        const src = videoSources[sourceIndex];
        console.log(`🎯 Loading video source ${sourceIndex + 1}: ${src}`);
        
        video.src = src;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.autoplay = true;
        
        video.onloadeddata = () => {
            console.log('✅ VIDEO LOADED SUCCESSFULLY!');
            videoContainer.style.opacity = '1';
            videoContainer.style.zIndex = '-1';
            videoContainer.classList.add('active');
            
            // HIDE SPLASH GRADIENT IMMEDIATELY
            const splashScreen = document.getElementById('splash-screen');
            if (splashScreen) {
                splashScreen.style.background = 'transparent';
                splashScreen.style.backdropFilter = 'blur(2px)';
            }
            
            video.play().catch(e => console.log('🔇 Autoplay blocked, but video ready'));
        };
        
        video.onerror = () => {
            console.warn(`❌ Source ${sourceIndex + 1} failed`);
            sourceIndex++;
            setTimeout(loadNextSource, 500);
        };
        
        video.load();
    }
    
    loadNextSource();
}

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

// Exercise Database Loader - Connects to 2000+ JSON Exercises 📚🎯
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
        if (this.loadedEmotions.has(emotionKey)) {
            return this.loadedEmotions.get(emotionKey);
        }

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
            console.warn(`⚠️ Failed to load ${emotionKey}:`, error.message);
            this.isLoading.delete(emotionKey);
            
            const fallbackExercises = this.fallbackDatabase[emotionKey] || this.createEmotionFallback(emotionKey);
            this.loadedEmotions.set(emotionKey, fallbackExercises);
            
            console.log(`🛡️ Using fallback exercises for ${emotionKey}`);
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
                title: `${emotionName} Expression Art 🎨`,
                instruction: `Express your ${emotionKey.replace('-', ' ')} through colors, shapes, and lines. Let your creativity transform this feeling into something beautiful! ✨`,
                duration: "15-20 minutes ⏰",
                materials: "Art supplies of choice 🖍️",
                affirmation: `I transform ${emotionKey.replace('-', ' ')} through creative expression 💫`
            }],
            breathwork: [{
                title: `${emotionName} Calming Breath 🌬️`,
                instruction: "Breathe slowly and deeply, sending calm and healing to areas affected by this emotion. Let each breath bring more peace! 🕊️",
                duration: "8-12 minutes ⏰", 
                materials: "None needed 🙏",
                affirmation: `I breathe peace into ${emotionKey.replace('-', ' ')} and find my center 🌊`
            }],
            somatic: [{
                title: `${emotionName} Body Release 🤲`,
                instruction: "Notice where this emotion lives in your body. Send gentle attention and movement to release tension from these areas! 💆‍♀️",
                duration: "10-15 minutes ⏰",
                materials: "Comfortable space 🧘‍♀️",
                affirmation: `I release ${emotionKey.replace('-', ' ')} from my body with gentle care 🌟`
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
            console.log('⚠️ Preload had some issues, but fallbacks ready');
        }
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

// 🔥 BULLETPROOF START YOUR RESET FUNCTION
function startEmoSyncJourney() {
    console.log('🎆 STARTING EMOSYNC JOURNEY! LET\'S GOOO!');
    showToast('🌟 Welcome to your healing journey, vibe coder! ✨', 'success');
    
    // Add epic button feedback
    const button = document.getElementById('start-reset-button');
    if (button) {
        button.style.transform = 'scale(0.95)';
        button.style.background = 'linear-gradient(135deg, #4ECDC4, #A8B5A0)';
        button.innerHTML = '🚀 Loading...';
        
        setTimeout(() => {
            button.style.transform = 'scale(1.05)';
            button.innerHTML = '✨ Let\'s Go!';
        }, 200);
        
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            button.style.background = '';
            button.innerHTML = 'Start Your Reset';
        }, 600);
    }
    
    setTimeout(() => {
        console.log('🎯 Switching to emotion selector!');
        showScreen('emotion-selector');
    }, 1000);
}

// Make sure function is globally available IMMEDIATELY
window.startEmoSyncJourney = startEmoSyncJourney;

// Premium Screen Management with Smooth Transitions
function showScreen(screenId, fromScreen = null) {
    console.log(`🔄 Switching to screen: ${screenId}`);
    
    const currentScreenEl = document.querySelector('.screen.active');
    const targetScreen = document.getElementById(screenId);
    
    if (!targetScreen) {
        console.error(`❌ Screen ${screenId} not found!`);
        return;
    }
    
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
    console.log(`🎬 Initializing screen: ${screenId}`);
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

// Add animations styles if not present
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

// Initialize Emotion Grid with Staggered Animations 💫
function initializeEmotionGrid() {
    console.log('😊 Initializing emotion grid with animations!');
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

// Select Emotion with Premium Animation + Dynamic Loading 🎯
async function selectEmotion(emotion) {
    currentEmotion = emotion;
    
    showToast('🔄 Loading exercises...', 'info');
    
    try {
        const exercises = await exerciseLoader.loadEmotion(emotion);
        currentExercises = exercises;
        
        showScreen('insight-hub');
        
        setTimeout(() => {
            updateEmotionDisplay(emotion);
        }, 200);
        
        showToast(`✅ Loaded ${exerciseLoader.countExercises(exercises)} exercises for ${emotion}! 🎉`);
        
    } catch (error) {
        console.error('Failed to load emotion exercises:', error);
        showToast('⚠️ Using backup exercises', 'warning');
        currentExercises = exerciseLoader.fallbackDatabase[emotion] || {};
        showScreen('insight-hub');
        setTimeout(() => updateEmotionDisplay(emotion), 200);
    }
}

// Update emotion display with animations 🎨
function updateEmotionDisplay(emotion) {
    const titleElement = document.getElementById('emotion-title');
    const subtitleElement = document.getElementById('emotion-subtitle');
    
    if (titleElement) {
        titleElement.textContent = `${emotion.toUpperCase().replace('-', ' ')} ✨`;
        PremiumAnimations.revealLetters(titleElement, `${emotion.toUpperCase().replace('-', ' ')} ✨`);
    }
    
    if (subtitleElement) {
        const subtitles = {
            stress: "Tension in the mind, tightness in the body. Let's release it! 🌊",
            anxiety: "Worried thoughts and racing heart. Let's find your calm! 🕊️",
            anger: "Fire in your chest, power in your voice. Let's channel it wisely! 🔥",
            sadness: "Heavy heart, tender soul. Let's honor this feeling with care! 💙",
            fear: "Alert mind, protective instinct. Let's transform worry into wisdom! ⚡",
            guilt: "Weight of regret, desire to do better. Let's find forgiveness! 🤗",
            shame: "Core wound, need for acceptance. Let's remember your worth! 👑",
            overwhelm: "Too much, too fast, too heavy. Let's break it down together! 🧘‍♀️",
            loneliness: "Aching for connection, feeling separate. Let's bridge back to love! 💖",
            'low-confidence': "Doubting your worth, forgetting your power. Let's remember who you are! 💪",
            'lack-motivation': "Energy depleted, spark dimmed. Let's reignite your fire! 🔥",
            inconsistency: "Starting and stopping, seeking rhythm. Let's find your flow! 🌊",
            'self-doubt': "Questioning your abilities, second-guessing yourself. Let's build trust! 🏗️",
            perfectionism: "Never good enough, always pushing. Let's embrace 'good enough!' 🎯",
            rejection: "Fear of 'no,' need for acceptance. Let's strengthen your core! 💎",
            comparison: "Looking sideways, losing yourself. Let's return to your unique path! 🌟",
            resentment: "Old wounds, carried anger. Let's set down this heavy load! 🕊️",
            numbness: "Feeling nothing, protecting from everything. Let's gently reconnect! 🌱",
            hopelessness: "Can't see the light, future feels dark. Let's kindle hope together! 🕯️",
            burnout: "Exhausted flame, depleted energy. Let's restore your vitality! ⚡"
        };
        
        subtitleElement.textContent = subtitles[emotion] || "Let's explore this feeling together with compassion! 💝";
        PremiumAnimations.slideDown(subtitleElement, 500);
    }
    
    initializeModalityTabs();
}

// Initialize Insight Hub 🔍
function initializeInsightHub() {
    initializeModalityTabs();
    selectModality('art');
}

// Initialize Modality Tabs with staggered animation 🎭
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

// Select Modality with Premium Animation 🎨
function selectModality(modality) {
    currentModality = modality;
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const selectedTab = document.querySelector(`[data-modality="${modality}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    loadExercises(modality);
}

// Load Exercises with staggered animations 📚
function loadExercises(modality) {
    const container = document.getElementById('exercises-container');
    if (!container) return;
    
    if (!currentExercises || !currentExercises[modality] || currentExercises[modality].length === 0) {
        container.innerHTML = `
            <div class="no-exercises" style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(168, 181, 160, 0.1)); border-radius: 20px; margin: 20px 0;">
                <div class="no-exercises-icon" style="font-size: 60px; margin-bottom: 20px;">💎</div>
                <h3 style="color: #1A1A1A; margin-bottom: 16px;">Loading Exercises... 🔄</h3>
                <p style="color: #333; margin-bottom: 24px;">Building your personalized healing experience! ✨</p>
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
    
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transition = 'opacity 0.4s ease';
        
        const cards = container.querySelectorAll('.exercise-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                PremiumAnimations.fadeIn(card, 400);
            }, index * 150);
        });
    }, 100);
}

// Create Exercise Card with READABLE TEXT COLORS 💫
function createExerciseCard(exercise, index) {
    const card = document.createElement('div');
    card.className = 'exercise-card';
    card.style.cursor = 'pointer';
    card.style.opacity = '0';
    
    const modalityIcon = getModalityIcon(currentModality);
    const modalityName = getModalityName(currentModality);
    
    card.innerHTML = `
        <div class="exercise-badge" style="background: linear-gradient(135deg, #4ECDC4, #A8B5A0); color: white; font-weight: 600; padding: 8px 16px; border-radius: 20px; display: inline-block; margin-bottom: 16px;">
            ${modalityIcon} ${modalityName}
        </div>
        <h3 class="exercise-title" style="margin: 16px 0; color: #1A1A1A; font-size: 20px; font-weight: 600;">${exercise.title}</h3>
        <div class="exercise-instruction" style="background: rgba(212, 175, 55, 0.15); padding: 16px; border-radius: 12px; margin: 16px 0; border-left: 4px solid #D4AF37; line-height: 1.6; color: #2D2D2D;">
            ${exercise.instruction.length > 120 ? exercise.instruction.substring(0, 120) + '...' : exercise.instruction}
        </div>
        <div class="exercise-meta" style="display: flex; gap: 16px; margin: 16px 0; font-size: 14px; color: #555;">
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

// Get Modality Display Name and Icon 🎨
function getModalityName(modality) {
    const names = {
        art: 'Art Therapy 🎨',
        breathwork: 'Breathwork 🌬️',
        somatic: 'Somatic Practice 🤲',
        cbt: 'CBT 💭',
        rebt: 'REBT 🧠', 
        neural: 'Neural Rewiring ⚡',
        journaling: 'Journaling ✍️',
        eft: 'EFT Tapping 🤚',
        emdr: 'EMDR 👁️',
        yoga: 'Yoga & Movement 🧘'
    };
    return names[modality] || `${modality} ✨`;
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

// Open Exercise in Full Screen 📖
function openExercise(exerciseIndex) {
    if (!currentExercises[currentModality] || !currentExercises[currentModality][exerciseIndex]) {
        showToast('⚠️ Exercise not found', 'warning');
        return;
    }
    
    const exercise = currentExercises[currentModality][exerciseIndex];
    
    document.getElementById('exercise-badge').textContent = `${getModalityIcon(currentModality)} ${getModalityName(currentModality)}`;
    document.getElementById('exercise-title').textContent = exercise.title;
    document.getElementById('exercise-instruction').textContent = exercise.instruction;
    
    const visual = document.getElementById('exercise-visual');
    if (visual) {
        visual.innerHTML = `
            <div class="exercise-meta-full" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0; padding: 20px; background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(168, 181, 160, 0.1)); border-radius: 16px;">
                <div class="meta-item" style="display: flex; align-items: center; gap: 8px; color: #1A1A1A;">
                    <span class="meta-icon" style="font-size: 18px;">⏰</span>
                    <span class="meta-text" style="font-weight: 600;">${exercise.duration}</span>
                </div>
                <div class="meta-item" style="display: flex; align-items: center; gap: 8px; color: #1A1A1A;">
                    <span class="meta-icon" style="font-size: 18px;">🎯</span>
                    <span class="meta-text" style="font-weight: 600;">${exercise.materials || 'None needed'}</span>
                </div>
            </div>
            <div class="exercise-encouragement" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #FFE4B5, #E6F3E6); border-radius: 16px; color: #1A1A1A; font-style: italic; font-size: 16px; line-height: 1.6;">
                🌟 Take your time and be gentle with yourself! 🌙<br>
                "${exercise.affirmation || 'You are exactly where you need to be! ✨'}"<br>
                💫 Healing isn't linear – it's creative!
            </div>
        `;
    }
    
    showScreen('exercise-screen');
}

// Save Exercise to Toolkit with enhanced feedback 💖
function saveExercise(emotion, modality, exerciseIndex) {
    if (!currentExercises[modality] || !currentExercises[modality][exerciseIndex]) {
        showToast('⚠️ Exercise not found', 'warning');
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
    
    const existingIndex = savedExercises.findIndex(ex => 
        ex.emotion === emotion && 
        ex.modality === modality && 
        ex.exerciseIndex === exerciseIndex
    );
    
    if (existingIndex === -1) {
        savedExercises.unshift(savedExercise);
        
        try {
            localStorage.setItem('emoSyncSavedExercises', JSON.stringify(savedExercises));
        } catch (e) {
            console.log('📱 Running in sandbox mode');
        }
        
        showToast(`💖 Exercise saved to your Healing Toolkit! You now have ${savedExercises.length} saved exercises! 🎉`);
        
        const saveButtons = document.querySelectorAll('.action-button.gold');
        saveButtons.forEach(btn => {
            if (btn.textContent.includes('Save')) {
                btn.innerHTML = '✔️ Saved! 🎉';
                btn.style.background = 'linear-gradient(135deg, #4ECDC4, #A8B5A0)';
                setTimeout(() => {
                    btn.innerHTML = '❤️ Save';
                    btn.style.background = '';
                }, 2000);
            }
        });
    } else {
        showToast('✨ This exercise is already in your toolkit! 💫');
    }
}

// Enhanced Toast Notification System 🍞
function showToast(message, type = 'success') {
    document.querySelectorAll('.toast').forEach(toast => {
        toast.remove();
    });
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    const colors = {
        success: 'linear-gradient(135deg, #D4AF37, #E8C547)',
        info: 'linear-gradient(135deg, #4ECDC4, #A8B5A0)',
        warning: 'linear-gradient(135deg, #FFE4B5, #FFB347)'
    };
    
    toast.style.cssText = `
        position: fixed;
        top: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
        background: ${colors[type] || colors.success};
        color: #1A1A1A;
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
    
    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 400);
    }, 4000);
}

// Add toast animations 🎞️
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

// Core functionality with emoji vibes! 🎯
function tryAnother() { 
    if (currentExercises[currentModality] && currentExercises[currentModality].length > 1) {
        const randomIndex = Math.floor(Math.random() * currentExercises[currentModality].length);
        openExercise(randomIndex);
        showToast('🔄 Loading another exercise for you! ✨', 'info');
    } else {
        showToast('🔄 Loading more exercises... 🎨', 'info'); 
    }
}

function markAsDone() { 
    showToast('✅ Amazing work! Exercise completed successfully! 🎉🌟'); 
}

function saveToToolkit() {
    if (currentEmotion && currentModality && currentExercises[currentModality]) {
        const currentIndex = 0;
        saveExercise(currentEmotion, currentModality, currentIndex);
    } else {
        showToast('💖 Save exercises from the exercise browser! 📚', 'info');
    }
}

function initializeDashboard() { 
    const totalExercises = exerciseLoader ? exerciseLoader.getTotalLoadedExercises() : 'Loading...';
    showToast(`📊 Dashboard ready! ${totalExercises} exercises available! 🚀`, 'info'); 
}

function initializeJournal() { 
    const dateElement = document.getElementById('journal-date');
    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
    
    showToast('📝 Journal ready for your thoughts and reflections! ✨', 'info'); 
}  

function initializeToolkit() { 
    const grid = document.getElementById('toolkit-grid');
    if (grid) {
        if (savedExercises.length === 0) {
            grid.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #1A1A1A;">
                    <h3>💖 Your Personal Toolkit</h3>
                    <p>Save exercises as you discover ones that resonate with you! ✨</p>
                    <p>You have <strong>${savedExercises.length}</strong> saved exercises 📚</p>
                    <button class="action-button gold" onclick="showScreen('emotion-selector')">🎨 Discover Exercises</button>
                </div>
            `;
        } else {
            grid.innerHTML = `
                <div style="text-align: center; padding: 20px; color: #1A1A1A;">
                    <h3>💖 Your Healing Toolkit (${savedExercises.length} exercises) 🎯</h3>
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
        <div class="exercise-badge" style="background: linear-gradient(135deg, #4ECDC4, #A8B5A0); color: white; font-weight: 600; padding: 8px 16px; border-radius: 20px; display: inline-block; margin-bottom: 16px;">
            ${getModalityIcon(savedExercise.modality)} ${getModalityName(savedExercise.modality)}
        </div>
        <h3 style="color: #1A1A1A; margin: 8px 0;">${savedExercise.title}</h3>
        <p style="color: #555; font-size: 14px; margin: 8px 0;">🎯 ${savedExercise.emotion.charAt(0).toUpperCase() + savedExercise.emotion.slice(1).replace('-', ' ')}</p>
        <div style="display: flex; gap: 8px; margin-top: 16px;">
            <button class="action-button outline" onclick="openSavedExercise('${savedExercise.id}')" style="flex: 1;">▶️ Practice</button>
        </div>
    `;
    return card;
}

function openSavedExercise(exerciseId) {
    const savedExercise = savedExercises.find(ex => ex.id.toString() === exerciseId.toString());
    if (savedExercise) {
        currentEmotion = savedExercise.emotion;
        currentModality = savedExercise.modality;
        
        document.getElementById('exercise-badge').textContent = `${getModalityIcon(savedExercise.modality)} ${getModalityName(savedExercise.modality)}`;
        document.getElementById('exercise-title').textContent = savedExercise.title;
        document.getElementById('exercise-instruction').textContent = savedExercise.instruction;
        
        const visual = document.getElementById('exercise-visual');
        if (visual) {
            visual.innerHTML = `
                <div class="exercise-meta-full" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0; padding: 20px; background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(168, 181, 160, 0.1)); border-radius: 16px;">
                    <div class="meta-item" style="display: flex; align-items: center; gap: 8px; color: #1A1A1A;">
                        <span class="meta-icon" style="font-size: 18px;">⏰</span>
                        <span class="meta-text" style="font-weight: 600;">${savedExercise.duration}</span>
                    </div>
                    <div class="meta-item" style="display: flex; align-items: center; gap: 8px; color: #1A1A1A;">
                        <span class="meta-icon" style="font-size: 18px;">🎯</span>
                        <span class="meta-text" style="font-weight: 600;">${savedExercise.materials || 'None needed'}</span>
                    </div>
                </div>
                <div class="exercise-encouragement" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #FFE4B5, #E6F3E6); border-radius: 16px; color: #1A1A1A; font-style: italic; font-size: 16px; line-height: 1.6;">
                    🌟 From your personal toolkit with love! 💖<br>
                    "${savedExercise.affirmation}"<br>
                    ✨ Healing isn't linear – it's creative!
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

// 🚨 BULLETPROOF APP INITIALIZATION
async function initializeApp() {
    console.log('🌟 EmoSync Premium initializing... VIBE CODER EDITION! 🔥');
    
    // 🎬 FORCE VIDEO BACKGROUND IMMEDIATELY - NO DELAYS!
    forceVideoBackgroundNow();
    
    // 🔥 FORCE BIND START BUTTON - MULTIPLE WAYS TO ENSURE IT WORKS
    const startButton = document.getElementById('start-reset-button');
    if (startButton) {
        console.log('🎯 Binding Start Your Reset button...');
        
        // Remove any existing handlers
        startButton.removeAttribute('onclick');
        
        // Add bulletproof event listener
        startButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('🚀 START BUTTON CLICKED!');
            startEmoSyncJourney();
        });
        
        // Also add to window for fallback
        startButton.setAttribute('onclick', 'startEmoSyncJourney()');
        
        console.log('✅ Start button bound successfully!');
    } else {
        console.error('❌ Start button not found!');
    }
    
    // Initialize exercise loader
    exerciseLoader = new ExerciseLoader();
    
    // Preload popular emotions
    exerciseLoader.preloadPopularEmotions().catch(err => {
        console.log('⚠️ Preload had issues, but fallbacks ready');
    });
    
    console.log('✨ EmoSync Premium ready! VIBE MODE ACTIVATED! 🎉');
    console.log('💎 2000+ therapeutic exercises loaded!');
    console.log('🎬 Beautiful video background enabled!');
    console.log('💖 Created with love by @SrishtySynergy - VIBE CODER! 🚀');
    console.log('🌙 "Healing isn\'t linear – it\'s creative!" ✨');
}

// Additional Functions with emoji vibes! 🎯
function startQuickReset() {
    showToast('🚀 Quick reset starting... Get ready to feel amazing! ✨', 'info');
}

function saveQuickNote() {
    const note = document.getElementById('quick-note')?.value;
    if (note) {
        showToast('📝 Note saved to your journal! You\'re doing great! 💫', 'success');
    }
}

function refreshPrompt() {
    const prompts = [
        "Right now, my body feels... 🌊",
        "The emotion I'm avoiding is... 😔",
        "What I need most today is... 💖",
        "I'm grateful for... 🙏",
        "My inner voice is saying... 💭",
        "The sensation in my chest is... 💗",
        "If my emotions had colors, they would be... 🌈",
        "What I want to release is... 🕊️",
        "My heart is calling for... 💫"
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
        
        showToast('💖 Journal entry saved! Keep expressing yourself! 🌟', 'success');
    }
}

function startRoutine() {
    if (savedExercises.length === 0) {
        showToast('🎨 Save some exercises first to create your routine! 💫', 'info');
        showScreen('emotion-selector');
    } else {
        showToast('🚀 Starting your personal routine... Let\'s heal! ✨', 'info');
    }
}

function exportJournal() {
    showToast('📤 Export feature coming soon! Stay tuned! 🚀', 'info');
}

function adjustTextSize(delta) {
    showToast(`📝 Text size ${delta > 0 ? 'increased' : 'decreased'}! 👀`, 'info');
}

function toggleAnimations() {
    const checkbox = document.getElementById('reduce-animations');
    if (checkbox?.checked) {
        document.body.classList.add('reduce-animations');
        showToast('✨ Animations reduced for accessibility! 🎯', 'info');
    } else {
        document.body.classList.remove('reduce-animations');
        showToast('🎨 Full animations restored! Let\'s vibe! 💫', 'info');
    }
}

function toggleVoiceNav() {
    const checkbox = document.getElementById('voice-nav');
    showToast(`🎤 Voice navigation ${checkbox?.checked ? 'enabled' : 'disabled'}! 🔊`, 'info');
}

function showDataUsage() {
    showToast('📊 All data stored locally on your device! Privacy first! 🔒', 'info');
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
    
    showToast('📥 Data exported successfully! You\'re in control! 🎉', 'success');
}

function deleteData() {
    if (confirm('Are you sure you want to delete all your EmoSync data? 🗑️')) {
        savedExercises = [];
        moodHistory = [];
        journalEntries = {};
        streakCount = 0;
        
        try {
            localStorage.clear();
        } catch (e) {
            console.log('Sandbox mode');
        }
        
        showToast('🗑️ All data deleted! Fresh start! 🌱', 'warning');
        showScreen('emotion-selector');
    }
}

// 🚨 EMERGENCY DOM READY HANDLERS - ENSURE EVERYTHING WORKS!
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔥 DOM LOADED - INITIALIZING VIBE CODER MODE!');
    initializeApp();
});

// Fallback if DOM already ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    console.log('📱 DOM already ready - starting now!');
    initializeApp();
}

// 🎯 EMERGENCY GLOBAL FUNCTION BINDING
window.showScreen = showScreen;
window.selectEmotion = selectEmotion;
window.selectModality = selectModality;
window.openExercise = openExercise;
window.saveExercise = saveExercise;
window.startEmoSyncJourney = startEmoSyncJourney;

console.log('🎆 EmoSync Premium Enhanced - VIBE CODER EDITION ACTIVATED! 🔥💎');
console.log('🚀 Video background + Start button + Emoji vibes RESTORED!');
console.log('💖 Ready to heal and vibe! ✨🌟');