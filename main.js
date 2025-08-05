mapboxgl.accessToken = 'pk.eyJ1Ijoic3N0dHV1ZGRpaW9vIiwiYSI6ImNtZHhveWU4bDI5djIyam9kY2I3M3pwbHcifQ.ck8h3apHSNVAmTwjz-Oc7w';

const LOCATIONS = {
  rooseveltPark:    {lng: -83.0755, lat: 42.3235, label: 'Roosevelt Park'},
  michiganCentral:  {lng: -83.0776, lat: 42.3289, label: 'Michigan Central'},
  campusMartius:    {lng: -83.0466, lat: 42.3317, label: 'Campus Martius'},
  newlab:           {lng: -83.07242451005243, lat: 42.33118076021261, label: 'The Factory'}
};

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/standard',
  center: [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat],
  zoom: 17.5,
  pitch: 60,
  antialias: true
});

// Building interactions removed for cleaner map experience
map.on('load', () => {
  // Map loaded and ready for navigation
  console.log('Map loaded successfully');
});



// --- DEBUG HELPER ---
function dbg(tag, obj) {
  console.log(tag, JSON.stringify(obj));
}

// --- NAVIGATION CONTROLLER ---
let navState = {
  targetCenter: [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat],
  targetZoom: 14,
  targetPitch: 45,
  targetBearing: 0,
  spinning: true
};

// --- orbit ----
let bearing = 0, spinning = true;
let orbitCenter = [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat];
let targetOrbitCenter = [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat];
let orbitTransitionSpeed = 0.015; // Normal speed

// --- NAVIGATION CONTROLLER ---
function updateCamera() {
  const currentState = {
    center: [map.getCenter().lng, map.getCenter().lat],
    orbitCenter: orbitCenter,
    targetOrbitCenter: targetOrbitCenter,
    isEasing: map.isEasing && map.isEasing()
  };
  
  // dbg("CAMERA_TICK", currentState); // Debug disabled for production
  
  if (spinning) {
    bearing = (bearing + 0.05125) % 360;
    
    // Smoothly interpolate toward target orbit center
    const lngDiff = targetOrbitCenter[0] - orbitCenter[0];
    const latDiff = targetOrbitCenter[1] - orbitCenter[1];
    
    if (Math.abs(lngDiff) > 0.0001 || Math.abs(latDiff) > 0.0001) {
      orbitCenter[0] += lngDiff * orbitTransitionSpeed;
      orbitCenter[1] += latDiff * orbitTransitionSpeed;
    }
    
    // NAVIGATION CONTROLLER: Set camera state
    map.easeTo({
      center: orbitCenter,
      bearing: bearing,
      zoom: navState.targetZoom,
      pitch: navState.targetPitch,
      duration: 0 // Immediate for orbit
    });
  }
  requestAnimationFrame(updateCamera);
}

// Legacy orbit function - now handled by updateCamera
function orbit() {
  // Deprecated - keeping for compatibility
}

updateCamera();

// --- Style Controls ---
document.getElementById('style-controls').addEventListener('click', (e) => {
  if (e.target.dataset.style) {
    dbg("STYLE_CHANGE", {style: e.target.dataset.style});
    map.setStyle(e.target.dataset.style);
  }
});

// --- Orange markers removed - using legend navigation instead ---

// Utility function to update legend info
function updateLegend(title = '', blurb = '') {
  const infoDiv = document.getElementById('info');
  
  // Clear previous selection highlights
  document.querySelectorAll('#legend .button-group button').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  if (title) {
    // Show "Click here to learn more about [site]" in the info area
    infoDiv.innerHTML = `Click here to learn more about ${title}`;
    
    // Highlight the selected button
    const selectedBtn = document.querySelector(`#legend .button-group button[data-key="${getCurrentKey(title)}"]`);
    if (selectedBtn) {
      selectedBtn.classList.add('selected');
    }
  } else {
    infoDiv.innerHTML = '';
  }
}

// Helper function to get key from title
function getCurrentKey(title) {
  if (title === 'Michigan Central') return 'michiganCentral';
  if (title === 'The Factory') return 'newlab';
  if (title === 'Home') return 'home';
  return '';
}

// --- STANDARDIZED NAVIGATION CONTROLLER ---
function navigateToLocation(key) {
  dbg("NAV_CLICK", {key: key});
  
  // Clear any existing popups first
  const existingPopups = document.querySelectorAll('.mapboxgl-popup');
  existingPopups.forEach(popup => popup.remove());
  
  if (key === 'home') {
    // Resume orbit with wider city view
    spinning = true;
    navState.spinning = true;
    
    // Ensure smooth transition from current position
    const currentCenter = map.getCenter();
    orbitCenter = [currentCenter.lng, currentCenter.lat];
    targetOrbitCenter = [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat];
    
    navState.targetCenter = [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat];
    navState.targetZoom = 14;
    navState.targetPitch = 45;
    navState.targetBearing = map.getBearing(); // Preserve current bearing
    updateLegend();
    
    // SINGLE CAMERA CONTROLLER: Use easeTo for everything
    map.easeTo({
      center: navState.targetCenter,
      bearing: navState.targetBearing,
      zoom: navState.targetZoom,
      pitch: navState.targetPitch,
      duration: 2000
    });
    
    // Ensure orbiting continues after transition
    setTimeout(() => {
      spinning = true;
      navState.spinning = true;
      dbg("ORBIT_RESUMED", {location: "home"});
    }, 2100); // Slightly after easeTo duration
    
  } else {
    const {lng, lat, label} = LOCATIONS[key];
    
    if (key === 'michiganCentral') {
      spinning = true;  // ALWAYS ORBIT - even at Michigan Central
      navState.spinning = true;
      
      // Ensure smooth transition from current position
      const currentCenter = map.getCenter();
      orbitCenter = [currentCenter.lng, currentCenter.lat];
      targetOrbitCenter = [lng, lat];
      
      navState.targetCenter = [lng, lat];
      navState.targetZoom = 18;
      navState.targetPitch = 60;
      navState.targetBearing = map.getBearing(); // Preserve current bearing
      
      // SINGLE CAMERA CONTROLLER: Use easeTo for initial positioning, then let orbit take over
      map.easeTo({
        center: navState.targetCenter,
        zoom: navState.targetZoom,
        pitch: navState.targetPitch,
        bearing: navState.targetBearing,
        duration: 2000
      });
      
      // After transition completes, ensure orbiting is active
      setTimeout(() => {
        spinning = true;
        navState.spinning = true;
        dbg("ORBIT_RESUMED", {location: "michiganCentral"});
      }, 2100); // Slightly after easeTo duration
      
    } else if (key === 'newlab') {
      spinning = true;   // Keep orbiting for dynamic view around The Factory
      navState.spinning = true;
      
      // CRITICAL FIX: Always start orbit interpolation from current map position
      const currentCenter = map.getCenter();
      orbitCenter = [currentCenter.lng, currentCenter.lat];
      targetOrbitCenter = [lng, lat];  // Now we have a proper distance to interpolate
      
      navState.targetCenter = [lng, lat]; 
      navState.targetZoom = 18;
      navState.targetPitch = 60;
      navState.targetBearing = map.getBearing(); // Preserve current bearing
      
      dbg("FACTORY_NAV", {
        from: orbitCenter,
        to: targetOrbitCenter,
        distance: Math.sqrt(Math.pow(lng - currentCenter.lng, 2) + Math.pow(lat - currentCenter.lat, 2))
      });
      
      // SINGLE CAMERA CONTROLLER: Use easeTo but let orbit handle center interpolation
      map.easeTo({
        zoom: navState.targetZoom,
        pitch: navState.targetPitch,
        bearing: navState.targetBearing,
        duration: 2000
      });
      
      // Ensure orbiting continues after transition
      setTimeout(() => {
        spinning = true;
        navState.spinning = true;
        dbg("ORBIT_RESUMED", {location: "factory"});
      }, 2100); // Slightly after easeTo duration
    }
    
    // Update legend with site info
    let blurb = '';
    if (key === 'michiganCentral') {
      blurb = 'Historic train station, now a technology and mobility innovation hub. Camera orbits around the station for comprehensive viewing.';
    } else if (key === 'newlab') {
      blurb = 'Manufacturing and innovation facility in Detroit. Camera orbits continuously around The Factory location for dynamic exploration.';
    } else {
      blurb = 'Lorem ipsum placeholder text for this location.';
    }
    
    updateLegend(label); // Remove blurb from bottom menu
    
    // Show popup with site information
    new mapboxgl.Popup({offset:25})
      .setLngLat([lng, lat])
      .setHTML(`<h3>${label}</h3><p>${blurb}</p>`)
      .addTo(map);
  }
}

// Legacy function - redirect to new controller
function flyToLocation(key) {
  navigateToLocation(key);
}

// Legend toggle functionality
document.getElementById('legend-toggle').addEventListener('click', () => {
  const legend = document.getElementById('legend');
  legend.classList.toggle('legend-hidden');
});

// Legend click handler
document.getElementById('legend').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const key = e.target.dataset.key;
    navigateToLocation(key);  // Use new controller
    // Don't auto-close legend - only toggle with lupe
  }
});

// resume orbit on map click (outside popup)
map.on('click', () => { 
  dbg("MAP_CLICK", {action: "resume_orbit"});
  navigateToLocation('home');  // Use new controller
});

// Add moveend logging
map.on('moveend', () => {
  const state = {
    center: [map.getCenter().lng, map.getCenter().lat],
    orbitCenter: orbitCenter,
    targetOrbitCenter: targetOrbitCenter,
    isEasing: map.isEasing && map.isEasing(),
    zoom: map.getZoom(),
    pitch: map.getPitch(),
    bearing: map.getBearing()
  };
  dbg("MOVEEND", state);
});

// Current selected location for detail view
let currentDetailLocation = null;

// Detail content data
const DETAIL_DATA = {
  home: {
    title: 'Detroit Overview',
    image: 'public/mc.jpg',
    description: `Detroit, the Motor City, stands as a testament to American industrial innovation and urban resilience. From its historic neighborhoods to modern innovation districts, Detroit continues to evolve as a center for technology, manufacturing, and cultural renaissance. The city's transformation from industrial powerhouse to innovation hub represents one of the most compelling urban renewal stories in modern America.

    Key features include the historic downtown core, the emerging technology corridor, and the revitalized riverfront districts. Each area tells a unique story of Detroit's past, present, and future vision.`
  },
  michiganCentral: {
    title: 'Michigan Central Station',
    image: 'public/mc.jpg',
    description: `Michigan Central Station, an architectural masterpiece built in 1913, stands as Detroit's most iconic landmark. This Beaux-Arts monument, designed by the same architects who created Grand Central Terminal in New York, represents the golden age of American railroad travel.

    After decades of abandonment, the station has been meticulously restored as Ford's innovation campus, housing thousands of employees working on autonomous vehicles, electric mobility, and smart city technologies. The restoration preserved the building's historic grandeur while adding cutting-edge facilities for the future of transportation.

    The 18-story building features soaring archways, intricate stonework, and panoramic views of the Detroit River. Today, it serves as a beacon of Detroit's technological renaissance and a symbol of the city's commitment to innovation and sustainability.`
  },
  newlab: {
    title: 'The Factory',
    image: 'public/mc.jpg',
    description: `The Factory represents Detroit's manufacturing heritage reimagined for the modern era. This adaptive reuse facility transforms traditional industrial spaces into cutting-edge innovation labs, maker spaces, and collaborative work environments.

    Featuring state-of-the-art fabrication equipment, 3D printing facilities, and advanced prototyping labs, The Factory serves as an incubator for Detroit's next generation of manufacturers and makers. The facility bridges the gap between traditional craftsmanship and digital manufacturing, embodying Detroit's evolution from mass production to mass customization.

    Programs at The Factory include workforce development, startup incubation, and community maker spaces. The facility hosts regular workshops, technology demonstrations, and collaborative projects that bring together established manufacturers with emerging entrepreneurs.`
  }
};

// Info area click functionality - opens detail panel
document.getElementById('info').addEventListener('click', () => {
  currentDetailLocation = getSelectedLocation();
  if (currentDetailLocation) {
    showDetailPanel(currentDetailLocation);
  }
});

// Close detail panel
document.getElementById('close-detail-btn').addEventListener('click', () => {
  hideDetailPanel();
});

// Full-screen navigation
document.querySelector('.button-group-fullscreen').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const key = e.target.dataset.key;
    currentDetailLocation = key;
    showDetailPanel(key);
    navigateToLocation(key);  // Use new controller
  }
});

function getSelectedLocation() {
  // Return current location based on legend state or default to home
  const infoDiv = document.getElementById('info');
  if (infoDiv.innerHTML.includes('Michigan Central')) return 'michiganCentral';
  if (infoDiv.innerHTML.includes('Factory')) return 'newlab';
  return 'home';
}

function showDetailPanel(key) {
  const panel = document.getElementById('detail-panel');
  const data = DETAIL_DATA[key];
  
  // Update content
  document.getElementById('detail-title').textContent = data.title;
  document.getElementById('detail-description').innerHTML = data.description;
  document.getElementById('detail-image-container').style.backgroundImage = `url('${data.image}')`;
  
  // Show panel
  panel.classList.remove('detail-hidden');
  panel.classList.add('detail-visible');
}

function hideDetailPanel() {
  const panel = document.getElementById('detail-panel');
  panel.classList.remove('detail-visible');
  panel.classList.add('detail-hidden');
}