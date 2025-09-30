#!/bin/bash
echo "🧹 Starting Pre-Presentation Cleanup..."

# Keep debug-pc.html (useful for troubleshooting)
# Remove other test files
echo "📁 Removing test files..."
rm -f map-inspector-test.html
rm -f map-test.html
rm -f offline-test.html
rm -f temp-map-inspector.js
rm -f test-direct.html

# Remove any shell script artifacts
echo "🗑️ Removing old scripts..."
rm -f batch-update.sh 2>/dev/null
rm -f upload-images.sh 2>/dev/null
rm -f update-fallback-images.sh 2>/dev/null
rm -f download-missing-images.sh 2>/dev/null

# Check for any .DS_Store files
echo "🍎 Removing .DS_Store files..."
find . -name ".DS_Store" -type f -delete 2>/dev/null

echo "✅ Cleanup complete!"
echo ""
echo "Files kept:"
echo "  ✓ debug-pc.html (for troubleshooting)"
echo ""
echo "Next steps:"
echo "  1. git add -A"
echo "  2. git commit -m 'Cleanup before presentation'"
echo "  3. git push"
