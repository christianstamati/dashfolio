import type { Block } from "payload";

export const image: Block = {
	slug: "image", // required
	interfaceName: "ImageProps", // optional
	fields: [
		// required
		{
			name: "caption",
			type: "text",
		},
		{
			name: "media",
			type: "relationship",
			relationTo: "media",
			hasMany: false,
		},
	],
};
