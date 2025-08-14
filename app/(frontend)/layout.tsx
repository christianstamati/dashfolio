import type React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "./sidebar";

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="flex h-svh flex-col overflow-auto">
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<Sidebar />
					<main className="pt-6 pb-24 sm:pt-16">
						<div className="mx-auto max-w-xl px-4 sm:px-6">{children}</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
