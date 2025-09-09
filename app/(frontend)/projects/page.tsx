import { Suspense } from "react";
import Description from "@/components/description";
import { ProjectList } from "@/components/project-list";
import { ProjectListSkeleton } from "@/components/project-list-skeleton";
import Title from "@/components/title";
import { findProjects } from "./actions/find-projects";
import SearchBar from "./search-bar";

type PageProps = {
	searchParams?: Promise<{
		query?: string;
		page?: string;
	}>;
};

async function ProductSearch({ query }: { query: string }) {
	const projects = await findProjects({ search: query });
	return <ProjectList projects={projects.docs} />;
}

export default async function Page(props: PageProps) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || "";
	return (
		<article>
			<Title>Projects</Title>
			<Description>
				Here are a few projects that showcase my work and creativity. While
				there are many more, I’ve curated a selection to keep this portfolio
				concise and focused.
			</Description>
			<div className="my-4 mb-8">
				<SearchBar />
			</div>
			<Suspense key={query} fallback={<ProjectListSkeleton count={3} />}>
				<ProductSearch query={query} />
			</Suspense>
		</article>
	);
}
