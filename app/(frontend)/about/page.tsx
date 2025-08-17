import Socials from "@/components/socials";

export default function AboutPage() {
	return (
		<div className="space-y-8">
			{/* Main Content */}
			<div className="space-y-4 text-left">
				{/* Title */}
				<h1 className="font-bold text-5xl text-foreground">
					Hi 👋 I'm Christian. I like building things.
				</h1>
				{/* Description */}
				<p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
					Currently, I'm working as a Software Developer at{" "}
					<a href="https://www.google.com" className="text-blue-500">
						WeWear
					</a>
					.
				</p>
			</div>

			{/* Pictures Section */}
			<div className="space-y-4">
				{/* Main large image */}
				<div className="relative">
					<div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted">
						{/* Placeholder for main image */}
						<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
							<span className="text-muted-foreground">Project 1</span>
						</div>
					</div>
				</div>

				{/* Three smaller images */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div className="aspect-square overflow-hidden rounded-lg bg-muted">
						<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-400/20 to-gray-600/20">
							<span className="text-muted-foreground text-sm">Project 1</span>
						</div>
					</div>
					<div className="aspect-square overflow-hidden rounded-lg bg-muted">
						<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-400/20 to-gray-600/20">
							<span className="text-muted-foreground text-sm">Project 2</span>
						</div>
					</div>
					<div className="aspect-square overflow-hidden rounded-lg bg-muted">
						<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-400/20 to-gray-600/20">
							<span className="text-muted-foreground text-sm">Project 3</span>
						</div>
					</div>
				</div>
			</div>
			<div className="pt-5">
				<Socials />
			</div>
		</div>
	);
}
