import type { Metadata } from "next";

import type { Media, Page, Project } from "../payload-types";
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

export const generateMeta = async (args: {
	doc: Partial<Page> | Partial<Project> | null;
}): Promise<Metadata> => {
	const { doc } = args;

	const ogImage = getImageURL(doc?.meta?.image as Media);

	const title = doc?.meta?.title ? doc?.meta?.title : "Dashfolio Website";

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
