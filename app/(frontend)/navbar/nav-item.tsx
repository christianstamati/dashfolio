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
import { getUrl, isActive } from "./utils";

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
					<Link
						href={linkUrl === "/home" ? "/" : (linkUrl ?? "/")}
						aria-label={link.label}
						prefetch={true}
					>
						<IconsaxIcon
							variant={"Bold"}
							className={cn("size-6", !active && "text-muted-foreground/50")}
							name={link.icon ?? "Home"}
							aria-hidden="true"
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
