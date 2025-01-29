import { Hono } from "hono";

import { zValidator } from "@hono/zod-validator";

import { createWorkspaceSchema } from "../schemas";

import { sessionMiddleware } from "@/lib/session-middleware";

import { DATABASE_ID, IMAGES_BUCKET_ID, WORKSPACES_ID } from "@/config";
import { ID } from "node-appwrite";

const app = new Hono()
    .post(
        "/",
        zValidator("form", createWorkspaceSchema),
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");
            const sorage = c.get("storage");
            const user = c.get("user");

            const { name, image } = c.req.valid("form");

            let uplodeImageUrl: string | undefined;

            if (image instanceof File) {
                const file = await sorage.createFile(
                    IMAGES_BUCKET_ID,
                    ID.unique(),
                    image,
                );

                const arrayBuffer = await sorage.getFilePreview(
                    IMAGES_BUCKET_ID,
                    file.$id,
                );

                uplodeImageUrl = `data:image/png;base64,${Buffer.from(arrayBuffer).toLocaleString("base64")}`
            }
            const workspace = await databases.createDocument(
                DATABASE_ID,
                WORKSPACES_ID,
                ID.unique(),
                {
                    name,
                    userid: user.$id,
                    imageUrl: uplodeImageUrl,
                },
            );
            return c.json({ data: workspace });
        }
    )

export default app;