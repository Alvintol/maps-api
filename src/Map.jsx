import { GoogleMap } from '@react-google-maps/api';
export const Map = ({ center }) => {
  return (
    <div id='map'>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName='map-container'
      />
    </div>
  );
};
