import { seoPlugin } from "@payloadcms/plugin-seo";
import type { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { s3Storage } from "@payloadcms/storage-s3";
import type { Plugin } from "payload";
import { env } from "@/env/server";
import type { Page } from "./payload-types";
import { getServerSideURL } from "./utils/getURL";

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
	return doc?.title ? `${doc.title}` : "Dashfolio Website";
};

const generateURL: GenerateURL<Page> = ({ doc }) => {
	const url = getServerSideURL();
	return doc?.slug ? `${url}/${doc.slug}` : url;
};

export const plugins: Plugin[] = [
	seoPlugin({
		generateTitle,
		generateURL,
	}),
	s3Storage({
		clientUploads: true,
		collections: {
			media: {
				prefix: "media",
				generateFileURL: ({ filename, prefix }) => {
					return `https://${env.S3_BUCKET}.s3.${env.S3_REGION}.amazonaws.com/${prefix}/${filename}`;
				},
			},
		},
		bucket: env.S3_BUCKET,
		config: {
			credentials: {
				accessKeyId: env.S3_ACCESS_KEY_ID,
				secretAccessKey: env.S3_SECRET_ACCESS_KEY,
			},
			region: env.S3_REGION,
		},
	}),
];
