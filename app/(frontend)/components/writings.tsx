import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getPayloadClient } from "@/payload/client";
import type { Writing } from "@/payload/payload-types";

const getWritings = async () => {
	const payload = await getPayloadClient();
	const writings = await payload.find({
		collection: "writings",
		limit: 3,
	});
	return writings;
};

function WritingCard({ writing }: { writing: Writing }) {
	return (
		<Link href={`/writings/${writing.slug}`} target="_blank">
			<Card key={writing.id} className="card-hover">
				<CardHeader className="items-start">
					<CardTitle className="mb-2">{writing.title}</CardTitle>
					<CardDescription className="mb-2 line-clamp-3">
						{writing.description}
					</CardDescription>
				</CardHeader>
				<CardFooter className="w-full">
					<div className="flex w-full items-center justify-between gap-2">
						<div className="flex w-fit items-center gap-2 font-medium text-sm">
							<span>Read more</span>
							<ArrowRight size={16} />
						</div>
						<div className="text-muted-foreground text-xs sm:text-sm">
							{new Date(writing.createdAt).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</div>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
}

export default async function Writings() {
	const writings = await getWritings();
	return (
		<section>
			<div className="container mx-auto">
				<Title>Writings</Title>
				<div className="mx-auto flex max-w-3xl flex-col gap-4">
					{writings.docs.map((writing) => (
						<WritingCard key={writing.id} writing={writing} />
					))}
				</div>
				<Button asChild size="lg" variant="outline" className="mt-6 w-full">
					<Link href="/writings">View all writings</Link>
				</Button>
			</div>
		</section>
	);
}
