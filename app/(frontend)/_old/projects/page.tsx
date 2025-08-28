import Description from "@/components/description";
import Title from "@/components/title";
import ProjectsSearch from "./projects-search";

export const metadata = {
	title: "Projects | Christian Stamati",
};

export default async function Projects() {
	return (
		<div>
			<Title>Projects</Title>
			<Description>
				Here are a few projects that showcase my work and creativity. While
				there are many more, I’ve curated a selection to keep this portfolio
				concise and focused.
			</Description>
			<ProjectsSearch />
		</div>
	);
}
