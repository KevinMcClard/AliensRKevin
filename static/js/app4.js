var myMap = L.map("map", {
  center: [37.7749, -102.4194],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_Key
}).addTo(myMap);

// var url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=10000";
var url = "static/js/GeoJson.json";

d3.json(url, function(bases) {
console.log("-----");
  console.log(bases);
  console.log(bases.features[20]["geometry"].coordinates);
  
  var heatArray = [];

  let features = bases.features;
  features.forEach(f => {
    coords = f.geometry.coordinates;
    heatArray.push([coords[1], coords[0]])
  });

  // for (var i = 0; i < bases.features.length; i++) {
  //   var location = bases.features[i].coordinates;

  //   if (location) {
  //     heatArray.push([location.coordinates[0], location.coordinates[1]]);
  //   }
  // }
  console.log("heatarray", heatArray)

  var heat = L.heatLayer(heatArray, {
    radius: 10,
    blur: 1
  }).addTo(myMap);

});
