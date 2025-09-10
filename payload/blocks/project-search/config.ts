import type { Block } from "payload";

export const projectSearch: Block = {
	slug: "project-search",
	interfaceName: "ProjectSearchProps",
	fields: [
		{
			name: "info",
			type: "text",
			defaultValue: "Project search will be automatically populated",
			admin: {
				readOnly: true,
			},
		},
	],
};
