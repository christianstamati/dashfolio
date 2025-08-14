/**
 * Socials component
 *
 * A list of social media links
 * instagram, X, twitter, youtube
 *
 */
import { Button } from "@/components/ui/button";

const socialLinks = [
	{
		name: "Instagram",
		href: "https://instagram.com/ronnie",
		icon: "📸",
	},
	{
		name: "X (Twitter)",
		href: "https://x.com/ronnie",
		icon: "🐦",
	},
	{
		name: "YouTube",
		href: "https://youtube.com/@ronnie",
		icon: "📺",
	},
];

export default function Socials() {
	return (
		<section className="px-4 py-8 sm:py-10">
			<div className="container mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4">
					<h3 className="font-semibold text-lg sm:text-xl">Follow me</h3>
					<div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
						{socialLinks.map((social) => (
							<Button
								key={social.name}
								variant="outline"
								size="sm"
								className="sm:size-lg"
								asChild
							>
								<a
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-2"
								>
									<span>{social.icon}</span>
									<span className="text-sm sm:text-base">{social.name}</span>
								</a>
							</Button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
