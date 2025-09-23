/**
 * Production Build Script
 * Optimizes assets and prepares for deployment
 */

const fs = require('fs');
const path = require('path');

class ProductionBuilder {
  constructor() {
    this.sourceDir = __dirname;
    this.distDir = path.join(__dirname, 'dist');
    this.version = this.generateVersion();
  }

  generateVersion() {
    const timestamp = Date.now();
    const hash = Buffer.from(timestamp.toString()).toString('base64').slice(0, 8);
    return hash;
  }

  async build() {
    console.log('🚀 Starting production build...');
    
    try {
      // Create dist directory
      await this.createDistDirectory();
      
      // Copy and optimize files
      await this.copyStaticFiles();
      await this.optimizeHtml();
      await this.optimizeServiceWorker();
      await this.generateManifest();
      
      console.log('✅ Production build completed successfully!');
      console.log(`📦 Build version: ${this.version}`);
      console.log(`📁 Output directory: ${this.distDir}`);
      
    } catch (error) {
      console.error('❌ Build failed:', error);
      process.exit(1);
    }
  }

  async createDistDirectory() {
    if (fs.existsSync(this.distDir)) {
      fs.rmSync(this.distDir, { recursive: true });
    }
    fs.mkdirSync(this.distDir, { recursive: true });
    console.log('📁 Created dist directory');
  }

  async copyStaticFiles() {
    const filesToCopy = [
      'style.css',
      'main.js',
      'config.js',
      'version-manager.js',
      'sw.js',
      'vercel.json'
    ];

    for (const file of filesToCopy) {
      const sourcePath = path.join(this.sourceDir, file);
      const destPath = path.join(this.distDir, file);
      
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`📄 Copied ${file}`);
      }
    }

    // Copy public directory if it exists
    const publicDir = path.join(this.sourceDir, 'public');
    if (fs.existsSync(publicDir)) {
      const destPublicDir = path.join(this.distDir, 'public');
      fs.cpSync(publicDir, destPublicDir, { recursive: true });
      console.log('📁 Copied public directory');
    }
  }

  async optimizeHtml() {
    const htmlPath = path.join(this.sourceDir, 'index.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Update version numbers
    htmlContent = htmlContent.replace(/v=\d+/g, `v=${this.version}`);
    
    // Add production optimizations
    htmlContent = htmlContent.replace(
      '<title>Orbit Demo - SVG Placement Tool</title>',
      `<title>Orbit Demo - SVG Placement Tool</title>
  <meta name="description" content="Interactive map with orbit animation and marker management">
  <meta name="keywords" content="map, mapbox, supabase, orbit, markers">
  <meta name="author" content="Studio Civic">
  <link rel="manifest" href="/manifest.json">`
    );
    
    // Write optimized HTML
    fs.writeFileSync(path.join(this.distDir, 'index.html'), htmlContent);
    console.log('📄 Optimized index.html');
  }

  async optimizeServiceWorker() {
    const swPath = path.join(this.distDir, 'sw.js');
    let swContent = fs.readFileSync(swPath, 'utf8');
    
    // Update cache version
    swContent = swContent.replace(
      /const CACHE_VERSION = '[^']*';/,
      `const CACHE_VERSION = '${this.version}';`
    );
    
    fs.writeFileSync(swPath, swContent);
    console.log('🔧 Optimized service worker');
  }

  async generateManifest() {
    const manifest = {
      name: "Orbit Demo",
      short_name: "OrbitDemo",
      description: "Interactive map with orbit animation",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#4A90E2",
      icons: [
        {
          src: "/public/icon-192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/public/icon-512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    };

    fs.writeFileSync(
      path.join(this.distDir, 'manifest.json'),
      JSON.stringify(manifest, null, 2)
    );
    console.log('📱 Generated manifest.json');
  }
}

// Run build if called directly
if (require.main === module) {
  const builder = new ProductionBuilder();
  builder.build();
}

module.exports = ProductionBuilder;
