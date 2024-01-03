import React, { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const Map = () => {

// نقشه انگلیسی

  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);




  return <div id="map" style={{ minHeight: '560px',zIndex:0 }} />;
};

const MapTopRegions = () => {
  return (
    <div>
      
      <Map />
    </div>
  );
};

export default MapTopRegions;
