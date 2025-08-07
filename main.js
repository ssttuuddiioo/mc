mapboxgl.accessToken = 'pk.eyJ1Ijoic3N0dHV1ZGRpaW9vIiwiYSI6ImNtZHhveWU4bDI5djIyam9kY2I3M3pwbHcifQ.ck8h3apHSNVAmTwjz-Oc7w';

const LOCATIONS = {
  centennialPark:   {lng: -84.3880, lat: 33.7879, label: 'Centennial Olympic Park'},
  michiganCentral:  {lng: -84.38587349098589, lat: 33.787164594671104, label: 'Downtown Atlanta'},
  campusMartius:    {lng: -84.3963, lat: 33.7490, label: 'Atlanta BeltLine'},
  newlab:           {lng: -84.3902, lat: 33.7756, label: 'Tech Square'}
};



const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/standard',
  center: [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat],
  zoom: 16,
  pitch: 60,
  antialias: true,
  dragRotate: true
});

// Building interactions removed for cleaner map experience
map.on('load', () => {
  // Map loaded and ready for navigation
  console.log('Map loaded successfully');

  const modelOrigin = [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat];
  const modelAltitude = 0;
  const modelRotate = [Math.PI / 2, 0, 0];

  const modelAsMercator = mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude);

  const modelTransform = {
      translateX: modelAsMercator.x,
      translateY: modelAsMercator.y,
      translateZ: modelAsMercator.z,
      rotateX: modelRotate[0],
      rotateY: modelRotate[1],
      rotateZ: modelRotate[2],
      scale: modelAsMercator.meterInMercatorCoordinateUnits() * 100
  };

  const customLayer = {
      id: '3d-model',
      type: 'custom',
      renderingMode: '3d',
      onAdd: function (map, gl) {
          this.camera = new THREE.Camera();
          this.scene = new THREE.Scene();

          const directionalLight = new THREE.DirectionalLight(0xffffff);
          directionalLight.position.set(0, -70, 100).normalize();
          this.scene.add(directionalLight);

          const directionalLight2 = new THREE.DirectionalLight(0xffffff);
          directionalLight2.position.set(0, 70, 100).normalize();
          this.scene.add(directionalLight2);

          const loader = new THREE.FBXLoader();
          loader.load(
              'public/tubes.fbx',
              (object) => {
                  this.scene.add(object);
              }
          );
          this.map = map;

          this.renderer = new THREE.WebGLRenderer({
              canvas: map.getCanvas(),
              context: gl,
              antialias: true,
          });

          this.renderer.autoClear = false;

          // Simple controls for debugging
          const gui = new lil.GUI();
          gui.add(modelTransform, 'scale', 1, 1000).name('Scale');
          gui.add(modelTransform, 'rotateX', -Math.PI, Math.PI).name('Rotate X');
          gui.add(modelTransform, 'rotateY', -Math.PI, Math.PI).name('Rotate Y');
          gui.add(modelTransform, 'rotateZ', -Math.PI, Math.PI).name('Rotate Z');
      },
      render: function (gl, matrix) {
          const rotationX = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), modelTransform.rotateX);
          const rotationY = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), modelTransform.rotateY);
          const rotationZ = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), modelTransform.rotateZ);

          const m = new THREE.Matrix4().fromArray(matrix);
          const l = new THREE.Matrix4().makeTranslation(modelTransform.translateX, modelTransform.translateY, modelTransform.translateZ)
              .scale(new THREE.Vector3(modelTransform.scale, -modelTransform.scale, modelTransform.scale))
              .multiply(rotationX)
              .multiply(rotationY)
              .multiply(rotationZ);

          this.camera.projectionMatrix = m.multiply(l);
          this.renderer.resetState();
          this.renderer.render(this.scene, this.camera);
          this.map.triggerRepaint();
      }
  };

  map.addLayer(customLayer);
});



// --- DEBUG HELPER ---
function dbg(tag, obj) {
  console.log(tag, JSON.stringify(obj));
}

// --- NAVIGATION CONTROLLER ---
let navState = {
  targetCenter: [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat],
  targetZoom: 16,
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
  if (title === 'Downtown Atlanta') return 'michiganCentral';
  if (title === 'Tech Square') return 'newlab';
  if (title === 'Proposal') return 'home';
  return '';
}

// --- STANDARDIZED NAVIGATION CONTROLLER ---
function navigateToLocation(key) {
  dbg("NAV_CLICK", {key: key});
  
  // Clear any existing popups first
  const existingPopups = document.querySelectorAll('.mapboxgl-popup');
  existingPopups.forEach(popup => popup.remove());
  
  if (key === 'proposal') {
    // Zoom in on the proposal location
    const {lng, lat} = LOCATIONS.michiganCentral;
    
    spinning = false;
    
    map.easeTo({
      center: [lng, lat],
      zoom: 20,
      pitch: 60,
      bearing: map.getBearing(),
      duration: 2000
    });
    
    setTimeout(() => {
      // Synchronize the orbit camera state with the map's final flight position
      const finalCenter = map.getCenter();
      orbitCenter = [finalCenter.lng, finalCenter.lat]; // Sync center to prevent jump
      targetOrbitCenter = [lng, lat]; // Set the target for the orbit
      bearing = map.getBearing(); // Sync bearing to prevent rotation jump
      navState.targetZoom = 20;
      
      // Now it's safe to start the orbit animation
      spinning = true;
      
      dbg("ORBIT_RESUMED", {location: "proposal"});
    }, 2100);
    
  } else if (key === 'team') {
    // Show the detail panel with team information
    showDetailPanel('team');
  } else {
    // Default behavior for other locations (if any)
    const {lng, lat, label} = LOCATIONS[key];
    
    spinning = true;
    navState.spinning = true;
    
    const currentCenter = map.getCenter();
    orbitCenter = [currentCenter.lng, currentCenter.lat];
    targetOrbitCenter = [lng, lat];
    
    navState.targetCenter = [lng, lat];
    navState.targetZoom = 16;
    navState.targetPitch = 45;
    navState.targetBearing = map.getBearing();
    
    map.easeTo({
      center: navState.targetCenter,
      zoom: navState.targetZoom,
      pitch: navState.targetPitch,
      bearing: navState.targetBearing,
      duration: 2000
    });
    
    setTimeout(() => {
      spinning = true;
      navState.spinning = true;
      dbg("ORBIT_RESUMED", {location: key});
    }, 2100);
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

map.on('dragstart', () => {
  spinning = false;
});

map.on('click', () => {
  spinning = true;
  targetOrbitCenter = [LOCATIONS.michiganCentral.lng, LOCATIONS.michiganCentral.lat];
  navState.targetZoom = 16;
  map.easeTo({
    center: targetOrbitCenter,
    zoom: navState.targetZoom,
    pitch: 45,
    bearing: 0,
    duration: 2000
  });
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
  proposal: {
    title: 'Proposal Overview',
    image: 'public/mc.jpg',
    description: `This proposal showcases Atlanta as an ideal location for innovation and development. Centered at the coordinates 33.787164594671104, -84.38587349098589, this strategic position offers unparalleled access to Atlanta's business district, technology corridors, and cultural landmarks.

    The proposed location benefits from Atlanta's position as a major hub for commerce, technology, and culture in the southeastern United States. From its historic roots as a railroad junction to its emergence as a modern metropolis, Atlanta continues to evolve as a center for innovation, finance, and international business.`
  },
  team: {
    slideshow: [
      'public/about/slide1.jpg',
      'public/about/slide2.jpg',
      'public/about/slide3.jpg'
    ],
    teamIntro: {
      title: 'Our Team',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
    },
    members: [
      {
        name: 'Name - Title',
        image: 'public/about/team1.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
        website: 'Website'
      },
      {
        name: 'Name - Title',
        image: 'public/about/team2.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
        website: 'Website'
      }
    ]
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
  const selectedBtn = document.querySelector('#legend .button-group button.selected');
  if (selectedBtn) {
    return selectedBtn.dataset.key;
  }
  return 'proposal';
}

function showDetailPanel(key) {
  const panel = document.getElementById('detail-panel');
  const proposalContent = document.getElementById('proposal-content');
  const teamContent = document.getElementById('team-content');
  const data = DETAIL_DATA[key];

  if (key === 'team') {
    proposalContent.style.display = 'none';
    teamContent.style.display = 'grid';

    const slideshowContainer = document.getElementById('slideshow-container');
    slideshowContainer.innerHTML = '';
    data.slideshow.forEach(image => {
      const slide = document.createElement('div');
      slide.className = 'slide';
      const img = document.createElement('img');
      img.src = image;
      slide.appendChild(img);
      slideshowContainer.appendChild(slide);
    });

    const prev = document.createElement('a');
    prev.className = 'prev';
    prev.innerHTML = '&#10094;';
    prev.onclick = () => plusSlides(-1);
    slideshowContainer.appendChild(prev);

    const next = document.createElement('a');
    next.className = 'next';
    next.innerHTML = '&#10095;';
    next.onclick = () => plusSlides(1);
    slideshowContainer.appendChild(next);

    const teamMembersContainer = document.getElementById('team-members-container');
    teamMembersContainer.innerHTML = `<div id="team-intro"><h1>${data.teamIntro.title}</h1><p>${data.teamIntro.description}</p></div>`;
    data.members.forEach(member => {
      teamMembersContainer.innerHTML += `
        <div class="team-member">
          <img src="${member.image}" alt="${member.name}">
          <div>
            <h2>${member.name}</h2>
            <p>${member.description}</p>
            <a href="${member.website}" target="_blank">Website</a>
          </div>
        </div>
      `;
    });

    showSlides(1);
  } else {
    proposalContent.style.display = 'grid';
    teamContent.style.display = 'none';
    
    document.getElementById('detail-title').textContent = data.title;
    document.getElementById('detail-description').innerHTML = data.description;
    document.getElementById('detail-image-container').style.backgroundImage = `url('${data.image}')`;
  }

  panel.classList.remove('detail-hidden');
  panel.classList.add('detail-visible');
}

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



function hideDetailPanel() {
  const panel = document.getElementById('detail-panel');
  panel.classList.remove('detail-visible');
  panel.classList.add('detail-hidden');
}