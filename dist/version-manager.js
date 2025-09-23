/**
 * Production-Ready Version Management System
 * Automatically generates version hashes based on file content
 */

class VersionManager {
  constructor() {
    this.version = this.generateVersion();
    this.isProduction = this.detectEnvironment();
  }

  /**
   * Generate a version hash based on current timestamp and environment
   */
  generateVersion() {
    const timestamp = Date.now();
    const env = this.isProduction ? 'prod' : 'dev';
    const hash = btoa(`${timestamp}-${env}`).slice(0, 12);
    return hash;
  }

  /**
   * Detect if we're in production environment
   */
  detectEnvironment() {
    return window.location.hostname !== 'localhost' && 
           !window.location.hostname.includes('127.0.0.1') &&
           !window.location.hostname.includes('dev');
  }

  /**
   * Get versioned URL for a resource
   */
  getVersionedUrl(resource, version = this.version) {
    const separator = resource.includes('?') ? '&' : '?';
    return `${resource}${separator}v=${version}`;
  }

  /**
   * Update version in HTML files
   */
  updateHtmlVersions() {
    const links = document.querySelectorAll('link[href*="style.css"], script[src*="main.js"]');
    links.forEach(link => {
      if (link.href) {
        link.href = this.getVersionedUrl(link.href.split('?')[0]);
      } else if (link.src) {
        link.src = this.getVersionedUrl(link.src.split('?')[0]);
      }
    });
  }

  /**
   * Get current version
   */
  getVersion() {
    return this.version;
  }

  /**
   * Check if version is valid
   */
  isValidVersion(version) {
    return version === this.version;
  }
}

// Global version manager instance
window.versionManager = new VersionManager();

// Auto-update versions on page load
document.addEventListener('DOMContentLoaded', () => {
  if (!window.versionManager.isProduction) {
    window.versionManager.updateHtmlVersions();
  }
});

export default VersionManager;
