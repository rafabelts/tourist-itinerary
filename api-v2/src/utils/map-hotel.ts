import { Hotel } from "../types";

export function mapHotels(hotels: Array<Hotel>): Array<Hotel> {
  return hotels.map((hotel: Hotel) => {
    return {
      name: hotel.name,
      geoCode: hotel.geoCode,
      address: hotel.address,
      rating: hotel.rating,
      lastUpdate: hotel.lastUpdate,
    };
  });
}
