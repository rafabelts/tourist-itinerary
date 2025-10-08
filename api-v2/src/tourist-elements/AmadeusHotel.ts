import { IHotel } from "../interfaces";
import { Hotel } from "../types";

export class AmadeusHotel implements IHotel {
  name: string;
  geoCode: { latitude: number; longitude: number };
  address: { postalCode: string; lines: string[] };
  rating: number;
  lastUpdate: string;

  constructor(hotelData: Hotel) {
    this.name = hotelData.name;
    this.geoCode = hotelData.geoCode;
    this.address = hotelData.address;
    this.rating = hotelData.rating;
    this.lastUpdate = hotelData.lastUpdate;
  }

  getData(): Hotel {
    return {
      name: this.name,
      geoCode: this.geoCode,
      address: this.address,
      rating: this.rating,
      lastUpdate: this.lastUpdate,
    };
  }
}
