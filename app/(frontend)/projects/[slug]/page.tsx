import { ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import BackButton from "@/components/back-button";
import ImageMedia from "@/components/image-media";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/format-date";
import { getPayloadClient } from "@/payload/client";

const getProjectBySlug = async (slug: string) => {
	const payload = await getPayloadClient();
	const project = await payload.find({
		collection: "projects",
		where: {
			slug: {
				equals: slug,
			},
		},
	});
	return project;
};

export default async function Project({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const docs = await getProjectBySlug(slug);

	const project = docs.docs[0];

	if (!project) {
		return notFound();
	}

	return (
		<div className="flex flex-col gap-8">
			<BackButton label={"Projects"} />

			{/* Project Header */}
			<div className="flex flex-col gap-4">
				<div className="flex items-start gap-4">
					{project.projectIcon && (
						<div className="h-12 w-12 flex-shrink-0">
							<ImageMedia
								media={project.projectIcon}
								className="h-full w-full object-contain"
							/>
						</div>
					)}
					<div className="flex-1">
						<Title>{project.title}</Title>
						{project.company && typeof project.company === "object" && (
							<p className="text-muted-foreground text-sm">
								{project.company.name} • {formatDate(project.createdAt)}
							</p>
						)}
					</div>
				</div>

				{/* Project Description */}
				<p className="text-muted-foreground leading-relaxed">
					{project.description}
				</p>
			</div>
			{/* Project Cover Image */}
			{project.cover && (
				<div className="flex flex-col items-center justify-center gap-4">
					<ImageMedia media={project.cover} className="rounded-lg" />
					<Button size={"lg"} className="mt-4 w-fit rounded-full">
						<ExternalLink />
						<span>Live Site</span>
					</Button>
				</div>
			)}

			{/* Project Details Grid */}
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
				{/* Left Column */}
				<div className="space-y-6">
					{/* Role */}
					<div>
						<h3 className="mb-2 font-semibold text-lg">ROLE</h3>
						<p className="text-muted-foreground">Full Stack Developer</p>
					</div>

					{/* Responsibilities */}
					<div>
						<h3 className="mb-2 font-semibold text-lg">RESPONSIBILITIES</h3>
						<ul className="space-y-1">
							{project.responsibilities &&
							project.responsibilities.length > 0 ? (
								project.responsibilities.map((item: any) => (
									<li key={item.id} className="text-muted-foreground">
										{item.responsibility}
									</li>
								))
							) : (
								<>
									<li className="text-muted-foreground">
										Frontend Development
									</li>
									<li className="text-muted-foreground">UI/UX Design</li>
									<li className="text-muted-foreground">Project Management</li>
								</>
							)}
						</ul>
					</div>
				</div>

				{/* Right Column */}
				<div className="space-y-6">
					{/* Team */}
					<div>
						<h3 className="mb-2 font-semibold text-lg">TEAM</h3>
						<ul className="space-y-1">
							{project.team && project.team.length > 0 ? (
								project.team.map((member: any) => (
									<li key={member.id} className="text-muted-foreground">
										{member.name}, {member.role}
									</li>
								))
							) : (
								<>
									<li className="text-muted-foreground">
										John Doe, Project Manager
									</li>
									<li className="text-muted-foreground">
										Jane Smith, Lead Developer
									</li>
									<li className="text-muted-foreground">
										Mike Johnson, UI/UX Designer
									</li>
									<li className="text-muted-foreground">
										Sarah Wilson, Backend Developer
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</div>

			{/* Problem Section */}
			{project.problemCaption && (
				<Card className="bg-muted/50">
					<CardContent className="pt-6">
						<h3 className="mb-3 font-semibold text-lg">PROBLEM</h3>
						<p className="text-muted-foreground leading-relaxed">
							{project.problemCaption}
						</p>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
