import type { Metadata } from "next";

import type { Config, Media, Page } from "../payload-types";
import { getServerSideURL } from "./get-server-side-url";
import { mergeOpenGraph } from "./merge-open-graph";

const getImageURL = (image?: Media | Config["db"]["defaultIDType"] | null) => {
	const serverUrl = getServerSideURL();

	let url = serverUrl + "/website-template-OG.webp";

	if (
		image &&
		typeof image === "object" &&
		"url" in image &&
		"sizes" in image &&
		image.sizes &&
		typeof image.sizes === "object" &&
		"og" in image.sizes &&
		image.sizes.og
	) {
		const ogUrl = (image.sizes as any).og?.url;
		url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url;
	}

	return url;
};

export const generateMeta = async (args: {
	doc: Partial<Page> | null;
}): Promise<Metadata> => {
	const { doc } = args;

	const ogImage = getImageURL(doc?.meta?.image);

	const title = doc?.meta?.title ? doc?.meta?.title : "Dashfolio";

	return {
		description: doc?.meta?.description,
		openGraph: mergeOpenGraph({
			description: doc?.meta?.description || "",
			images: ogImage
				? [
						{
							url: ogImage,
						},
					]
				: undefined,
			title,
			url: Array.isArray(doc?.slug) ? doc?.slug.join("/") : "/",
		}),
		title,
	};
};
