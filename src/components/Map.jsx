import React from 'react'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import marker from '../assests/marker.png'
const Map = ({lat,lon}) => {
   
  return (
   <div className='map-container'>
   <MapContainer center={[lat, lon]} zoom={12} scrollWheelZoom={false}>
    <div className='inner-map'>
      
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat, lon]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  
  </div>
</MapContainer>
  
     </div>
  )
  
}
let DefaultIcon = L.icon({
  iconUrl: marker,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default Map
