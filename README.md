# Detroit Orbit Demo

An interactive 3D map experience showcasing Detroit's innovation district with orbital camera movements and brutalist design aesthetics.

## Features

### 🗺️ Interactive 3D Map
- **Mapbox GL JS v3.14** for high-performance 3D rendering
- **Orbital camera animation** with smooth transitions
- **Building interactions** with hover and click states
- **Dynamic orbit centers** that adapt to selected locations

### 🎛️ Brutalist Interface
- **Collapsible legend** with Helvetica Bold typography
- **Stark black/white contrast** with geometric elements
- **Toggle-based navigation** via magnifying glass control
- **Full-screen detail panels** with rich content

### 📍 Location Showcase
- **Michigan Central Station** - Historic train station turned innovation hub
- **The Factory** - Modern manufacturing and maker space
- **Detroit Overview** - Contextual city exploration

### 🎬 Smooth Animations
- **Orbital interpolation** between location centers
- **Camera fly-to transitions** with consistent angles
- **Bottom-up panel expansions** for detail views
- **Responsive hover effects** throughout

## Tech Stack

- **Mapbox GL JS v3.14** - 3D mapping engine
- **Vanilla JavaScript** - Core functionality
- **CSS Grid & Flexbox** - Brutalist layout system
- **Helvetica Bold** - Typography consistency

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ssttuuddiioo/mc.git
   cd mc
   ```

2. **Add your Mapbox token**
   - Update `main.js` with your Mapbox access token
   - Replace `'YOUR_TOKEN_HERE'` with your actual token

3. **Serve locally**
   ```bash
   npx serve .
   ```
   
4. **Access the demo**
   - Open http://localhost:3000 in your browser

## Usage

### Navigation
- **🔍 Toggle Legend** - Click magnifying glass to show/hide navigation
- **🏠 Home** - Wide orbital view of Detroit
- **🚂 Michigan Central** - Focused static view of the station
- **🏭 The Factory** - Dynamic orbital view around the facility

### Interactions
- **Hover buildings** - Light blue highlight
- **Click buildings** - Dark blue selection
- **Click map** - Resume orbital motion
- **Learn More** - Expand to full-screen detail view

### Detail Panels
- **Rich descriptions** of each location
- **High-quality imagery** (place mc.jpg in public/ folder)
- **Navigation between locations** within detail view
- **Close via ✕** to return to map

## Project Structure

```
orbit-demo/
├── index.html          # Main HTML structure
├── main.js            # JavaScript functionality
├── style.css          # Brutalist styling
├── public/
│   └── mc.jpg         # Michigan Central image
└── README.md          # This file
```

## License

Open source project - feel free to use and modify.