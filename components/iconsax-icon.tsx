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
	// Dynamic import of the icon component
	const IconComponent = (Iconsax as any)[name];

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
