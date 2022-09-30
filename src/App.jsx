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

  // Takes provided position data and returns only the required latitude and longitude
  const getCurrentLatLon = (position) => {
    center.latitude = position.coords.latitude;
    center.longitude = position.coords.longitude;
    console.log(typeof center.latitude);
    console.log(typeof center.longitude);
  };

  navigator.geolocation.getCurrentPosition(getCurrentLatLon);
  // console.log('GETCURRLATLON:', getCurrentLatLon)
  console.log('LAT:', center.latitude);
  console.log('LONG:', center.longitude);

  return !isLoaded ? (
    <div id='loading'>Loading Map...</div>
  ) : (
    <Map center={center} />
  );
};

export default App;
