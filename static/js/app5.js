// // // // Create function to create circular features
// function createFeatures(militaryBases) {
// // console.log("-----------");
// // console.log(militaryBases.features["geometry"].coordinates);
// var darpa = L.geoJson(militaryBases,{
//   pointToLayer: function (features, latlng) {
//     return L.circleMarker(latlng, geojsonMarkerOptions)
//     .bindPopup("<h3>" + "Location: " + features.properties[0] +
//     "</h3><hr><p>" + "Date/Time: " + new Date (features.properties) + "<br>" +
//     "Magnitude: " + features.properties + "</p>");
//   }
// });

// Sending our earthquakes layer to the createMap function
// createMap(darpa);
// }


var myMap = L.map("map", {
  center: [37.7749, -102.4194],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_Key
}).addTo(myMap);

 
//-----------------------------------------

// var url = "static/js/GeoJson.json";

// d3.json(url, function(UFO) {
// console.log("-----");
// console.log(UFO);
// console.log(UFO.features[20]["geometry"].coordinates);

// var heatArray = [];

// let features = UFO.features;
// features.forEach(f => {
//   coords = f.geometry.coordinates;
//   heatArray.push([coords[1], coords[0]])
// });

// console.log("heatarray", heatArray)

// var heat = L.heatLayer(heatArray, {
//   radius: 10,
//   blur: 1
// }).addTo(myMap);
// });

//-----------------------------------------
var geojsonMarkerOptions = {
	radius: 10,
	fillColor: "#ff0000",
	color: "#000",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
};

d3.json("static/js/militarybases.json", function(bases) {
  // Once we get a response, send the data.features object to the createFeatures function
  console.log("-----");
  console.log(bases);
  console.log(bases.features[20]["geometry"].coordinates);
  
  var baseArray = [];

  let features = bases.features;
  features.forEach(f => {
    coords2 = f.geometry.coordinates;
    baseArray.push([coords2[1], coords2[0]])
  });

  console.log("baseArray", baseArray)

var circleMarker = L.circleMarker(baseArray, 
  // radius: 10,
  // blur: 1
).addTo(myMap);
});
