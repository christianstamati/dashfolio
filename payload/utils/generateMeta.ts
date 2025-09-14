import type { Metadata } from "next";

import type { Media, Page, Project, Seo, Writing } from "../payload-types";
import { getServerSideURL } from "./getURL";
import { mergeOpenGraph } from "./mergeOpenGraph";

const getImageURL = (image?: Media | null) => {
	const serverUrl = getServerSideURL();

	let url = serverUrl + "/dashfolio-og.png";

	if (image && typeof image === "object" && "url" in image) {
		url = image.sizes?.og?.url || image.url || "";
	}

	return url;
};

export const generateMeta = (args: {
	doc:
		| Partial<Page>
		| Partial<Project>
		| Partial<Writing>
		| Partial<Seo>
		| null;
}): Metadata => {
	const { doc } = args;

	const ogImage = getImageURL(doc?.meta?.image as Media);

	const title = doc?.meta?.title ?? undefined;

	const url = Array.isArray((doc as any)?.slug)
		? (doc as any)?.slug.join("/")
		: "/";

	return {
		title,
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
			url,
		}),
	};
};
