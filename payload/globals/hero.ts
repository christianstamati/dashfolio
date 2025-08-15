import type { GlobalConfig } from "payload";

export const Hero: GlobalConfig = {
	slug: "hero",
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
			name: "image",
			type: "relationship",
			relationTo: "media",
		},
		{
			name: "resume",
			type: "relationship",
			relationTo: "media",
		},
	],
};
