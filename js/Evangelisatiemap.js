
var Evmap = L.map('Evmap').setView([51.2204, 4.4557], 11);

L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
    attribution:
        '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
        ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
    maxZoom: 15
}).addTo(Evmap);

var marker1 = L.marker([51.2204, 4.4557]).addTo(Evmap);
var marker2 = L.marker([51.2159, 4.4023]).addTo(Evmap);
var marker3 = L.marker([51.2099, 4.3994]).addTo(Evmap);
