import { Flight } from "../types";

export interface IFlight extends Flight {
  getData(): Flight;
}
