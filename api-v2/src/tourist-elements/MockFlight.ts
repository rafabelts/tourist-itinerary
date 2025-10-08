import { IFlight } from "../interfaces";
import { Flight } from "../types";

export class MockFlight implements IFlight {
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
    this.price = {
      total: flightData.price.total,
      currency: flightData.price.currency,
    };
    this.itineraries = {
      duration: flightData.itineraries.duration,
      segments: {
        from: flightData.itineraries.segments.from,
        to: flightData.itineraries.segments.to,
        departure: {
          iataCode: flightData.itineraries.segments.departure.iataCode,
          terminal: flightData.itineraries.segments.departure.terminal,
          at: flightData.itineraries.segments.departure.at,
        },
        arrival: {
          iataCode: flightData.itineraries.segments.arrival.iataCode,
          terminal: flightData.itineraries.segments.arrival.terminal,
          at: flightData.itineraries.segments.arrival.at,
        },
        airline: flightData.itineraries.segments.airline,
        flightNumber: flightData.itineraries.segments.flightNumber,
        duration: flightData.itineraries.segments.duration,
      },
    };
  }

  getData(): Flight {
    return {
      id: this.id,
      price: this.price,
      itineraries: this.itineraries,
    };
  }
}
