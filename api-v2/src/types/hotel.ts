export type Hotel = {
  name: string;
  geoCode: {
    latitude: number;
    longitude: number;
  };
  address: {
    postalCode: string;
    lines: string[];
  };
  rating: number;
  lastUpdate: string;
};
