import type { Block } from "payload";

export const ProjectListView: Block = {
	slug: "project-list-view",
	interfaceName: "ProjectListViewProps",
	fields: [
		{
			name: "projectPage",
			type: "relationship",
			label: "Project Page",
			relationTo: "pages",
			required: true,
		},
	],
};
