/* ==========================================================================
   AETHER WEATHER DASHBOARD - APPLICATION CORE
   ========================================================================== */

// 1. REGION DATA REPRESENTATION (24 major European hubs)
const REGIONS_DATABASE = [
    {
        id: "london",
        name: "London",
        country: "United Kingdom",
        lat: 51.5074,
        lng: -0.1278,
        weather: "rainy",
        tempBase: 13,
        humidity: 82,
        wind: 22,
        pressure: 1010,
        uv: 2,
        forecast: [
            { day: "Tue", weather: "rainy", tempHigh: 14, tempLow: 9 },
            { day: "Wed", weather: "cloudy", tempHigh: 16, tempLow: 10 },
            { day: "Thu", weather: "sunny", tempHigh: 18, tempLow: 11 }
        ]
    },
    {
        id: "paris",
        name: "Paris",
        country: "France",
        lat: 48.8566,
        lng: 2.3522,
        weather: "cloudy",
        tempBase: 17,
        humidity: 68,
        wind: 14,
        pressure: 1013,
        uv: 3,
        forecast: [
            { day: "Tue", weather: "cloudy", tempHigh: 19, tempLow: 12 },
            { day: "Wed", weather: "sunny", tempHigh: 21, tempLow: 14 },
            { day: "Thu", weather: "stormy", tempHigh: 20, tempLow: 13 }
        ]
    },
    {
        id: "berlin",
        name: "Berlin",
        country: "Germany",
        lat: 52.5200,
        lng: 13.4050,
        weather: "cloudy",
        tempBase: 15,
        humidity: 62,
        wind: 16,
        pressure: 1012,
        uv: 3,
        forecast: [
            { day: "Tue", weather: "cloudy", tempHigh: 17, tempLow: 9 },
            { day: "Wed", weather: "rainy", tempHigh: 15, tempLow: 10 },
            { day: "Thu", weather: "sunny", tempHigh: 19, tempLow: 11 }
        ]
    },
    {
        id: "madrid",
        name: "Madrid",
        country: "Spain",
        lat: 40.4168,
        lng: -3.7038,
        weather: "sunny",
        tempBase: 25,
        humidity: 32,
        wind: 10,
        pressure: 1017,
        uv: 7,
        forecast: [
            { day: "Tue", weather: "sunny", tempHigh: 27, tempLow: 16 },
            { day: "Wed", weather: "sunny", tempHigh: 29, tempLow: 17 },
            { day: "Thu", weather: "cloudy", tempHigh: 26, tempLow: 15 }
        ]
    },
    {
        id: "rome",
        name: "Rome",
        country: "Italy",
        lat: 41.9028,
        lng: 12.4964,
        weather: "sunny",
        tempBase: 22,
        humidity: 48,
        wind: 12,
        pressure: 1015,
        uv: 6,
        forecast: [
            { day: "Tue", weather: "sunny", tempHigh: 24, tempLow: 14 },
            { day: "Wed", weather: "sunny", tempHigh: 25, tempLow: 15 },
            { day: "Thu", weather: "cloudy", tempHigh: 22, tempLow: 13 }
        ]
    },
    {
        id: "athens",
        name: "Athens",
        country: "Greece",
        lat: 37.9838,
        lng: 23.7275,
        weather: "sunny",
        tempBase: 24,
        humidity: 41,
        wind: 18,
        pressure: 1014,
        uv: 6,
        forecast: [
            { day: "Tue", weather: "sunny", tempHigh: 25, tempLow: 16 },
            { day: "Wed", weather: "sunny", tempHigh: 26, tempLow: 17 },
            { day: "Thu", weather: "sunny", tempHigh: 27, tempLow: 18 }
        ]
    },
    {
        id: "lisbon",
        name: "Lisbon",
        country: "Portugal",
        lat: 38.7223,
        lng: -9.1393,
        weather: "sunny",
        tempBase: 20,
        humidity: 58,
        wind: 20,
        pressure: 1016,
        uv: 5,
        forecast: [
            { day: "Tue", weather: "sunny", tempHigh: 22, tempLow: 14 },
            { day: "Wed", weather: "sunny", tempHigh: 24, tempLow: 15 },
            { day: "Thu", weather: "cloudy", tempHigh: 21, tempLow: 13 }
        ]
    },
    {
        id: "dublin",
        name: "Dublin",
        country: "Ireland",
        lat: 53.3498,
        lng: -6.2603,
        weather: "rainy",
        tempBase: 11,
        humidity: 88,
        wind: 25,
        pressure: 1006,
        uv: 2,
        forecast: [
            { day: "Tue", weather: "rainy", tempHigh: 12, tempLow: 8 },
            { day: "Wed", weather: "rainy", tempHigh: 11, tempLow: 7 },
            { day: "Thu", weather: "cloudy", tempHigh: 13, tempLow: 8 }
        ]
    },
    {
        id: "brussels",
        name: "Brussels",
        country: "Belgium",
        lat: 50.8503,
        lng: 4.3517,
        weather: "rainy",
        tempBase: 14,
        humidity: 80,
        wind: 16,
        pressure: 1011,
        uv: 2,
        forecast: [
            { day: "Tue", weather: "rainy", tempHigh: 15, tempLow: 9 },
            { day: "Wed", weather: "cloudy", tempHigh: 16, tempLow: 10 },
            { day: "Thu", weather: "sunny", tempHigh: 18, tempLow: 11 }
        ]
    },
    {
        id: "amsterdam",
        name: "Amsterdam",
        country: "Netherlands",
        lat: 52.3676,
        lng: 4.9041,
        weather: "rainy",
        tempBase: 13,
        humidity: 84,
        wind: 21,
        pressure: 1010,
        uv: 2,
        forecast: [
            { day: "Tue", weather: "rainy", tempHigh: 14, tempLow: 8 },
            { day: "Wed", weather: "cloudy", tempHigh: 15, tempLow: 9 },
            { day: "Thu", weather: "sunny", tempHigh: 17, tempLow: 11 }
        ]
    },
    {
        id: "oslo",
        name: "Oslo",
        country: "Norway",
        lat: 59.9139,
        lng: 10.7522,
        weather: "cloudy",
        tempBase: 8,
        humidity: 55,
        wind: 12,
        pressure: 1014,
        uv: 1,
        forecast: [
            { day: "Tue", weather: "cloudy", tempHigh: 10, tempLow: 4 },
            { day: "Wed", weather: "rainy", tempHigh: 8, tempLow: 3 },
            { day: "Thu", weather: "snowy", tempHigh: 4, tempLow: -1 }
        ]
    },
    {
        id: "stockholm",
        name: "Stockholm",
        country: "Sweden",
        lat: 59.3293,
        lng: 18.0686,
        weather: "cloudy",
        tempBase: 10,
        humidity: 58,
        wind: 14,
        pressure: 1013,
        uv: 1,
        forecast: [
            { day: "Tue", weather: "cloudy", tempHigh: 11, tempLow: 5 },
            { day: "Wed", weather: "cloudy", tempHigh: 12, tempLow: 6 },
            { day: "Thu", weather: "rainy", tempHigh: 9, tempLow: 4 }
        ]
    },
    {
        id: "helsinki",
        name: "Helsinki",
        country: "Finland",
        lat: 60.1699,
        lng: 24.9384,
        weather: "snowy",
        tempBase: 3,
        humidity: 78,
        wind: 18,
        pressure: 1009,
        uv: 0,
        forecast: [
            { day: "Tue", weather: "snowy", tempHigh: 4, tempLow: -2 },
            { day: "Wed", weather: "snowy", tempHigh: 2, tempLow: -4 },
            { day: "Thu", weather: "cloudy", tempHigh: 5, tempLow: -1 }
        ]
    },
    {
        id: "copenhagen",
        name: "Copenhagen",
        country: "Denmark",
        lat: 55.6761,
        lng: 12.5683,
        weather: "cloudy",
        tempBase: 12,
        humidity: 66,
        wind: 15,
        pressure: 1012,
        uv: 2,
        forecast: [
            { day: "Tue", weather: "cloudy", tempHigh: 13, tempLow: 7 },
            { day: "Wed", weather: "rainy", tempHigh: 11, tempLow: 6 },
            { day: "Thu", weather: "sunny", tempHigh: 15, tempLow: 8 }
        ]
    },
    {
        id: "warsaw",
        name: "Warsaw",
        country: "Poland",
        lat: 52.2297,
        lng: 21.0122,
        weather: "cloudy",
        tempBase: 14,
        humidity: 60,
        wind: 11,
        pressure: 1016,
        uv: 3,
        forecast: [
            { day: "Tue", weather: "sunny", tempHigh: 17, tempLow: 8 },
            { day: "Wed", weather: "cloudy", tempHigh: 15, tempLow: 7 },
            { day: "Thu", weather: "rainy", tempHigh: 13, tempLow: 6 }
        ]
    },
    {
        id: "kyiv",
        name: "Kyiv",
        country: "Ukraine",
        lat: 50.4501,
        lng: 30.5234,
        weather: "sunny",
        tempBase: 16,
        humidity: 49,
        wind: 9,
        pressure: 1017,
        uv: 4,
        forecast: [
            { day: "Tue", weather: "sunny", tempHigh: 18, tempLow: 10 },
            { day: "Wed", weather: "sunny", tempHigh: 20, tempLow: 11 },
            { day: "Thu", weather: "cloudy", tempHigh: 18, tempLow: 9 }
        ]
    },
    {
        id: "vienna",
        name: "Vienna",
        country: "Austria",
        lat: 48.2082,
        lng: 16.3738,
        weather: "sunny",
        tempBase: 18,
        humidity: 50,
        wind: 10,
        pressure: 1015,
        uv: 4,
        forecast: [
            { day: "Tue", weather: "sunny", tempHigh: 20, tempLow: 11 },
            { day: "Wed", weather: "cloudy", tempHigh: 19, tempLow: 10 },
            { day: "Thu", weather: "stormy", tempHigh: 17, tempLow: 9 }
        ]
    },
    {
        id: "prague",
        name: "Prague",
        country: "Czechia",
        lat: 50.0755,
        lng: 14.4378,
        weather: "cloudy",
        tempBase: 15,
        humidity: 63,
        wind: 13,
        pressure: 1014,
        uv: 3,
        forecast: [
            { day: "Tue", weather: "cloudy", tempHigh: 17, tempLow: 8 },
            { day: "Wed", weather: "sunny", tempHigh: 19, tempLow: 10 },
            { day: "Thu", weather: "rainy", tempHigh: 14, tempLow: 7 }
        ]
    },
    {
        id: "bucharest",
        name: "Bucharest",
        country: "Romania",
        lat: 44.4268,
        lng: 26.1025,
        weather: "sunny",
        tempBase: 21,
        humidity: 44,
        wind: 8,
        pressure: 1016,
        uv: 5,
        forecast: [
            { day: "Tue", weather: "sunny", tempHigh: 23, tempLow: 12 },
            { day: "Wed", weather: "sunny", tempHigh: 24, tempLow: 13 },
            { day: "Thu", weather: "sunny", tempHigh: 25, tempLow: 14 }
        ]
    },
    {
        id: "budapest",
        name: "Budapest",
        country: "Hungary",
        lat: 47.4979,
        lng: 19.0402,
        weather: "sunny",
        tempBase: 19,
        humidity: 47,
        wind: 9,
        pressure: 1015,
        uv: 4,
        forecast: [
            { day: "Tue", weather: "sunny", tempHigh: 21, tempLow: 11 },
            { day: "Wed", weather: "sunny", tempHigh: 22, tempLow: 12 },
            { day: "Thu", weather: "cloudy", tempHigh: 19, tempLow: 10 }
        ]
    },
    {
        id: "belgrade",
        name: "Belgrade",
        country: "Serbia",
        lat: 44.7872,
        lng: 20.4573,
        weather: "sunny",
        tempBase: 21,
        humidity: 43,
        wind: 11,
        pressure: 1015,
        uv: 5,
        forecast: [
            { day: "Tue", weather: "sunny", tempHigh: 23, tempLow: 12 },
            { day: "Wed", weather: "sunny", tempHigh: 24, tempLow: 13 },
            { day: "Thu", weather: "sunny", tempHigh: 25, tempLow: 14 }
        ]
    },
    {
        id: "zurich",
        name: "Zurich",
        country: "Switzerland",
        lat: 47.3769,
        lng: 8.5417,
        weather: "rainy",
        tempBase: 13,
        humidity: 76,
        wind: 12,
        pressure: 1012,
        uv: 2,
        forecast: [
            { day: "Tue", weather: "rainy", tempHigh: 14, tempLow: 8 },
            { day: "Wed", weather: "cloudy", tempHigh: 16, tempLow: 9 },
            { day: "Thu", weather: "sunny", tempHigh: 19, tempLow: 10 }
        ]
    },
    {
        id: "reykjavik",
        name: "Reykjavik",
        country: "Iceland",
        lat: 64.1466,
        lng: -21.9426,
        weather: "snowy",
        tempBase: 2,
        humidity: 79,
        wind: 28,
        pressure: 1001,
        uv: 0,
        forecast: [
            { day: "Tue", weather: "snowy", tempHigh: 3, tempLow: -3 },
            { day: "Wed", weather: "stormy", tempHigh: 1, tempLow: -4 },
            { day: "Thu", weather: "snowy", tempHigh: 2, tempLow: -3 }
        ]
    },
    {
        id: "sofia",
        name: "Sofia",
        country: "Bulgaria",
        lat: 42.6977,
        lng: 23.3219,
        weather: "sunny",
        tempBase: 18,
        humidity: 46,
        wind: 9,
        pressure: 1015,
        uv: 4,
        forecast: [
            { day: "Tue", weather: "sunny", tempHigh: 20, tempLow: 9 },
            { day: "Wed", weather: "sunny", tempHigh: 21, tempLow: 10 },
            { day: "Thu", weather: "sunny", tempHigh: 22, tempLow: 11 }
        ]
    }
];

// 2. STATE MANAGEMENT
let appState = {
    selectedRegion: null,     // Currently focused region object
    temperatureUnit: "C",     // "C" or "F"
    timeOfDay: 1,             // 0: Morning, 1: Afternoon, 2: Evening, 3: Night
    activeFilter: "all",      // "all", "sunny", "cloudy", "rainy", "snowy"
    tempOffsets: { 0: 0, 1: 3, 2: -2, 3: -7 } // Time of day shifts
};

// SVG Weather Art Templates for Sidebar hero
const WEATHER_SVG_TEMPLATES = {
    sunny: `
        <svg class="weather-art-svg" viewBox="0 0 100 100">
            <defs>
                <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#ffb400" stop-opacity="1"/>
                    <stop offset="100%" stop-color="#ff9e22" stop-opacity="0.2"/>
                </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="28" fill="url(#sun-glow)"/>
            <g class="sun-body">
                <circle cx="50" cy="50" r="18"/>
                <line x1="50" y1="12" x2="50" y2="4" stroke="#ff9e22" stroke-width="4" stroke-linecap="round"/>
                <line x1="50" y1="88" x2="50" y2="96" stroke="#ff9e22" stroke-width="4" stroke-linecap="round"/>
                <line x1="12" y1="50" x2="4" y2="50" stroke="#ff9e22" stroke-width="4" stroke-linecap="round"/>
                <line x1="88" y1="50" x2="96" y2="50" stroke="#ff9e22" stroke-width="4" stroke-linecap="round"/>
                <line x1="23" y1="23" x2="17" y2="17" stroke="#ff9e22" stroke-width="4" stroke-linecap="round"/>
                <line x1="77" y1="77" x2="83" y2="83" stroke="#ff9e22" stroke-width="4" stroke-linecap="round"/>
                <line x1="77" y1="23" x2="83" y2="17" stroke="#ff9e22" stroke-width="4" stroke-linecap="round"/>
                <line x1="23" y1="77" x2="17" y2="83" stroke="#ff9e22" stroke-width="4" stroke-linecap="round"/>
            </g>
        </svg>
    `,
    cloudy: `
        <svg class="weather-art-svg" viewBox="0 0 100 100">
            <g class="cloud-dark" transform="translate(10, 10) scale(0.9)">
                <path d="M 25,60 A 20,20 0 0 1 45,30 A 22,22 0 0 1 80,35 A 15,15 0 0 1 90,60 Z"/>
            </g>
            <g class="cloud-body" transform="translate(0, 16)">
                <path d="M 25,60 A 20,20 0 0 1 45,30 A 22,22 0 0 1 80,35 A 15,15 0 0 1 90,60 Z" />
            </g>
        </svg>
    `,
    rainy: `
        <svg class="weather-art-svg" viewBox="0 0 100 100">
            <g class="cloud-body" transform="translate(0, 10)">
                <path d="M 25,60 A 20,20 0 0 1 45,30 A 22,22 0 0 1 80,35 A 15,15 0 0 1 90,60 Z" />
            </g>
            <g>
                <line class="rain-drop" x1="38" y1="68" x2="33" y2="82" stroke-width="3" stroke-linecap="round"/>
                <line class="rain-drop rain-drop-2" x1="53" y1="72" x2="48" y2="86" stroke-width="3" stroke-linecap="round"/>
                <line class="rain-drop rain-drop-3" x1="68" y1="68" x2="63" y2="82" stroke-width="3" stroke-linecap="round"/>
            </g>
        </svg>
    `,
    snowy: `
        <svg class="weather-art-svg" viewBox="0 0 100 100">
            <g class="cloud-body" transform="translate(0, 10)">
                <path d="M 25,60 A 20,20 0 0 1 45,30 A 22,22 0 0 1 80,35 A 15,15 0 0 1 90,60 Z" />
            </g>
            <g>
                <circle class="snow-flake" cx="35" cy="74" r="3"/>
                <circle class="snow-flake snow-flake-2" cx="50" cy="78" r="3.5"/>
                <circle class="snow-flake snow-flake-3" cx="65" cy="73" r="2.5"/>
            </g>
        </svg>
    `,
    stormy: `
        <svg class="weather-art-svg" viewBox="0 0 100 100">
            <g class="cloud-dark" transform="translate(0, 10)">
                <path d="M 25,60 A 20,20 0 0 1 45,30 A 22,22 0 0 1 80,35 A 15,15 0 0 1 90,60 Z" />
            </g>
            <path class="lightning-bolt" d="M 46,58 L 36,74 L 48,74 L 42,92 L 62,70 L 50,70 Z" fill="#ffd200"/>
        </svg>
    `
};

// FontAwesome Icon Mapping
const WEATHER_ICONS = {
    sunny: "fa-sun text-sunny",
    cloudy: "fa-cloud text-cloudy",
    rainy: "fa-cloud-showers-heavy text-rainy",
    snowy: "fa-snowflake text-snowy",
    stormy: "fa-cloud-bolt text-stormy"
};

// UI Element selectors
const dom = {
    search: document.getElementById("search-input"),
    clearSearch: document.getElementById("clear-search"),
    searchAutocomplete: document.getElementById("search-autocomplete"),
    filterBtns: document.querySelectorAll(".filter-btn"),
    sidebar: document.getElementById("weather-sidebar"),
    sidebarToggle: document.getElementById("sidebar-toggle"),
    sideRegionName: document.getElementById("side-region-name"),
    sideRegionCountry: document.getElementById("side-region-country"),
    unitToggle: document.getElementById("unit-toggle"),
    sideWeatherArt: document.getElementById("side-weather-art"),
    sideTemp: document.getElementById("side-temperature"),
    sideDesc: document.getElementById("side-weather-desc"),
    metricHumidity: document.getElementById("metric-humidity"),
    metricWind: document.getElementById("metric-wind"),
    metricPressure: document.getElementById("metric-pressure"),
    metricUv: document.getElementById("metric-uv"),
    forecastList: document.getElementById("forecast-list"),
    sandboxWeatherBtns: document.querySelectorAll(".sandbox-weather-btn"),
    sandboxTempSlider: document.getElementById("sandbox-temp-slider"),
    sandboxTempVal: document.getElementById("sandbox-temp-val"),
    timeSlider: document.getElementById("time-slider"),
    currentTimeLabel: document.getElementById("current-time-label"),
    timeTicks: document.querySelectorAll(".time-ticks .tick"),
    totalRegions: document.getElementById("total-regions-count"),
    avgTemp: document.getElementById("avg-temp-val"),
    skyOverlay: document.getElementById("sky-overlay")
};

// Global variables
let mapInstance;
let markersGroup = {}; // Maps region.id -> Leaflet Marker
let weatherCanvas;
let canvasCtx;
let particleSystem = null;

// ==========================================================================
// 3. UTILITY METHODS (Unit conversions, formatting, average calculation)
// ==========================================================================

function getAdjustedTemp(region) {
    const base = region.tempBase;
    const offset = appState.tempOffsets[appState.timeOfDay];
    return base + offset;
}

function convertTemp(celsius, unit = appState.temperatureUnit) {
    if (unit === "C") return celsius;
    return Math.round((celsius * 9/5) + 32);
}

function formatTempDisplay(celsius) {
    const converted = convertTemp(celsius);
    return `${converted}`;
}

function getForecastAdjustedTemp(temp, offset) {
    return temp + offset;
}

function calculateGlobalStats() {
    let sum = 0;
    let count = 0;
    REGIONS_DATABASE.forEach(region => {
        // Only count regions matching active filter if not 'all'
        if (appState.activeFilter === "all" || region.weather === appState.activeFilter) {
            sum += getAdjustedTemp(region);
            count++;
        }
    });
    
    dom.totalRegions.innerText = count;
    if (count > 0) {
        const avg = (sum / count).toFixed(1);
        dom.avgTemp.innerText = `${convertTemp(parseFloat(avg))}°${appState.temperatureUnit}`;
    } else {
        dom.avgTemp.innerText = `--`;
    }
}

// ==========================================================================
// 4. MAP INITIALIZATION & RENDER
// ==========================================================================

function initMap() {
    // Coordinate center of Europe, standard zoom
    mapInstance = L.map('map', {
        zoomControl: true,
        attributionControl: true,
        minZoom: 3.5,
        maxZoom: 8,
        zoomSnap: 0.1,
        maxBounds: [
            [30.0, -35.0], // Southwest boundary
            [72.0, 45.0]  // Northeast boundary
        ],
        maxBoundsViscosity: 0.8
    }).setView([53.5, 12.0], 4.2);

    // Apply CartoDB Positron tile set
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(mapInstance);

    // Reposition zoom controls
    mapInstance.zoomControl.setPosition('bottomleft');

    // Create markers for all cities
    renderAllMarkers();

    // Map click collapses active selections
    mapInstance.on("click", (e) => {
        // Prevent action on clicking custom shapes
        if (e.originalEvent.target.closest('.weather-marker-container')) return;
        
        deselectActiveRegion();
    });
}

function generateMarkerHtml(region) {
    const temp = getAdjustedTemp(region);
    const iconClass = WEATHER_ICONS[region.weather];
    const isSelected = appState.selectedRegion && appState.selectedRegion.id === region.id;
    
    return `
        <div class="weather-marker-container ${isSelected ? 'selected' : ''} ${region.weather}" id="marker-${region.id}">
            <div class="weather-marker-pulse ${region.weather}"></div>
            <div class="weather-marker-badge">
                <i class="fa-solid ${iconClass}"></i>
                <span class="marker-temp">${formatTempDisplay(temp)}°</span>
            </div>
            <span class="weather-marker-label">${region.name}</span>
        </div>
    `;
}

function renderAllMarkers() {
    REGIONS_DATABASE.forEach(region => {
        const markerIcon = L.divIcon({
            html: generateMarkerHtml(region),
            className: 'custom-div-icon',
            iconSize: [60, 45],
            iconAnchor: [30, 22]
        });

        const marker = L.marker([region.lat, region.lng], { icon: markerIcon }).addTo(mapInstance);
        
        // Save reference
        markersGroup[region.id] = marker;

        // Bind clicks
        marker.on("click", (e) => {
            L.DomEvent.stopPropagation(e);
            selectRegion(region);
        });
    });
    
    calculateGlobalStats();
}

function updateMarkerDisplay(region) {
    const marker = markersGroup[region.id];
    if (marker) {
        const isFiltered = appState.activeFilter !== "all" && region.weather !== appState.activeFilter;
        
        const markerIcon = L.divIcon({
            html: generateMarkerHtml(region),
            className: `custom-div-icon`,
            iconSize: [60, 45],
            iconAnchor: [30, 22]
        });
        
        marker.setIcon(markerIcon);
        
        // Access marker DOM element directly to apply filtering fade transitions
        const markerElement = marker.getElement();
        if (markerElement) {
            const container = markerElement.querySelector('.weather-marker-container');
            if (container) {
                if (isFiltered) {
                    container.classList.add('filtered-out');
                } else {
                    container.classList.remove('filtered-out');
                }
            }
        }
    }
}

function updateAllMarkers() {
    REGIONS_DATABASE.forEach(region => {
        updateMarkerDisplay(region);
    });
    calculateGlobalStats();
}

// ==========================================================================
// 5. REGION SELECTION & SIDEBAR CONTROLLER
// ==========================================================================

function selectRegion(region) {
    const previouslySelected = appState.selectedRegion;
    appState.selectedRegion = region;
    
    // Focus map on region with offset to prevent sidebar cover
    let focusLatLng = L.latLng(region.lat, region.lng);
    
    // Shift coordinate focus slightly depending on zoom to balance sidebar
    if (window.innerWidth > 1024) {
        const currentZoom = mapInstance.getZoom();
        const lngShift = currentZoom > 5 ? -2 : -4;
        focusLatLng = L.latLng(region.lat, region.lng - lngShift);
    }
    
    mapInstance.flyTo(focusLatLng, Math.max(5.5, mapInstance.getZoom()), {
        animate: true,
        duration: 1.0
    });

    // Update marker highlights
    if (previouslySelected) {
        updateMarkerDisplay(previouslySelected);
    }
    updateMarkerDisplay(region);

    // Render detailed sidebar
    populateSidebar(region);
    
    // Smoothly expand sidebar
    dom.sidebar.classList.remove("collapsed");
    dom.sidebarToggle.querySelector("i").className = "fa-solid fa-chevron-right";

    // Set full screen particle canvas trigger
    setAmbientWeather(region.weather);
    
    // Auto populate search box with name
    dom.search.value = region.name;
    dom.clearSearch.style.display = "block";
    dom.searchAutocomplete.style.display = "none";
}

function deselectActiveRegion() {
    if (!appState.selectedRegion) return;
    
    const prev = appState.selectedRegion;
    appState.selectedRegion = null;
    updateMarkerDisplay(prev);
    
    // Reset background ambient weather to general standard
    setAmbientWeather(null);
    
    // Collapse sidebar
    dom.sidebar.classList.add("collapsed");
    dom.sidebarToggle.querySelector("i").className = "fa-solid fa-chevron-left";
    
    // Clear search
    dom.search.value = "";
    dom.clearSearch.style.display = "none";
}

function populateSidebar(region) {
    dom.sideRegionName.innerText = region.name;
    dom.sideRegionCountry.innerText = region.country;
    
    const currentTemp = getAdjustedTemp(region);
    dom.sideTemp.innerText = formatTempDisplay(currentTemp);
    
    // Capitalize weather status
    dom.sideDesc.innerText = region.weather.toUpperCase() + (region.weather === "rainy" ? " SHOWERS" : (region.weather === "sunny" ? " CONDITIONS" : " SKIES"));
    
    // Metrics updates
    dom.metricHumidity.innerText = `${region.humidity}%`;
    dom.metricWind.innerText = `${region.wind} km/h`;
    dom.metricPressure.innerText = `${region.pressure} hPa`;
    
    let uvRating = "Low";
    if (region.uv >= 3 && region.uv <= 5) uvRating = "Moderate";
    else if (region.uv >= 6) uvRating = "High";
    dom.metricUv.innerText = `${region.uv} (${uvRating})`;

    // Inject active SVG Animation
    dom.sideWeatherArt.innerHTML = WEATHER_SVG_TEMPLATES[region.weather] || WEATHER_SVG_TEMPLATES.cloudy;
    dom.sideWeatherArt.className = `weather-art ${region.weather}`;

    // Render 3-Day Forecast items
    dom.forecastList.innerHTML = "";
    const offset = appState.tempOffsets[appState.timeOfDay];
    
    region.forecast.forEach(f => {
        const item = document.createElement("div");
        item.className = "forecast-item";
        
        const highTemp = getForecastAdjustedTemp(f.tempHigh, offset);
        const lowTemp = getForecastAdjustedTemp(f.tempLow, offset);
        
        item.innerHTML = `
            <span class="forecast-day">${f.day}</span>
            <div class="forecast-desc-group">
                <i class="fa-solid ${WEATHER_ICONS[f.weather]}"></i>
                <span class="forecast-desc">${f.weather.charAt(0).toUpperCase() + f.weather.slice(1)}</span>
            </div>
            <div class="forecast-temps">
                <span class="high">${formatTempDisplay(highTemp)}°</span>
                <span class="low">${formatTempDisplay(lowTemp)}°</span>
            </div>
        `;
        dom.forecastList.appendChild(item);
    });

    // Sync Sandbox Controls
    dom.sandboxWeatherBtns.forEach(btn => {
        if (btn.dataset.weather === region.weather) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    dom.sandboxTempSlider.value = currentTemp;
    dom.sandboxTempVal.innerText = `${currentTemp}°C`;
}

// ==========================================================================
// 6. FULL-SCREEN CANVAS PARTICLE WEATHER SYSTEM
// ==========================================================================

class ParticleEngine {
    constructor(canvas, weatherType) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.weatherType = weatherType;
        this.particles = [];
        this.active = true;
        this.width = canvas.width;
        this.height = canvas.height;
        this.stormFlashTimer = 0;
        this.sunnyBeamAngle = 0;
        
        this.initParticles();
    }

    resize(w, h) {
        this.width = w;
        this.height = h;
    }

    initParticles() {
        this.particles = [];
        let count = 0;

        if (this.weatherType === 'rainy') {
            count = Math.floor(this.width * 0.15);
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height - this.height,
                    speed: 10 + Math.random() * 8,
                    len: 12 + Math.random() * 10,
                    opacity: 0.15 + Math.random() * 0.35,
                    thick: 1 + Math.random() * 1.5
                });
            }
        } else if (this.weatherType === 'snowy') {
            count = Math.floor(this.width * 0.08);
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    r: 1.5 + Math.random() * 4,
                    speed: 1 + Math.random() * 2,
                    drift: Math.random() * 1.5 - 0.75,
                    swingSpeed: 0.01 + Math.random() * 0.02,
                    swingRange: 1 + Math.random() * 2,
                    swingOffset: Math.random() * 100,
                    opacity: 0.2 + Math.random() * 0.6
                });
            }
        } else if (this.weatherType === 'stormy') {
            count = Math.floor(this.width * 0.25);
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height - this.height,
                    speed: 14 + Math.random() * 10,
                    len: 15 + Math.random() * 15,
                    opacity: 0.2 + Math.random() * 0.5,
                    thick: 1.2 + Math.random() * 2.0
                });
            }
        } else if (this.weatherType === 'sunny') {
            // Sunny particle effect: soft light halos emanating from top-right corner
            count = 6;
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: this.width * 0.85,
                    y: this.height * 0.1,
                    r: 100 + i * 80,
                    opacity: 0.02 - (i * 0.003),
                    pulseSpeed: 0.0003 + (i * 0.0002),
                    pulseVal: Math.random() * Math.PI
                });
            }
        } else if (this.weatherType === 'cloudy') {
            // Cloudy particle effect: giant drifting fog circles
            count = 5;
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * this.width,
                    y: this.height * 0.2 + Math.random() * (this.height * 0.6),
                    r: 200 + Math.random() * 200,
                    speed: 0.1 + Math.random() * 0.2,
                    opacity: 0.015 + Math.random() * 0.02
                });
            }
        }
    }

    draw() {
        if (!this.active) return;
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Rendering Storm lightning flash overlay
        if (this.weatherType === 'stormy') {
            this.stormFlashTimer += Math.random();
            if (this.stormFlashTimer > 98) { // ~2% probability on tick
                this.ctx.fillStyle = `rgba(230, 240, 255, ${0.15 + Math.random() * 0.35})`;
                this.ctx.fillRect(0, 0, this.width, this.height);
                this.stormFlashTimer = 0;
                
                // Audio flash placeholder or container borders flicker
                const mapDom = document.getElementById("map");
                mapDom.style.borderColor = "rgba(181, 0, 255, 0.4)";
                setTimeout(() => mapDom.style.borderColor = "", 150);
            }
        }

        // Draw and update particle queues
        if (this.weatherType === 'rainy' || this.weatherType === 'stormy') {
            const isStorm = this.weatherType === 'stormy';
            this.ctx.strokeStyle = isStorm ? 'rgba(160, 200, 255, 1)' : 'rgba(144, 210, 255, 1)';
            this.ctx.lineCap = 'round';

            this.particles.forEach(p => {
                this.ctx.lineWidth = p.thick;
                this.ctx.globalAlpha = p.opacity;
                this.ctx.beginPath();
                this.ctx.moveTo(p.x, p.y);
                
                // Wind angle simulation
                const windShift = isStorm ? -3 : -1.5;
                this.ctx.lineTo(p.x + windShift, p.y + p.len);
                this.ctx.stroke();

                p.y += p.speed;
                p.x += windShift;

                if (p.y > this.height) {
                    p.y = -p.len;
                    p.x = Math.random() * this.width;
                }
            });
        } else if (this.weatherType === 'snowy') {
            this.ctx.fillStyle = '#ffffff';
            this.particles.forEach(p => {
                this.ctx.globalAlpha = p.opacity;
                this.ctx.beginPath();
                
                // Drift swinging calculation
                const swing = Math.sin(p.swingOffset) * p.swingRange;
                this.ctx.arc(p.x + swing, p.y, p.r, 0, Math.PI * 2);
                this.ctx.fill();

                p.y += p.speed;
                p.x += p.drift;
                p.swingOffset += p.swingSpeed;

                if (p.y > this.height) {
                    p.y = -p.r * 2;
                    p.x = Math.random() * this.width;
                }
            });
        } else if (this.weatherType === 'sunny') {
            // Draw warm sun halos
            this.particles.forEach(p => {
                p.pulseVal += p.pulseSpeed;
                const dynamicR = p.r + Math.sin(p.pulseVal) * 15;
                const dynamicOpacity = p.opacity + Math.sin(p.pulseVal) * 0.005;

                this.ctx.globalAlpha = dynamicOpacity;
                this.ctx.beginPath();
                
                const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, dynamicR);
                grad.addColorStop(0, 'rgba(255, 180, 0, 0.4)');
                grad.addColorStop(0.3, 'rgba(255, 140, 0, 0.1)');
                grad.addColorStop(1, 'rgba(255, 100, 0, 0)');
                
                this.ctx.fillStyle = grad;
                this.ctx.arc(p.x, p.y, dynamicR, 0, Math.PI * 2);
                this.ctx.fill();
            });

            // Draw angled solar flare rays
            this.sunnyBeamAngle += 0.0005;
            this.ctx.save();
            this.ctx.translate(this.width * 0.85, this.height * 0.1);
            this.ctx.rotate(this.sunnyBeamAngle);
            this.ctx.globalAlpha = 0.015;
            this.ctx.fillStyle = '#ffae00';
            for (let i = 0; i < 12; i++) {
                this.ctx.beginPath();
                this.ctx.moveTo(0, 0);
                this.ctx.arc(0, 0, this.width * 0.6, (i * Math.PI / 6) - 0.08, (i * Math.PI / 6) + 0.08);
                this.ctx.closePath();
                this.ctx.fill();
            }
            this.ctx.restore();
        } else if (this.weatherType === 'cloudy') {
            this.ctx.fillStyle = '#7a8e9e';
            this.particles.forEach(p => {
                this.ctx.globalAlpha = p.opacity;
                this.ctx.beginPath();
                
                const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
                grad.addColorStop(0, 'rgba(122, 142, 158, 0.6)');
                grad.addColorStop(0.5, 'rgba(100, 120, 140, 0.15)');
                grad.addColorStop(1, 'rgba(20, 20, 30, 0)');
                
                this.ctx.fillStyle = grad;
                this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                this.ctx.fill();

                p.x += p.speed;
                if (p.x - p.r > this.width) {
                    p.x = -p.r;
                }
            });
        }
    }

    destroy() {
        this.active = false;
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}

function initCanvasEngine() {
    weatherCanvas = document.getElementById("weather-canvas");
    canvasCtx = weatherCanvas.getContext("2d");
    
    // Sync viewport bounding box
    resizeWeatherCanvas();
    window.addEventListener("resize", resizeWeatherCanvas);

    // Frame drawing loop
    function loop() {
        if (particleSystem) {
            particleSystem.draw();
        }
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}

function resizeWeatherCanvas() {
    if (!weatherCanvas) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    // Scale for high pixel density displays
    const dpr = window.devicePixelRatio || 1;
    weatherCanvas.width = w * dpr;
    weatherCanvas.height = h * dpr;
    weatherCanvas.style.width = `${w}px`;
    weatherCanvas.style.height = `${h}px`;
    
    canvasCtx.scale(dpr, dpr);
    
    if (particleSystem) {
        particleSystem.resize(w, h);
        particleSystem.initParticles();
    }
}

function setAmbientWeather(weatherType) {
    if (particleSystem) {
        particleSystem.destroy();
        particleSystem = null;
    }
    
    if (weatherType) {
        particleSystem = new ParticleEngine(weatherCanvas, weatherType);
        resizeWeatherCanvas();
    }
}

// ==========================================================================
// 7. TIME OF DAY SIMULATOR (SLIDER & BACKGROUND TIMING SHIFTS)
// ==========================================================================

function setTimeOfDay(index) {
    const timeClasses = ["morning", "afternoon", "evening", "night"];
    const activeClass = timeClasses[index];
    
    appState.timeOfDay = index;

    // 1. Update active tick highlight styles
    dom.timeTicks.forEach((tick, i) => {
        if (i === index) {
            tick.classList.add("active");
        } else {
            tick.classList.remove("active");
        }
    });

    // 2. Adjust slider value
    dom.timeSlider.value = index;

    // 3. Update descriptive branding label
    const labels = ["07:30 (Morning)", "14:00 (Afternoon)", "18:45 (Evening)", "23:15 (Night)"];
    dom.currentTimeLabel.innerText = labels[index];

    // 4. Slide background sky gradients
    dom.skyOverlay.className = activeClass;

    // 5. Apply map filter classes to style tiles
    const mapEl = document.getElementById("map");
    mapEl.classList.remove("time-morning", "time-afternoon", "time-evening", "time-night");
    mapEl.classList.add(`time-${activeClass}`);
    
    // Direct CSS filters on Leaflet tiles based on states
    const mapTiles = document.querySelectorAll(".leaflet-tile-container");
    mapTiles.forEach(tileCont => {
        if (activeClass === "morning") {
            tileCont.style.filter = "brightness(1.05) contrast(0.98) saturate(1.0) sepia(0.04)";
        } else if (activeClass === "afternoon") {
            tileCont.style.filter = "brightness(1.0) contrast(1.0) saturate(1.0)";
        } else if (activeClass === "evening") {
            tileCont.style.filter = "brightness(0.96) contrast(0.98) saturate(1.05) sepia(0.12)";
        } else if (activeClass === "night") {
            tileCont.style.filter = "brightness(0.85) contrast(1.05) saturate(0.85) hue-rotate(-5deg)";
        }
    });

    // 6. Recompute and update all marker values
    updateAllMarkers();

    // 7. Populate active sidebar details with shifts
    if (appState.selectedRegion) {
        populateSidebar(appState.selectedRegion);
    }
}

// ==========================================================================
// 8. SEARCH & FILTER INTERACTIVE HANDLERS
// ==========================================================================

function initSearchAndFilter() {
    // 1. Search Box input listener
    dom.search.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query === "") {
            dom.clearSearch.style.display = "none";
            dom.searchAutocomplete.style.display = "none";
            return;
        }

        dom.clearSearch.style.display = "block";
        
        // Filter regions
        const matches = REGIONS_DATABASE.filter(region => 
            region.name.toLowerCase().includes(query) || 
            region.country.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            renderSearchAutocomplete(matches);
            dom.searchAutocomplete.style.display = "block";
        } else {
            dom.searchAutocomplete.style.display = "none";
        }
    });

    // Hide autocomplete on click outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
            dom.searchAutocomplete.style.display = "none";
        }
    });

    // Clear search trigger
    dom.clearSearch.addEventListener("click", () => {
        dom.search.value = "";
        dom.clearSearch.style.display = "none";
        dom.searchAutocomplete.style.display = "none";
        deselectActiveRegion();
    });

    // 2. Category Quick Filters
    dom.filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            dom.filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;
            appState.activeFilter = filter;
            
            // Reapply fading highlights on map markers
            updateAllMarkers();
        });
    });
}

function renderSearchAutocomplete(matches) {
    dom.searchAutocomplete.innerHTML = "";
    
    matches.forEach(region => {
        const item = document.createElement("div");
        item.className = "autocomplete-item";
        
        const temp = getAdjustedTemp(region);
        
        item.innerHTML = `
            <div>
                <span class="city-name">${region.name}</span>
                <span class="country-name">, ${region.country}</span>
            </div>
            <span class="city-temp">${formatTempDisplay(temp)}°${appState.temperatureUnit}</span>
        `;
        
        item.addEventListener("click", () => {
            selectRegion(region);
            dom.searchAutocomplete.style.display = "none";
        });
        
        dom.searchAutocomplete.appendChild(item);
    });
}

// ==========================================================================
// 9. WEATHER SANDBOX ("GOD MODE") CONTROLLER
// ==========================================================================

function initSandboxControls() {
    // 1. Weather switcher buttons
    dom.sandboxWeatherBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (!appState.selectedRegion) return;
            
            const selectedWeather = btn.dataset.weather;
            
            // Apply new state
            appState.selectedRegion.weather = selectedWeather;

            // Highlight sandbox button
            dom.sandboxWeatherBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Redraw marker and sidebar icons
            updateMarkerDisplay(appState.selectedRegion);
            populateSidebar(appState.selectedRegion);
            
            // Adjust full screen background particles immediately
            setAmbientWeather(selectedWeather);
            
            calculateGlobalStats();
        });
    });

    // 2. Temperature slider adjustments
    dom.sandboxTempSlider.addEventListener("input", (e) => {
        if (!appState.selectedRegion) return;

        const val = parseInt(e.target.value);
        
        // Show in text
        dom.sandboxTempVal.innerText = `${val}°C`;
        
        // Re-scale the base temperature depending on time offset to keep sandbox absolute
        const offset = appState.tempOffsets[appState.timeOfDay];
        appState.selectedRegion.tempBase = val - offset;

        // Dynamic visual feedback on marker and sidebar hero
        dom.sideTemp.innerText = formatTempDisplay(val);
        updateMarkerDisplay(appState.selectedRegion);
        
        calculateGlobalStats();
    });
}

// ==========================================================================
// 10. SYSTEM INITS AND EVENT WIREUPS
// ==========================================================================

function wireUiListeners() {
    // 1. Collapsible Sidebar toggle
    dom.sidebarToggle.addEventListener("click", () => {
        if (appState.selectedRegion) {
            const isCollapsed = dom.sidebar.classList.toggle("collapsed");
            dom.sidebarToggle.querySelector("i").className = isCollapsed 
                ? "fa-solid fa-chevron-left" 
                : "fa-solid fa-chevron-right";
        }
    });

    // 2. Celsius / Fahrenheit Toggle unit converter
    dom.unitToggle.addEventListener("change", (e) => {
        appState.temperatureUnit = e.target.checked ? "F" : "C";
        
        // Update all text labels on markers and UI
        updateAllMarkers();
        
        if (appState.selectedRegion) {
            populateSidebar(appState.selectedRegion);
        }
    });

    // 3. Time slider actions
    dom.timeSlider.addEventListener("input", (e) => {
        setTimeOfDay(parseInt(e.target.value));
    });

    // Direct tick clicks
    dom.timeTicks.forEach(tick => {
        tick.addEventListener("click", () => {
            const timeVal = parseInt(tick.dataset.time);
            setTimeOfDay(timeVal);
        });
    });
}

// Bootstrap Aether Weather site
document.addEventListener("DOMContentLoaded", () => {
    // Init core Canvas particle engine
    initCanvasEngine();
    
    // Init Leaflet maps
    initMap();

    // Attach listeners
    wireUiListeners();
    initSearchAndFilter();
    initSandboxControls();

    // Default general general average values
    calculateGlobalStats();

    // Set afternoon as default starting time
    setTimeOfDay(1);
});
