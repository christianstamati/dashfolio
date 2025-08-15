import * as Iconsax from "iconsax-reactjs";

interface IconsaxIconProps {
	name: string;
	variant?: "Linear" | "Bold" | "Broken" | "Bulk" | "TwoTone" | "Curved";
	size?: number;
	color?: string;
	className?: string;
}

export function IconsaxIcon({
	name,
	variant = "Linear",
	size = 24,
	color,
	className,
}: IconsaxIconProps) {
	// Convert name to PascalCase for Iconsax component names
	const iconName = name
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join("");

	// Dynamic import of the icon component
	const IconComponent = (Iconsax as any)[iconName];

	if (!IconComponent) {
		console.warn(`Iconsax icon "${name}" not found`);
		return null;
	}

	return (
		<IconComponent
			variant={variant}
			size={size}
			color={color}
			className={className}
		/>
	);
}
