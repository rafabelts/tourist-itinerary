import { Hono } from "hono";
import { cors } from "hono/cors";
import tourismRouter from "./routes/tourism";
import { amadeusMiddleware } from "./middleware/auth-token";

const app = new Hono();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use("*", amadeusMiddleware);

app.get("/", async (c) => {
  return c.text("Hola mundo!");
});

app.route("/tourism", tourismRouter);

export default app;
