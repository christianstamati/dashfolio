import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IconsaxIcon } from "@/components/iconsax-icon";
import ImageMedia from "@/components/image-media";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Category, Project } from "@/payload/payload-types";
import { NoItemsFound } from "./no-items-found";

function ProjectCategory({
	category,
}: {
	category: Category | string | null | undefined;
}) {
	if (!category || typeof category === "string")
		return <div>Invalid category</div>;

	const categoryName = category.name;

	const icon = category.icon;

	return (
		<div className="mb-2 flex items-center gap-2">
			<IconsaxIcon name={icon} size={16} className="text-accent-foreground" />
			<span className="font-medium text-accent-foreground text-xs uppercase tracking-widest">
				{categoryName}
			</span>
		</div>
	);
}

function ProjectCard({ project }: { project: Project }) {
	return (
		<Link href={`/projects/${project.slug}`}>
			<Card className="card-hover relative overflow-hidden p-0">
				{/* Mobile Layout - Vertical */}
				<div className="flex flex-col md:hidden">
					{/* Content Section - Top */}
					<div className="p-4">
						{/* Category Badge with Icon */}
						<ProjectCategory category={project.category} />

						{/* Main Title */}
						<CardTitle className="mb-2 line-clamp-2 font-bold text-lg">
							{project.title}
						</CardTitle>

						{/* Description */}
						<CardDescription className="mb-3 line-clamp-3 text-muted-foreground text-sm">
							{project.description}
						</CardDescription>

						{/* Call to Action */}
						<div className="flex cursor-pointer items-center gap-2">
							<span className="font-medium text-sm">Learn more</span>
							<ArrowRight
								className="transition-transform duration-300 group-hover:translate-x-1"
								size={16}
							/>
						</div>
					</div>

					{/* Image Section - Bottom */}
					<div className="h-72 w-full">
						<ImageMedia
							media={project.thumbnail}
							className="h-full w-full object-contain"
						/>
					</div>
				</div>

				{/* Desktop Layout - Horizontal */}
				<div className="hidden h-56 md:flex">
					{/* Left Section - Text Content */}
					<div className="flex-1 p-4 pr-80 sm:p-6">
						{/* Category Badge with Icon */}
						<ProjectCategory category={project.category} />

						{/* Main Title */}
						<CardTitle className="mb-2 line-clamp-2 w-1/2 font-bold text-lg">
							{project.title}
						</CardTitle>

						{/* Description */}
						<CardDescription className="mb-3 line-clamp-3 w-1/2 text-muted-foreground text-sm">
							{project.description}
						</CardDescription>

						{/* Call to Action */}
						<div className="flex cursor-pointer items-center gap-2 transition-colors duration-300 group-hover:text-yellow-400">
							<span className="font-medium text-sm">Learn more</span>
							<ArrowRight
								className="transition-transform duration-300 group-hover:translate-x-1"
								size={16}
							/>
						</div>
					</div>
				</div>

				{/* Desktop Image - Right Section */}
				<div className="-right-13.5 absolute bottom-0 hidden h-full w-[60%] md:block">
					<ImageMedia
						media={project.thumbnail}
						className="h-full w-full object-contain"
					/>
				</div>
			</Card>
		</Link>
	);
}

type ProjectListProps = {
	projects: (Project | string)[];
	className?: string;
};

export function ProjectList({ projects, className }: ProjectListProps) {
	if (projects.length === 0) {
		return <NoItemsFound />;
	}

	const projectList = projects.filter(
		(project) => typeof project === "object",
	) as Project[];

	return (
		<div className={cn("flex flex-col gap-4", className)}>
			{projectList.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
}
