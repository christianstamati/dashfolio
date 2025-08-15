import { cn } from "@/lib/utils";

export default function Title({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<h1 className={cn("mb-4 font-semibold text-2xl tracking-tight", className)}>
			{children}
		</h1>
	);
}
