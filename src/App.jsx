import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import './App.css';

const App = () => {
  // Imports secret api key from .env file
  const apiKey = import.meta.env.VITE_API_KEY;

  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey });
  
  !isLoaded ? 
    <div id='loading'>Loading Map...</div> : 
    <div id='app'>Map</div>;
};

export default App;
