import type { Block } from "payload";

export const ExampleBlock: Block = {
	slug: "example-block",
	interfaceName: "ExampleBlock",
	fields: [
		{
			name: "content",
			type: "text",
			label: "Content",
		},
	],
};
