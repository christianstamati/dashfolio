import type { MetadataRoute } from "next";
import { getServerSideURL } from "@/payload/utils/getURL";

export default function robots(): MetadataRoute.Robots {
	const url = getServerSideURL();
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/admin",
		},
		sitemap: `${url}/sitemap.xml`,
	};
}
