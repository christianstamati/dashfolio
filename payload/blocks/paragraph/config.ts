import type { Block } from "payload";

export const paragraph: Block = {
	slug: "paragraph", // required
	interfaceName: "ParagraphProps", // optional
	fields: [
		{
			name: "title",
			type: "text",
			required: false,
		},
		{
			name: "content",
			type: "textarea",
			required: true,
		},
	],
};
