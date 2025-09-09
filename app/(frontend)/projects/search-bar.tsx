"use client";

import { ArrowRightIcon, SearchIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
	const [search, setSearch] = useQueryState("query", {
		shallow: false,
		limitUrlUpdates: {
			method: "debounce",
			timeMs: 1000,
		},
	});
	return (
		<div className="relative w-full">
			<Input
				className="peer w-full ps-9 pe-9"
				placeholder="Search..."
				type="search"
				value={search ?? ""}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
				<SearchIcon size={16} />
			</div>
			<button
				className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
				aria-label="Submit search"
				type="submit"
			>
				<ArrowRightIcon size={16} aria-hidden="true" />
			</button>
		</div>
	);
}
