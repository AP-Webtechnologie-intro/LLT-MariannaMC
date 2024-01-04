var map = L.map('map').setView([51.23009, 4.41616], 12);
L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
 attribution:
     '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
     ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
 maxZoom: 18
}).addTo(map);
var marker = L.marker([51.23009, 4.41616]).addTo(map);