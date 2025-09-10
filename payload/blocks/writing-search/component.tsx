import { Suspense } from "react";
import SearchBar from "@/components/search-bar";
import { SkeletonItems } from "@/components/skeleton-items";
import { WritingList } from "@/components/writing-list";
import type { WritingSearchProps } from "@/payload/payload-types";
import { findWritings } from "./find-writings";

async function Writings({ query }: { query: string }) {
	const projects = await findWritings({ search: query });
	return <WritingList writings={projects.docs} />;
}

export default function WritingSearch(
	props: WritingSearchProps & { searchParams: { query?: string } },
) {
	const query = props?.searchParams?.query || "";
	return (
		<div className="space-y-4">
			<SearchBar />
			<Suspense key={query} fallback={<SkeletonItems count={3} />}>
				<Writings query={query} />
			</Suspense>
		</div>
	);
}
