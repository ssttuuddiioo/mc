#!/bin/bash

# Restore Production Mode - Re-enables service worker

echo "🚀 Restoring Production Mode..."

# Restore service worker registration
sed -i '' "s/\/\/ navigator.serviceWorker.register/navigator.serviceWorker.register/" index.html

# Bump version for production
./bump-version.sh

echo "✅ Production mode restored - Service worker enabled"



