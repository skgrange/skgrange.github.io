// Create the layers and add to map
layer_done = add_location_points(
  points_done, 
  colour = "#1e90ff", 
  fill = "#1e90ff",
  opacity = 0.75
).addTo(map);

layer_to_do = add_location_points(
  points_to_do,
  colour = "#ff8c00",
  fill = "#ff8c00",
  opacity = 0.75
).addTo(map);

layer_extra = add_location_points(
  points_extra,
  colour = "#995399 ",
  fill = "#995399",
  opacity = 0.75
);

// Set hill shading to be on by default
// hill_shading.addTo(map);

// Add some layer control
var overlay_maps = {
  "Hill shading?": hill_shading,
  "Display done?": layer_done,
  "Display to-do?": layer_to_do,
  "Display extras?": layer_extra
};

// Add layer control to map
L.control.layers(base_maps, overlay_maps).addTo(map);

// Manual bounding
// York
// var bounds = new L.LatLngBounds(
//   [[53.91506, -1.16661], [54.01039, -0.99838]]
// );

// Fit map to bounds
// map.fitBounds(bounds);

// Empa
// map.setView(new L.LatLng(47.4032, 8.61093), 14);

// Kerikeri
// map.setView(new L.LatLng(-35.227668, 173.948749), 14);

// Brisbane
// map.setView(new L.LatLng(-27.469592, 153.025228), 13);

// Bern
map.setView(new L.LatLng(46.948955, 7.439965), 14);
