/**
 * Writings component
 *
 * A list of writings
 * item: title, description, href to the writing, date
 *
 *
 */

import Link from "next/link";
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
		<section>
			<div className="container mx-auto">
				<h2 className="mb-8 font-semibold text-3xl tracking-tight">Writings</h2>
				<div className="mx-auto max-w-3xl space-y-4 sm:space-y-6">
					{writings.map((writing) => (
						<Card key={writing.id} className="p-0">
							<CardHeader className="p-4 sm:p-6">
								<CardTitle className="mb-2">{writing.title}</CardTitle>
								<CardDescription>{writing.description}</CardDescription>

								<div className="flex items-center justify-between gap-2">
									<div className="text-muted-foreground text-xs sm:text-sm">
										{new Date(writing.date).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</div>
									<Button
										variant="outline"
										size="sm"
										className="self-start sm:self-auto"
										asChild
									>
										<Link href={writing.href}>Read more</Link>
									</Button>
								</div>
							</CardHeader>
						</Card>
					))}
				</div>
				<Button asChild size="lg" variant="outline" className="mt-6 w-full">
					<Link href="/writings">View all writings</Link>
				</Button>
			</div>
		</section>
	);
}
