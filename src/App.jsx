import { useLoadScript } from '@react-google-maps/api';
import './App.css';
import { Map } from './Map';

const App = () => {
  // Imports secret api key from .env file
  const apiKey = import.meta.env.VITE_API_KEY;

  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey });

  return !isLoaded ? (
    <div id='loading'>Loading Map...</div>
  ) : (
    <Map />
  );
};

export default App;
