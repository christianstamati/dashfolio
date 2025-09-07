import type { Block } from "payload";

export const richText: Block = {
	slug: "rich-text",
	interfaceName: "RichTextProps",
	fields: [
		{
			name: "richText",
			type: "richText",
		},
	],
};
