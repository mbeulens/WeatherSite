# Changelog

All notable changes to the Aether Weather Dashboard project will be documented in this file.

## [0.2.0] - 2026-05-25

### Added
- **Hierarchical 3-Tiered Zoom Visibilities**: Implemented Leaflet zoom-dependent filters (Capitals at Zoom 1.0+, Regional hubs at Zoom 3.5+, Local cities at Zoom 5.0+).
- **High-Density Database**: Added 35+ new highly localized European cities in France, Germany, United Kingdom, Belgium, Netherlands, Spain, Italy, and Switzerland.
- **Dynamic Local Weather Auto-Fetching**: Integrated map zoom and pan movement events (`zoomend` and `moveend`) to automatically trigger asynchronous weather API calls to Open-Meteo for newly visible markers.
- **Cache-Busting Resource Bump**: Standardized references to `style.css?v=1.2.0` in `index.html` to guarantee instant client-side refreshes.

## [0.1.8] - 2026-05-25

### Added
- **Unified Collapsible Left Sidebar**: Shifted all controls, branding, sliders, and telemetry blocks into a single left card console.
- **Open-Meteo Live API Integration**: Swapped all placeholder weather logic for authentic live fetches, displaying current data and true 7-day minimum/maximum forecasts.
- **Pulsing Marker Loading Indicators**: Created keyframe-animated pulsing loops surrounding marker badges while synchronization calls are active.
- **Center Focus Offsetting**: Shifted target map coordinates rightwards (`+ lngShift`) during city selection so the selected region centers perfectly in the open viewport space.

## [0.1.7] - 2026-05-25

### Added
- Center floating card panels and unified Forecast/Time controller blocks.
- Coordinated spacing adjustments for Amsterdam, Brussels, and London markers to prevent overlaps at low zoom.

## [0.1.6] - 2026-05-25

### Added
- Floating pill bars, Brussels and Amsterdam markers restoration, and interactive date forecast matrix clicks.

## [0.1.5] - 2026-05-25

### Added
- Local markers for Toulouse and Castres.
- Updated ESRI tile domains to standard services CDN.

## [0.1.4] - 2026-05-25

### Added
- Global map expansions, 7-day forecast slider mockups, and early zoom thresholds.

## [0.1.0] - [0.1.3] - 2026-05-25

### Added
- Initial project setups, Leaflet map initializations, and static layout designs.
