import { revalidateTag } from "next/cache";
import type { CollectionConfig } from "payload";
import { contactForm } from "../blocks/contact-form/config";
import { hero } from "../blocks/hero/config";
import { latestWritings } from "../blocks/latest-writings/config";
import { newsletter } from "../blocks/newsletter/config";
import { projectSearch } from "../blocks/project-search/config";
import { richText } from "../blocks/rich-text/config";
import { selectedProjects } from "../blocks/selected-projects/config";
import { writingSearch } from "../blocks/writing-search/config";
import { generatePreviewPath } from "../utils/generate-preview-path";

export const Pages: CollectionConfig = {
	slug: "pages",
	access: {
		read: ({ req }) => {
			if (req.user) return true;
			return {
				_status: {
					equals: "published",
				},
			};
		},
	},
	admin: {
		useAsTitle: "title",
		livePreview: {
			url: ({ data, req }) => {
				const path = generatePreviewPath({
					slug: typeof data?.slug === "string" ? data.slug : "",
					collection: "pages",
					req,
				});
				return path;
			},
		},
		preview: (data, { req }) =>
			generatePreviewPath({
				slug: typeof data?.slug === "string" ? data.slug : "",
				collection: "pages",
				req,
			}),
	},
	versions: {
		drafts: {
			schedulePublish: true,
			autosave: {
				interval: 500, // We set this interval for optimal live preview
			},
		},
		maxPerDoc: 50,
	},
	fields: [
		{
			name: "slug",
			type: "text",
			required: true,
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			type: "tabs",
			tabs: [
				{
					label: "Layout",
					fields: [
						{
							name: "blocks",
							type: "blocks",
							blocks: [
								hero,
								selectedProjects,
								latestWritings,
								richText,
								contactForm,
								projectSearch,
								writingSearch,
								newsletter,
							],
						},
					],
				},
			],
		},
	],
	hooks: {
		afterChange: [
			({ doc }) => {
				const status = doc._status;
				if (status === "published") {
					revalidateTag(`pages-${doc.slug}`, "max");
				}
			},
		],
	},
};
