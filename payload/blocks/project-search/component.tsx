import { Suspense } from "react";
import { ProjectList } from "@/components/project-list";
import SearchBar from "@/components/search-bar";
import { SkeletonItems } from "@/components/skeleton-items";
import type { ProjectSearchProps } from "@/payload/payload-types";
import { findProjects } from "./find-projects";

async function Products({ query }: { query: string }) {
	const projects = await findProjects({ search: query });
	return <ProjectList projects={projects.docs} />;
}

export default function ProjectSearch(
	props: ProjectSearchProps & { searchParams: { query?: string } },
) {
	const query = props?.searchParams?.query || "";
	return (
		<div className="space-y-4">
			<SearchBar />
			<Suspense key={query} fallback={<SkeletonItems count={3} />}>
				<Products query={query} />
			</Suspense>
		</div>
	);
}
