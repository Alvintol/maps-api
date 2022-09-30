import { useLoadScript } from '@react-google-maps/api';
import './App.css';
import { Map } from './Map';

const App = () => {
  // Imports secret api key from .env file
  const apiKey = import.meta.env.VITE_API_KEY;

  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey });

  function getLatLon(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
      console.log("Latitude is "+latitude);
      console.log("Longitude is "+longitude);
  }
  console.log('NAVIGATOR:', navigator.geolocation.getCurrentPosition(getLatLon))

  return !isLoaded ? (
    <div id='loading'>Loading Map...</div>
  ) : (
    <Map 
    center={center}
    />
  );
};

export default App;
