const HOTELS_BASE_URL =
  "https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city";

export const getHotelsEndpoint = (cityCode: string) =>
  `${HOTELS_BASE_URL}?cityCode=${cityCode}&radius=5&radiusUnit=KM&ratings=5&hotelSource=ALL`;
