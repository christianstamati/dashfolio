import type React from "react";
import "./globals.css";
import { Sidebar } from "./sidebar";

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="flex h-screen flex-col overflow-auto bg-neutral-50">
				<Sidebar />
				<main className="pt-16 pb-24">
					<div className="mx-auto max-w-xl px-4 sm:px-6">{children}</div>
				</main>
			</body>
		</html>
	);
}
