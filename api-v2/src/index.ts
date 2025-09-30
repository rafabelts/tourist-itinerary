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
  return c.text("Hola mundo, como estan!");
});

app.route("/tourism", tourismRouter);

Bun.serve({
  fetch: app.fetch,
  port: 3000,
  idleTimeout: 255,
});

export default app;
