import { Activity } from "../types";
import { baseRequest } from "../utils/base-request";
import { mapActivities } from "../utils/map-activity";

export async function getActivities(
  authToken: string,
  latitude: number,
  longitude: number,
) {
  const activities = await baseRequest<Activity>(
    authToken,
    `https://test.api.amadeus.com/v1/shopping/activities?latitude=${latitude}&longitude=${longitude}&radius=10&lang=ES`,
  );
  return mapActivities(activities);
}
