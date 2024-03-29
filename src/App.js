import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer} from "react-leaflet";
import Markers from './Markers'
import {useState, Component} from 'react';

function App(){

  var request = new XMLHttpRequest();

  request.open('GET', `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248a44e1f898e7a4c30885cd3b7b6a738e3
  &start=8.681495,49.41461
  &end=8.687872,49.420318`);
  
  request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');
  
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };
  
  request.send();

  console.log(request);

  const [blankMark, makers] = useState();

  function handleClick(){ 
    
  }

  return (
    <div>
    <MapContainer center={[35.616112 , -82.564629]} zoom={16}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {blankMark}
    </MapContainer>
    <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;

// 5b3ce3597851110001cf6248a44e1f898e7a4c30885cd3b7b6a738e3