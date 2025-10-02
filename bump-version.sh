#!/bin/bash

# Bump version script - automatically increments version number

# Get current version from version.json
CURRENT_VERSION=$(grep -o '"version": "[0-9]*"' version.json | grep -o '[0-9]*')
NEW_VERSION=$((CURRENT_VERSION + 1))

echo "Bumping version from $CURRENT_VERSION to $NEW_VERSION..."

# Update version.json
sed -i '' "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" version.json
sed -i '' "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" dist/version.json

# Update sw.js
sed -i '' "s/CACHE_VERSION = '$CURRENT_VERSION'/CACHE_VERSION = '$NEW_VERSION'/" sw.js
sed -i '' "s/CACHE_VERSION = '$CURRENT_VERSION'/CACHE_VERSION = '$NEW_VERSION'/" dist/sw.js

echo "✅ Version bumped to $NEW_VERSION"
echo "Now hard refresh your browser (Cmd+Shift+R) to see changes"



