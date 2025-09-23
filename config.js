/**
 * Production-Ready Configuration System
 * Environment-specific settings and feature flags
 */

class Config {
  constructor() {
    this.environment = this.detectEnvironment();
    this.config = this.getConfig();
  }

  detectEnvironment() {
    const hostname = window.location.hostname;
    
    if (hostname === 'localhost' || hostname.includes('127.0.0.1')) {
      return 'development';
    } else if (hostname.includes('staging') || hostname.includes('dev')) {
      return 'staging';
    } else {
      return 'production';
    }
  }

  getConfig() {
    const baseConfig = {
      // Feature flags
      features: {
        orbitAnimation: true,
        autoClosePanel: true,
        performanceMonitoring: true,
        errorReporting: true,
        offlineMode: true
      },

      // Performance settings
      performance: {
        orbitSpeed: 0.05,
        autoCloseDelay: 45000, // 45 seconds
        cacheMaxAge: 5 * 60 * 1000, // 5 minutes
        retryAttempts: 3,
        retryDelay: 1000
      },

      // API settings
      api: {
        timeout: 10000, // 10 seconds
        retryAttempts: 3,
        retryDelay: 1000
      },

      // Map settings
      map: {
        defaultZoom: 17.5,
        defaultPitch: 75,
        defaultBearing: 180,
        maxZoom: 20,
        minZoom: 10
      }
    };

    // Environment-specific overrides
    switch (this.environment) {
      case 'development':
        return {
          ...baseConfig,
          features: {
            ...baseConfig.features,
            performanceMonitoring: false,
            errorReporting: false
          },
          performance: {
            ...baseConfig.performance,
            orbitSpeed: 0.1, // Faster for development
            autoCloseDelay: 10000 // 10 seconds for testing
          },
          debug: true
        };

      case 'staging':
        return {
          ...baseConfig,
          features: {
            ...baseConfig.features,
            errorReporting: true
          },
          debug: true
        };

      case 'production':
        return {
          ...baseConfig,
          features: {
            ...baseConfig.features,
            performanceMonitoring: true,
            errorReporting: true
          },
          debug: false
        };

      default:
        return baseConfig;
    }
  }

  // Get configuration value
  get(key, defaultValue = null) {
    const keys = key.split('.');
    let value = this.config;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return defaultValue;
      }
    }
    
    return value;
  }

  // Check if feature is enabled
  isFeatureEnabled(feature) {
    return this.get(`features.${feature}`, false);
  }

  // Get environment
  getEnvironment() {
    return this.environment;
  }

  // Check if in production
  isProduction() {
    return this.environment === 'production';
  }

  // Check if in development
  isDevelopment() {
    return this.environment === 'development';
  }

  // Get all configuration
  getAll() {
    return this.config;
  }
}

// Global configuration instance
window.config = new Config();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Config;
}

export default Config;
