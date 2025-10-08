import { IHotel, IFlight, IActivity } from ".";

export interface ITouristItinerary {
  getHotels(): Promise<Array<IHotel>>;
  getActivities(): Promise<Array<IActivity>>;
  getFlights(): Promise<Array<IFlight>>;
}
