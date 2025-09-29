const ACTIVITIES_BASE_URL =
  "https://test.api.amadeus.com/v1/shopping/activities";

export const getActivitiesEndpoint = (latitude: number, longitude: number) => {
  return `${ACTIVITIES_BASE_URL}?latitude=${latitude}&longitude=${longitude}&radius=10&lang=ES`;
};
