import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URI: z.string().url(),
    PAYLOAD_SECRET: z.string().min(1),
    AWS_BUCKET_NAME: z.string().min(1),
    AWS_BUCKET_REGION: z.string().min(1),
    AWS_ACCESS_TOKEN: z.string().min(1),
    AWS_SECRET_TOKEN: z.string().min(1),
  },
  experimental__runtimeEnv: process.env,
});
