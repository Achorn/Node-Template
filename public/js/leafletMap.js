/* eslint-disable */
import leaflet from 'leaflet';

export const displayMap = (locations) => {
  // 1) Map and Layer
  var map = leaflet.map('map', { zoomControl: false, keyboard: true });

  var CartoDB_Voyager = leaflet.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      // maxZoom: 20
    },
  );
  CartoDB_Voyager.addTo(map);

  // 2) add locations to layer

  var myCustomIcon = leaflet.icon({
    iconUrl: '../img/pin.png', // URL to your custom icon image
    iconSize: [32, 40], // size of the icon
    iconAnchor: [16, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -20], // point from which the popup should open relative to the iconAnchor
  });

  const points = [];
  locations.forEach((loc) => {
    points.push([loc.coordinates[1], loc.coordinates[0]]);
    leaflet
      .marker([loc.coordinates[1], loc.coordinates[0]], { icon: myCustomIcon })
      .addTo(map)
      .bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`, {
        autoClose: false,
      })
      .openPopup()
      .on('mouseover', function (e) {
        this.openPopup();
      })
      .on('mouseout', function (e) {
        this.closePopup();
      });
  });

  // 3) ZOOM In/out to locations
  const bounds = leaflet.latLngBounds(points).pad(0.5);
  map.fitBounds(bounds);

  map.scrollWheelZoom.disable(); //to disable zoom by mouse wheel
};
