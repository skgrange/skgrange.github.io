// Define functions
function icon_start() {

  var icon = L.AwesomeMarkers.icon({
    icon: "play",
    prefix: "fa",
    markerColor: "green",
    iconColor: "black"
  });

  return icon;
  
}


function icon_end() {

  var icon = L.AwesomeMarkers.icon({
    icon: "stop",
    prefix: "fa",
    markerColor: "red",
    iconColor: "black"
  });

  return icon;
  
}


function icon_information() {

  var icon = L.AwesomeMarkers.icon({
    icon: "info",
    prefix: "fa",
    markerColor: "blue",
    iconColor: "black"
  });

  return icon;
  
}


function icon_information_green() {

  var icon = L.AwesomeMarkers.icon({
    icon: "info",
    prefix: "fa",
    markerColor: "green",
    iconColor: "black"
  });

  return icon;
  
}


function icon_aircraft() {

  var icon = L.AwesomeMarkers.icon({
    icon: "plane",
    prefix: "fa",
    markerColor: "red",
    iconColor: "black"
  });

  return icon;
  
}


function icon_flag() {

  var icon = L.AwesomeMarkers.icon({
    icon: "flag",
    prefix: "fa",
    markerColor: "purple",
    iconColor: "black"
  });

  return icon;
  
}


function icon_boat() {
  
  var icon = L.AwesomeMarkers.icon({
    icon: "ship",
    prefix: "fa",
    markerColor: "blue",
    iconColor: "black"
  });
  
  return icon;
  
}


function icon_bed() {
  
  var icon = L.AwesomeMarkers.icon({
    icon: "bed",
    prefix: "fa",
    markerColor: "purple",
    iconColor: "black"
  });
  
  return icon;
  
}

function line_simple(coordinates, colour = "red") {
  
  var line = L.polyline(coordinates, {
    color: colour
  }); 
  
  return line;
  
}


function arrows(line, standard = true) {

  if (standard) {

    var arrows_on_line = L.polylineDecorator(line, {
      patterns: [{
        offset: 25,
        repeat: 100,
        symbol: L.Symbol.arrowHead({
          pixelSize: 15,
          pathOptions: {
            color: 'blue',
            fillOpacity: 0.3,
            weight: 0
          }
        })
      }]
    });

  } else {

    var arrows_on_line = L.polylineDecorator(line, {
      patterns: [{
        offset: 25,
        repeat: 100,
        symbol: L.Symbol.arrowHead({
          pixelSize: 15,
          pathOptions: {
            color: 'black',
            fillOpacity: 0.7,
            weight: 0
          }
        })
      }]
    });

  }

  return arrows_on_line;

}


function marker_start(coordinates, point = 0, name = "", distance = "", 
  notes = "", type = "running") {
    
  if (type == "running") {
  
    var marker = L.marker(coordinates[point], {
      icon: icon_start()
    }).bindPopup('<table>' +
      "<tr class='oddrowcol'><td>Name: </td><td>" + name + "</td></tr>" +
      "<tr class='evenrowcol'><td>Distance: </td><td>" + distance + " km</td></tr>" +
      "<tr class='oddrowcol'><td>Notes: </td><td>" + notes + "</td></tr>" +
      '</table>');
    
  }
  
  if (type == "chemistry_around_the_world") {
    
    var marker = L.marker(coordinates[point], {
      icon: icon_start()
    }).bindPopup('<table>' +
      "<tr class='oddrowcol'><td>Name: </td><td>" + name + "</td></tr>" +
      "<tr class='evenrowcol'><td>Notes: </td><td>" + notes + "</td></tr>" +
      '</table>');
    
  }
  
  return marker;
  
}


function marker_end(coordinates, name = "finish") {
  
  var marker = L.marker(tail(coordinates), {
    icon: icon_end()
  }).bindPopup(name);
  
  return marker;
  
}


function tail(coordinates) {
  
  return coordinates[coordinates.length - 1]; 
  
}


function marker_information(point, name = "", notes = "", 
  icon = icon_information()) {
  
  var marker = L.marker(point, {
    icon: icon
  }).bindPopup('<table>' +
    "<tr class='oddrowcol'><td>Information: </td><td>" + name + "</td></tr>" +
    "<tr class='evenrowcol'><td>Notes: </td><td>" + notes + "</td></tr>" +
    '</table>');
    
    return marker;
    
}


function add_circle_markers(points, type, colour = "red", fill = "#f03", 
  opacity = 0.5) {
  
  // Europe map
  if (type == "europe") {
      
    // Add points
    var layer = L.geoJson(points, {
    
      pointToLayer: function(feature, latlng) {
        
        return new L.circleMarker(latlng, {
          
          color: colour,
          fillColor: fill,
          fillOpacity: opacity
          
        });
        
      },
      
      onEachFeature: function(feature, layer) {
        
        layer.bindPopup("<table>" +
          "<tr class='oddrowcol'><td>Site: </td><td>" +
          feature.properties.site + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Site name: </td><td>" +
          feature.properties.site_name + "</td></tr>" +
          
           "<tr class='oddrowcol'><td>Site type: </td><td>" +
          feature.properties.site_type + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Site area: </td><td>" +
          feature.properties.site_area + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Latitude: </td><td>" +
          feature.properties.latitude + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Longitude: </td><td>" +
          feature.properties.longitude + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Elevation: </td><td>" +
          feature.properties.elevation + "</td></tr>" + 
          
           "<tr class='evenrowcol'><td>Has observations: </td><td>" +
          feature.properties.has_observations + "</td></tr>" + 
          
          "<tr class='oddrowcol'><td>Date start: </td><td>" +
          feature.properties.date_start + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Date end: </td><td>" +
          feature.properties.date_end + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Data source: </td><td>" +
          feature.properties.data_source + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Variables monitored: </td><td>" +
          feature.properties.variables_monitored + "</td></tr>" +
          
          "</table>"
        );
        
      }
    }); 
    
  }
  
  if (type == "new_zealand") {
  
    // Add points
    var layer = L.geoJson(points, {
    
      pointToLayer: function(feature, latlng) {
        
        return new L.circleMarker(latlng, {
          
          color: colour,
          fillColor: fill,
          fillOpacity: opacity
          
        });
        
      },
      
      onEachFeature: function(feature, layer) {
        
        layer.bindPopup("<table>" +
          "<tr class='oddrowcol'><td>Site: </td><td>" +
          feature.properties.site + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Site name: </td><td>" +
          feature.properties.site_name + "</td></tr>" +
          
           "<tr class='oddrowcol'><td>Site type: </td><td>" +
          feature.properties.site_type + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Latitude: </td><td>" +
          feature.properties.latitude + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Longitude: </td><td>" +
          feature.properties.longitude + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Elevation: </td><td>" +
          feature.properties.elevation + "</td></tr>" + 
          
          "<tr class='oddrowcol'><td>Uncertain coordinates: </td><td>" +
          feature.properties.unknown_coordinates + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Region: </td><td>" +
          feature.properties.region + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Operator: </td><td>" +
          feature.properties.operator + "</td></tr>" + 
          
          "<tr class='evenrowcol'><td>Have observations: </td><td>" +
          feature.properties.has_observations + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Start date: </td><td>" +
          feature.properties.date_start + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Variables monitored: </td><td>" +
          feature.properties.variables_monitored + "</td></tr>" +
          
          "</table>"
        );
        
      }
    }); 
    
  }
  
  
  if (type == "climate") {
    
    // Add points
    var layer = L.geoJson(points, {
    
      pointToLayer: function(feature, latlng) {
        
        return new L.circleMarker(latlng, {
          
          color: colour,
          fillColor: fill,
          fillOpacity: opacity
          
        });
        
      },
      
      onEachFeature: function(feature, layer) {
        
        layer.bindPopup("<table>" +
          "<tr class='oddrowcol'><td>Location: </td><td>" +
          feature.properties.location + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Country: </td><td>" +
          feature.properties.country + "</td></tr>" +
          
           "<tr class='oddrowcol'><td>Annual temperature (&deg; C): </td><td>" +
          feature.properties.temperature + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Annual precipitation (mm): </td><td>" +
          feature.properties.precipitation + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Annual rainy days: </td><td>" +
          feature.properties.rainy_days + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Annual sunshine hours: </td><td>" +
          feature.properties.sunshine_hours + "</td></tr>" + 
          
          "</table>"
        );
        
      }
    }); 
    
  }
  
  
  if (type == "isd") {
  
   // Add points
    var layer = L.geoJson(points, {
    
      pointToLayer: function(feature, latlng) {
        
        return new L.circleMarker(latlng, {
          
          color: colour,
          fillColor: fill,
          fillOpacity: opacity
          
        });
        
      },
      
      onEachFeature: function(feature, layer) {
        
        layer.bindPopup("<table>" +
          "<tr class='oddrowcol'><td>Site: </td><td>" +
          feature.properties.site + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Site name: </td><td>" +
          feature.properties.site_name + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Country: </td><td>" +
          feature.properties.country + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Latitude: </td><td>" +
          feature.properties.latitude + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Longitude: </td><td>" +
          feature.properties.longitude + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Elevation: </td><td>" +
          feature.properties.elevation + "</td></tr>" + 
          
          "<tr class='oddrowcol'><td>Start date: </td><td>" +
          feature.properties.date_start + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Start date: </td><td>" +
          feature.properties.date_end + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Current site? </td><td>" +
          feature.properties.current + "</td></tr>" +
          
          "</table>"
        );
        
      }
    });
  
  }
  
  return layer
  
}



function add_location_points(json, colour = "red", fill = "#f03", 
  opacity = 0.5) {
  
    // Add points
    var layer = L.geoJson(json, {
    
      pointToLayer: function(feature, latlng) {
        
        return new L.circleMarker(latlng, {
          
          color: colour,
          fillColor: fill,
          fillOpacity: opacity
          
        });
        
      },
      
      onEachFeature: function(feature, layer) {
        
        layer.bindPopup("<table>" +
        
          "<tr class='oddrowcol'><td>Date: </td><td>" +
          feature.properties.date + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Name: </td><td>" +
          feature.properties.name + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Type: </td><td>" +
          feature.properties.type + "</td></tr>" + 
            
           "</table>"
        );
        
      }
    });
  
  return layer
  
}


function clustered_markers_with_popups(json, type) {

  if (type == "example") {

    var layer = L.geoJson(json, {

      pointToLayer: function(feature, latlng) {

        return new L.Marker(latlng, {

          // icon: icon_boat()
          icon: eval(feature.properties.icon + "()")

        });

      },

      onEachFeature: function(feature, layer) {

        layer.bindPopup(
          "<center> <b>" + feature.properties.name + "</b> </center> <br>" +
          "<img src='" + feature.properties.image + "' />", {

            closeButton: true,
            maxWidth: feature.properties.size,
            minWidth: feature.properties.size
            
          });

      }

    });

  }
  
  
  if (type == "chemistry_around_the_world") {
    
      var layer = L.geoJson(json, {

      pointToLayer: function(feature, latlng) {

        return new L.Marker(latlng, {

          icon: eval(feature.properties.icon + "()")

        });

      },

      onEachFeature: function(feature, layer) {

        layer.bindPopup(
          "<center> <b>" + feature.properties.image_name + "</b> </center> <br>" +
          "<img src='" + feature.properties.image + "' />" + 
          "<center>" + feature.properties.image_large + "</center>", {

            closeButton: true,
            // maxWidth: feature.properties.size,
            // minWidth: feature.properties.size
            // maxWidth: "auto"
            minWidth: feature.properties.image_width
            
          });

      }

    });
    
  }
  
  
  if (type == "smonitor_new_zealand") {
    
    // Add points
    var layer = L.geoJson(json, {
    
      pointToLayer: function(feature, latlng) {
        
        return new L.Marker(latlng, {
          
          icon: icon_check()
          
        });
        
      },
      
      onEachFeature: function(feature, layer) {
        
        layer.bindPopup("<table>" +
          "<tr class='oddrowcol'><td>Site: </td><td>" +
          feature.properties.site + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Site name: </td><td>" +
          feature.properties.site_name + "</td></tr>" +
          
           "<tr class='oddrowcol'><td>Site type: </td><td>" +
          feature.properties.site_type + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Latitude: </td><td>" +
          feature.properties.latitude + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Longitude: </td><td>" +
          feature.properties.longitude + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Elevation: </td><td>" +
          feature.properties.elevation + "</td></tr>" + 
          
          "<tr class='oddrowcol'><td>Uncertain coordinates: </td><td>" +
          feature.properties.unknown_coordinates + "</td></tr>" +
          
          "<tr class='evenrowcol'><td>Region: </td><td>" +
          feature.properties.region + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Operator: </td><td>" +
          feature.properties.operator + "</td></tr>" + 
          
          "<tr class='evenrowcol'><td>Have observations: </td><td>" +
          feature.properties.has_observations + "</td></tr>" +
          
          "<tr class='oddrowcol'><td>Start date: </td><td>" +
          feature.properties.date_start + "</td></tr>" +
          
          "</table>"
        );
        
      }
    });
    
  }

  return layer;

}


function marker_start_geojson(geojson, name = "", series = "", organiser = "", 
  distance = "", climb = "", fell_categories = "", notes = "") {
    
  // First element
  coordinates = geojson.geometry.coordinates[0].slice(0, 2).reverse();
  
  var marker = L.marker(coordinates, {
    icon: icon_start()
  }).bindPopup(
    '<table>' +
    "<tr class='oddrowcol'><td>Name: </td><td>" + name + "</td></tr>" +
    "<tr class='evenrowcol'><td>Series: </td><td>" + series + "</td></tr>" +
    "<tr class='oddrowcol'><td>Organiser: </td><td>" + organiser + "</td></tr>" +
    "<tr class='evenrowcol'><td>Distance: </td><td>" + distance + " km</td></tr>" +
    "<tr class='oddrowcol'><td>Climb: </td><td>" + climb + " m</td></tr>" +
    "<tr class='evenrowcol'><td>Fell categories: </td><td>" + fell_categories + "</td></tr>" +
    "<tr class='oddrowcol'><td>Notes: </td><td>" + notes + "</td></tr>" +
    '</table>'
  );
  
  return marker;
  
}


function marker_end_geojson(geojson, name = "Finish") {
  
  // Last element
  coordinates = geojson.geometry.coordinates.slice(-1)[0].slice(0, 2).reverse();
  
  var marker = L.marker(coordinates, {
    icon: icon_end()
  }).bindPopup(name);
  
  return marker;
  
}
