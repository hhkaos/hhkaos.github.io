---
sidebar_position: 6
title: Geo Developer superpowers
---
# Geo Developer superpowers 🦸

**This document aims to inspire and motivate developers** to explore the exciting world of geospatial development.

As developers, **we love to build software we can be proud of**, the kind that makes us say: “I was part of the team that created this!”. That pride can come from many things, for example, because the app:
* Has a great UX/UI.
* Perform well and scales.
* Solves a challenging technical problem.
* Is innovative.
* Will save a lot of time for the end users.
* Automates a lot of work.
* Etc. 

And **what does location have to do with it?** The truth is that most information is, or can be, geolocated. Every object, action, or event happens in a specific place and time. Of course, there are cases where location adds little or no value—for example, resolving a bug, designing an interface, analyzing an X-ray, assigning a diet plan, or running an online game. But in countless other cases, location is key.

Just as understanding [operating systems](https://en.wikipedia.org/wiki/Operating_system), [networks](https://en.wikipedia.org/wiki/Computer_network), [databases](https://en.wikipedia.org/wiki/Database), [software architecture](https://en.wikipedia.org/wiki/Software_architecture), [architectural patterns](https://en.wikipedia.org/wiki/Architectural_pattern), ... helps us build robust and scalable applications, **knowing what can be done with the geographic component of data (coordinates) prepares us to solve an even wider range of challenges (or to approach familiar problems in entirely new ways)**.

In this document, you’ll **discover the types of problems developers with geospatial skills can tackle**. To bring it to life, we’ll also highlight examples of popular applications that implement these capabilities.

> Note: in a different document we will list the main use cases per industry each problem applies to.

## Geospatial algorithms

Understanding geospatial algorithms (and the libraries that implement them) will help you build software capable of solving a wide variety of problems, such as the ones below.

Problems:

### How to do spatial queries/operations 

Examples include spatial and boundary lookups:

- How to check if two geometries intersect (e.g. geofences, finding which administrative boundary a coordinate belongs to).
- How to convert a point coordinate (user location, city, ...) into a boundary (country, state, ...).
- How to check if one shape crosses or contains another.
- How to validate or ensure data quality by checking spatial relationships between shapes.

### How to do spatial calculations

- How to perform 2D calculations: sort results by distance, find nearby places, measure distances, areas, perimeters, or determine cardinal directions (N, S, E, W), or calculate influence area/radius.
- How to perform elevation-based calculations: compute viewsheds, watersheds, line-of-sight, or slopes (e.g. for accessibility analysis, difficulty estimation, or best photo spots).
- How to perform 3D calculations: measure 3D volumes, distances, and more.
- How to interpolate spatial data when you have missing values (e.g. estimating crowd size at a protest, or traffic conditions).

### How to do network and topological analysis

- How to calculate turn-by-turn directions across a transport network (car, EV, pedestrian, truck, bike, public transit, scooter, ...) to go from X to Xn passing by X1, X2.
- How to support multimodal or intermodal transport (combine vehicles with public transit timetables).
- How to optimize routes for time, distance, fuel consumption, or CO₂ emissions.
- How to create schematic maps for simplified navigation.
- How to plan routes with restrictions (road closures, height limits, turn bans).
- How to plan coverage routes that ensure an entire area is systematically captured (e.g. for street view or Mapillary data collection).
- How to maximize stops per hour in delivery or service operations.
- How to optimize routes using real-time traffic data (accidents, congestion, ...).
- How to find the nearest driver and minimize handoff times with live ETAs.
- How to find the closest facility (pickup point, driver, hospital, ...).
- How to calculate drive-time areas.
- How to navigate through custom transport networks, whether:  
  - Indoor (multi-floor buildings, shopping malls, airports, university campuses).
  - Outdoor (ports, logistics hubs, industrial sites).
  - Mixed environments that combine indoor and outdoor spaces.
  - Aerial routes (drones, aircraft corridors).
  - Maritime routes (shipping lanes, ports).
- How to match ride-share candidates.
- How to determine the optimal location for one or more facilities to serve demand.
- How to optimize fleet navigation.
- How to calculate a distance or origin-destination (OD) matrix.
- How to calculate the estimated time of arrival (ETA).
- How to estimate ride fuel consumption.
- How to estimate vehicle deterioration based on routes and environmental conditions.

### Geostatistical analysis

- How to find spatial and historical temporal patterns using geostatistics (including predictions and spatial regression analysis).
- How to measure spatial centrality and dispersion to better understand the distribution of data points.
How to analyze large spatiotemporal datasets using big data methods and tools.

### Data transformation

Like cartographic transformations, format transformations, ...

- How to transform spatial data to optimize storage (change formats, simplify polygons, reduce file sizes).
- How to transform spatial data to optimize analysis and prepare it for specific methods.
- How to combine two spatial datasets using spatial joins and integration techniques.
- How to merge or dissolve shapes by a common attribute (e.g. combining multiple polygons).
- How to correct and clean GPS data (snap to roads, find the nearest road, improve positional accuracy,fix anomalies like [accurate store visits](https://www.safegraph.com/blog/revealing-safegraphs-secret-method-for-getting-accurate-store-visits-from-gps-data) or cleaning open datasets).
- How to reproject or transform coordinates between different reference systems.

### Georeferenced image analysis (aerial, ground, satellite, ...)

- How to extract ground coordinates from a pixel in a panorama or oriented imagery (e.g, [oriented imagery](https://github.com/Esri/oriented-imagery)).
- How to calculate the area covered by an aerial image (e.g. drone photo).
- How to detect and classify land cover elements such as water, vegetation, soil, roads, and buildings from satellite imagery using spectral signatures and band combinations.
- How to convert raster features into vector data with deep learning (e.g. extracting and geolocating buildings, roads, pools; like with [RapID editor](https://rapideditor.org/)).
- How to apply image segmentation and geolocation to camera images using AI for semantic segmentation, object detection, and classification (e.g. [Advanced driver-assistance systems](https://en.wikipedia.org/wiki/Advanced_driver-assistance_system)).
- How to estimate solar energy potential and calculate the electricity that could be generated in a city neighborhood.

Related knowledge (**libraries**): GDAL, GEOS, PROJ, Turf, ArcGIS REST APIs, Google Maps APIs, pgRouting, OSRM, GraphHopper, rasterio, geotools, PyWPS, GeoPHP.

## Client-side development 

Choose the best client-side library depending on project needs (performance, rendering, editing, offline support, 3D visualization, collaboration with cartographers), etc..

Problems:

### Display 2D and 3D georeferenced data

- How to create heatmaps and clusters for spatial pattern visualization
- How to draw 2D shapes with advanced symbology including animated data, multivariable representation, interactive and geolocated charts, textured symbols, advanced labels and complex vector symbols.
- How to improve usability and accessibility of polygon maps through a non-contiguous cartogram ([example](https://www.datanalytics.com/2021/06/23/mi-mapa-provincial-favorito/) & [tutorial](https://www.gislounge.com/creating-non-contiguous-cartograms/)).
- How to apply visual effects to maps similar to Photoshop (glow, blending, filters).
- How to visualize geotagged media such as photos, videos, and 360° imagery.
- How to display underground geospatial data.
- How to create 3D visualizations including cities, buildings, weather simulations, aerial paths, 3D scans, objects, and temporal data like space-time cubes.

### Create faster maps

- How to visualize massive geospatial datasets with billions of points or large polygons, using scalable storage, efficient rendering, aggregations, clusters, heatmaps, and vector tiles.
- How to create simple and performant visualizations with lightweight techniques such as SVGs.

### Customize / advance maps

- How to display geolocated images and overlays from drones, scanned plans, etc.
- How to create customized maps (campus, attractions, facilities, indoor, overlay labels on top of old aerial images) by hiding or highlighting elements, applying custom colors, icons, fonts, multilingual labels, brand marks, and style variations per zoom level.
- How to tile and display gigapixel images as map.
- How to create a 3D tilted map view ([bird-eye](https://bingmapsv8samples.azurewebsites.net/#Basic%20Birdseye)) with tools like Bing Maps or [Google Maps](https://www.youtube.com/watch?v=Dq3YC70W7UY&t=100s).

### Interact with geospatial data

- How to run spatial queries and calculations on the client side using [geospatial algorithms](#geospatial-algorithms).
- How to create toolbars to edit spatial data interactively including features like: snapping, drag-and-drop, etc.
- How to implement swipe maps to compare multiple layers or time periods.
- How to combine LiDAR data with panorama images to precisely georeference and locate objects.

### Work with offline geospatial data

- How to visualize offline maps on mobile, desktop applications or web applications.
- How to implement offline routing functionality in navigation apps.
- How to perform offline geospatial analysis in native apps or Progressive Web Apps (PWAs).

### Other

- How to test & debug geospatial apps: mock data, edge cases (antimeridian, poles, projection distortions).
- How to track position in real time with optimal performance.
- How to implement performance strategies for mobile (battery, bandwidth, offline-first).
- How to integrate geospatial applications with hardware such as peripherals and sensors.
- How to improve the accuracy of indoor geolocation using advanced techniques and devices.

Related knowledge in **representation models** (MDE, MSE, TIN) and **client-side libraries**, including web frameworks such as Leaflet, Google Maps JavaScript API, MapLibre, ArcGIS Maps SDKs, Cesium, OpenLayers, Three.js, D3.js, Deck.gl, Kepler.gl, and others.

## Server-side development

Server-side geospatial data management goes beyond storage: it involves organizing, optimizing, and securing datasets so they can be efficiently accessed, queried, and integrated.

Problems:

### Design system architecture (how to store and access/integrate):

- How to store and serve geospatial data (DBMS, geospatial files, or geospatial server)
- How to decide what geospatial data to store and serve (transport networks, real-time data, raster, etc.)
- How to integrate geospatial data with third-party systems (ERP, BI, GIS software, and more)
- How to choose the best DBMS and design a schema for spatial data (E/R models, layers vs views, spatial indexes)
- How to select the right technology to serve geospatial data (map server, custom API, etc.)
- How to serve spatial algorithms effectively through APIs
- How to implement /CD workflows for geospatial (data pipelines, reproducibility, version control, testing strategies, etc,).
- How to implement real-time data streams: ingestion, event-driven processing, MQTT/Kafka integration.

### Data capture/creation

- How to create a static map image with multiple layers
- How to build animated GIS temporal visualizations
- How to capture and gather geospatial data efficiently

### How to render 3D web animation as a video gpx track (relive.cc)

Related knowledge: **data types** (raster & vector), **data formats** (GeoJSON, TopoJSON, GPX, shapefile, GTFS, GeoTIFF, JPEG2000, MrSID, GML, GeoPackage, KML, GeoCSV, mobile map package, meshes, BIM, Geoparquet, more [vector formats](https://gdal.org/drivers/vector/index.html) and [raster formats](https://gdal.org/drivers/raster/index.html) like COG (Cloud Optimized GeoTIFF) etc.), **data transformations** (coordinate changes, projections, vector <-> raster, ...), **geospatial libraries** (GDAL, geopandas, GeoDjango, terraformer-js, KoopJS...) and utilities/tools, **database spatial extensions/capabilities** (PostGIS, SpatiaLite, Mysql spatial extension, ArcSDE, MongoDB geospatial queries, ...), **geospatial database versioning** (offline database sync), **map servers** (geospatial servers: GeoServer, MapServer, ArcGIS Online, ...), **OGC standards** (OGC API, WFS, WMS, WMTS, SLD, WPS, CityGML, i3s, ...), **metadata** (GeoJSON-LD, ISO, FGDC, EXIF, ...) + **[data quality](https://docs.google.com/document/d/1sIbvbR35fpltvXcHBXQ_51lZ7lbmfHkJEC95nc8nqpY/edit#heading=h.ajs1ocjfjzsw)**.
Related knowledge: **data types** (raster & vector), **data formats** (GeoJSON, TopoJSON, GPX, shapefile, GTFS, GeoTIFF, JPEG2000, MrSID, GML, GeoPackage, KML, GeoCSV, mobile map package, meshes, BIM, Geoparquet, COG (Cloud Optimized GeoTIFF), Parquet/Arrow for vector,more [vector formats](https://gdal.org/drivers/vector/index.html) and [raster formats](https://gdal.org/drivers/raster/index.html)...), **data transformations** (coordinate changes, projections, vector <-> raster, ...), **geospatial libraries** (GDAL, geopandas, GeoDjango, terraformer-js, KoopJS...) and utilities/tools, **database spatial extensions/capabilities** (PostGIS, SpatiaLite, Mysql spatial extension, ArcSDE, MongoDB geospatial queries, ...), **geospatial database versioning** (offline database sync), **map servers** (geospatial servers: GeoServer, MapServer, ArcGIS Online, ...), **OGC standards** (OGC API, WFS, WMS, WMTS, SLD, WPS, CityGML, i3s, ...), **metadata** (GeoJSON-LD, ISO, FGDC, EXIF, ...) + **[data quality](https://docs.google.com/document/d/1sIbvbR35fpltvXcHBXQ_51lZ7lbmfHkJEC95nc8nqpY/edit#heading=h.ajs1ocjfjzsw)**.

> Note: when/why do I need to use a map server? You should consider it in different scenarios. It is useful for large projects where several applications need to be built to consume geospatial information, using the implemented standards (data formats, style/symbology, ...) avoids to reinvent the wheel and can save a lot of implementation time (by using geospatial client libraries), but it also saves time with third party integrations, helps with performance to serve the large data (transform vector to raster server side, tiling, cache ...) support to manage geospatial files without a DBMS, etc.

## Data gathering and geolocation

Geospatial data can be found in many places, so it is important to be familiar with the sources available, but more importantly, because some can be offered by different providers in different forms (with their respective advantages and limitations) **to be able to find the best data possible it is important to have additional knowledge**.

Get more categories http://datos.gob.es/es

What resolution do I need to build my app/analysis?  

### Data gathering

For example:

- **Aerial imagery**: satellite, airplane, drones (historical, multispectral, etc.)
- **Boundaries**: administrative, environmental, geometric, etc.
- **Demographics**: population, income and spending, risk indicators, urban mobility patterns (OD matrices), historical electoral data
- **Elevation data**: APIs and datasets, slopes/relief, bathymetry, DEM, DSM, DTM, TIN, contour lines
- **Environmental**: Earth observation, geology, land cover, farmland, forests, etc.
- **Ground imagery**: traffic cameras, urban surveillance, etc.
- **Reference/labels**: place names, gazetteers, standardized identifiers
- **Structures**: buildings, points of interest (POIs), facilities
- **Transport**: navigation systems, road/trail networks, speed limits, radars, real-time and historical traffic, accidents, charging points, gas stations, dealerships, parking lots, airports, mile markers
- **Weather and climate**: temperature, wind, atmospheric pressure, hazard alerts, clouds, etc.


### Data geolocation (georeferencing)

- How to georeference vector data (IPs, addresses, spreadsheet fields, etc.) and raster data (aerial photos, CAD files, scanned maps, etc.)  
- How to improve geocoding results (set spatial limits, use fallback strategies, etc.)  
- How to manage geospatial data from images, videos, and other media (add, read, extract)  
- How to georeference a tilted or distorted map  
- How to transform coordinates into Global Discrete Geodetic Grids (GDGGs) such as GeoGrid  
- How to determine the time and timezone of a coordinate  
- How to approximate the location of a device using cell towers and Wi-Fi access points  
- How to find the nearest points of interest (POIs) such as businesses or facilities  
- How to work with geolocated images, 2D and spherical panoramas, aerial photos, or webcam streams  
- How to apply geospatial data in augmented, mixed, and virtual reality environments  

## Map creation (not programmatically) 

Work with a cartographer or GIS analyst:

- How to create a fantasy map  
- How to create tiled maps (from scratch or by tiling existing maps)  
- How to design and use a tilted map  
- How to build and visualize a transport network  
- How to transform georeferenced LiDAR data into 3D meshes 
  

Related knowledge: **data providers** (public and private), **source types** (Spatial Data Infrastructures / SDIs, APIs, Open Data portals, VGI/OSM, ...), **sources** (OSM, ArcGIS Living Atlas, Google Earth Engine, GeoNetwork, ...), **remote sensing techniques** (Radar, Lidar, Aerial Photography, multi-spectral/hyperspectral imaging, ... ),  **types are available** ( photogrammetry,...) + [how to manage that data](https://docs.google.com/document/d/1sIbvbR35fpltvXcHBXQ_51lZ7lbmfHkJEC95nc8nqpY/edit#heading=h.tscg2piw2oe7).

import GiscusComponent from '@site/src/components/GiscusComponent';

<GiscusComponent></GiscusComponent>