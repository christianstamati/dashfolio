/**
 * Projects component
 *
 * A list of projects
 *
 *
 *
 */

import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";
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
			<div className="container mx-auto">
				<h2 className="mb-8 font-semibold text-3xl tracking-tight">Projects</h2>
				<div className="mx-auto max-w-6xl space-y-6">
					{projects.map((project) => (
						<Card
							key={project.id}
							className="group relative cursor-pointer overflow-hidden rounded-none p-0"
						>
							<div className="flex h-56">
								{/* Left Section - Text Content */}
								<div className="flex-1 p-4 pr-80">
									{/* Category Badge with Icon */}
									<div className="mb-2 flex items-center gap-2">
										<TrendingUp size={16} className="text-yellow-400" />
										<span className="font-medium text-xs text-yellow-400 tracking-widest">
											{project.category}
										</span>
									</div>

									{/* Main Title */}
									<CardTitle className="mb-2 line-clamp-2 font-bold text-lg text-white">
										{project.stats}
									</CardTitle>

									{/* Description */}
									<CardDescription className="mb-3 line-clamp-3 text-gray-300 text-sm">
										{project.description}
									</CardDescription>

									{/* Call to Action */}
									<div className="flex cursor-pointer items-center gap-2 text-white transition-colors duration-300 group-hover:text-yellow-400">
										<span className="font-medium text-sm">Learn more</span>
										<ArrowRight
											className="transition-transform duration-300 group-hover:translate-x-1"
											size={16}
										/>
									</div>
								</div>
							</div>
							{/* Right Section - Image anchored to bottom right */}
							<div className="absolute right-0 bottom-0 h-full w-[60%]">
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
			</div>
		</section>
	);
}
