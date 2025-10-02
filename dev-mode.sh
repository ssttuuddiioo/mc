#!/bin/bash

# Development Mode - Disables service worker caching

echo "🛠️  Enabling Development Mode..."

# Backup original files
cp index.html index.html.backup 2>/dev/null || true

# Comment out service worker registration in index.html
sed -i '' "s/navigator.serviceWorker.register/\/\/ navigator.serviceWorker.register/" index.html

echo "✅ Development mode enabled - Service worker disabled"
echo "💡 Changes will show immediately without version bumps"
echo "⚠️  Remember to run ./restore-prod.sh before deploying!"



