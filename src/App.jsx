import { useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { Map } from './Map';
import { Search } from './Search';

const App = () => {
  // Imports secret api key from .env file
  const apiKey = import.meta.env.VITE_API_KEY;

  // Initializes center of map to be latitude:0 & longitude:0
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });

  // Loads api key to maps api in order for map to function
  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey });

  useEffect(() => {
    // Takes provided IP position data and returns only the required latitude and longitude
    const getCurrentLatLon = (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      console.log(lat, lng);
      // Sets map center with IP latitude/longitude
      setCenter({ lat, lng });
    };

    // Activates the map to change to users city location
    navigator.geolocation.getCurrentPosition(getCurrentLatLon);
  }, []);

  return !isLoaded ? (
    <div id='loading'>Loading Map...</div>
  ) : (
    <>
      <Map center={center} />
      <Search />
    </>
  );
};

export default App;
