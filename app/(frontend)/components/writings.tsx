/**
 * Writings component
 *
 * A list of writings
 * item: title, description, href to the writing, date
 *
 *
 */

import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const writings = [
	{
		id: 1,
		title: "The Future of Web Design",
		description:
			"Exploring the latest trends and technologies shaping the future of web design and user experience.",
		href: "/writing/future-of-web-design",
		date: "2024-01-15",
	},
	{
		id: 2,
		title: "Building Scalable React Applications",
		description:
			"Best practices and patterns for building maintainable and scalable React applications.",
		href: "/writing/scalable-react-apps",
		date: "2024-01-08",
	},
	{
		id: 3,
		title: "Design Systems in Practice",
		description:
			"How to create and maintain effective design systems that improve consistency and productivity.",
		href: "/writing/design-systems-practice",
		date: "2024-01-01",
	},
];

export default function Writings() {
	return (
		<section className="px-4 py-12 sm:py-16">
			<div className="container mx-auto">
				<h2 className="mb-8 text-center font-bold text-2xl sm:mb-12 sm:text-3xl">
					Latest Writings
				</h2>

				<div className="mx-auto max-w-3xl space-y-4 sm:space-y-6">
					{writings.map((writing) => (
						<Card key={writing.id}>
							<CardHeader className="p-4 sm:p-6">
								<div className="flex flex-col space-y-4 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
									<div className="flex-1">
										<CardTitle className="mb-2 text-lg sm:text-xl">
											{writing.title}
										</CardTitle>
										<CardDescription className="mb-4 text-sm sm:text-base">
											{writing.description}
										</CardDescription>
									</div>
									<Button
										variant="outline"
										size="sm"
										className="self-start sm:self-auto"
										asChild
									>
										<a href={writing.href}>Read more</a>
									</Button>
								</div>
								<div className="text-muted-foreground text-xs sm:text-sm">
									{new Date(writing.date).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</div>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
