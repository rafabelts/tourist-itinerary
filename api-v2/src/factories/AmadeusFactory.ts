import { getActivitiesEndpoint, getHotelsEndpoint } from "../const";
import { getFlightsEndpoint } from "../const/flights-endpoint";
import { IActivity, IFlight, IHotel, ITouristItinerary } from "../interfaces";
import {
  AmadeusActivity,
  AmadeusFlight,
  AmadeusHotel,
} from "../tourist-elements";
import { Activity, Flight, Hotel } from "../types";
import { baseRequest } from "../utils/base-request";

export class AmadeusFactory implements ITouristItinerary {
  authToken: string;
  cityCode: string;
  departureDate: string;
  returnDate: string;

  constructor(
    authToken: string,
    cityCode: string,
    departureDate: string,
    returnDate: string,
  ) {
    this.authToken = authToken;
    this.cityCode = cityCode;
    this.departureDate = departureDate;
    this.returnDate = returnDate;
  }

  async getHotels(): Promise<Array<IHotel>> {
    const hotels = await baseRequest<Hotel>(
      this.authToken,
      getHotelsEndpoint(this.cityCode),
    );

    return hotels.map((hotel: Hotel) => new AmadeusHotel(hotel));
  }

  async getActivities(): Promise<Array<IActivity>> {
    const activities = await baseRequest<Activity>(
      this.authToken,
      getActivitiesEndpoint(this.cityCode),
    );

    return activities.map(
      (activity: Activity) => new AmadeusActivity(activity),
    );
  }

  async getFlights(): Promise<Array<IFlight>> {
    const flights = await baseRequest<Flight>(
      this.authToken,
      getFlightsEndpoint({
        ciyCode: this.cityCode,
        departureDate: this.departureDate,
        returnDate: this.returnDate,
      }),
    );

    return flights.map((flight: Flight) => new AmadeusFlight(flight));
  }
}
