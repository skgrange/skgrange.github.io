// Map points
var layer_sites_with_observations = add_circle_markers(
  sites_with_observations, type = "new_zealand", colour = "OrangeRed", 
  fill = "OrangeRed"
).addTo(map);

var layer_without_observations = add_circle_markers(
  sites_without_observations, type = "new_zealand", 
  colour = "RoyalBlue", fill = "RoyalBlue"
).addTo(map);

// Add some layer control
var overlay_points = {
  "Display sites without observations": layer_sites_with_observations,
  "Display sites with observations?": layer_without_observations
};

// Add layer control to map
L.control.layers(base_maps, overlay_points).addTo(map);

// Centre of New Zealand
map.setView(new L.LatLng(-41.5, 172.833333), 6);

//map.fitBounds(boundaries.getBounds());
