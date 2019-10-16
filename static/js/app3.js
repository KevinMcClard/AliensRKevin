// UFO Data --> standalone file
// Perform a GET request to the query URL
d3.json("static/js/GeoJson.json", function(data_MiB) {
    // Once we get a response, send the data.features object to the createFeatures function
    console.log(data_MiB);
    createFeatures(data_MiB);
});

var geojsonMarkerOptions_MiB = {
	radius: 2,
	fillColor: "#5bff00",
	color: "#000",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
};

// // // Create function to create circular features
function createFeatures(UFOPlots) {
  // console.log("-----------");
  // console.log(militaryBases.features["geometry"].coordinates);
  var MiB = L.geoJson(UFOPlots,{
    pointToLayer: function (features, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions_MiB);
    }
  });

  // Sending our earthquakes layer to the createMap function
  createMap(MiB);
}

function createMap(MiB) {
  // Define base layer
  var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_Key
  })
  //GET NEW DARKMAP LAYER FROM MAPBOX
  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_Key
  })

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Light": lightmap,
    "Dark": darkmap
  };

//   // Create overlay object to hold our overlay layer
  var overlayMaps = {
    MiB: MiB
  };

  // Create our map
  var myMap = L.map("map", {
    center: [37.6872, -97.3301],
    zoom: 5,
    layers: [lightmap, MiB]
  });
    console.log(myMap);

//   Create a layer control
//   Pass in our baseMaps and overlayMaps
//   Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
   }).addTo(myMap);

//   //Add legend to myMap
//   legend.addTo(myMap);
}