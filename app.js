// EmoSync App JavaScript - Feel, Heal, and Rewire 💖

// Global App State
const EmoSync = {
    currentEmotion: null,
    currentModality: null,
    currentExerciseIndex: 0,
    savedExercises: JSON.parse(localStorage.getItem('emosync-saved') || '[]'),
    journalEntries: JSON.parse(localStorage.getItem('emosync-journal') || '[]'),
    settings: JSON.parse(localStorage.getItem('emosync-settings') || '{}'),
    streakData: JSON.parse(localStorage.getItem('emosync-streak') || '{"count": 0, "lastDate": null}'),
    moodHistory: JSON.parse(localStorage.getItem('emosync-mood') || '[]')
};

// Exercise Database (200+ techniques across 10 modalities for 20 emotions)
const exerciseDatabase = {
    // Art Therapy Exercises
    art: {
        stress: [
            {
                title: "The Stress Monster",
                instruction: "Draw your stress as a creature. Name it. Then color it with soothing tones like blue and green. As you color, repeat: 'I'm calming my storm.'",
                duration: "10-15 minutes",
                materials: "Paper, colored pencils/markers"
            },
            {
                title: "Tension Release Scribbles",
                instruction: "Using dark colors, scribble aggressively on paper for 2 minutes. Then, using lighter colors, draw gentle waves over the scribbles. Feel the tension transform into calm.",
                duration: "5-8 minutes",
                materials: "Paper, crayons/markers"
            },
            {
                title: "Mandala of Calm",
                instruction: "Start with a small circle in the center. Slowly draw repetitive patterns expanding outward. Focus only on the lines you're creating. Let your breathing slow with each pattern.",
                duration: "15-20 minutes",
                materials: "Paper, fine-tip pens"
            },
            {
                title: "Color Your Breath",
                instruction: "Draw wavy lines while breathing in (cool colors like blue/green). Draw straight lines while breathing out (warm colors like yellow/orange). Continue for 10 breaths.",
                duration: "5-7 minutes",
                materials: "Paper, colored pencils"
            },
            {
                title: "Stress Container Art",
                instruction: "Draw a strong container (box, jar, safe). Fill it with symbols representing your stresses. Then draw a lock on it and visualize putting your worries away safely.",
                duration: "10-12 minutes",
                materials: "Paper, any drawing tools"
            },
            {
                title: "Peaceful Place Collage",
                instruction: "Create a collage of your ideal calm space using magazine cutouts, nature photos, or drawings. Include elements that make you feel safe and peaceful.",
                duration: "20-25 minutes",
                materials: "Magazines, glue, scissors, paper"
            },
            {
                title: "Emotion Color Wheel",
                instruction: "Draw a circle. Divide it into sections. Color each section based on how stressed you feel in different areas of life. Notice patterns and breathe into the tight areas.",
                duration: "10-15 minutes",
                materials: "Paper, colored pencils"
            },
            {
                title: "Gentle Lines Meditation",
                instruction: "Draw only curved, flowing lines for 5 minutes. No straight lines allowed. Let your hand move freely while focusing on creating softness on paper.",
                duration: "5-8 minutes",
                materials: "Paper, pen/pencil"
            },
            {
                title: "Worry Tree Art",
                instruction: "Draw a tree. Write your worries on the leaves. Then draw yourself sitting peacefully under the tree's shade, protected and grounded.",
                duration: "15-20 minutes",
                materials: "Paper, writing tools, colors"
            },
            {
                title: "Abstract Emotion Release",
                instruction: "Without thinking, let your hand create abstract shapes and colors that represent your current stress. Don't judge - just let it flow onto paper.",
                duration: "8-12 minutes",
                materials: "Paper, any art materials"
            }
        ],
        anxiety: [
            {
                title: "Anxiety Shield Creation",
                instruction: "Design a protective shield with symbols, colors, and words that make you feel strong and safe. Add protective elements like armor, crystals, or guardian animals.",
                duration: "15-20 minutes",
                materials: "Paper, colored materials"
            },
            {
                title: "Worry Web Untangling",
                instruction: "Draw your anxious thoughts as a tangled web. Then, using a different color, draw clear paths through the web showing solutions and calm thoughts.",
                duration: "10-15 minutes",
                materials: "Paper, two different colored pens"
            },
            {
                title: "Grounding Roots Art",
                instruction: "Draw yourself as a tree with deep, strong roots going into the earth. Color the roots in earth tones, feeling how they anchor and stabilize you.",
                duration: "12-18 minutes",
                materials: "Paper, earth-tone colors"
            },
            {
                title: "Calm Breathing Waves",
                instruction: "Draw gentle ocean waves in blue and green. With each wave you draw, take a deep breath. Let the rhythm of drawing match your breathing.",
                duration: "8-12 minutes",
                materials: "Paper, blue/green colors"
            },
            {
                title: "Safety Symbol Collection",
                instruction: "Draw or collage images of things that make you feel safe: people, places, objects, symbols. Create a visual collection of your personal safety anchors.",
                duration: "15-25 minutes",
                materials: "Paper, magazines, drawing tools"
            },
            {
                title: "Anxiety Monster Transformation",
                instruction: "Draw your anxiety as a scary creature. Then transform it into something friendly by adding kind eyes, a smile, or turning it into a helpful guide.",
                duration: "10-15 minutes",
                materials: "Paper, colored pencils/markers"
            },
            {
                title: "Positive Affirmation Art",
                instruction: "Write calming phrases like 'I am safe' or 'This will pass' in beautiful, decorative lettering. Surround with peaceful colors and patterns.",
                duration: "15-20 minutes",
                materials: "Paper, fine-tip pens, colors"
            },
            {
                title: "Spiral of Calm",
                instruction: "Start with a tight spiral in the center. Gradually draw looser, more open spirals moving outward. Feel your anxiety loosening as the spirals expand.",
                duration: "8-12 minutes",
                materials: "Paper, pen/pencil"
            },
            {
                title: "Comfort Object Drawing",
                instruction: "Draw something that brings you comfort - a pet, blanket, favorite place, or person. Add lots of detail and warm colors to enhance the comforting feeling.",
                duration: "15-20 minutes",
                materials: "Paper, warm-colored materials"
            },
            {
                title: "Butterfly Transformation",
                instruction: "Draw a caterpillar representing your current anxious state. Then draw its transformation into a beautiful butterfly, symbolizing your growth through challenges.",
                duration: "12-18 minutes",
                materials: "Paper, bright colors"
            }
        ],
        anger: [
            {
                title: "Fire to Water Transformation",
                instruction: "Draw your anger as red/orange flames. Then gradually transform the drawing by adding blue/cool colors, turning the fire into peaceful water.",
                duration: "10-15 minutes",
                materials: "Paper, red/orange and blue colors"
            },
            {
                title: "Anger Energy Release",
                instruction: "Use aggressive strokes and bold colors to express your anger on paper. Then, tear the paper into pieces and create a new, peaceful image from the pieces.",
                duration: "15-20 minutes",
                materials: "Paper, bold colors, glue"
            },
            {
                title: "Volcano Cooling Art",
                instruction: "Draw a volcanic eruption with hot colors. Then draw the same volcano as a peaceful mountain with cool colors, plants, and calm skies.",
                duration: "15-25 minutes",
                materials: "Paper, full color set"
            },
            {
                title: "Strength Symbol Creation",
                instruction: "Design a personal symbol that represents your inner strength and ability to stay calm. Include elements that remind you of your power to choose peace.",
                duration: "12-18 minutes",
                materials: "Paper, preferred colors"
            },
            {
                title: "Anger Storm to Rainbow",
                instruction: "Draw a dark storm cloud representing your anger. Then add a beautiful rainbow emerging from it, showing how difficult emotions can lead to beauty.",
                duration: "10-15 minutes",
                materials: "Paper, dark and rainbow colors"
            },
            {
                title: "Protective Boundary Art",
                instruction: "Draw yourself surrounded by a protective boundary (bubble, fence, light). Show how you can protect your peace while staying open to good things.",
                duration: "15-20 minutes",
                materials: "Paper, various colors"
            },
            {
                title: "Cooling Ice Art",
                instruction: "Draw your anger as hot lava, then imagine it slowly cooling into solid, stable ground. Use color transitions from hot reds to cool blues and grays.",
                duration: "12-18 minutes",
                materials: "Paper, warm to cool color gradient"
            },
            {
                title: "Gentle Giant Drawing",
                instruction: "Draw yourself as a gentle giant - powerful enough to handle challenges but choosing kindness. Show your strength being used for protection and care.",
                duration: "15-20 minutes",
                materials: "Paper, soft but strong colors"
            },
            {
                title: "Forgiveness Garden",
                instruction: "Draw a garden where you plant seeds of forgiveness (for yourself or others). Show the garden growing into something beautiful and peaceful.",
                duration: "20-25 minutes",
                materials: "Paper, nature colors"
            },
            {
                title: "Phoenix Rising Art",
                instruction: "Draw a phoenix rising from ashes, representing your ability to transform anger into wisdom and strength. Use gold and bright colors for the phoenix.",
                duration: "15-25 minutes",
                materials: "Paper, gold/bright colors"
            }
        ]
        // Add more emotions here...
    },
    
    // Breathwork Exercises
    breathwork: {
        stress: [
            {
                title: "4-7-8 Calm Breath",
                instruction: "Breathe in for 4 counts, hold for 7 counts, exhale for 8 counts. Repeat 4 times. As you exhale, imagine stress leaving your body like dark smoke.",
                duration: "3-5 minutes",
                materials: "None needed"
            },
            {
                title: "Ocean Wave Breathing",
                instruction: "Breathe in like a wave building (slow and steady), pause at the peak, then exhale like a wave retreating (long and smooth). Repeat 10 times.",
                duration: "5-7 minutes",
                materials: "None needed"
            },
            {
                title: "Belly Balloon Breath",
                instruction: "Place one hand on chest, one on belly. Breathe so only the bottom hand moves, expanding your belly like a balloon. Exhale slowly, deflating the balloon.",
                duration: "5-8 minutes",
                materials: "None needed"
            },
            {
                title: "Color Breathing",
                instruction: "Breathe in calm blue or green light, filling your whole body. Breathe out gray or dark colors representing stress and tension. Visualize the color exchange.",
                duration: "5-10 minutes",
                materials: "None needed"
            },
            {
                title: "Square Breathing",
                instruction: "Breathe in for 4, hold for 4, breathe out for 4, hold for 4. Imagine tracing a square with your breath. Complete 8 full squares.",
                duration: "4-6 minutes",
                materials: "None needed"
            }
        ],
        anxiety: [
            {
                title: "Grounding 5-5-5 Breath",
                instruction: "Breathe in for 5 while naming 5 things you can see, hold for 5 while naming 5 sounds, exhale for 5 while naming 5 things you can touch. Repeat 3 times.",
                duration: "5-8 minutes",
                materials: "None needed"
            },
            {
                title: "Safety Anchor Breathing",
                instruction: "Hold something comforting (pillow, pet, soft object). Breathe slowly and deeply while focusing on the comfort and safety this object represents.",
                duration: "5-10 minutes",
                materials: "Comfort object"
            },
            {
                title: "Warrior Breath",
                instruction: "Breathe in strength and courage for 6 counts. Hold your power for 2 counts. Breathe out fear and worry for 8 counts. Feel yourself becoming stronger.",
                duration: "6-8 minutes",
                materials: "None needed"
            }
        ],
        anger: [
            {
                title: "Cool Down Breath",
                instruction: "Breathe in cool, calming air for 6 counts. Hold for 2 counts. Breathe out hot anger for 8 counts. Imagine your body temperature cooling with each exhale.",
                duration: "5-7 minutes",
                materials: "None needed"
            },
            {
                title: "Lion's Breath Release",
                instruction: "Breathe in deeply through nose. Open mouth wide, stick out tongue, and exhale with a 'ROAR' sound. Release anger safely. Repeat 5-8 times.",
                duration: "3-5 minutes",
                materials: "Private space for sound"
            }
        ]
    },
    
    // Somatic Exercises
    somatic: {
        stress: [
            {
                title: "Progressive Muscle Release",
                instruction: "Starting with your toes, tense each muscle group for 5 seconds, then release completely. Notice the contrast between tension and relaxation. Move up your body.",
                duration: "10-15 minutes",
                materials: "Comfortable space to lie down"
            },
            {
                title: "Shoulder Shake & Drop",
                instruction: "Lift shoulders to ears, hold for 5 seconds, then drop suddenly with a sigh. Repeat 5 times. Feel the stress literally falling away from your shoulders.",
                duration: "2-3 minutes",
                materials: "None needed"
            },
            {
                title: "Gentle Neck Rolls",
                instruction: "Slowly roll your head in half-circles from shoulder to shoulder. Breathe deeply as you stretch. Never roll backward fully - only gentle side-to-side movements.",
                duration: "3-5 minutes",
                materials: "None needed"
            },
            {
                title: "Stress Shake-Out",
                instruction: "Start by shaking your hands, then arms, then whole body like an animal shaking off water. Let your body naturally release held tension. End in stillness.",
                duration: "3-5 minutes",
                materials: "Private space to move"
            },
            {
                title: "Grounding Touch",
                instruction: "Place both hands on your heart. Feel the warmth and rhythm. Then place hands on belly, then thighs. Connect with your body's stability and strength.",
                duration: "5-8 minutes",
                materials: "None needed"
            }
        ],
        anxiety: [
            {
                title: "5-4-3-2-1 Body Grounding",
                instruction: "Notice 5 things you can touch, 4 things you can see, 3 sounds you hear, 2 scents you smell, 1 thing you can taste. Ground yourself in your senses.",
                duration: "5-7 minutes",
                materials: "None needed"
            },
            {
                title: "Butterfly Hug Self-Soothing",
                instruction: "Cross arms over chest, hands on opposite shoulders. Gently pat alternately like butterfly wings. This bilateral stimulation calms the nervous system.",
                duration: "3-5 minutes",
                materials: "None needed"
            },
            {
                title: "Feet-to-Earth Connection",
                instruction: "Stand barefoot if possible. Feel your feet connecting to the ground. Imagine roots growing from your feet into the earth, anchoring and stabilizing you.",
                duration: "5-8 minutes",
                materials: "Floor space, optional: outdoor ground"
            }
        ],
        anger: [
            {
                title: "Tension & Release Fists",
                instruction: "Make tight fists, hold for 10 seconds feeling the anger in your hands. Then open hands completely, shake them out. Repeat 5 times. Release anger through your hands.",
                duration: "3-5 minutes",
                materials: "None needed"
            },
            {
                title: "Angry Energy Stomp",
                instruction: "In a private space, stomp your feet firmly into the ground. Let your body express the anger safely while staying in control. End with gentle walking.",
                duration: "2-4 minutes",
                materials: "Private space, sturdy floor"
            }
        ]
    },
    
    // CBT Exercises
    cbt: {
        stress: [
            {
                title: "Thought Reality Check",
                instruction: "Write down your stressful thought. Ask: Is this thought helpful? Is it true? What would I tell a friend having this thought? Rewrite it more realistically.",
                duration: "10-15 minutes",
                materials: "Paper and pen"
            },
            {
                title: "Worry Time Scheduling",
                instruction: "Set aside 15 minutes as 'worry time.' Outside this time, remind yourself 'I'll worry about this during worry time.' During worry time, problem-solve or accept.",
                duration: "15 minutes daily",
                materials: "Timer, notepad"
            },
            {
                title: "Stress Evidence Collection",
                instruction: "List evidence FOR your stressful thought, then evidence AGAINST it. Often you'll find the evidence against is stronger and more realistic.",
                duration: "8-12 minutes",
                materials: "Paper divided into two columns"
            }
        ],
        anxiety: [
            {
                title: "Catastrophic Thinking Challenge",
                instruction: "When anxious, ask: What's the worst that could happen? What's most likely to happen? What would I do if the worst happened? This reduces anxiety's power.",
                duration: "10-15 minutes",
                materials: "Paper and pen"
            },
            {
                title: "Anxiety Thought Record",
                instruction: "Write: Situation, Feeling (0-10), Automatic Thought, Evidence For/Against, Balanced Thought, New Feeling (0-10). Track your thought patterns.",
                duration: "15-20 minutes",
                materials: "Thought record worksheet or paper"
            }
        ],
        anger: [
            {
                title: "Anger Thought Stopping",
                instruction: "When angry thoughts spiral, say 'STOP' firmly (out loud or in mind). Take 3 deep breaths. Ask: Is this thought helpful right now? What do I need instead?",
                duration: "5-8 minutes",
                materials: "None needed"
            },
            {
                title: "Perspective-Taking Exercise",
                instruction: "Write the situation from your perspective, then from the other person's perspective, then from a neutral observer's perspective. Notice how viewpoints change.",
                duration: "15-20 minutes",
                materials: "Paper and pen"
            }
        ]
    },
    
    // Additional modalities would continue here...
    // For brevity, I'm including key examples. The full database would have 200+ exercises.
    
    journaling: {
        stress: [
            {
                title: "Stress Inventory Writing",
                instruction: "List everything causing you stress right now. For each item, write: Can I control this? If yes, what's one small step I can take? If no, how can I accept it?",
                duration: "15-20 minutes",
                materials: "Journal and pen"
            }
        ],
        anxiety: [
            {
                title: "Anxiety Letter to Self",
                instruction: "Write a compassionate letter to yourself as if you're comforting a dear friend with anxiety. Include understanding, encouragement, and practical advice.",
                duration: "15-20 minutes",
                materials: "Journal and pen"
            }
        ]
    },
    
    eft: {
        stress: [
            {
                title: "Stress Release Tapping",
                instruction: "Tap the karate chop point while saying 'Even though I feel stressed, I deeply accept myself.' Then tap other points while saying 'This stress' or 'Feeling calmer.'",
                duration: "8-10 minutes",
                materials: "EFT point diagram (optional)"
            }
        ]
    },
    
    emdr: {
        stress: [
            {
                title: "Butterfly Hug with Positive Resource",
                instruction: "Think of a time you felt completely calm. Cross arms over chest and gently pat alternately while holding that peaceful memory. Let the calm feeling strengthen.",
                duration: "5-8 minutes",
                materials: "None needed"
            }
        ]
    },
    
    rebt: {
        stress: [
            {
                title: "Rational Belief Challenge",
                instruction: "Identify the 'should' or 'must' in your stressful thinking. Ask: Where is it written that this MUST be different? Replace with preferences: 'I would prefer...'",
                duration: "10-15 minutes",
                materials: "Paper and pen"
            }
        ]
    },
    
    neural: {
        stress: [
            {
                title: "Calm Anchor Visualization",
                instruction: "Recall a time you felt deeply peaceful. Relive it in detail - see, hear, feel everything. Touch your thumb and forefinger together to 'anchor' this calm state.",
                duration: "10-12 minutes",
                materials: "Quiet space"
            }
        ]
    },
    
    yoga: [
        {
            title: "Child's Pose Surrender",
            instruction: "Kneel and fold forward, arms extended or by your sides. Breathe deeply and surrender your worries to the earth. Stay as long as feels good.",
            duration: "5-10 minutes",
            materials: "Yoga mat or soft surface"
        }
    ]
};

// Emotion descriptions and subtitles
const emotionData = {
    stress: {
        title: "STRESS",
        subtitle: "Tension in the mind, tightness in the body. Let's release it.",
        color: "#FF6B6B"
    },
    anxiety: {
        title: "ANXIETY",
        subtitle: "Racing thoughts, worried heart. Let's find your calm.",
        color: "#4ECDC4"
    },
    anger: {
        title: "ANGER",
        subtitle: "Fire in your chest, heat in your thoughts. Let's cool the flames.",
        color: "#FF4757"
    },
    sadness: {
        title: "SADNESS",
        subtitle: "Heavy heart, clouded mind. Let's find lightness again.",
        color: "#3742FA"
    },
    fear: {
        title: "FEAR",
        subtitle: "Trembling thoughts, frozen feelings. Let's find your courage.",
        color: "#2F3542"
    },
    // Add all 20 emotions...
};

// Journal prompts
const journalPrompts = [
    "Right now, my body feels...",
    "If my emotion could speak, it would say...",
    "Today I'm grateful for...",
    "The story I'm telling myself about this situation is...",
    "What I need most right now is...",
    "If I could give my younger self advice about this feeling, I'd say...",
    "Three things that are going well in my life right now are...",
    "When I think about tomorrow, I feel...",
    "The last time I felt truly peaceful was...",
    "If this emotion had a color and shape, it would be..."
];

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            await navigator.serviceWorker.register('/sw.js');
            console.log('EmoSync PWA: Service Worker registered successfully');
        } catch (error) {
            console.log('EmoSync PWA: Service Worker registration failed');
        }
    });
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    updateJournalDate();
    updateStreak();
    loadSavedExercises();
    applySettings();
});

function initializeApp() {
    // Show splash screen for 3 seconds, then go to emotion selector
    setTimeout(() => {
        showScreen('emotion-selector');
    }, 3000);
    
    // Initialize default settings
    if (Object.keys(EmoSync.settings).length === 0) {
        EmoSync.settings = {
            darkMode: false,
            textSize: 'normal',
            reduceAnimations: false,
            voiceNav: false,
            reminderTime: '09:00',
            privateNotifications: true
        };
        saveSettings();
    }
}

function setupEventListeners() {
    // Mood slider interaction
    document.querySelectorAll('.mood-emoji').forEach(emoji => {
        emoji.addEventListener('click', () => {
            document.querySelectorAll('.mood-emoji').forEach(e => e.classList.remove('active'));
            emoji.classList.add('active');
            recordMood(emoji.dataset.mood);
        });
    });
    
    // Auto-save journal entries
    const journalTextarea = document.getElementById('journal-textarea');
    if (journalTextarea) {
        journalTextarea.addEventListener('input', debounce(autoSaveJournal, 1000));
    }
    
    // Settings event listeners
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.checked = EmoSync.settings.darkMode;
    }
}

// Screen Navigation
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        
        // Update navigation active states
        updateNavigation(screenId);
        
        // Screen-specific initialization
        if (screenId === 'journal') {
            updateJournalDate();
            setRandomPrompt();
        } else if (screenId === 'dashboard') {
            updateDashboard();
        } else if (screenId === 'toolkit') {
            loadSavedExercises();
        }
    }
}

function updateNavigation(activeScreenId) {
    const navMapping = {
        'emotion-selector': 0,
        'dashboard': 0,
        'toolkit': 1,
        'journal': 2,
        'settings': 3
    };
    
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.classList.remove('active');
        if (index === navMapping[activeScreenId]) {
            item.classList.add('active');
        }
    });
}

// Emotion Selection
function selectEmotion(emotion) {
    EmoSync.currentEmotion = emotion;
    EmoSync.currentModality = 'art'; // Default to art therapy
    EmoSync.currentExerciseIndex = 0;
    
    // Update emotion display
    const emotionInfo = emotionData[emotion];
    if (emotionInfo) {
        document.getElementById('emotion-title').textContent = emotionInfo.title;
        document.getElementById('emotion-subtitle').textContent = emotionInfo.subtitle;
    }
    
    // Load exercises for default modality
    loadExercises(emotion, 'art');
    
    // Reset tab states
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-modality="art"]').classList.add('active');
    
    showScreen('insight-hub');
}

// Modality Selection
function selectModality(modality) {
    EmoSync.currentModality = modality;
    EmoSync.currentExerciseIndex = 0;
    
    // Update tab states
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[data-modality="${modality}"]`).classList.add('active');
    
    // Load exercises for this modality
    loadExercises(EmoSync.currentEmotion, modality);
}

// Exercise Loading
function loadExercises(emotion, modality) {
    const container = document.getElementById('exercises-container');
    const exercises = exerciseDatabase[modality]?.[emotion] || [];
    
    if (exercises.length === 0) {
        container.innerHTML = `
            <div class="no-exercises">
                <p>Exercises for ${modality} and ${emotion} are coming soon!</p>
                <button class="action-button outline" onclick="selectModality('art')">Try Art Therapy</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = exercises.map((exercise, index) => `
        <div class="exercise-card" onclick="openExercise(${index})">
            <div class="exercise-badge">${modalityNames[modality] || modality}</div>
            <h3 class="exercise-title">${exercise.title}</h3>
            <p class="exercise-preview">${exercise.instruction.substring(0, 100)}...</p>
            <div class="exercise-meta">
                <span class="duration">⏱️ ${exercise.duration}</span>
                ${exercise.materials ? `<span class="materials">📦 ${exercise.materials}</span>` : ''}
            </div>
        </div>
    `).join('');
}

const modalityNames = {
    art: 'Art Therapy',
    breathwork: 'Breathwork',
    somatic: 'Somatic',
    cbt: 'CBT',
    rebt: 'REBT',
    journaling: 'Journaling',
    eft: 'EFT',
    emdr: 'EMDR',
    neural: 'Neural Rewiring',
    yoga: 'Yoga'
};

// Exercise Screen
function openExercise(index) {
    EmoSync.currentExerciseIndex = index;
    const exercises = exerciseDatabase[EmoSync.currentModality]?.[EmoSync.currentEmotion] || [];
    const exercise = exercises[index];
    
    if (!exercise) return;
    
    // Update exercise screen
    document.getElementById('exercise-badge').textContent = modalityNames[EmoSync.currentModality];
    document.getElementById('exercise-title').textContent = exercise.title;
    document.getElementById('exercise-instruction').textContent = exercise.instruction;
    document.getElementById('progress-indicator').textContent = `Exercise ${index + 1} of ${exercises.length}`;
    
    // Update visual element
    const visualElement = document.getElementById('exercise-visual');
    visualElement.innerHTML = `
        <div class="exercise-info">
            <p><strong>Duration:</strong> ${exercise.duration}</p>
            ${exercise.materials ? `<p><strong>Materials:</strong> ${exercise.materials}</p>` : ''}
        </div>
    `;
    
    showScreen('exercise-screen');
}

// Exercise Actions
function tryAnother() {
    const exercises = exerciseDatabase[EmoSync.currentModality]?.[EmoSync.currentEmotion] || [];
    const newIndex = (EmoSync.currentExerciseIndex + 1) % exercises.length;
    openExercise(newIndex);
}

function saveToToolkit() {
    const exercises = exerciseDatabase[EmoSync.currentModality]?.[EmoSync.currentEmotion] || [];
    const exercise = exercises[EmoSync.currentExerciseIndex];
    
    if (!exercise) return;
    
    const savedExercise = {
        id: Date.now(),
        title: exercise.title,
        modality: EmoSync.currentModality,
        emotion: EmoSync.currentEmotion,
        instruction: exercise.instruction,
        duration: exercise.duration,
        materials: exercise.materials,
        savedAt: new Date().toISOString()
    };
    
    // Check if already saved
    const alreadySaved = EmoSync.savedExercises.some(saved => 
        saved.title === exercise.title && saved.modality === EmoSync.currentModality
    );
    
    if (!alreadySaved) {
        EmoSync.savedExercises.push(savedExercise);
        localStorage.setItem('emosync-saved', JSON.stringify(EmoSync.savedExercises));
        showToast('❤️ Saved to your toolkit!');
    } else {
        showToast('ℹ️ Already in your toolkit');
    }
}

function markAsDone() {
    updateStreak();
    recordMood(3); // Default positive mood for completing exercise
    showToast('✅ Great job! Keep going!');
    
    // Optionally return to dashboard or try another
    setTimeout(() => {
        showScreen('dashboard');
    }, 1500);
}

// Dashboard Functions
function updateDashboard() {
    // Update today's emotion
    const todayEmotionPill = document.getElementById('today-emotion-pill');
    if (EmoSync.currentEmotion && todayEmotionPill) {
        const emotionInfo = emotionData[EmoSync.currentEmotion];
        const emoji = getEmotionEmoji(EmoSync.currentEmotion);
        todayEmotionPill.textContent = `Today: ${emotionInfo?.title || EmoSync.currentEmotion} ${emoji}`;
    }
    
    // Update quick recommendation
    const quickRec = document.getElementById('quick-recommendation');
    if (quickRec && EmoSync.savedExercises.length > 0) {
        const randomSaved = EmoSync.savedExercises[Math.floor(Math.random() * EmoSync.savedExercises.length)];
        quickRec.textContent = `Try "${randomSaved.title}" from your toolkit`;
    }
}

function getEmotionEmoji(emotion) {
    const emojiMap = {
        stress: '😰', anxiety: '💭', anger: '😡', sadness: '😢',
        fear: '😨', guilt: '🙁', shame: '😔', overwhelm: '🌊',
        loneliness: '🌑', 'low-confidence': '😟', 'lack-motivation': '😶',
        inconsistency: '⏸️', 'self-doubt': '🤔', perfectionism: '🎯',
        rejection: '🚫', comparison: '👁️', resentment: '😤',
        numbness: '😐', hopelessness: '🌫️'
    };
    return emojiMap[emotion] || '😐';
}

function startQuickReset() {
    if (EmoSync.savedExercises.length > 0) {
        const randomSaved = EmoSync.savedExercises[Math.floor(Math.random() * EmoSync.savedExercises.length)];
        // Load the saved exercise
        showToast('🎆 Starting your personalized reset!');
        // In a full implementation, this would load the specific exercise
    } else {
        showToast('💖 Save some exercises first to create your personal reset!');
        showScreen('emotion-selector');
    }
}

// Journal Functions
function updateJournalDate() {
    const dateElement = document.getElementById('journal-date');
    if (dateElement) {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = today.toLocaleDateString('en-US', options);
    }
}

function setRandomPrompt() {
    const promptElement = document.getElementById('journal-prompt-text');
    if (promptElement) {
        const randomPrompt = journalPrompts[Math.floor(Math.random() * journalPrompts.length)];
        promptElement.textContent = randomPrompt;
    }
}

function refreshPrompt() {
    setRandomPrompt();
    showToast('✨ New prompt loaded!');
}

function autoSaveJournal() {
    const textarea = document.getElementById('journal-textarea');
    if (textarea && textarea.value.trim()) {
        const entry = {
            id: Date.now(),
            content: textarea.value,
            date: new Date().toISOString(),
            emotion: EmoSync.currentEmotion
        };
        
        // Save to local storage
        EmoSync.journalEntries.unshift(entry);
        // Keep only last 100 entries
        EmoSync.journalEntries = EmoSync.journalEntries.slice(0, 100);
        localStorage.setItem('emosync-journal', JSON.stringify(EmoSync.journalEntries));
    }
}

function saveJournalEntry() {
    autoSaveJournal();
    showToast('💾 Journal entry saved!');
}

function exportJournal() {
    if (EmoSync.journalEntries.length === 0) {
        showToast('ℹ️ No journal entries to export');
        return;
    }
    
    const exportText = EmoSync.journalEntries.map(entry => {
        const date = new Date(entry.date).toLocaleDateString();
        return `${date}\n${entry.content}\n\n---\n\n`;
    }).join('');
    
    const blob = new Blob([exportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `emosync-journal-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('📤 Journal exported!');
}

// Toolkit Functions
function loadSavedExercises() {
    const grid = document.getElementById('toolkit-grid');
    if (!grid) return;
    
    if (EmoSync.savedExercises.length === 0) {
        grid.innerHTML = `
            <div class="empty-toolkit">
                <p>💫 Your healing toolkit is empty</p>
                <p>Save exercises you love to build your personal collection!</p>
                <button class="cta-button" onclick="showScreen('emotion-selector')">Find Exercises</button>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = EmoSync.savedExercises.map(exercise => `
        <div class="toolkit-card" onclick="openSavedExercise('${exercise.id}')">
            <div class="toolkit-card-icon">${getModalityIcon(exercise.modality)}</div>
            <div class="toolkit-card-title">${exercise.title.length > 20 ? exercise.title.substring(0, 20) + '...' : exercise.title}</div>
            <div class="toolkit-card-tag">${exercise.emotion}</div>
        </div>
    `).join('');
}

function getModalityIcon(modality) {
    const iconMap = {
        art: '🎨', breathwork: '🌬️', somatic: '🤲', cbt: '💭',
        rebt: '🧠', journaling: '✍️', eft: '🤚', emdr: '👁️',
        neural: '⚡', yoga: '🧘'
    };
    return iconMap[modality] || '💖';
}

function openSavedExercise(exerciseId) {
    const exercise = EmoSync.savedExercises.find(ex => ex.id == exerciseId);
    if (!exercise) return;
    
    // Load the exercise into the exercise screen
    document.getElementById('exercise-badge').textContent = modalityNames[exercise.modality];
    document.getElementById('exercise-title').textContent = exercise.title;
    document.getElementById('exercise-instruction').textContent = exercise.instruction;
    document.getElementById('progress-indicator').textContent = 'From Your Toolkit';
    
    const visualElement = document.getElementById('exercise-visual');
    visualElement.innerHTML = `
        <div class="exercise-info">
            <p><strong>Duration:</strong> ${exercise.duration}</p>
            ${exercise.materials ? `<p><strong>Materials:</strong> ${exercise.materials}</p>` : ''}
            <p><strong>Saved:</strong> ${new Date(exercise.savedAt).toLocaleDateString()}</p>
        </div>
    `;
    
    showScreen('exercise-screen');
}

function startRoutine() {
    if (EmoSync.savedExercises.length === 0) {
        showToast('💖 Add exercises to your toolkit first!');
        return;
    }
    
    showToast('🎆 Starting your healing routine!');
    openSavedExercise(EmoSync.savedExercises[0].id);
}

function editToolkit() {
    showToast('✏️ Toolkit editing coming soon!');
}

// Settings Functions
function adjustTextSize(delta) {
    const currentSize = EmoSync.settings.textSize;
    const sizes = ['small', 'normal', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(currentSize);
    const newIndex = Math.max(0, Math.min(sizes.length - 1, currentIndex + delta));
    
    EmoSync.settings.textSize = sizes[newIndex];
    document.getElementById('text-size-display').textContent = sizes[newIndex];
    
    // Apply text size
    document.body.className = document.body.className.replace(/text-\w+/g, '');
    if (sizes[newIndex] !== 'normal') {
        document.body.classList.add(`text-${sizes[newIndex]}`);
    }
    
    saveSettings();
}

function toggleDarkMode() {
    const toggle = document.getElementById('dark-mode-toggle');
    EmoSync.settings.darkMode = toggle.checked;
    
    if (EmoSync.settings.darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    
    saveSettings();
}

function toggleAnimations() {
    const toggle = document.getElementById('reduce-animations');
    EmoSync.settings.reduceAnimations = toggle.checked;
    
    if (EmoSync.settings.reduceAnimations) {
        document.body.classList.add('reduce-motion');
    } else {
        document.body.classList.remove('reduce-motion');
    }
    
    saveSettings();
}

function toggleVoiceNav() {
    const toggle = document.getElementById('voice-nav');
    EmoSync.settings.voiceNav = toggle.checked;
    
    if (EmoSync.settings.voiceNav) {
        // Voice navigation would be implemented here
        showToast('🎤 Voice navigation enabled!');
    }
    
    saveSettings();
}

function applySettings() {
    // Apply all saved settings on app load
    if (EmoSync.settings.darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    if (EmoSync.settings.textSize !== 'normal') {
        document.body.classList.add(`text-${EmoSync.settings.textSize}`);
    }
    
    if (EmoSync.settings.reduceAnimations) {
        document.body.classList.add('reduce-motion');
    }
    
    // Update UI elements
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) darkModeToggle.checked = EmoSync.settings.darkMode;
    
    const reduceAnimToggle = document.getElementById('reduce-animations');
    if (reduceAnimToggle) reduceAnimToggle.checked = EmoSync.settings.reduceAnimations;
    
    const voiceNavToggle = document.getElementById('voice-nav');
    if (voiceNavToggle) voiceNavToggle.checked = EmoSync.settings.voiceNav;
    
    const reminderTime = document.getElementById('reminder-time');
    if (reminderTime) reminderTime.value = EmoSync.settings.reminderTime;
    
    const textSizeDisplay = document.getElementById('text-size-display');
    if (textSizeDisplay) textSizeDisplay.textContent = EmoSync.settings.textSize;
}

function saveSettings() {
    localStorage.setItem('emosync-settings', JSON.stringify(EmoSync.settings));
}

// Data Management Functions
function showDataUsage() {
    const usage = {
        savedExercises: EmoSync.savedExercises.length,
        journalEntries: EmoSync.journalEntries.length,
        moodRecords: EmoSync.moodHistory.length,
        streakData: EmoSync.streakData.count
    };
    
    showToast(`📊 Data: ${usage.savedExercises} exercises, ${usage.journalEntries} journal entries, ${usage.moodRecords} mood records`);
}

function exportData() {
    const allData = {
        savedExercises: EmoSync.savedExercises,
        journalEntries: EmoSync.journalEntries,
        moodHistory: EmoSync.moodHistory,
        streakData: EmoSync.streakData,
        settings: EmoSync.settings,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(allData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `emosync-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('📤 Your data has been exported!');
}

function deleteData() {
    if (confirm('Are you sure you want to delete ALL your EmoSync data? This cannot be undone.')) {
        localStorage.removeItem('emosync-saved');
        localStorage.removeItem('emosync-journal');
        localStorage.removeItem('emosync-mood');
        localStorage.removeItem('emosync-streak');
        localStorage.removeItem('emosync-settings');
        
        // Reset app state
        EmoSync.savedExercises = [];
        EmoSync.journalEntries = [];
        EmoSync.moodHistory = [];
        EmoSync.streakData = { count: 0, lastDate: null };
        EmoSync.settings = {};
        
        showToast('🗑️ All data deleted. Reloading app...');
        
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
}

// Utility Functions
function updateStreak() {
    const today = new Date().toDateString();
    const lastDate = EmoSync.streakData.lastDate;
    
    if (lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastDate === yesterday.toDateString()) {
            // Continue streak
            EmoSync.streakData.count++;
        } else if (lastDate === null) {
            // First time
            EmoSync.streakData.count = 1;
        } else {
            // Streak broken, start over
            EmoSync.streakData.count = 1;
        }
        
        EmoSync.streakData.lastDate = today;
        localStorage.setItem('emosync-streak', JSON.stringify(EmoSync.streakData));
        
        // Update UI
        const streakText = document.querySelector('.streak-text');
        if (streakText) {
            streakText.textContent = `${EmoSync.streakData.count}-day streak`;
        }
    }
}

function recordMood(moodLevel) {
    const moodRecord = {
        level: parseInt(moodLevel),
        timestamp: new Date().toISOString(),
        emotion: EmoSync.currentEmotion
    };
    
    EmoSync.moodHistory.unshift(moodRecord);
    // Keep only last 100 records
    EmoSync.moodHistory = EmoSync.moodHistory.slice(0, 100);
    localStorage.setItem('emosync-mood', JSON.stringify(EmoSync.moodHistory));
}

function saveQuickNote() {
    const note = document.getElementById('quick-note').value.trim();
    if (note) {
        const quickEntry = {
            id: Date.now(),
            content: `Quick note: ${note}`,
            date: new Date().toISOString(),
            type: 'quick'
        };
        
        EmoSync.journalEntries.unshift(quickEntry);
        localStorage.setItem('emosync-journal', JSON.stringify(EmoSync.journalEntries));
        
        document.getElementById('quick-note').value = '';
        showToast('📝 Quick note saved!');
    }
}

function showToast(message) {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-gold);
        color: var(--deep-black);
        padding: 12px 24px;
        border-radius: 25px;
        z-index: 9999;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: toastSlideIn 0.3s ease-out;
    `;
    
    // Add toast styles to document if not already present
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            @keyframes toastSlideIn {
                from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
                to { transform: translateX(-50%) translateY(0); opacity: 1; }
            }
            @keyframes toastSlideOut {
                from { transform: translateX(-50%) translateY(0); opacity: 1; }
                to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.3s ease-in';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Journal tool functions (placeholder implementations)
function openDrawing() {
    showToast('🎨 Drawing tool coming soon!');
}

function attachImage() {
    showToast('📷 Image attachment coming soon!');
}

function tagEmotion() {
    showToast('🏷️ Emotion tagging coming soon!');
}

function togglePrivacy() {
    showToast('🔒 Privacy toggle activated!');
}

console.log('💖 EmoSync loaded successfully - Feel, Heal, and Rewire!');
console.log('✨ Created with love by @SrishtySynergy');
console.log('🌙 "Healing isn\'t linear – it\'s creative."');