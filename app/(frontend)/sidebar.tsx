"use client";

import { PathTool, Folder, Home, Profile, Sms } from "iconsax-reactjs";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
	{
		label: "Home",
		href: "/",
		icon: Home,
	},
	{
		label: "Projects",
		href: "/projects",
		icon: Folder,
	},
	{
		label: "Contact",
		href: "/contact",
		icon: Sms,
	},
	{
		label: "Writing",
		href: "/writing",
		icon: PathTool,
	},
	{
		label: "About",
		href: "/about",
		icon: Profile,
	},
];

const SidebarItem = ({
	className,
	icon: Icon,
	label,
}: {
	className?: string;
	icon: React.ComponentType<any>;
	label: string;
}) => {
	return (
		<div
			className={cn(
				"flex w-full cursor-pointer items-center rounded-2xl text-primary/20 transition-all duration-300 hover:bg-neutral-100 hover:text-foreground",
				className,
			)}
		>
			<div className="flex size-14 flex-shrink-0 items-center justify-center">
				<Icon variant="Bold" size={24} />
			</div>
			<span className="whitespace-nowrap font-semibold text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				{label}
			</span>
		</div>
	);
};

export default function Sidebar() {
	return (
		<div
			className={`-translate-y-1/2 group fixed top-1/2 left-8 z-50 h-[184px] w-[72px] overflow-hidden rounded-[36px] bg-white p-2 shadow-xl/5 ring ring-border transition-all duration-300 ease-in-out hover:h-[296px] hover:w-[200px] hover:rounded-3xl`}
		>
			<div>
				{links.map((link, index) => (
					<Link href={link.href} key={link.href}>
						<SidebarItem
							icon={link.icon}
							label={link.label}
							className={index >= 3 ? "hidden group-hover:flex" : ""}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}
