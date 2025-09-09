"use client";

import { ArrowRightIcon, FilterIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { ProjectList } from "@/components/project-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MultipleSelector from "@/components/ui/multiselect";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { useCategories } from "./hooks/queries/use-categories";
import { useProjectsInfinite } from "./hooks/queries/use-projects-infinite";

interface ProjectsInfiniteListProps {
	search?: string;
	filters?: {
		category?: string[];
	};
}

function ProjectsInfiniteList({ search, filters }: ProjectsInfiniteListProps) {
	const {
		data: projects,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isError,
		error,
	} = useProjectsInfinite({
		search,
		filters,
		limit: 3,
	});

	if (isLoading) {
		return (
			<div className="space-y-4">
				<Skeleton className="h-56" />
				<Skeleton className="h-56" />
				<Skeleton className="h-56" />
			</div>
		);
	}

	if (isError) {
		return <div>Error loading projects: {error?.message}</div>;
	}

	const allProjects = projects?.pages.flatMap((page) => page.docs) ?? [];

	return (
		<div className="space-y-6">
			<ProjectList projects={allProjects} />
			{hasNextPage && (
				<div className="flex justify-center">
					<Button
						onClick={() => fetchNextPage()}
						disabled={isFetchingNextPage}
						variant="outline"
						size="lg"
					>
						{isFetchingNextPage ? "Loading more..." : "Load More"}
					</Button>
				</div>
			)}

			{!hasNextPage && allProjects.length > 0 && (
				<div className="text-center text-muted-foreground">
					No more projects to load.
				</div>
			)}

			{allProjects.length === 0 && (
				<div className="text-center text-muted-foreground">
					No projects found.
				</div>
			)}
		</div>
	);
}

export default function ProjectsSearch() {
	const [searchText, setSearchText] = useState("");
	const [debouncedSearch] = useDebounce(searchText, 500);
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);
	const [filters, setFilters] = useState<{
		category?: string[];
	}>({});

	const { data: categories, isLoading: categoriesLoading } = useCategories();

	// Transform categories to the format expected by MultipleSelector
	const categoryOptions =
		categories?.map((category) => ({
			value: category.id,
			label: category.name,
		})) ?? [];

	const handleCategoryChange = (
		selectedCategories: { value: string; label: string }[],
	) => {
		setFilters((prev) => ({
			...prev,
			category:
				selectedCategories.length > 0
					? selectedCategories.map((cat) => cat.value)
					: undefined,
		}));
	};

	const handleDone = () => {
		setIsPopoverOpen(false);
	};

	return (
		<div className="mt-8 space-y-6">
			<div className="flex w-full items-center justify-center gap-2">
				<div className="relative w-full">
					<Input
						className="peer w-full ps-9 pe-9"
						placeholder="Search..."
						type="search"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
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
				{/* Filter Popover */}
				<Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
					<PopoverTrigger asChild>
						<Button variant="ghost" type="button">
							<FilterIcon size={16} />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-80" align="end">
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<h4 className="font-medium leading-none">Filter by category</h4>
							</div>
							{categoriesLoading ? (
								<div>Loading categories...</div>
							) : (
								<MultipleSelector
									commandProps={{
										label: "Select categories",
									}}
									value={categoryOptions.filter((cat) =>
										filters.category?.includes(cat.value),
									)}
									defaultOptions={categoryOptions}
									placeholder={
										categoriesLoading
											? "Loading categories..."
											: "Select categories"
									}
									hideClearAllButton
									hidePlaceholderWhenSelected
									onChange={handleCategoryChange}
									emptyIndicator={
										<p className="text-center text-sm">No categories found</p>
									}
								/>
							)}
							<div className="flex justify-end">
								<Button onClick={handleDone} size="sm">
									Done
								</Button>
							</div>
						</div>
					</PopoverContent>
				</Popover>
			</div>
			<ProjectsInfiniteList search={debouncedSearch} filters={filters} />
		</div>
	);
}
