import { Hotel } from "../types";
import { baseRequest } from "../utils/base-request";
import { mapHotels } from "../utils/map-hotel";

export async function getHotels(authToken: string, cityCode: string) {
  const hotels = await baseRequest<Hotel>(
    authToken,
    `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}&radius=5&radiusUnit=KM&ratings=5&hotelSource=ALL`,
  );

  return mapHotels(hotels);
}
