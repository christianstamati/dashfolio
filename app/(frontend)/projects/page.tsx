import Description from "@/components/description";
import PageTitle from "@/components/title";
import { ProjectList } from "./project-list";

export const metadata = {
	title: "Projects | Christian Stamati",
	description: "Here are a few projects that showcase my work and creativity",
};

export default function Projects() {
	return (
		<div>
			<PageTitle>Projects</PageTitle>
			<Description>
				Here are a few projects that showcase my work and creativity. While
				there are many more, I’ve curated a selection to keep this portfolio
				concise and focused.
			</Description>
			<ProjectList />
		</div>
	);
}
