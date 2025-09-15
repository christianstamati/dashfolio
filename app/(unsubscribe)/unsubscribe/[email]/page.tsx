import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getPayloadClient } from "@/payload/client";
import { UnsubscribeForm } from "./unsubscribe-form";

interface PageProps {
	params: Promise<{
		email: string;
	}>;
}

export default async function Page({ params }: PageProps) {
	const { email } = await params;
	const decodedEmail = decodeURIComponent(email);
	const payload = await getPayloadClient();
	const subscriber = await payload.find({
		collection: "subscribers",
		where: {
			email: {
				equals: decodedEmail,
			},
		},
	});

	if (subscriber.docs.length === 0) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-background">
				<Card className="w-full max-w-md">
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-2xl">
							Email Not Found
						</CardTitle>
						<CardDescription>
							This email address <strong>{decodedEmail}</strong> may have
							already been unsubscribed or was never subscribed.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button asChild className="w-full">
							<Link href="/">Return to Home</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-background">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-2xl">
						Unsubscribe from Newsletter
					</CardTitle>
					<CardDescription>
						Are you sure you want to unsubscribe {decodedEmail} from our
						newsletter?
					</CardDescription>
				</CardHeader>
				<CardContent>
					<UnsubscribeForm email={decodedEmail} />
				</CardContent>
			</Card>
		</div>
	);
}
