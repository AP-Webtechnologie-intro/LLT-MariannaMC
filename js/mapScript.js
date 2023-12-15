let map = L.map('WebxMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let CMRIcon = L.icon({
  iconUrl: 'Opdracht1/Kerk/Logo/logo_cmr_christ_mon_redemteur-removebg-preview.png',

  iconSize:     [60, 60], 
  iconAnchor:   [0, 60], 
  popupAnchor:  [0, 0], 
});

L.marker([51.23009, 4.41616], {icon: CMRIcon}).addTo(map);