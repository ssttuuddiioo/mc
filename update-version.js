#!/usr/bin/env node
// Simple script to update cache-busting version numbers

const fs = require('fs');
const path = require('path');

// Generate new version based on current timestamp
const newVersion = Date.now().toString();

console.log(`🔄 Updating to version: ${newVersion}`);

// Files to update
const files = [
  'index.html',
  'sw.js'
];

files.forEach(filename => {
  const filepath = path.join(__dirname, filename);
  let content = fs.readFileSync(filepath, 'utf8');
  
  if (filename === 'index.html') {
    // Update version parameters in HTML
    content = content.replace(/\?v=\d+/g, `?v=${newVersion}`);
  } else if (filename === 'sw.js') {
    // Update CACHE_VERSION in service worker
    content = content.replace(/const CACHE_VERSION = '[^']+';/, `const CACHE_VERSION = '${newVersion}';`);
  }
  
  fs.writeFileSync(filepath, content);
  console.log(`✅ Updated ${filename}`);
});

console.log(`🎉 All files updated to version ${newVersion}`);
console.log(`💡 Now commit and push your changes to deploy the new version`);
