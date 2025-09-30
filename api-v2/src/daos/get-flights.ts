import { getFlightsEndpoint } from "../const/flights-endpoint";
import { Flight } from "../types";
import { baseRequest } from "../utils/base-request";

export async function getFlights(
  authToken: string,
  cityCode: string,
  departureDate: string,
  returnDate: string,
) {
  const request = await baseRequest<Flight>(
    authToken,
    getFlightsEndpoint({
      ciyCode: cityCode,
      departureDate: departureDate,
      returnDate: returnDate,
    }),
  );

  return mapFlights(request);
}

function mapFlights(flights: Array<Flight>) {
  return flights.map((f) => {
    return {
      id: f.id,
      price: {
        total: f.price.total,
        currency: f.price.currency,
      },
      itineraries: f.itineraries,
    };
  });
}
