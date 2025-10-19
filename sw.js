// EmoSync Service Worker - PWA Offline Support
// Feel, Heal, and Rewire - Created by @SrishtySynergy 💖

const CACHE_NAME = 'emosync-v1.0.0';
const STATIC_CACHE = 'emosync-static-v1.0.0';
const DYNAMIC_CACHE = 'emosync-dynamic-v1.0.0';

// Files to cache for offline use
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('💫 EmoSync Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('✨ Caching static assets for offline use');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('🎯 EmoSync is ready for offline healing!');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('❌ Cache installation failed:', error);
      })
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  console.log('🚀 EmoSync Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('🧹 Cleaning up old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('🌟 EmoSync Service Worker activated successfully!');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Otherwise fetch from network
        return fetch(event.request)
          .then((networkResponse) => {
            // Cache successful responses for future use
            if (networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(event.request, responseClone);
                });
            }
            
            return networkResponse;
          })
          .catch(() => {
            // Network failed, provide offline fallbacks
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
            
            // For other resources, return a custom offline response
            if (event.request.destination === 'image') {
              return new Response(
                '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="#D4AF37" width="200" height="200"/><text x="100" y="100" text-anchor="middle" fill="white" font-size="16">💖 EmoSync</text><text x="100" y="120" text-anchor="middle" fill="white" font-size="12">Offline Mode</text></svg>',
                {
                  headers: { 'Content-Type': 'image/svg+xml' }
                }
              );
            }
          });
      })
  );
});

// Background sync for saving data when back online
self.addEventListener('sync', (event) => {
  console.log('🔄 Background sync triggered:', event.tag);
  
  if (event.tag === 'emosync-data-sync') {
    event.waitUntil(
      syncOfflineData()
    );
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('🔔 Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'Time for your daily emotional check-in 💖',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-96x96.png',
    tag: 'emosync-reminder',
    data: {
      url: '/?action=daily-checkin'
    },
    actions: [
      {
        action: 'checkin',
        title: 'Start Check-in',
        icon: '/icons/icon-96x96.png'
      },
      {
        action: 'later',
        title: 'Remind Later',
        icon: '/icons/icon-96x96.png'
      }
    ],
    requireInteraction: false,
    silent: false,
    vibrate: [200, 100, 200]
  };
  
  event.waitUntil(
    self.registration.showNotification('EmoSync 🌙', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('🖱️ Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'checkin') {
    // Open app to daily check-in
    event.waitUntil(
      clients.openWindow('/?action=daily-checkin')
    );
  } else if (event.action === 'later') {
    // Schedule another reminder
    scheduleReminder(30); // 30 minutes later
  } else {
    // Default action - open app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handling between SW and main app
self.addEventListener('message', (event) => {
  console.log('📨 Message received in Service Worker:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_CLEAR') {
    clearAllCaches();
  }
  
  if (event.data && event.data.type === 'SCHEDULE_REMINDER') {
    scheduleReminder(event.data.minutes || 60);
  }
});

// Utility Functions

async function syncOfflineData() {
  try {
    console.log('🔄 Syncing offline data...');
    
    // Get stored offline data from IndexedDB or localStorage
    const offlineData = await getOfflineData();
    
    if (offlineData.length > 0) {
      // Send data to server or process locally
      await processOfflineData(offlineData);
      
      // Clear offline queue
      await clearOfflineData();
      
      console.log('✅ Offline data synced successfully');
    }
  } catch (error) {
    console.error('❌ Offline data sync failed:', error);
  }
}

async function getOfflineData() {
  // In a real implementation, this would retrieve from IndexedDB
  // For now, return empty array as data is stored in localStorage
  return [];
}

async function processOfflineData(data) {
  // Process any offline journal entries, mood records, etc.
  console.log('Processing offline data:', data);
}

async function clearOfflineData() {
  // Clear the offline data queue
  console.log('Clearing offline data queue');
}

function scheduleReminder(minutes) {
  console.log(`⏰ Scheduling reminder in ${minutes} minutes`);
  
  // Use setTimeout for immediate scheduling
  // In production, you'd use the Background Sync API or Push API
  setTimeout(() => {
    self.registration.showNotification('EmoSync Reminder 🌙', {
      body: 'How are you feeling now? Take a moment to check in with yourself.',
      icon: '/icons/icon-192x192.png',
      tag: 'emosync-reminder-delayed',
      data: { url: '/' }
    });
  }, minutes * 60 * 1000);
}

async function clearAllCaches() {
  try {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
    console.log('🧹 All caches cleared');
  } catch (error) {
    console.error('❌ Cache clearing failed:', error);
  }
}

// Periodic background sync for wellness reminders
self.addEventListener('periodicsync', (event) => {
  console.log('⏰ Periodic sync:', event.tag);
  
  if (event.tag === 'wellness-reminder') {
    event.waitUntil(
      sendWellnessReminder()
    );
  }
});

async function sendWellnessReminder() {
  const now = new Date();
  const hour = now.getHours();
  
  // Send reminders during typical waking hours
  if (hour >= 7 && hour <= 22) {
    await self.registration.showNotification('EmoSync Wellness Check 🌸', {
      body: 'Remember: Healing isn\'t linear – it\'s creative. How can you nurture yourself today?',
      icon: '/icons/icon-192x192.png',
      tag: 'wellness-check',
      data: { url: '/' },
      actions: [
        {
          action: 'open',
          title: 'Open EmoSync',
          icon: '/icons/icon-96x96.png'
        }
      ]
    });
  }
}

// Error handling
self.addEventListener('error', (event) => {
  console.error('🚨 Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 Unhandled promise rejection in SW:', event.reason);
});

// Installation prompt handling
self.addEventListener('beforeinstallprompt', (event) => {
  console.log('📲 App installation prompt triggered');
  // The app will handle this in the main thread
});

console.log('💖 EmoSync Service Worker loaded successfully');
console.log('✨ Created with love by @SrishtySynergy');
console.log('🌙 "Healing isn\'t linear – it\'s creative."');