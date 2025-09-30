import { Hono } from "hono";
import { Variables } from "../types";
import { getHotels } from "../daos/get-hotels";
import { getActivities } from "../daos/get-activities";
import { getFlights } from "../daos/get-flights";
const tourismRouter = new Hono<{ Variables: Variables }>();

tourismRouter.get("/", async (c) => {
  const cityCode = c.req.query("cityCode");
  const departureDate = c.req.query("departureDate");
  const returnDate = c.req.query("returnDate");

  if (!cityCode || !departureDate || !returnDate)
    return c.text("Invalid arguments");

  const authToken = c.get("amadeusToken");

  const hotels = await getHotels(authToken, cityCode);
  const activities = await getActivities(authToken, cityCode);
  const flights = await getFlights(
    authToken,
    cityCode,
    departureDate,
    returnDate,
  );

  return c.json({
    hotels,
    activities,
    flights,
  });
});

export default tourismRouter;
