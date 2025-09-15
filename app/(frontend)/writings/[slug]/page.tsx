import type {
	SerializedEditorState,
	SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { cache } from "react";
import BackButton from "@/components/back-button";
import { LivePreviewListener } from "@/components/live-preview-listener";
import { RichText } from "@/payload/blocks/rich-text/component";
import { getPayloadClient } from "@/payload/client";
import { generateMeta } from "@/payload/utils/generateMeta";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
	const payload = await getPayloadClient();
	const writings = await payload.find({
		collection: "writings",
		draft: false,
		limit: 1000,
		overrideAccess: false,
		pagination: false,
		select: {
			slug: true,
		},
	});

	const params = writings.docs.map(({ slug }) => {
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

	const writing = await queryWritingsBySlug({
		slug,
	});

	return generateMeta({ doc: writing });
}

const queryWritingsBySlug = cache(async ({ slug }: { slug: string }) => {
	const { isEnabled: draft } = await draftMode();
	const payload = await getPayloadClient();
	const result = await payload.find({
		collection: "writings",
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
});

type Args = {
	params: Promise<{
		slug?: string;
	}>;
};

export default async function Page({ params: paramsPromise }: Args) {
	"use memo";

	const { isEnabled: draft } = await draftMode();
	const { slug } = await paramsPromise;

	if (!slug) {
		notFound();
	}

	const writing = await queryWritingsBySlug({
		slug,
	});

	if (!writing || typeof writing === "string") {
		notFound();
	}

	const content =
		writing.content as SerializedEditorState<SerializedLexicalNode>;

	return (
		<article>
			{draft && <LivePreviewListener />}
			<BackButton label={"Writings"} />
			<RichText className="mt-4" data={content} />
		</article>
	);
}
