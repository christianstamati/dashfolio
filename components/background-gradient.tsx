export function BackgroundGradient() {
	return (
		<div
			className="-z-50 absolute inset-0 hidden dark:block"
			style={{
				background:
					"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #0A0A0A",
			}}
		/>
	);
}
