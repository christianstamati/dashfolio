import Description from "@/components/description";
import Title from "@/components/title";
import { getPayloadClient } from "@/payload/client";
import { ProjectList } from "../../../components/project-list";

export const metadata = {
	title: "Projects | Christian Stamati",
	description: "Here are a few projects that showcase my work and creativity",
};

const getProjects = async () => {
	const payload = await getPayloadClient();
	const result = await payload.find({
		collection: "projects",
	});
	return result.docs;
};

export default async function Projects() {
	const projects = await getProjects();
	return (
		<div>
			<Title>Projects</Title>
			<Description>
				Here are a few projects that showcase my work and creativity. While
				there are many more, I’ve curated a selection to keep this portfolio
				concise and focused.
			</Description>
			<ProjectList projects={projects} className="mt-8" />
		</div>
	);
}
