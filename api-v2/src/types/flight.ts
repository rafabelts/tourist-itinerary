export type Flight = {
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
};
