// Create the layers and add to map
var layer_with_observations = add_circle_markers(
  points_sites_with_observations,
  type = "europe", 
  colour = "#FCA50A", 
  fill = "#FCA50A"
).addTo(map);

var layer_without = add_circle_markers(
  points_sites_without_observations, 
  type = "europe", 
  colour = "#6B186E",
  fill = "#6B186E"
);


// Add some layer control
var overlay_points = {
  "Display sites without observations?": layer_without,
  "Display sites with observations?": layer_with_observations,
  "Hill shading? (experimental)": hill_shading
};

// Add layer control to map
L.control.layers(base_maps, overlay_points).addTo(map);

// Centre of Germany
map.setView(new L.LatLng(51.163375, 10.447683), 5);

