import Link from "next/link";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { getPayloadClient } from "@/payload/client";
import type { Project } from "@/payload/payload-types";
import { ProjectList } from "../../../components/project-list";

const getSelectedProjects = async () => {
	const payload = await getPayloadClient();
	const selectedProjects = await payload.findGlobal({
		slug: "selected-projects",
	});
	return selectedProjects?.projects?.filter(
		(project) => (project as Project)._status === "published",
	) as Project[];
};

export default async function SelectedProjects() {
	const projects = await getSelectedProjects();
	return (
		<section>
			<div>
				<Title>Projects</Title>
				<ProjectList projects={projects} />
				{projects.length > 0 && (
					<Button asChild size="lg" variant="outline" className="mt-8 w-full">
						<Link href="/projects">View all projects</Link>
					</Button>
				)}
			</div>
		</section>
	);
}
