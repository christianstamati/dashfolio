import type { Project, ProjectListViewProps } from "@payload-types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getPayloadClient } from "@/payload/client";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
	const createdAt = project.createdAt
		? new Date(project.createdAt).toLocaleDateString("en-US", {
				month: "short",
				year: "numeric",
			})
		: undefined;

	const company =
		typeof project.company !== "string" ? project.company?.name : undefined;

	return (
		<Card className="group hover:-translate-y-1 cursor-pointer p-0 transition-all duration-300 hover:bg-muted/50 hover:shadow-lg">
			<CardContent className="p-0">
				<div className="flex h-full flex-col md:flex-row">
					{/* Thumbnail Section */}
					<div className="w-full min-w-[210px] p-4 md:w-[210px]">
						<div className="relative h-full min-h-[150px] w-full overflow-hidden">
							<Image
								src={`https://placehold.co/400x300/jpeg`}
								alt={`Screenshot of ${project.title || "Project"}`}
								className="h-full w-full rounded-2xl object-cover"
								fill
							/>
						</div>
					</div>

					{/* Content Section */}
					<div className="relative flex w-full flex-col justify-between p-4">
						<div>
							<h3 className="mb-2 line-clamp-2 font-semibold text-lg">
								{project.title || "Project Title"}
							</h3>
							<p className="mb-4 text-muted-foreground text-sm leading-relaxed">
								{project.description ||
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
							</p>
						</div>

						<div className="text-muted-foreground text-sm">
							{company}, {createdAt}
						</div>

						{/* Action Arrow */}
						<div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:bg-muted/80 group-hover:opacity-100">
							<ChevronRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export const ProjectListView: React.FC<ProjectListViewProps> = async (
	props,
) => {
	const { id, projectPage } = props;

	const payload = await getPayloadClient();

	const projects = await payload.find({
		collection: "projects",
		limit: 3,
	});

	const projectPageSlug =
		typeof projectPage === "string" ? projectPage : projectPage?.slug;

	return (
		<div className="my-16" id={`block-${id}`}>
			<div className="flex flex-col gap-6">
				{projects.docs.map((project) => (
					<Link href={`/${projectPageSlug}/${project.slug}`} key={project.id}>
						<ProjectCard project={project} />
					</Link>
				))}
			</div>
		</div>
	);
};
