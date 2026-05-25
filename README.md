# Aether Weather Dashboard

A premium, highly interactive, full-screen weather map dashboard of Europe and the world. Features a state-of-the-art glassmorphism collapsible sidebar, real-time weather integration via the public Open-Meteo API, a dynamic Canvas particle environment system, and tiered hierarchical zoom density.

![Aether Weather Preview](https://raw.githubusercontent.com/mbeulens/WeatherSite/dev/screenshot.png)

## Key Features

- 🛰️ **Full-Screen Esri Satellite Map**: Uses high-resolution Esri World Imagery with precise boundaries and labels as a complete background.
- 🎛️ **Unified Glassmorphic Sidebar**: Concentrates all interactive controls, statistics, and weather details in a single collapsible left card pill, keeping the rest of the map completely open.
- 🌦️ **Tiered Hierarchical Zoom Density**:
  - **Tier 1 (Zoom 1.0+)**: Major national capitals and global hubs (London, Paris, Berlin, Madrid, Rome, etc.).
  - **Tier 2 (Zoom 3.5+)**: Large regional centers (Marseille, Lyon, Munich, Barcelona, Milan, etc.).
  - **Tier 3 (Zoom 5.0+)**: Dense localized cities (Antwerp, Rotterdam, Lille, Hamburg, Seville, Florence, Zurich, Geneva, etc.).
- 📡 **Live Real-time API Integration**: Asynchronously retrieves real-time temperature, wind speeds, pressure, humidity, UV index, and true 7-day high/low forecasts from the public **Open-Meteo API** as you pan and zoom.
- 🌀 **Ambient Canvas Particle Engine**: Renders organic weather simulations (pulsing sunbeams, slow-drifting clouds, falling rain drops, storms) mapped dynamically to the selected region's weather state.
- 📅 **7-Day Future Timeline Matrix**: Drag or click the interactive date matrix slider to see forecast trends.
- ⏰ **Diurnal Time Slider**: Toggle between Morning, Afternoon, Evening, and Night, dynamically shifting map lighting and ambient environment colors.
- 🔍 **Predictive Search Autocomplete**: Search easily across 60+ global cities with live temperature readouts.

## Technology Stack

- **Frontend Core**: Standard HTML5 & Vanilla JavaScript
- **Styling**: Modern CSS3 (Glassmorphic variables, harmonious HSL palettes, smooth transformations, CSS Grid/Flexbox)
- **Map Library**: [Leaflet.js](https://leafletjs.com/) (initialized with sub-pixel snapping and zoom-level smoothing)
- **Map Base Tiles**: Esri World Imagery Satellite Map & Esri World Reference Places Boundaries Overlay
- **Weather Telemetry**: [Open-Meteo Public API](https://open-meteo.com/) (real-time weather fetches and daily forecasts)
- **Icons**: FontAwesome 6 Free

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/mbeulens/WeatherSite.git
   ```
2. Open `index.html` in your favorite web browser, or run a local development server:
   ```bash
   npx serve .
   ```
3. Control the experience using the left sidebar. Collapse the sidebar using the chevron arrow to enjoy 100% full-screen map visibility.

## Version History

- **v0.2.4**: Fixed API rate-limiting (HTTP 429) via 15-minute regional memory caching, map zoom/drag debouncing (350ms settle delay), and sequential paced request queue fetching (150ms delay).
- **v0.2.3**: Added `localStorage` state persistence, flicker-free DOM script injection, central bootstrap element registry, and extensive developer console tracing logs.
- **v0.2.2**: Fixed sidebar toggle button clipping by removing wrapper `overflow: hidden`.
- **v0.2.1**: Swapped floating cards for a single collapsible left sidebar and locked time of day permanently at noon.
- **v0.2.0**: Initial minor release (Unified glassmorphic layout, tiered zoom density, Open-Meteo API integration, 35+ dense cities).
- **v0.1.x**: Early drafts and floating dashboard layout iterations.

---
Developed by Aether Weather team.
