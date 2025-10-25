// EmoSync Exercise Database Loader 🔥
// Loads all 2000+ therapeutic exercises efficiently

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
            const response = await fetch(`./data/exercises/${emotionKey}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${emotionKey} exercises`);
            }
            
            const emotionData = await response.json();
            this.loadedEmotions.set(emotionKey, emotionData.modalities);
            this.isLoading.delete(emotionKey);
            
            console.log(`✅ Loaded ${emotionKey} exercises (${this.countExercises(emotionData.modalities)} total)`);
            return emotionData.modalities;
            
        } catch (error) {
            console.warn(`⚠️  Failed to load ${emotionKey}:`, error);
            this.isLoading.delete(emotionKey);
            
            // Fallback to basic exercises
            const fallbackExercises = this.createFallbackExercises(emotionKey);
            this.loadedEmotions.set(emotionKey, fallbackExercises);
            return fallbackExercises;
        }
    }

    countExercises(modalities) {
        return Object.values(modalities).reduce((total, exercises) => total + exercises.length, 0);
    }

    createFallbackExercises(emotionKey) {
        return {
            art: [{
                title: `${emotionKey} Expression Art`,
                instruction: `Express your ${emotionKey} through colors, shapes, and lines. Let your creativity guide you.`,
                duration: "15-20 minutes",
                materials: "Art supplies",
                affirmation: `I express and transform ${emotionKey} through creative energy`
            }],
            breathwork: [{
                title: `${emotionKey} Calming Breath`,
                instruction: "Breathe slowly and deeply, sending calm to areas affected by this emotion.",
                duration: "8-12 minutes", 
                materials: "None needed",
                affirmation: `I breathe peace into ${emotionKey} and find my center`
            }]
        };
    }

    async preloadPopularEmotions() {
        const popular = ['stress', 'anxiety', 'anger', 'sadness'];
        const promises = popular.map(emotion => this.loadEmotion(emotion));
        await Promise.all(promises);
        console.log('🚀 Preloaded popular emotions for fast access');
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

// Create global instance
window.exerciseLoader = new ExerciseLoader();

console.log('💎 EmoSync Exercise Loader ready - 2000+ therapeutic exercises available!');