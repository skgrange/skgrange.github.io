// Create the layers and add to map
var layer_with_observations = add_circle_markers(
  sp_sites, 
  type = "isd", 
  colour = "#ff6347", 
  fill = "#ff6347"
).addTo(map);


// Add some layer control
var overlay_points = {
  "Display sites?": layer_with_observations
};

// Add layer control to map
L.control.layers(base_maps, overlay_points).addTo(map);

// Centre of Germany
map.setView(new L.LatLng(51.163375, 10.447683), 5);
