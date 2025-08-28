import type { MetadataRoute } from "next";
import { getPayloadClient } from "@/payload/client";
import { getServerSideURL } from "@/payload/utils/getURL";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const payload = await getPayloadClient();
	const pages = await payload.find({
		collection: "pages",
		limit: 0,
		where: {},
	});
	const url = getServerSideURL();
	return [
		...pages.docs.map(({ slug, updatedAt }) => ({
			url: `${url}/${slug}`,
			lastModified: new Date(updatedAt),
		})),
	];
}
