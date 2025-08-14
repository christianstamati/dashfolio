/**
 * Stack component
 *
 * Title: Tool stack
 * A list of tools 2 cols
 * item: icon, name, href to the tool
 *
 *
 */
import { Card, CardContent } from "@/components/ui/card";

const tools = [
	{
		name: "React",
		icon: "⚛️",
		href: "https://reactjs.org",
	},
	{
		name: "Next.js",
		icon: "▲",
		href: "https://nextjs.org",
	},
	{
		name: "TypeScript",
		icon: "📘",
		href: "https://typescriptlang.org",
	},
	{
		name: "Tailwind CSS",
		icon: "🎨",
		href: "https://tailwindcss.com",
	},
	{
		name: "Figma",
		icon: "🎯",
		href: "https://figma.com",
	},
	{
		name: "Node.js",
		icon: "🟢",
		href: "https://nodejs.org",
	},
];

export default function Stack() {
	return (
		<section className="py-12 px-4 sm:py-16">
			<div className="container mx-auto">
				<h2 className="mb-8 text-center text-2xl font-bold sm:mb-12 sm:text-3xl">
					Tool Stack
				</h2>

				<div className="grid gap-3 sm:gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
					{tools.map((tool) => (
						<Card
							key={tool.name}
							className="transition-colors hover:bg-muted/50"
						>
							<CardContent className="p-3 sm:p-4">
								<a
									href={tool.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-2 sm:space-x-3"
								>
									<span className="text-xl sm:text-2xl">{tool.icon}</span>
									<span className="font-medium text-sm sm:text-base">{tool.name}</span>
								</a>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
