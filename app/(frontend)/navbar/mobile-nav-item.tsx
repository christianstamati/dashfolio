"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconsaxIcon } from "@/components/iconsax-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Nav } from "@/payload/payload-types";
import { getUrl, isActive } from "./utils";

export default function MobileNavItem({
	link,
}: {
	link: NonNullable<Nav["links"]>[number];
}) {
	const pathname = usePathname();
	const linkUrl = getUrl(link);
	const active = isActive(pathname, linkUrl ?? "/");

	return (
		<Button
			size="sm"
			className="flex h-auto flex-col items-center gap-1 rounded-lg px-3 py-2"
			variant="ghost"
			asChild
		>
			<Link
				href={linkUrl === "/home" ? "/" : (linkUrl ?? "/")}
				aria-label={link.label}
			>
				<IconsaxIcon
					variant={active ? "Bold" : "Linear"}
					className={cn("size-5", !active && "text-muted-foreground")}
					name={link.icon ?? "Home"}
					aria-hidden="true"
				/>
				<span className={cn("text-xs", !active && "text-muted-foreground")}>
					{link.label}
				</span>
			</Link>
		</Button>
	);
}
