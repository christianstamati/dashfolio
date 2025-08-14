/**
 * Newsletter component
 *
 * Title: Newsletter
 * Description: I document my learnings once a month. I would love to share them with you over mail. No bullshit. No spam. Straight up value.
 * Input: Email
 * Button: Subscribe
 */
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
		<section className="px-4 py-12 sm:py-16">
			<div className="container mx-auto">
				<Card className="mx-auto max-w-2xl">
					<CardHeader className="p-4 text-center sm:p-6">
						<CardTitle className="text-xl sm:text-2xl">Newsletter</CardTitle>
						<CardDescription className="text-sm sm:text-base">
							I document my learnings once a month. I would love to share them
							with you over mail. No bullshit. No spam. Straight up value.
						</CardDescription>
					</CardHeader>
					<CardContent className="p-4 pt-0 sm:p-6">
						<div className="flex flex-col space-y-3 sm:flex-row sm:space-x-2 sm:space-y-0">
							<Input
								type="email"
								placeholder="Enter your email"
								className="flex-1"
							/>
							<Button className="sm:px-6">Subscribe</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
