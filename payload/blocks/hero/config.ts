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
			type: "upload",
			relationTo: "media",
			filterOptions: {
				mimeType: { contains: "image" },
			},
		},
		{
			name: "resume",
			type: "upload",
			relationTo: "media",
			filterOptions: {
				mimeType: { contains: "pdf" },
			},
		},
	],
};
