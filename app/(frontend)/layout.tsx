import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryClientProvider } from "@/components/query-client-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { WorkInProgressBanner } from "./banner";
import { Sidebar } from "./sidebar";

export const metadata: Metadata = {
	title: "Christian Stamati — Software Developer",
	description:
		"Creating interactive and immersive web experiences, combining 3D and web technologies.",
	icons: {
		icon: "/favicon.svg",
	},
};

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
	const env = process.env.NODE_ENV;
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex h-svh flex-col overflow-auto font-sans antialiased`}
			>
				<QueryClientProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						{env !== "development" && <WorkInProgressBanner />}
						{/* Pearl Mist Background with Top Glow */}
						<div
							className="-z-50 absolute inset-0 hidden dark:block"
							style={{
								background:
									"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #0A0A0A",
							}}
						/>
						<Sidebar />
						<main className="pt-12 pb-32 sm:pt-24">
							<div className="mx-auto max-w-2xl px-4 sm:px-6">{children}</div>
						</main>
						<Toaster />
					</ThemeProvider>
				</QueryClientProvider>
			</body>
		</html>
	);
}
