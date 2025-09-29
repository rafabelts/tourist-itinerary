import type { Hotel } from "../types";
import type { Activity } from "../types/activity";

type ApiResponse = {
  hotels: Array<Hotel>;
  activities: Array<Activity>;
};

export async function fetchPlaceData(cityCode: string): Promise<ApiResponse> {
  const request = await fetch(
    `http://localhost:3000/tourism?cityCode=${cityCode}`,
  );

  if (!request)
    return {
      hotels: [],
      activities: [],
    };

  return request.json();
}
