import {
	MetaDescriptionField,
	MetaImageField,
	MetaTitleField,
	OverviewField,
	PreviewField,
} from "@payloadcms/plugin-seo/fields";
import { revalidatePath } from "next/cache";
import type { CollectionConfig } from "payload";
import { contactForm } from "../blocks/contact-form/config";
import { hero } from "../blocks/hero/config";
import { latestWritings } from "../blocks/latest-writings/config";
import { richText } from "../blocks/rich-text/config";
import { selectedProjects } from "../blocks/selected-projects/config";
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
							],
						},
					],
				},
				{
					name: "meta",
					label: "SEO",
					fields: [
						OverviewField({
							titlePath: "meta.title",
							descriptionPath: "meta.description",
							imagePath: "meta.image",
						}),
						MetaTitleField({
							hasGenerateFn: true,
						}),
						MetaImageField({
							relationTo: "media",
						}),
						MetaDescriptionField({}),
						PreviewField({
							// if the `generateUrl` function is configured
							hasGenerateFn: true,

							// field paths to match the target field for data
							titlePath: "meta.title",
							descriptionPath: "meta.description",
						}),
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
					revalidatePath(`/${doc.slug}`);
				}
			},
		],
	},
};
