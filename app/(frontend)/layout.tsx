import type React from "react";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { WorkInProgressBanner } from "./banner";
import { Sidebar } from "./sidebar";

const geistSans = Geist({
	variable: "--font-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex h-svh flex-col overflow-auto font-sans antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<WorkInProgressBanner />
					<Sidebar />
					<main className="pt-12 pb-24 sm:pt-24">
						<div className="mx-auto max-w-2xl px-4 sm:px-6">{children}</div>
					</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
