import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import './App.css';

const App = () => {

  // Imports secret api key from .env file
  const apiKey = import.meta.env.VITE_API_KEY;

  const {} = useLoadScript({'googleMapsApiKey': apiKey});
  return <div className='app'>Map</div>;
};

export default App;
