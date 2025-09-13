import type { CollectionConfig } from "payload";
import { revalidateAfterChange } from "../hooks/revalidate-after-change";
import { generatePreviewPath } from "../utils/generate-preview-path";

export const Writings: CollectionConfig = {
	slug: "writings",
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
					collection: "writings",
					req,
				});
				return path;
			},
		},
		preview: (data, { req }) =>
			generatePreviewPath({
				slug: typeof data?.slug === "string" ? data.slug : "",
				collection: "writings",
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
			unique: true,
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
					label: "Details",
					fields: [
						{
							name: "description",
							type: "textarea",
							required: true,
						},
					],
				},
				{
					label: "Content",
					fields: [
						{
							name: "content",
							type: "richText",
							required: true,
						},
					],
				},
			],
		},
	],
	hooks: {
		afterChange: [revalidateAfterChange],
	},
};
