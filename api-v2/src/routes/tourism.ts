import { Hono } from "hono";
import { getHotels, getActivities } from "../dao";
import { Variables } from "../types";
import { CITIES } from "../const";

type CityCode = keyof typeof CITIES;

const tourismRouter = new Hono<{ Variables: Variables }>();

tourismRouter.get("/", async (c) => {
  const cityCode = c.req.query("cityCode") as CityCode;

  if (!cityCode) throw new Error("No city given");

  const token = c.get("amadeusToken");

  const hotels = await getHotels(token, cityCode);
  const activities = await getActivities(
    token,
    CITIES[cityCode].latitude,
    CITIES[cityCode].longitude,
  );

  return c.json({ hotels, activities });
});

export default tourismRouter;
