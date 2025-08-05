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



// --- orbit ----
let bearing = 0, spinning = true;
let orbitCenter = [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat];
let targetOrbitCenter = [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat];
let orbitTransitionSpeed = 0.02; // How fast to transition between orbit centers

function orbit() {
  if (spinning) {
    bearing = (bearing + 0.05125) % 360;
    map.setBearing(bearing);
    
    // Smoothly interpolate toward target orbit center
    const lngDiff = targetOrbitCenter[0] - orbitCenter[0];
    const latDiff = targetOrbitCenter[1] - orbitCenter[1];
    
    if (Math.abs(lngDiff) > 0.0001 || Math.abs(latDiff) > 0.0001) {
      orbitCenter[0] += lngDiff * orbitTransitionSpeed;
      orbitCenter[1] += latDiff * orbitTransitionSpeed;
    }
    
    // Keep the camera centered on the current orbit point
    const currentCenter = map.getCenter();
    if (Math.abs(currentCenter.lng - orbitCenter[0]) > 0.001 || 
        Math.abs(currentCenter.lat - orbitCenter[1]) > 0.001) {
      map.setCenter(orbitCenter);
    }
  }
  requestAnimationFrame(orbit);
}
orbit();

// --- Orange markers removed - using legend navigation instead ---

// Utility function to update legend info
function updateLegend(title = '', blurb = '') {
  const infoDiv = document.getElementById('info');
  if (title && blurb) {
    infoDiv.innerHTML = `<strong>${title}</strong><br>${blurb}`;
  } else {
    infoDiv.innerHTML = '';
  }
}

function flyToLocation(key) {
  // Clear any existing popups first
  const existingPopups = document.querySelectorAll('.mapboxgl-popup');
  existingPopups.forEach(popup => popup.remove());
  
  if (key === 'home') {
    // Resume orbit with wider city view
    spinning = true;
    targetOrbitCenter = [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat];
    updateLegend();
    map.flyTo({
      center: [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat],
      bearing: 0,
      essential: true,
      duration: 3000,
      zoom: 14,    // Much wider view (was 17.5)
      pitch: 45    // Lower angle for broader perspective (was 60)
    });
  } else {
    const {lng, lat, label} = LOCATIONS[key];
    
    // Set orbit behavior and center based on location
    if (key === 'michiganCentral') {
      spinning = false;  // Pause orbit for focused view
      targetOrbitCenter = [lng, lat];
    } else if (key === 'newlab') {
      spinning = true;   // Keep orbiting for dynamic view around The Factory
      targetOrbitCenter = [lng, lat];  // Smoothly transition orbit center to The Factory coordinates
    }
    
    map.flyTo({
      center: [lng, lat],
      bearing: 45,                           // face southeast-ish
      essential: true,
      duration: 3000,
      zoom: 18,
      pitch: 60
    });
    
    // Update legend with site info
    let blurb = '';
    if (key === 'michiganCentral') {
      blurb = 'Historic train station, now a technology and mobility innovation hub. Focused view with paused orbit for detailed examination.';
    } else if (key === 'newlab') {
      blurb = 'Manufacturing and innovation facility in Detroit. Camera orbits continuously around The Factory location for dynamic exploration.';
    } else {
      blurb = 'Lorem ipsum placeholder text for this location.';
    }
    
    updateLegend(label, blurb);
    
    // Show popup with site information
    new mapboxgl.Popup({offset:25})
      .setLngLat([lng, lat])
      .setHTML(`<h3>${label}</h3><p>${blurb}</p>`)
      .addTo(map);
  }
}

// Legend toggle functionality
document.getElementById('legend-toggle').addEventListener('click', () => {
  const legend = document.getElementById('legend');
  legend.classList.toggle('legend-hidden');
});

// Legend click handler
document.getElementById('legend').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.id !== 'learn-more-btn') {
    const key = e.target.dataset.key;
    flyToLocation(key);
    // Don't auto-close legend - only toggle with lupe
  }
});

// resume orbit on map click (outside popup)
map.on('click', () => { 
  spinning = true; 
  updateLegend();
  
  // Update target orbit center to current map center when resuming orbit
  const currentCenter = map.getCenter();
  targetOrbitCenter = [currentCenter.lng, currentCenter.lat];
  
  // Clear any existing popups when resuming orbit
  const existingPopups = document.querySelectorAll('.mapboxgl-popup');
  existingPopups.forEach(popup => popup.remove());
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

// Learn More functionality
document.getElementById('learn-more-btn').addEventListener('click', () => {
  currentDetailLocation = getSelectedLocation();
  showDetailPanel(currentDetailLocation);
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
    flyToLocation(key);
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