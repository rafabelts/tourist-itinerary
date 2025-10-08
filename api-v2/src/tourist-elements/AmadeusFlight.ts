import { IFlight } from "../interfaces";
import { Flight } from "../types";

export class AmadeusFlight implements IFlight {
  id: string;
  price: {
    total: string;
    currency: string;
  };
  itineraries: {
    duration: string;
    segments: {
      from: string;
      to: string;
      departure: {
        iataCode: string;
        terminal: string;
        at: string;
      };
      arrival: {
        iataCode: string;
        terminal: string;
        at: string;
      };
      airline: string;
      flightNumber: string;
      duration: string;
      stops?: {
        iataCode: string;
        duration: string;
        arrivalAt: string;
        departureAt: string;
      };
    };
  };

  constructor(flightData: Flight) {
    this.id = flightData.id;
    this.price = flightData.price;
    this.itineraries = flightData.itineraries;
  }

  getData(): Flight {
    return {
      id: this.id,
      price: this.price,
      itineraries: this.itineraries,
    };
  }
}
