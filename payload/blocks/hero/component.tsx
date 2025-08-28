import { DocumentDownload, Sms } from "iconsax-reactjs";
import Link from "next/link";
import Description from "@/components/description";
import Title from "@/components/title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { HeroProps } from "@/payload/payload-types";
import DownloadResume from "./download-resume";

const defaultAvatarImage = "https://github.com/shadcn.png";

export default function Hero({ title, description, image, resume }: HeroProps) {
	const imageUrl =
		typeof image === "string"
			? defaultAvatarImage
			: image?.url || defaultAvatarImage;

	const resumeUrl = typeof resume === "string" ? null : resume?.url || null;

	return (
		<section>
			<div className="container mx-auto">
				<Avatar className="mb-6 size-16 items-center justify-center bg-secondary">
					<AvatarImage className="size-12" src={imageUrl} alt="avatar-image" />
					<AvatarFallback>CS</AvatarFallback>
				</Avatar>
				<Title>{title || "Not set"}</Title>
				<Description className="mx-auto mb-6 sm:mb-8">
					{description || "Not set"}
				</Description>
				<div className="flex gap-4">
					<Button size="lg" asChild>
						<Link href="/contact">
							<Sms variant="Bold" size={24} />
							<p className="text-sm!">Get in touch</p>
						</Link>
					</Button>
					{resumeUrl ? (
						<DownloadResume resumeUrl={resumeUrl} resumeName={"resume"} />
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
