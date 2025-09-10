import { Suspense } from "react";
import Description from "@/components/description";
import SearchBar from "@/components/search-bar";
import { SkeletonItems } from "@/components/skeleton-items";
import Title from "@/components/title";
import { WritingList } from "@/components/writing-list";
import { findWritings } from "./actions/find-projects";

type PageProps = {
	searchParams?: Promise<{
		query?: string;
		page?: string;
	}>;
};
async function WritingsSearch({ query }: { query: string }) {
	const projects = await findWritings({ search: query });
	return <WritingList writings={projects.docs} />;
}

export default async function Page(props: PageProps) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || "";
	return (
		<article>
			<Title>Writings</Title>
			<Description>
				I run a blog that’s a mixed bag of experiments and random thoughts. Some
				of it is actually treated as my journal.
			</Description>
			<div className="my-4 mb-8">
				<SearchBar />
			</div>
			<Suspense key={query} fallback={<SkeletonItems count={3} />}>
				<WritingsSearch query={query} />
			</Suspense>
		</article>
	);
}
