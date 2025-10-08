import { IActivity } from "../interfaces";
import { Activity } from "../types";

export class AmadeusActivity implements IActivity {
  type: string;
  name: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  pictures: string;
  bookingLink: string;
  minimumDuration: string;

  constructor(activityData: Activity) {
    this.type = activityData.type;
    this.name = activityData.name;
    this.price = activityData.price;
    this.pictures = activityData.pictures;
    this.bookingLink = activityData.bookingLink;
    this.minimumDuration = activityData.minimumDuration;
  }

  getData(): Activity {
    return {
      type: this.type,
      name: this.name,
      price: this.price,
      pictures: this.pictures,
      bookingLink: this.bookingLink,
      minimumDuration: this.minimumDuration,
    };
  }
}
