import type React from "react";
import "./globals.css";

// we can render PAGES

// we can render PROJECTS/SLUG
// we can render WRITINGS/SLUG

export default function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="flex h-screen overflow-hidden bg-neutral-50">
				{children}
			</body>
		</html>
	);
}
