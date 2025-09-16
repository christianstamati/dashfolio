import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Media } from "@/payload/payload-types";

export default function ImageMedia({
	media,
	className,
	sizes,
}: {
	media?: Media | string | null;
	className?: string;
	sizes?: string;
}) {
	if (!media) {
		return <div>No media</div>;
	}

	if (typeof media === "string") {
		return <div>Media is a string: {media}</div>;
	}

	const mediaUrl = media.url;

	if (!mediaUrl) {
		return <div>Media url is undefined</div>;
	}

	return (
		<Image
			src={mediaUrl}
			alt={media.alt}
			className={cn("h-full w-full", className)}
			width={media.width || 640}
			height={media.height || 360}
			priority
			fetchPriority="high"
			sizes={sizes}
		/>
	);
}
