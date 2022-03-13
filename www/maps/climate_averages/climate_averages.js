// Map points
var layer_locations = add_circle_markers(
  data_climate, type = "climate", colour = "OrangeRed", 
  fill = "OrangeRed"
).addTo(map);

// Add some layer control
var overlay_points = {
  "Display locations?": layer_locations,
};

// Add layer control to map
L.control.layers(base_maps, overlay_points).addTo(map);

// uk
map.fitBounds([[48, -10], [60, 3]]);
