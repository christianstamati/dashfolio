import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import "@/env/server";

const withBundleAnalyzer =
	process.env.ANALYZE === "true"
		? require("@next/bundle-analyzer")({ enabled: true })
		: (config: NextConfig) => config;

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
	// Performance optimizations
	compress: true,
	poweredByHeader: false,
	experimental: {
		optimizePackageImports: [
			"@radix-ui/react-dialog",
			"@radix-ui/react-dropdown-menu",
			"@radix-ui/react-popover",
			"@radix-ui/react-select",
			"@radix-ui/react-tooltip",
		],
	},
};

export default withBundleAnalyzer(withPayload(nextConfig));
