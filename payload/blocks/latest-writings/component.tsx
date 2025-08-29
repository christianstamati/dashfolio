import Link from "next/link";
import { cache } from "react";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { WritingList } from "@/components/writing-list";
import { getPayloadClient } from "@/payload/client";
import type { LatestWritingsProps } from "@/payload/payload-types";

const getWritings = cache(async () => {
	const payload = await getPayloadClient();
	const writings = await payload.find({
		collection: "writings",
		limit: 3,
	});
	return writings;
});

export default async function LatestWritings(_: LatestWritingsProps) {
	const writings = await getWritings();
	return (
		<section>
			<div className="container mx-auto">
				<Title>Writings</Title>
				<WritingList writings={writings.docs} />
				<Button asChild size="lg" variant="outline" className="mt-6 w-full">
					<Link href="/writings">View all writings</Link>
				</Button>
			</div>
		</section>
	);
}
