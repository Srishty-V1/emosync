// BULLETPROOF VIDEO BACKGROUND INJECTOR
// Injects video background into ANY HTML served, bypassing build/framework issues

(function() {
    'use strict';
    
    console.log('🎬 BULLETPROOF VIDEO INJECTOR LOADING...');
    
    function createVideoBackground() {
        // Remove any existing video containers to prevent duplicates
        const existing = document.querySelector('.video-bg-container');
        if (existing) {
            existing.remove();
        }
        
        // Create video container with rounded clipping
        const container = document.createElement('div');
        container.className = 'video-bg-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            border-radius: 32px;
            overflow: hidden;
            z-index: -10;
            background: #000;
            pointer-events: none;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        `;

        // Create video element with all attributes
        const video = document.createElement('video');
        video.className = 'native-video-bg';
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'auto';
        video.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 32px;
            pointer-events: none;
            display: block;
        `;
        
        // Use only the correct video source
        const sources = [
            'assets/videos/14478854_1920_1080_30fps (online-video-cutter.com).mp4'
        ];
        
        sources.forEach(src => {
            const source = document.createElement('source');
            source.src = src;
            source.type = 'video/mp4';
            video.appendChild(source);
        });
        
        // Create overlay for text readability
        const overlay = document.createElement('div');
        overlay.className = 'video-overlay';
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.4));
            pointer-events: none;
            z-index: -9;
        `;
        
        // Assemble container
        container.appendChild(video);
        container.appendChild(overlay);
        
        // Insert as first element in body
        if (document.body) {
            document.body.insertBefore(container, document.body.firstChild);
        }
        
        // Force video to play with aggressive retry
        setTimeout(() => forceVideoPlay(video), 100);
        
        console.log('✅ Video container injected successfully');
        return video;
    }
    
    function forceVideoPlay(video) {
        console.log('🎬 Attempting to force video playback...');
        
        // Reset video to start
        video.currentTime = 0;
        
        // Try to play immediately
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('✅ Background video started successfully!');
                video.loop = true; // Ensure loop is set
            }).catch(error => {
                console.log('⚠️ Video autoplay blocked:', error.message);
                
                // Set up retry on any user interaction
                const retryPlay = () => {
                    video.play().then(() => {
                        console.log('✅ Background video started after user interaction!');
                        video.loop = true;
                        // Remove listeners after successful play
                        document.removeEventListener('click', retryPlay);
                        document.removeEventListener('touchstart', retryPlay);
                        document.removeEventListener('keydown', retryPlay);
                    }).catch(e => {
                        console.log('Still blocked:', e.message);
                    });
                };
                
                // Listen for any user interaction
                document.addEventListener('click', retryPlay, { passive: true });
                document.addEventListener('touchstart', retryPlay, { passive: true });
                document.addEventListener('keydown', retryPlay, { passive: true });
                
                console.log('🎯 Will retry video play on user interaction');
            });
        }
    }
    
    function injectVideoBackground() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', createVideoBackground);
        } else {
            createVideoBackground();
        }
        
        // Also try after a short delay in case DOM is still being modified
        setTimeout(createVideoBackground, 500);
        setTimeout(createVideoBackground, 1000);
    }
    
    // Start injection immediately
    injectVideoBackground();
    
})();