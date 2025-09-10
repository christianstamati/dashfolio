import type { Block } from "payload";

export const writingSearch: Block = {
	slug: "writing-search",
	interfaceName: "WritingSearchProps",
	fields: [
		{
			name: "info",
			type: "text",
			defaultValue: "Writing search will be automatically populated",
			admin: {
				readOnly: true,
			},
		},
	],
};
