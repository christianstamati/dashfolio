"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconsaxIcon } from "@/components/iconsax-icon";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Nav } from "@/payload/payload-types";

const getUrl = (link: NonNullable<Nav["links"]>[number]) => {
	if (link.type === "reference") {
		const ref = link.reference?.value;
		if (ref && typeof ref !== "string") {
			return `/${ref.slug}`;
		}
	}

	if (link.url) {
		return link.url;
	}
};

const isActive = (pathname: string, linkUrl: string) => {
	const isHome = pathname === "/" && linkUrl === "/home";
	if (isHome) {
		return true;
	}
	return pathname === linkUrl;
};

export default function NavItem({
	link,
}: {
	link: NonNullable<Nav["links"]>[number];
}) {
	const pathname = usePathname();

	const linkUrl = getUrl(link);

	const active = isActive(pathname, linkUrl ?? "/");

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					size="icon"
					className="size-14 rounded-2xl"
					variant="ghost"
					asChild
				>
					<Link href={linkUrl === "/home" ? "/" : (linkUrl ?? "/")}>
						<IconsaxIcon
							variant={active ? "Bold" : "Linear"}
							className={cn("size-6", !active && "text-muted-foreground")}
							name={link.icon ?? "Home"}
						/>
					</Link>
				</Button>
			</TooltipTrigger>
			<TooltipContent side="right">
				<p>{link.label}</p>
			</TooltipContent>
		</Tooltip>
	);
}
