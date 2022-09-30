import { GoogleMap } from '@react-google-maps/api'
export const Map = () => {
  return (
    <div>
      <GoogleMap
      zoom={10}
      center={{lat: 44, lng:-80}}
      mapContainerClassName='map-container'
      />
    </div>
  )
}
