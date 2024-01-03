
import React, { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const Map = () => {

// نقشه فارسی
useEffect(() => {
    const map = L.map('map').setView([35.6892, 51.3890], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ minHeight: '560px',zIndex:0 }} />;
};

const PersionMapTopRegion = () => {
  return (
    <div>
      
      <Map />
    </div>
  );
};

export default PersionMapTopRegion;
