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
			src={mediaUrl + "?v=1"}
			alt={media.alt}
			className={cn("h-full w-full", className)}
			width={media.width || 100}
			height={media.height || 100}
			loading="lazy"
			placeholder="blur"
			sizes={sizes}
			blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
		/>
	);
}
