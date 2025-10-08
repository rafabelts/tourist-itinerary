import { IActivity, IFlight, IHotel, ITouristItinerary } from "../interfaces";
import { activitiesMock } from "../mocks/activities";
import { hotelsMock } from "../mocks/hotels";
import { MockActivity, MockHotel } from "../tourist-elements";

export class MockFactory implements ITouristItinerary {
  cityCode: "CUN" | "PAR" | "TYO";

  constructor(cityCode: "CUN" | "PAR" | "TYO") {
    this.cityCode = cityCode;
  }

  async getHotels(): Promise<Array<IHotel>> {
    const hotels = hotelsMock[this.cityCode];

    return hotels.map((hotel) => new MockHotel(hotel));
  }

  async getActivities(): Promise<Array<IActivity>> {
    const activities = activitiesMock[this.cityCode];

    return activities.map((activity) => new MockActivity(activity));
  }

  async getFlights(): Promise<Array<IFlight>> {
    //const flights = flightsMock[this.cityCode];

    return [];
  }
}
