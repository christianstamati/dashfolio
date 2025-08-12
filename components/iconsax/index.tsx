"use client";

import type { IconProps as IconsaxIconProps } from "iconsax-reactjs";
import { iconsaxIcons } from "./icons";

type IconName = keyof typeof iconsaxIcons;

type IconProps = {
	icon: IconName | string;
	className?: string;
	size?: number;
	variant?: IconsaxIconProps["variant"];
};

export default function Iconsax({ icon, className, size, variant }: IconProps) {
	const Icon = iconsaxIcons[icon as IconName] || iconsaxIcons.closeCircle;
	return <Icon className={className} size={size} variant={variant} />;
}
