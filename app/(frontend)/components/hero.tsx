/**
 * Hero component
 *
 * Avatar
 * Title: Howdy, Ronnie here
 * Short Description: I'm Ron, a creative product designer based out of New York. I specialize in transforming visionary concepts into tangible realities, focusing on user-centered design.
 * CTA: Get in touch
 */

import { DocumentDownload, Sms } from "iconsax-reactjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<section>
			<div className="container mx-auto">
				<Avatar className="mb-6 size-16">
					<AvatarImage src="https://github.com/shadcn.png" alt="Chri" />
					<AvatarFallback>CS</AvatarFallback>
				</Avatar>
				<h1 className="mb-2 font-semibold text-3xl tracking-tight">
					I’m Chri.
				</h1>
				<p className="mx-auto mb-6 text-base text-muted-foreground sm:mb-8">
					I’m a Software Developer who turns bold ideas into seamless digital
					experiences. My focus is on user-centered design, bridging vision and
					functionality to create products that feel as good as they work.
				</p>
				<div className="flex gap-4">
					<Button size="lg">
						<Sms variant="Bold" size={24} />
						<span>Get in touch</span>
					</Button>
					<Button size="lg" variant="outline">
						<DocumentDownload variant="Bold" size={24} />
						<span>Download CV</span>
					</Button>
				</div>
			</div>
		</section>
	);
}
