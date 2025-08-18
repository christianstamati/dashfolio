"use client";

import Socials from "@/components/socials";
import { useIsMobile } from "@/hooks/use-mobile";

export default function BottomSocials() {
	const isMobile = useIsMobile();
	if (isMobile) return null;
	return (
		<div className="mt-16">
			<Socials />
		</div>
	);
}
