import { getActivitiesEndpoint } from "../const";
import { Activity } from "../types";
import { baseRequest } from "../utils/base-request";

export async function getActivities(authToken: string, cityCode: string) {
  const request = await baseRequest<Activity>(
    authToken,
    getActivitiesEndpoint(cityCode),
  );

  return mapActivities(request);
}

function mapActivities(activities: Array<Activity>) {
  return activities.map((a) => {
    return {
      type: a.type,
      name: a.name,
      price: {
        amount: a.price.amount,
        currencyCode: a.price.currencyCode,
      },
      pictures: a.pictures[0],
      bookingLink: a.bookingLink,
      minimumDuration: a.minimumDuration,
    };
  });
}
