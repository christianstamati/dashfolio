import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
	return (
		<section>
			<div className="container mx-auto">
				<Card className="mx-auto max-w-2xl">
					<CardHeader>
						<CardTitle className="text-2xl">Newsletter</CardTitle>
						<CardDescription>
							I document my learnings once a month. I would love to share them
							with you over mail. No bullshit. No spam. Straight up value.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex flex-col space-y-3 sm:flex-row sm:space-x-2 sm:space-y-0">
							<Input
								type="email"
								placeholder="Enter your email"
								className="h-10 flex-1"
							/>
							<Button size="lg" className="sm:px-6">
								Subscribe
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
