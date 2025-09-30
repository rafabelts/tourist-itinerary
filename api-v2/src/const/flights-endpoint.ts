const FLIGHTS_BASE_URL =
  "https://test.api.amadeus.com/v2/shopping/flight-offers";

type FlightRequestParams = {
  ciyCode: string;
  departureDate: string;
  returnDate: string;
};

export const getFlightsEndpoint = ({
  ciyCode,
  departureDate,
  returnDate,
}: FlightRequestParams) => {
  return `${FLIGHTS_BASE_URL}?originLocationCode=MEX&destinationLocationCode=${ciyCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=1&nonStop=false&max=6`;
};
