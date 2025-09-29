import type { Activity } from "../types/activity";

export function mapActivities(activities: Array<Activity>): Array<Activity> {
  return activities.map((activity) => {
    return {
      type: activity.type,
      name: activity.name,
      price: activity.price,
      pictures: activity.pictures,
      bookingLink: activity.bookingLink,
      minimumDuration: activity.minimumDuration,
    };
  });
}
