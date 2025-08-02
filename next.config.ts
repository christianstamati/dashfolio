import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import "@/env/server";

const nextConfig: NextConfig = {
	/* config options here */
};

export default withPayload(nextConfig);
