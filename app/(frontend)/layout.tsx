import type React from "react";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import AdminBarServer from "@/components/admin-bar/index.server";
import { BackgroundGradient } from "@/components/background-gradient";
import { Providers } from "@/components/providers";
import { Navbar } from "./navbar";

const geistSans = Geist({
	variable: "--font-sans",
	subsets: ["latin"],
	display: "swap",
	preload: true,
});

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	display: "swap",
	preload: true,
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex h-svh flex-col font-sans antialiased`}
			>
				<Providers>
					{/* Admin bar */}
					<Suspense fallback={null}>
						<AdminBarServer />
					</Suspense>

					{/* Fixed background gradient  */}
					<BackgroundGradient />

					{/* Main content */}
					<div className="flex h-full min-h-0 w-full">
						{/* Navbar */}
						<Navbar />

						{/* Page content */}
						<main className="min-h-0 w-full overflow-auto pt-12 pb-32 sm:pt-24">
							<div className="mx-auto max-w-2xl px-4 sm:px-6">{children}</div>
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
