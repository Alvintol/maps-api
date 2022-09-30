import { useLoadScript } from '@react-google-maps/api';
import { Search } from './Search';
import { useState } from 'react';
import { Alert } from './Alert';
import { Map } from './Map';
import './App.css';
import { useEffect } from 'react';

const App = () => {
  // Imports secret api key from .env file
  const apiKey = import.meta.env.VITE_API_KEY;

  // Initializes center of map to be latitude:0 & longitude:0
  const [mapCenter, setMapCenter] = useState({
    lat: 0,
    lng: 0,
  });

  // Initializes search box to be empty
  const [searchBox, setSearchBox] = useState('');

  // Initializes err variable
  const [err, setErr] = useState(false);

  // Loads api key/password to maps api in order for map to function
  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey });

  // Retrieves latitude and longitude coordinates from user input
  const getNewLocation = () => {
    // Dynamic url for retrieving data based on user input
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchBox}&key=${apiKey}`;

    // Checked the api/url for the data
    fetch(url)
      // Converts data to readable & usable format
      .then((res) => res.json())
      .then((data) => {
        // Isolates Latitude/Longitude information from translated data
        const { lat, lng } = data.results[0].geometry.location;

        // Changes map center to user input location
        setMapCenter({
          lat,
          lng,
        });
      })
      // Conditional if user input returns no data
      .catch((err) => {
        // Changes err variable to true for 3 seconds to allow err pop up to show
        setErr(true);
        setTimeout(() => {
          setErr(false);
        }, 3000);
        console.log('Location Not Valid or Found');
      });
  };

  // Conditional statement to populate a pop up to the browser
  const locationNotFound = () => {
    if (err) {
      return <Alert />;
    }
  };

  useEffect(() => {
    // Takes provided IP position data and returns only the required latitude and longitude
    const getCurrentLatLon = (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Sets map center with IP latitude/longitude
      setMapCenter({ lat, lng });
    };

    // Activates the map to change to users city location
    navigator.geolocation.getCurrentPosition(getCurrentLatLon);
  }, []);

  return !isLoaded ? (
    <div id='loading'>Loading Map...</div>
  ) : (
    <>
      {locationNotFound()}
      <Map center={mapCenter} />
      <Search
        searchBox={searchBox}
        setSearchBox={setSearchBox}
        getNewLocation={getNewLocation}
      />
    </>
  );
};

export default App;
