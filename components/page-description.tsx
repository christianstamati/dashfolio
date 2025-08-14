export default function PageDescription({
	children,
}: {
	children: React.ReactNode;
}) {
	return <p className="max-w-2xl text-muted-foreground text-sm">{children}</p>;
}
