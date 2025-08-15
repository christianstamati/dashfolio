import { cn } from "@/lib/utils";

export default function Description({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<p className={cn("max-w-2xl text-base text-muted-foreground", className)}>
			{children}
		</p>
	);
}
