import ImageMedia from "@/components/image-media";
import type { ImageProps } from "@/payload/payload-types";

export default function Image({ props }: { props: ImageProps }) {
	return (
		<div className="space-y-2">
			<ImageMedia media={props.media} className="rounded-lg" />
			{props.caption && (
				<p className="text-center text-muted-foreground text-sm">
					{props.caption}
				</p>
			)}
		</div>
	);
}
