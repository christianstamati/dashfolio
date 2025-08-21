import { notFound } from "next/navigation";
import BackButton from "@/components/back-button";
import ImageMedia from "@/components/image-media";
import Title from "@/components/title";
import { RichText } from "@/payload/blocks/rich-text/component";
import { getPayloadClient } from "@/payload/client";

const getWritingBySlug = async (slug: string) => {
	const payload = await getPayloadClient();
	const writings = await payload.find({
		collection: "writings",
		where: {
			slug: {
				equals: slug,
			},
			_status: {
				equals: "published",
			},
		},
	});

	if (writings.docs.length === 0) {
		return null;
	}

	return writings.docs[0];
};

export default async function Writing({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const writing = await getWritingBySlug(slug);

	if (!writing) {
		return notFound();
	}

	return (
		<div className="flex flex-col gap-8">
			<BackButton label={"Writings"} />

			{/* Writing Header */}
			<div className="flex flex-col gap-4">
				<div className="flex items-start gap-4">
					<div className="flex-1">
						<Title>{writing.title}</Title>
						<p className="text-muted-foreground leading-relaxed">
							{writing.description}
						</p>
					</div>
				</div>
			</div>

			{/* Writing Cover Image */}
			{writing.cover && (
				<div className="flex flex-col items-center justify-center gap-4">
					<ImageMedia media={writing.cover} className="rounded-lg" />
				</div>
			)}

			{/* Writing Content */}
			{writing.content && <RichText data={writing.content} />}
		</div>
	);
}
