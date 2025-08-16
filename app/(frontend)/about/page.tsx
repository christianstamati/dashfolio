import Socials from "@/components/socials";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-background">
			<div className="mx-auto max-w-2xl px-6 py-16">
				<div className="space-y-12">
					{/* Headline */}
					<div>
						<h1 className="mb-4 font-semibold text-4xl text-foreground">
							I'm Christian Stamati
						</h1>
					</div>

					{/* Intro */}
					<div>
						<p className="text-lg text-muted-foreground leading-relaxed">
							I create web apps, 3D experiences, and games that are both
							functional and visually engaging. My work blends design, code, and
							creativity to craft experiences people love to interact with.
						</p>
					</div>

					{/* Why */}
					<div>
						<h2 className="mb-3 font-medium text-foreground text-xl">Why</h2>
						<p className="text-muted-foreground leading-relaxed">
							I'm driven by the challenge of turning complex ideas into
							tangible, interactive experiences. I explore the intersection of
							technology and creativity, striving to make experiences intuitive,
							engaging, and memorable.
						</p>
					</div>

					{/* How */}
					<div>
						<h2 className="mb-3 font-medium text-foreground text-xl">How</h2>
						<p className="mb-4 text-muted-foreground leading-relaxed">
							I combine design, development, and interactivity by:
						</p>
						<ul className="space-y-2 text-muted-foreground">
							<li className="flex items-center gap-2">
								<div className="h-1.5 w-1.5 rounded-full bg-current opacity-60"></div>
								Crafting interactive web apps using React, Next.js, and Three.js
							</li>
							<li className="flex items-center gap-2">
								<div className="h-1.5 w-1.5 rounded-full bg-current opacity-60"></div>
								Designing and modeling 3D assets in Blender, Maya, and xNormal
							</li>
							<li className="flex items-center gap-2">
								<div className="h-1.5 w-1.5 rounded-full bg-current opacity-60"></div>
								Developing games and interactive experiences with Unity and
								Unreal Engine
							</li>
							<li className="flex items-center gap-2">
								<div className="h-1.5 w-1.5 rounded-full bg-current opacity-60"></div>
								Leveraging modern libraries and workflows like Tailwind,
								Zustand, React Query, and Shadcn
							</li>
						</ul>
					</div>

					{/* What */}
					<div>
						<h2 className="mb-3 font-medium text-foreground text-xl">What</h2>
						<p className="text-muted-foreground leading-relaxed">
							The result is a portfolio of work that spans web apps, 3D
							projects, and games — all polished, functional, and designed to
							leave an impression.
						</p>
					</div>

					<div className="pt-8">
						<h2 className="mb-8 font-medium text-2xl text-foreground">
							Experience
						</h2>
						<Card>
							<CardContent className="p-6">
								<div className="relative">
									{/* Timeline line */}
									<div className="absolute top-0 bottom-0 left-2 w-px bg-border"></div>

									<div className="space-y-8">
										{/* Timeline Item 1 */}
										<div className="flex items-start gap-4">
											<div className="relative z-10 mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-foreground"></div>
											<div>
												<div className="mb-1 text-muted-foreground text-sm">
													2024
												</div>
												<h3 className="mb-1 font-medium text-foreground text-lg">
													Freelance Developer
												</h3>
												<p className="text-muted-foreground text-sm">
													Full-stack Development, 3D Web Experiences
												</p>
											</div>
										</div>

										{/* Timeline Item 2 */}
										<div className="flex items-start gap-4">
											<div className="relative z-10 mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-foreground"></div>
											<div>
												<div className="mb-1 text-muted-foreground text-sm">
													2023
												</div>
												<h3 className="mb-1 font-medium text-foreground text-lg">
													Tech Startup
												</h3>
												<p className="text-muted-foreground text-sm">
													Frontend Development, Interactive Design
												</p>
											</div>
										</div>

										{/* Timeline Item 3 */}
										<div className="flex items-start gap-4">
											<div className="relative z-10 mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-foreground"></div>
											<div>
												<div className="mb-1 text-muted-foreground text-sm">
													2022
												</div>
												<h3 className="mb-1 font-medium text-foreground text-lg">
													Digital Agency
												</h3>
												<p className="text-muted-foreground text-sm">
													Web Development, Game Development
												</p>
											</div>
										</div>

										{/* Timeline Item 4 */}
										<div className="flex items-start gap-4">
											<div className="relative z-10 mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-foreground"></div>
											<div>
												<div className="mb-1 text-muted-foreground text-sm">
													2021
												</div>
												<h3 className="mb-1 font-medium text-foreground text-lg">
													Creative Studio
												</h3>
												<p className="text-muted-foreground text-sm">
													3D Modeling, Concept Development
												</p>
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
			{/* Socials */}
			<div className="mt-8">
				<Socials />
			</div>
		</div>
	);
}
