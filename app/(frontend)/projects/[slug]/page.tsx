import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "@/components/back-button";
import ImageMedia from "@/components/image-media";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/format-date";
import { RichText } from "@/payload/blocks/rich-text/component";
import { getPayloadClient } from "@/payload/client";

const getProjectBySlug = async (slug: string) => {
	const payload = await getPayloadClient();
	const projects = await payload.find({
		collection: "projects",
		where: {
			slug: {
				equals: slug,
			},
			_status: {
				equals: "published",
			},
		},
	});

	if (projects.docs.length === 0) {
		return null;
	}

	return projects.docs[0];
};

export default async function Project({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = await getProjectBySlug(slug);

	if (!project) {
		return notFound();
	}

	return (
		<div className="flex flex-col gap-8">
			<BackButton label={"Projects"} />

			{/* Project Header */}
			<div className="flex flex-col gap-4">
				<div className="flex items-start gap-4">
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
					{project.link && (
						<Button size={"lg"} className="mt-2 w-fit rounded-full" asChild>
							<Link href={project.link} target="_blank">
								<ExternalLink />
								<span>Live Site</span>
							</Link>
						</Button>
					)}
				</div>
			)}

			{/* Project Details Grid */}
			<div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
				{/* Left Column */}
				<div className="space-y-6">
					{/* Role */}
					<div>
						<h3 className="mb-2 font-semibold text-sm tracking-widest">ROLE</h3>
						<p className="text-muted-foreground">
							{project.role &&
								typeof project.role !== "string" &&
								project.role.name}
						</p>
					</div>
				</div>

				{/* Right Column */}
				<div className="space-y-6">
					{/* Team */}
					<div>
						<h3 className="mb-2 font-semibold text-sm tracking-widest">TEAM</h3>
						<ul className="space-y-1">
							{project.team && project.team.length > 0 ? (
								project.team.map((teammate) => {
									if (typeof teammate === "string") {
										return <div>invalid teammate {teammate}</div>;
									}

									const roleName =
										typeof teammate.role === "string"
											? teammate.role
											: teammate.role?.name;

									return (
										<li key={teammate.id} className="text-muted-foreground">
											{teammate.name}
											{roleName ? `, ${roleName}` : ""}
										</li>
									);
								})
							) : (
								<li className="text-muted-foreground">Not available.</li>
							)}
						</ul>
					</div>
				</div>
			</div>

			{/* Project Content */}
			{project.content && <RichText data={project.content} />}
		</div>
	);
}
