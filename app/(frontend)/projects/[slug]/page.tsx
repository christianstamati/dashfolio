import type {
	SerializedEditorState,
	SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "@/components/back-button";
import ImageMedia from "@/components/image-media";
import { LivePreviewListener } from "@/components/live-preview-listener";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/format-date";
import { cn } from "@/lib/utils";
import { RichText } from "@/payload/blocks/rich-text/component";
import { getPayloadClient } from "@/payload/client";
import type { Project } from "@/payload/payload-types";
import { generateMeta } from "@/payload/utils/generateMeta";
import { isDraftMode } from "../../../../lib/is-draft-mode";
import PasswordForm from "./password-form";

const queryProjectBySlug = (slug: string) =>
	unstable_cache(
		async () => {
			const draft = await isDraftMode();
			const payload = await getPayloadClient();
			const result = await payload.find({
				collection: "projects",
				draft,
				limit: 1,
				pagination: false,
				overrideAccess: draft,
				where: {
					slug: {
						equals: slug,
					},
				},
			});
			return result.docs?.[0] || null;
		},
		[`projects-${slug}`],
		{
			tags: [`projects-${slug}`],
		},
	);

export async function generateStaticParams() {
	const payload = await getPayloadClient();
	const projects = await payload.find({
		collection: "projects",
		draft: false,
		limit: 1000,
		overrideAccess: false,
		pagination: false,
		select: {
			slug: true,
		},
	});

	const params = projects.docs.map(({ slug }) => {
		return { slug };
	});

	return params;
}

export async function generateMetadata({
	params: paramsPromise,
}: Args): Promise<Metadata> {
	const { slug } = await paramsPromise;

	if (!slug) {
		notFound();
	}

	const project = await queryProjectBySlug(slug)();

	return generateMeta({ doc: project });
}

type Args = {
	params: Promise<{
		slug?: string;
	}>;
	searchParams: Promise<{
		password?: string;
	}>;
};

function ProjectCover({
	project,
	className,
}: {
	project: Project;
	className?: string;
}) {
	return (
		<div className={cn("flex flex-col gap-4", className)}>
			{/* Project Header */}
			<div className="flex flex-col gap-4">
				<div className="flex items-start gap-4">
					<div className="flex-1">
						<Title>{project.title}</Title>
						{project.company && typeof project.company === "object" && (
							<p className="text-muted-foreground text-sm">
								<strong>{project.company.name}</strong> •{" "}
								{formatDate(project.createdAt)}
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
		</div>
	);
}

export default async function Page({ params, searchParams }: Args) {
	const [{ slug }, draft] = await Promise.all([params, isDraftMode()]);

	if (!slug) {
		notFound();
	}

	const project = await queryProjectBySlug(slug)();

	if (!project || typeof project === "string") {
		notFound();
	}

	if (project.password && !draft) {
		const { password } = await searchParams;
		if (password !== project.password) {
			return (
				<article className="flex h-full flex-col items-center justify-center gap-8 px-4">
					<div className="w-full max-w-md space-y-6">
						<BackButton label={"Projects"} />
						<PasswordForm password={password ?? ""} project={project} />
					</div>
				</article>
			);
		}
	}

	const content =
		project.content as SerializedEditorState<SerializedLexicalNode>;

	return (
		<article>
			{draft && <LivePreviewListener />}
			<BackButton label={"Projects"} />
			<ProjectCover project={project} className="mt-4" />
			<RichText data={content} />
		</article>
	);
}
