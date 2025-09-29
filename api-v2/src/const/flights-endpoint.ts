const FLIGHTS_BASE_URL =
  "https://test.api.amadeus.com/v2/shopping/flight-offers";

type FlightRequestParams = {
  origin: string;
  destination: string;
  departureDate: Date;
  adults: number;
};

export const getFlightsEndpoint = ({
  origin,
  destination,
  departureDate,
  adults,
}: FlightRequestParams) => {
  return `${FLIGHTS_BASE_URL}?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=${adults}&nonStop=false&max=2`;
};
