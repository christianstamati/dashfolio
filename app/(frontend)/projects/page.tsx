import { Suspense } from "react";
import Description from "@/components/description";
import { ProjectList } from "@/components/project-list";
import Title from "@/components/title";
import { findProjects } from "./actions/find-projects";
import SearchBar from "./search-bar";

type PageProps = {
	searchParams?: Promise<{
		query?: string;
		page?: string;
	}>;
};

async function ProductSearch(props: PageProps) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || "";
	const projects = await findProjects({ search: query });
	return <ProjectList projects={projects.docs} />;
}

export default async function Page(props: PageProps) {
	return (
		<article>
			<Title>Projects</Title>
			<Description>
				Here are a few projects that showcase my work and creativity. While
				there are many more, I’ve curated a selection to keep this portfolio
				concise and focused.
			</Description>
			<div className="my-4 flex flex-col gap-4">
				<SearchBar />
				<Suspense fallback={<div>Loading...</div>}>
					<ProductSearch {...props} />
				</Suspense>
			</div>
		</article>
	);
}
