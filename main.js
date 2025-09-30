// --- Supabase Configuration ---
  const SUPABASE_URL = 'https://hzzcioecccskyywnvvbn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6emNpb2VjY2Nza3l5d252dmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0Nzc1MjgsImV4cCI6MjA3NDA1MzUyOH0.2x3-B32F-osawrdCYjMD9KF-UMGMGLYopLWtPSJzwGY';

// Safe Supabase client creation - handle offline case
let supabaseClient = null;
try {
  if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
} catch (error) {
  // Silent fallback to offline mode
}

// --- Idle Mode Variables --- (REMOVED)

// --- Idle Mode Functions --- (REMOVED)

// showNextIdlePopup function removed

// moveCameraToMarker function removed

// showIdlePopup function removed

// hideIdlePopup function removed

// getAllMapMarkers function removed

// getMarkerDataWithShortDescription function removed

// openLocationFromIdle function removed

// initializeIdleMode function removed

// FALLBACK MARKER DATA - Used when Supabase is blocked by firewall (e.g., Cisco Umbrella)
// Images are served locally from /public/marker-images/
// FALLBACK MARKER DATA - Used when Supabase is blocked by firewall (e.g., Cisco Umbrella)
// Images are served locally from /public/marker-images/
// This data was generated from Supabase on 2025-09-30T03:59:55.076Z
const FALLBACK_MARKERS = [
  {
    "id": 1,
    "label": "The Station",
    "Facility Name": "The Station",
    "lat": 42.32680332,
    "lng": -83.07638321,
    "color": "#4A90E2",
    "Description": "This beautifully restored, historic 18-story train station is now the heart of the Michigan Central innovation hub. After Ford's six-year restoration, this once-abandoned Detroit landmark now holds innovation studios, flexible workspace for established and growing companies, convening areas, community programs, and hospitality. From Ford teams working on electric vehicles and software-driven services to computer science education for students, The Station is where the next generation of innovation happens.",
    "Key Features": "- 18-story historic train station restored over 6 years by Ford\n- Houses Ford teams and Google Code Next program\n- 23,000 sq ft of youth programming space",
    "image": "public/marker-images/1.png"
  },
  {
    "id": 2,
    "label": "Newlab",
    "Facility Name": "Newlab at Michigan Central",
    "lat": 42.32592547,
    "lng": -83.07333415,
    "color": "#4A90E2",
    "Description": "A massive 270,000-square-foot workspace where over 150 startups are building the future of mobility. Think of it as a giant garage where brilliant minds work on everything from drones to electric vehicles to robotics, complete with state-of-the-art labs and manufacturing space, with Michigan Central and Newlab supporting startups with ongoing resources for every stage of their journey.",
    "Key Features": "- 270,000 sq ft of workspace with nearly 2,000 people across 200+ startups\n- 47% have founders from underrepresented backgrounds, 40% from outside Michigan\n- Includes prototyping labs, manufacturing shops, offices, and event spaces",
    "image": "public/marker-images/Newlab at MC.jpg"
  },
  {
    "id": 3,
    "label": "The Factory",
    "Facility Name": "The Factory",
    "lat": 42.33059257,
    "lng": -83.07119005,
    "color": "#4A90E2",
    "Description": "Workspace for Ford's Ford Pro teams that provide vehicles, charging solutions, financing, and software services to Ford's commercial customers around the world. Once home to the Chicago Hosiery and Detroit-Alaska Knitting Mills factories, this building is another example of old industrial spaces transformed for modern innovation.",
    "Key Features": "- Ford Pro headquarters since 2017 in former knitting mills building\n- Home to Ford's commercial vehicle and government customer teams",
    "image": "public/marker-images/Factory.jpg"
  },
  {
    "id": 4,
    "label": "",
    "Facility Name": "Digital Fabrication Shop",
    "lat": 42.32839326,
    "lng": -83.07595378,
    "color": "#E74C3C",
    "Description": "Where digital sketches and plans become reality using large-scale industrial 3D printers, precision laser cutters, and a robotic arm extruder that builds 3D objects layer by layer. Perfect for creating prototypes quickly, testing new product designs, and bringing digital concepts into the physical world.",
    "Key Features": "- 3 large-scale 3D printers, 3 laser cutters, 5-axis robot arm extruder\n- Latest Bambu Lab and FormLabs equipment plus metal printing\n- Large format printer and vinyl cutter",
    "image": "public/marker-images/Digital Fabrication Shop.jpg"
  },
  {
    "id": 5,
    "label": "",
    "Facility Name": "Wood Shop",
    "lat": 42.32795938,
    "lng": -83.07483233,
    "color": "#E74C3C",
    "Description": "Traditional woodworking meets modern technology. This fully-equipped shop features both computer-controlled CNC routers and classic hand tools, including precision saws, bandsaws, a lathe, planer, and jointer. Great for building prototypes, parts, and products.",
    "Key Features": "- 2 CNC routers plus traditional tools (table saw, bandsaws, lathe)\n- Both digital and hand tool woodworking capabilities\n- Complete planer, jointer, and Festool hand tool collection",
    "image": "public/marker-images/Newlab at MC.jpg"
  },
  {
    "id": 6,
    "label": "",
    "Facility Name": "Metal Shop",
    "lat": 42.32815463,
    "lng": -83.07535834,
    "color": "#E74C3C",
    "Description": "The place to cut, shape, and weld metal parts, this shop features a precision fiber laser for cutting, professional welders for joining metal components, a press brake for bending, bandsaws for rough cuts, and specialized tools for rolling tubes and shearing metal sheets. Essential for building anything from vehicle parts to drone frames with professional-grade results.",
    "Key Features": "- CNC fiber laser, 2 MIG welders, 1 TIG welder\n- Press brake, bandsaws, shear, tube roller\n- Complete metalworking and welding technology",
    "image": "public/marker-images/Metal Shop.jpg"
  },
  {
    "id": 7,
    "label": "",
    "Facility Name": "Electronics Lab",
    "lat": 42.32774007,
    "lng": -83.07573575,
    "color": "#E74C3C",
    "Description": "Where electronic parts are built and tested. This lab has equipment for creating circuit boards, testing how devices handle electricity, welding battery components, checking for overheating with thermal cameras, and assembling electronic parts with professional soldering stations.",
    "Key Features": "- LPKF laser for circuit boards, spectrum analyzers, battery welder\n- Thermal cameras and professional soldering stations",
    "image": "public/marker-images/Electronic Lab.jpg"
  },
  {
    "id": 8,
    "label": "",
    "Facility Name": "Machine Shop",
    "lat": 42.32815463,
    "lng": -83.07535834,
    "color": "#E74C3C",
    "Description": "Professional-grade machines that can create precise parts for products. This shop features advanced CNC mills and lathes from industry leaders like Haas and Trak, including a 5-axis mill that can cut complex shapes from multiple angles, precision lathes for round parts, and specialized milling machines for everything from prototypes to production-ready components.",
    "Key Features": "- 5-axis Haas mill, multiple CNC lathes and mills\n- Trak precision equipment and Flexarm tapping arm\n- Professional-grade reductive manufacturing capabilities",
    "image": "public/marker-images/machineshop.png"
  },
  {
    "id": 9,
    "label": "",
    "Facility Name": "Physical Metrology Shop",
    "lat": 42.32815463,
    "lng": -83.07535834,
    "color": "#E74C3C",
    "Description": "Shop for product measurement with a coordinate measuring arm and height gauges for exact dimensions, a 3D scanner that captures precise digital models of physical parts, a universal testing machine that checks material strength, and additional specialized tools to verify that every component meets specifications.",
    "Key Features": "- Hexagon coordinate measuring arm, 3D scanner\n- Universal testing machine and precision height gauges",
    "image": "public/marker-images/Physical Metrology Shop.webp"
  },
  {
    "id": 10,
    "label": "",
    "Facility Name": "Casting and Finishing Shop",
    "lat": 42.32815463,
    "lng": -83.07535834,
    "color": "#E74C3C",
    "Description": "The final stop where products get their finishing touches, this shop features a walk-in spray booth for professional painting and powder coating, plus a dedicated casting room for molding work. You'll find an injection molding machine for creating plastic components, ovens for curing and baking on durable coatings, a vacuum former for shaping plastic, specialized chambers for removing air bubbles, parts tumblers for smoothing surfaces, and all the hand tools needed to get products ready for market.",
    "Key Features": "- Walk-in spray booth for painting and powder coating\n- Curing ovens, vacuum chamber, parts tumblers for professional finishing",
    "image": "public/marker-images/Casting and Finishing Shop.jpg"
  },
  {
    "id": 11,
    "label": "",
    "Facility Name": "Manufacturing Space",
    "lat": 42.32815463,
    "lng": -83.07535834,
    "color": "#E74C3C",
    "Description": "A large 10,000-square-foot space for building small batches of products before full-scale manufacturing. This is where teams build prototype units 2-10 of their products and establish production flows. It features five fully-equipped assembly bays that teams can rent, plus advanced machinery including robotic wheel building, laser tube cutting, and robotic welding equipment. It's designed for creating larger products like e-bikes, motorcycles, drones, mobile robots, and EV chargers, helping companies perfect their manufacturing process before transitioning to larger batch production.",
    "Key Features": "- 10,000 sq ft with five rentable, fully-tooled assembly bays\n- Robotic wheel building, laser tube cutting, robotic welding",
    "image": "public/marker-images/Grounded Manufacturing Space.jpg"
  },
  {
    "id": 12,
    "label": "Grounded's Manufacturing Space",
    "Facility Name": "Grounded's Manufacturing Space",
    "lat": 42.3265207,
    "lng": -83.08061254,
    "color": "#000000",
    "Description": "After operating at Newlab at Michigan Central since 2023, Grounded, a company creating fully customizable smart electric RVs and work vans, has expanded their operations into 13,000 square feet of Michigan Central facilities on St. Anne Street. Grounded's expansion exemplifies the opportunities that the area's abundant industrial-zoned real estate provides to grow product development and manufacturing in Detroit.",
    "Key Features": "",
    "image": "public/marker-images/Grounded Manufacturing Space.jpg"
  },
  {
    "id": 15,
    "label": "Port of Monroe",
    "Facility Name": "Port of Monroe",
    "lat": 0,
    "lng": 0,
    "color": "#43825A",
    "Description": "A unique testing ground for supply chain innovation 35 miles from Michigan Central. As the country's first state-owned container port and Michigan's only port on Lake Erie, the Port of Monroe offers an unprecedented opportunity to test freight and logistics solutions where water, rail, and road transportation converge. Through a partnership with Newlab and the State of Michigan, companies can pilot everything from autonomous boats to battery-powered rail cars in a real working port environment.",
    "Key Features": "- Country's first state-owned container port, 35 miles away\n- Access to Lake Erie, Detroit River, and Atlantic Ocean",
    "image": "public/marker-images/Port of Monroe.png"
  },
  {
    "id": 16,
    "label": "Bagley Mobility Hub",
    "Facility Name": "Bagley Mobility Hub",
    "lat": 42.32569816,
    "lng": -83.07151709,
    "color": "#000000",
    "Description": "A modern mobility center with 1,200 parking spots that is also a testing ground for electric vehicles and transportation solutions. This facility features multiple levels of EV charging, autonomous vehicle testing areas, and e-bike/e-scooter stations where companies can test new technologies with real users. It also serves the community with outdoor plazas, the Michigan Central Info Center, and access to the Southwest Greenway.",
    "Key Features": "- 1,200 parking spots with Level-2 and Level-3 chargers\n- Open-source data access for EV trend analysis",
    "image": "public/marker-images/Bagleymobilityhub.JPG"
  },
  {
    "id": 17,
    "label": "America's First Electrified Public Road",
    "Facility Name": "America's First Electrified Road",
    "lat": 42.32992106,
    "lng": -83.07398549,
    "color": "#9B59B6",
    "Description": "The nation's first public road that can charge electric vehicles while they drive using wireless technology built into the pavement. In addition to the road - built in partnership with the state of Michigan, City of Detroit, and wireless charging company Electreon -- they also have parking spots nearby that charge cars wirelessly, no plugging in required.",
    "Key Features": "- Built with Michigan DOT and Electreon technology\n- 2 nearby parking spots with wireless charging",
    "image": "public/marker-images/America_s First Electrified Road.jpg"
  },
  {
    "id": 18,
    "label": "Aerial Ops Center",
    "Facility Name": "Aerial Ops Center",
    "lat": 42.32738629,
    "lng": -83.0772868,
    "color": "#9B59B6",
    "Description": "Mission control for drone testing, located on the 12th floor of The Station. This aerial operations center features multi-screen monitoring walls, 360-degree visual line of sight of the surrounding area, flexible command centers, and collaboration spaces that multiple companies can share simultaneously for safe, coordinated drone testing operations.",
    "Key Features": "- 12th floor of The Station with 360-degree visual coverage\n- Large multi-screen video wall and 2 command centers",
    "image": "public/marker-images/Aerial Ops.jpg"
  },
  {
    "id": 19,
    "label": "Scaled Launch Facility",
    "Facility Name": "Scaled Launch Facility",
    "lat": 42.32872407,
    "lng": -83.0822833,
    "color": "#000000",
    "Description": "A half-acre outdoor testing ground next to The Station for drone operations and other technology testing. This flexible space offers rentable areas with industrial power, fiber internet, and adaptable infrastructure, all coordinated with the 12th-floor operations center for safe, controlled testing of aerial mobility and other innovations.",
    "Key Features": "- Half-acre outdoor space with up to 480-volt power\n- Fiber internet and adaptable power tray system",
    "image": "public/marker-images/Scaled launch facility.jpeg"
  },
  {
    "id": 20,
    "label": "",
    "Facility Name": "The Launchpad",
    "lat": 42.3282884,
    "lng": -83.07564166,
    "color": "#27AE60",
    "Description": "A 900-square-foot rooftop drone launch platform where multiple companies can safely take off and land their drones. This shared-access launchpad sits at the heart of the innovation ecosystem and enables testing of small drones doing everything from food and medication delivery to building inspections.",
    "Key Features": "- 900-sq-ft rooftop drone launch platform on Newlab\n- Fully integrated with AAIR control systems",
    "image": "public/marker-images/Launchpad.JPG"
  },
  {
    "id": 23,
    "label": "Smart Light Posts",
    "Facility Name": "Smart Light Posts",
    "lat": 42.32462487,
    "lng": -83.06946665,
    "color": "#5DADE2",
    "Description": "Smart street lights throughout the campus equipped with power and internet connections that companies can use to test urban technologies. Teams can install sensors and other equipment on the posts, as well, in order to conduct more tailored pilots that help them improve their new technologies and solutions.",
    "Key Features": "- Throughout 30 acres with built-in power and data connectivity\n- Ready-made infrastructure for smart city technology pilots",
    "image": "public/marker-images/light post.jpeg"
  },
  {
    "id": 24,
    "label": "Urban Location",
    "Facility Name": "Urban Location",
    "lat": 42.32698034,
    "lng": -83.06843792,
    "color": "#4A90E2",
    "Description": "A city location in the heart of Detroit surrounded by neighborhoods, retail, restaurants, and parks provides a testing environment with real community, traffic, and urban challenges that companies need to solve.",
    "Key Features": "",
    "image": "public/marker-images/Urban Location.png"
  },
  {
    "id": 25,
    "label": "Railroad",
    "Facility Name": "Railroad",
    "lat": 42.32787627,
    "lng": -83.07998979,
    "color": "#F39C12",
    "Description": "Located in the heart of Detroit, providing the perfect real-world testing environment with real traffic, pedestrians, and urban challenges that companies need to solve.",
    "Key Features": "",
    "image": "public/marker-images/Railroad.png"
  },
  {
    "id": 26,
    "label": "Detroit River",
    "Facility Name": "Detroit River",
    "lat": 42.31504917,
    "lng": -83.06827804,
    "color": "#43825A\n",
    "Description": "Proximity to the Detroit River and Great Lakes provides access to testing maritime technologies and water-based transportation.",
    "Key Features": "",
    "image": "public/marker-images/River.jpg"
  },
  {
    "id": 27,
    "label": "US-Canada Border",
    "Facility Name": "US-Canada Border",
    "lat": 42.31799036,
    "lng": -83.06186521,
    "color": "#43825A",
    "Description": "A location just minutes from the Canadian border can offer unique opportunities for international logistics solutions and connects Detroit innovation to global markets.",
    "Key Features": "",
    "image": "public/marker-images/Canada border.png"
  },
  {
    "id": 28,
    "label": "Roosevelt Park",
    "Facility Name": "Roosevelt Park",
    "lat": 42.33037661,
    "lng": -83.07715093,
    "color": "#43825A",
    "Description": "Located in Michigan Ave, most people probably think of Roosevelt Park as the front lawn of Michigan Central Station. Indeed, it is it's own City of Detroit park. Nestled between two of Detroit's most vibrant neighborhoods.",
    "Key Features": "Roosevelt Park brings southwest Detroit community together through collaboration",
    "image": "public/marker-images/Roosevelt Park.JPG"
  },
  {
    "id": 29,
    "label": "",
    "Facility Name": null,
    "lat": 42.33016061,
    "lng": -83.07923878,
    "color": "#4A90E2",
    "Description": null,
    "Key Features": null,
    "image": "public/marker-images/29.png"
  },
  {
    "id": 30,
    "label": "",
    "Facility Name": "",
    "lat": 42.33191445,
    "lng": -83.07368441,
    "color": "#4A90E2",
    "Description": null,
    "Key Features": null,
    "image": "public/marker-images/30.png"
  },
  {
    "id": 31,
    "label": "",
    "Facility Name": null,
    "lat": 42.3301765,
    "lng": -83.07198088,
    "color": "#4A90E2",
    "Description": null,
    "Key Features": null,
    "image": "public/marker-images/31.png"
  },
  {
    "id": 32,
    "label": "",
    "Facility Name": null,
    "lat": 42.33030902,
    "lng": -83.07070499,
    "color": "#4A90E2",
    "Description": null,
    "Key Features": null,
    "image": "public/marker-images/32.png"
  }
];

// --- Supabase Functions ---
async function fetchMarkersFromSupabase() {
  if (!supabaseClient) return [];
  
  try {
    const { data, error } = await supabaseClient.from('markers').select('*');
    if (error) throw error;
    
    // Debug: Log all markers from Supabase
    console.log('📊 All Supabase markers:', data);
    
    // Cache the fresh data
    cacheManager.cacheMarkers(data);
    
    // Store in global variable for easier access
    allSupabaseMarkers = data;
    
    return data;
  } catch (error) {
    console.error('❌ Supabase fetch error:', error);
    return []; // Return empty array on error
  }
}

// --- CSV Data Processing ---
function processCSVMarkerData(rawMarker) {
  // Parse coordinates from "Coordinates" column or use lat/lng directly
  let lat = rawMarker.lat;
  let lng = rawMarker.lng;
  
  if (rawMarker["Coordinates"] && typeof rawMarker["Coordinates"] === 'string') {
    const coords = rawMarker["Coordinates"].split(',').map(c => parseFloat(c.trim()));
    if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
      lat = coords[0];
      lng = coords[1];
    }
  }

  // Parse features from "Key Features" column (pipe-separated)
  let features = [];
  if (rawMarker["Key Features"]) {
    features = rawMarker["Key Features"].split('|').map(f => f.trim()).filter(f => f);
  }

  // Map category to color (using exact category names from your data)
  const categoryColors = {
    'main buildings & workspaces': '#4A90E2',
    'making & building spaces': '#E74C3C', 
    'making & building spaces': '#E74C3C',
    'testing & innovation zones': '#9B59B6',
    'drone & aerial technology': '#27AE60',
    'data & technology infrastructure': '#5DADE2',
    'strategic location advantages': '#F39C12'
  };

  const categoryKey = rawMarker["Category"]?.toLowerCase() || '';
  const color = rawMarker.color || categoryColors[categoryKey] || '#4A90E2';

  return {
    id: rawMarker.id || rawMarker["Label"],
    label: rawMarker["Label"],
    name: rawMarker["Facility Name"],
    lat: lat,
    lng: lng,
    color: color,
    category: rawMarker["Category"],
    address: rawMarker["Address"],
    size: rawMarker["Size/Capacity"],
    description: rawMarker["Description"],
    features: features,
    location: rawMarker["Location"],
    image: rawMarker["image"],
    // Keep original text field for marker display
    text: rawMarker["Label"] || rawMarker.id?.toString()
  };
}

// --- Cache-First Loading System ---
async function loadMarkersWithCache() {
  // Step 1: Try to load from cache immediately
  const cachedResult = cacheManager.getCachedMarkers();
  let markers = [];
  
  if (cachedResult) {
    markers = cachedResult.markers;
    console.log(`⚡ Using ${markers.length} cached markers`);
    
    // Display cached markers immediately
    displayMarkers(markers);
    
    // If data is stale and we're online, sync in background
    if (cachedResult.isStale && cacheManager.isOnline) {
      backgroundSyncMarkers();
    }
  } else {
    // Step 2: No cache available, fetch from Supabase
    console.log("📡 Fetching fresh data...");
    markers = await fetchFromSupabaseWithFallback();
    
    if (markers.length > 0) {
      displayMarkers(markers);
      cacheManager.cacheMarkers(markers);
    }
  }
  
  // Step 3: Set up periodic background sync
  setupBackgroundSync();
  
  return markers;
}

async function fetchFromSupabaseWithFallback() {
  try {
    const supabaseMarkers = await fetchMarkersFromSupabase();
    if (supabaseMarkers.length > 0) {
      console.log("✅ Successfully loaded markers from Supabase");
      console.log("📷 Sample Supabase image path:", supabaseMarkers[0]?.image);
      return supabaseMarkers;
    }
  } catch (error) {
    console.log("⚠️ Supabase failed to load markers:", error);
  }
  
  // Fallback to local markers when Supabase is blocked (e.g., by Cisco Umbrella firewall)
  console.log("🔄 Using fallback marker data (Supabase may be blocked by network firewall)");
  console.log("📷 Sample fallback image path:", FALLBACK_MARKERS[0]?.image);
  return FALLBACK_MARKERS;
}

async function backgroundSyncMarkers() {
  console.log("🔄 Background sync starting...");
  try {
    const freshMarkers = await fetchMarkersFromSupabase();
    if (freshMarkers.length > 0) {
      // Check if markers have Supabase URLs (would be blocked by firewall)
      const hasSupabaseUrls = freshMarkers.some(m => m.image && m.image.includes('supabase.co'));
      
      // If we're using fallback markers (local paths), don't overwrite with Supabase URLs
      const usingFallback = allSupabaseMarkers.some(m => m.image && m.image.startsWith('public/'));
      
      if (hasSupabaseUrls && usingFallback) {
        console.log("⚠️ Skipping sync: Supabase URLs would be blocked, keeping fallback data");
        return;
      }
      
      cacheManager.cacheMarkers(freshMarkers);
      
      // Check if data changed, if so, update display
      const cachedResult = cacheManager.getCachedMarkers();
      if (cachedResult && JSON.stringify(cachedResult.markers) !== JSON.stringify(freshMarkers)) {
        console.log("🔄 Data updated, refreshing display");
        displayMarkers(freshMarkers);
      }
    }
  } catch (error) {
    console.log("⚠️ Background sync failed:", error.message);
  }
}

function setupBackgroundSync() {
  // Sync every 5 minutes when online
  setInterval(() => {
    if (cacheManager.isOnline) {
      backgroundSyncMarkers();
    }
  }, CACHE_CONFIG.SYNC_INTERVAL);
}

function displayMarkers(markers) {
  // Store Supabase markers globally for info panel access
  allSupabaseMarkers = markers;
  
  // Remove existing markers
  const existingMarkers = document.querySelectorAll('.marker');
  existingMarkers.forEach(marker => {
    const parent = marker.parentElement;
    if (parent && parent.classList.contains('mapboxgl-marker')) {
      parent.remove();
    }
  });
  
  // Add new markers from Supabase
  addMarkersToMap(markers, 'supabase');
  
  // Cache images in background (force download for offline use)
  if (markers.length > 0) {
    cacheManager.cacheAllImages(markers);
  }
  
  console.log(`✅ ${markers.length} markers loaded from Supabase`);
}

// --- Cache Management System ---
const CACHE_KEYS = {
  MARKERS: 'cached_markers',
  IMAGES: 'cached_images',
  LAST_SYNC: 'last_sync_timestamp',
  APP_VERSION: 'app_cache_version'
};

const CACHE_CONFIG = {
  MAX_AGE: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  CURRENT_VERSION: '1.1.1',
  SYNC_INTERVAL: 5 * 60 * 1000 // 5 minutes for background sync
};

class CacheManager {
  constructor() {
    this.isOnline = navigator.onLine;
    this.setupOnlineDetection();
    this.initializeCache();
  }

  setupOnlineDetection() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      console.log('🌐 Back online');
      this.updateConnectionStatus();
      this.backgroundSync();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      console.log('📱 Offline mode');
      this.updateConnectionStatus();
    });

    // Initial status
    this.updateConnectionStatus();
  }

  updateConnectionStatus() {
    const statusEl = document.getElementById('connection-status');
    
    if (!statusEl) return;

    // Simple red circle when offline, hidden when online
    if (this.isOnline) {
      statusEl.style.background = 'rgba(46, 204, 113, 0.9)'; // Green but will be hidden
      statusEl.style.display = 'none'; // Hide when online
    } else {
      statusEl.style.background = 'rgba(231, 60, 60, 0.9)'; // Red circle
      statusEl.style.display = 'block'; // Show when offline
    }
  }

  initializeCache() {
    // Check if cache version matches current app version
    const cachedVersion = localStorage.getItem(CACHE_KEYS.APP_VERSION);
    if (cachedVersion !== CACHE_CONFIG.CURRENT_VERSION) {
      console.log('🔄 App version changed - clearing old cache');
      this.clearCache();
      localStorage.setItem(CACHE_KEYS.APP_VERSION, CACHE_CONFIG.CURRENT_VERSION);
    }
  }

  // Get cached markers with freshness check
  getCachedMarkers() {
    try {
      const cachedData = localStorage.getItem(CACHE_KEYS.MARKERS);
      const lastSync = localStorage.getItem(CACHE_KEYS.LAST_SYNC);
      
      if (!cachedData || !lastSync) {
        return null;
      }

      const age = Date.now() - parseInt(lastSync);
      const markers = JSON.parse(cachedData);
      
      // Return cached data regardless of age, but flag if stale
      return {
        markers,
        isStale: age > CACHE_CONFIG.MAX_AGE,
        age: Math.round(age / 1000 / 60) // age in minutes
      };
    } catch (error) {
      console.error('❌ Error reading cache:', error);
      return null;
    }
  }

  // Cache markers data
  cacheMarkers(markers) {
    try {
      localStorage.setItem(CACHE_KEYS.MARKERS, JSON.stringify(markers));
      localStorage.setItem(CACHE_KEYS.LAST_SYNC, Date.now().toString());
      console.log(`💾 Cached ${markers.length} markers`);
      return true;
    } catch (error) {
      console.error('❌ Error caching markers:', error);
      return false;
    }
  }

  // Clear all cache
  clearCache() {
    Object.values(CACHE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    console.log('🗑️ Cache cleared');
  }

  // Background sync when online
  async backgroundSync() {
    if (!this.isOnline) return;
    
    try {
      console.log('🔄 Background sync starting...');
      const freshMarkers = await fetchMarkersFromSupabase();
      
      if (freshMarkers.length > 0) {
        this.cacheMarkers(freshMarkers);
        // Trigger UI update if needed
        this.onDataUpdated?.(freshMarkers);
      }
    } catch (error) {
      console.log('⚠️ Background sync failed:', error.message);
    }
  }

  // Set callback for when data is updated
  onDataUpdate(callback) {
    this.onDataUpdated = callback;
  }

  // --- Image Caching System ---
  
  // Get cached images list
  getCachedImages() {
    try {
      const cachedImages = localStorage.getItem(CACHE_KEYS.IMAGES);
      return cachedImages ? JSON.parse(cachedImages) : {};
    } catch (error) {
      console.error('❌ Error reading cached images:', error);
      return {};
    }
  }

  // Update cached images list
  setCachedImages(imageMap) {
    try {
      localStorage.setItem(CACHE_KEYS.IMAGES, JSON.stringify(imageMap));
      return true;
    } catch (error) {
      console.error('❌ Error saving cached images:', error);
      return false;
    }
  }

  // Cache a single image (force download)
  async cacheImage(imageUrl, markerId) {
    if (!imageUrl || imageUrl.startsWith('public/')) {
      // Skip local images - they're already available
      return true;
    }

    try {
      const cache = await caches.open('images-v1.0.0');
      
      // Force fetch the image (not just cache on request)
      const response = await fetch(imageUrl, {
        mode: 'cors',
        cache: 'no-cache' // Force fresh download
      });
      
      if (response.ok) {
        await cache.put(imageUrl, response.clone());
        
        // Update cached images list
        const cachedImages = this.getCachedImages();
        cachedImages[imageUrl] = {
          markerId,
          cachedAt: Date.now(),
          size: response.headers.get('content-length') || 0
        };
        this.setCachedImages(cachedImages);
        
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  // Cache all images from marker data
  async cacheAllImages(markers) {
    const imageUrls = new Set();
    const currentImages = this.getCachedImages();
    
    // Collect all image URLs from markers
    markers.forEach(marker => {
      if (marker.image && !marker.image.startsWith('public/')) {
        imageUrls.add(marker.image);
      }
    });

    if (imageUrls.size > 0) {
      console.log(`🖼️ Caching ${imageUrls.size} images...`);
    }

    // Remove unused cached images
    const usedUrls = Array.from(imageUrls);
    const unusedUrls = Object.keys(currentImages).filter(url => !usedUrls.includes(url));
    
    if (unusedUrls.length > 0) {
      await this.removeUnusedImages(unusedUrls);
    }

    // Cache new images (limit to 50)
    const urlsToCache = Array.from(imageUrls).slice(0, 50);
    let cachedCount = 0;
    
    // Process images in parallel for faster caching
    const cachePromises = urlsToCache.map(async (imageUrl) => {
      if (!currentImages[imageUrl]) {
        const success = await this.cacheImage(imageUrl);
        if (success) cachedCount++;
        return success;
      }
      return true;
    });
    
    await Promise.all(cachePromises);

    if (cachedCount > 0) {
      console.log(`✅ Cached ${cachedCount} images`);
    }

    return cachedCount;
  }

  // Remove unused images from cache
  async removeUnusedImages(unusedUrls) {
    try {
      const cache = await caches.open('images-v1.0.0');
      const cachedImages = this.getCachedImages();
      
      for (const url of unusedUrls) {
        await cache.delete(url);
        delete cachedImages[url];
      }
      
      this.setCachedImages(cachedImages);
      console.log(`🗑️ Removed ${unusedUrls.length} unused images`);
    } catch (error) {
      console.error('❌ Error removing unused images:', error);
    }
  }

  // Check if image is cached
  async isImageCached(imageUrl) {
    if (imageUrl.startsWith('public/')) return true; // Local images always available
    
    try {
      const cache = await caches.open('images-v1.0.0');
      const response = await cache.match(imageUrl);
      return !!response;
    } catch (error) {
      return false;
    }
  }
}

// Global cache manager instance
const cacheManager = new CacheManager();

// Global marker data store for quick access
let allSupabaseMarkers = [];

// --- Marker Data Access Functions ---
function getMarkerImageByTitle(title) {
  if (!title || !Array.isArray(allSupabaseMarkers)) return null;
  const lower = title.toLowerCase();
  const match = allSupabaseMarkers.find(m =>
    (m["Facility Name"] && String(m["Facility Name"]).toLowerCase() === lower) ||
    (m.label && String(m.label).toLowerCase() === lower)
  );
  return match && match.image ? match.image : null;
}
async function getMarkerDataFromSupabase(labelId) {
  console.log(`🔍 Looking for marker with ID: ${labelId}`);
  
  // First try from global store (faster)
  let marker = allSupabaseMarkers.find(m => 
    m.id == labelId || 
    m.label == labelId || 
    m.name == labelId ||
    (typeof m.id === 'string' && m.id.toLowerCase() === labelId.toLowerCase())
  );
  
  if (!marker) {
    // Try fetching fresh data
    try {
      const markers = await fetchMarkersFromSupabase();
      allSupabaseMarkers = markers; // Update global store
      
      // More flexible matching
      marker = markers.find(m => 
        m.id == labelId || 
        m.label == labelId || 
        m.name == labelId ||
        (typeof m.id === 'string' && m.id.toLowerCase() === labelId.toLowerCase())
      );
      
      // Debug: If still not found, log all IDs for comparison
      if (!marker) {
        console.log(`⚠️ Marker with ID ${labelId} not found. Available IDs:`, 
          markers.map(m => `${m.id} (${m.name || 'unnamed'})`));
          
        // Try matching by name (case insensitive)
        if (typeof labelId === 'string') {
          const normalizedLabelId = labelId.toLowerCase();
          marker = markers.find(m => 
            (m.name && m.name.toLowerCase().includes(normalizedLabelId)) ||
            (m.title && m.title.toLowerCase().includes(normalizedLabelId))
          );
          
          if (marker) {
            console.log(`✅ Found marker by name match: ${marker.id} - ${marker.name}`);
          }
        }
      }
    } catch (error) {
      console.log('⚠️ Could not fetch marker data from Supabase');
      return null;
    }
  }
  
  if (marker) {
    // Convert Supabase data to expected format
    return {
      title: marker.name || marker["Facility Name"] || marker.Label,
      category: marker.category || marker["Category"],
      description: marker.description || marker["Description"],
      address: marker.address || marker["Address"],
      size: marker.size || marker["Size/Capacity"],
      location: marker.location || marker["Location"],
      features: marker.features || (marker["Key Features"] ? marker["Key Features"].split('|').map(f => f.trim()).filter(f => f) : []), // Use Key Features column
      image: marker.image || marker["image"], // Use image column
      color: marker.color,
      categoryColor: marker.color
    };
  }
  
  return null;
}

// --- Supabase CRUD Operations ---
async function saveMarkerToSupabase(markerData) {
  console.log("💾 Saving marker to Supabase...", markerData);
  try {
    const { data, error } = await supabaseClient
      .from('markers')
      .upsert(markerData)
      .select();
    
    if (error) throw error;
    console.log("✅ Marker saved successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("❌ Error saving marker:", error.message);
    return { success: false, error: error.message };
  }
}

async function deleteMarkerFromSupabase(markerId) {
  console.log("🗑️ Deleting marker from Supabase...", markerId);
  try {
    const { data, error } = await supabaseClient
      .from('markers')
      .delete()
      .eq('id', markerId)
      .select();
    
    if (error) throw error;
    console.log("✅ Marker deleted successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("❌ Error deleting marker:", error.message);
    return { success: false, error: error.message };
  }
}

async function createNewMarkerInSupabase(markerData) {
  console.log("➕ Creating new marker in Supabase...", markerData);
  try {
    const { data, error } = await supabaseClient
      .from('markers')
      .insert(markerData)
      .select();
    
    if (error) throw error;
    console.log("✅ New marker created successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("❌ Error creating marker:", error.message);
    return { success: false, error: error.message };
  }
}

// --- Marker Creation Functions ---
function createMarkerElement(markerData, source = 'hardcoded') {
  const el = document.createElement('div');
  el.className = 'custom-marker';
  
  // Apply custom colors for specific labels/ids
  // Make these labels green: Urban Location (24), Railroad (25), Detroit River (26), US-Canada Border (27), Roosevelt Park (28)
  const greenIds = new Set([24, 25, 26, 27, 28]);
  if (greenIds.has(Number(markerData.id))) {
    el.style.backgroundColor = '#4C7B3B';
  } else {
    // Default to black for all others
    el.style.backgroundColor = '#000000';
  }
  
  // Store the marker ID as a data attribute for easier reference
  el.setAttribute('data-id', markerData.id);

  // Try multiple possible column names for the marker text (case-sensitive!)
  const displayText = markerData.Label || 
                     markerData.label || 
                     markerData.name || 
                     markerData.title || 
                     markerData.facility_name || 
                     markerData.location_name ||
                     markerData.text || 
                     markerData.id.toString();
  
  // Special handling for Newlab consolidated card (ID 2)
  if (markerData.id == 2) {
    el.className = 'custom-marker newlab-consolidated';
    
    // Create a more complex marker with sub-facility list
    const titleDiv = document.createElement('div');
    titleDiv.className = 'marker-title';
    titleDiv.textContent = "Newlab at Michigan Central";
    el.appendChild(titleDiv);
    
    // Get the enhanced data for Newlab
    const enhancedData = ENHANCED_MARKER_DATA[2];
    if (enhancedData && enhancedData.subFacilities) {
      const subList = document.createElement('ul');
      subList.className = 'subfacility-list';
      
      // Add each sub-facility to the list
      enhancedData.subFacilities.forEach(facility => {
        const listItem = document.createElement('li');
        listItem.textContent = facility.title;
        listItem.dataset.facilityId = facility.id;
        
        // Add click handler for each sub-facility
        listItem.addEventListener('click', (e) => {
          e.stopPropagation();
          openSubFacilityPanel(facility.id, facility.title);
        });
        
        subList.appendChild(listItem);
      });
      
      el.appendChild(subList);
    }
    
    // Main click handler for the entire card
    el.addEventListener('click', (e) => {
      if (e.target === el || e.target === titleDiv) {
        e.stopPropagation();
        navigateToLocation(markerData.id);
      }
    });
  } else {
    // Standard marker for other locations
  el.textContent = displayText;

  // Add click listener to go directly to side panel
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    const key = markerData.id || markerData.label;
    navigateToLocation(key);
  });
  }
  
  el.title = markerData.label || `Marker ${markerData.id}`;
  
  return el;
}

function addMarkersToMap(markers, source = 'hardcoded') {
  let validMarkersCount = 0;
  
  markers.forEach(markerData => {
    // Check for empty labels in Supabase markers
    if (source === 'supabase') {
      // Check all possible label fields
      const hasLabel = !!(markerData.Label || 
                         markerData.label || 
                         markerData.name || 
                         markerData.title || 
                         markerData.facility_name || 
                         markerData.location_name ||
                         markerData.text);
      
      if (!hasLabel) {
        console.warn(`⚠️ Skipping marker with empty label:`, markerData);
        return; // Skip this marker
      }
    }
    
    // Validate coordinates before creating marker
    const lat = parseFloat(markerData.lat);
    const lng = parseFloat(markerData.lng);
    
    if (isNaN(lat) || isNaN(lng) || lat === 0 || lng === 0) {
      console.warn(`⚠️ Skipping marker with invalid coordinates:`, markerData);
      return; // Skip this marker
    }
    
    // Check if coordinates are within reasonable bounds (rough world bounds)
    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      console.warn(`⚠️ Skipping marker with out-of-bounds coordinates:`, markerData);
      return; // Skip this marker
    }
    
    const el = createMarkerElement(markerData, source);
    
    // Get height/elevation if specified, default to 0
    const height = parseFloat(markerData.height) || 0;
    
    // Create the Mapbox marker but DON'T add to map yet
    const marker = new mapboxgl.Marker(el)
      .setLngLat([lng, lat]);
      
    // Store height with the marker for use during rendering
    marker._height = height;

    // Add to our custom array for synced rendering
    syncedMarkers.push({ element: el, marker: marker });
    validMarkersCount++;
  });
  
  console.log(`✅ Queued ${validMarkersCount}/${markers.length} valid ${source} markers for synced rendering`);
}

// Function to create elevated labels using symbol-z-elevate
function createElevatedLabels() {
  console.log('🏷️ Creating elevated labels with symbol-z-elevate');
  
  // Create a GeoJSON source for our elevated labels
  const elevatedLabelsData = {
    type: 'FeatureCollection',
    features: []
  };
  
  // Add features for each marker that has a height property
  newMarkers.forEach(marker => {
    if (marker.height) {
      elevatedLabelsData.features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [marker.lng, marker.lat]
        },
        properties: {
          id: marker.id,
          title: getMarkerTitle(marker),
          height: marker.height,
          color: marker.color || '#000000'
        }
      });
    }
  });
  
  // Add the source to the map
  if (map.getSource('elevated-labels')) {
    map.removeSource('elevated-labels');
  }
  
  map.addSource('elevated-labels', {
    type: 'geojson',
    data: elevatedLabelsData
  });
  
  console.log(`✅ Added ${elevatedLabelsData.features.length} elevated labels`);
  
  // Now add the symbol layer with z-elevate
  addElevatedSymbolLayer();
}

// Helper function to get marker title
function getMarkerTitle(marker) {
  return marker.Label || 
         marker.label || 
         marker.name || 
         marker.title || 
         marker.facility_name || 
         marker.location_name ||
         marker.text || 
         `Marker ${marker.id}`;
}

// Function to add the elevated symbol layer
function addElevatedSymbolLayer() {
  // Remove existing layer if it exists
  if (map.getLayer('elevated-labels')) {
    map.removeLayer('elevated-labels');
  }
  
  // Add the symbol layer with z-elevate
  map.addLayer({
    id: 'elevated-labels',
    type: 'symbol',
    source: 'elevated-labels',
    layout: {
      'text-field': ['get', 'title'],
      'text-size': 14,
      'text-anchor': 'center',
      'text-offset': [0, -1], // Offset text slightly above the point
      'symbol-placement': 'point',
      'symbol-z-elevate': true, // This is the key property for elevation
      'text-allow-overlap': true,
      'text-ignore-placement': true
    },
    paint: {
      'text-color': ['get', 'color'],
      'text-halo-color': '#ffffff',
      'text-halo-width': 1
    }
  });
  
  console.log('✅ Added elevated symbol layer with z-elevate');
  
  // Add a helper function to toggle elevated labels
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'h' || e.key === 'H') && 
        document.activeElement.tagName !== 'INPUT' && 
        document.activeElement.tagName !== 'TEXTAREA') {
      toggleElevatedLabels();
    }
  });
}

// Function to toggle elevated labels
function toggleElevatedLabels() {
  if (map.getLayer('elevated-labels')) {
    const visibility = map.getLayoutProperty('elevated-labels', 'visibility');
    const newVisibility = visibility === 'visible' ? 'none' : 'visible';
    map.setLayoutProperty('elevated-labels', 'visibility', newVisibility);
    console.log(`🏷️ Elevated labels ${newVisibility === 'visible' ? 'shown' : 'hidden'} (H key)`);
  }
}

// Function to adjust marker elevation and update the map
function adjustMarkerElevation(markerId, newHeight) {
  console.log(`🔼 Adjusting elevation of marker ${markerId} to ${newHeight}`);
  
  // Find the marker in the newMarkers array
  const marker = newMarkers.find(m => m.id == markerId);
  if (marker) {
    // Update the height in the array
    marker.height = newHeight;
    console.log(`✅ Updated marker ${markerId} height in newMarkers array`);
  }
  
  // Also update using the existing function that handles the GeoJSON source
  updateMarkerHeight(markerId, newHeight);
  
  // Recreate the elevated labels to apply the change
  createElevatedLabels();
  
  return `Marker ${markerId} elevation adjusted to ${newHeight}`;
}

// Make the function available globally for console access
window.adjustMarkerElevation = adjustMarkerElevation;
window.adjustStationElevation = function(height) {
  return adjustMarkerElevation(1, height);
};

// Function to update a marker's height
function updateMarkerHeight(markerId, newHeight) {
  // Find the marker by ID
  const markerItem = syncedMarkers.find(item => {
    const id = item.marker._element.getAttribute('data-id') || 
               item.marker._element.textContent;
    return id == markerId;
  });
  
  if (markerItem) {
    // Update the height
    markerItem.marker._height = newHeight;
    console.log(`✅ Updated marker ${markerId} height to ${newHeight}`);
    
    // Also update the GeoJSON source if it exists
    if (map.getSource('elevated-labels')) {
      const source = map.getSource('elevated-labels');
      const data = source._data;
      
      // Find and update the feature
      const feature = data.features.find(f => f.properties.id == markerId);
      if (feature) {
        feature.properties.height = newHeight;
        source.setData(data);
        console.log(`✅ Updated elevated label height for ${markerId}`);
      }
    }
    
    return true;
  } else {
    console.warn(`⚠️ Marker with ID ${markerId} not found`);
    return false;
  }
}

function syncMarkers() {
  syncedMarkers.forEach((item, index) => {
    try {
      // Check if the marker has been added to the DOM
      if (!item.element.parentNode) {
        // If not, add it now.
        item.marker.addTo(map);
      }
      
      // Get the marker's current screen position
      const pos = item.marker.getLngLat();
      
      // Validate position before projecting
      if (!pos || isNaN(pos.lat) || isNaN(pos.lng)) {
        console.warn(`⚠️ Invalid marker position:`, pos);
        return; // Skip this marker
      }
      
      const screenPos = map.project(pos);
      
      // Validate screen position
      if (isNaN(screenPos.x) || isNaN(screenPos.y) || 
          Math.abs(screenPos.x) > 10000 || Math.abs(screenPos.y) > 10000) {
        console.warn(`⚠️ Invalid screen position for marker:`, screenPos, pos);
        return; // Skip this marker
      }
      
      // Apply height offset if specified (adjust Y coordinate)
      const heightOffset = item.marker._height || 0;
      
      // Calculate the visual height offset based on the map's pitch and zoom
      // This formula adjusts the offset to look more natural in 3D perspective
      const pitch = map.getPitch();
      const zoom = map.getZoom();
      const pitchFactor = Math.sin(pitch * Math.PI / 180); // Convert pitch to radians
      const zoomFactor = Math.pow(2, zoom - 10) * 0.5; // Scale based on zoom level
      
      // Calculate the effective Y offset
      const effectiveYOffset = heightOffset * pitchFactor * zoomFactor;
      
      // Update the element's transform for smooth animation with height offset
      item.element.style.transform = `translate(${screenPos.x}px, ${screenPos.y - effectiveYOffset}px)`;
    } catch (error) {
      console.error(`❌ Error syncing marker ${index}:`, error);
    }
  });
}

// --- Map Refresh Functions ---
async function refreshMapMarkers() {
  console.log("🔄 Refreshing map markers...");
  
  // Remove all existing markers
  const existingMarkers = document.querySelectorAll('.marker');
  existingMarkers.forEach(marker => {
    const parent = marker.parentElement;
    if (parent && parent.classList.contains('mapboxgl-marker')) {
      parent.remove();
    }
  });
  
  // Only add Supabase markers - no hardcoded markers
  try {
    const supabaseMarkers = await fetchMarkersFromSupabase();
    if (supabaseMarkers.length > 0) {
      addMarkersToMap(supabaseMarkers, 'supabase');
      console.log(`🔄 Map refreshed with ${supabaseMarkers.length} Supabase markers`);
    } else {
      console.log('⚠️ No markers available from Supabase');
    }
  } catch (error) {
    console.error('❌ Error refreshing Supabase markers:', error);
  }
}

// --- Transition Helper Functions ---
// Configuration for gradual transition
const TRANSITION_CONFIG = {
  useSupabaseOnly: true, // Using only Supabase markers (CSV data)
  excludeHardcodedIds: [], // Array of hardcoded marker IDs to exclude (replaced by Supabase)
  fallbackToHardcoded: false // Never fall back to hardcoded markers - Supabase only
};

function filterHardcodedMarkers(hardcodedMarkers) {
  if (TRANSITION_CONFIG.useSupabaseOnly) {
    console.log("🔄 Using Supabase-only mode - skipping all hardcoded markers");
    return [];
  }
  
  if (TRANSITION_CONFIG.excludeHardcodedIds.length > 0) {
    const filtered = hardcodedMarkers.filter(marker => 
      !TRANSITION_CONFIG.excludeHardcodedIds.includes(marker.id)
    );
    console.log(`🔄 Excluded ${hardcodedMarkers.length - filtered.length} hardcoded markers (IDs: ${TRANSITION_CONFIG.excludeHardcodedIds.join(', ')})`);
    return filtered;
  }
  
  return hardcodedMarkers;
}

// Connection test removed for cleaner console


mapboxgl.accessToken = 'pk.eyJ1Ijoic3N0dHV1ZGRpaW9vIiwiYSI6ImNtZHhveWU4bDI5djIyam9kY2I3M3pwbHcifQ.ck8h3apHSNVAmTwjz-Oc7w';

const LOCATIONS = {
  rooseveltPark:    {lng: -83.07715093189609, lat: 42.330376609412085, label: 'Roosevelt Park'},
  michiganCentral:  {lng: -83.0776, lat: 42.3289, label: 'Michigan Central'},
  campusMartius:    {lng: -83.0466, lat: 42.3317, label: 'Campus Martius'},
  newlab:           {lng: -83.07242451005243, lat: 42.33118076021261, label: 'The Factory'},
  michiganCentralSVG: {lng: -83.0776, lat: 42.3289, label: 'Michigan Central SVG', address: '2001 15th St, Detroit, MI 48216'}
};

// Define home position for reference - set to specific coordinates for optimal view
const HOME_POSITION = {
  center: [-83.076549, 42.329612],
  zoom: 17.19,
  pitch: 65.50,
  bearing: 154.60
};

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ssttuuddiioo/cmdxew05b001901ry34gb69wy',
  center: HOME_POSITION.center,
  zoom: HOME_POSITION.zoom,
  pitch: HOME_POSITION.pitch,
  bearing: HOME_POSITION.bearing,
  antialias: true,
  dragPan: false, // Disable free roaming/dragging
  minZoom: 15, // Prevent zooming out too far (~1 mile view)
  maxZoom: 20, // Allow close inspection
  maxBounds: [
    [-83.12, 42.29], // Southwest corner (wider bounds around Michigan Central)
    [-83.02, 42.37]  // Northeast corner
  ],
  // Touchscreen-optimized zoom controls
  scrollZoom: { around: 'center' }, // Smooth scroll zoom
  touchZoomRotate: { around: 'center' }, // Pinch zoom from center
  touchPitch: false, // Disable pitch gestures for simpler UX
  doubleClickZoom: true // Allow double-tap to zoom
});

let orbitAnimation; // To hold the animation frame ID
let syncedMarkers = []; // For smooth marker animation
// orbitPaused removed - orbit always continues
let orbitCenter = HOME_POSITION.center; // Use the home position as orbit center

function startOrbitAnimation() {
  const initialBearing = map.getBearing();
  let bearing = initialBearing;

  function animate() {
    // Always animate - no pausing
    bearing += 0.015; // Adjust for speed
    map.setBearing(bearing);
    map.setPitch(75); // Lower angle to see horizon
    map.setCenter(orbitCenter); // Use dynamic orbit center
    
    orbitAnimation = requestAnimationFrame(animate);
  }

  // Stop any existing animation
  if (orbitAnimation) {
    cancelAnimationFrame(orbitAnimation);
  }
  animate();
  console.log('🚀 Orbit animation started/restarted');
}

// Failsafe mechanism to ensure orbit always continues
function ensureOrbitRunning() {
  if (!orbitAnimation) {
    console.log('⚠️ Orbit stopped unexpectedly, restarting...');
    startOrbitAnimation();
  }
}

// Orbit animation disabled - no auto-restart
// setInterval(ensureOrbitRunning, 2000);

function stopOrbitAnimation() {
  if (orbitAnimation) {
    cancelAnimationFrame(orbitAnimation);
    orbitAnimation = null;
  }
}

// Pause/resume functions removed - orbit always continues

function updateOrbitCenter(lng, lat) {
  orbitCenter = [lng, lat];
  console.log('🎯 Orbit center updated to:', orbitCenter);
}

// Stop orbiting on user interaction (drag disabled)
// map.on('dragstart', stopOrbitAnimation); // Removed as dragging is disabled
map.on('touchstart', stopOrbitAnimation);

const newMarkers = [
    { id: 1, lat: 42.32887642685346, lng: -83.07771868841701, color: '#4A90E2', height: 300 }, // The Station with height offset (100m higher)
    { id: 2, lat: 42.3289336553628, lng: -83.07563729423877, color: '#4A90E2', height: 100 }, // Consolidated Newlab marker with height offset
    { id: 3, lat: 42.331049686201276, lng: -83.07221479556428, color: '#4A90E2', height: 150 }, // The Factory with height offset
    // Removed individual Newlab facilities in favor of consolidated card
    { id: 12, lat: 42.32698343914925, lng: -83.0809899182321, color: '#1b4332' }, // Changed to dark green
    { id: 16, lat: 42.326498496839065, lng: -83.07267505001451, color: '#1b4332' }, // Changed to dark green
    { id: 17, lat: 42.32933148027947, lng: -83.07537518116047, color: '#9B59B6' },
    { id: 18, lat: 42.32846502089401, lng: -83.0778396126792, color: '#9B59B6' },
    { id: 19, lat: 42.32872406892148, lng: -83.08228330495663, color: '#1b4332' }, // Changed to dark green
    { id: 20, lat: 42.32828839662688, lng: -83.07564165737065, color: '#9B59B6' },
    // { id: 22, lat: 42.32706378807067, lng: -83.06791695933897, color: '#9B59B6' }, // removed per request
    { id: 23, lat: 42.3263690476279, lng: -83.07403300892324, color: '#9B59B6' },
    { id: 28, text: "28", lat: 42.32904224480186, lng: -83.08086956713913, color: '#1b4332' },
    { id: 28, text: "28", lat: 42.33016060731937, lng: -83.07923878407165, color: '#1b4332' },
    { id: 28, text: "28", lat: 42.331914452617156, lng: -83.0736844064228, color: '#1b4332' },
    { id: 28, text: "28", lat: 42.330176499429875, lng: -83.07198087929577, color: '#1b4332' },
    { id: 28, text: "28", lat: 42.33030901969737, lng: -83.0707049920504, color: '#1b4332' }
];

// ENHANCED MARKER DATA - Admin Configurable Information
const ENHANCED_MARKER_DATA = {
    // Info panel data
    info: {
        title: "Michigan Central",
        description: "Explore the Michigan Central map and facilities.",
        image: "public/mc.jpg",
        features: []
    },
    
    // Top right button locations
    "newlab-manufacturing": {
        category: "MAKING & BUILDING SPACES",
        title: "The 23rd (Newlab Manufacturing Space)",
        description: "The 23rd is Newlab's advanced manufacturing facility designed to support hardware startups and scale-stage companies. This state-of-the-art space provides access to cutting-edge equipment, prototyping resources, and manufacturing expertise.",
        features: [
            "Advanced prototyping and small-batch manufacturing capabilities",
            "CNC machines, 3D printers, and precision tooling",
            "Expert staff providing technical support and manufacturing guidance",
            "Dedicated space for hardware startups to scale production",
            "Flexible manufacturing layouts to accommodate diverse production needs"
        ],
        image: "public/marker-images/The 23rd.jpg"
    },
    
    "tiz": {
        category: "TESTING & INNOVATION ZONES",
        title: "Transportation Innovation Zone (TIZ)",
        description: "The Transportation Innovation Zone (TIZ) is a designated area for testing and deploying next-generation mobility solutions in real-world conditions. This controlled environment allows companies to validate autonomous vehicles, smart infrastructure, and connected mobility technologies.",
        features: [
            "Dedicated lanes for autonomous vehicle testing",
            "Smart infrastructure with V2X communication capabilities",
            "Variable road conditions for diverse testing scenarios",
            "Real-time data collection and analytics systems",
            "Secure testing environment with safety protocols"
        ],
        image: "public/about/slideshow1.jpg"
    },
    
    "aair": {
        category: "TESTING & INNOVATION ZONES",
        title: "Advanced Aerial Innovation Region (AAIR)",
        description: "The Advanced Aerial Innovation Region (AAIR) is a specialized testing zone for unmanned aerial systems and drone technologies. This controlled airspace allows for the development and validation of aerial mobility solutions, delivery systems, and infrastructure inspection technologies.",
        features: [
            "FAA-approved drone testing corridor",
            "Drone delivery testing facilities",
            "Urban air mobility simulation environment",
            "Charging and docking infrastructure for aerial systems",
            "Advanced air traffic management systems"
        ],
        image: "public/about/slideshow3.jpg"
    },
    
    "port-monroe": {
        category: "STRATEGIC LOCATION ADVANTAGES",
        title: "Port of Monroe",
        description: "The Port of Monroe is Michigan's only port on Lake Erie, providing critical maritime transportation infrastructure for the region. This strategic asset connects Michigan Central to international shipping routes and supports multimodal transportation solutions for manufacturing and logistics operations.",
        features: [
            "Deep-water port facilities for international shipping",
            "Intermodal connections to rail and highway networks",
            "Warehousing and distribution capabilities",
            "Sustainable shipping practices and green port initiatives",
            "Gateway to the Great Lakes shipping network and St. Lawrence Seaway"
        ],
        image: "public/about/slideshow4.webp"
    },
    
    // Blue - Transportation/Logistics  
    1: {
        category: "🏢 MAIN BUILDINGS & WORKSPACES",
        title: "The Station",
        description: "The heart of Michigan Central, this beautifully restored historic train station is now a modern innovation hub. Home to offices, meeting spaces, events, and programs that bring together entrepreneurs, students, and established companies.",
        features: [
            {icon: "🚗", text: "Ford's innovation teams working on autonomous driving"},
            {icon: "💻", text: "Google Code Next computer science programs for high school students"},
            {icon: "🏢", text: "Flexible workspace and meeting rooms"},
            {icon: "🎪", text: "Event spaces and community programming"},
            {icon: "🎓", text: "Youth education programs (23,000 sq ft dedicated space)"}
        ],
        size: "18 floors",
        address: "Central campus",
        categoryColor: "#4A90E2",
        image: "public/about/team1.jpg"
    },
    
    // Add explicit data for all locations in the Explore Locations panel - CORRECT MAPPING
    12: {
        category: "MAKING & BUILDING SPACES",
        title: "Manufacturing Space for Scale-Stage Companies",
        description: "Advanced manufacturing facility designed for companies transitioning from prototype to production scale.",
        features: [
            {icon: "🏭", text: "Flexible manufacturing space"},
            {icon: "🔧", text: "Advanced tooling and equipment"},
            {icon: "📦", text: "Production scaling resources"}
        ],
        image: "public/about/slideshow1.jpg"
    },
    16: {
        category: "TRANSPORTATION HUB",
        title: "Bagley Mobility Hub",
        description: "Multi-modal transportation center connecting various mobility options.",
        features: [
            {icon: "🚗", text: "EV charging stations"},
            {icon: "🚲", text: "Bike and scooter sharing"},
            {icon: "🚌", text: "Public transit connections"}
        ],
        image: "public/about/slideshow3.jpg"
    },
    17: {
        category: "TESTING & INNOVATION ZONES",
        title: "America's First Electrified Public Road",
        description: "Pioneering roadway with embedded wireless charging for electric vehicles.",
        features: [
            {icon: "⚡", text: "Wireless EV charging"},
            {icon: "🛣️", text: "Smart road infrastructure"},
            {icon: "🔋", text: "Sustainable transportation"}
        ],
        image: "public/about/slideshow2.jpg"
    },
    19: {
        category: "TESTING & INNOVATION ZONES",
        title: "Scaled Launch Facility",
        description: "Dedicated space for launching and scaling mobility startups and innovations.",
        features: [
            {icon: "🚀", text: "Startup incubation"},
            {icon: "💼", text: "Business development resources"},
            {icon: "🔍", text: "Market testing facilities"}
        ],
        image: "public/about/slideshow1.jpg"
    },
    22: {
        category: "DATA & TECHNOLOGY INFRASTRUCTURE",
        title: "Edge Server Platform",
        description: "Distributed computing infrastructure supporting real-time data processing for mobility applications.",
        features: [
            {icon: "💻", text: "Low-latency computing"},
            {icon: "📊", text: "Real-time data analytics"},
            {icon: "🔒", text: "Secure edge computing"}
        ],
        image: "public/about/slideshow1.jpg"
    },
    23: {
        category: "DATA & TECHNOLOGY INFRASTRUCTURE",
        title: "Smart Light Posts",
        description: "Connected lighting infrastructure with integrated sensors and technology.",
        features: [
            {icon: "💡", text: "Energy-efficient LED lighting"},
            {icon: "🔌", text: "Integrated IoT sensors"},
            {icon: "📡", text: "WiFi connectivity points"}
        ],
        image: "public/about/slideshow2.jpg"
    },
    25: {
        category: "TRANSPORTATION HUB",
        title: "Railway",
        description: "Historic railway connection reimagined for modern mobility solutions.",
        features: [
            {icon: "🚆", text: "Multi-modal transportation hub"},
            {icon: "🏙️", text: "Urban connectivity"},
            {icon: "🔄", text: "Sustainable transit options"}
        ],
        image: "public/about/slideshow3.jpg"
    },
    2: {
        category: "🚂 TRANSPORTATION/LOGISTICS",
        title: "Newlab at Michigan Central", 
        description: "Newlab at Michigan Central is a collaborative workspace and platform for technology development, focusing on connected and autonomous vehicles, smart cities, and advanced manufacturing.",
        features: [
            {icon: "🔬", text: "Digital Fabrication Shop"},
            {icon: "🪚", text: "Wood Shop"},
            {icon: "🔩", text: "Metal Shop"},
            {icon: "⚡", text: "Electronics Lab"},
            {icon: "🛠️", text: "Machine Shop"},
            {icon: "📏", text: "Physical Metrology Shop"},
            {icon: "🎨", text: "Casting and Finishing Shop"},
            {icon: "🏭", text: "Manufacturing Space"},
            {icon: "🚀", text: "The Launchpad"}
        ],
        subFacilities: [
            {id: "newlab-fab", title: "Digital Fabrication Shop", description: "Our Digital Fabrication Shop features the latest in 3D printing, CNC machining, and digital design tools, enabling rapid prototyping and small-batch production."},
            {id: "newlab-wood", title: "Wood Shop", description: "A fully equipped woodworking shop combining traditional craftsmanship with modern CNC capabilities for furniture, prototypes, and architectural elements."},
            {id: "newlab-metal", title: "Metal Shop", description: "Cutting, welding, bending and forming metal parts with fiber laser, press brake, welders, tube roller and more for professional-grade fabrication."},
            {id: "newlab-electronics", title: "Electronics Lab", description: "State-of-the-art electronics lab for circuit design, microcontroller programming, and IoT device development."},
            {id: "newlab-machine", title: "Machine Shop", description: "CNC mills and lathes including a 5-axis mill, precision machining equipment and tools for prototype and production-ready components."},
            {id: "newlab-metrology", title: "Physical Metrology Shop", description: "Measurement and inspection with a coordinate measuring arm, 3D scanner, universal testing machine and precision gauges."},
            {id: "newlab-casting", title: "Casting and Finishing Shop", description: "Walk-in spray booth, powder coating, injection molding, vacuum forming and finishing tools to prepare products for market."},
            {id: "newlab-manufacturing", title: "Manufacturing Space", description: "Flexible manufacturing space designed for scaling production from prototype to small batch manufacturing."},
            {id: "newlab-launchpad", title: "The Launchpad", description: "Dedicated space for startups and entrepreneurs to develop and launch mobility innovations."}
        ],
        size: "30,000 sq ft",
        address: "2001 15th St, Detroit, MI 48216",
        categoryColor: "#4A90E2",
        image: "public/about/team2.jpg"
    },
    3: {
        category: "🚂 TRANSPORTATION/LOGISTICS",
        title: "The Factory",
        description: "The Factory is a state-of-the-art manufacturing facility that bridges the gap between prototype and production, offering advanced manufacturing capabilities for mobility and technology companies.",
        features: [
            {icon: "🏭", text: "Advanced Manufacturing"},
            {icon: "🛠️", text: "Prototyping"},
            {icon: "📈", text: "Scale Production"},
            {icon: "⚙️", text: "Equipment Access"}
        ],
        size: "45,000 sq ft",
        address: "19 Vernor Hwy, Detroit, MI 48216",
        categoryColor: "#4A90E2",
        image: "public/about/slide1.jpg"
    },
    
    // Individual sub-facility entries removed - now part of consolidated Newlab card
    6: {
        category: "🏭 MANUFACTURING/WORKSHOP",
        title: "Metal Shop",
        description: "Professional metalworking shop with welding, machining, and forming capabilities for automotive prototypes and industrial applications.",
        features: [
            {icon: "🔥", text: "TIG/MIG Welding"},
            {icon: "⚙️", text: "Metal Lathe"},
            {icon: "🔧", text: "Mill"},
            {icon: "⚡", text: "Plasma Cutting"}
        ],
        size: "4,000 sq ft",
        address: "Building A, Michigan Central Campus",
        categoryColor: "#E74C3C",
        image: "public/about/slideshow1.jpg"
    }
};

map.on('load', async () => {
    dbg("MAP_LOAD", "Map fully loaded");
    
    // Disable fog for clearer visibility
    if (map.setFog) {
        map.setFog(null);
        console.log('🌫️ Fog disabled');
    }

    // Orbit animation disabled - no spinning
    // startOrbitAnimation();

    // Configure map settings for a cleaner look
    map.getCanvas().style.cursor = 'pointer';
    map.setRenderWorldCopies(true);
    
    // Pre-cache essential map resources for offline use
    preCacheMapResources();
    
    // Use cache-first loading system to get markers
    const markers = await loadMarkersWithCache();
    
    // Store markers globally for access
    window.currentMarkers = markers;
    
    // Setup side panel close functionality
    setupSidePanel();
    
    // Force show all labels by default
    if (labelsVisible) {
        showAllLabels();
        // Set button to active state
        const toggleBtn = document.getElementById('toggle-labels');
        if (toggleBtn) toggleBtn.style.opacity = '1';
    }

    // Building highlighting removed as requested

    // Initialize Multi-SVG Editor system
    console.log('🎯 About to initialize SVG Editor...');
    initializeSVGEditor();

    // Start syncing markers with the map's render cycle
    map.on('render', syncMarkers);
});

// Pre-cache essential map resources for 3D buildings
map.once('styledata', async () => {
  try {
    const cache = await caches.open('mapbox-v1.0.0');
    const style = map.getStyle();
    
    if (style && style.sprite) {
      const spritePNG = style.sprite + '.png';
      const spriteJSON = style.sprite + '.json';
      const spriteRetina = style.sprite + '@2x.png';
      
      // Sample glyph for fonts
      const sampleGlyph = 
        'https://api.mapbox.com/fonts/v1/mapbox/Open Sans Regular,Arial Unicode MS Regular/0-255.pbf?access_token=' +
        mapboxgl.accessToken;
      
      // Cache essential resources for 3D buildings
      const resourcesToCache = [
        style.sprite,
        spritePNG,
        spriteJSON,
        spriteRetina,
        sampleGlyph
      ];
      
      await cache.addAll(resourcesToCache.filter(Boolean));
    }
  } catch (error) {
    // Silent fail
  }
});

function preCacheMapResources() {
  // This function is now handled by the styledata event above
}

// NEW SVG Editor State Variables
let currentWorkingSVG = null;
let placedSVGs = new Map();
let nextSVGId = 1;

// PERMANENT SVG PLACEMENTS - These persist when pushed to GitHub
const PERMANENT_SVG_PLACEMENTS = [
  {
    id: "svg-permanent-1",
    filename: "v1.svg",
    position: { lat: 42.32826597, lng: -83.07598112 },
    scale: 0.92,
    rotation: 162.32709,
    color: "#2563eb",
    opacity: 0.7,
    isSaved: true,
    isPermanent: true
  }
];

// MULTIPLE WAYS TO OPEN SVG EDITOR - Bypass problematic gear button
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 DOM Content Loaded - Setting up MULTIPLE SVG Editor triggers');
  
  const panel = document.getElementById('svg-editor');
  
  if (panel) {
    console.log('✅ SVG Editor panel found');
    
    // METHOD 1: Keyboard shortcut (E key) - DISABLED
    // document.addEventListener('keydown', (e) => {
    //   if (e.key === 'e' || e.key === 'E') {
    //     console.log('⌨️ E key pressed - toggling SVG editor');
    //     toggleSVGPanel();
    //   }
    // });
    
    // METHOD 2: Double-click anywhere on map - DISABLED
    // setTimeout(() => {
    //   const mapContainer = document.getElementById('map');
    //   if (mapContainer) {
    //     mapContainer.addEventListener('dblclick', (e) => {
    //       console.log('🖱️ Double-click detected - opening SVG editor');
    //       openSVGPanel();
    //     });
    //   }
    // }, 1000);
    
    // METHOD 3: Right-click context menu - DISABLED
    // document.addEventListener('contextmenu', (e) => {
    //   if (e.target.id === 'map' || e.target.closest('#map')) {
    //     e.preventDefault();
    //     console.log('🖱️ Right-click on map - opening SVG editor');
    //     openSVGPanel();
    //   }
    // });
    
    // METHOD 4: Console commands
    window.openSVGEditor = function() {
      console.log('💻 Console command - opening SVG editor');
      openSVGPanel();
    };
    
    window.clearAllSVGs = function() {
      console.log('🗑️ Console command - clearing all SVGs');
      clearAllSVGsNow();
    };
    
    // METHOD 5: URL hash trigger - DISABLED
    // if (window.location.hash === '#svg-editor') {
    //   console.log('🔗 URL hash detected - opening SVG editor');
    //   openSVGPanel();
    // }
    
    // METHOD 6: Close button handler
    setTimeout(() => {
      const closeBtn = document.getElementById('close-editor-btn');
      if (closeBtn) {
        closeBtn.onclick = function(e) {
          console.log('🚪 Close button clicked');
          closeSVGPanel();
        };
        console.log('✅ Close button handler attached');
      }
    }, 1000);
    
    // METHOD 7: Auto-clear any existing SVGs on page load
    setTimeout(() => {
      console.log('🗑️ Auto-clearing any existing SVGs...');
      clearAllSVGsNow();
    }, 1000);
    
    // METHOD 8: Auto-open DISABLED
    // setTimeout(() => {
    //   console.log('⏰ Auto-opening SVG editor for testing...');
    //   openSVGPanel();
    // }, 4000);
    
    console.log('✅ Multiple SVG editor triggers set up:');
    console.log('   - Press E key');
    console.log('   - Double-click map');
    console.log('   - Right-click map');
    console.log('   - Type: openSVGEditor() in console');
    console.log('   - Add #svg-editor to URL');
    console.log('   - Auto-opens in 3 seconds');
    
  } else {
    console.error('❌ SVG Editor panel not found!');
  }
  
  // Also initialize SVG editor system
  setTimeout(() => {
    console.log('⏰ Initializing SVG Editor system');
    loadAvailableSVGs(); // Load SVGs dynamically
    initializeSVGEditor();
    
    // PREEMPTIVELY LOAD v1.svg for instant placement
    preloadDefaultSVG();
  }, 1000);
  
  // ULTRA-PRECISE KEYBOARD CONTROLS
  setupPrecisionKeyboardControls();
});

// PRELOAD v1.svg FOR INSTANT PLACEMENT
let preloadedSVG = null;

async function preloadDefaultSVG() {
  const defaultFilename = 'v1.svg';
  
  try {
    console.log('🚀 Preloading default SVG:', defaultFilename);
    
    // Check if v1.svg exists
    const response = await fetch(`public/${defaultFilename}`, { method: 'HEAD' });
    if (!response.ok) {
      console.warn('⚠️ v1.svg not found in public folder');
      return;
    }
    
    // Create preloaded SVG object (ready to place)
    preloadedSVG = {
      id: `preloaded-${Date.now()}`,
      filename: defaultFilename,
      position: { 
        lat: 42.3289,  // Default Detroit area
        lng: -83.0776 
      },
      scale: 1.0,     // Start at scale 1
      rotation: 0,
      color: '#ff6b35',
      opacity: 0.8,
      isVisible: true,
      isEditing: true,
      isPreloaded: true
    };
    
    console.log('✅ v1.svg preloaded and ready for instant placement');
    console.log('🎯 Press SPACEBAR anywhere to place and start editing');
    
    // Show status in the precision indicator
    setTimeout(() => {
      const statusPanel = document.getElementById('precision-status');
      const modeIndicator = document.getElementById('mode-indicator');
      
      if (statusPanel && modeIndicator) {
        statusPanel.style.display = 'block';
        statusPanel.style.background = 'rgba(255, 107, 53, 0.9)';
        modeIndicator.textContent = `🚀 v1.svg READY - Press SPACEBAR to place`;
        
        // Auto-hide after 4 seconds
        setTimeout(() => {
          statusPanel.style.display = 'none';
        }, 4000);
      }
    }, 2000);
    
  } catch (error) {
    console.error('❌ Error preloading v1.svg:', error);
  }
}

// ULTRA-PRECISE KEYBOARD CONTROLS SYSTEM
function setupPrecisionKeyboardControls() {
  console.log('⌨️ Setting up ultra-precise keyboard controls');
  
  let precisionMode = 'normal'; // normal, fine, ultra-fine, pixel
  let isShiftHeld = false;
  let isCtrlHeld = false;
  let isAltHeld = false;
  
  // Precision levels with different step sizes
  const precisionLevels = {
    pixel: {     // Pixel-level precision (tiniest movements)
      lat: 0.000001,   // ~0.1 meters
      lng: 0.000001,
      scale: 0.00001,  // 5 decimal places
      rotation: 0.00001 // 5 decimal places
    },
    ultra: {     // Ultra-fine precision
      lat: 0.000005,   // ~0.5 meters  
      lng: 0.000005,
      scale: 0.0001,   // 4 decimal places
      rotation: 0.0001  // 4 decimal places
    },
    fine: {      // Fine precision
      lat: 0.00001,    // ~1 meter
      lng: 0.00001,
      scale: 0.001,    // 3 decimal places
      rotation: 0.001   // 3 decimal places
    },
    normal: {    // Normal precision
      lat: 0.00005,    // ~5 meters
      lng: 0.00005,
      scale: 0.01,     // 2 decimal places
      rotation: 0.01    // 2 decimal places
    }
  };
  
  // Track modifier keys
  document.addEventListener('keydown', (e) => {
    isShiftHeld = e.shiftKey;
    isCtrlHeld = e.ctrlKey || e.metaKey;
    isAltHeld = e.altKey;
    
    // Process if SVG editor is open OR if we're in crosshair mode
    const editorPanel = document.getElementById('svg-editor');
    const isEditorOpen = editorPanel && editorPanel.style.display !== 'none';
    
    if (!isEditorOpen && !crosshairMode) {
      return;
    }
    
    // Determine precision mode based on modifiers
    if (isCtrlHeld && isShiftHeld) {
      precisionMode = 'pixel';
    } else if (isCtrlHeld) {
      precisionMode = 'ultra';
    } else if (isShiftHeld) {
      precisionMode = 'fine';
    } else {
      precisionMode = 'normal';
    }
    
    const precision = precisionLevels[precisionMode];
    let handled = false;
    
    // ARROW KEYS / WASD - Position Control or Map Navigation
    switch(e.code) {
      case 'ArrowUp':
      case 'KeyW':
        if (crosshairMode && !currentWorkingSVG) {
          // Move map up (crosshair stays centered)
          panMapByCrosshair(0, precision.lat);
        } else if (currentWorkingSVG) {
          // Move SVG up
          adjustSVGPosition(precision.lat, 0);
        }
        handled = true;
        break;
      case 'ArrowDown':
      case 'KeyS':
        if (crosshairMode && !currentWorkingSVG) {
          // Move map down (crosshair stays centered)
          panMapByCrosshair(0, -precision.lat);
        } else if (currentWorkingSVG) {
          // Move SVG down
          adjustSVGPosition(-precision.lat, 0);
        }
        handled = true;
        break;
      case 'ArrowLeft':
      case 'KeyA':
        if (crosshairMode && !currentWorkingSVG) {
          // Move map left (crosshair stays centered)
          panMapByCrosshair(-precision.lng, 0);
        } else if (currentWorkingSVG) {
          // Move SVG left
          adjustSVGPosition(0, -precision.lng);
        }
        handled = true;
        break;
      case 'ArrowRight':
      case 'KeyD':
        if (crosshairMode && !currentWorkingSVG) {
          // Move map right (crosshair stays centered)
          panMapByCrosshair(precision.lng, 0);
        } else if (currentWorkingSVG) {
          // Move SVG right
          adjustSVGPosition(0, precision.lng);
        }
        handled = true;
        break;
        
      // ROTATION - Q/E keys
      case 'KeyQ':
        adjustSVGPosition(0, 0, 0, -precision.rotation);
        handled = true;
        break;
      case 'KeyE':
        adjustSVGPosition(0, 0, 0, precision.rotation);
        handled = true;
        break;
        
      // SCALE - Plus/Minus keys
      case 'Equal': // Plus key
      case 'NumpadAdd':
        adjustSVGPosition(0, 0, precision.scale);
        handled = true;
        break;
      case 'Minus':
      case 'NumpadSubtract':
        adjustSVGPosition(0, 0, -precision.scale);
        handled = true;
        break;
        
      // ANCHOR SYSTEM - Set SVG position to crosshair center OR place preloaded SVG
      case 'Space':
        // Disabled spacebar functionality for SVG placement
        // if (currentWorkingSVG) {
        //   // Existing SVG - anchor to crosshair
        //   anchorSVGToCrosshair();
        //   handled = true;
        // } else if (preloadedSVG) {
        //   // First spacebar - place preloaded SVG and start editing
        //   placePreloadedSVG();
        //   handled = true;
        // }
        break;
        
      // CROSSHAIR TOGGLE - Show/hide crosshair for positioning
      case 'KeyC':
        toggleCrosshairMode();
        handled = true;
        break;
        
      // PRECISION MODE INDICATORS
      case 'KeyP':
        if (isCtrlHeld) {
          console.log('🎯 PRECISION CONTROLS:');
          console.log('  Normal: Arrow keys');
          console.log('  Fine: Shift + Arrow keys');
          console.log('  Ultra: Ctrl + Arrow keys'); 
          console.log('  Pixel: Ctrl + Shift + Arrow keys');
          console.log('  Rotation: Q/E keys');
          console.log('  Scale: +/- keys');
          console.log('  🎯 ANCHOR: Spacebar - Move SVG to crosshair center');
          console.log('  🎯 CROSSHAIR: C key - Toggle crosshair mode');
          handled = true;
        }
        break;
    }
    
    if (handled) {
      e.preventDefault();
      e.stopPropagation();
      
      // Show precision mode indicator
      showPrecisionIndicator(precisionMode, precision);
      
      // Show crosshair during adjustment
      showPrecisionCrosshair();
    }
  });
  
  document.addEventListener('keyup', (e) => {
    isShiftHeld = e.shiftKey;
    isCtrlHeld = e.ctrlKey || e.metaKey;
    isAltHeld = e.altKey;
  });
  
  console.log('✅ Ultra-precise keyboard controls ready!');
  console.log('🎯 Use Ctrl+P to show precision help');
}

function showPrecisionIndicator(mode, precision) {
  const modeColors = {
    pixel: '#ff0066',    // Hot pink for pixel precision
    ultra: '#ff6600',    // Orange for ultra-fine
    fine: '#3366ff',     // Blue for fine
    normal: '#00cc66'    // Green for normal
  };
  
  const modeNames = {
    pixel: 'PIXEL',
    ultra: 'ULTRA',
    fine: 'FINE',
    normal: 'NORMAL'
  };
  
  console.log(`🎯 ${modeNames[mode]} PRECISION: lat/lng ±${precision.lat.toFixed(6)}°, scale ±${precision.scale.toFixed(6)}, rotation ±${precision.rotation}°`);
  
  // Update the current SVG indicator with precision mode
  const indicator = document.getElementById('current-svg-indicator');
  if (indicator && currentWorkingSVG) {
    indicator.style.color = modeColors[mode];
    indicator.textContent = `🎯 ${modeNames[mode]}: ${currentWorkingSVG.filename}`;
    
    // Reset color after 1 second
    setTimeout(() => {
      indicator.style.color = '#ff6b35';
      indicator.textContent = `🎯 EDITING: ${currentWorkingSVG.filename}`;
    }, 1000);
  }
}

function showPrecisionCrosshair() {
  const crosshair = document.getElementById('precision-crosshair');
  const liveCoords = document.getElementById('live-coords');
  const precisionModeSpan = document.getElementById('precision-mode');
  
  if (!crosshair) return;
  
  // Show crosshair
  crosshair.style.display = 'block';
  
  // Get current map center coordinates for crosshair position
  const mapCenter = map.getCenter();
  
  // Update live coordinates to show crosshair position
  if (liveCoords) {
    if (currentWorkingSVG) {
      liveCoords.textContent = `SVG: ${currentWorkingSVG.position.lat.toFixed(8)}, ${currentWorkingSVG.position.lng.toFixed(8)}`;
    } else {
      liveCoords.textContent = `Map: ${mapCenter.lat.toFixed(8)}, ${mapCenter.lng.toFixed(8)}`;
    }
  }
  
  // Update precision mode
  if (precisionModeSpan) {
    const mode = getPrecisionMode();
    if (currentWorkingSVG) {
      precisionModeSpan.textContent = `${mode.toUpperCase()} - EDITING: ${currentWorkingSVG.filename}`;
    } else {
      precisionModeSpan.textContent = `${mode.toUpperCase()} - HOVER MODE`;
    }
    precisionModeSpan.style.color = getPrecisionColor(mode);
  }
  
  // Auto-hide after 3 seconds of no movement
  clearTimeout(crosshair.hideTimeout);
  crosshair.hideTimeout = setTimeout(() => {
    crosshair.style.display = 'none';
  }, 3000);
}

function getPrecisionMode() {
  const isShiftHeld = document.querySelector(':focus')?.matches('input') ? false : event?.shiftKey || false;
  const isCtrlHeld = document.querySelector(':focus')?.matches('input') ? false : event?.ctrlKey || event?.metaKey || false;
  
  if (isCtrlHeld && isShiftHeld) return 'pixel';
  if (isCtrlHeld) return 'ultra';
  if (isShiftHeld) return 'fine';
  return 'normal';
}

function getPrecisionColor(mode) {
  const colors = {
    pixel: '#ff0066',
    ultra: '#ff6600', 
    fine: '#3366ff',
    normal: '#00cc66'
  };
  return colors[mode] || '#00cc66';
}

// ANCHOR SYSTEM - Move SVG to crosshair center
function anchorSVGToCrosshair() {
  if (!currentWorkingSVG || !map) {
    console.warn('⚠️ No SVG loaded or map not ready');
    return;
  }
  
  // Get map center (where crosshair is positioned)
  const mapCenter = map.getCenter();
  
  console.log(`🎯 ANCHORING SVG to crosshair position: ${mapCenter.lat.toFixed(8)}, ${mapCenter.lng.toFixed(8)}`);
  
  // Update the input fields first
  const latInput = document.getElementById('lat-input');
  const lngInput = document.getElementById('lng-input');
  
  if (latInput && lngInput) {
    latInput.value = mapCenter.lat.toFixed(8);
    lngInput.value = mapCenter.lng.toFixed(8);
  }
  
  // Update the SVG object
  currentWorkingSVG.position.lat = mapCenter.lat;
  currentWorkingSVG.position.lng = mapCenter.lng;
  
  // Visual feedback
  console.log(`✅ SVG ANCHORED! New position: ${currentWorkingSVG.position.lat.toFixed(8)}, ${currentWorkingSVG.position.lng.toFixed(8)}`);
  
  // Update display and reload SVG immediately
  updateDisplayValues();
  updateSlidersFromInputs();
  loadSVGOnMapNew(currentWorkingSVG);
  
  // Flash confirmation
  const crosshair = document.getElementById('precision-crosshair');
  if (crosshair) {
    crosshair.style.border = '3px solid #00ff00';
    setTimeout(() => {
      crosshair.style.border = 'none';
    }, 500);
  }
}

// CROSSHAIR MODE - Toggle persistent crosshair for positioning
let crosshairMode = false;

function toggleCrosshairMode() {
  crosshairMode = !crosshairMode;
  const crosshair = document.getElementById('precision-crosshair');
  const statusPanel = document.getElementById('precision-status');
  const modeIndicator = document.getElementById('mode-indicator');
  
  if (crosshairMode) {
    console.log('🎯 CROSSHAIR MODE: ON - Use WASD or arrows to navigate, SPACE to anchor SVG');
    if (crosshair) {
      crosshair.style.display = 'block';
      // Clear auto-hide timeout in persistent mode
      clearTimeout(crosshair.hideTimeout);
    }
    
    // Show status panel
    if (statusPanel) {
      statusPanel.style.display = 'block';
      statusPanel.style.background = 'rgba(0, 128, 0, 0.9)'; // Green for crosshair mode
    }
    if (modeIndicator) {
      modeIndicator.textContent = '🎯 CROSSHAIR MODE ACTIVE';
    }
    
    // Add map navigation controls in crosshair mode
    setupCrosshairNavigation();
    
    // Update crosshair continuously
    updateCrosshairDisplay();
    
  } else {
    console.log('🎯 CROSSHAIR MODE: OFF');
    if (crosshair) {
      crosshair.style.display = 'none';
    }
    if (statusPanel) {
      statusPanel.style.display = 'none';
    }
    removeCrosshairNavigation();
  }
}

function updateCrosshairDisplay() {
  if (!crosshairMode) return;
  
  const liveCoords = document.getElementById('live-coords');
  const precisionModeSpan = document.getElementById('precision-mode');
  
  if (map && liveCoords) {
    const mapCenter = map.getCenter();
    liveCoords.textContent = `CENTER POINT: ${mapCenter.lat.toFixed(8)}, ${mapCenter.lng.toFixed(8)}`;
  }
  
  if (precisionModeSpan) {
    if (currentWorkingSVG) {
      precisionModeSpan.textContent = `🎯 SVG CENTER will align with crosshair - Press SPACE to place ${currentWorkingSVG.filename}`;
    } else {
      precisionModeSpan.textContent = `🎯 CROSSHAIR MODE - Load an SVG first`;
    }
    precisionModeSpan.style.color = '#00ff00';
  }
  
  // Continue updating if still in crosshair mode
  if (crosshairMode) {
    requestAnimationFrame(updateCrosshairDisplay);
  }
}

function panMapByCrosshair(deltaLng, deltaLat) {
  if (!map) return;
  
  // Get current center
  const currentCenter = map.getCenter();
  
  // Calculate new center
  const newCenter = {
    lat: currentCenter.lat + deltaLat,
    lng: currentCenter.lng + deltaLng
  };
  
  console.log(`🎯 PANNING MAP: ${deltaLat >= 0 ? '+' : ''}${deltaLat.toFixed(8)}°lat, ${deltaLng >= 0 ? '+' : ''}${deltaLng.toFixed(8)}°lng`);
  
  // Pan map smoothly
  map.easeTo({
    center: [newCenter.lng, newCenter.lat],
    duration: 50 // Very quick for responsive feel
  });
}

function setupCrosshairNavigation() {
  // This will use the existing map pan controls
  // Arrow keys will move the map (and thus the crosshair)
  console.log('🎯 Crosshair navigation active - use WASD/arrows to move crosshair, SPACE to anchor');
}

function removeCrosshairNavigation() {
  // Clean up if needed
  console.log('🎯 Crosshair navigation disabled');
}

// PLACE PRELOADED SVG AND START EDITING
function placePreloadedSVG() {
  if (!preloadedSVG) {
    console.warn('⚠️ No preloaded SVG available');
    return;
  }
  
  console.log('🎯 PLACING PRELOADED SVG:', preloadedSVG.filename);
  
  // Get current map center for placement
  const mapCenter = map.getCenter();
  
  // Update preloaded SVG position to current map center
  preloadedSVG.position.lat = mapCenter.lat;
  preloadedSVG.position.lng = mapCenter.lng;
  preloadedSVG.id = `editing-${Date.now()}`; // Give it a proper editing ID
  
  // Set as current working SVG
  currentWorkingSVG = preloadedSVG;
  
  // Clear the preloaded reference (it's now active)
  preloadedSVG = null;
  
  console.log(`📍 Placed ${currentWorkingSVG.filename} at map center: ${mapCenter.lat.toFixed(8)}, ${mapCenter.lng.toFixed(8)}`);
  
  // Open editor panel
  openSVGPanel();
  
  // Load SVG for editing  
  loadSVGForEditingFromObject(currentWorkingSVG);
  
  // Enter crosshair mode automatically
  toggleCrosshairMode();
  
  console.log('🎉 SVG placed and editing mode activated!');
  console.log('🎯 Use arrow keys to move, SPACE to re-anchor, C to toggle crosshair');
}

// Load SVG for editing from an existing object (not filename)
function loadSVGForEditingFromObject(svgObj) {
  console.log('🎯 LOADING SVG OBJECT FOR EDITING:', svgObj.filename);
  
  // Clear any existing editing layers
  clearAllEditingLayers();
  
  // Show editing interface
  document.getElementById('placement-step').style.display = 'block';
  document.getElementById('save-step').style.display = 'block';
  
  // Update current SVG indicator
  const indicator = document.getElementById('current-svg-indicator');
  if (indicator) {
    indicator.textContent = `🎯 EDITING: ${svgObj.filename}`;
    indicator.style.color = '#ff6b35';
    indicator.style.fontWeight = 'bold';
  }
  
  // Populate controls with current values
  populateControlsFromObject(svgObj);
  
  // Load SVG on map
  loadSVGOnMapNew(svgObj);
  
  // Add visual feedback
  showEditingFeedback();
}

function populateControlsFromObject(svgObj) {
  // Populate all controls with SVG object values
  document.getElementById('lat-input').value = svgObj.position.lat;
  document.getElementById('lng-input').value = svgObj.position.lng;
  document.getElementById('scale-input').value = svgObj.scale;
  document.getElementById('rotation-input').value = svgObj.rotation;
  document.getElementById('opacity-input').value = svgObj.opacity;
  document.getElementById('color-input').value = svgObj.color;
  
  // Update sliders
  document.getElementById('lat-slider').value = svgObj.position.lat;
  document.getElementById('lng-slider').value = svgObj.position.lng;
  document.getElementById('scale-slider').value = svgObj.scale;
  document.getElementById('rotation-slider').value = svgObj.rotation;
  document.getElementById('opacity-slider').value = svgObj.opacity;
  
  // Update display values
  updateDisplayValues();
}

// Helper functions for opening/closing SVG panel
function openSVGPanel() {
  const panel = document.getElementById('svg-editor');
  if (panel) {
    panel.classList.remove('editor-hidden');
    panel.style.display = 'block';
    panel.style.right = '0px';
    
    // Ensure scrolling works
    const content = panel.querySelector('.editor-content');
    if (content) {
      content.style.overflowY = 'auto';
      content.style.maxHeight = 'calc(100vh - 72px)';
      console.log('✅ Scrolling enabled for editor content');
    }
    
    console.log('✅ SVG Editor opened');
    return true;
  }
  console.error('❌ Could not find SVG editor panel');
  return false;
}

function closeSVGPanel() {
  const panel = document.getElementById('svg-editor');
  if (panel) {
    panel.classList.add('editor-hidden');
    panel.style.display = 'none';
    console.log('❌ SVG Editor closed');
    return true;
  }
  return false;
}

function toggleSVGPanel() {
  const panel = document.getElementById('svg-editor');
  if (panel) {
    const isHidden = panel.classList.contains('editor-hidden');
    if (isHidden) {
      openSVGPanel();
    } else {
      closeSVGPanel();
    }
    return true;
  }
  return false;
}

function clearAllSVGsNow() {
  console.log('🗑️ AGGRESSIVELY clearing all SVGs from map...');
  
  // Clear from new system
  if (typeof placedSVGs !== 'undefined' && placedSVGs) {
    placedSVGs.forEach(svg => {
      removeSVGFromMapNew(svg);
    });
    placedSVGs.clear();
    console.log('✅ Cleared new SVG system');
  }
  
  // Clear from old system
  if (typeof multiSvgManager !== 'undefined' && multiSvgManager && multiSvgManager.placedSvgs) {
    multiSvgManager.placedSvgs.forEach(svg => {
      removeSvgFromMap(svg);
    });
    multiSvgManager.placedSvgs.clear();
    console.log('✅ Cleared old SVG system');
  }
  
  // Remove any Michigan Central SVG
  try {
    removeMichiganCentralSVG();
    console.log('✅ Removed Michigan Central SVG');
  } catch (e) {
    console.log('ℹ️ No Michigan Central SVG to remove');
  }
  
  // Remove any test SVG polygons
  try {
    removeSVGPolygon();
    console.log('✅ Removed test SVG polygons');
  } catch (e) {
    console.log('ℹ️ No test SVG polygons to remove');
  }
  
  // AGGRESSIVE: Remove all layers that might be SVG-related
  const layersToRemove = [
    'michigan-central-svg-fill',
    'michigan-central-svg-line', 
    'michigan-central-svg-circle',
    'svg-polygon-fill',
    'svg-polygon-line',
    'svg-polygon-circle',
    'test-svg-fill',
    'test-svg-line',
    'test-svg-circle'
  ];
  
  layersToRemove.forEach(layerId => {
    try {
      if (map.getLayer(layerId)) {
        map.removeLayer(layerId);
        console.log(`✅ Removed layer: ${layerId}`);
      }
    } catch (e) {
      // Layer doesn't exist, that's fine
    }
  });
  
  // AGGRESSIVE: Remove all sources that might be SVG-related
  const sourcesToRemove = [
    'michigan-central-svg',
    'svg-polygon',
    'test-svg'
  ];
  
  sourcesToRemove.forEach(sourceId => {
    try {
      if (map.getSource(sourceId)) {
        map.removeSource(sourceId);
        console.log(`✅ Removed source: ${sourceId}`);
      }
    } catch (e) {
      // Source doesn't exist, that's fine
    }
  });
  
  // Clear local storage
  localStorage.removeItem('placedSVGs_new');
  localStorage.removeItem('placedSVGs');
  localStorage.removeItem('multiSvgData');
  localStorage.clear(); // Nuclear option - clear everything
  console.log('✅ Cleared ALL local storage');
  
  // Update UI
  try {
    updatePlacedSVGsList();
    updateSVGCounter();
    console.log('✅ Updated UI');
  } catch (e) {
    console.log('ℹ️ UI update not needed');
  }
  
  console.log('🎉 ALL SVGs COMPLETELY REMOVED!');
}

// Dynamic SVG Loading - ONLY show files that actually exist
async function loadAvailableSVGs() {
  console.log('🔍 SCANNING public folder for actual SVG files...');
  
  const select = document.getElementById('svg-file-select');
  if (!select) {
    console.error('❌ SVG file select not found');
    return;
  }
  
  // COMPLETELY clear dropdown - fresh start
  select.innerHTML = '<option value="">Choose from public folder...</option>';
  
  // List of possible SVG files to check (expand this list as needed)
  const possibleSVGs = [
    'test.svg',
    'shape1.svg', 
    'shape2.svg',
    'michigan-central.svg',
    'property.svg',
    'building.svg',
    'house.svg',
    'marker.svg',
    'icon.svg',
    'logo.svg'
  ];
  
  const actualSVGs = [];
  
  console.log('🔍 Checking each file for existence...');
  
  // Check each file individually with proper error handling
  for (const svgFile of possibleSVGs) {
    try {
      console.log(`🔍 Testing: ${svgFile}`);
      const response = await fetch(`public/${svgFile}`, { 
        method: 'HEAD',
        cache: 'no-cache' // Force fresh check
      });
      
      if (response.ok && response.status === 200) {
        actualSVGs.push(svgFile);
        console.log(`✅ CONFIRMED EXISTS: ${svgFile}`);
      } else {
        console.log(`❌ NOT FOUND (${response.status}): ${svgFile}`);
      }
    } catch (error) {
      console.log(`❌ ERROR checking ${svgFile}:`, error.message);
    }
  }
  
  // Only add SVGs that actually exist
  if (actualSVGs.length > 0) {
    actualSVGs.forEach(svgFile => {
      const option = document.createElement('option');
      option.value = svgFile;
      option.textContent = svgFile;
      select.appendChild(option);
      console.log(`📋 Added to dropdown: ${svgFile}`);
    });
    
    console.log(`✅ FINAL RESULT: ${actualSVGs.length} actual SVG files found:`, actualSVGs);
  } else {
    console.log('⚠️ NO SVG files found in public folder');
    
    // Add message when no SVGs found
    const noFilesOption = document.createElement('option');
    noFilesOption.value = '';
    noFilesOption.textContent = '⚠️ No SVG files found in public folder';
    noFilesOption.disabled = true;
    select.appendChild(noFilesOption);
  }
  
  // Always add manual input option
  const manualOption = document.createElement('option');
  manualOption.value = 'MANUAL';
  manualOption.textContent = '📝 Enter filename manually...';
  select.appendChild(manualOption);
  
  return actualSVGs;
}

// Handle manual SVG filename input
function handleManualSVGInput() {
  const filename = prompt('Enter SVG filename (e.g., "my-file.svg"):');
  if (filename && filename.trim()) {
    const cleanFilename = filename.trim();
    if (!cleanFilename.endsWith('.svg')) {
      alert('Filename must end with .svg');
      return;
    }
    
    // Add to dropdown temporarily
    const select = document.getElementById('svg-file-select');
    const option = document.createElement('option');
    option.value = cleanFilename;
    option.textContent = `${cleanFilename} (manual)`;
    option.selected = true;
    select.appendChild(option);
    
    // Enable load button
    document.getElementById('load-svg-btn').disabled = false;
    
    console.log(`📝 Manual SVG added: ${cleanFilename}`);
  }
}

// Building interactions removed for cleaner map experience
map.on('load', async () => {
  // Map loaded and ready for navigation
  console.log('🗺️ Map loaded successfully');
  
  // Ensure fog is disabled for clearer visibility
  if (map.setFog) {
    map.setFog(null);
    console.log('🌫️ Fog disabled in second load handler');
  }
  
  // Initialize building highlighting with Interactions API
  initializeBuildingHighlighting();
  
  // Set up top right location buttons
  setupLocationButtons();
  
  // Create elevated labels using symbol-z-elevate
  createElevatedLabels();
  
  // Set up home button functionality
  const homeButton = document.getElementById('home-button');
  
  // Set up camera position button
  const cameraPositionButton = document.getElementById('camera-position-button');
  if (cameraPositionButton) {
    cameraPositionButton.addEventListener('click', printCameraPosition);
  }
  if (homeButton) {
    console.log('🏠 Home button found, adding event listener');
    homeButton.addEventListener('click', returnToHomePosition);
  } else {
    console.error('❌ Home button not found in DOM');
  }
  
  // Set up full map button functionality
  const fullMapButton = document.getElementById('full-map-button');
  const infoButton = document.getElementById('info-button');
  const fullscreenViewer = document.getElementById('fullscreen-viewer');
  const fullscreenImage = document.getElementById('fullscreen-image');
  const exitFullscreenBtn = document.getElementById('exit-fullscreen');
  const backButton = document.getElementById('back-button');
  
  // Set up info button functionality
  if (infoButton) {
    console.log('ℹ️ Info button found, adding event listener');
    infoButton.addEventListener('click', () => {
      // Check if side panel is already open
      const panel = document.getElementById('label-info-panel');
      if (panel.classList.contains('panel-open')) {
        // If panel is open, close it
        closeSidePanel();
      } else {
        // If panel is closed, open the info panel
        // Open a generic About panel using Station image
        const panel = document.getElementById('label-info-panel');
        panel.style.background = 'white';
        panel.style.color = 'black';
        document.getElementById('location-title').textContent = 'About Michigan Central';
        document.getElementById('location-description').textContent = "Michigan Central’s 30-acre hub in Detroit provides a unique mix of infrastructure that doesn’t exist anywhere else to develop products and solutions from sketch to scale. On this map, you can learn more about each part of Michigan Central’s campus – from workspaces to labs, testing zones, and the surrounding strategic geographic advantages.";
        const featuresContainer = document.getElementById('location-features');
        featuresContainer.innerHTML = '';
        const fullscreenImage = document.getElementById('fullscreen-image');
        if (fullscreenImage) fullscreenImage.src = 'public/marker-images/1.png';
        panel.classList.add('panel-open');
      }
    });
  } else {
    console.error('❌ Info button not found in DOM');
  }
  
  if (fullMapButton && fullscreenViewer && fullscreenImage && exitFullscreenBtn && backButton) {
    console.log('🗺️ Full map button and viewer found, adding event listeners');
    
    // Global function to close the fullscreen viewer
    window.closeFullscreenViewer = function() {
      fullscreenViewer.style.display = 'none';
      
      // Clear auto-close timer
      if (fullscreenViewerAutoCloseTimer) {
        clearTimeout(fullscreenViewerAutoCloseTimer);
        fullscreenViewerAutoCloseTimer = null;
      }
    };
    
    // Open fullscreen map image
    fullMapButton.addEventListener('click', () => {
      // Set the image source to map.png
      fullscreenImage.src = 'public/map.png';
      
      // Show the fullscreen viewer
      fullscreenViewer.style.display = 'flex';
      
      // Start auto-close timer
      startFullscreenViewerAutoClose();
      
      // Close any open panels
      closeSidePanel();
    });
    
    // Close fullscreen viewer when exit button is clicked
    exitFullscreenBtn.addEventListener('click', closeFullscreenViewer);
    
    // Close fullscreen viewer when BACK button is clicked
    backButton.addEventListener('click', closeFullscreenViewer);
    
    // Also close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && fullscreenViewer.style.display === 'flex') {
        closeFullscreenViewer();
      }
    });
    
    // Add event listeners to reset auto-close timer on interaction
    fullscreenViewer.addEventListener('click', resetFullscreenViewerAutoClose);
    fullscreenViewer.addEventListener('mousemove', resetFullscreenViewerAutoClose);
    fullscreenViewer.addEventListener('touchstart', resetFullscreenViewerAutoClose);
  } else {
    console.error('❌ Full map button or viewer elements not found in DOM');
  }
  
  // Initialize Multi-SVG Editor system
  console.log('🎯 About to initialize SVG Editor...');
  initializeSVGEditor();
  
  // Michigan Central SVG loading DISABLED - removed completely
});

// --- DEBUG HELPER ---
function dbg(tag, obj) {
  console.log(tag, JSON.stringify(obj));
}

// --- BUILDING HIGHLIGHTING SYSTEM USING INTERACTIONS API ---
// Track the currently highlighted and selected buildings
let hoveredBuildingId = null;
let selectedBuildingId = null;

// Initialize building highlighting using Mapbox Interactions API
function initializeBuildingHighlighting() {
  console.log('🏢 Initializing building highlighting with Interactions API');
  
  try {
    // Ensure buildings appear on top of SVGs by moving them to the top of the layer stack
    ensureBuildingsOnTop();
    
    // Add mouseenter interaction for hover effect
    map.addInteraction('building-mouseenter', {
      type: 'mouseenter',
      target: {featuresetId: 'buildings', importId: 'basemap'},
      handler: (e) => {
        console.log('🏢 Building mouseenter:', e.feature.id);
        
        // Prevent event from reaching SVGs underneath
        e.originalEvent.stopPropagation();
        
        // Set hover state to true
        map.setFeatureState(e.feature, {highlight: true});
        
        // Track the hovered building ID
        hoveredBuildingId = e.feature.id;
      }
    });
    
    // Add mouseleave interaction to remove hover effect
    map.addInteraction('building-mouseleave', {
      type: 'mouseleave',
      target: {featuresetId: 'buildings', importId: 'basemap'},
      handler: (e) => {
        console.log('🏢 Building mouseleave');
        
        // Prevent event from reaching SVGs underneath
        e.originalEvent.stopPropagation();
        
        // Only remove highlight if this building is not selected
        if (hoveredBuildingId !== selectedBuildingId) {
          map.setFeatureState(
            {id: hoveredBuildingId, featuresetId: 'buildings', importId: 'basemap'},
            {highlight: false}
          );
        }
        
        // Clear the hovered building ID
        hoveredBuildingId = null;
      }
    });
    
    // Add click interaction for selection
    map.addInteraction('building-click', {
      type: 'click',
      target: {featuresetId: 'buildings', importId: 'basemap'},
      handler: (e) => {
        console.log('🏢 Building click:', e.feature.id);
        
        // Prevent event from reaching SVGs underneath
        e.originalEvent.stopPropagation();
        
        // Clear previous selection if exists
        if (selectedBuildingId) {
          map.setFeatureState(
            {id: selectedBuildingId, featuresetId: 'buildings', importId: 'basemap'},
            {selected: false, highlight: false}
          );
        }
        
        // If clicking the same building, just clear selection
        if (selectedBuildingId === e.feature.id) {
          selectedBuildingId = null;
          return;
        }
        
        // Set new selection
        selectedBuildingId = e.feature.id;
        map.setFeatureState(e.feature, {selected: true, highlight: true});
      }
    });
    
    // Add map click handler to clear selection when clicking elsewhere
    map.on('click', (e) => {
      // Only clear if we have a selection and didn't click on a building
      // (building clicks are handled by the interaction above)
      if (selectedBuildingId && !e.defaultPrevented) {
        console.log('🏢 Clearing building selection');
        
        map.setFeatureState(
          {id: selectedBuildingId, featuresetId: 'buildings', importId: 'basemap'},
          {selected: false, highlight: false}
        );
        
        selectedBuildingId = null;
      }
    });
    
    console.log('✅ Building highlighting initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing building highlighting:', error);
  }
}

// Ensure buildings appear on top of SVGs
function ensureBuildingsOnTop() {
  console.log('🔍 Ensuring buildings appear on top of SVGs');
  
  try {
    // Get all layers in the map style
    const layers = map.getStyle().layers || [];
    
    // Find SVG layers
    const svgLayers = layers.filter(layer => 
      layer.id.includes('svg-') || 
      layer.id.includes('-svg-')
    );
    
    if (svgLayers.length === 0) {
      console.log('ℹ️ No SVG layers found to reorder');
      return;
    }
    
    // For each SVG layer, move it before the first symbol layer
    // This ensures buildings (which are typically rendered before symbols)
    // will appear on top of SVGs
    const firstSymbolId = getFirstSymbolLayerId();
    if (!firstSymbolId) {
      console.log('ℹ️ No symbol layers found, cannot reorder');
      return;
    }
    
    console.log(`🔄 Moving SVG layers before ${firstSymbolId} to ensure buildings appear on top`);
    
    svgLayers.forEach(layer => {
      if (map.getLayer(layer.id)) {
        // Remove and re-add the layer before the first symbol layer
        const layerDef = map.getLayer(layer.id);
        map.moveLayer(layer.id, firstSymbolId);
        console.log(`✅ Moved layer ${layer.id} before ${firstSymbolId}`);
      }
    });
    
    console.log('✅ Layer reordering complete');
    
    // Color The Factory building blue
    colorFactoryBlue();
  } catch (error) {
    console.error('❌ Error ensuring buildings on top:', error);
  }
}

// Color The Factory building blue
function colorFactoryBlue() {
  try {
    // Find building layer
    const layers = map.getStyle().layers;
    const buildingLayer = layers.find(l => 
      l.type === 'fill-extrusion' && 
      (l.id.includes('building') || l.source === 'composite')
    );
    
    if (buildingLayer) {
      console.log(`🏭 Found building layer: ${buildingLayer.id}`);
      
      // Update paint property to color buildings blue based on feature state
      map.setPaintProperty(buildingLayer.id, 'fill-extrusion-color', [
        'case',
        ['boolean', ['feature-state', 'customColor'], false],
        ['feature-state', 'customColor'],
        ['get', 'color'] || '#aaa' // fallback to original color
      ]);
      
      // The Factory coordinates
      const factoryLng = -83.07221479556428;
      const factoryLat = 42.331049686201276;
      
      // Query buildings near The Factory
      const point = map.project([factoryLng, factoryLat]);
      const features = map.queryRenderedFeatures(point, {
        layers: [buildingLayer.id]
      });
      
      if (features.length > 0) {
        console.log(`🏭 Found ${features.length} building features near The Factory`);
        // Set blue color for the first building found
        const building = features[0];
        map.setFeatureState(
          { source: building.source, sourceLayer: building.sourceLayer, id: building.id },
          { customColor: '#4A90E2' }
        );
        console.log('✅ The Factory colored blue');
      }
    }
  } catch (error) {
    console.log('⚠️ Could not color Factory building:', error.message);
  }
}

// Helper function to get the first symbol layer ID
function getFirstSymbolLayerId() {
  const layers = map.getStyle().layers;
  // Find the index of the first symbol layer in the map style
  for (let i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol') {
      return layers[i].id;
    }
  }
  return null;
}

// Set up click handlers for the top right location buttons
function setupLocationButtons() {
  console.log('🔘 Setting up location buttons');
  
  const locationButtons = document.querySelectorAll('.location-button');
  
  locationButtons.forEach(button => {
    const locationId = button.getAttribute('data-location');
    
    button.addEventListener('click', () => {
      console.log(`🔘 Location button clicked: ${locationId}`);
      
      // Open side panel with the location data
      openSidePanel(locationId);
      
      // Fly to a position that gives a good view of the area
      // Using a generic position for all buttons since they're conceptual locations
      map.flyTo({
        center: [-83.076549, 42.329612], // Michigan Central area
        zoom: 17.5,
        pitch: 60,
        bearing: 150,
        duration: 2000
      });
    });
  });
  
  console.log('✅ Location buttons initialized');
}

// --- MICHIGAN CENTRAL SVG LOADER ---
async function loadMichiganCentralSVG() {
  try {
    console.log('🏛️ Loading Michigan Central SVG at specified location');
    
    const location = LOCATIONS.michiganCentralSVG;
    
    // Load the Michigan Central SVG with custom positioning
    const response = await fetch('public/michigan-central.svg');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch Michigan Central SVG: ${response.status}`);
    }
    
    const svgText = await response.text();
    console.log('📄 Michigan Central SVG loaded, length:', svgText.length);
    
    // Parse SVG and extract path data
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
    const pathElement = svgDoc.querySelector('path');
    
    if (!pathElement) {
      console.error('❌ No path element found in Michigan Central SVG');
      return;
    }
    
    const pathData = pathElement.getAttribute('d');
    console.log('✅ Michigan Central SVG path data found');
    
    // Convert SVG path to coordinates at the specified location
    const coordinates = convertSVGPathWithTransforms(
      pathData, 
      location.lat,  // 2001 15th St coordinates
      location.lng,
      0.0002,  // Larger scale for visibility
      0        // No rotation
    );
    
    if (coordinates.length === 0) {
      console.error('No valid coordinates generated from Michigan Central SVG');
      return;
    }
    
    // Remove existing Michigan Central SVG if it exists
    removeMichiganCentralSVG();
    
    // Create the Michigan Central SVG polygon data
    const michiganCentralPolygonData = {
      "type": "geojson",
      "data": {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [coordinates]
        },
        "properties": {
          "name": "Michigan Central SVG",
          "address": location.address
        }
      }
    };

    // Add the Michigan Central SVG source
    map.addSource('michigan-central-svg', michiganCentralPolygonData);

    // Add fill layer with distinctive styling
    map.addLayer({
      'id': 'michigan-central-svg-fill',
      'type': 'fill',
      'source': 'michigan-central-svg',
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'fill-color': '#FF6B35', // Orange color for Michigan Central
        'fill-opacity': 0.6
      }
    });

    // Add outline layer
    map.addLayer({
      'id': 'michigan-central-svg-outline',
      'type': 'line',
      'source': 'michigan-central-svg',
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'line-color': '#FF6B35',
        'line-width': 3,
        'line-opacity': 0.9
      }
    });

    // Add center marker
    map.addSource('michigan-central-svg-center', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [location.lng, location.lat]
        }
      }
    });

    map.addLayer({
      'id': 'michigan-central-svg-center-point',
      'type': 'circle',
      'source': 'michigan-central-svg-center',
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'circle-radius': 8,
        'circle-color': '#FF6B35',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      }
    });
    
    console.log('🎯 Michigan Central SVG added to map at:', location.address);
    console.log('📍 Coordinates:', [location.lng, location.lat]);
    
  } catch (error) {
    console.error('❌ Error loading Michigan Central SVG:', error);
  }
}

function removeMichiganCentralSVG() {
  try {
    const layersToRemove = [
      'michigan-central-svg-fill', 
      'michigan-central-svg-outline', 
      'michigan-central-svg-center-point'
    ];
    const sourcesToRemove = ['michigan-central-svg', 'michigan-central-svg-center'];
    
    layersToRemove.forEach(layerId => {
      if (map.getLayer(layerId)) map.removeLayer(layerId);
    });
    
    sourcesToRemove.forEach(sourceId => {
      if (map.getSource(sourceId)) map.removeSource(sourceId);
    });
  } catch (error) {
    // Layers/sources don't exist yet, that's fine
  }
}

// --- MULTI-SVG EDITOR SYSTEM ---
let multiSvgManager = {
  placedSvgs: new Map(), // Map of unique IDs to SVG objects
  currentEditingSvg: null,
  nextId: 1
};

let svgEditorVisible = false;

// SVG Object structure:
// {
//   id: unique identifier
//   filename: 'test.svg'
//   position: { lat: 42.xxx, lng: -83.xxx }
//   scale: 0.0001
//   rotation: 0
//   color: '#94A2CC'
//   opacity: 0.3
//   isVisible: true
// }

function initializeSVGEditor() {
  console.log('🎨 Initializing SVG Editor System - New Workflow');
  
  setupSVGEditorEvents();
  updateSVGCounter();
  loadSavedSVGs();
}

function setupSVGEditorEvents() {
  console.log('🔧 Setting up SVG Editor Events');
  
  // Test if elements exist
  const toggleBtn = document.getElementById('svg-editor-toggle');
  const editor = document.getElementById('svg-editor');
  
  console.log('🔍 Button exists:', !!toggleBtn);
  console.log('🔍 Editor exists:', !!editor);
  
  if (toggleBtn) {
    console.log('✅ Found SVG editor toggle button');
    
    // Remove any existing listeners first
    toggleBtn.replaceWith(toggleBtn.cloneNode(true));
    const freshBtn = document.getElementById('svg-editor-toggle');
    
    freshBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('🎯 SVG Editor toggle clicked!');
      
      const editor = document.getElementById('svg-editor');
      if (editor) {
        const wasHidden = editor.classList.contains('editor-hidden');
        editor.classList.toggle('editor-hidden');
        console.log('📱 Editor visibility toggled, was hidden:', wasHidden, 'now hidden:', editor.classList.contains('editor-hidden'));
        
        // Force visibility check
        if (!editor.classList.contains('editor-hidden')) {
          editor.style.display = 'block';
          console.log('🔧 Forced editor to display: block');
        }
      } else {
        console.error('❌ SVG editor element not found!');
      }
    });
    
    // Test click programmatically
    console.log('🧪 Testing button click programmatically...');
    setTimeout(() => {
      freshBtn.click();
      console.log('🧪 Programmatic click completed');
    }, 2000);
    
  } else {
    console.error('❌ SVG editor toggle button not found!');
    
    // List all buttons to debug
    const allButtons = document.querySelectorAll('button');
    console.log('🔍 All buttons found:', Array.from(allButtons).map(btn => ({id: btn.id, text: btn.textContent})));
  }
  
  // Close button handler
  const closeBtn = document.getElementById('close-editor-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('svg-editor').classList.add('editor-hidden');
      console.log('🚪 Editor closed');
    });
  } else {
    console.warn('⚠️ Close button not found');
  }
  
  // Step 1: File Selection
  const fileSelect = document.getElementById('svg-file-select');
  const loadBtn = document.getElementById('load-svg-btn');
  
  fileSelect.addEventListener('change', () => {
    const selectedValue = fileSelect.value;
    
    if (selectedValue === 'MANUAL') {
      handleManualSVGInput();
    } else {
      loadBtn.disabled = !selectedValue;
    }
  });
  
  loadBtn.addEventListener('click', () => {
    const selectedFile = fileSelect.value;
    if (selectedFile && selectedFile !== 'MANUAL') {
      loadSVGForEditing(selectedFile);
    }
  });
  
  // Step 2: Coordinate Controls
  document.getElementById('apply-coords-btn').addEventListener('click', applyGoogleCoords);
  
  // Sync number inputs with sliders
  setupInputSliderSync('lat-input', 'lat-slider');
  setupInputSliderSync('lng-input', 'lng-slider');
  setupInputSliderSync('scale-input', 'scale-slider');
  setupInputSliderSync('rotation-input', 'rotation-slider');
  setupInputSliderSync('opacity-input', 'opacity-slider');
  
  // Color picker
  document.getElementById('color-input').addEventListener('input', updateCurrentSVG);
  
  // Step 3: Save Actions
  document.getElementById('save-svg-btn').addEventListener('click', saveCurrentSVG);
  document.getElementById('make-permanent-btn').addEventListener('click', makePermanentSVG);
  document.getElementById('save-and-next-btn').addEventListener('click', saveAndNext);
  document.getElementById('discard-btn').addEventListener('click', discardCurrentSVG);
  
  // Clear all SVGs
  document.getElementById('clear-all-svgs').addEventListener('click', clearAllSVGs);
}

// OLD setupMultiSVGEditorEvents - REPLACED
function setupMultiSVGEditorEvents_OLD() {
  // OLD SYSTEM - DISABLED
  // Editor toggle - now handled by setupSVGEditorEvents
  // document.getElementById('svg-editor-toggle').addEventListener('click', toggleSVGEditor);
  // document.getElementById('close-editor-btn').addEventListener('click', toggleSVGEditor);
  
  // Add new SVG
  document.getElementById('add-new-svg').addEventListener('click', addNewSvgToMap);
  
  // Manual coordinate input
  document.getElementById('apply-manual-coords').addEventListener('click', applyManualCoordinates);
  document.getElementById('parse-google-coords').addEventListener('click', parseGoogleMapsCoordinates);
  
  // Position sliders (for current editing SVG)
  document.getElementById('position-lat').addEventListener('input', (e) => {
    if (multiSvgManager.currentEditingSvg) {
    const newLat = parseFloat(e.target.value);
      multiSvgManager.currentEditingSvg.position.lat = newLat;
      document.getElementById('lat-value').textContent = newLat.toFixed(8);
      updateCurrentSvgOnMap();
    }
  });
  
  document.getElementById('position-lng').addEventListener('input', (e) => {
    if (multiSvgManager.currentEditingSvg) {
    const newLng = parseFloat(e.target.value);
      multiSvgManager.currentEditingSvg.position.lng = newLng;
      document.getElementById('lng-value').textContent = newLng.toFixed(8);
      updateCurrentSvgOnMap();
    }
  });
  
  // Scale slider
  document.getElementById('scale-slider').addEventListener('input', (e) => {
    if (multiSvgManager.currentEditingSvg) {
      multiSvgManager.currentEditingSvg.scale = parseFloat(e.target.value);
      document.getElementById('scale-value').textContent = multiSvgManager.currentEditingSvg.scale.toFixed(5);
      updateCurrentSvgOnMap();
    }
  });
  
  // Rotation slider
  document.getElementById('rotation-slider').addEventListener('input', (e) => {
    if (multiSvgManager.currentEditingSvg) {
      multiSvgManager.currentEditingSvg.rotation = parseFloat(e.target.value);
      document.getElementById('rotation-value').textContent = multiSvgManager.currentEditingSvg.rotation + '°';
      updateCurrentSvgOnMap();
    }
  });
  
  // Color picker
  document.getElementById('polygon-color').addEventListener('change', (e) => {
    if (multiSvgManager.currentEditingSvg) {
      multiSvgManager.currentEditingSvg.color = e.target.value;
      updateCurrentSvgOnMap();
    }
  });
  
  // Opacity slider
  document.getElementById('opacity-slider').addEventListener('input', (e) => {
    if (multiSvgManager.currentEditingSvg) {
      multiSvgManager.currentEditingSvg.opacity = parseFloat(e.target.value);
      document.getElementById('opacity-value').textContent = multiSvgManager.currentEditingSvg.opacity.toFixed(1);
      updateCurrentSvgOnMap();
    }
  });
  
  // Clear all SVGs
  document.getElementById('clear-all-svgs').addEventListener('click', clearAllSvgs);
  
  // Delete current SVG
  document.getElementById('delete-current-svg').addEventListener('click', deleteCurrentSvg);
}

function toggleSVGEditor_OLD() {
  // OLD FUNCTION - DISABLED - Now using setupSVGEditorEvents
  console.log('⚠️ Old toggleSVGEditor called - this should not happen');
  return;
  
  const editor = document.getElementById('svg-editor');
  svgEditorVisible = !svgEditorVisible;
  
  if (svgEditorVisible) {
    editor.classList.remove('editor-hidden');
    editor.classList.add('editor-visible');
    updateEditorUI();
    
    // Disable orbit when entering edit mode
    spinning = false;
    navState.spinning = false;
    userInteracting = true; // Prevent orbit from resuming
    console.log('🔒 Orbit disabled for SVG editing');
  } else {
    editor.classList.remove('editor-visible');
    editor.classList.add('editor-hidden');
    
    // Re-enable orbit when exiting edit mode
    setTimeout(() => {
      userInteracting = false;
      spinning = true;
      navState.spinning = true;
      console.log('🔓 Orbit re-enabled after SVG editing');
    }, 500); // Small delay to prevent immediate orbit resume
  }
  
  console.log('🎛️ SVG Editor toggled:', svgEditorVisible ? 'open' : 'closed');
}

// --- MULTI-SVG MANAGEMENT FUNCTIONS ---

function addNewSvgToMap() {
  const selectedFile = document.getElementById('svg-file-select').value;
  
  if (!selectedFile) {
    alert('Please select an SVG file first');
    return;
  }
  
  // Create new SVG object
  const newSvg = {
    id: multiSvgManager.nextId++,
    filename: selectedFile,
    position: { lat: 42.3289, lng: -83.0776 }, // Default to Michigan Central area
    scale: 0.0001,
    rotation: 0,
    color: '#' + Math.floor(Math.random()*16777215).toString(16), // Random color
    opacity: 0.6,
    isVisible: true
  };
  
  // Add to manager
  multiSvgManager.placedSvgs.set(newSvg.id, newSvg);
  
  // Load SVG on map
  loadSvgOnMap(newSvg);
  
  // Update UI
  updateSvgManagerUI();
  
  // Select this SVG for editing
  selectSvgForEditing(newSvg.id);
  
  // Reset file selector
  document.getElementById('svg-file-select').value = '';
  
  console.log('✅ Added new SVG:', newSvg.filename, 'with ID:', newSvg.id);
}

function selectSvgForEditing(svgId) {
  const svg = multiSvgManager.placedSvgs.get(svgId);
  if (!svg) return;
  
  multiSvgManager.currentEditingSvg = svg;
  
  // Update UI to show current editing SVG
  document.getElementById('current-svg-name').textContent = `${svg.filename} (ID: ${svg.id})`;
  document.getElementById('current-svg-editor').style.display = 'block';
  
  // Update sliders with current SVG values
  document.getElementById('position-lat').value = svg.position.lat;
  document.getElementById('lat-value').textContent = svg.position.lat.toFixed(8);
  document.getElementById('position-lng').value = svg.position.lng;
  document.getElementById('lng-value').textContent = svg.position.lng.toFixed(8);
  document.getElementById('scale-slider').value = svg.scale;
  document.getElementById('scale-value').textContent = svg.scale.toFixed(5);
  document.getElementById('rotation-slider').value = svg.rotation;
  document.getElementById('rotation-value').textContent = svg.rotation + '°';
  document.getElementById('polygon-color').value = svg.color;
  document.getElementById('opacity-slider').value = svg.opacity;
  document.getElementById('opacity-value').textContent = svg.opacity.toFixed(1);
  
  // Update manual coordinate inputs
  document.getElementById('manual-lat-input').value = svg.position.lat.toFixed(8);
  document.getElementById('manual-lng-input').value = svg.position.lng.toFixed(8);
  
  // Update list UI
  updateSvgManagerUI();
  
  console.log('✏️ Selected SVG for editing:', svg.filename, 'ID:', svg.id);
}

function applyManualCoordinates() {
  if (!multiSvgManager.currentEditingSvg) {
    alert('Please select an SVG to edit first');
    return;
  }
  
  const lat = parseFloat(document.getElementById('manual-lat-input').value);
  const lng = parseFloat(document.getElementById('manual-lng-input').value);
  
  if (isNaN(lat) || isNaN(lng)) {
    alert('Please enter valid latitude and longitude values');
    return;
  }
  
  // Update current SVG
  multiSvgManager.currentEditingSvg.position.lat = lat;
  multiSvgManager.currentEditingSvg.position.lng = lng;
  
  // Update sliders
  document.getElementById('position-lat').value = lat;
  document.getElementById('lat-value').textContent = lat.toFixed(8);
  document.getElementById('position-lng').value = lng;
  document.getElementById('lng-value').textContent = lng.toFixed(8);
  
  // Update map
  updateCurrentSvgOnMap();
  
  // Update list
  updateSvgManagerUI();
  
  console.log('📍 Applied manual coordinates:', lat, lng);
}

function parseGoogleMapsCoordinates() {
  const googleInput = document.getElementById('google-maps-input').value.trim();
  
  if (!googleInput) {
    alert('Please paste coordinates from Google Maps');
    return;
  }
  
  // Parse different Google Maps coordinate formats
  let lat, lng;
  
  // Try comma-separated format: "42.32888461437154, -83.077653233949"
  if (googleInput.includes(',')) {
    const parts = googleInput.split(',');
    if (parts.length === 2) {
      lat = parseFloat(parts[0].trim());
      lng = parseFloat(parts[1].trim());
    }
  }
  // Try space-separated format: "42.32888461437154 -83.077653233949"
  else if (googleInput.includes(' ')) {
    const parts = googleInput.split(/\s+/);
    if (parts.length >= 2) {
      lat = parseFloat(parts[0].trim());
      lng = parseFloat(parts[1].trim());
    }
  }
  
  // Validate coordinates
  if (isNaN(lat) || isNaN(lng)) {
    alert('Invalid coordinate format. Please use: "latitude, longitude" (e.g., "42.32888461437154, -83.077653233949")');
    return;
  }
  
  // Basic range validation for Detroit area
  if (lat < 42.0 || lat > 43.0 || lng > -82.0 || lng < -84.0) {
    if (!confirm('Coordinates seem to be outside Detroit area. Continue anyway?')) {
      return;
    }
  }
  
  if (!multiSvgManager.currentEditingSvg) {
    alert('Please select an SVG to edit first');
    return;
  }
  
  // Update current SVG
  multiSvgManager.currentEditingSvg.position.lat = lat;
  multiSvgManager.currentEditingSvg.position.lng = lng;
  
  // Update all input fields
  document.getElementById('manual-lat-input').value = lat.toFixed(8);
  document.getElementById('manual-lng-input').value = lng.toFixed(8);
  document.getElementById('position-lat').value = lat;
  document.getElementById('lat-value').textContent = lat.toFixed(8);
  document.getElementById('position-lng').value = lng;
  document.getElementById('lng-value').textContent = lng.toFixed(8);
  
  // Update map
  updateCurrentSvgOnMap();
  
  // Update list
  updateSvgManagerUI();
  
  // Clear the Google Maps input
  document.getElementById('google-maps-input').value = '';
  
  console.log('🗺️ Applied Google Maps coordinates:', lat, lng);
  
  // Show success message
  const button = document.getElementById('parse-google-coords');
  const originalText = button.textContent;
  button.textContent = '✅ Applied!';
  button.style.background = '#28a745';
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = '#4ECDC4';
  }, 2000);
}

function updateCurrentSvgOnMap() {
  if (!multiSvgManager.currentEditingSvg) return;
  
  // Reload the SVG on the map with updated properties
  loadSvgOnMap(multiSvgManager.currentEditingSvg);
  
  // Update the list UI
  updateSvgManagerUI();
  
  // Auto-save
  saveSvgsToLocalStorage();
}

function deleteCurrentSvg() {
  if (!multiSvgManager.currentEditingSvg) return;
  
  const svgId = multiSvgManager.currentEditingSvg.id;
  const filename = multiSvgManager.currentEditingSvg.filename;
  
  // Remove from map
  removeSvgFromMap(multiSvgManager.currentEditingSvg);
  
  // Remove from manager
  multiSvgManager.placedSvgs.delete(svgId);
  multiSvgManager.currentEditingSvg = null;
  
  // Update UI
  document.getElementById('current-svg-editor').style.display = 'none';
  updateSvgManagerUI();
  
  console.log('🗑️ Deleted SVG:', filename, 'ID:', svgId);
}

function clearAllSvgs() {
  if (multiSvgManager.placedSvgs.size === 0) return;
  
  if (!confirm(`Are you sure you want to delete all ${multiSvgManager.placedSvgs.size} SVGs?`)) {
    return;
  }
  
  // Remove all SVGs from map
  multiSvgManager.placedSvgs.forEach(svg => {
    removeSvgFromMap(svg);
  });
  
  // Clear manager
  multiSvgManager.placedSvgs.clear();
  multiSvgManager.currentEditingSvg = null;
  
  // Update UI
  document.getElementById('current-svg-editor').style.display = 'none';
  updateSvgManagerUI();
  
  console.log('🗑️ Cleared all SVGs');
}

function updateSvgManagerUI() {
  const listContainer = document.getElementById('placed-svgs-list');
  
  if (multiSvgManager.placedSvgs.size === 0) {
    listContainer.innerHTML = '<div class="no-svgs-message">No SVGs placed yet</div>';
    return;
  }
  
  let html = '';
  multiSvgManager.placedSvgs.forEach(svg => {
    const isActive = multiSvgManager.currentEditingSvg && multiSvgManager.currentEditingSvg.id === svg.id;
    html += `
      <div class="svg-item ${isActive ? 'active' : ''}" onclick="selectSvgForEditing(${svg.id})">
        <div class="svg-item-info">
          <div class="svg-item-name">${svg.filename} (ID: ${svg.id})</div>
          <div class="svg-item-coords">${svg.position.lat.toFixed(6)}, ${svg.position.lng.toFixed(6)}</div>
        </div>
        <div class="svg-item-actions">
          <button class="svg-item-btn" onclick="event.stopPropagation(); toggleSvgVisibility(${svg.id})" title="Toggle visibility">
            ${svg.isVisible ? '👁️' : '🚫'}
          </button>
          <button class="svg-item-btn" onclick="event.stopPropagation(); deleteSvgById(${svg.id})" title="Delete">
            🗑️
          </button>
        </div>
      </div>
    `;
  });
  
  listContainer.innerHTML = html;
}

function toggleSvgVisibility(svgId) {
  const svg = multiSvgManager.placedSvgs.get(svgId);
  if (!svg) return;
  
  svg.isVisible = !svg.isVisible;
  
  // Update map visibility
  const fillLayerId = `svg-${svg.id}-fill`;
  const outlineLayerId = `svg-${svg.id}-outline`;
  const centerLayerId = `svg-${svg.id}-center`;
  
  const visibility = svg.isVisible ? 'visible' : 'none';
  
  try {
    if (map.getLayer(fillLayerId)) map.setLayoutProperty(fillLayerId, 'visibility', visibility);
    if (map.getLayer(outlineLayerId)) map.setLayoutProperty(outlineLayerId, 'visibility', visibility);
    if (map.getLayer(centerLayerId)) map.setLayoutProperty(centerLayerId, 'visibility', visibility);
  } catch (error) {
    console.warn('Error toggling SVG visibility:', error);
  }
  
  updateSvgManagerUI();
  console.log('👁️ Toggled visibility for SVG ID:', svgId, 'Visible:', svg.isVisible);
}

function deleteSvgById(svgId) {
  const svg = multiSvgManager.placedSvgs.get(svgId);
  if (!svg) return;
  
  if (!confirm(`Delete ${svg.filename}?`)) return;
  
  // Remove from map
  removeSvgFromMap(svg);
  
  // Remove from manager
  multiSvgManager.placedSvgs.delete(svgId);
  
  // If this was the current editing SVG, clear it
  if (multiSvgManager.currentEditingSvg && multiSvgManager.currentEditingSvg.id === svgId) {
    multiSvgManager.currentEditingSvg = null;
    document.getElementById('current-svg-editor').style.display = 'none';
  }
  
  updateSvgManagerUI();
  console.log('🗑️ Deleted SVG ID:', svgId);
}

// --- SVG MAP LOADING FUNCTIONS ---

async function loadSvgOnMap(svgObj) {
  try {
    console.log('🔄 Loading SVG on map:', svgObj.filename, 'ID:', svgObj.id);
    
    // Remove existing layers for this SVG
    removeSvgFromMap(svgObj);
    
    // Load SVG file
    const response = await fetch(`public/${svgObj.filename}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch SVG: ${response.status}`);
    }
    
    const svgText = await response.text();
    
    // Parse SVG and extract path data
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
    const pathElement = svgDoc.querySelector('path');
    
    if (!pathElement) {
      console.error('❌ No path element found in SVG:', svgObj.filename);
      return;
    }
    
    const pathData = pathElement.getAttribute('d');
    
    // Convert SVG path to coordinates
    const coordinates = convertSVGPathWithTransforms(
      pathData,
      svgObj.position.lat,
      svgObj.position.lng,
      svgObj.scale,
      svgObj.rotation
    );
    
    if (coordinates.length === 0) {
      console.error('No valid coordinates generated from SVG:', svgObj.filename);
      return;
    }
    
    // Create unique layer IDs
    const sourceId = `svg-${svgObj.id}`;
    const fillLayerId = `svg-${svgObj.id}-fill`;
    const outlineLayerId = `svg-${svgObj.id}-outline`;
    const centerLayerId = `svg-${svgObj.id}-center`;
    const centerSourceId = `svg-${svgObj.id}-center-source`;
    
    // Create polygon data
    const polygonData = {
      "type": "geojson",
      "data": {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [coordinates]
        },
        "properties": {
          "id": svgObj.id,
          "filename": svgObj.filename
        }
      }
    };
    
    // Add source
    map.addSource(sourceId, polygonData);
    
    // Add fill layer
    map.addLayer({
      'id': fillLayerId,
      'type': 'fill',
      'source': sourceId,
      'layout': {
        'visibility': svgObj.isVisible ? 'visible' : 'none'
      },
      'paint': {
        'fill-color': svgObj.color,
        'fill-opacity': svgObj.opacity
      }
    });
    
    // Add outline layer
    map.addLayer({
      'id': outlineLayerId,
      'type': 'line',
      'source': sourceId,
      'layout': {
        'visibility': svgObj.isVisible ? 'visible' : 'none'
      },
      'paint': {
        'line-color': svgObj.color,
        'line-width': 2,
        'line-opacity': Math.min(svgObj.opacity + 0.3, 1.0)
      }
    });
    
    // Add center point
    map.addSource(centerSourceId, {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [svgObj.position.lng, svgObj.position.lat]
        }
      }
    });
    
    map.addLayer({
      'id': centerLayerId,
      'type': 'circle',
      'source': centerSourceId,
      'layout': {
        'visibility': svgObj.isVisible ? 'visible' : 'none'
      },
      'paint': {
        'circle-radius': 4,
        'circle-color': svgObj.color,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      }
    });
    
    console.log('✅ SVG loaded on map:', svgObj.filename, 'ID:', svgObj.id);
    
  } catch (error) {
    console.error('❌ Error loading SVG on map:', error);
  }
}

function removeSvgFromMap(svgObj) {
  try {
    const layersToRemove = [
      `svg-${svgObj.id}-fill`,
      `svg-${svgObj.id}-outline`, 
      `svg-${svgObj.id}-center`
    ];
    const sourcesToRemove = [
      `svg-${svgObj.id}`,
      `svg-${svgObj.id}-center-source`
    ];
    
    layersToRemove.forEach(layerId => {
      if (map.getLayer(layerId)) map.removeLayer(layerId);
    });
    
    sourcesToRemove.forEach(sourceId => {
      if (map.getSource(sourceId)) map.removeSource(sourceId);
    });
  } catch (error) {
    // Layers/sources don't exist yet, that's fine
  }
}

// --- PERSISTENCE FUNCTIONS ---

function saveSvgsToLocalStorage() {
  try {
    const svgArray = Array.from(multiSvgManager.placedSvgs.values());
    localStorage.setItem('multiSvgData', JSON.stringify({
      svgs: svgArray,
      nextId: multiSvgManager.nextId
    }));
  } catch (error) {
    console.warn('Failed to save SVGs to localStorage:', error);
  }
}

function loadSavedSvgs() {
  try {
    const saved = localStorage.getItem('multiSvgData');
    if (!saved) return;
    
    const data = JSON.parse(saved);
    
    // Restore SVGs
    data.svgs.forEach(svg => {
      multiSvgManager.placedSvgs.set(svg.id, svg);
      loadSvgOnMap(svg);
    });
    
    // Restore next ID
    multiSvgManager.nextId = data.nextId || 1;
    
    // Update UI
    updateSvgManagerUI();
    
    console.log('📂 Loaded', data.svgs.length, 'saved SVGs');
  } catch (error) {
    console.warn('Failed to load saved SVGs:', error);
  }
}

// Make functions globally accessible for HTML onclick handlers
window.selectSvgForEditing = selectSvgForEditing;
window.toggleSvgVisibility = toggleSvgVisibility;
window.deleteSvgById = deleteSvgById;

// === NEW WORKFLOW FUNCTIONS ===

function setupInputSliderSync(inputId, sliderId) {
  const input = document.getElementById(inputId);
  const slider = document.getElementById(sliderId);
  
  if (!input || !slider) {
    console.warn(`⚠️ Could not find input (${inputId}) or slider (${sliderId})`);
    return;
  }
  
  console.log(`🔗 Syncing ${inputId} ↔ ${sliderId}`);
  
  // Input field changes slider
  input.addEventListener('input', (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      slider.value = value;
      console.log(`📝 ${inputId} → ${value}`);
      
      // Debounced update to prevent too many reloads
      clearTimeout(input.updateTimeout);
      input.updateTimeout = setTimeout(() => {
        updateCurrentSVG();
      }, 300);
    }
  });
  
  // Slider changes input field (real-time)
  slider.addEventListener('input', (e) => {
    const value = parseFloat(e.target.value);
    input.value = value;
    console.log(`🎚️ ${sliderId} → ${value}`);
    
    // Real-time update for sliders (smoother)
    clearTimeout(slider.updateTimeout);
    slider.updateTimeout = setTimeout(() => {
      updateCurrentSVG();
    }, 100);
  });
  
  // Also handle 'change' events for final values
  slider.addEventListener('change', () => {
    updateCurrentSVG();
  });
  
  input.addEventListener('change', () => {
    updateCurrentSVG();
  });
}

// Step 1: Load SVG for editing - ENHANCED
function loadSVGForEditing(filename) {
  console.log('🎯 LOADING SVG FOR EDITING:', filename);
  
  // AGGRESSIVELY clear any existing working SVGs
  if (currentWorkingSVG) {
    console.log('🗑️ Removing previous working SVG');
    removeSVGFromMapNew(currentWorkingSVG);
  }
  
  // Also remove any editing-* layers that might exist
  clearAllEditingLayers();
  
  // IMPORTANT: Remove any existing saved SVGs with the same filename to prevent duplicates
  const existingSVGs = Array.from(placedSVGs.values()).filter(svg => svg.filename === filename);
  existingSVGs.forEach(svg => {
    console.log(`🗑️ Removing existing saved SVG: ${svg.filename} (ID: ${svg.id})`);
    removeSVGFromMapNew(svg);
    placedSVGs.delete(svg.id);
  });
  
  // Create new working SVG object with smart defaults
  currentWorkingSVG = {
    id: `editing-${Date.now()}`,
    filename: filename,
    position: { 
      lat: 42.3289,  // Michigan Central area
      lng: -83.0776 
    },
    scale: 1.0,       // Start at scale 1
    rotation: 0,
    color: '#ff6b35',  // Bright orange for editing visibility
    opacity: 0.8,     // High opacity for clear visibility
    isVisible: true,
    isEditing: true    // Flag to identify editing SVG
  };
  
  console.log('✅ Created working SVG:', {
    id: currentWorkingSVG.id,
    filename: currentWorkingSVG.filename,
    position: currentWorkingSVG.position
  });
  
  // Show editing interface
  document.getElementById('placement-step').style.display = 'block';
  document.getElementById('save-step').style.display = 'block';
  
  // Update indicators with clear status
  const indicator = document.getElementById('current-svg-indicator');
  if (indicator) {
    indicator.textContent = `🎯 EDITING: ${filename}`;
    indicator.style.color = '#ff6b35';
    indicator.style.fontWeight = 'bold';
  }
  
  // Populate controls with current values
  populateControls();
  
  // Load SVG on map with editing styling
  console.log('🗺️ Loading SVG on map for editing...');
  loadSVGOnMapNew(currentWorkingSVG);
  
  // Add visual feedback
  showEditingFeedback();
}

function showEditingFeedback() {
  console.log('🎨 Showing editing feedback');
  
  // Flash the map briefly to show where SVG is
  const mapContainer = document.getElementById('map');
  if (mapContainer) {
    mapContainer.style.border = '3px solid #ff6b35';
    setTimeout(() => {
      mapContainer.style.border = 'none';
    }, 1000);
  }
  
  // Show editing status in console
  console.log('📍 SVG loaded at:', {
    lat: currentWorkingSVG.position.lat,
    lng: currentWorkingSVG.position.lng,
    scale: currentWorkingSVG.scale,
    color: currentWorkingSVG.color
  });
  
  // Pan map to SVG location for better visibility
  if (map && currentWorkingSVG) {
    map.easeTo({
      center: [currentWorkingSVG.position.lng, currentWorkingSVG.position.lat],
      zoom: Math.max(map.getZoom(), 16),
      duration: 1000
    });
  }
}

function showAutoEditingStatus(filename) {
  // Show status message in precision indicator
  const statusPanel = document.getElementById('precision-status');
  const modeIndicator = document.getElementById('mode-indicator');
  
  if (statusPanel && modeIndicator) {
    statusPanel.style.display = 'block';
    statusPanel.style.background = 'rgba(255, 107, 53, 0.95)'; // Orange background
    modeIndicator.innerHTML = `
      <div style="text-align: center;">
        <div style="font-size: 14px; font-weight: bold;">🎯 AUTO-EDITING MODE</div>
        <div style="font-size: 12px; margin-top: 4px;">${filename}</div>
        <div style="font-size: 10px; margin-top: 2px; opacity: 0.8;">Ready for adjustments!</div>
      </div>
    `;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      if (statusPanel.style.background.includes('255, 107, 53')) {
        statusPanel.style.display = 'none';
      }
    }, 5000);
  }
  
  console.log('🎯 Auto-editing status displayed for:', filename);
}

function populateControls() {
  if (!currentWorkingSVG) return;
  
  const svg = currentWorkingSVG;
  
  // Populate all controls
  document.getElementById('lat-input').value = svg.position.lat;
  document.getElementById('lat-slider').value = svg.position.lat;
  document.getElementById('lng-input').value = svg.position.lng;
  document.getElementById('lng-slider').value = svg.position.lng;
  document.getElementById('scale-input').value = svg.scale;
  document.getElementById('scale-slider').value = svg.scale;
  document.getElementById('rotation-input').value = svg.rotation;
  document.getElementById('rotation-slider').value = svg.rotation;
  document.getElementById('opacity-input').value = svg.opacity;
  document.getElementById('opacity-slider').value = svg.opacity;
  document.getElementById('color-input').value = svg.color;
}

function applyGoogleCoords() {
  const coordsInput = document.getElementById('google-coords').value.trim();
  if (!coordsInput) {
    alert('Please enter coordinates in Google Maps format (lat, lng)');
    return;
  }
  
  const parts = coordsInput.split(',');
  if (parts.length !== 2) {
    alert('Invalid format. Use: 42.3289, -83.0776');
    return;
  }
  
  const lat = parseFloat(parts[0].trim());
  const lng = parseFloat(parts[1].trim());
  
  if (isNaN(lat) || isNaN(lng)) {
    alert('Invalid coordinates. Please check your input.');
    return;
  }
  
  // Update current SVG
  currentWorkingSVG.position.lat = lat;
  currentWorkingSVG.position.lng = lng;
  
  // Update controls
  document.getElementById('lat-input').value = lat;
  document.getElementById('lat-slider').value = lat;
  document.getElementById('lng-input').value = lng;
  document.getElementById('lng-slider').value = lng;
  
  // Clear input
  document.getElementById('google-coords').value = '';
  
  // Update map
  updateCurrentSVG();
  
  console.log('📍 Applied Google coordinates:', lat, lng);
}

function updateCurrentSVG(skipReload = false) {
  if (!currentWorkingSVG) {
    console.warn('⚠️ No current SVG to update');
    return;
  }
  
  // Get values from controls with validation
  const latInput = document.getElementById('lat-input');
  const lngInput = document.getElementById('lng-input');
  const scaleInput = document.getElementById('scale-input');
  const rotationInput = document.getElementById('rotation-input');
  const opacityInput = document.getElementById('opacity-input');
  const colorInput = document.getElementById('color-input');
  
  if (!latInput || !lngInput || !scaleInput || !rotationInput || !opacityInput || !colorInput) {
    console.error('❌ Missing input controls');
    return;
  }
  
  // Update values with validation
  const newLat = parseFloat(latInput.value);
  const newLng = parseFloat(lngInput.value);
  const newScale = parseFloat(scaleInput.value);
  const newRotation = parseFloat(rotationInput.value);
  const newOpacity = parseFloat(opacityInput.value);
  const newColor = colorInput.value;
  
  // Validate ranges (more permissive for precision work)
  if (isNaN(newLat) || newLat < 30 || newLat > 50) {
    console.warn('⚠️ Invalid latitude:', newLat);
    return;
  }
  if (isNaN(newLng) || newLng > -70 || newLng < -100) {
    console.warn('⚠️ Invalid longitude:', newLng);
    return;
  }
  if (isNaN(newScale) || newScale <= 0) {
    console.warn('⚠️ Invalid scale:', newScale);
    return;
  }
  
  // REMOVE the current SVG from map before updating (prevents duplicates)
  if (!skipReload) {
    console.log('🔄 Removing current SVG before update to prevent duplicates');
    removeSVGFromMapNew(currentWorkingSVG);
  }
  
  // Update SVG object
  currentWorkingSVG.position.lat = newLat;
  currentWorkingSVG.position.lng = newLng;
  currentWorkingSVG.scale = newScale;
  currentWorkingSVG.rotation = newRotation;
  currentWorkingSVG.opacity = newOpacity;
  currentWorkingSVG.color = newColor;
  
  // Update display values IMMEDIATELY
  updateDisplayValues();
  
  // Update sliders to match (without triggering events)
  updateSlidersFromInputs();
  
  // Reload SVG on map with new values - REAL TIME (ONLY ONE VERSION)
  if (!skipReload) {
    console.log('📍 Loading updated SVG at new position');
    loadSVGOnMapNew(currentWorkingSVG);
  }
}

// ULTRA-PRECISE positioning with real-time updates
function adjustSVGPosition(deltaLat, deltaLng, deltaScale = 0, deltaRotation = 0) {
  if (!currentWorkingSVG) return;
  
  const latInput = document.getElementById('lat-input');
  const lngInput = document.getElementById('lng-input');
  const scaleInput = document.getElementById('scale-input');
  const rotationInput = document.getElementById('rotation-input');
  
  if (!latInput || !lngInput || !scaleInput || !rotationInput) return;
  
  // Apply micro-adjustments
  const currentLat = parseFloat(latInput.value) || 0;
  const currentLng = parseFloat(lngInput.value) || 0;
  const currentScale = parseFloat(scaleInput.value) || 0.0001;
  const currentRotation = parseFloat(rotationInput.value) || 0;
  
  // Update inputs with extreme precision
  latInput.value = (currentLat + deltaLat).toFixed(8);
  lngInput.value = (currentLng + deltaLng).toFixed(8);
  scaleInput.value = Math.max(0.000001, currentScale + deltaScale).toFixed(8);
  rotationInput.value = ((currentRotation + deltaRotation + 360) % 360).toFixed(1);
  
  console.log(`🎯 MICRO-ADJUST: lat${deltaLat >= 0 ? '+' : ''}${deltaLat.toFixed(8)}, lng${deltaLng >= 0 ? '+' : ''}${deltaLng.toFixed(8)}`);
  
  // Update SVG immediately - EVERY FRAME
  updateCurrentSVG();
}

function updateDisplayValues() {
  if (!currentWorkingSVG) return;
  
  // Update slider display values
  const latValue = document.getElementById('lat-value');
  const lngValue = document.getElementById('lng-value');
  const scaleValue = document.getElementById('scale-value');
  const rotationValue = document.getElementById('rotation-value');
  const opacityValue = document.getElementById('opacity-value');
  
  if (latValue) latValue.textContent = currentWorkingSVG.position.lat.toFixed(6);
  if (lngValue) lngValue.textContent = currentWorkingSVG.position.lng.toFixed(6);
  if (scaleValue) scaleValue.textContent = currentWorkingSVG.scale.toFixed(5);
  if (rotationValue) rotationValue.textContent = currentWorkingSVG.rotation + '°';
  if (opacityValue) opacityValue.textContent = currentWorkingSVG.opacity.toFixed(1);
}

function updateSlidersFromInputs() {
  if (!currentWorkingSVG) return;
  
  // Update sliders without triggering their events
  const latSlider = document.getElementById('lat-slider');
  const lngSlider = document.getElementById('lng-slider');
  const scaleSlider = document.getElementById('scale-slider');
  const rotationSlider = document.getElementById('rotation-slider');
  const opacitySlider = document.getElementById('opacity-slider');
  
  if (latSlider) latSlider.value = currentWorkingSVG.position.lat;
  if (lngSlider) lngSlider.value = currentWorkingSVG.position.lng;
  if (scaleSlider) scaleSlider.value = currentWorkingSVG.scale;
  if (rotationSlider) rotationSlider.value = currentWorkingSVG.rotation;
  if (opacitySlider) opacitySlider.value = currentWorkingSVG.opacity;
}

// Step 3: Save Actions
function saveCurrentSVG() {
  if (!currentWorkingSVG) {
    console.warn('⚠️ No SVG to save');
    return;
  }
  
  console.log('💾 SAVING SVG:', currentWorkingSVG.filename);
  
  // Remove the editing SVG from map first (to prevent duplicates)
  removeSVGFromMapNew(currentWorkingSVG);
  
  // Create final saved version with permanent ID
  const finalSVG = {
    ...currentWorkingSVG,
    id: `svg-${nextSVGId++}`,
    isEditing: false, // Mark as finalized
    color: currentWorkingSVG.color || '#2563eb', // Ensure color is set
    opacity: currentWorkingSVG.opacity || 0.7,
    isSaved: true
  };
  
  console.log('✅ Final SVG object:', finalSVG);
  
  // Add to placed SVGs collection
  placedSVGs.set(finalSVG.id, finalSVG);
  
  // Save to localStorage permanently
  saveSVGsToLocalStorage();
  
  // Load the final SVG on map (with new permanent styling)
  loadSVGOnMapNew(finalSVG);
  
  // Update UI
  updatePlacedSVGsList();
  updateSVGCounter();
  
  console.log(`🎉 SVG "${finalSVG.filename}" SAVED PERMANENTLY! ID: ${finalSVG.id}`);
  console.log('📊 Total saved SVGs:', placedSVGs.size);
  
  // Reset editor for next SVG
  resetEditor();
  
  // Show success feedback
  showSaveConfirmation(finalSVG);
}

function showSaveConfirmation(finalSVG) {
  // Flash green border on map
  const mapContainer = document.getElementById('map');
  if (mapContainer) {
    mapContainer.style.border = '4px solid #00ff00';
    setTimeout(() => {
      mapContainer.style.border = 'none';
    }, 1000);
  }
  
  // Show status message
  const statusPanel = document.getElementById('precision-status');
  const modeIndicator = document.getElementById('mode-indicator');
  
  if (statusPanel && modeIndicator) {
    statusPanel.style.display = 'block';
    statusPanel.style.background = 'rgba(0, 128, 0, 0.9)';
    modeIndicator.textContent = `✅ SAVED: ${finalSVG.filename}`;
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
      statusPanel.style.display = 'none';
    }, 3000);
  }
  
  console.log('🎉 SVG SAVE CONFIRMED!');
}

function clearAllEditingLayers() {
  console.log('🧹 Clearing all editing layers...');
  
  if (!map) return;
  
  // Get all layers and sources
  const style = map.getStyle();
  if (!style || !style.layers) return;
  
  // Find and remove all editing-* layers and sources
  const layersToRemove = [];
  const sourcesToRemove = [];
  
  style.layers.forEach(layer => {
    if (layer.id.includes('editing-')) {
      layersToRemove.push(layer.id);
      if (layer.source && layer.source.includes('editing-')) {
        sourcesToRemove.push(layer.source);
      }
    }
  });
  
  // Remove layers
  layersToRemove.forEach(layerId => {
    try {
      if (map.getLayer(layerId)) {
        map.removeLayer(layerId);
        console.log(`🗑️ Removed layer: ${layerId}`);
      }
    } catch (error) {
      console.warn(`⚠️ Could not remove layer ${layerId}:`, error);
    }
  });
  
  // Remove sources
  sourcesToRemove.forEach(sourceId => {
    try {
      if (map.getSource(sourceId)) {
        map.removeSource(sourceId);
        console.log(`🗑️ Removed source: ${sourceId}`);
      }
    } catch (error) {
      console.warn(`⚠️ Could not remove source ${sourceId}:`, error);
    }
  });
  
  console.log(`✅ Cleared ${layersToRemove.length} editing layers and ${sourcesToRemove.length} sources`);
}

function saveAndNext() {
  saveCurrentSVG();
  
  // Reset file selector for next SVG
  document.getElementById('svg-file-select').value = '';
  document.getElementById('load-svg-btn').disabled = true;
}

function makePermanentSVG() {
  if (!currentWorkingSVG) {
    console.warn('⚠️ No SVG to make permanent');
    return;
  }
  
  console.log('🌐 Making SVG permanent...');
  
  // First save normally
  saveCurrentSVG();
  
  // Generate the permanent placement code
  const permanentCode = generatePermanentPlacementCode(currentWorkingSVG);
  
  // Show the code to copy
  showPermanentPlacementDialog(permanentCode);
}

function generatePermanentPlacementCode(svgObj) {
  return `  {
    id: "${svgObj.id}",
    filename: "${svgObj.filename}",
    position: { lat: ${svgObj.position.lat}, lng: ${svgObj.position.lng} },
    scale: ${svgObj.scale},
    rotation: ${svgObj.rotation},
    color: "${svgObj.color}",
    opacity: ${svgObj.opacity},
    isSaved: true,
    isPermanent: true
  },`;
}

function showPermanentPlacementDialog(code) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    font-family: 'Segoe UI', sans-serif;
  `;
  
  modal.innerHTML = `
    <div style="background: white; padding: 30px; border-radius: 12px; max-width: 600px; width: 90%;">
      <h2 style="color: #1d4ed8; margin: 0 0 20px 0;">🌐 Make SVG Permanent</h2>
      <p style="margin-bottom: 20px; color: #666;">Copy this code and add it to the <code>PERMANENT_SVG_PLACEMENTS</code> array in main.js:</p>
      <textarea readonly style="width: 100%; height: 200px; font-family: monospace; font-size: 12px; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; resize: none;">${code}</textarea>
      <div style="margin-top: 20px; display: flex; gap: 10px;">
        <button onclick="navigator.clipboard.writeText(this.parentElement.previousElementSibling.value); alert('Code copied!')" style="background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer;">📋 Copy Code</button>
        <button onclick="this.closest('div[style*=fixed]').remove()" style="background: #6b7280; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer;">Close</button>
      </div>
      <p style="margin-top: 15px; font-size: 12px; color: #6b7280;">After adding the code, push to GitHub and the SVG will load automatically for all users!</p>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Auto-select the code text
  setTimeout(() => {
    const textarea = modal.querySelector('textarea');
    textarea.select();
  }, 100);
}

function discardCurrentSVG() {
  if (!currentWorkingSVG) return;
  
  // Remove from map
  removeSVGFromMapNew(currentWorkingSVG);
  
  // Reset editor
  resetEditor();
  
  console.log('🗑️ Discarded current SVG');
}

function resetEditor() {
  currentWorkingSVG = null;
  
  // Hide editing steps
  const placementStep = document.getElementById('placement-step');
  const saveStep = document.getElementById('save-step');
  
  if (placementStep) placementStep.style.display = 'none';
  if (saveStep) saveStep.style.display = 'none';
  
  // Reset indicator
  const indicator = document.getElementById('current-svg-indicator');
  if (indicator) indicator.textContent = 'No SVG Selected';
}

async function loadSVGOnMapNew(svgObj) {
  try {
    // Remove existing layers for this SVG first
    removeSVGFromMapNew(svgObj);
    
    console.log(`🎨 Loading SVG: ${svgObj.filename} (${svgObj.isEditing ? 'EDITING' : 'SAVED'} mode)`);
    
    // Fetch SVG file
    const response = await fetch(`public/${svgObj.filename}`);
    const svgText = await response.text();
    
    // Parse SVG and find ALL paths, shapes, and contours
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
    
    // Find all possible shape elements
    const pathElements = svgDoc.querySelectorAll('path');
    const rectElements = svgDoc.querySelectorAll('rect');
    const circleElements = svgDoc.querySelectorAll('circle');
    const ellipseElements = svgDoc.querySelectorAll('ellipse');
    const polygonElements = svgDoc.querySelectorAll('polygon');
    const polylineElements = svgDoc.querySelectorAll('polyline');
    
    console.log(`🔍 Found in ${svgObj.filename}:`, {
      paths: pathElements.length,
      rects: rectElements.length, 
      circles: circleElements.length,
      ellipses: ellipseElements.length,
      polygons: polygonElements.length,
      polylines: polylineElements.length
    });
    
    // Calculate global SVG center from ALL elements
    const allSvgCoordinates = [];
    
    // Collect all coordinates from all elements to find global center
    pathElements.forEach(pathElement => {
      const pathData = pathElement.getAttribute('d');
      if (pathData && pathData.trim()) {
        // Extract raw coordinates without transforms
        const pathRegex = /([MLHVZ])\s*([^MLHVZ]*)/g;
        let match;
        let currentX = 0, currentY = 0;
        
        while ((match = pathRegex.exec(pathData)) !== null) {
          const command = match[1];
          const params = match[2].trim().split(/[\s,]+/).map(Number).filter(n => !isNaN(n));
          
          switch (command) {
            case 'M':
            case 'L':
              if (params.length >= 2) {
                allSvgCoordinates.push([params[0], params[1]]);
                currentX = params[0];
                currentY = params[1];
              }
              break;
            case 'H':
              if (params.length >= 1) {
                allSvgCoordinates.push([params[0], currentY]);
                currentX = params[0];
              }
              break;
            case 'V':
              if (params.length >= 1) {
                allSvgCoordinates.push([currentX, params[0]]);
                currentY = params[0];
              }
              break;
          }
        }
      }
    });
    
    // Add rectangle coordinates
    rectElements.forEach(rect => {
      const x = parseFloat(rect.getAttribute('x') || 0);
      const y = parseFloat(rect.getAttribute('y') || 0);
      const width = parseFloat(rect.getAttribute('width') || 0);
      const height = parseFloat(rect.getAttribute('height') || 0);
      
      allSvgCoordinates.push([x, y]);
      allSvgCoordinates.push([x + width, y + height]);
    });
    
    // Calculate global center
    let globalCenter = null;
    if (allSvgCoordinates.length > 0) {
      const allX = allSvgCoordinates.map(coord => coord[0]);
      const allY = allSvgCoordinates.map(coord => coord[1]);
      globalCenter = {
        x: (Math.min(...allX) + Math.max(...allX)) / 2,
        y: (Math.min(...allY) + Math.max(...allY)) / 2
      };
      console.log(`🌍 Global SVG center: ${globalCenter.x.toFixed(2)}, ${globalCenter.y.toFixed(2)}`);
    }
    
    const allFeatures = [];
    
    // Process all path elements with global center
    pathElements.forEach((pathElement, index) => {
      const pathData = pathElement.getAttribute('d');
      if (pathData && pathData.trim()) {
        try {
          const coordinates = convertSVGPathWithTransforms(pathData, svgObj.position.lat, svgObj.position.lng, svgObj.scale, svgObj.rotation, globalCenter);
          if (coordinates && coordinates.length > 2) {
            allFeatures.push({
              type: 'Feature',
              properties: { type: 'path', index: index },
              geometry: {
                type: 'Polygon',
                coordinates: [coordinates]
              }
            });
            console.log(`✅ Added path ${index + 1}/${pathElements.length}`);
          }
        } catch (error) {
          console.warn(`⚠️ Could not process path ${index + 1}:`, error.message);
        }
      }
    });
    
    // Process rectangles
    rectElements.forEach((rect, index) => {
      try {
        const x = parseFloat(rect.getAttribute('x') || 0);
        const y = parseFloat(rect.getAttribute('y') || 0);
        const width = parseFloat(rect.getAttribute('width') || 0);
        const height = parseFloat(rect.getAttribute('height') || 0);
        
        // Convert rect to path coordinates
        const rectCoords = [
          [x, y],
          [x + width, y],
          [x + width, y + height],
          [x, y + height],
          [x, y] // Close the rectangle
        ];
        
        const coordinates = rectCoords.map(([px, py]) => {
          const rad = (svgObj.rotation * Math.PI) / 180;
          const rotatedX = px * Math.cos(rad) - py * Math.sin(rad);
          const rotatedY = px * Math.sin(rad) + py * Math.cos(rad);
          return [
            svgObj.position.lng + (rotatedX * svgObj.scale),
            svgObj.position.lat + (rotatedY * svgObj.scale)
          ];
        });
        
        allFeatures.push({
          type: 'Feature',
          properties: { type: 'rect', index: index },
          geometry: {
            type: 'Polygon',
            coordinates: [coordinates]
          }
        });
        console.log(`✅ Added rectangle ${index + 1}/${rectElements.length}`);
      } catch (error) {
        console.warn(`⚠️ Could not process rectangle ${index + 1}:`, error.message);
      }
    });
    
    // Process polygons
    polygonElements.forEach((polygon, index) => {
      try {
        const points = polygon.getAttribute('points');
        if (points) {
          const coords = points.trim().split(/[\s,]+/).map(Number);
          const polygonCoords = [];
          
          for (let i = 0; i < coords.length; i += 2) {
            if (i + 1 < coords.length) {
              polygonCoords.push([coords[i], coords[i + 1]]);
            }
          }
          
          // Close polygon if not already closed
          if (polygonCoords.length > 0) {
            const first = polygonCoords[0];
            const last = polygonCoords[polygonCoords.length - 1];
            if (first[0] !== last[0] || first[1] !== last[1]) {
              polygonCoords.push([first[0], first[1]]);
            }
          }
          
          const coordinates = polygonCoords.map(([px, py]) => {
            const rad = (svgObj.rotation * Math.PI) / 180;
            const rotatedX = px * Math.cos(rad) - py * Math.sin(rad);
            const rotatedY = px * Math.sin(rad) + py * Math.cos(rad);
            return [
              svgObj.position.lng + (rotatedX * svgObj.scale),
              svgObj.position.lat + (rotatedY * svgObj.scale)
            ];
          });
          
          allFeatures.push({
            type: 'Feature',
            properties: { type: 'polygon', index: index },
            geometry: {
              type: 'Polygon',
              coordinates: [coordinates]
            }
          });
          console.log(`✅ Added polygon ${index + 1}/${polygonElements.length}`);
        }
      } catch (error) {
        console.warn(`⚠️ Could not process polygon ${index + 1}:`, error.message);
      }
    });
    
    if (allFeatures.length === 0) {
      console.error('❌ No valid shapes found in SVG');
      return;
    }
    
    console.log(`🎉 Successfully processed ${allFeatures.length} shapes from ${svgObj.filename}`);
    
    // Create source with all features
    const sourceId = `svg-source-${svgObj.id}`;
    if (map.getSource(sourceId)) {
      map.removeSource(sourceId);
    }
    
    map.addSource(sourceId, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: allFeatures
      }
    });
    
    // Use the original color and opacity (no dashed lines)
    const finalColor = svgObj.color || '#2563eb';
    const finalOpacity = svgObj.opacity || 0.7;
    
    console.log(`🎨 Loading SVG with color: ${finalColor}, opacity: ${finalOpacity}`);
    
    // Add fill layer (solid as before)
    map.addLayer({
      id: `svg-fill-${svgObj.id}`,
      type: 'fill',
      source: sourceId,
      paint: {
        'fill-color': finalColor,
        'fill-opacity': finalOpacity
      }
    });
    
    // Add outline layer (solid as before)
    map.addLayer({
      id: `svg-line-${svgObj.id}`,
      type: 'line',
      source: sourceId,
      paint: {
        'line-color': finalColor,
        'line-width': 2,
        'line-opacity': 0.8
      }
    });
    
    console.log(`🎨 Loaded complete SVG with ${allFeatures.length} contours:`, svgObj.filename);
    
  } catch (error) {
    console.error('Error loading SVG:', error);
  }
}

function removeSVGFromMapNew(svgObj) {
  const layers = [`svg-fill-${svgObj.id}`, `svg-line-${svgObj.id}`];
  const sourceId = `svg-source-${svgObj.id}`;
  
  layers.forEach(layerId => {
    if (map.getLayer(layerId)) {
      map.removeLayer(layerId);
    }
  });
  
  if (map.getSource(sourceId)) {
    map.removeSource(sourceId);
  }
}

function updatePlacedSVGsList() {
  const listContainer = document.getElementById('placed-svgs-list');
  if (!listContainer) return;
  
  if (placedSVGs.size === 0) {
    listContainer.innerHTML = '<div class="no-svgs-message">No SVGs placed yet</div>';
    return;
  }
  
  let html = '';
  placedSVGs.forEach((svg, id) => {
    html += `
      <div class="svg-item">
        <div class="svg-item-info">
          <div class="svg-item-name">${svg.filename}</div>
          <div class="svg-item-coords">${svg.position.lat.toFixed(4)}, ${svg.position.lng.toFixed(4)}</div>
        </div>
        <div class="svg-item-actions">
          <button onclick="editSVGNew('${id}')" class="svg-item-btn">Edit</button>
          <button onclick="deleteSVGNew('${id}')" class="svg-item-btn danger">Delete</button>
        </div>
      </div>
    `;
  });
  
  listContainer.innerHTML = html;
}

function updateSVGCounter() {
  const counterEl = document.getElementById('svg-count');
  if (counterEl) {
    counterEl.textContent = placedSVGs ? placedSVGs.size : 0;
  }
}

function clearAllSVGs() {
  if (!placedSVGs || placedSVGs.size === 0) return;
  
  if (confirm(`Clear all ${placedSVGs.size} SVGs?`)) {
    placedSVGs.forEach(svg => removeSVGFromMapNew(svg));
    placedSVGs.clear();
    saveSVGsToLocalStorage();
    updatePlacedSVGsList();
    updateSVGCounter();
    resetEditor();
    
    console.log('🗑️ Cleared all SVGs');
  }
}

function saveSVGsToLocalStorage() {
  const data = {
    svgs: Array.from(placedSVGs.entries()),
    nextId: nextSVGId
  };
  localStorage.setItem('placedSVGs_new', JSON.stringify(data));
}

function loadSavedSVGs() {
  // First load permanent placements (from code - persists on GitHub)
  loadPermanentPlacements();
  
  // Then load localStorage placements (temporary - only on this device)
  const saved = localStorage.getItem('placedSVGs_new');
  if (!saved) return;
  
  try {
    const data = JSON.parse(saved);
    const localSVGs = new Map(data.svgs || []);
    
    console.log('📂 Loading temporary SVGs from localStorage...');
    
    // Only load saved SVGs (not editing ones) that aren't permanent
    let lastEditedSVG = null;
    localSVGs.forEach(svg => {
      if (svg.isSaved && !svg.isEditing && !svg.isPermanent) {
        console.log(`📂 Loading temporary SVG: ${svg.filename}`);
        placedSVGs.set(svg.id, svg);
        loadSVGOnMapNew(svg);
        
        // Track the most recently saved SVG for auto-editing
        if (!lastEditedSVG || svg.id > lastEditedSVG.id) {
          lastEditedSVG = svg;
        }
      } else {
        console.log(`⏭️ Skipping non-saved or permanent SVG: ${svg.filename}`);
      }
    });
    
    // Auto-open editor for the last edited SVG
    if (lastEditedSVG) {
      console.log('🎯 Auto-opening editor for last edited SVG:', lastEditedSVG.filename);
      setTimeout(() => {
        autoLoadSVGForEditing(lastEditedSVG);
      }, 1000); // Small delay to ensure everything is loaded
    }
    
    // Update UI
    updatePlacedSVGsList();
    updateSVGCounter();
    
    console.log(`📂 Loaded ${placedSVGs.size} total SVGs (permanent + temporary)`);
  } catch (error) {
    console.error('Error loading saved SVGs:', error);
  }
}

function loadPermanentPlacements() {
  console.log('🌐 Loading permanent SVG placements from code...');
  
  PERMANENT_SVG_PLACEMENTS.forEach(svg => {
    console.log(`🌐 Loading permanent SVG: ${svg.filename}`);
    placedSVGs.set(svg.id, svg);
    loadSVGOnMapNew(svg);
  });
  
  if (PERMANENT_SVG_PLACEMENTS.length > 0) {
    console.log('✅ Loaded', PERMANENT_SVG_PLACEMENTS.length, 'permanent SVG placements');
  } else {
    console.log('📝 No permanent placements defined yet - use "Make Permanent" to add them');
  }
}

function autoLoadSVGForEditing(svgObj) {
  console.log('🎯 Auto-loading SVG for editing:', svgObj.filename);
  
  // Remove the saved SVG from map (we'll reload it as editing)
  removeSVGFromMapNew(svgObj);
  placedSVGs.delete(svgObj.id);
  
  // Convert to editing SVG
  currentWorkingSVG = {
    ...svgObj,
    id: `editing-${Date.now()}`,
    isEditing: true,
    isSaved: false,
    color: '#ff6b35', // Bright orange for editing visibility
    opacity: 0.8
  };
  
  console.log('✅ Converted to editing SVG:', currentWorkingSVG);
  
  // Open the editor panel
  openSVGPanel();
  
  // Populate all the controls with the SVG's current values
  populateControlsFromObject(currentWorkingSVG);
  
  // Load the SVG on the map in editing mode
  loadSVGOnMapNew(currentWorkingSVG);
  
  // Show editing feedback (pan to SVG and flash border)
  showEditingFeedback();
  
  // Enable crosshair mode for precise editing
  if (!crosshairMode) {
    toggleCrosshairMode();
  }
  
  // Show auto-editing status
  showAutoEditingStatus(currentWorkingSVG.filename);
  
  console.log('🎉 SVG ready for editing! All controls populated.');
}

// Global functions for HTML onclick handlers
window.editSVGNew = function(svgId) {
  const svg = placedSVGs.get(svgId);
  if (!svg) return;
  
  // Set as current working SVG
  currentWorkingSVG = { ...svg };
  
  // Show editing controls
  document.getElementById('placement-step').style.display = 'block';
  document.getElementById('save-step').style.display = 'block';
  
  // Update indicator
  document.getElementById('current-svg-indicator').textContent = `Editing: ${svg.filename}`;
  
  // Populate controls
  populateControls();
  
  console.log('✏️ Editing SVG:', svg.filename);
};

window.deleteSVGNew = function(svgId) {
  const svg = placedSVGs.get(svgId);
  if (!svg) return;
  
  if (confirm(`Delete ${svg.filename}?`)) {
    removeSVGFromMapNew(svg);
    placedSVGs.delete(svgId);
    saveSVGsToLocalStorage();
    updatePlacedSVGsList();
    updateSVGCounter();
    
    console.log('🗑️ Deleted SVG:', svg.filename);
  }
};

function updateEditorUI() {
  document.getElementById('svg-file-select').value = svgEditorState.currentFile;
  
  // Update position sliders, values, and input fields
  document.getElementById('position-lat').value = svgEditorState.position.lat;
  document.getElementById('lat-value').textContent = svgEditorState.position.lat.toFixed(8);
  document.getElementById('lat-input').value = svgEditorState.position.lat.toFixed(8);
  
  document.getElementById('position-lng').value = svgEditorState.position.lng;
  document.getElementById('lng-value').textContent = svgEditorState.position.lng.toFixed(8);
  document.getElementById('lng-input').value = svgEditorState.position.lng.toFixed(8);
  
  // Update other sliders
  document.getElementById('scale-slider').value = svgEditorState.scale;
  document.getElementById('scale-value').textContent = svgEditorState.scale.toFixed(5);
  document.getElementById('rotation-slider').value = svgEditorState.rotation;
  document.getElementById('rotation-value').textContent = svgEditorState.rotation + '°';
  document.getElementById('polygon-color').value = svgEditorState.color;
  document.getElementById('opacity-slider').value = svgEditorState.opacity;
  document.getElementById('opacity-value').textContent = svgEditorState.opacity.toFixed(1);
}

function resetSVGEditor() {
  svgEditorState = {
    currentFile: 'test.svg',
    position: { lat: 42.32903986470547, lng: -83.08124306197425 },
    scale: 0.0001,
    rotation: 0,
    color: '#94A2CC',
    opacity: 0.3,
    isVisible: true
  };
  updateEditorUI();
  loadSVGPolygon(svgEditorState.currentFile);
  autoSaveSVGState(); // Save the reset state
  console.log('🔄 SVG Editor reset to defaults and auto-saved');
}

function exportSVGPreset() {
  try {
    // Create a downloadable preset file
    const presetData = JSON.stringify(svgEditorState, null, 2);
    const blob = new Blob([presetData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `svg-preset-${svgEditorState.currentFile.replace('.svg', '')}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('📤 SVG preset exported successfully');
    
    // Visual feedback
    const btn = document.getElementById('save-preset');
    const originalText = btn.textContent;
    btn.textContent = 'Exported!';
    btn.style.background = '#4ECDC4';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 1000);
  } catch (error) {
    console.error('❌ Failed to export preset:', error);
  }
}

function importSVGPreset() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedState = JSON.parse(e.target.result);
          svgEditorState = { ...svgEditorState, ...importedState };
          updateEditorUI();
          loadSVGPolygon(svgEditorState.currentFile);
          autoSaveSVGState();
          console.log('📥 SVG preset imported successfully');
          
          // Visual feedback
          const btn = document.getElementById('load-preset');
          const originalText = btn.textContent;
          btn.textContent = 'Imported!';
          btn.style.background = '#4ECDC4';
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
          }, 1000);
        } catch (error) {
          console.error('❌ Failed to import preset:', error);
          alert('Invalid preset file format');
        }
      };
      reader.readAsText(file);
    }
  };
  
  input.click();
}

function loadSVGPreset() {
  try {
    // First try to load current working state (auto-saved)
    const currentState = localStorage.getItem('svg-editor-current-state');
    if (currentState) {
      svgEditorState = { ...svgEditorState, ...JSON.parse(currentState) };
      console.log('📂 Auto-saved SVG state loaded successfully');
      if (svgEditorVisible) {
        updateEditorUI();
      }
      return;
    }
    
    // Fallback to manual preset if no current state
    const saved = localStorage.getItem('svg-editor-preset');
    if (saved) {
      svgEditorState = { ...svgEditorState, ...JSON.parse(saved) };
      console.log('📂 SVG preset loaded successfully');
      if (svgEditorVisible) {
        updateEditorUI();
      }
    }
  } catch (error) {
    console.error('❌ Failed to load preset:', error);
  }
}

function updatePolygonRealTime() {
  if (map.getSource('custom-svg-polygon')) {
    loadSVGPolygon(svgEditorState.currentFile);
  }
  // Auto-save current state on every change
  autoSaveSVGState();
}

function autoSaveSVGState() {
  try {
    localStorage.setItem('svg-editor-current-state', JSON.stringify(svgEditorState));
    console.log('💾 Auto-saved SVG state');
  } catch (error) {
    console.error('❌ Failed to auto-save state:', error);
  }
}

// --- SVG TO POLYGON SYSTEM ---
async function loadSVGPolygon(svgFileName) {
  try {
    console.log('🔍 LOADING SVG:', svgFileName);
    
    // Fetch your SVG file
    const response = await fetch(`public/${svgFileName}`);
    console.log('📡 SVG Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch SVG: ${response.status} ${response.statusText}`);
    }
    
    const svgText = await response.text();
    console.log('📄 SVG Content loaded, length:', svgText.length);
    
    // Parse SVG and extract path data
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
    const pathElement = svgDoc.querySelector('path');
    
    if (!pathElement) {
      console.error('❌ No path element found in SVG');
      console.log('SVG Document:', svgDoc);
      return;
    }
    
    const pathData = pathElement.getAttribute('d');
    console.log('✅ SVG path data found:', pathData);
    
    // Convert SVG path to coordinates using editor state
    const coordinates = convertSVGPathWithTransforms(
      pathData, 
      svgEditorState.position.lat, 
      svgEditorState.position.lng,
      svgEditorState.scale,
      svgEditorState.rotation
    );
    
    if (coordinates.length === 0) {
      console.error('No valid coordinates generated from SVG');
      return;
    }
    
    // Remove existing layers if they exist
    removeSVGPolygon();
    
    // Create the polygon data
    const customPolygonData = {
      "type": "geojson",
      "data": {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [coordinates]
        },
        "properties": {
          "name": "SVG Custom Boundary",
          "source": svgFileName
        }
      }
    };

    // Add the polygon source
    map.addSource('custom-svg-polygon', customPolygonData);

    // Add fill layer
    map.addLayer({
      'id': 'custom-svg-fill',
      'type': 'fill',
      'source': 'custom-svg-polygon',
      'layout': {
        'visibility': svgEditorState.isVisible ? 'visible' : 'none'
      },
      'paint': {
        'fill-color': svgEditorState.color,
        'fill-opacity': svgEditorState.opacity
      }
    });

    // Add outline layer
    map.addLayer({
      'id': 'custom-svg-outline',
      'type': 'line',
      'source': 'custom-svg-polygon',
      'layout': {
        'visibility': svgEditorState.isVisible ? 'visible' : 'none'
      },
      'paint': {
        'line-color': svgEditorState.color,
        'line-width': 3,
        'line-opacity': Math.min(svgEditorState.opacity + 0.3, 1)
      }
    });

    // Add center marker
    map.addSource('svg-center', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [svgEditorState.position.lng, svgEditorState.position.lat]
        }
      }
    });

    map.addLayer({
      'id': 'svg-center-point',
      'type': 'circle',
      'source': 'svg-center',
      'layout': {
        'visibility': svgEditorState.isVisible ? 'visible' : 'none'
      },
      'paint': {
        'circle-radius': 6,
        'circle-color': svgEditorState.color,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      }
    });
    
    console.log('🎯 POLYGON CREATED with', coordinates.length, 'coordinates');
    console.log('📍 Position:', [svgEditorState.position.lng, svgEditorState.position.lat]);
    console.log('📏 Scale:', svgEditorState.scale, 'Rotation:', svgEditorState.rotation + '°');
    
    dbg("SVG_POLYGON_LOADED", {
      file: svgFileName,
      coordinates: coordinates.length,
      position: [svgEditorState.position.lng, svgEditorState.position.lat],
      scale: svgEditorState.scale,
      rotation: svgEditorState.rotation,
      color: svgEditorState.color,
      opacity: svgEditorState.opacity
    });
    
  } catch (error) {
    console.error('Error loading SVG polygon:', error);
  }
}

function removeSVGPolygon() {
  try {
    if (map.getLayer('custom-svg-fill')) map.removeLayer('custom-svg-fill');
    if (map.getLayer('custom-svg-outline')) map.removeLayer('custom-svg-outline');
    if (map.getLayer('svg-center-point')) map.removeLayer('svg-center-point');
    if (map.getSource('custom-svg-polygon')) map.removeSource('custom-svg-polygon');
    if (map.getSource('svg-center')) map.removeSource('svg-center');
  } catch (error) {
    // Layers don't exist yet, that's fine
  }
}

// Convert SVG path to map coordinates with transforms (scale, rotation, translation)
function convertSVGPathWithTransforms(pathData, centerLat, centerLng, scale, rotationDegrees, svgGlobalCenter = null) {
  console.log('🔧 Converting SVG path with transforms:', {
    scale,
    rotation: rotationDegrees + '°',
    center: [centerLng, centerLat]
  });
  
  // Extract coordinates from SVG path
  const coordinates = [];
  const pathRegex = /([MLHVZCQA])\s*([^MLHVZCQA]*)/g;
  let match;
  let currentX = 0, currentY = 0;
  
  // First pass: convert SVG commands to raw coordinates
  const rawCoordinates = [];
  
  while ((match = pathRegex.exec(pathData)) !== null) {
    const command = match[1];
    const params = match[2].trim().split(/[\s,]+/).map(Number).filter(n => !isNaN(n));
    
    switch (command) {
      case 'M': // Move to
        currentX = params[0];
        currentY = params[1];
        rawCoordinates.push([currentX, currentY]);
        break;
        
      case 'L': // Line to
        currentX = params[0];
        currentY = params[1];
        rawCoordinates.push([currentX, currentY]);
        break;
        
      case 'H': // Horizontal line
        currentX = params[0];
        rawCoordinates.push([currentX, currentY]);
        break;
        
      case 'V': // Vertical line
        currentY = params[0];
        rawCoordinates.push([currentX, currentY]);
        break;
        
      case 'C': // Cubic Bezier curve
        // Approximate curve with multiple line segments
        const steps = 10; // Number of segments to approximate curve
        const startX = currentX, startY = currentY;
        const cp1X = params[0], cp1Y = params[1];
        const cp2X = params[2], cp2Y = params[3];
        const endX = params[4], endY = params[5];
        
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          const x = Math.pow(1-t, 3) * startX + 
                   3 * Math.pow(1-t, 2) * t * cp1X + 
                   3 * (1-t) * Math.pow(t, 2) * cp2X + 
                   Math.pow(t, 3) * endX;
          const y = Math.pow(1-t, 3) * startY + 
                   3 * Math.pow(1-t, 2) * t * cp1Y + 
                   3 * (1-t) * Math.pow(t, 2) * cp2Y + 
                   Math.pow(t, 3) * endY;
          rawCoordinates.push([x, y]);
        }
        currentX = endX;
        currentY = endY;
        break;
        
      case 'Q': // Quadratic Bezier curve
        // Approximate curve with multiple line segments
        const qSteps = 8;
        const qStartX = currentX, qStartY = currentY;
        const qcpX = params[0], qcpY = params[1];
        const qEndX = params[2], qEndY = params[3];
        
        for (let i = 1; i <= qSteps; i++) {
          const t = i / qSteps;
          const x = Math.pow(1-t, 2) * qStartX + 
                   2 * (1-t) * t * qcpX + 
                   Math.pow(t, 2) * qEndX;
          const y = Math.pow(1-t, 2) * qStartY + 
                   2 * (1-t) * t * qcpY + 
                   Math.pow(t, 2) * qEndY;
          rawCoordinates.push([x, y]);
        }
        currentX = qEndX;
        currentY = qEndY;
        break;
        
      case 'A': // Arc (approximate with line segments)
        // For simplicity, treat arcs as straight lines to end point
        // A more complex implementation would calculate the arc properly
        currentX = params[5];
        currentY = params[6];
        rawCoordinates.push([currentX, currentY]);
        break;
        
      case 'Z': // Close path
        if (rawCoordinates.length > 0) {
          rawCoordinates.push([...rawCoordinates[0]]); // Close the polygon
        }
        break;
    }
  }
  
  if (rawCoordinates.length === 0) {
    console.warn('⚠️ No coordinates extracted from path');
    return coordinates;
  }
  
  // Use global SVG center if provided, otherwise calculate this shape's center
  let svgCenterX, svgCenterY;
  if (svgGlobalCenter) {
    svgCenterX = svgGlobalCenter.x;
    svgCenterY = svgGlobalCenter.y;
    console.log('📍 Using global SVG center:', svgCenterX.toFixed(2), svgCenterY.toFixed(2));
  } else {
    // Calculate the center point of just this shape
    const xCoords = rawCoordinates.map(coord => coord[0]);
    const yCoords = rawCoordinates.map(coord => coord[1]);
    svgCenterX = (Math.min(...xCoords) + Math.max(...xCoords)) / 2;
    svgCenterY = (Math.min(...yCoords) + Math.max(...yCoords)) / 2;
    console.log('📍 Individual shape center:', svgCenterX.toFixed(2), svgCenterY.toFixed(2));
  }
  
  // Apply transforms to each coordinate
  const rotationRadians = (rotationDegrees * Math.PI) / 180;
  const cosAngle = Math.cos(rotationRadians);
  const sinAngle = Math.sin(rotationRadians);
  
  // Calculate aspect ratio correction for map coordinates
  // At Detroit's latitude (~42.3°), longitude degrees are shorter than latitude degrees
  const latitudeRadians = (centerLat * Math.PI) / 180;
  const longitudeCorrection = Math.cos(latitudeRadians);
  
  console.log('🌍 Aspect ratio correction factor:', longitudeCorrection.toFixed(6));
  
  for (const [x, y] of rawCoordinates) {
    // Apply rotation around SVG center (keeps relative positions)
    const centeredX = x - svgCenterX;
    const centeredY = y - svgCenterY;
    
    const rotatedX = centeredX * cosAngle - centeredY * sinAngle;
    const rotatedY = centeredX * sinAngle + centeredY * cosAngle;
    
    // Apply scale with aspect ratio preservation
    // Convert UI scale (1.0 = normal) to actual tiny scale (0.00001)
    const actualScale = scale * 0.00001;
    const scaledX = rotatedX * actualScale;
    const scaledY = rotatedY * actualScale;
    
    // Apply longitude correction to maintain aspect ratio on map
    const mapX = centerLng + (scaledX / longitudeCorrection);
    const mapY = centerLat - scaledY; // Flip Y axis for map coordinates
    
    coordinates.push([mapX, mapY]);
  }
  
  console.log('✅ Generated', coordinates.length, 'coordinates from SVG (center-rotated)');
  console.log('🗺️ Coordinate bounds:');
  if (coordinates.length > 0) {
    const lngs = coordinates.map(c => c[0]);
    const lats = coordinates.map(c => c[1]);
    console.log('   Lng range:', Math.min(...lngs).toFixed(6), 'to', Math.max(...lngs).toFixed(6));
    console.log('   Lat range:', Math.min(...lats).toFixed(6), 'to', Math.max(...lats).toFixed(6));
  }
  
  return coordinates;
}

// --- NAVIGATION CONTROLLER ---
let navState = {
  targetCenter: HOME_POSITION.center,
  targetZoom: HOME_POSITION.zoom,
  targetPitch: HOME_POSITION.pitch,
  targetBearing: HOME_POSITION.bearing,
  spinning: true
};

// --- orbit ---- (COMMENTED OUT)
let bearing = HOME_POSITION.bearing, spinning = false; // Start at the home bearing - ORBIT DISABLED
// orbitCenter is now declared globally above
let targetOrbitCenter = HOME_POSITION.center;
let orbitTransitionSpeed = 0.015; // Normal speed

// --- Interactive Orbit Control ---
let userInteracting = false;
let interactionTimeout = null;
// lastInteractionTime already declared for idle mode

// --- NAVIGATION CONTROLLER --- (ORBIT COMMENTED OUT)
function updateCamera() {
  const currentState = {
    center: [map.getCenter().lng, map.getCenter().lat],
    orbitCenter: orbitCenter,
    targetOrbitCenter: targetOrbitCenter,
    isEasing: map.isEasing && map.isEasing()
  };
  
  // dbg("CAMERA_TICK", currentState); // Debug disabled for production
  
  // ORBIT FUNCTIONALITY COMMENTED OUT
  /*
  if (spinning && !userInteracting && !svgEditorVisible) {
    bearing = (bearing + 0.025625) % 360; // Half speed: 0.05125 / 2
    
    // Smoothly interpolate toward target orbit center
    const lngDiff = targetOrbitCenter[0] - orbitCenter[0];
    const latDiff = targetOrbitCenter[1] - orbitCenter[1];
    
    if (Math.abs(lngDiff) > 0.0001 || Math.abs(latDiff) > 0.0001) {
      orbitCenter[0] += lngDiff * orbitTransitionSpeed;
      orbitCenter[1] += latDiff * orbitTransitionSpeed;
    }
    
    // NAVIGATION CONTROLLER: Set camera state (only when not user interacting and editor closed)
    if (!userInteracting && !svgEditorVisible) {
      map.easeTo({
        center: orbitCenter,
        bearing: bearing,
        zoom: navState.targetZoom,
        pitch: navState.targetPitch,
        duration: 0 // Immediate for orbit
      });
    }
  }
  */
  requestAnimationFrame(updateCamera);
}

// Legacy orbit function - now handled by updateCamera
function orbit() {
  // Deprecated - keeping for compatibility
}

updateCamera();

// --- Interactive Orbit Override ---
// Old interaction detection code removed to prevent orbit interference
// map.on('mousedown', () => {
//   userInteracting = true;
//   lastInteractionTime = Date.now();
//   clearTimeout(interactionTimeout);
//   dbg("ORBIT_OVERRIDE", {action: "start", userInteracting: true});
// });

// map.on('touchstart', () => {
//   userInteracting = true;
//   lastInteractionTime = Date.now();
//   clearTimeout(interactionTimeout);
//   dbg("ORBIT_OVERRIDE", {action: "start_touch", userInteracting: true});
// });

// Detect when user stops interacting
map.on('mouseup', () => {
  scheduleOrbitResume();
});

map.on('touchend', () => {
  scheduleOrbitResume();
});

// Also detect drag end (drag disabled)
// map.on('dragend', () => {
//   scheduleOrbitResume();
// });

// Function to schedule orbit resumption
function scheduleOrbitResume() {
  lastInteractionTime = Date.now();
  clearTimeout(interactionTimeout);
  
  // Resume orbit after 2 seconds of no interaction
  interactionTimeout = setTimeout(() => {
    if (Date.now() - lastInteractionTime >= 2000 && !svgEditorVisible) {
      userInteracting = false;
      
      // FIXED: Set both orbit center AND target to current position
      const currentCenter = map.getCenter();
      orbitCenter = [currentCenter.lng, currentCenter.lat];
      targetOrbitCenter = [currentCenter.lng, currentCenter.lat]; // This is the key fix!
      
      // Update bearing to current bearing for smooth continuation
      bearing = map.getBearing();
      
      dbg("ORBIT_RESUME", {
        action: "auto_resume",
        newOrbitCenter: orbitCenter,
        newTargetOrbitCenter: targetOrbitCenter,
        currentBearing: bearing,
        userInteracting: false,
        editorVisible: svgEditorVisible
      });
    } else if (svgEditorVisible) {
      console.log('🚫 Orbit resume blocked: SVG Editor is open');
    }
  }, 2000);
}

// Update interaction state during drag (drag disabled)
// map.on('drag', () => {
//   if (!userInteracting) {
//     userInteracting = true;
//     dbg("ORBIT_OVERRIDE", {action: "drag_start", userInteracting: true});
//   }
//   lastInteractionTime = Date.now();
// });

// --- Label Control State ---
let labelsVisible = true; // Force labels visible by default
let hiddenLayers = [];

// SVG Polygon state is now managed in svgEditorState

// --- Style Controls ---
document.getElementById('style-controls').addEventListener('click', (e) => {
  if (e.target.id === 'toggle-labels') {
    toggleLabels();
  } else if (e.target.id === 'toggle-svg-polygon') {
    toggleSVGPolygon();
  } else if (e.target.id === 'svg-editor-toggle') {
    // Handled by setupSVGEditorEvents - do nothing here
    return;
  } else if (e.target.dataset.style) {
    dbg("STYLE_CHANGE", {style: e.target.dataset.style});
    map.setStyle(e.target.dataset.style);
    
    // Re-apply label visibility after style change
    map.once('styledata', () => {
      if (!labelsVisible) {
        hideAllLabels();
      }
      // Re-add all SVGs after style change
      multiSvgManager.placedSvgs.forEach(svg => {
        loadSvgOnMap(svg);
      });
      // Building highlighting removed as requested
      
      // Re-add Michigan Central SVG
      setTimeout(() => {
        loadMichiganCentralSVG();
      }, 1000);
    });
  }
});

// --- SVG Polygon Toggle Functions ---
function toggleSVGPolygon() {
  svgEditorState.isVisible = !svgEditorState.isVisible;
  const visibility = svgEditorState.isVisible ? 'visible' : 'none';
  
  console.log('🔄 Toggling SVG polygon visibility to:', visibility);
  
  try {
    // Check if layers exist first
    const style = map.getStyle();
    const hasLayers = style.layers.some(layer => 
      ['custom-svg-fill', 'custom-svg-outline', 'svg-center-point'].includes(layer.id)
    );
    
    if (!hasLayers) {
      console.warn('⚠️ SVG polygon layers not found in map style. Attempting to reload...');
      loadSVGPolygon(svgEditorState.currentFile);
      return;
    }
    
    map.setLayoutProperty('custom-svg-fill', 'visibility', visibility);
    map.setLayoutProperty('custom-svg-outline', 'visibility', visibility);
    map.setLayoutProperty('svg-center-point', 'visibility', visibility);
    
    console.log('✅ SVG polygon visibility updated successfully');
  } catch (error) {
    console.error('❌ Error toggling SVG polygon layers:', error);
  }
  
  // Update button appearance
  const toggleBtn = document.getElementById('toggle-svg-polygon');
  toggleBtn.style.opacity = svgEditorState.isVisible ? '1' : '0.5';
  
  dbg("SVG_POLYGON_TOGGLE", {visible: svgEditorState.isVisible});
}

// --- Label Toggle Functions ---
function toggleLabels() {
  if (labelsVisible) {
    hideAllLabels();
  } else {
    showAllLabels();
  }
  labelsVisible = !labelsVisible;
  
  // Update button appearance
  const toggleBtn = document.getElementById('toggle-labels');
  toggleBtn.style.opacity = labelsVisible ? '1' : '0.5';
  
  dbg("LABELS_TOGGLE", {visible: labelsVisible, hiddenCount: hiddenLayers.length});
}

// Add keyboard shortcut for toggling labels (L key) and printing camera position (P key)
// Track SVG visibility state
let svgLayersVisible = true;

document.addEventListener('keydown', (e) => {
  // Only handle if we're not in an input field
  if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    if (e.key === 'l' || e.key === 'L') {
      toggleLabels();
      console.log('🏷️ Labels toggled with keyboard shortcut (L key)');
    }
    
    // Print camera position when P key is pressed
    if (e.key === 'p' || e.key === 'P') {
      printCameraPosition();
    }
    
    // Test all markers when T key is pressed
    if (e.key === 't' || e.key === 'T') {
      testAllMarkers();
    }
    
    // Toggle SVG visibility when S key is pressed
    if (e.key === 's' || e.key === 'S') {
      toggleSVGVisibility();
    }
  }
});

// Function to toggle all SVG elements visibility
function toggleSVGVisibility() {
  svgLayersVisible = !svgLayersVisible;
  console.log(`🖼️ SVG visibility: ${svgLayersVisible ? 'VISIBLE' : 'HIDDEN'}`);
  
  let found = false;
  
  // Method 0: Check for SVG layers in the map
  try {
    const svgLayers = [];
    const style = map.getStyle();
    if (style && style.layers) {
      style.layers.forEach(layer => {
        if (layer.id && (
          layer.id.includes('svg') || 
          layer.id.includes('michigan-central-svg') ||
          layer.id.includes('-svg-')
        )) {
          svgLayers.push(layer.id);
          map.setLayoutProperty(layer.id, 'visibility', svgLayersVisible ? 'visible' : 'none');
          found = true;
        }
      });
    }
    
    if (svgLayers.length > 0) {
      console.log(`🖼️ SVG Map Layers: ${svgLayersVisible ? 'VISIBLE' : 'HIDDEN'} (${svgLayers.length} layers)`);
      console.log('Affected layers:', svgLayers);
    }
  } catch (error) {
    console.error('Error toggling map SVG layers:', error);
  }
  
  // Method 1: Try to find SVG container
  const svgContainer = document.getElementById('svg-container');
  if (svgContainer) {
    svgContainer.style.display = svgLayersVisible ? 'block' : 'none';
    found = true;
  }
  
  // Method 2: Try to find SVG elements
  const svgElements = document.querySelectorAll('svg');
  if (svgElements.length > 0) {
    console.log(`Found ${svgElements.length} SVG elements, toggling visibility...`);
    svgElements.forEach(svg => {
      svg.style.display = svgLayersVisible ? 'block' : 'none';
    });
    found = true;
  }
  
  // Method 3: Try to find common containers that might hold SVGs
  const possibleContainers = [
    document.querySelector('.svg-overlay'),
    document.querySelector('.svg-wrapper'),
    document.getElementById('overlay-container'),
    document.querySelector('.map-overlay'),
    document.getElementById('svg-editor')
  ];
  
  const container = possibleContainers.find(c => c !== null);
  if (container) {
    container.style.display = svgLayersVisible ? 'block' : 'none';
    found = true;
  }
  
  // Method 4: Check for placedSVGs (from your SVG editor)
  if (typeof placedSVGs !== 'undefined' && placedSVGs && placedSVGs.size > 0) {
    console.log(`Toggling visibility of ${placedSVGs.size} placed SVGs`);
    placedSVGs.forEach(svg => {
      const element = document.getElementById(svg.id);
      if (element) {
        element.style.display = svgLayersVisible ? 'block' : 'none';
      }
    });
    found = true;
  }
  
  // Show indicator if anything was found
  if (found) {
    showSVGToggleIndicator(svgLayersVisible);
  } else {
    console.log('No SVG elements found to toggle');
  }
}

// Visual indicator for SVG toggle
function showSVGToggleIndicator(visible) {
  let indicator = document.getElementById('svg-toggle-indicator');
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'svg-toggle-indicator';
    indicator.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px 40px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      font-size: 24px;
      font-weight: bold;
      border-radius: 10px;
      z-index: 100000;
      pointer-events: none;
    `;
    document.body.appendChild(indicator);
  }
  
  indicator.textContent = visible ? '🖼️ SVG LAYERS VISIBLE' : '🖼️ SVG LAYERS HIDDEN';
  indicator.style.display = 'block';
  
  setTimeout(() => {
    indicator.style.display = 'none';
  }, 1500);
}

// Function to print camera position details to console
function printCameraPosition() {
  if (!map) {
    console.error('❌ Map not initialized');
    return;
  }
  
  const center = map.getCenter();
  const zoom = map.getZoom();
  const pitch = map.getPitch();
  const bearing = map.getBearing();
  
  const cameraPosition = {
    center: [center.lng, center.lat],
    zoom: parseFloat(zoom.toFixed(2)),
    pitch: parseFloat(pitch.toFixed(2)),
    bearing: parseFloat(bearing.toFixed(2))
  };
  
  // Print formatted JSON for easy copy-paste
  console.log('📸 Current Camera Position:');
  console.log(JSON.stringify(cameraPosition, null, 2));
  
  // Also print as a code snippet for direct use
}

// Debug function to test all markers
function testAllMarkers() {
  console.log('🧪 Testing all markers:');
  
  // First, log all markers with their positions and IDs
  console.log('\n--- MARKER DATA ---');
  newMarkers.forEach(marker => {
    const id = marker.id;
    console.log(`Marker ID: ${id}, Position: [${marker.lng}, ${marker.lat}]`);
  });
  
  // Then, log all enhanced marker data to see titles
  console.log('\n--- ENHANCED MARKER DATA ---');
  Object.keys(ENHANCED_MARKER_DATA).forEach(id => {
    const data = ENHANCED_MARKER_DATA[id];
    console.log(`ID: ${id}, Title: "${data.title || 'Untitled'}"`);
  });
  
  // Log the current mapping in specificLocations
  console.log('\n--- CURRENT BUTTON MAPPING ---');
  const specificLocations = [
    { name: "Manufacturing Space for Scale-Stage Companies", id: "12" },
    { name: "Scaled Launch Facility", id: "19" },
    { name: "Railway", id: "25" },
    { name: "The Factory", id: "3" },
    { name: "America's First Electrified Public Road", id: "17" },
    { name: "Newlab", id: "2" },
    { name: "Smart Light Posts", id: "23" },
    { name: "Bagley Mobility Hub", id: "16" },
    // { name: "Edge Server Platform", id: "22" },
    { name: "Transportation Innovation Zone (TIZ)", id: "13" },
    { name: "Advanced Aerial Innovation Region (AAIR)", id: "14" },
    { name: "Port of Monroe", id: "15" },
    { name: "The 23rd (Newlab Manufacturing Space)", id: "newlab-manufacturing" },
    { name: "The Station", id: "1" }
  ];
  
  specificLocations.forEach(loc => {
    console.log(`Button: "${loc.name}" maps to ID: ${loc.id}`);
  });
  
  // Direct verification of each location
  console.log('\n--- DIRECT VERIFICATION OF EACH LOCATION ---');
  console.log('Checking "Manufacturing Space for Scale-Stage Companies" (ID: 12):');
  verifyLocation(12, "Manufacturing Space for Scale-Stage Companies");
  
  console.log('\nChecking "Scaled Launch Facility" (ID: 19):');
  verifyLocation(19, "Scaled Launch Facility");
  
  console.log('\nChecking "Railway" (ID: 25):');
  verifyLocation(25, "Railway");
  
  console.log('\nChecking "The Station" (ID: 1):');
  verifyLocation(1, "The Station");
  
  console.log('\nChecking "America\'s First Electrified Public Road" (ID: 17):');
  verifyLocation(17, "America's First Electrified Public Road");
  
  console.log('\nChecking "Newlab" (ID: 2):');
  verifyLocation(2, "Newlab");
  
  console.log('\nChecking "Smart Light Posts" (ID: 23):');
  verifyLocation(23, "Smart Light Posts");
  
  console.log('\nChecking "Bagley Mobility Hub" (ID: 16):');
  verifyLocation(16, "Bagley Mobility Hub");
  
  // Removed Edge Server Platform pin verification per request
  
  console.log('\nChecking "The Factory" (ID: 3):');
  verifyLocation(3, "The Factory");
}

// Helper function to verify a location by ID
function verifyLocation(id, expectedName) {
  // Check if marker exists
  const marker = newMarkers.find(m => m.id == id);
  if (!marker) {
    console.error(`❌ No marker found with ID ${id}`);
    return;
  }
  console.log(`✓ Found marker with ID ${id} at [${marker.lng}, ${marker.lat}]`);
  
  // Check enhanced data
  const enhancedData = ENHANCED_MARKER_DATA[id];
  if (!enhancedData) {
    console.log(`⚠️ No enhanced data for ID ${id}, will use generated data`);
    
    // Try to get generated data
    const generatedData = generateLabelData(id, expectedName);
    console.log(`Generated title: "${generatedData.title}"`);
    return;
  }
  
  // Log the actual title
  console.log(`✓ Enhanced data title: "${enhancedData.title || 'Untitled'}"`);
  
  // Check if title matches expected name
  if (enhancedData.title === expectedName) {
    console.log(`✓ Title matches expected name "${expectedName}"`);
  } else {
    console.log(`⚠️ Title "${enhancedData.title}" does not match expected name "${expectedName}"`);
  }
  
  // Check what happens when navigating to this location
  console.log(`When clicking this location, openSidePanel(${id}) will be called`);
}

// Print camera position as code snippet
function printCameraPositionCode() {
  if (!map) return;
  
  const center = map.getCenter();
  const zoom = map.getZoom();
  const pitch = map.getPitch();
  const bearing = map.getBearing();
  
  console.log(`
// Camera Position Settings
const CAMERA_POSITION = {
  center: [${center.lng.toFixed(6)}, ${center.lat.toFixed(6)}],
  zoom: ${zoom.toFixed(2)},
  pitch: ${pitch.toFixed(2)},
  bearing: ${bearing.toFixed(2)}
};
  `);
  
  console.log('Press P at any time to print the current camera position');
}

function hideAllLabels() {
  hiddenLayers = [];
  const style = map.getStyle();
  
  // Hide map labels (symbol layers with text)
  if (style && style.layers) {
    style.layers.forEach(layer => {
      if (layer.type === 'symbol' && layer.layout && layer.layout['text-field']) {
        try {
          map.setLayoutProperty(layer.id, 'visibility', 'none');
          hiddenLayers.push(layer.id);
        } catch (e) {
          console.warn('Could not hide layer:', layer.id, e);
        }
      }
    });
  }
  
  // Hide all marker elements (black rectangles with text)
  const markerElements = document.querySelectorAll('.mapboxgl-marker');
  markerElements.forEach(marker => {
    marker.style.display = 'none';
  });
  
  console.log(`🏷️ Hidden ${hiddenLayers.length} map label layers and ${markerElements.length} marker elements`);
}

function showAllLabels() {
  // Show map label layers
  hiddenLayers.forEach(layerId => {
    try {
      map.setLayoutProperty(layerId, 'visibility', 'visible');
    } catch (e) {
      console.warn('Could not show layer:', layerId, e);
    }
  });
  hiddenLayers = [];
  
  // Show all marker elements
  const markerElements = document.querySelectorAll('.mapboxgl-marker');
  markerElements.forEach(marker => {
    marker.style.display = 'block';
  });
  
  console.log(`🏷️ Restored visibility for map labels and ${markerElements.length} marker elements`);
}

// --- Zoom Controls ---
const zoomInBtn = document.getElementById('zoom-in');
if (zoomInBtn) {
  zoomInBtn.addEventListener('click', () => {
  const currentZoom = map.getZoom();
  const newZoom = Math.min(currentZoom + 1, 22); // Max zoom level is 22
  map.easeTo({
    zoom: newZoom,
    duration: 300
  });
  // Update navState to maintain consistency
  navState.targetZoom = newZoom;
  dbg("ZOOM_IN", {from: currentZoom, to: newZoom});
});
}

const zoomOutBtn = document.getElementById('zoom-out');
if (zoomOutBtn) {
  zoomOutBtn.addEventListener('click', () => {
  const currentZoom = map.getZoom();
  const newZoom = Math.max(currentZoom - 2, 0); // Zoom out 2x, min zoom level is 0
  
  // Stop orbit animation
  stopOrbitAnimation();
  
  map.easeTo({
    zoom: newZoom,
    duration: 500
  });
  // Update navState to maintain consistency
  navState.targetZoom = newZoom;
  dbg("ZOOM_OUT", {from: currentZoom, to: newZoom});
});
}

// Auto zoom out removed - starting with correct zoom level

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
  console.log('🎯 Navigating to marker:', key, 'orbitAnimation before:', orbitAnimation);

  // Clear any existing popups
  closeActivePopup();

  // Keep orbit animation running - no pausing
  // pauseOrbitAnimation();

  // Special handling for Roosevelt Park (ID 28)
  if (key == 28) {
    console.log('🏞️ Roosevelt Park (ID 28) clicked - special camera handling');
    
    // Check if we're already at home position
    const currentCenter = map.getCenter();
    const currentBearing = map.getBearing();
    const currentPitch = map.getPitch();
    const currentZoom = map.getZoom();
    
    const isAtHomePosition = (
      Math.abs(currentCenter.lng - HOME_POSITION.center[0]) < 0.0001 &&
      Math.abs(currentCenter.lat - HOME_POSITION.center[1]) < 0.0001 &&
      Math.abs(currentBearing - HOME_POSITION.bearing) < 5 &&
      Math.abs(currentPitch - HOME_POSITION.pitch) < 5 &&
      Math.abs(currentZoom - HOME_POSITION.zoom) < 0.5
    );
    
    if (isAtHomePosition) {
      // If already at home position, zoom in by 0.5
      console.log('🔍 Already at home position, zooming in by 0.5');
      map.easeTo({
        zoom: currentZoom + 0.5,
        duration: 1000
      });
    } else {
      // Otherwise, go to home position with 50m offset to the right and 5m lower to the ground
      console.log('🏠 Moving to home position with offset');
      
      // Calculate 50m offset to the right (approx. 0.00045 degrees longitude)
      const offsetLng = HOME_POSITION.center[0] + 0.00045;
      
      // Adjust pitch to be 5m closer to ground (approx. 5 degrees less pitch)
      const lowerPitch = Math.max(HOME_POSITION.pitch - 5, 0);
      
      map.flyTo({
        center: [offsetLng, HOME_POSITION.center[1]],
        zoom: HOME_POSITION.zoom,
        pitch: lowerPitch,
        bearing: HOME_POSITION.bearing,
        duration: 1500
      });
    }
    
    // Open the side panel
    openSidePanel(key);
    return;
  }

  // Standard handling for other markers
  const markerData = newMarkers.find(m => m.id == key);
  console.log('🔍 Marker lookup for key:', key, 'found:', !!markerData, 'data:', markerData);
  
  // Additional debug info to verify marker IDs
  console.log('📍 All markers with ID ' + key + ':', newMarkers.filter(m => m.id == key));
  
  if (markerData && map) {
    // Calculate final position with 50m offset to the left (0.00045 degrees)
    const offsetLng = markerData.lng - 0.00045; // ~50m to the left
    const finalCenter = [offsetLng, markerData.lat];
    
    // Update orbit center to match the final camera position (no jump)
    updateOrbitCenter(offsetLng, markerData.lat);
    
    // Get current zoom level and increase it by 1.1x (with min and max limits)
    const currentZoom = map.getZoom();
    const targetZoom = Math.min(Math.max(currentZoom * 1.05, 17), 20); // Zoom in by 1.1x, but between 17 and 20
    
    console.log('🔍 Zooming from', currentZoom, 'to', targetZoom);
    
    // Move camera directly to the final offset position with zoom transition
    map.easeTo({
      center: finalCenter,
      zoom: targetZoom, // Zoom in by 1.1x
      pitch: 75, // Maintain the cinematic angle
      duration: 1500 // Smooth 1.5-second transition
    });
    
    // Orbit continues running - no need to resume
    console.log('🎯 Camera moving to marker:', key, 'orbit continues running');
  }

  // Open the main side panel with full details
  openSidePanel(key);
}

// Global variable to keep track of the currently active on-marker popup
let activeMarkerPopup = null;

// Auto-close timer for side panel
// Auto-close timers
let sidePanelAutoCloseTimer = null;
let fullscreenViewerAutoCloseTimer = null;

// Function to start auto-close timer for side panel
function startSidePanelAutoClose() {
  // Clear any existing timer
  if (sidePanelAutoCloseTimer) {
    clearTimeout(sidePanelAutoCloseTimer);
  }
  
  // Set new timer for 10 seconds
  sidePanelAutoCloseTimer = setTimeout(() => {
    console.log('⏰ Auto-closing side panel after 10 seconds of inactivity');
    
    // Return camera to home position
    if (map) {
      // Reset orbit center to home position
      updateOrbitCenter(HOME_POSITION.center[0], HOME_POSITION.center[1]);
      
      map.easeTo({
        center: HOME_POSITION.center,
        zoom: HOME_POSITION.zoom,
        pitch: HOME_POSITION.pitch,
        bearing: HOME_POSITION.bearing,
        duration: 2500 // Smooth 2.5-second transition back home
      });
      
      // Orbit continues running - no need to resume
      console.log('🏠 Returning to home position, orbit continues running');
    }
    
    closeSidePanel();
  }, 10000); // 10 seconds
}

// Function to reset auto-close timer (call on any interaction)
function resetSidePanelAutoClose() {
  if (sidePanelAutoCloseTimer) {
    clearTimeout(sidePanelAutoCloseTimer);
    startSidePanelAutoClose(); // Restart the timer
  }
}

// Function to start auto-close timer for fullscreen viewer (uses same timeout as side panel)
function startFullscreenViewerAutoClose() {
  // Clear any existing timer
  if (fullscreenViewerAutoCloseTimer) {
    clearTimeout(fullscreenViewerAutoCloseTimer);
  }
  
  // Set new timer for 10 seconds (same as side panel)
  fullscreenViewerAutoCloseTimer = setTimeout(() => {
    console.log('⏰ Auto-closing fullscreen viewer after 10 seconds of inactivity');
    
    // Close the fullscreen viewer
    closeFullscreenViewer();
  }, 10000); // 10 seconds - same as side panel timer
}

// Function to reset fullscreen viewer auto-close timer (call on any interaction)
function resetFullscreenViewerAutoClose() {
  if (fullscreenViewerAutoCloseTimer) {
    clearTimeout(fullscreenViewerAutoCloseTimer);
    startFullscreenViewerAutoClose(); // Restart the timer
  }
}

// Function to close any active popup
function closeActivePopup() {
  if (activeMarkerPopup) {
    activeMarkerPopup.classList.remove('show');
    setTimeout(() => {
      if (activeMarkerPopup && activeMarkerPopup.parentNode) {
        activeMarkerPopup.parentNode.removeChild(activeMarkerPopup);
      }
      activeMarkerPopup = null;
    }, 300); // Wait for the animation to finish
  }
}

// showMarkerPopup function removed - now going directly to side panel

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
    const locationId = e.target.dataset.location;
    
    if (locationId && LOCATIONS[locationId]) {
      // If it's a location button with data-location attribute
      console.log(`🔘 Legend location clicked: ${locationId}`);
      
      if (locationId === 'rooseveltPark') {
        // For Roosevelt Park, only open the side panel without moving the camera
        console.log('🏞️ Roosevelt Park clicked - opening panel without camera movement');
        openSidePanel(locationId);
      } else {
        // For other locations, fly to the location
        const location = LOCATIONS[locationId];
        
        // Special handling for Michigan Central with offset
        if (locationId === 'michiganCentral') {
          // Calculate 50m offset to the right (approx. 0.00045 degrees longitude)
          const offsetLng = location.lng + 0.00045;
          
          // Lower pitch by 5 degrees to be closer to ground
          const lowerPitch = 55; // 60 - 5
          
          // Fly to Michigan Central with offset
          map.flyTo({
            center: [offsetLng, location.lat],
            zoom: 18,
            pitch: lowerPitch,
            bearing: 150,
            duration: 1500
          });
        } else {
          // Standard handling for other locations
          map.flyTo({
            center: [location.lng, location.lat],
            zoom: 18,
            pitch: 60,
            bearing: 150,
            duration: 1500
          });
        }
        
        // Open side panel with the location data
        openSidePanel(locationId);
      }
    } 
    else if (key) {
      // Handle regular marker navigation
      navigateToLocation(key);  // Use new controller
    }
    // Don't auto-close legend - only toggle with lupe
  }
});

// resume orbit on map click (outside popup) - drag is now disabled
let isDragging = false;

// Set up Roosevelt Park special handling
document.addEventListener('DOMContentLoaded', () => {
  // Set up click handler specifically for Roosevelt Park
  const rooseveltParkButton = document.querySelector('.legend-item[data-location="rooseveltPark"]');
  if (rooseveltParkButton) {
    // Remove any existing event listeners (just to be safe)
    rooseveltParkButton.replaceWith(rooseveltParkButton.cloneNode(true));
    
    // Get the fresh reference after replacement
    const freshRooseveltParkButton = document.querySelector('.legend-item[data-location="rooseveltPark"]');
    
    // Make Roosevelt Park unclickable by preventing all click actions
    freshRooseveltParkButton.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent event bubbling
      e.preventDefault(); // Prevent default action
      console.log('🏞️ Roosevelt Park click prevented - button is now unclickable');
      // No action performed - the button is now unclickable
    });
    
    // Apply the styling directly to make it look unclickable but still visible
    freshRooseveltParkButton.style.backgroundColor = '#2E8B57'; // Green background
    freshRooseveltParkButton.style.color = 'white'; // White text
    freshRooseveltParkButton.style.fontWeight = '600'; // Slightly bolder
    freshRooseveltParkButton.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'; // Subtle shadow
    freshRooseveltParkButton.style.opacity = '0.85'; // Slightly dimmed to indicate it's not clickable
    freshRooseveltParkButton.style.cursor = 'default'; // Default cursor instead of pointer
    
    // Remove hover effects since it's not clickable
    // Add a tooltip to explain why it's not clickable
    freshRooseveltParkButton.title = "Roosevelt Park - Information label only";
    
    console.log('✅ Roosevelt Park button styling and click handler set up successfully');
  } else {
    console.error('❌ Roosevelt Park button not found in the DOM');
  }
});

// Drag handlers removed as dragging is disabled
// map.on('dragstart', () => {
//   isDragging = true;
// });
// 
// map.on('dragend', () => {
//   setTimeout(() => {
//     isDragging = false;
//   }, 100); // Small delay to prevent click after drag
// });

map.on('click', (e) => {
  // Since dragging is disabled, we don't need to check isDragging
  if (!e.originalEvent.defaultPrevented) {
    dbg("MAP_CLICK", {action: "open_info_panel"});
    // Open the info panel instead of navigating home
    openSidePanel('info');
  }
});

// Add moveend logging (disabled to reduce console noise)
// map.on('moveend', () => {
//   const state = {
//     center: [map.getCenter().lng, map.getCenter().lat],
//     orbitCenter: orbitCenter,
//     targetOrbitCenter: targetOrbitCenter,
//     isEasing: map.isEasing && map.isEasing(),
//     zoom: map.getZoom(),
//     pitch: map.getPitch(),
//     bearing: map.getBearing()
//   };
//   dbg("MOVEEND", state);
// });

// Current selected location for detail view
let currentDetailLocation = null;

// Detail content data
const DETAIL_DATA = {
  home: {
    title: 'Detroit Overview',
    image: 'public/mc.jpg',
  },
  info: {
    title: 'Michigan Central',
    image: 'public/mc.jpg',
    description: 'Explore the Michigan Central map and facilities.'
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
const infoElement = document.getElementById('info');
if (infoElement) {
  infoElement.addEventListener('click', () => {
  currentDetailLocation = getSelectedLocation();
  if (currentDetailLocation) {
    showDetailPanel(currentDetailLocation);
  }
});
}

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

// Label data with information for each marker
const labelData = {
    1: {
        category: "TRANSPORTATION HUB",
        title: "Bagley Mobility Hub",
        description: "Public EV charging; e-bike & e-scooter station; home to the Michigan Central Info Center.",
        features: [
            { icon: "🔌", text: "Electric Vehicle Charging Stations" },
            { icon: "🚴", text: "E-bike & E-scooter Rental" },
            { icon: "ℹ️", text: "Information Center" },
            { icon: "🚗", text: "Public Transportation Access" },
            { icon: "🌱", text: "Sustainable Design" }
        ],
        size: "15,000 sq ft",
        image: "public/about/slideshow1.jpg"
    },
    2: {
        category: "MAIN BUILDINGS & WORKSPACES",
        title: "Innovation Laboratory",
        description: "State-of-the-art research and development facility for automotive and mobility innovations.",
        features: [
            { icon: "🔬", text: "Advanced Research Labs" },
            { icon: "🤖", text: "AI & Machine Learning" },
            { icon: "⚡", text: "Clean Energy Testing" },
            { icon: "🏭", text: "Prototype Manufacturing" }
        ],
        size: "25,000 sq ft",
        image: "public/about/slideshow2.jpg"
    },
    3: {
        category: "TESTING & INNOVATION ZONES",
        title: "Autonomous Vehicle Testing Center",
        description: "Comprehensive testing facility for autonomous vehicles and smart transportation systems.",
        features: [
            { icon: "🚗", text: "Autonomous Vehicle Testing" },
            { icon: "📡", text: "5G Connectivity" },
            { icon: "🛣️", text: "Smart Road Infrastructure" },
            { icon: "📊", text: "Real-time Data Analytics" }
        ],
        size: "40,000 sq ft",
        image: "public/about/slideshow3.jpg"
    }
};

// ENHANCED_MARKER_DATA removed from here - moved to proper location after newMarkers

// getEnhancedMarkerData function - combines enhanced data with fallback generation
function getEnhancedMarkerData(labelId, displayText) {
    // First try to get data from ENHANCED_MARKER_DATA
    if (ENHANCED_MARKER_DATA[labelId]) {
        return ENHANCED_MARKER_DATA[labelId];
    }
    
    // Fall back to generateLabelData if no enhanced data exists
    return generateLabelData(labelId, displayText);
}

// Generate sample data for labels that don't have specific data
function generateLabelData(id, displayText) {
    const categories = [
        "MAIN BUILDINGS & WORKSPACES",
        "MAKING & BUILDING SPACES", 
        "TESTING & INNOVATION ZONES",
        "DRONE & AERIAL TECHNOLOGY",
        "DATA & TECHNOLOGY INFRASTRUCTURE",
        "STRATEGIC LOCATION ADVANTAGES"
    ];
    
    const titles = [
        "Innovation Hub", "Research Center", "Manufacturing Space", "Testing Facility",
        "Technology Lab", "Development Center", "Engineering Workshop", "Design Studio"
    ];
    
    const features = [
        [
            { icon: "🔬", text: "Advanced Research Labs" },
            { icon: "🤖", text: "AI & Machine Learning" },
            { icon: "⚡", text: "Clean Energy Testing" }
        ],
        [
            { icon: "🏭", text: "Manufacturing Equipment" },
            { icon: "🔧", text: "3D Printing Facilities" },
            { icon: "🛠️", text: "Assembly Lines" }
        ],
        [
            { icon: "📡", text: "5G Connectivity" },
            { icon: "🛣️", text: "Smart Infrastructure" },
            { icon: "📊", text: "Data Analytics" }
        ]
    ];
    
    // Generate new data (removed reference to undefined labelData)
    
    const categoryIndex = (id - 1) % categories.length;
    const titleIndex = (id - 1) % titles.length;
    const featureIndex = (id - 1) % features.length;
    
    return {
        category: categories[categoryIndex],
        title: `${titles[titleIndex]} ${displayText}`,
        description: `Advanced facility for innovation and development. This location provides cutting-edge technology and resources for research, testing, and manufacturing.`,
        features: features[featureIndex],
        size: `${15000 + (id * 1000)} sq ft`,
        image: `public/about/slideshow${((id - 1) % 3) + 1}.jpg`
    };
}

// Side Panel Functions
function setupSidePanel() {
    // Set up the X button at the top right
    const closeBtn = document.getElementById('close-panel');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeSidePanel();
            returnToHomePosition();
        });
    }
    
    // CLOSE PANEL button removed as requested
    // const closePanelBtn = document.getElementById('close-panel-button');
    // if (closePanelBtn) {
    //     closePanelBtn.addEventListener('click', () => {
    //         closeSidePanel();
    //         returnToHomePosition();
    //     });
    // }
    
    // Add event listeners to reset auto-close timer on interaction
    const panel = document.getElementById('label-info-panel');
    if (panel) {
        // Reset timer on any interaction with the panel
        panel.addEventListener('click', resetSidePanelAutoClose);
        panel.addEventListener('scroll', resetSidePanelAutoClose);
        panel.addEventListener('mousemove', resetSidePanelAutoClose);
        panel.addEventListener('touchstart', resetSidePanelAutoClose);
    }
}

// Function to return to home position
function returnToHomePosition() {
    console.log('🏠 Returning to home position');
    
    // Close the side panel if it's open
    closeSidePanel();
    
    // Fly to the home position
    map.flyTo({
        center: HOME_POSITION.center,
        zoom: HOME_POSITION.zoom,
        pitch: HOME_POSITION.pitch,
        bearing: HOME_POSITION.bearing,
        duration: 2000, // Animation duration in milliseconds
        essential: true
    });
}

// Function to handle clicks on sub-facilities in the consolidated Newlab card
async function openSubFacilityPanel(facilityId, facilityTitle) {
    const panel = document.getElementById('label-info-panel');
    
    // Clean white theme styling to match Figma
    panel.style.background = 'white';
    panel.style.color = 'black';
    
    // Home button is now always visible, no need to show it here
    
    // Find the sub-facility data from the Newlab enhanced data
    const newlabData = ENHANCED_MARKER_DATA[2];
    let subFacilityData = null;
    
    if (newlabData && newlabData.subFacilities) {
        subFacilityData = newlabData.subFacilities.find(facility => facility.id === facilityId);
    }
    
    if (!subFacilityData) {
        console.error(`Sub-facility data not found for ID: ${facilityId}`);
        return;
    }
    
    // Update panel content with sub-facility data (without category)
    document.getElementById('location-title').textContent = subFacilityData.title;
    document.getElementById('location-description').textContent = subFacilityData.description || 'No description available';
    
    // Update features with bullet points (if any)
    const featuresContainer = document.getElementById('location-features');
    featuresContainer.innerHTML = '';
    
    // Get the Key Features section title
    const keyFeaturesTitle = document.querySelector('.panel-section h2.section-title');
    const keyFeaturesSection = keyFeaturesTitle ? keyFeaturesTitle.parentElement : null;
    
    // Check if we have bullet points to display
    let hasBulletPoints = false;
    let allBulletPoints = [];
    
    if (subFacilityData.description) {
        // Create bullet points from semicolon-separated text in description
        const textParts = subFacilityData.description.split(';').map(part => part.trim()).filter(part => part);
        
        if (textParts.length > 1) {
            // First part is the main description, rest are features
            document.getElementById('location-description').textContent = textParts[0];
            
            // Add the rest to bullet points
            allBulletPoints = textParts.slice(1);
            hasBulletPoints = allBulletPoints.length > 0;
        }
    }
    
    if (hasBulletPoints) {
        // Show the Key Features section if it was hidden
        if (keyFeaturesSection) {
            keyFeaturesSection.style.display = 'block';
        }
        
        // Create a single container for all bullet points
        const bulletContainer = document.createElement('div');
        bulletContainer.className = 'bullet-container';
        
        // Create bullet points for the rest
        allBulletPoints.forEach(part => {
            const featureDiv = document.createElement('div');
            featureDiv.className = 'feature-item';
            
            featureDiv.innerHTML = `
                <span class="feature-text">${part}</span>
            `;
            
            bulletContainer.appendChild(featureDiv);
        });
        
        featuresContainer.appendChild(bulletContainer);
    } else {
        // Hide the Key Features section when there are no features
        if (keyFeaturesSection) {
            keyFeaturesSection.style.display = 'none';
        }
    }
    
    // Load image from Supabase based on sub-facility title
    const resolvedImage = getMarkerImageByTitle(subFacilityData.title);
    const imgElement = document.getElementById('location-photo');
    const placeholder = document.querySelector('.image-placeholder');
    
    if (resolvedImage) {
        imgElement.src = resolvedImage;
        imgElement.style.display = 'block';
        placeholder.style.display = 'none';
        imgElement.onerror = () => {
            imgElement.style.display = 'none';
            placeholder.style.display = 'flex';
            placeholder.textContent = '📷 Image not available';
        };
    } else {
        imgElement.style.display = 'none';
        placeholder.style.display = 'flex';
        placeholder.textContent = '📷 No photo available';
    }
    
    // Show panel with correct class
    panel.classList.add('panel-open');
    
    // Start auto-close timer
    startSidePanelAutoClose();
}

async function openSidePanel(labelId, displayText) {
    const panel = document.getElementById('label-info-panel');
    
    // Update INFO button text to CLOSE INFO when panel is open
    const infoButton = document.getElementById('info-button');
    if (infoButton) {
        infoButton.textContent = 'CLOSE INFO';
    }
    
    // Clean white theme styling to match Figma
    panel.style.background = 'white';
    panel.style.color = 'black';
    
    // Home button is now always visible, no need to show it here
    
    // Only use data from Supabase - no fallback
    console.log(`📋 Opening side panel for: ${labelId}`);
    
    // Try to get data from Supabase
    let data = await getMarkerDataFromSupabase(labelId);
    
    // If we couldn't find data in Supabase but we have it in ENHANCED_MARKER_DATA, use that temporarily
    if (!data && ENHANCED_MARKER_DATA[labelId]) {
        console.log(`⚠️ No Supabase data found for ${labelId}, using hardcoded data temporarily`);
        data = ENHANCED_MARKER_DATA[labelId];
    } else if (!data) {
        console.log(`⚠️ No data found for marker ID: ${labelId} in Supabase or hardcoded data`);
        // Create minimal default data
        data = {
            title: displayText || `Location ${labelId}`,
            description: "No information available for this location.",
            features: []
        };
    } else {
        console.log(`✅ Found data in Supabase for ${labelId}:`, data);
    }
    
    // Update panel content with enhanced data (without category)
    document.getElementById('location-title').textContent = data.title || data.name || 'Unknown Facility';
    document.getElementById('location-description').textContent = data.description || 'No description available';

    // Prefer image from Supabase row matching title/label when available
    const resolvedImage = getMarkerImageByTitle(data.title || data.name);
    if (resolvedImage) {
        data.image = resolvedImage;
    }
    
    // Clean styling to match Figma design - no additional styling needed
    // CSS handles all the styling now
    
    // Update features with bullet points
    const featuresContainer = document.getElementById('location-features');
    featuresContainer.innerHTML = '';
    
    // Create a container for all bullet points
    const allBulletPoints = [];
    
    if (data.features && Array.isArray(data.features)) {
        // Process each feature
        data.features.forEach((feature, index) => {
            // Get the feature text
            const featureText = typeof feature === 'string' ? feature : (feature.text || feature);
            
            // Split by semicolons
            const textParts = featureText.split(';').map(part => part.trim()).filter(part => part);
            
            // Add each part to our collection
            allBulletPoints.push(...textParts);
        });
    }
    
    // Process description for additional bullet points if it contains semicolons
    if (data.description && data.description.includes(';')) {
        const descriptionParts = data.description.split(';').map(part => part.trim()).filter(part => part);
        
        // Keep the first part as the main description
        if (descriptionParts.length > 1) {
            document.getElementById('location-description').textContent = descriptionParts[0];
            
            // Add the rest to bullet points
            allBulletPoints.push(...descriptionParts.slice(1));
        }
    }
    
    // Get the Key Features section title
    const keyFeaturesTitle = document.querySelector('.panel-section h2.section-title');
    const keyFeaturesSection = keyFeaturesTitle ? keyFeaturesTitle.parentElement : null;
    
    // Create bullet points for all collected items
    if (allBulletPoints.length > 0) {
        // Show the Key Features section if it was hidden
        if (keyFeaturesSection) {
            keyFeaturesSection.style.display = 'block';
        }
        
        // Create a single container for all bullet points
        const bulletContainer = document.createElement('div');
        bulletContainer.className = 'bullet-container';
        
        // Add each bullet point
        allBulletPoints.forEach(part => {
            const featureDiv = document.createElement('div');
            featureDiv.className = 'feature-item';
            
            // Simple bullet-pointed feature
            featureDiv.innerHTML = `
                <span class="feature-text">${part}</span>
            `;
            
            bulletContainer.appendChild(featureDiv);
        });
        
        featuresContainer.appendChild(bulletContainer);
    } else {
        // Hide the Key Features section when there are no features
        if (keyFeaturesSection) {
            keyFeaturesSection.style.display = 'none';
        }
    }
    
    // Update image
    const imgElement = document.getElementById('location-photo');
    const placeholder = document.querySelector('.image-placeholder');
    if (data.image) {
        imgElement.src = data.image;
        imgElement.style.display = 'block';
        placeholder.style.display = 'none';
        imgElement.onerror = () => {
            imgElement.style.display = 'none';
            placeholder.style.display = 'flex';
            placeholder.textContent = '📷 Image not available';
        };
    } else {
        imgElement.style.display = 'none';
        placeholder.style.display = 'flex';
        placeholder.textContent = '📷 No photo available';
    }
    
    // Populate marker navigation
    populateMarkerNavigation(labelId);
    
    // Show panel with correct class
    panel.classList.add('panel-open');
    
    // Start auto-close timer
    startSidePanelAutoClose();
}

// Function to populate marker navigation grid with all locations
function populateMarkerNavigation(currentMarkerId) {
    const navigationGrid = document.getElementById('marker-navigation');
    if (!navigationGrid) return;
    
    // Clear existing navigation items
    navigationGrid.innerHTML = '';
    
    // List of locations to show in all panels - corrected mapping based on user's confirmation
    // These are the final correct IDs provided by the user
    const specificLocations = [
        { name: "Manufacturing Space for Scale-Stage Companies", id: "12" },
        { name: "Scaled Launch Facility", id: "19" },
        { name: "Railway", id: "25" },
        { name: "The Factory", id: "3" },
        { name: "America's First Electrified Public Road", id: "17" },
        { name: "Newlab", id: "2" },
        { name: "Smart Light Posts", id: "23" },
        { name: "Bagley Mobility Hub", id: "16" },
        { name: "Edge Server Platform", id: "22" },
        { name: "Transportation Innovation Zone (TIZ)", id: "13" },
        { name: "Advanced Aerial Innovation Region (AAIR)", id: "14" },
        { name: "Port of Monroe", id: "15" },
        { name: "The 23rd (Newlab Manufacturing Space)", id: "newlab-manufacturing" },
        { name: "The Station", id: "1" }
    ];
    
    // Create rows with 3 items per row
    const itemsPerRow = 3;
    for (let i = 0; i < specificLocations.length; i += itemsPerRow) {
        const row = document.createElement('div');
        row.className = 'marker-nav-row';
        
        // Add items to this row
        for (let j = i; j < i + itemsPerRow && j < specificLocations.length; j++) {
            const location = specificLocations[j];
        const navItem = document.createElement('div');
        
        // Add active class if this is the current location
        const isActive = currentMarkerId == location.id;
            navItem.className = isActive ? 'marker-nav-item active' : 'marker-nav-item';
        
        // Create navigation item content
        navItem.innerHTML = `
            <div class="marker-nav-label">${location.name}</div>
        `;
        
        // Add click handler
        navItem.addEventListener('click', () => {
                console.log(`Navigating to ${location.name} with ID: ${location.id}`);
            navigateToLocation(location.id);
        });
        
            row.appendChild(navItem);
        }
        
        navigationGrid.appendChild(row);
    }
}

// Helper function to determine if a marker belongs to a main location
function isMarkerInLocation(markerId, locationId) {
    // Map marker IDs to main locations
    const locationMapping = {
        'home': ['1', '3'], // The Station markers
        'newlab': ['2', '11', '12', '16', '17', '18', '19', '20', '22', '23'], // Newlab markers (2 is the consolidated card)
        'michiganCentral': ['24', '25', '26', '27', '28'] // Michigan Central markers
    };
    
    return locationMapping[locationId] && locationMapping[locationId].includes(markerId.toString());
}

function closeSidePanel() {
    const panel = document.getElementById('label-info-panel');
    panel.classList.remove('panel-open');
    
    // Reset INFO button text when panel is closed
    const infoButton = document.getElementById('info-button');
    if (infoButton) {
        infoButton.textContent = 'INFO';
    }
    
    // Home button is now always visible, no need to hide it here
    
    // Clear auto-close timer
    if (sidePanelAutoCloseTimer) {
        clearTimeout(sidePanelAutoCloseTimer);
        sidePanelAutoCloseTimer = null;
    }
    
    // Orbit continues running while panel is open, no need to resume here
}

// ADMIN PANEL FUNCTIONALITY
function initializeAdminPanel() {
    // Admin panel toggle button
    const adminToggle = document.getElementById('admin-panel-toggle');
    if (adminToggle) {
        adminToggle.addEventListener('click', toggleAdminPanel);
    }
    
    // Close admin panel button
    const closeAdminBtn = document.getElementById('close-admin-panel-btn');
    if (closeAdminBtn) {
        closeAdminBtn.addEventListener('click', closeAdminPanel);
    }
    
    // Populate marker dropdown
    populateMarkerDropdown();
    
    // Marker selection change
    const markerSelect = document.getElementById('admin-marker-select');
    if (markerSelect) {
        markerSelect.addEventListener('change', onMarkerSelection);
    }
    
    // Save marker button
    const saveBtn = document.getElementById('admin-save-marker');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveMarkerData);
    }
    
    // Add new marker button
    const addNewBtn = document.getElementById('admin-add-new-marker');
    if (addNewBtn) {
        addNewBtn.addEventListener('click', startNewMarker);
    }
    
    // Delete marker button
    const deleteBtn = document.getElementById('admin-delete-marker');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', deleteMarker);
    }
    
    // Reset marker button
    const resetBtn = document.getElementById('admin-reset-marker');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetMarkerForm);
    }
    
    // Export data button
    const exportBtn = document.getElementById('admin-export-data');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportMarkerData);
    }
    
    console.log('✅ Admin panel initialized');
}

function toggleAdminPanel() {
    const panel = document.getElementById('admin-panel');
    if (panel.classList.contains('editor-hidden')) {
        openAdminPanel();
    } else {
        closeAdminPanel();
    }
}

function openAdminPanel() {
    console.log('🛠️ Opening admin panel');
    const panel = document.getElementById('admin-panel');
    
    // Close other panels first
    closeAllPanels();
    
    panel.classList.remove('editor-hidden');
    populateMarkerDropdown();
}

function closeAdminPanel() {
    console.log('🚪 Closing admin panel');
    const panel = document.getElementById('admin-panel');
    panel.classList.add('editor-hidden');
}

function closeAllPanels() {
    // Close SVG editor
    const svgPanel = document.getElementById('svg-editor');
    if (svgPanel) svgPanel.classList.add('editor-hidden');
    
    // Close building settings
    const buildingPanel = document.getElementById('building-settings');
    if (buildingPanel) buildingPanel.classList.add('editor-hidden');
    
    // Close side panel
    const sidePanel = document.getElementById('label-info-panel');
    if (sidePanel) sidePanel.classList.remove('panel-open');
}

async function populateMarkerDropdown() {
    const select = document.getElementById('admin-marker-select');
    if (!select) return;
    
    // Clear existing options except the first one
    select.innerHTML = '<option value="">Select a marker...</option>';
    
    // Add hardcoded markers
    newMarkers.forEach(marker => {
        const option = document.createElement('option');
        option.value = marker.id;
        const data = getEnhancedMarkerData(marker.id, marker.text);
        option.textContent = `${marker.id} - ${data.title} (Hardcoded)`;
        select.appendChild(option);
    });
    
    // Add Supabase markers
    try {
        const supabaseMarkers = await fetchMarkersFromSupabase();
        supabaseMarkers.forEach(marker => {
            const option = document.createElement('option');
            option.value = marker.id;
            option.textContent = `${marker.id} - ${marker.name || 'Untitled'} (Supabase)`;
            option.dataset.source = 'supabase';
            select.appendChild(option);
        });
    } catch (error) {
        console.error('❌ Error loading Supabase markers for dropdown:', error);
    }
}

async function onMarkerSelection() {
    const select = document.getElementById('admin-marker-select');
    const editSection = document.getElementById('admin-edit-section');
    const deleteBtn = document.getElementById('admin-delete-marker');
    
    if (select.value) {
        const markerId = select.value;
        const isSupabase = select.selectedOptions[0]?.dataset.source === 'supabase';
        
        await loadMarkerIntoForm(markerId, isSupabase);
        editSection.style.display = 'block';
        
        // Show delete button for Supabase markers only
        if (isSupabase) {
            deleteBtn.style.display = 'inline-block';
        } else {
            deleteBtn.style.display = 'none';
        }
    } else {
        editSection.style.display = 'none';
        deleteBtn.style.display = 'none';
    }
}

async function loadMarkerIntoForm(markerId, isSupabase = false) {
    if (isSupabase) {
        // Load Supabase marker data
        try {
            const supabaseMarkers = await fetchMarkersFromSupabase();
            const marker = supabaseMarkers.find(m => m.id == markerId);
            
            if (marker) {
                document.getElementById('admin-marker-name').value = marker.name || '';
                document.getElementById('admin-marker-lat').value = marker.lat || '';
                document.getElementById('admin-marker-lng').value = marker.lng || '';
                document.getElementById('admin-marker-color').value = marker.color || '#4A90E2';
                document.getElementById('admin-marker-category').value = marker.category || 'innovation';
                document.getElementById('admin-marker-short-desc').value = marker.short_description || '';
                document.getElementById('admin-marker-description').value = marker.description || '';
                document.getElementById('admin-marker-size').value = marker.size || '';
                document.getElementById('admin-marker-address').value = marker.address || '';
                document.getElementById('admin-marker-image').value = marker.image || '';
                
                // Handle features array
                if (marker.features && Array.isArray(marker.features)) {
                    document.getElementById('admin-marker-features').value = marker.features.join('\n');
                } else {
                    document.getElementById('admin-marker-features').value = '';
                }
            }
        } catch (error) {
            console.error('❌ Error loading Supabase marker:', error);
            showAdminStatus('Error loading marker data', 'error');
        }
    } else {
        // Load hardcoded marker data
    const data = getEnhancedMarkerData(markerId);
        const hardcodedMarker = newMarkers.find(m => m.id == markerId);
    
    document.getElementById('admin-marker-name').value = data.title || '';
        document.getElementById('admin-marker-lat').value = hardcodedMarker?.lat || '';
        document.getElementById('admin-marker-lng').value = hardcodedMarker?.lng || '';
        document.getElementById('admin-marker-color').value = hardcodedMarker?.color || '#4A90E2';
    document.getElementById('admin-marker-category').value = getCategoryKey(data.category) || 'innovation';
    document.getElementById('admin-marker-short-desc').value = data.shortDescription || '';
    document.getElementById('admin-marker-description').value = data.description || '';
    document.getElementById('admin-marker-size').value = data.size || '';
    document.getElementById('admin-marker-address').value = data.address || '';
    document.getElementById('admin-marker-image').value = data.image || '';
    
    // Handle features
    if (data.features && Array.isArray(data.features)) {
        const featuresText = data.features.map(feature => {
            if (typeof feature === 'string') return feature;
            return feature.text || feature;
        }).join('\n');
        document.getElementById('admin-marker-features').value = featuresText;
        } else {
            document.getElementById('admin-marker-features').value = '';
        }
    }
}

function getCategoryKey(categoryDisplay) {
    if (!categoryDisplay) return 'innovation';
    
    const lower = categoryDisplay.toLowerCase();
    if (lower.includes('transport')) return 'transportation';
    if (lower.includes('manufactur')) return 'manufacturing';
    if (lower.includes('innovation') || lower.includes('technology')) return 'innovation';
    if (lower.includes('infrastructure')) return 'infrastructure';
    if (lower.includes('future')) return 'future';
    
    return 'innovation';
}

async function saveMarkerData() {
    const markerId = document.getElementById('admin-marker-select').value;
    const isNewMarker = markerId === 'new';
    
    // Show loading status
    showAdminStatus('Saving...', 'loading');
    
    try {
    // Collect form data
    const formData = {
            name: document.getElementById('admin-marker-name').value,
            lat: parseFloat(document.getElementById('admin-marker-lat').value),
            lng: parseFloat(document.getElementById('admin-marker-lng').value),
            color: document.getElementById('admin-marker-color').value,
        category: document.getElementById('admin-marker-category').value,
            short_description: document.getElementById('admin-marker-short-desc').value,
        description: document.getElementById('admin-marker-description').value,
        size: document.getElementById('admin-marker-size').value,
        address: document.getElementById('admin-marker-address').value,
        image: document.getElementById('admin-marker-image').value,
        features: document.getElementById('admin-marker-features').value.split('\n').filter(f => f.trim())
    };
    
        // Validate required fields
        if (!formData.name || !formData.lat || !formData.lng) {
            throw new Error('Name, Latitude, and Longitude are required fields');
        }
        
        let result;
        if (isNewMarker) {
            // Create new marker
            result = await createNewMarkerInSupabase(formData);
        } else {
            // Update existing marker
            formData.id = parseInt(markerId);
            result = await saveMarkerToSupabase(formData);
        }
        
        if (result.success) {
            showAdminStatus('✅ Saved successfully!', 'success');
            
            // Refresh the map markers
            await refreshMapMarkers();
            
            // If it was a new marker, update the dropdown and select it
            if (isNewMarker && result.data && result.data[0]) {
                const newMarkerId = result.data[0].id;
                await populateMarkerDropdown();
                document.getElementById('admin-marker-select').value = newMarkerId;
                document.getElementById('admin-delete-marker').style.display = 'inline-block';
            }
            
        } else {
            throw new Error(result.error);
        }
        
    } catch (error) {
        console.error('❌ Error saving marker:', error);
        showAdminStatus(`❌ Error: ${error.message}`, 'error');
    }
}

function resetMarkerForm() {
    const markerId = document.getElementById('admin-marker-select').value;
    if (markerId && markerId !== 'new') {
        loadMarkerIntoForm(parseInt(markerId));
    } else {
        clearMarkerForm();
    }
}

// --- Admin Status Functions ---
function showAdminStatus(message, type = 'info') {
    const indicator = document.getElementById('admin-status-indicator');
    const text = document.getElementById('admin-status-text');
    
    if (!indicator || !text) return;
    
    text.textContent = message;
    indicator.style.display = 'block';
    
    // Set colors based on type
    switch (type) {
        case 'success':
            indicator.style.backgroundColor = '#d4edda';
            indicator.style.color = '#155724';
            indicator.style.borderColor = '#c3e6cb';
            break;
        case 'error':
            indicator.style.backgroundColor = '#f8d7da';
            indicator.style.color = '#721c24';
            indicator.style.borderColor = '#f5c6cb';
            break;
        case 'loading':
            indicator.style.backgroundColor = '#d1ecf1';
            indicator.style.color = '#0c5460';
            indicator.style.borderColor = '#bee5eb';
            break;
        default:
            indicator.style.backgroundColor = '#e2e3e5';
            indicator.style.color = '#383d41';
            indicator.style.borderColor = '#d6d8db';
    }
    
    // Auto-hide success messages after 3 seconds
    if (type === 'success') {
        setTimeout(() => {
            indicator.style.display = 'none';
        }, 3000);
    }
}

function clearMarkerForm() {
    document.getElementById('admin-marker-name').value = '';
    document.getElementById('admin-marker-lat').value = '';
    document.getElementById('admin-marker-lng').value = '';
    document.getElementById('admin-marker-color').value = '#4A90E2';
    document.getElementById('admin-marker-category').value = 'innovation';
    document.getElementById('admin-marker-short-desc').value = '';
    document.getElementById('admin-marker-description').value = '';
    document.getElementById('admin-marker-size').value = '';
    document.getElementById('admin-marker-address').value = '';
    document.getElementById('admin-marker-image').value = '';
    document.getElementById('admin-marker-features').value = '';
}

// --- Add New Marker Functions ---
function startNewMarker() {
    console.log('➕ Starting new marker creation');
    
    // Set dropdown to "new" mode
    const select = document.getElementById('admin-marker-select');
    select.innerHTML = '<option value="new">➕ Creating New Marker...</option>';
    select.value = 'new';
    
    // Clear and show the form
    clearMarkerForm();
    document.getElementById('admin-edit-section').style.display = 'block';
    document.getElementById('admin-delete-marker').style.display = 'none';
    
    showAdminStatus('Ready to create new marker', 'info');
}

// --- Delete Marker Functions ---
async function deleteMarker() {
    const markerId = parseInt(document.getElementById('admin-marker-select').value);
    if (!markerId || markerId === 'new') return;
    
    if (!confirm(`Are you sure you want to delete marker ID ${markerId}? This action cannot be undone.`)) {
        return;
    }
    
    showAdminStatus('Deleting...', 'loading');
    
    try {
        const result = await deleteMarkerFromSupabase(markerId);
        
        if (result.success) {
            showAdminStatus('✅ Marker deleted successfully!', 'success');
            
            // Refresh map and dropdown
            await refreshMapMarkers();
            await populateMarkerDropdown();
            
            // Hide the edit section
            document.getElementById('admin-edit-section').style.display = 'none';
            
        } else {
            throw new Error(result.error);
        }
        
    } catch (error) {
        console.error('❌ Error deleting marker:', error);
        showAdminStatus(`❌ Error: ${error.message}`, 'error');
    }
}

function exportMarkerData() {
    const dataToExport = {
        markers: newMarkers,
        enhancedData: ENHANCED_MARKER_DATA,
        exportedAt: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'marker-data-export.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('📤 Marker data exported');
    alert('Marker data exported successfully!');
}

// Initialize admin panel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM Content Loaded - Initializing admin panel...');
    
    setTimeout(() => {
        console.log('⏰ Timeout reached - setting up admin panel');
        initializeAdminPanel();
        
        // Add test button functionality
        console.log('🔍 Looking for test button...');
        const testButton = document.getElementById('test-admin-button');
        console.log('🔍 Test button found:', !!testButton);
        
        if (testButton) {
            testButton.addEventListener('click', () => {
                console.log('🛠️ TEST BUTTON CLICKED - opening admin panel');
                const panel = document.getElementById('admin-panel');
                console.log('🔍 Admin panel found:', !!panel);
                
                if (panel) {
                    panel.classList.remove('editor-hidden');
                    panel.style.display = 'block';
                    panel.style.visibility = 'visible';
                    panel.style.opacity = '1';
                    panel.style.transform = 'translateX(0)';
                    console.log('✅ Admin panel styles applied');
                    console.log('📋 Panel classes:', panel.className);
                    
                    // Also populate the dropdown
                    populateMarkerDropdown();
                } else {
                    console.error('❌ Admin panel not found');
                }
            });
            console.log('✅ Test button event listener added successfully');
        } else {
            console.error('❌ Test button not found in DOM');
        }
        
        // Also check if admin panel exists
        const adminPanel = document.getElementById('admin-panel');
        console.log('🔍 Admin panel exists:', !!adminPanel);
        if (adminPanel) {
            console.log('📋 Admin panel current classes:', adminPanel.className);
        }
        
    }, 2000); // Increased timeout to 2 seconds
});