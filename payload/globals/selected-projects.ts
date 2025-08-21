import type { GlobalConfig } from "payload";

export const SelectedProjects: GlobalConfig = {
	slug: "selected-projects",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "projects",
			type: "relationship",
			relationTo: "projects",
			hasMany: true,
			validate: (val) => {
				if (val && val.length > 3) {
					return "Maximum 3 projects allowed";
				}
				return true;
			},
		},
	],
};
