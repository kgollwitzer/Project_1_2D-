require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "topo-vector"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 8,
          center: [-86.4808,36.9685]
        });

var featureLayer_1 = new FeatureLayer({
  url: "https://services6.arcgis.com/LledJs8ADlUCS7Cz/arcgis/rest/services/BRADD_Tornado_Events/FeatureServer"
});

map.add(featureLayer_1);

var featureLayer_2 = new FeatureLayer({
  url: "https://services6.arcgis.com/LledJs8ADlUCS7Cz/arcgis/rest/services/BRADD_Tornado_Events/FeatureServer/1"
});

map.add(featureLayer_2);

 });