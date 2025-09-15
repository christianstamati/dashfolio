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
	compress: true,
	poweredByHeader: false,
	generateEtags: true,

	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},

	// Target modern browsers only - excludes IE11 and very old browsers
	env: {
		BROWSERSLIST: "> 0.5%, last 2 versions, not dead, not ie 11",
	},
};

export default withPayload(nextConfig);
