import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const projects = [
	{
		id: 1,
		title: "E-commerce Platform",
		description:
			"A modern e-commerce platform built with Next.js and Stripe integration",
		image: "/static/card-cover.webp",
		href: "/projects/ecommerce-platform",
		category: "WEB DEVELOPMENT",
		stats: "Increased conversion rates by 284.2%",
	},
	{
		id: 2,
		title: "Task Management App",
		description:
			"Collaborative task management application with real-time updates",
		image: "/static/card-cover.webp",
		href: "/projects/task-management",
		category: "MOBILE APP",
		stats: "Improved productivity by 156%",
	},
	{
		id: 3,
		title: "Portfolio Website",
		description:
			"Personal portfolio website showcasing creative work and projects",
		image: "/static/card-cover.webp",
		href: "/projects/portfolio",
		category: "DESIGN",
		stats: "Enhanced user engagement by 89%",
	},
];

export default function Projects() {
	return (
		<section>
			<div>
				<h2 className="mb-8 font-semibold text-2xl tracking-tight">Projects</h2>
				<div className="mx-auto max-w-6xl space-y-6">
					{projects.map((project) => (
						<Card
							key={project.id}
							className="group relative cursor-pointer overflow-hidden p-0"
						>
							{/* Mobile Layout - Vertical */}
							<div className="flex flex-col md:hidden">
								{/* Content Section - Top */}
								<div className="p-4">
									{/* Category Badge with Icon */}
									<div className="mb-2 flex items-center gap-2">
										<TrendingUp size={16} className="text-accent-foreground" />
										<span className="font-medium text-accent-foreground text-xs tracking-widest">
											{project.category}
										</span>
									</div>

									{/* Main Title */}
									<CardTitle className="mb-2 line-clamp-2 font-bold text-lg">
										{project.stats}
									</CardTitle>

									{/* Description */}
									<CardDescription className="mb-3 line-clamp-3 text-muted-foreground text-sm">
										{project.description}
									</CardDescription>

									{/* Call to Action */}
									<div className="flex cursor-pointer items-center gap-2 transition-colors duration-300 group-hover:text-yellow-400">
										<span className="font-medium text-sm">Learn more</span>
										<ArrowRight
											className="transition-transform duration-300 group-hover:translate-x-1"
											size={16}
										/>
									</div>
								</div>

								{/* Image Section - Bottom */}
								<div className="h-72 w-full">
									<Image
										src={project.image}
										alt={project.title}
										className="h-full w-full object-contain"
										width={320}
										height={320}
									/>
								</div>
							</div>

							{/* Desktop Layout - Horizontal */}
							<div className="hidden h-56 md:flex">
								{/* Left Section - Text Content */}
								<div className="flex-1 p-4 pr-80 sm:p-6">
									{/* Category Badge with Icon */}
									<div className="mb-2 flex items-center gap-2">
										<TrendingUp size={16} className="text-accent-foreground" />
										<span className="font-medium text-accent-foreground text-xs tracking-widest">
											{project.category}
										</span>
									</div>

									{/* Main Title */}
									<CardTitle className="mb-2 line-clamp-2 w-1/2 font-bold text-lg">
										{project.stats}
									</CardTitle>

									{/* Description */}
									<CardDescription className="mb-3 line-clamp-3 w-1/2 text-muted-foreground text-sm">
										{project.description}
									</CardDescription>

									{/* Call to Action */}
									<div className="flex cursor-pointer items-center gap-2 transition-colors duration-300 group-hover:text-yellow-400">
										<span className="font-medium text-sm">Learn more</span>
										<ArrowRight
											className="transition-transform duration-300 group-hover:translate-x-1"
											size={16}
										/>
									</div>
								</div>
							</div>

							{/* Desktop Image - Right Section */}
							<div className="absolute right-0 bottom-0 hidden h-full w-[60%] md:block">
								<Image
									src={project.image}
									alt={project.title}
									className="h-full w-full object-contain"
									width={320}
									height={320}
								/>
							</div>
						</Card>
					))}
				</div>
				<Button asChild size="lg" variant="outline" className="mt-8 w-full">
					<Link href="/projects">View all projects</Link>
				</Button>
			</div>
		</section>
	);
}
