import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const tools = [
	{
		name: "React",
		icon: "⚛️",
		subtitle: "JavaScript library",
		description:
			"A JavaScript library for building user interfaces with reusable components.",
		href: "https://reactjs.org",
	},
	{
		name: "Next.js",
		icon: "▲",
		subtitle: "React framework",
		description:
			"The React framework for production with server-side rendering and static generation.",
		href: "https://nextjs.org",
	},
	{
		name: "TypeScript",
		icon: "📘",
		subtitle: "Programming language",
		description:
			"Typed superset of JavaScript that compiles to plain JavaScript.",
		href: "https://typescriptlang.org",
	},
	{
		name: "Tailwind CSS",
		icon: "🎨",
		subtitle: "CSS framework",
		description:
			"A utility-first CSS framework for rapidly building custom user interfaces.",
		href: "https://tailwindcss.com",
	},
	{
		name: "Figma",
		icon: "🎯",
		subtitle: "Design tool",
		description:
			"Collaborative interface design tool for creating beautiful user experiences.",
		href: "https://figma.com",
	},
	{
		name: "Node.js",
		icon: "🟢",
		subtitle: "JavaScript runtime",
		description:
			"JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
		href: "https://nodejs.org",
	},
];

export default function Stack() {
	return (
		<section>
			<div>
				<h2 className="mb-8 font-semibold text-3xl tracking-tight">Stack</h2>
				<div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
					{tools.map((tool) => (
						<Card
							key={tool.name}
							className="group cursor-pointer border-border/50 p-0 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
						>
							<CardContent className="flex h-full flex-col p-4">
								<div className="mb-4 flex items-start justify-between">
									<div className="flex items-center space-x-3">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-lg">
											{tool.icon}
										</div>
										<div>
											<h3 className="font-semibold text-base">{tool.name}</h3>
											<p className="text-muted-foreground text-sm">
												{tool.subtitle}
											</p>
										</div>
									</div>
								</div>

								<p className="mb-4 flex-1 text-muted-foreground text-sm leading-relaxed">
									{tool.description}
								</p>

								<Button
									variant="outline"
									size="sm"
									asChild
									className="self-start"
								>
									<Link
										href={tool.href}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-2"
									>
										<span>Learn more</span>
										<ExternalLink className="h-3 w-3" />
									</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
