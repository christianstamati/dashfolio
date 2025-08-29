import type { Block } from "payload";
import { link } from "@/payload/fields/link";

export const selectedProjects: Block = {
	slug: "selected-projects",
	interfaceName: "SelectedProjectsProps",
	fields: [
		{
			name: "projects",
			type: "relationship",
			relationTo: "projects",
			hasMany: true,
			maxRows: 3,
		},
		link(),
	],
};
