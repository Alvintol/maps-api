import { useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { Map } from './Map';

const App = () => {
  // Imports secret api key from .env file
  const apiKey = import.meta.env.VITE_API_KEY;
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });

  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey });

  useEffect(() => {
    // Takes provided position data and returns only the required latitude and longitude
    const getCurrentLatLon = (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      setCenter({ lat, lng });
    };

    navigator.geolocation.getCurrentPosition(getCurrentLatLon);
    // console.log('GETCURRLATLON:', getCurrentLatLon)
    console.log('LAT:', center.latitude);
    console.log('LONG:', center.longitude);
  }, [center]);

  return !isLoaded ? (
    <div id='loading'>Loading Map...</div>
  ) : (
    <Map center={center} />
  );
};

export default App;
