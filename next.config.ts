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

	experimental: {
		optimizeCss: true,
		optimizePackageImports: [
			"@fortawesome/react-fontawesome",
			"lucide-react",
			"@radix-ui/react-avatar",
			"@radix-ui/react-dialog",
			"@radix-ui/react-dropdown-menu",
			"@radix-ui/react-label",
			"@radix-ui/react-popover",
			"@radix-ui/react-select",
			"@radix-ui/react-separator",
			"@radix-ui/react-slot",
			"@radix-ui/react-tooltip",
		],
		esmExternals: "loose",
	},

	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
		// Remove legacy JavaScript polyfills
		styledComponents: false,
	},

	// Target modern browsers only - excludes IE11 and very old browsers
	env: {
		BROWSERSLIST: "> 0.5%, last 2 versions, not dead, not ie 11",
	},
};

export default withPayload(nextConfig);
