import { Hotel } from "../types";

export interface IHotel extends Hotel {
  getData(): Hotel;
}
