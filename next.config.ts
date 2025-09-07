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
		formats: ["image/webp", "image/avif"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
	},
	compress: true,
	poweredByHeader: false,
	generateEtags: true,
	experimental: {
		scrollRestoration: true,
		inlineCss: true,
	},
	swcMinify: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	// Configure SWC to target modern browsers only
	swcMinifyOptions: {
		compress: {
			drop_console: process.env.NODE_ENV === "production",
		},
	},
	// Target modern browsers only - excludes IE11 and very old browsers
	env: {
		BROWSERSLIST: "> 0.5%, last 2 versions, not dead, not ie 11",
	},
};

export default withPayload(nextConfig);
