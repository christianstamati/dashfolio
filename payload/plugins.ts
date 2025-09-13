import { seoPlugin } from "@payloadcms/plugin-seo";
import { MetaImageField } from "@payloadcms/plugin-seo/fields";
import { s3Storage } from "@payloadcms/storage-s3";
import type { Plugin } from "payload";
import { env } from "@/env/server";
import { getServerSideURL } from "./utils/getURL";

export const plugins: Plugin[] = [
	seoPlugin({
		collections: ["pages", "projects", "writings"],
		globals: ["seo"],
		generateTitle: ({ doc }) => {
			return doc?.title ? `${doc.title}` : "Dashfolio Website";
		},
		generateURL: ({ doc }) => {
			const url = getServerSideURL();
			return doc?.slug ? `${url}/${doc.slug}` : url;
		},
		generateDescription: ({ doc }) => {
			return doc?.description
				? `${doc.description}`
				: "No description available";
		},
		fields: ({ defaultFields }) => [
			MetaImageField({
				relationTo: "media",
			}),
			{
				name: "disabled",
				type: "checkbox",
				admin: {
					position: "sidebar",
					description: "Disable SEO for this page",
				},
			},
			...defaultFields,
		],
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
