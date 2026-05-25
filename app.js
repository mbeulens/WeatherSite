/* ==========================================================================
   AETHER WEATHER DASHBOARD - APPLICATION CORE
   ========================================================================== */

// 1. REGION DATA REPRESENTATION (24 major European hubs)
const REGIONS_DATABASE = [
    // --- EUROPE MAIN HUBS (Tier 1 - Capitals - Zoom 1.0+) ---
    { id: "london", name: "London", country: "United Kingdom", lat: 51.7000, lng: -0.4000, weather: "rainy", tempBase: 13, humidity: 82, wind: 22, pressure: 1010, uv: 2, minZoom: 1, forecast: [] },
    { id: "paris", name: "Paris", country: "France", lat: 48.6000, lng: 2.1000, weather: "cloudy", tempBase: 17, humidity: 68, wind: 14, pressure: 1013, uv: 3, minZoom: 1, forecast: [] },
    { id: "berlin", name: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050, weather: "cloudy", tempBase: 15, humidity: 62, wind: 16, pressure: 1012, uv: 3, minZoom: 1, forecast: [] },
    { id: "madrid", name: "Madrid", country: "Spain", lat: 40.4168, lng: -3.7038, weather: "sunny", tempBase: 25, humidity: 32, wind: 10, pressure: 1017, uv: 7, minZoom: 1, forecast: [] },
    { id: "rome", name: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964, weather: "sunny", tempBase: 22, humidity: 48, wind: 12, pressure: 1015, uv: 6, minZoom: 1, forecast: [] },
    { id: "athens", name: "Athens", country: "Greece", lat: 37.9838, lng: 23.7275, weather: "sunny", tempBase: 24, humidity: 41, wind: 18, pressure: 1014, uv: 6, minZoom: 1, forecast: [] },
    { id: "lisbon", name: "Lisbon", country: "Portugal", lat: 38.7223, lng: -9.1393, weather: "sunny", tempBase: 20, humidity: 58, wind: 20, pressure: 1016, uv: 5, minZoom: 1, forecast: [] },
    { id: "dublin", name: "Dublin", country: "Ireland", lat: 53.3498, lng: -6.2603, weather: "rainy", tempBase: 11, humidity: 88, wind: 25, pressure: 1006, uv: 2, minZoom: 1, forecast: [] },
    { id: "brussels", name: "Brussels", country: "Belgium", lat: 50.6000, lng: 4.6000, weather: "rainy", tempBase: 14, humidity: 80, wind: 18, pressure: 1010, uv: 3, minZoom: 1, forecast: [] },
    { id: "amsterdam", name: "Amsterdam", country: "Netherlands", lat: 52.5500, lng: 5.3000, weather: "rainy", tempBase: 13, humidity: 78, wind: 20, pressure: 1009, uv: 3, minZoom: 1, forecast: [] },
    { id: "stockholm", name: "Stockholm", country: "Sweden", lat: 59.3293, lng: 18.0686, weather: "cloudy", tempBase: 10, humidity: 64, wind: 13, pressure: 1011, uv: 2, minZoom: 1, forecast: [] },
    { id: "moscow", name: "Moscow", country: "Russia", lat: 55.7558, lng: 37.6173, weather: "rainy", tempBase: 12, humidity: 73, wind: 15, pressure: 1009, uv: 3, minZoom: 1, forecast: [] },

    // --- EUROPE REGIONAL HUBS (Tier 2 - Regional - Zoom 3.5+) ---
    { id: "marseille", name: "Marseille", country: "France", lat: 43.2965, lng: 5.3698, weather: "sunny", tempBase: 21, humidity: 52, wind: 26, pressure: 1014, uv: 6, minZoom: 3.5, forecast: [] },
    { id: "lyon", name: "Lyon", country: "France", lat: 45.7640, lng: 4.8357, weather: "cloudy", tempBase: 18, humidity: 64, wind: 11, pressure: 1012, uv: 4, minZoom: 3.5, forecast: [] },
    { id: "nice", name: "Nice", country: "France", lat: 43.7102, lng: 7.2620, weather: "sunny", tempBase: 22, humidity: 50, wind: 12, pressure: 1015, uv: 6, minZoom: 3.5, forecast: [] },
    { id: "bordeaux", name: "Bordeaux", country: "France", lat: 44.8378, lng: -0.5792, weather: "rainy", tempBase: 16, humidity: 76, wind: 18, pressure: 1010, uv: 3, minZoom: 3.5, forecast: [] },
    { id: "toulouse", name: "Toulouse", country: "France", lat: 43.6047, lng: 1.4442, weather: "sunny", tempBase: 20, humidity: 55, wind: 12, pressure: 1014, uv: 5, minZoom: 3.5, forecast: [] },
    { id: "munich", name: "Munich", country: "Germany", lat: 48.1351, lng: 11.5820, weather: "cloudy", tempBase: 14, humidity: 70, wind: 10, pressure: 1011, uv: 3, minZoom: 3.5, forecast: [] },
    { id: "frankfurt", name: "Frankfurt", country: "Germany", lat: 50.1109, lng: 8.6821, weather: "cloudy", tempBase: 16, humidity: 62, wind: 12, pressure: 1013, uv: 4, minZoom: 3.5, forecast: [] },
    { id: "barcelona", name: "Barcelona", country: "Spain", lat: 41.3851, lng: 2.1734, weather: "sunny", tempBase: 22, humidity: 60, wind: 14, pressure: 1014, uv: 5, minZoom: 3.5, forecast: [] },
    { id: "milan", name: "Milan", country: "Italy", lat: 45.4642, lng: 9.1900, weather: "cloudy", tempBase: 19, humidity: 58, wind: 8, pressure: 1014, uv: 4, minZoom: 3.5, forecast: [] },
    { id: "manchester", name: "Manchester", country: "United Kingdom", lat: 53.4808, lng: -2.2426, weather: "rainy", tempBase: 12, humidity: 80, wind: 24, pressure: 1008, uv: 2, minZoom: 3.5, forecast: [] },
    { id: "edinburgh", name: "Edinburgh", country: "United Kingdom", lat: 55.9533, lng: -3.1883, weather: "rainy", tempBase: 10, humidity: 84, wind: 22, pressure: 1007, uv: 2, minZoom: 3.5, forecast: [] },

    // --- EUROPE LOCAL CITIES (Tier 3 - High Density - Zoom 5.0+) ---
    // Belgium Local
    { id: "antwerp", name: "Antwerp", country: "Belgium", lat: 51.2194, lng: 4.4025, weather: "rainy", tempBase: 13, humidity: 79, wind: 16, pressure: 1010, uv: 3, minZoom: 5.0, forecast: [] },
    { id: "ghent", name: "Ghent", country: "Belgium", lat: 51.0543, lng: 3.7174, weather: "rainy", tempBase: 13, humidity: 81, wind: 15, pressure: 1009, uv: 3, minZoom: 5.0, forecast: [] },
    { id: "liege", name: "Liege", country: "Belgium", lat: 50.6326, lng: 5.5797, weather: "rainy", tempBase: 12, humidity: 83, wind: 19, pressure: 1009, uv: 2, minZoom: 5.0, forecast: [] },
    { id: "bruges", name: "Bruges", country: "Belgium", lat: 51.2093, lng: 3.2247, weather: "rainy", tempBase: 13, humidity: 82, wind: 22, pressure: 1010, uv: 3, minZoom: 5.0, forecast: [] },
    // Netherlands Local
    { id: "rotterdam", name: "Rotterdam", country: "Netherlands", lat: 51.9244, lng: 4.4777, weather: "rainy", tempBase: 13, humidity: 80, wind: 21, pressure: 1010, uv: 3, minZoom: 5.0, forecast: [] },
    { id: "utrecht", name: "Utrecht", country: "Netherlands", lat: 52.0907, lng: 5.1214, weather: "rainy", tempBase: 13, humidity: 78, wind: 18, pressure: 1009, uv: 3, minZoom: 5.0, forecast: [] },
    { id: "eindhoven", name: "Eindhoven", country: "Netherlands", lat: 51.4416, lng: 5.4697, weather: "cloudy", tempBase: 14, humidity: 75, wind: 14, pressure: 1010, uv: 3, minZoom: 5.0, forecast: [] },
    { id: "thehague", name: "The Hague", country: "Netherlands", lat: 52.0705, lng: 4.3007, weather: "rainy", tempBase: 13, humidity: 81, wind: 24, pressure: 1010, uv: 3, minZoom: 5.0, forecast: [] },
    // France Local
    { id: "lille", name: "Lille", country: "France", lat: 50.6292, lng: 3.0573, weather: "rainy", tempBase: 14, humidity: 78, wind: 16, pressure: 1011, uv: 3, minZoom: 5.0, forecast: [] },
    { id: "strasbourg", name: "Strasbourg", country: "France", lat: 48.5734, lng: 7.7521, weather: "cloudy", tempBase: 15, humidity: 70, wind: 10, pressure: 1013, uv: 4, minZoom: 5.0, forecast: [] },
    { id: "nantes", name: "Nantes", country: "France", lat: 47.2184, lng: -1.5536, weather: "rainy", tempBase: 16, humidity: 82, wind: 18, pressure: 1012, uv: 4, minZoom: 5.0, forecast: [] },
    { id: "montpellier", name: "Montpellier", country: "France", lat: 43.6108, lng: 3.8767, weather: "sunny", tempBase: 20, humidity: 55, wind: 15, pressure: 1014, uv: 6, minZoom: 5.0, forecast: [] },
    { id: "rennes", name: "Rennes", country: "France", lat: 48.1173, lng: -1.6778, weather: "rainy", tempBase: 15, humidity: 80, wind: 14, pressure: 1011, uv: 3, minZoom: 5.0, forecast: [] },
    { id: "reims", name: "Reims", country: "France", lat: 49.2583, lng: 4.0317, weather: "cloudy", tempBase: 15, humidity: 72, wind: 12, pressure: 1012, uv: 4, minZoom: 5.0, forecast: [] },
    { id: "castres", name: "Castres", country: "France", lat: 43.6076, lng: 2.2428, weather: "sunny", tempBase: 19, humidity: 58, wind: 10, pressure: 1015, uv: 5, minZoom: 5.0, forecast: [] },
    // Germany Local
    { id: "hamburg", name: "Hamburg", country: "Germany", lat: 53.5511, lng: 9.9937, weather: "rainy", tempBase: 12, humidity: 80, wind: 20, pressure: 1009, uv: 2, minZoom: 5.0, forecast: [] },
    { id: "cologne", name: "Cologne", country: "Germany", lat: 50.9375, lng: 6.9603, weather: "cloudy", tempBase: 15, humidity: 68, wind: 12, pressure: 1011, uv: 3, minZoom: 5.0, forecast: [] },
    { id: "stuttgart", name: "Stuttgart", country: "Germany", lat: 48.7758, lng: 9.1829, weather: "cloudy", tempBase: 15, humidity: 65, wind: 10, pressure: 1013, uv: 4, minZoom: 5.0, forecast: [] },
    { id: "dusseldorf", name: "Dusseldorf", country: "Germany", lat: 51.2271, lng: 6.7735, weather: "cloudy", tempBase: 15, humidity: 68, wind: 12, pressure: 1011, uv: 3, minZoom: 5.0, forecast: [] },
    { id: "dresden", name: "Dresden", country: "Germany", lat: 51.0504, lng: 13.7373, weather: "cloudy", tempBase: 14, humidity: 64, wind: 10, pressure: 1012, uv: 3, minZoom: 5.0, forecast: [] },
    // UK Local
    { id: "birmingham", name: "Birmingham", country: "United Kingdom", lat: 52.4862, lng: -1.8904, weather: "rainy", tempBase: 12, humidity: 82, wind: 19, pressure: 1009, uv: 2, minZoom: 5.0, forecast: [] },
    { id: "glasgow", name: "Glasgow", country: "United Kingdom", lat: 55.8642, lng: -4.2518, weather: "rainy", tempBase: 10, humidity: 86, wind: 22, pressure: 1006, uv: 2, minZoom: 5.0, forecast: [] },
    { id: "leeds", name: "Leeds", country: "United Kingdom", lat: 53.8008, lng: -1.5491, weather: "rainy", tempBase: 11, humidity: 81, wind: 20, pressure: 1008, uv: 2, minZoom: 5.0, forecast: [] },
    { id: "bristol", name: "Bristol", country: "United Kingdom", lat: 51.4545, lng: -2.5879, weather: "rainy", tempBase: 13, humidity: 83, wind: 18, pressure: 1010, uv: 3, minZoom: 5.0, forecast: [] },
    { id: "belfast", name: "Belfast", country: "United Kingdom", lat: 54.5973, lng: -5.9301, weather: "rainy", tempBase: 11, humidity: 85, wind: 20, pressure: 1007, uv: 2, minZoom: 5.0, forecast: [] },
    // Spain Local
    { id: "seville", name: "Seville", country: "Spain", lat: 37.3891, lng: -5.9845, weather: "sunny", tempBase: 27, humidity: 28, wind: 10, pressure: 1016, uv: 8, minZoom: 5.0, forecast: [] },
    { id: "valencia", name: "Valencia", country: "Spain", lat: 39.4699, lng: -0.3763, weather: "sunny", tempBase: 23, humidity: 55, wind: 12, pressure: 1015, uv: 6, minZoom: 5.0, forecast: [] },
    { id: "malaga", name: "Malaga", country: "Spain", lat: 36.7213, lng: -4.4214, weather: "sunny", tempBase: 24, humidity: 50, wind: 14, pressure: 1016, uv: 7, minZoom: 5.0, forecast: [] },
    { id: "zaragoza", name: "Zaragoza", country: "Spain", lat: 41.6488, lng: -0.8891, weather: "sunny", tempBase: 24, humidity: 38, wind: 12, pressure: 1015, uv: 6, minZoom: 5.0, forecast: [] },
    // Italy Local
    { id: "venice", name: "Venice", country: "Italy", lat: 45.4408, lng: 12.3155, weather: "sunny", tempBase: 20, humidity: 62, wind: 10, pressure: 1015, uv: 5, minZoom: 5.0, forecast: [] },
    { id: "florence", name: "Florence", country: "Italy", lat: 43.7696, lng: 11.2558, weather: "sunny", tempBase: 22, humidity: 48, wind: 8, pressure: 1015, uv: 6, minZoom: 5.0, forecast: [] },
    { id: "naples", name: "Naples", country: "Italy", lat: 40.8518, lng: 14.2681, weather: "sunny", tempBase: 23, humidity: 52, wind: 12, pressure: 1014, uv: 6, minZoom: 5.0, forecast: [] },
    { id: "turin", name: "Turin", country: "Italy", lat: 45.0703, lng: 7.6869, weather: "cloudy", tempBase: 18, humidity: 58, wind: 8, pressure: 1014, uv: 4, minZoom: 5.0, forecast: [] },
    // Switzerland Local
    { id: "zurich", name: "Zurich", country: "Switzerland", lat: 47.3769, lng: 8.5417, weather: "cloudy", tempBase: 15, humidity: 65, wind: 10, pressure: 1013, uv: 4, minZoom: 5.0, forecast: [] },
    { id: "geneva", name: "Geneva", country: "Switzerland", lat: 46.2044, lng: 6.1432, weather: "cloudy", tempBase: 16, humidity: 62, wind: 12, pressure: 1013, uv: 4, minZoom: 5.0, forecast: [] },
    { id: "bern", name: "Bern", country: "Switzerland", lat: 46.9480, lng: 7.4474, weather: "cloudy", tempBase: 15, humidity: 64, wind: 8, pressure: 1013, uv: 4, minZoom: 5.0, forecast: [] },

    // --- NORTH AMERICA MAIN HUBS ---
    { id: "newyork", name: "New York", country: "United States", lat: 40.7128, lng: -74.0060, weather: "sunny", tempBase: 19, humidity: 45, wind: 16, pressure: 1016, uv: 5, minZoom: 1, forecast: [] },
    { id: "losangeles", name: "Los Angeles", country: "United States", lat: 34.0522, lng: -118.2437, weather: "sunny", tempBase: 24, humidity: 55, wind: 11, pressure: 1014, uv: 8, minZoom: 1, forecast: [] },
    { id: "chicago", name: "Chicago", country: "United States", lat: 41.8781, lng: -87.6298, weather: "cloudy", tempBase: 14, humidity: 58, wind: 22, pressure: 1012, uv: 4, minZoom: 1, forecast: [] },
    { id: "toronto", name: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832, weather: "cloudy", tempBase: 12, humidity: 62, wind: 18, pressure: 1013, uv: 3, minZoom: 1, forecast: [] },
    { id: "mexicocity", name: "Mexico City", country: "Mexico", lat: 19.4326, lng: -99.1332, weather: "stormy", tempBase: 23, humidity: 50, wind: 12, pressure: 1015, uv: 9, minZoom: 1, forecast: [] },

    // --- NORTH AMERICA REGIONAL HUBS (Zoom-dependent - Zoom 3.5+) ---
    { id: "sanfrancisco", name: "San Francisco", country: "United States", lat: 37.7749, lng: -122.4194, weather: "cloudy", tempBase: 16, humidity: 72, wind: 20, pressure: 1013, uv: 5, minZoom: 3.5, forecast: [] },
    { id: "miami", name: "Miami", country: "United States", lat: 25.7617, lng: -80.1918, weather: "stormy", tempBase: 28, humidity: 78, wind: 18, pressure: 1011, uv: 8, minZoom: 3.5, forecast: [] },
    { id: "seattle", name: "Seattle", country: "United States", lat: 47.6062, lng: -122.3321, weather: "rainy", tempBase: 11, humidity: 82, wind: 14, pressure: 1009, uv: 2, minZoom: 3.5, forecast: [] },
    { id: "boston", name: "Boston", country: "United States", lat: 42.3601, lng: -71.0589, weather: "sunny", tempBase: 17, humidity: 50, wind: 15, pressure: 1015, uv: 4, minZoom: 3.5, forecast: [] },
    { id: "vancouver", name: "Vancouver", country: "Canada", lat: 49.2827, lng: -123.1207, weather: "rainy", tempBase: 12, humidity: 78, wind: 10, pressure: 1010, uv: 2, minZoom: 3.5, forecast: [] },

    // --- SOUTH AMERICA ---
    { id: "rio", name: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lng: -43.1729, weather: "sunny", tempBase: 27, humidity: 62, wind: 14, pressure: 1012, uv: 8, minZoom: 1, forecast: [] },
    { id: "buenosaires", name: "Buenos Aires", country: "Argentina", lat: -34.6037, lng: -58.3816, weather: "sunny", tempBase: 20, humidity: 54, wind: 16, pressure: 1016, uv: 5, minZoom: 1, forecast: [] },
    { id: "bogota", name: "Bogota", country: "Colombia", lat: 4.7110, lng: -74.0721, weather: "rainy", tempBase: 15, humidity: 80, wind: 10, pressure: 1015, uv: 5, minZoom: 1, forecast: [] },

    // --- ASIA MAIN HUBS ---
    { id: "tokyo", name: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503, weather: "sunny", tempBase: 18, humidity: 52, wind: 12, pressure: 1016, uv: 5, minZoom: 1, forecast: [] },
    { id: "beijing", name: "Beijing", country: "China", lat: 39.9042, lng: 116.4074, weather: "sunny", tempBase: 22, humidity: 28, wind: 15, pressure: 1014, uv: 6, minZoom: 1, forecast: [] },
    { id: "mumbai", name: "Mumbai", country: "India", lat: 19.0760, lng: 72.8777, weather: "rainy", tempBase: 30, humidity: 85, wind: 20, pressure: 1008, uv: 7, minZoom: 1, forecast: [] },
    { id: "singapore", name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, weather: "stormy", tempBase: 29, humidity: 78, wind: 14, pressure: 1009, uv: 8, minZoom: 1, forecast: [] },
    { id: "dubai", name: "Dubai", country: "United Arab Emirates", lat: 25.2048, lng: 55.2708, weather: "sunny", tempBase: 34, humidity: 40, wind: 18, pressure: 1012, uv: 9, minZoom: 1, forecast: [] },

    // --- ASIA REGIONAL HUBS (Zoom-dependent - Zoom 3.5+) ---
    { id: "osaka", name: "Osaka", country: "Japan", lat: 34.6937, lng: 135.5022, weather: "cloudy", tempBase: 19, humidity: 56, wind: 10, pressure: 1015, uv: 4, minZoom: 3.5, forecast: [] },
    { id: "shanghai", name: "Shanghai", country: "China", lat: 31.2304, lng: 121.4737, weather: "rainy", tempBase: 20, humidity: 74, wind: 16, pressure: 1011, uv: 4, minZoom: 3.5, forecast: [] },

    // --- AFRICA ---
    { id: "cairo", name: "Cairo", country: "Egypt", lat: 30.0444, lng: 31.2357, weather: "sunny", tempBase: 29, humidity: 38, wind: 16, pressure: 1014, uv: 8, minZoom: 1, forecast: [] },
    { id: "johannesburg", name: "Johannesburg", country: "South Africa", lat: -26.2041, lng: 28.0473, weather: "sunny", tempBase: 17, humidity: 42, wind: 10, pressure: 1020, uv: 5, minZoom: 1, forecast: [] },
    { id: "nairobi", name: "Nairobi", country: "Kenya", lat: -1.2921, lng: 36.8219, weather: "cloudy", tempBase: 20, humidity: 60, wind: 12, pressure: 1015, uv: 6, minZoom: 1, forecast: [] },

    // --- OCEANIA MAIN & REGIONAL ---
    { id: "sydney", name: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093, weather: "sunny", tempBase: 19, humidity: 58, wind: 18, pressure: 1018, uv: 5, minZoom: 1, forecast: [] },
    { id: "auckland", name: "Auckland", country: "New Zealand", lat: -36.8485, lng: 174.7633, weather: "rainy", tempBase: 15, humidity: 76, wind: 24, pressure: 1011, uv: 3, minZoom: 1, forecast: [] },
    { id: "melbourne", name: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631, weather: "cloudy", tempBase: 16, humidity: 62, wind: 20, pressure: 1015, uv: 4, minZoom: 3.5, forecast: [] }
];

// Helper to dynamically simulate a highly realistic 7-day weather forecast starting tomorrow
function generateDynamicForecast(region, numDays = 7) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    const forecastList = [];
    
    // Seed generator slightly based on region lat/lng for consistent results
    let seed = Math.abs(Math.sin(region.lat) * Math.cos(region.lng));
    
    for (let i = 1; i <= numDays; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        const dayLabel = daysOfWeek[nextDate.getDay()];
        
        // Organic oscillations around the regional baseline temperature
        const factor = seed * 10 + i;
        const tempVariation = Math.round((Math.sin(factor * 0.9) * 4) + (Math.cos(factor * 0.5) * 2));
        const tempHigh = region.tempBase + 3 + tempVariation;
        const tempLow = region.tempBase - 4 + Math.round(tempVariation / 1.5);
        
        // Logical weather progression transitions
        let weather = region.weather;
        const rand = Math.abs(Math.sin(factor * 7.7)); // pseudo-random deterministic-ish float 0..1
        
        if (i > 1 && rand > 0.35) {
            if (region.weather === "sunny") {
                weather = rand > 0.75 ? "cloudy" : "sunny";
            } else if (region.weather === "rainy") {
                weather = rand > 0.55 ? "cloudy" : (rand > 0.85 ? "stormy" : "rainy");
            } else if (region.weather === "snowy") {
                weather = rand > 0.65 ? "cloudy" : "snowy";
            } else if (region.weather === "stormy") {
                weather = rand > 0.5 ? "rainy" : "stormy";
            } else { // cloudy
                weather = rand > 0.65 ? "sunny" : (rand > 0.85 ? "rainy" : "cloudy");
            }
        }
        
        forecastList.push({
            day: dayLabel,
            weather: weather,
            tempHigh: tempHigh,
            tempLow: tempLow
        });
    }
    return forecastList;
}

// 2. STATE MANAGEMENT
let appState = {
    selectedRegion: null,     // Currently focused region object
    temperatureUnit: "C",     // "C" or "F"
    timeOfDay: 1,             // 0: Morning, 1: Afternoon, 2: Evening, 3: Night
    activeFilter: "all",      // "all", "sunny", "cloudy", "rainy", "snowy"
    tempOffsets: { 0: 0, 1: 3, 2: -2, 3: -7 }, // Time of day shifts
    selectedForecastDay: -1   // -1 means Today, 0..6 means forecast index
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

// UI Element selectors (Populated on DOMContentLoaded)
let dom = {};

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
    const offset = appState.tempOffsets[appState.timeOfDay];
    if (appState.selectedForecastDay !== -1 && region.forecast && region.forecast[appState.selectedForecastDay]) {
        return region.forecast[appState.selectedForecastDay].tempHigh + offset;
    }
    return region.tempBase + offset;
}

function getAdjustedWeather(region) {
    if (appState.selectedForecastDay !== -1 && region.forecast && region.forecast[appState.selectedForecastDay]) {
        return region.forecast[appState.selectedForecastDay].weather;
    }
    return region.weather;
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
    // Coordinate center, global zoom
    mapInstance = L.map('map', {
        zoomControl: true,
        attributionControl: true,
        minZoom: 2,
        maxZoom: 18,
        zoomSnap: 0.1,
        worldCopyJump: true
    }).setView([20.0, 0.0], 2.8);

    // Apply Esri World Imagery (Satellite) tile set
    L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 18
    }).addTo(mapInstance);

    // Apply Boundaries and Labels overlay
    L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Labels &copy; Esri',
        maxZoom: 18
    }).addTo(mapInstance);

    // Reposition zoom controls to bottomright to stay completely clear of left sidebar
    mapInstance.zoomControl.setPosition('bottomright');

    // Create markers for all cities
    renderAllMarkers();

    // Map click collapses active selections
    mapInstance.on("click", (e) => {
        // Prevent action on clicking custom shapes
        if (e.originalEvent.target.closest('.weather-marker-container')) return;
        
        deselectActiveRegion();
    });

    // Dynamic visibility binding and live weather fetching on zoomend / moveend
    mapInstance.on("zoomend", () => {
        updateMarkersVisibility();
        fetchVisibleMarkersWeather();
    });
    
    mapInstance.on("moveend", () => {
        fetchVisibleMarkersWeather();
    });
}

function generateMarkerHtml(region) {
    const temp = getAdjustedTemp(region);
    const weatherState = getAdjustedWeather(region);
    const iconClass = WEATHER_ICONS[weatherState];
    const isSelected = appState.selectedRegion && appState.selectedRegion.id === region.id;
    
    return `
        <div class="weather-marker-container ${isSelected ? 'selected' : ''} ${weatherState}" id="marker-${region.id}">
            <div class="weather-marker-pulse ${weatherState}"></div>
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

        const marker = L.marker([region.lat, region.lng], { icon: markerIcon });
        
        // Save reference
        markersGroup[region.id] = marker;

        // Bind clicks
        marker.on("click", (e) => {
            L.DomEvent.stopPropagation(e);
            selectRegion(region);
        });
    });
    
    updateMarkersVisibility();
    calculateGlobalStats();
}

function updateMarkerDisplay(region) {
    const marker = markersGroup[region.id];
    if (marker) {
        const isFiltered = appState.activeFilter !== "all" && getAdjustedWeather(region) !== appState.activeFilter;
        
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

function updateMarkersVisibility() {
    const currentZoom = mapInstance ? mapInstance.getZoom() : 3;
    REGIONS_DATABASE.forEach(region => {
        const marker = markersGroup[region.id];
        if (marker) {
            const minZoomRequired = region.minZoom || 1;
            const isFiltered = appState.activeFilter !== "all" && getAdjustedWeather(region) !== appState.activeFilter;
            
            if (currentZoom < minZoomRequired || isFiltered) {
                if (mapInstance.hasLayer(marker)) {
                    mapInstance.removeLayer(marker);
                }
            } else {
                if (!mapInstance.hasLayer(marker)) {
                    mapInstance.addLayer(marker);
                }
            }
        }
    });
}

function updateAllMarkers() {
    REGIONS_DATABASE.forEach(region => {
        updateMarkerDisplay(region);
    });
    updateMarkersVisibility();
    calculateGlobalStats();
}

// ==========================================================================
// 5. REGION SELECTION & SIDEBAR CONTROLLER
// ==========================================================================

function selectRegion(region) {
    console.log("Region selected:", region.name, "Lat:", region.lat, "Lng:", region.lng);
    const previouslySelected = appState.selectedRegion;
    appState.selectedRegion = region;
    
    // Reset selected forecast day when switching cities
    if (previouslySelected !== region) {
        appState.selectedForecastDay = -1;
    }
    
    // Focus map on region with offset to prevent sidebar cover
    let focusLatLng = L.latLng(region.lat, region.lng);
    
    // Shift coordinate focus slightly depending on zoom to balance sidebar
    if (window.innerWidth > 1024) {
        const currentZoom = mapInstance.getZoom();
        const lngShift = currentZoom > 5 ? 1.5 : 3.0; // Positive shift to move the map right (since sidebar is on the left!)
        focusLatLng = L.latLng(region.lat, region.lng - lngShift);
    }
    
    mapInstance.flyTo(focusLatLng, Math.max(5.5, mapInstance.getZoom()), {
        animate: true,
        duration: 1.0
    });

    // Show details panel, hide instructions placeholder
    if (dom.cityDetailsContent) dom.cityDetailsContent.style.display = "block";
    if (dom.emptyStateInstruction) dom.emptyStateInstruction.style.display = "none";
    if (dom.cityDetailsContainer) dom.cityDetailsContainer.classList.remove("empty");

    // Fetch and populate real-time weather immediately!
    fetchRealTimeWeather(region).then(() => {
        populateSidebar(region);
        setAmbientWeather(getAdjustedWeather(region));
    });

    // Update marker highlights
    if (previouslySelected) {
        updateMarkerDisplay(previouslySelected);
    }
    updateMarkerDisplay(region);

    // Initial populate with cached/mock database values
    populateSidebar(region);
    
    // Smoothly expand sidebar and ensure toggle icon points left (collapse mode)
    dom.sidebar.classList.remove("collapsed");
    dom.sidebarToggle.querySelector("i").className = "fa-solid fa-chevron-left";

    // Set full screen particle canvas trigger using dynamic forecast weather
    setAmbientWeather(getAdjustedWeather(region));
    
    // Auto populate search box with name
    dom.search.value = region.name;
    dom.clearSearch.style.display = "block";
    dom.searchAutocomplete.style.display = "none";
}

function deselectActiveRegion() {
    if (!appState.selectedRegion) return;
    
    const prev = appState.selectedRegion;
    console.log("Deselected active region. Previous:", prev.name);
    appState.selectedRegion = null;
    appState.selectedForecastDay = -1;
    
    // Reset Date Slider to Today globally
    if (window.setGlobalForecastDay) {
        window.setGlobalForecastDay(-1);
    }
    
    updateMarkerDisplay(prev);
    
    // Reset background ambient weather to global average
    calculateGlobalStats();
    const firstRegion = REGIONS_DATABASE[0];
    setAmbientWeather(getAdjustedWeather(firstRegion));
    
    // Hide details panel, show instructions placeholder
    if (dom.cityDetailsContent) dom.cityDetailsContent.style.display = "none";
    if (dom.emptyStateInstruction) dom.emptyStateInstruction.style.display = "flex";
    if (dom.cityDetailsContainer) dom.cityDetailsContainer.classList.add("empty");
    
    // Collapse sidebar and swap toggle icon to chevron-right (expand mode)
    dom.sidebar.classList.add("collapsed");
    dom.sidebarToggle.querySelector("i").className = "fa-solid fa-chevron-right";
    
    // Clear search
    dom.search.value = "";
    dom.clearSearch.style.display = "none";
}

function populateSidebar(region) {
    dom.sideRegionName.innerText = region.name;
    
    // Add date name context to the country text
    const isForecastActive = appState.selectedForecastDay !== -1;
    const dayName = isForecastActive ? region.forecast[appState.selectedForecastDay].day : "Today";
    dom.sideRegionCountry.innerText = `${region.country} (${dayName})`;
    
    const currentTemp = getAdjustedTemp(region);
    dom.sideTemp.innerText = formatTempDisplay(currentTemp);
    
    // Capitalize weather status using dynamic weather
    const currentWeather = getAdjustedWeather(region);
    dom.sideDesc.innerText = currentWeather.toUpperCase() + (currentWeather === "rainy" ? " SHOWERS" : (currentWeather === "sunny" ? " CONDITIONS" : " SKIES"));
    
    // Metrics updates
    dom.metricHumidity.innerText = `${region.humidity}%`;
    dom.metricWind.innerText = `${region.wind} km/h`;
    dom.metricPressure.innerText = `${region.pressure} hPa`;
    
    let uvRating = "Low";
    if (region.uv >= 3 && region.uv <= 5) uvRating = "Moderate";
    else if (region.uv >= 6) uvRating = "High";
    dom.metricUv.innerText = `${region.uv} (${uvRating})`;

    // Inject active SVG Animation using dynamic weather
    dom.sideWeatherArt.innerHTML = WEATHER_SVG_TEMPLATES[currentWeather] || WEATHER_SVG_TEMPLATES.cloudy;
    dom.sideWeatherArt.className = `weather-art ${currentWeather}`;

    // Render 7-Day Forecast items
    dom.forecastList.innerHTML = "";
    const offset = appState.tempOffsets[appState.timeOfDay];
    
    region.forecast.forEach((f, index) => {
        const item = document.createElement("div");
        const isSelected = appState.selectedForecastDay === index;
        item.className = `forecast-item ${isSelected ? 'active-forecast-day' : ''}`;
        item.style.cursor = "pointer";
        
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
        
        // Add click listener to select/toggle the forecast day preview!
        item.addEventListener("click", () => {
            const newDay = appState.selectedForecastDay === index ? -1 : index;
            if (window.setGlobalForecastDay) {
                window.setGlobalForecastDay(newDay);
            } else {
                appState.selectedForecastDay = newDay;
                populateSidebar(region);
                updateAllMarkers();
                setAmbientWeather(getAdjustedWeather(region));
            }
        });
        
        dom.forecastList.appendChild(item);
    });

    // Sync Sandbox Controls using dynamic weather
    dom.sandboxWeatherBtns.forEach(btn => {
        if (btn.dataset.weather === currentWeather) {
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
    console.log("Setting time of day index:", index, "Active class:", activeClass);
    
    appState.timeOfDay = index;

    // 1. Update active tick highlight styles
    if (dom.timeTicks && dom.timeTicks.length > 0) {
        dom.timeTicks.forEach((tick, i) => {
            if (i === index) {
                tick.classList.add("active");
            } else {
                tick.classList.remove("active");
            }
        });
    }

    // 2. Adjust slider value
    if (dom.timeSlider) {
        dom.timeSlider.value = index;
    }

    // 3. Update descriptive branding label
    if (dom.currentTimeLabel) {
        const labels = ["07:30 (Morning)", "14:00 (Afternoon)", "18:45 (Evening)", "23:15 (Night)"];
        dom.currentTimeLabel.innerText = labels[index];
    }

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
            console.log("Active weather category filter changed to:", filter);
            
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
            console.log("Sandbox weather changed for region:", appState.selectedRegion.name, "to:", selectedWeather);
            
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
        console.log("Sandbox temp changed for region:", appState.selectedRegion.name, "to:", val);
        
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
    const sidebarEl = document.getElementById("dashboard-sidebar");
    const sidebarToggleEl = document.getElementById("sidebar-toggle");
    
    console.log("wireUiListeners executed. sidebarEl:", sidebarEl, "sidebarToggleEl:", sidebarToggleEl);

    // Restore saved sidebar collapsed state on load
    try {
        const isCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
        console.log("Restored state from localStorage. isCollapsed:", isCollapsed);
        if (isCollapsed) {
            if (sidebarEl) sidebarEl.classList.add("collapsed");
            const icon = sidebarToggleEl ? sidebarToggleEl.querySelector("i") : null;
            if (icon) icon.className = "fa-solid fa-chevron-right";
        }
    } catch (e) {
        console.warn("Could not restore sidebar state from localStorage:", e);
    }

    // 1. Collapsible Sidebar toggle (Always clickable, collapses left sidebar out of screen)
    if (sidebarToggleEl) {
        sidebarToggleEl.addEventListener("click", () => {
            console.log("Sidebar toggle button clicked!");
            if (!sidebarEl) {
                console.error("dashboard-sidebar element is missing!");
                return;
            }
            const isCollapsed = sidebarEl.classList.toggle("collapsed");
            console.log("Toggled collapsed class. New state (isCollapsed):", isCollapsed);
            
            const icon = sidebarToggleEl.querySelector("i");
            if (icon) {
                icon.className = isCollapsed 
                    ? "fa-solid fa-chevron-right" 
                    : "fa-solid fa-chevron-left";
            }
            try {
                localStorage.setItem("sidebarCollapsed", isCollapsed);
                console.log("Saved sidebarCollapsed to localStorage:", isCollapsed);
            } catch (e) {
                console.warn("Could not save sidebar state to localStorage:", e);
            }
        });
    } else {
        console.error("sidebar-toggle element is missing in the DOM!");
    }

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
    if (dom.timeSlider) {
        dom.timeSlider.addEventListener("input", (e) => {
            setTimeOfDay(parseInt(e.target.value));
        });
    }

    // Direct tick clicks
    if (dom.timeTicks && dom.timeTicks.length > 0) {
        dom.timeTicks.forEach(tick => {
            tick.addEventListener("click", () => {
                const timeVal = parseInt(tick.dataset.time);
                setTimeOfDay(timeVal);
            });
        });
    }
}

// 11. LIVE WEATHER API FETCHING (Open-Meteo Integration)
// ==========================================================================

function mapWeatherCode(code) {
    // Translates standard WMO codes to sunny, cloudy, rainy, snowy, stormy
    if (code === 0) return "sunny";
    if ([1, 2, 3, 45, 48].includes(code)) return "cloudy";
    if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "rainy";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "snowy";
    if ([95, 96, 99].includes(code)) return "stormy";
    return "cloudy"; // Default fallback
}

async function fetchRealTimeWeather(region) {
    const marker = markersGroup[region.id];
    let markerElement = marker ? marker.getElement() : null;
    let container = markerElement ? markerElement.querySelector('.weather-marker-container') : null;
    
    // Add pulsing loading indicator on map marker during fetch
    if (container) container.classList.add('loading');
    
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${region.lat}&longitude=${region.lng}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`);
        if (!response.ok) throw new Error("Weather API failed");
        
        const data = await response.json();
        
        if (data && data.current_weather) {
            const current = data.current_weather;
            region.tempBase = Math.round(current.temperature);
            region.weather = mapWeatherCode(current.weathercode);
            console.log("Successfully fetched live Open-Meteo weather for:", region.name, "Temp:", region.tempBase, "Weather:", region.weather);
            region.wind = Math.round(current.windspeed);
            
            // Populate vital metrics mock-offsets derived from live stats
            region.pressure = 1012 + Math.round((Math.random() - 0.5) * 8);
            region.humidity = 60 + Math.round((Math.random() - 0.5) * 30);
            
            if (data.daily) {
                const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                const today = new Date();
                region.forecast = [];
                
                for (let i = 0; i < 7; i++) {
                    const nextDate = new Date(today);
                    nextDate.setDate(today.getDate() + i + 1);
                    const dayLabel = daysOfWeek[nextDate.getDay()];
                    
                    region.forecast.push({
                        day: dayLabel,
                        weather: mapWeatherCode(data.daily.weathercode[i]),
                        tempHigh: Math.round(data.daily.temperature_2m_max[i]),
                        tempLow: Math.round(data.daily.temperature_2m_min[i])
                    });
                }
            }
            
            // Render specific marker element immediately
            updateMarkerDisplay(region);
            calculateGlobalStats();
            return true;
        }
    } catch (err) {
        console.warn("Open-Meteo fetching failed for", region.name, err);
    } finally {
        if (container) container.classList.remove('loading');
    }
    return false;
}

async function fetchVisibleMarkersWeather() {
    if (!mapInstance) return;
    const bounds = mapInstance.getBounds();
    const currentZoom = mapInstance.getZoom();
    
    REGIONS_DATABASE.forEach(async (region) => {
        const marker = markersGroup[region.id];
        if (marker && mapInstance.hasLayer(marker)) {
            const minZoomRequired = region.minZoom || 1;
            
            // Only fetch weather if marker is visible on viewport and active
            if (currentZoom >= minZoomRequired && bounds.contains(marker.getLatLng())) {
                await fetchRealTimeWeather(region);
            }
        }
    });
}

// 11. GLOBAL FORECAST SLIDER CONTROLLER
// ==========================================================================

function initDateSlider() {
    // 1. Populate date ticks dynamically
    dom.dateTicks.innerHTML = "";
    
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    
    // Today tick
    const todayTick = document.createElement("span");
    todayTick.className = "date-tick active";
    todayTick.dataset.day = "-1";
    todayTick.innerText = "Today";
    dom.dateTicks.appendChild(todayTick);
    
    // Day 1 to Day 6 ticks
    for (let i = 0; i < 6; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i + 1);
        const dayLabel = daysOfWeek[nextDate.getDay()];
        
        const tick = document.createElement("span");
        tick.className = "date-tick";
        tick.dataset.day = i.toString();
        tick.innerText = dayLabel;
        dom.dateTicks.appendChild(tick);
    }
    
    const dateTicksElements = document.querySelectorAll("#date-ticks span");
    
    // Helper to update Date UI globally
    function setForecastDay(dayIndex) {
        appState.selectedForecastDay = dayIndex;
        dom.dateSlider.value = dayIndex;
        
        // Update labels
        let dayName = "Today";
        if (dayIndex !== -1) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + dayIndex + 1);
            dayName = daysOfWeek[nextDate.getDay()] + " (Forecast)";
        }
        dom.currentDateLabel.innerText = dayName;
        
        // Update ticks active states
        dateTicksElements.forEach(tick => {
            if (parseInt(tick.dataset.day) === dayIndex) {
                tick.classList.add("active");
            } else {
                tick.classList.remove("active");
            }
        });
        
        // Refresh all markers to show the selected day's temperatures and icons!
        updateAllMarkers();
        
        // Synchronize sidebar if open
        if (appState.selectedRegion) {
            populateSidebar(appState.selectedRegion);
            
            // Adjust particle canvas to match weather conditions of the selected forecast day
            setAmbientWeather(getAdjustedWeather(appState.selectedRegion));
        } else {
            // Adjust particle canvas to match global weather type average
            calculateGlobalStats(); 
            const firstRegion = REGIONS_DATABASE[0];
            setAmbientWeather(getAdjustedWeather(firstRegion));
        }
    }
    
    // Input listener on range slider
    dom.dateSlider.addEventListener("input", (e) => {
        setForecastDay(parseInt(e.target.value));
    });
    
    // Direct tick clicks
    dateTicksElements.forEach(tick => {
        tick.addEventListener("click", () => {
            setForecastDay(parseInt(tick.dataset.day));
        });
    });
    
    // Expose setter globally or to allow synchronization from sidebar clicks
    window.setGlobalForecastDay = setForecastDay;
}

// Bootstrap Aether Weather site
function bootstrapApp() {
    // Populate static DOM selectors securely once DOM is fully constructed
    dom = {
        search: document.getElementById("search-input"),
        clearSearch: document.getElementById("clear-search"),
        searchAutocomplete: document.getElementById("search-autocomplete"),
        filterBtns: document.querySelectorAll(".filter-btn"),
        sidebar: document.getElementById("dashboard-sidebar"),
        sidebarToggle: document.getElementById("sidebar-toggle"),
        cityDetailsContainer: document.getElementById("selected-city-details"),
        cityDetailsContent: document.querySelector(".city-details-content"),
        emptyStateInstruction: document.querySelector(".empty-state-instruction"),
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
        dateSlider: document.getElementById("date-slider"),
        dateTicks: document.getElementById("date-ticks"),
        currentDateLabel: document.getElementById("current-date-label"),
        timeSlider: document.getElementById("time-slider"),
        currentTimeLabel: document.getElementById("current-time-label"),
        timeTicks: document.querySelectorAll(".time-ticks .tick"),
        totalRegions: document.getElementById("total-regions-count"),
        avgTemp: document.getElementById("avg-temp-val"),
        skyOverlay: document.getElementById("sky-overlay")
    };

    // Auto-generate realistic 7-day forecasts for all regions prior to initialization
    REGIONS_DATABASE.forEach(region => {
        region.forecast = generateDynamicForecast(region, 7);
    });

    // Init core Canvas particle engine
    initCanvasEngine();
    
    // Init Leaflet maps
    initMap();

    // Attach listeners
    wireUiListeners();
    initDateSlider();
    initSearchAndFilter();
    initSandboxControls();

    // Default general general average values
    calculateGlobalStats();

    // Set afternoon as default starting time
    setTimeOfDay(1);

    // Initial weather API fetch for all visible markers after a short rendering delay!
    setTimeout(fetchVisibleMarkersWeather, 500);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrapApp);
} else {
    bootstrapApp();
}
