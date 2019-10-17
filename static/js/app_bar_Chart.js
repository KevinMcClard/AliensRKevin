// var myMap = L.map("map", {
//     center: [37.7749, -102.4194],
//     zoom: 5
//   });
  
//   L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.dark",
//     accessToken: API_Key
//   }).addTo(myMap);
  
  // var url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=10000";
  var url = "static/js/GeoJson_Shapes.json";
  
  d3.json(url, function(bases) {
  console.log("-----");
    console.log(bases);
    console.log(bases.features[20]["geometry"].properties[2]);
    
    var shapes = [];
  
    let features = bases.features;
    features.forEach(f => {
      coords = f.geometry.properties;
      shapes.push([coords[2]])
    });
  
    console.log("heatarray", shapes)
 
  });
  
  var myMap = [
    {
      x: shapes,
      y: [1,2,3,4,5,6,7],
      type: 'bar'
    }
  ];
  
  Plotly.newPlot("map", myMap);  