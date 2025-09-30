import { getHotelsEndpoint } from "../const";
import { Hotel } from "../types";
import { baseRequest } from "../utils/base-request";

export async function getHotels(authToken: string, cityCode: string) {
  const request = await baseRequest<Hotel>(
    authToken,
    getHotelsEndpoint(cityCode),
  );

  return mapHotels(request);
}

function mapHotels(hotels: Array<Hotel>) {
  return hotels.map((h) => {
    return {
      name: h.name,
      geoCode: h.geoCode,
      address: h.address,
      rating: h.rating,
      lastUpdate: h.lastUpdate,
    };
  });
}
