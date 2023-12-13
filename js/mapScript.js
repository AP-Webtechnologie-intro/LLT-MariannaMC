let map = L.map('WebxMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let CMRIcon = L.icon({
  iconUrl: 'opdracht1/Logo/logo_cmr_christ_mon_redempteur-removebg-preview.png',
  shadowUrl: 'images/coffee-icon-shadow.png',

  iconSize:     [60, 60], 
  shadowSize:   [60, 60], 
  iconAnchor:   [0, 60], 
  shadowAnchor: [0, 60],  
  popupAnchor:  [0, 0] 
});

L.marker([51.23009, 4.41616], {icon: coffeeIcon}).addTo(map);