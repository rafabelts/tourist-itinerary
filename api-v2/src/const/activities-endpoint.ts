import { CITIES } from "./cities";

const ACTIVITIES_BASE_URL =
  "https://test.api.amadeus.com/v1/shopping/activities";

export const getActivitiesEndpoint = (cityCode: string) => {
  type CityCode = keyof typeof CITIES;
  const city = CITIES[cityCode as CityCode];

  return `${ACTIVITIES_BASE_URL}?latitude=${city.latitude}&longitude=${city.longitude}&radius=10&lang=ES`;
};
