import Link from "next/link";
import { ProjectList } from "@/components/project-list";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import type { SelectedProjectsProps } from "@/payload/payload-types";

export default function SelectedProjects({ projects }: SelectedProjectsProps) {
	if (!projects) return null;
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
