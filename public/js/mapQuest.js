function initMap() {
L.mapquest.key = 'A68BKbtQGV0LqGKr4ZNJHoSyvJDrABHC';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [32.878, -117.236],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12,
  zoomControl: false
});

L.marker([51.5, -0.09]).addTo(map);
}