---
sidebar_position: 6
title: Geo Developer superpowers
---
# Geo Developer superpowers 🦸

**This document aims to inspire, motivate, and developers** about the exciting world of geospatial development.  

As developers, **we love to write software we feel proud of**, so we can say: "I’m part of the team that built it!". We can feel proud for many reasons, for example, because the app:
* Has a great UX/UI.
* Perform well and is scalable.
* Solves a challenging technical problem.
* Is innovative.
* Will save a lot of time for the end users.
* Automatizes a lot of work.
* Etc. 

And **what does localization have to do with it?** Well, much of the information is geolocated or can be geolocated, since all real-world objects, actions, events, etc. occur in a certain place and at a certain time, although it is true that there are actions to which geolocation adds little or no value, such as resolving an issue, designing an interface or industrial piece, analyzing an X-ray image, assign diet plan, where a chat, training take or online game match place, and many more. 

Therefore, just as knowing about [operating systems](https://en.wikipedia.org/wiki/Operating_system), [networks](https://en.wikipedia.org/wiki/Computer_network), [databases](https://en.wikipedia.org/wiki/Database), [architectural patterns](https://en.wikipedia.org/wiki/Architectural_pattern), ... it is useful to know how to create robust and scalable applications that solve different problems, **we will be prepared to better solve such challenges if we know what can be done with the geographic component** (coordinates) **of the data**.

For this reason, in this document, you will **learn what problems a developer with geospatial knowledge can help solve**. To illustrate some of these, it includes some examples of popular applications implementing such features.

> Note: in a different document we will list the main use cases per industry each problem applies to.

## Geospatial algorithms

Being familiar with geospatial algorithms and libraries implementing those will help you build software able to solve many types of problems like the following.

Problems:

### How to do spatial queries/operations 

Like Spatial Lookup, Boundary Lookup, ...:

- Geometry intersection (Geofences, check to which administrative boundary corresponds to a coordinate,...)
- How do I convert a point coordinate (user location, city, ...) to a boundary? (country, state, ...)
- Crosses
- Contains
- How to check spatial relationships between shapes (uses: find problems or ensure data quality)

### How to do spatial calculations

- 2D: sort by distance/nearby places, measure distances, areas, perimeters, cardinal directions (N,S,W, E, ...), influence area/radius...)
- How to do elevation-related calculations (Viewsheds, watersheds, line of sight, slopes, ...) - (use cases calculate accessibility, difficulty, locations to make awesome pictures ...)
- How to do 3D calculations (3D volumes, distances, ...)
- How to interpolate spatial data when you have missing data (people at a protest, traffic?) 

### How to do network and topological analysis

- How to calculate directions (turn-by-turn navigation) to go from X to Xn passing by X1, X2, ... on a single transport network (by: car, electric vehicle (EV), pedestrian, truck, bike, public transit, electric scooter, ...)
- How to calculate multimodal/intermodal transport navigation (using public transit timetables)
- How to calculate routes optimizing: time, distance, consumption, CO2 emissions, ...
- How to plan routes with roads limitations (cut-off, max height, turn restrictions)
- How to optimize trips to cover a full network area (e.g. street view/Mapillary planification)
- How to maximize stops per hour
- How to optimize routes with real-time traffic data (traffic, accidents, ...)
- How to find the nearest drivers and minimize handoff times with live ETAs
- How to find the closest facility (pick up locations, driver, hospital, ...)
- How to calculate drive time areas
- How to navigate through custom indoor/outdoor/mixed (university campus, ports, logistics, ....)/aerial/maritime... transport networks (multiple-floors, vehicles,  ...)
- How to match/find candidates to share a ride
- How to determine an optimal location for one or more facilities that will service demand from a given set of points
- How to optimize fleet navigation
- How to calculate a distance/OD matrix
- How to calculate the estimated time of arrival (ETA)
- How to estimate ride fuel consumption
- How to estimate vehicle deterioration based on routes and environmental conditions

### Geostatistical analysis

- How to find spatial patterns using geostatistics (temporal patterns, predictions, spatial regression analysis)
- How to measure centrality and dispersion
- How to do spatiotemporal big data analysis

### Data transformation

Like cartographic transformations, format transformations, ...

- How to transform data to optimize for storage (change format, generalize data by reducing the size of polygons, ...)
- How to transform my data to optimize for certain analysis
- How do I combine two spatial datasets? (spatial joins, etc.)
- How do I combine/join shapes (e.g. multiple polygons) by a common attribute?
- How to correct GPS data (e.g. snap to roads, nearest roads, fix data anomalies, -> e.g. [accurate store visits](https://www.safegraph.com/blog/revealing-safegraphs-secret-method-for-getting-accurate-store-visits-from-gps-data)  by Safegraph, Madrid cleaning data...)
- Convert raster/images to vector
- How do I need to transform / project coordinates

### Georeferenced Image analysis (aerial, ground, satellite, ...)

- How to get ground coordinates from a given pixel in a panorama (e.g [oriented imagery](https://github.com/Esri/oriented-imagery))
- How to get the area covered by an aerial picture (e.g. done image)
- How to detect/identify elements like water, snow, ice, vegetation, soil, roads, buildings ... areas from raster/image (satellite)  using spectral signature (combine bands, etc)
- How to convert those elements to vector data? (using deep learning) (extract and geolocate buildings, roads, pools, etc -> eg. RapID)
- How to do camera image segmentation and geolocate? camera-based AI semantic segmentation, object detection, and classification (geolocate and geolocate from a ground picture/”3D”) (e.g. Advanced driver-assistance systems (ADAS))
- How to determine the amount of electricity that could be generated from solar energy in the neighborhood of a city?

  

Related knowledge: **libraries** (GDAL, GEOS, PROJ, Turf, ArcGIS REST APIs, Google Maps APIs, pgRouting, OSRM, GraphHopper, rasterio,, geotools, PyWPS, GeoPHP, ...)

## Client-side development 

Choose the best library to do an implementation (do I need fast? advance rendering? advance editing? offline visualization? 3D? ..work with a cartographer, ... 

Problems:

### Display 2D and 3D georeferenced data

- Heatmaps, clusters, ...
- How to draw 2D shapes and advanced symbology (animated data, Multivariable representation, vector/CIM symbols, interactive geolocated charts, advanced labels, symbol textures,  ..)
- How to improve usability/accessibility of polygon maps through a non-contiguous cartogram ([example](https://www.datanalytics.com/2021/06/23/mi-mapa-provincial-favorito/) & [tuto](https://www.gislounge.com/creating-non-contiguous-cartograms/))
- Apply Photoshop like effects to data (glow, blending, ...)
- Visualize geotagged videos, pictures (2D, 360º, ...), 
- Underground data visualizations
- Draw 3D shapes and objects (city in 3D, buildings, 3D animations, weather conditions, aerial paths, 3D scans, 3D objects, temporal data like space time cubes)

### Create faster maps

- How to visualize large datasets with billions of points, large polygons, ... (how to store and serve, scale, renderers, aggregations, clusters, heatmaps, vector tiles, ...)
- Simple and performant (SVGs, ...)

### Customize / advance maps

- Display a geolocated image / image overlay (drones, scanned plane, ..)
- How to create maps (campus, attractions, facilities, indoor, style map types, old maps with labels...) hiding/highlighting elements with custom colors, icons, fonts, multi language reference layers/labels, brand marks, ... for each zoom level
- Tile a [gigapixel] picture/image
- How to make a 3D tilted map view? A k.a. [bird-eye](https://bingmapsv8samples.azurewebsites.net/#Basic%20Birdseye) view(e.g. [gmaps](https://www.youtube.com/watch?v=Dq3YC70W7UY&t=100s))

### Interact with geospatial data

- How to do spatial queries and calculations client-side? -> [geospatial algorithms](https://docs.google.com/document/d/1sIbvbR35fpltvXcHBXQ_51lZ7lbmfHkJEC95nc8nqpY/edit#heading=h.dhy123shja1k)
- Data creation toolbars (snapping, Drag and drop ,...)
- Swipe maps
- Combine lidar data + panorama pictures to be able to precisely georeference objects

### Work with offline geospatial data

- How to visualize offline maps
- How to implement an offline routing app?
- How to do offline geospatial analysis (native and web/PWA)

### Other

- Optimal way to track position real time
- Integrate with hardware (periferics, sensors, ...)
- How to improve accuracy of indoor geolocation


Related knowledge: **representation models** (MDE, MSE, TIN), and client-side libraries (web: leaflet, google maps, maplibre, arcgisJS api, Cesium, openlayers,three.js, d3.js, deck.gl, kepler,gl ...; SDKs:..)

## Server-side development

Data management ...

Problems:

### Design system architecture (how to storage and access/integrate):

- How do I store and serve data? (software architectures) a simple DBMS? a DBMS/Geospatial files + a geospatial server? ...
- What data do I need to store and serve? (transport networks, real time, raster, ...)
- How do I integrate my geospatial data with third party systems (ERP, BI, GIS software, ...)
- Pick the best DBMS and design the schema for spatial data (how to structure E/R, layers vs views, spatial indexes, ...)
- Choose a technology to serve geospatial data (map server/custom API)
- What’s the best way (API) to serve my spatial algorithms?

### Data capture/creation

- How to create a static map image (with layers, etc.)
- How to build animated GIS temporal animations
- Check data gathering for more

### How to render 3D web animation as a video gpx track (relive.cc)

Related knowledge: **data types** (raster & vector), **data formats** (GeoJSON, TopoJSON, GPX, shapefile, GTFS, GeoTIFF, JPEG2000, MrSID, GML, GeoPackage, KML, GeoCSV, mobile map package, meshes, BIM, more [vector formats](https://gdal.org/drivers/vector/index.html) and [raster formats](https://gdal.org/drivers/raster/index.html)...), **data transformations** (coordinate changes, projections, vector <-> raster, ...), **geospatial libraries** (GDAL, geopandas, GeoDjango, terraformer-js, KoopJS...) and utilities/tools, **database spatial extensions/capabilities** (PostGIS, SpatiaLite, Mysql spatial extension, ArcSDE, MongoDB geospatial queries, ...), **geospatial database versioning** (offline database sync), **map servers** (geospatial servers: GeoServer, MapServer, ArcGIS Online, ...), **OGC standards** (WFS, WMS, WMTS, SLD, WPS, CityGML, i3s, ...), **metadata** (GeoJSON-LD, ISO, FGDC, EXIF, ...) + **[data quality](https://docs.google.com/document/d/1sIbvbR35fpltvXcHBXQ_51lZ7lbmfHkJEC95nc8nqpY/edit#heading=h.ajs1ocjfjzsw)**.

> Note: when/why do I need to use a map server? You should consider it in different escenarios. It is useful for large projects where several applications need to be build to consume geospatial information, using the implemented standards (data formats, style/symbology, ...) avoids to reinvent the wheel and can save a lot of implementation time (by using geospatial client libraries), but it also saves time with third party integrations, helps with performance to serve the large data (transform vector to raster server side, tiling, cache ...) support to manage geospatial files without a DBMS, etc.

## Data gathering and geolocation

Geospatial data can be found in many places, so it is important to be familiar with the sources available, but more importantly, because some can be offered by different providers in different forms (with their respective advantages and limitations) **to be able to find the best data possible it is important to have additional knowledge**.

Get more categories http://datos.gob.es/es

What resolution do I need to build my app/analysis?  

### Data gathering

- Aerial images (satellite, plane, drones) <- historical, multispectral, ...
- Boundaries (administrative, ambiental, geometric, ..)
- Demographic data (population, incomes and spending, risk..., urban population movement pattern - OD matrices, historical electoral data)
- Elevation data (apis and datasets, slopes/relief, bathymetry, DEM, DSM, DTM, TIN/contour lines ...)
- Environmental (Earth observation, geology, land cover, farmland, forests, ...)
- Ground images (cameras: traffic, cities, ...)
- Reference/labels
- Structures (buildings, pois, ...)
- Transport (navigation, roads/trail/... networks, speed limits, radars, real-time/historical traffic, accidents, charge points, gas stations, dealerships and parking spots, airports, mile marker)
- Weather and climate (temperature, wind, atmospheric pressure, hazards alerts, clouds,  ...)
- ...

### Data geolocation (georeferencing)

- How to georeference vector (IPs, addresses, spreadsheet field, ... ) and raster (planes, pictures, CAD files, ...    ) data 
- How do I improve my geocoding results (limit to a certain extent, fallback, ..)
- Manage (add, read, ..) geospatial data from images, videos, ...
- Georeference a tilted map
  - How to transform coordinates to Global Discrete Geodetic Grids (GDGGs)? (e.g. geogrid)
  - Time/Timezone of a coordinate
  - Get the approximate location of a device using cell towers and wifi points
  - Find nearest POIs (businesses, ...)
  - Geolocated images, 2D/spherical panoramas, aerial, webcams, ...
  - Augmented/mixed/VR reality

## Map creation (not programmatically) 

Work with a cartographer, GIS analyst:

- Create a fantasy map
- Create tiled maps (tile an existing, create from scratch, ...)
- Create a tilted map
- Build transport network
- Transform georeferenced lidar data to 3D meshes
  

Related knowledge: **data providers** (public and private), **source types** (Spatial Data Infrastructures / SDIs, APIs, Open Data portals, VGI/OSM, ...), **sources** (OSM, ArcGIS Living Atlas, Google Earth Engine, GeoNetwork, ...), **remote sensing techniques** (Radar, Lidar, Aerial Photography, multi-spectral/hyperspectral imaging, ... ),  **types are available** ( photogrammetry,...) + [how to manage that data](https://docs.google.com/document/d/1sIbvbR35fpltvXcHBXQ_51lZ7lbmfHkJEC95nc8nqpY/edit#heading=h.tscg2piw2oe7).