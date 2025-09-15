import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import "@/env/server";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
			{
				protocol: "https",
				hostname: "dashfolio-prod.s3.eu-central-1.amazonaws.com",
			},
		],
	},
	experimental: {
		reactCompiler: true,
	},
	compress: true,
	poweredByHeader: false,
};

export default withPayload(nextConfig);
