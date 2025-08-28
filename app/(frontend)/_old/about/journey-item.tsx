import Image from "next/image";
import type { ReactNode } from "react";

interface JourneyItemProps {
	title: string;
	date: string;
	description: ReactNode;
	images?: {
		src: string;
		alt: string;
		placeholder?: string;
	}[];
}

export default function JourneyItem({
	title,
	date,
	description,
	images = [],
}: JourneyItemProps) {
	const renderImages = () => {
		if (images.length === 0) {
			return null;
		}

		if (images.length === 1) {
			// Single image - full width
			return (
				<div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted">
					<Image
						src={images[0].src}
						alt={images[0].alt}
						width={800}
						height={450}
						className="h-full w-full object-cover"
						placeholder={images[0].placeholder ? "blur" : "empty"}
						blurDataURL={images[0].placeholder}
					/>
				</div>
			);
		}

		if (images.length === 2) {
			// Two images - grid
			return (
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					{images.map((img, index) => (
						<div
							key={`${img.src}-${index}`}
							className="aspect-[16/9] overflow-hidden rounded-lg bg-muted"
						>
							<Image
								src={img.src}
								alt={img.alt}
								width={400}
								height={225}
								className="h-full w-full object-cover"
								placeholder={img.placeholder ? "blur" : "empty"}
								blurDataURL={img.placeholder}
							/>
						</div>
					))}
				</div>
			);
		}

		if (images.length === 3) {
			// Three images - 1 on top, 2 in grid below
			return (
				<div className="space-y-6">
					{/* First image - full width */}
					<div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted">
						<Image
							src={images[0].src}
							alt={images[0].alt}
							width={800}
							height={450}
							className="h-full w-full object-cover"
							placeholder={images[0].placeholder ? "blur" : "empty"}
							blurDataURL={images[0].placeholder}
						/>
					</div>
					{/* Second and third images - grid */}
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						{images.slice(1).map((img, index) => (
							<div
								key={`${img.src}-${index + 1}`}
								className="aspect-[16/9] overflow-hidden rounded-lg bg-muted"
							>
								<Image
									src={img.src}
									alt={img.alt}
									width={400}
									height={225}
									className="h-full w-full object-cover"
									placeholder={img.placeholder ? "blur" : "empty"}
									blurDataURL={img.placeholder}
								/>
							</div>
						))}
					</div>
				</div>
			);
		}

		// Four or more images - 2x2 grid
		return (
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
				{images.slice(0, 4).map((img, index) => (
					<div
						key={`${img.src}-${index}`}
						className="aspect-[16/9] overflow-hidden rounded-lg bg-muted"
					>
						<Image
							src={img.src}
							alt={img.alt}
							width={400}
							height={225}
							className="h-full w-full object-cover"
							placeholder={img.placeholder ? "blur" : "empty"}
							blurDataURL={img.placeholder}
						/>
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<h2 className="font-bold text-2xl text-foreground">{title}</h2>
				<p className="text-muted-foreground text-sm">{date}</p>
			</div>

			{renderImages()}

			<div className="text-muted-foreground leading-relaxed">{description}</div>
		</div>
	);
}
