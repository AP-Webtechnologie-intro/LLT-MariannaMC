var Kerkmap = L.map('Kerkmap').setView([51.2204, 4.4557], 11);

L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
    attribution:
        '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
        ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
    maxZoom: 15
}).addTo(Kerkmap);

var marker = L.marker([51.2204, 4.4557]).addTo(Kerkmap).bindPopup('Cogelsplein 33');

