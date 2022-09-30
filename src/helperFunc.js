// Takes provided position data and returns only the required latitude and longitude
export const getCurrentLatLon = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  return {
    latitude,
    longitude
  }
}