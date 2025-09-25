/**
 * Version Check System
 * Ensures the latest version is loaded after deployment
 */

class VersionCheck {
  constructor() {
    this.versionUrl = 'version.json'; // Will contain the latest version hash
    this.checkInterval = 60 * 60 * 1000; // Check every hour by default
    this.currentVersion = null;
    this.lastChecked = 0;
    this.init();
  }

  /**
   * Initialize the version checker
   */
  async init() {
    // Try to get the current version from localStorage
    this.currentVersion = localStorage.getItem('app_version');
    this.lastChecked = parseInt(localStorage.getItem('version_last_checked') || '0');
    
    // Set initial version immediately from the page if available
    if (!this.currentVersion && window.APP_VERSION) {
      this.currentVersion = window.APP_VERSION;
      localStorage.setItem('app_version', this.currentVersion);
      console.log('Version set from APP_VERSION:', this.currentVersion);
    }
    
    // Check version on startup
    await this.checkVersion();
    
    // Set up periodic checks
    setInterval(() => this.checkVersion(), this.checkInterval);
    
    // Also check when the page becomes visible again
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        const now = Date.now();
        // Only check if it's been at least 5 minutes since last check
        if (now - this.lastChecked > 5 * 60 * 1000) {
          this.checkVersion();
        }
      }
    });
  }

  /**
   * Check if a new version is available
   */
  async checkVersion() {
    try {
      // Add cache-busting parameter to prevent caching
      const response = await fetch(`${this.versionUrl}?_=${Date.now()}`, {
        method: 'GET',
        headers: { 'Cache-Control': 'no-cache' }
      });
      
      if (!response.ok) {
        console.warn('Version check failed:', response.status);
        return;
      }
      
      const data = await response.json();
      const latestVersion = data.version;
      
      // Update last checked time
      this.lastChecked = Date.now();
      localStorage.setItem('version_last_checked', this.lastChecked.toString());
      
      // If this is the first time checking, just save the version
      if (!this.currentVersion) {
        this.currentVersion = latestVersion;
        localStorage.setItem('app_version', latestVersion);
        return;
      }
      
      // If there's a new version, reload the page
      if (latestVersion !== this.currentVersion) {
        console.log(`New version detected: ${latestVersion} (current: ${this.currentVersion})`);
        this.updateToNewVersion(latestVersion);
      }
    } catch (error) {
      console.warn('Version check error:', error);
    }
  }

  /**
   * Update to the new version
   */
  updateToNewVersion(newVersion) {
    // Update stored version
    this.currentVersion = newVersion;
    localStorage.setItem('app_version', newVersion);
    
    // Clear caches
    if ('caches' in window) {
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            console.log('Clearing cache for update:', cacheName);
            return caches.delete(cacheName);
          })
        );
      });
    }
    
    // Unregister service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    }
    
    // Show update notification
    const updateNotification = document.createElement('div');
    updateNotification.className = 'update-notification';
    updateNotification.innerHTML = `
      <div class="update-content">
        <p>A new version is available!</p>
        <button id="update-now">Update Now</button>
      </div>
    `;
    document.body.appendChild(updateNotification);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .update-notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }
      .update-content {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      .update-content p {
        margin: 0;
      }
      #update-now {
        background: #4A90E2;
        border: none;
        color: white;
        padding: 8px 15px;
        border-radius: 4px;
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
    
    // Add click handler
    document.getElementById('update-now').addEventListener('click', () => {
      window.location.reload(true);
    });
    
    // Auto-reload after 5 minutes if user doesn't click
    setTimeout(() => {
      window.location.reload(true);
    }, 5 * 60 * 1000);
  }

  /**
   * Force check for a new version
   */
  forceCheck() {
    return this.checkVersion();
  }
}

// Create global instance
window.versionCheck = new VersionCheck();

export default VersionCheck;
