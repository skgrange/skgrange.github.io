// Define basemap tiles
var open_street_map = L.tileLayer(
 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Needs a key
var mapbox = L.tileLayer(
 'https://{s}.tiles.mapbox.com/v4/skgrange.b1b7f962/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2tncmFuZ2UiLCJhIjoiNjJiMDU5ZjI0YTA4YzliMGRiYmViYzU0MmJmZTg1ZjAifQ.P_g497Ca_chbR8A4TIS0AA'
);

var toner = L.tileLayer(
 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 20
});

var toner_lite = L.tileLayer(
 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  ext: 'png',
	maxZoom: 20
});

// Images, unsure on usage conditions
var esri_images = L.tileLayer(
 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  maxzoom: 20
});

// Thunderforest layers need keys too ~ Feb, 2017 onwards
var thunderforest_landscape = L.tileLayer(
 'https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=25ef91f0102248f4a181998ec2b7a1ad', {
  attribution: '&&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxzoom: 20
});

var thunderforest_outdoors = L.tileLayer(
 'https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=25ef91f0102248f4a181998ec2b7a1ad', {
  attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 20
});

var thunderforest_cycle = L.tileLayer(
  'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=25ef91f0102248f4a181998ec2b7a1ad', {
  attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 20
});

var thunderforest_transport_dark = L.tileLayer(
 'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=25ef91f0102248f4a181998ec2b7a1ad', {
  attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 20
});

var open_topo_map = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
 maxZoom: 16,
 attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var carto_db_positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
 subdomains: 'abcd',
 maxZoom: 19
});

var carto_db_dark_matter = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
 subdomains: 'abcd',
 maxZoom: 19
});

// A layer, not a basemap
var hill_shading = L.tileLayer('http://{s}.tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png', {
  maxZoom: 15,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Set-up base map
var map = L.map("map", {
  layers: open_topo_map
});

// Basemaps for layer control
var base_maps = {
  "OpenStreetMap": open_street_map,
  "MapBox": mapbox,
  "Toner": toner,
  "Toner lite": toner_lite,
  "Images": esri_images,
  "Landscape": thunderforest_landscape,
  "Outdoors": thunderforest_outdoors,
  "Cycling": thunderforest_cycle,
  "Transport dark": thunderforest_transport_dark,
  "Topo": open_topo_map,
  "Positron": carto_db_positron,
  "Dark matter": carto_db_dark_matter
};

