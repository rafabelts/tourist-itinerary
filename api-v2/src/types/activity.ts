export type Activity = {
  type: string;
  name: string;
  price: Price;
  pictures: string;
  bookingLink: string;
  minimumDuration: string;
};

type Price = {
  amount: string;
  currencyCode: string;
};
