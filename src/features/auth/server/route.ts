import { Hono } from "hono";

// Middleare
import { zValidator } from "@hono/zod-validator";
import { loginSchema, registerSchema } from "../schemas";
import { z } from "zod";

const app = new Hono().post(
  "/sginin",
  zValidator("json", loginSchema),
  async (c) => {
    const { email, password } = c.req.valid("json");

    return c.json({ email, password });
  }
)

.post(  "sginup",
  zValidator("json", registerSchema),
  async (c) => {
    const { name, email, password } = c.req.valid("json");

    return c.json({ name, email, password });
  }
)



export default app;
