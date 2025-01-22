// Main App routes

import { Hono } from "hono";
import { handle } from "hono/vercel";

import auth from "@/features/dashboard/auth/server/route";
import workspaces from "@/features/dashboard/workspaces/server/route";
import front from "@/features/front/server/route"

const app = new Hono().basePath("/api");
 
const routes = app 
    .route("/", front)
    .route("/dashboard/auth", auth)
    .route("/dashboard/workspaces", workspaces)

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
