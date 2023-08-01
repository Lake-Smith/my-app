import './App.css';
import 'leaflet/dist/leaflet.css';
import { Marker, Popup} from "react-leaflet";
import {Icon} from "leaflet";

export default function Markers(){

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
  
  const markers = [
    {
      geocode: [35.615162,-82.568466],
      popUp: "ponder hall"
    },
    {
      geocode: [35.618800, -82.564690],
      popUp: "lapinksi"
    }
  ];
  
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776000.png",
    iconSize: [38,38]
  })

  return (  
    <div>
        {markers.map(marker => (
            <Marker position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
            </Marker>
            ))
        }
    </div>
    
  );

}