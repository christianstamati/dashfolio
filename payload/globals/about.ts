import type { GlobalConfig } from "payload";

export const About: GlobalConfig = {
	slug: "about",
	fields: [
		{
			name: "title",
			type: "text",
		},
		{
			name: "description",
			type: "textarea",
		},
		{
			name: "journey",
			type: "array",
			fields: [
				{
					name: "title",
					type: "text",
				},
				{
					name: "date",
					type: "text",
				},
				{
					name: "description",
					type: "richText",
				},
				{
					name: "images",
					type: "relationship",
					relationTo: "media",
					hasMany: true,
				},
			],
		},
	],
};
