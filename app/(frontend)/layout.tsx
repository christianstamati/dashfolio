import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { WorkInProgressBanner } from "./banner";
import BottomSocials from "./bottom-socials";
import { Sidebar } from "./sidebar";

export const metadata: Metadata = {
	title: "Christian Stamati — Software Developer",
	description:
		"Creating interactive and immersive web experiences, combining 3D and web technologies.",
	icons: {
		icon: [
			{
				url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✌️</text></svg>",
				type: "image/svg+xml",
			},
		],
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
					{/* Pearl Mist Background with Top Glow */}
					<div
						className="-z-50 absolute inset-0 hidden dark:block"
						style={{
							background:
								"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #0A0A0A",
						}}
					/>
					<Sidebar />
					<main className="pt-12 pb-28 sm:pt-24">
						<div className="mx-auto max-w-2xl px-4 sm:px-6">{children}</div>
						<BottomSocials />
					</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
