import Link from "next/link";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { getPayloadClient } from "@/payload/client";
import type { Project } from "@/payload/payload-types";
import { ProjectList } from "../../../components/project-list";

const getSelectedProjects = async () => {
	const payload = await getPayloadClient();
	const projects = await payload.findGlobal({
		slug: "selected-projects",
	});
	return projects;
};

export default async function SelectedProjects() {
	const selectedProjects = await getSelectedProjects();
	const projects = selectedProjects?.projects as Project[];
	return (
		<section>
			<div>
				<Title>Projects</Title>
				<ProjectList projects={projects} />
				<Button asChild size="lg" variant="outline" className="mt-8 w-full">
					<Link href="/projects">View all projects</Link>
				</Button>
			</div>
		</section>
	);
}
