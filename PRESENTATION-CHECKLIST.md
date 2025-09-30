# 🎯 Bill Ford Presentation Checklist - 9:30am

## ✅ Completed (Before PC Restart)
- [x] Complete data architecture rewrite
- [x] Fixed label visibility issue
- [x] Fixed SyntaxError in version-check.js
- [x] Removed all test files
- [x] Cleaned up temporary files
- [x] All changes committed and pushed to git
- [x] Version updated to 1.0.1 (101)

---

## 🖥️ On the PC (After Restart)

### Step 1: Pull Latest Changes
```bash
cd /path/to/mc
git pull origin main
```

**Expected output:**
```
remote: Enumerating objects...
Updating 3e72585..bbe76dc
Fast-forward
 version-check.js | 1 -
 main.js | 28 ++++++++++++++++++++--------
 ...
```

### Step 2: Start the Server
Your batch file should run:
```bash
npx serve .
```

**Wait for:**
```
Serving!
- Local:    http://localhost:3000
```

### Step 3: Open Browser & Nuclear Reset
1. Go to `http://localhost:3000/debug-pc.html`
2. Click **"Nuclear Reset"** button
3. Wait for "All caches cleared!" message

### Step 4: Load Main App
1. Go to `http://localhost:3000`
2. Press **Ctrl + Shift + R** (hard refresh)
3. Press **F12** to open DevTools Console

---

## 📊 Success Indicators (Check Console)

### ✅ GOOD - What You SHOULD See:
```
📂 Loading markers from local JSON...
✅ Loaded 32 markers from public/data/markers.json
✅ 32 markers loaded and displayed
🏷️ Forced 45 map label layers visible and 32 marker elements
```

### ❌ BAD - What You Should NOT See:
```
❌ Supabase fetch error...
🔄 Using fallback marker data...
🚫 Firewall detected...
```

If you see "BAD" messages → Run Nuclear Reset again

---

## 🎨 Visual Checklist

On the map, you should see:

- [ ] **All 32 marker boxes** (black rectangles with white text)
- [ ] **Map labels** (street names, neighborhood names)
- [ ] **The Station** marker visible
- [ ] **Newlab** marker visible  
- [ ] **The Factory** marker visible (building should be blue)
- [ ] **Green markers**: Urban Location, Detroit River, Railroad, US-Canada Border, Roosevelt Park
- [ ] **Touch to Explore banner** at bottom

---

## 🖱️ Interaction Tests (Quick 60-Second Test)

Before Bill arrives:

1. **Click "The Station"**
   - [ ] Side panel opens
   - [ ] Correct image appears
   - [ ] Description shows
   - [ ] No console errors

2. **Click "Newlab"**
   - [ ] Sub-facilities list appears
   - [ ] Click "Digital Fabrication Shop"
   - [ ] Image loads correctly

3. **Click "The Factory"**
   - [ ] Building is blue on map
   - [ ] Panel shows Ford Pro info

4. **Zoom in/out**
   - [ ] Labels stay visible
   - [ ] Map doesn't zoom too far out

5. **Click different markers in sequence**
   - [ ] Each shows correct data
   - [ ] Images don't switch or disappear
   - [ ] Data stays consistent

---

## 🚨 Emergency Troubleshooting

### Problem: No markers appear
**Solution:** 
```javascript
// In browser console:
localStorage.clear();
location.reload(true);
```

### Problem: Wrong images still showing
**Solution:**
1. Go to `http://localhost:3000/debug-pc.html`
2. Click "Nuclear Reset"
3. Ctrl + Shift + R

### Problem: Labels not showing
**Solution:**
- Press **L** key to toggle labels ON
- Check console for "Forced X map label layers"

### Problem: Old data corruption
**Solution:**
```bash
# On PC terminal:
git fetch --all
git reset --hard origin/main
git pull
# Then restart server
```

---

## 📱 Final Pre-Presentation Check (5 min before)

1. [ ] PC is on and server is running
2. [ ] Browser is open to `http://localhost:3000`
3. [ ] Map is loaded with all markers visible
4. [ ] Console shows no red errors (warnings OK)
5. [ ] Quick click test on 3-5 markers (all work)
6. [ ] Close browser DevTools (F12) for cleaner demo
7. [ ] Set zoom to nice overview level
8. [ ] **Optional:** Hide mouse cursor until needed

---

## 🎉 You're Ready!

### Key Talking Points for Bill:
- **30-acre innovation campus** with real infrastructure
- **Single source of truth** data architecture (just rebuilt!)
- **Works 100% offline** - no network dependencies
- **32+ locations** showcasing mobility testing zones
- **Newlab**: 270K sq ft, 200+ startups, 2,000 people
- **The Factory**: Ford Pro headquarters
- **First electrified road** in America
- **Drone testing infrastructure** (BVLOS, Aerial Ops Center)

---

## 📞 If Something Goes Wrong

1. Don't panic
2. Refresh browser (Ctrl + Shift + R)
3. If that doesn't work → Nuclear Reset
4. If that doesn't work → Restart server
5. Worst case → Restart PC (takes 2-3 min)

---

**Last Updated:** September 30, 2025, 1:00 AM
**Version:** 1.0.1 (101)
**Ready for:** Bill Ford, 9:30 AM

🚗💨 **GO GET 'EM!**
