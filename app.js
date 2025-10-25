// EmoSync Premium JavaScript - Feel, Heal, and Rewire 💎
// Created with love by @SrishtySynergy ✨

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

    // REMOVED createFloatingPaths - no more animations!
}

// SIMPLIFIED Exercise Database - Will expand to 2000+ later 📚
const EXERCISE_DATABASE = {
    stress: {
        art: [
            {
                title: "The Stress Monster",
                instruction: "Draw your stress as a creature. Give it a name, shape, and color. Then transform it by adding calming elements - maybe flowers growing from it, or soft colors surrounding it. As you draw, repeat: 'I'm transforming my stress into strength.'",
                duration: "10-15 minutes",
                materials: "Paper, colored pencils/markers",
                affirmation: "I release tension through creative expression"
            },
            {
                title: "Tension Release Mandala", 
                instruction: "Draw a circle and fill it with repetitive patterns that represent your tension. Start with jagged lines for stress, then gradually make them smoother and more flowing as you work outward.",
                duration: "15-20 minutes",
                materials: "Paper, pen/pencils",
                affirmation: "I create order from chaos"
            }
        ],
        breathwork: [
            {
                title: "4-7-8 Stress Relief Breath",
                instruction: "Inhale through your nose for 4 counts, hold for 7 counts, exhale through your mouth for 8 counts making a 'whoosh' sound. Repeat 4 times. Feel your nervous system calming with each exhale.",
                duration: "3-5 minutes", 
                materials: "None needed",
                affirmation: "My breath is my anchor to calm"
            },
            {
                title: "Ocean Wave Breathing",
                instruction: "Breathe in slowly like a wave building, hold briefly at the peak, then exhale like the wave crashing on shore. Visualize each wave washing away your stress.",
                duration: "5-10 minutes",
                materials: "None needed", 
                affirmation: "I flow with life's natural rhythms"
            }
        ],
        somatic: [
            {
                title: "Progressive Stress Release",
                instruction: "Starting with your toes, tense each muscle group for 5 seconds, then release completely. Feel the contrast between tension and relaxation. Work your way up to your head.",
                duration: "10-15 minutes",
                materials: "Comfortable space to lie down",
                affirmation: "My body knows how to heal and relax"
            }
        ],
        cbt: [
            {
                title: "Stress Thought Challenge", 
                instruction: "Write down your stressful thoughts. Ask: Is this realistic? What evidence do I have? What would I tell a friend? Rewrite each thought in a balanced way.",
                duration: "10-15 minutes",
                materials: "Paper and pen",
                affirmation: "I have power over my thoughts"
            }
        ],
        rebt: [
            {
                title: "Must vs. Prefer Challenge",
                instruction: "Find thoughts with 'must,' 'should,' 'have to.' Replace them: 'I must be perfect' becomes 'I prefer to do well, but mistakes are human and okay.'",
                duration: "10-15 minutes", 
                materials: "Paper and pen",
                affirmation: "I prefer progress over perfection"
            }
        ],
        neural: [
            {
                title: "Calm Anchor Installation",
                instruction: "Recall a time you felt completely calm. Anchor this by pressing thumb and forefinger together while visualizing that moment. Practice daily to create an instant calm trigger.",
                duration: "10-15 minutes",
                materials: "Quiet space",
                affirmation: "I can access calm whenever I need it"
            }
        ],
        journaling: [
            {
                title: "Stress Story Rewrite", 
                instruction: "Write about your stress as if you're the hero of your story. What challenges are you facing? What strengths do you have? Write your triumphant ending.",
                duration: "15-20 minutes",
                materials: "Journal and pen",
                affirmation: "I am the author of my own story"
            }
        ],
        eft: [
            {
                title: "Stress Release Tapping",
                instruction: "Tap the karate chop point while saying: 'Even though I feel stressed, I deeply accept myself.' Then tap each point saying 'This stress' and finish with 'I choose calm.'",
                duration: "5-10 minutes", 
                materials: "None needed",
                affirmation: "I tap into my natural healing power"
            }
        ],
        emdr: [
            {
                title: "Butterfly Hug for Stress",
                instruction: "Cross arms over chest, hands on shoulders. Gently pat alternately left-right while thinking about stress. Feel it softening. End imagining stress leaving with each exhale.",
                duration: "5-10 minutes",
                materials: "None needed",
                affirmation: "I process and release what no longer serves me"
            }
        ],
        yoga: [
            {
                title: "Child's Pose Surrender", 
                instruction: "Kneel and sit back on heels, fold forward with arms extended. Breathe deeply and with each exhale, surrender stress to the earth. Stay 5-10 breaths.",
                duration: "5-10 minutes",
                materials: "Yoga mat or soft surface", 
                affirmation: "I surrender what I cannot control"
            }
        ]
    },
    
    // For now, copy stress exercises for other emotions (we'll customize later)
    anxiety: null, // Will be populated below
    anger: null,
    sadness: null, 
    fear: null,
    guilt: null,
    shame: null,
    overwhelm: null,
    loneliness: null,
    'low-confidence': null,
    'lack-motivation': null, 
    inconsistency: null,
    'self-doubt': null,
    perfectionism: null,
    rejection: null,
    comparison: null,
    resentment: null,
    numbness: null,
    hopelessness: null,
    burnout: null
};

// Populate other emotions with customized versions of stress exercises
const allEmotions = ['anxiety', 'anger', 'sadness', 'fear', 'guilt', 'shame', 'overwhelm', 'loneliness', 'low-confidence', 'lack-motivation', 'inconsistency', 'self-doubt', 'perfectionism', 'rejection', 'comparison', 'resentment', 'numbness', 'hopelessness', 'burnout'];

const emotionCustomizations = {
    anxiety: {
        titlePrefix: "Anxiety",
        context: "anxious thoughts",
        feeling: "worried and tense", 
        goal: "calm and centered"
    },
    anger: {
        titlePrefix: "Anger", 
        context: "angry feelings",
        feeling: "frustrated and heated",
        goal: "cool and composed"
    },
    sadness: {
        titlePrefix: "Sadness",
        context: "heavy sadness", 
        feeling: "down and heavy",
        goal: "lighter and hopeful"
    },
    // Add more customizations as needed...
};

allEmotions.forEach(emotion => {
    const custom = emotionCustomizations[emotion] || {
        titlePrefix: emotion.charAt(0).toUpperCase() + emotion.slice(1),
        context: `${emotion} feelings`,
        feeling: `${emotion}`,
        goal: "better and stronger"
    };
    
    // Create customized version of stress exercises
    EXERCISE_DATABASE[emotion] = JSON.parse(JSON.stringify(EXERCISE_DATABASE.stress));
    
    // Customize titles and instructions for this emotion
    Object.keys(EXERCISE_DATABASE[emotion]).forEach(modality => {
        EXERCISE_DATABASE[emotion][modality].forEach(exercise => {
            exercise.title = exercise.title.replace('Stress', custom.titlePrefix);
            exercise.instruction = exercise.instruction
                .replace(/stress/gi, custom.context)
                .replace(/stressed/gi, custom.feeling);
        });
    });
});

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
} catch (e) {
    console.log('🔒 localStorage not available (sandbox mode)');
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
            
            // NO MORE FLOATING PATHS - REMOVED!
            
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

// Select Emotion with Premium Animation
function selectEmotion(emotion) {
    currentEmotion = emotion;
    
    // Get exercises for this emotion
    currentExercises = EXERCISE_DATABASE[emotion] || EXERCISE_DATABASE.stress;
    
    showScreen('insight-hub');
    
    // Update emotion title with animation
    setTimeout(() => {
        updateEmotionDisplay(emotion);
    }, 200);
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
    if (!container || !currentExercises || !currentExercises[modality]) {
        if (container) {
            container.innerHTML = `
                <div class="no-exercises" style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(168, 181, 160, 0.1)); border-radius: 20px; margin: 20px 0;">
                    <div class="no-exercises-icon" style="font-size: 60px; margin-bottom: 20px;">💎</div>
                    <h3 style="color: #FAFAFA; margin-bottom: 16px;">More Exercises Coming Soon!</h3>
                    <p style="color: #A8B5A0; margin-bottom: 24px;">We're crafting more healing exercises for this modality.</p>
                    <button class="action-button gold" onclick="selectModality('art')">🎨 Try Art Therapy</button>
                </div>
            `;
        }
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
    const exercise = currentExercises[currentModality][exerciseIndex];
    if (!exercise) return;
    
    // Update exercise screen with animations
    document.getElementById('exercise-badge').textContent = `${getModalityIcon(currentModality)} ${getModalityName(currentModality)}`;
    document.getElementById('exercise-title').textContent = exercise.title;
    document.getElementById('exercise-instruction').textContent = exercise.instruction;
    
    // Enhanced exercise visual with encouragement
    const visual = document.getElementById('exercise-visual');
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
    
    showScreen('exercise-screen');
}

// Save Exercise to Toolkit with enhanced feedback
function saveExercise(emotion, modality, exerciseIndex) {
    const exercise = EXERCISE_DATABASE[emotion][modality][exerciseIndex];
    if (!exercise) return;
    
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

// Core functionality stubs (will implement when building full version)
function tryAnother() { showToast('🔄 Loading another exercise...', 'info'); }
function markAsDone() { showToast('✅ Great work! Keep building your practice!'); }
function saveToToolkit() { showToast('💖 Feature coming with full database!'); }
function initializeDashboard() { showToast('📊 Dashboard loading...', 'info'); }
function initializeJournal() { showToast('📝 Journal ready!', 'info'); }  
function initializeToolkit() { 
    const grid = document.getElementById('toolkit-grid');
    if (grid) {
        grid.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #FAFAFA;">
                <h3>🔨 Toolkit Coming Soon!</h3>
                <p>Save exercises to build your personal healing collection.</p>
            </div>
        `;
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
function initializeApp() {
    console.log('🌟 EmoSync Premium initializing...');
    
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
    console.log('💖 Created with love by @SrishtySynergy');
    console.log('🌙 "Healing isn\'t linear – it\'s creative."');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}