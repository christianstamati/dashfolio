import pino from "pino";
import { env } from "@/env/client";

//"fatal" | "error" | "warn" | "info" | "debug" | "trace" | "silent" | string
const logger = pino({
  level: env.NEXT_PUBLIC_LOG_LEVEL,
});

export default logger;
