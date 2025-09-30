import { Hono } from "hono";
import { Variables } from "../types";
const tourismRouter = new Hono<{ Variables: Variables }>();

tourismRouter.get("/", async (c) => {
  return c.text("Aqui trabajaremos");
});

export default tourismRouter;
