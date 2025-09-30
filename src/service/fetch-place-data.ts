import type { Hotel, Activity, Flight } from "../types";

type ApiResponse = {
  hotels: Array<Hotel>;
  activities: Array<Activity>;
  flights: Array<Flight>;
};

export async function fetchPlaceData(
  cityCode: string,
  startDate: string,
  endDate: string,
): Promise<ApiResponse> {
  const request = await fetch(
    `http://localhost:3000/tourism?cityCode=${cityCode}&departureDate=${startDate}&returnDate=${endDate}`,
  );

  if (!request)
    return {
      hotels: [],
      activities: [],
      flights: [],
    };

  return request.json();
}
