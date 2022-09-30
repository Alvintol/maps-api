import { useLoadScript } from '@react-google-maps/api';
import './App.css';
import { Map } from './Map';

const App = () => {
  // Imports secret api key from .env file
  const apiKey = import.meta.env.VITE_API_KEY;
  const center = {
    latitude: '',
    longitude: '',
  };

  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey });

  // Takes provided position data and returns only the required latitude and longitude
  const getCurrentLatLon = (position) => {
    center.latitude = position.coords.latitude;
    center.longitude = position.coords.longitude;

    return {
      latitude,
      longitude,
    };
  };

  // const { latitude, longitude } =
  //   navigator.geolocation.getCurrentPosition(getCurrentLatLon);

  navigator.geolocation.getCurrentPosition(getCurrentLatLon);
  // console.log('GETCURRLATLON:', getCurrentLatLon)
  // console.log('LAT:', latitude)
  // console.log('LONG:', longitude)

  return !isLoaded ? (
    <div id='loading'>Loading Map...</div>
  ) : (
    <Map center={center} />
  );
};

export default App;
