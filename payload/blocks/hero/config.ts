import type { Block } from "payload";

export const hero: Block = {
	slug: "hero",
	interfaceName: "HeroProps",
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
