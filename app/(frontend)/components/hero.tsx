import { DocumentDownload, Sms } from "iconsax-reactjs";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getPayloadClient } from "@/payload/client";
import DownloadResume from "./download-resume";

const getHero = async () => {
	const payload = await getPayloadClient();
	const hero = await payload.findGlobal({
		slug: "hero",
	});
	return hero;
};

const defaultImageUrl = "https://github.com/shadcn.png";

export default async function Hero() {
	const hero = await getHero();
	const resumeUrl =
		typeof hero.resume === "string" ? undefined : hero.resume?.url;

	const imageUrl =
		typeof hero.image === "string"
			? defaultImageUrl
			: hero.image?.url || defaultImageUrl;

	return (
		<section>
			<div className="container mx-auto">
				<Avatar className="mb-6 size-16 items-center justify-center bg-secondary">
					<AvatarImage className="size-12" src={imageUrl} alt="avatar-image" />
					<AvatarFallback>CS</AvatarFallback>
				</Avatar>
				<h1 className="mb-2 font-semibold text-3xl tracking-tight">
					{hero.title || "No title"}
				</h1>
				<p className="mx-auto mb-6 text-base text-muted-foreground sm:mb-8">
					{hero.description || "No description"}
				</p>
				<div className="flex gap-4">
					<Button size="lg" asChild>
						<Link href="/contact">
							<Sms variant="Bold" size={24} />
							<span>Get in touch</span>
						</Link>
					</Button>
					{resumeUrl ? (
						<DownloadResume resume={resumeUrl} />
					) : (
						<Button disabled variant="outline" size="lg">
							<DocumentDownload variant="Bold" size={24} />
							<span>No resume added</span>
						</Button>
					)}
				</div>
			</div>
		</section>
	);
}
