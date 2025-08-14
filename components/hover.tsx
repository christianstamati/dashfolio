export default function Hover({ children }: { children: React.ReactNode }) {
	return (
		<div className="group relative w-full">
			{children}
			<div className="-inset-2 absolute hidden border-2 border-[#f5e901] group-hover:block"></div>
		</div>
	);
}
