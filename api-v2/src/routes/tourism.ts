import { Hono } from "hono";
import { Variables } from "../types";
import { AmadeusFactory } from "../factories/AmadeusFactory";
import { MockFactory } from "../factories/MockFactory";

const tourismRouter = new Hono<{ Variables: Variables }>();

tourismRouter.get("/", async (c) => {
  const cityCode = c.req.query("cityCode");
  const departureDate = c.req.query("departureDate");
  const returnDate = c.req.query("returnDate");

  if (!cityCode || !departureDate || !returnDate)
    return c.text("Invalid arguments");

  const authToken = c.get("amadeusToken");

  const amadeusFactory = new AmadeusFactory(
    authToken,
    cityCode,
    departureDate,
    returnDate,
  );

  const mockFactory = new MockFactory(cityCode as "CUN" | "PAR" | "TYO");

  const hotels = await amadeusFactory.getHotels();
  const activities = await amadeusFactory.getActivities();
  const flights = await amadeusFactory.getFlights();

  const mockHotels = await mockFactory.getHotels();
  const mockActivities = await mockFactory.getActivities();
  const mockFlights = await mockFactory.getFlights();

  return c.json({
    hotels: hotels.map((hotel) => hotel.getData()),
    activities: activities.map((activity) => activity.getData()),
    flights: flights.map((flight) => flight.getData()),
  });
});

export default tourismRouter;
