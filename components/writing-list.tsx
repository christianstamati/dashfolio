import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/format-date";
import type { Writing } from "@/payload/payload-types";

function WritingCard({ writing }: { writing: Writing }) {
	return (
		<Link href={`/writings/${writing.slug}`}>
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
							{formatDate(writing.createdAt)}
						</div>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
}

export function WritingList({ writings }: { writings: Writing[] }) {
	return (
		<div className="mx-auto flex max-w-3xl flex-col gap-4">
			{writings.map((writing) => (
				<WritingCard key={writing.id} writing={writing} />
			))}
		</div>
	);
}
