import type React from "react";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import AdminBarServer from "@/components/admin-bar/index.server";
import { BackgroundGradient } from "@/components/background-gradient";
import { Providers } from "@/components/providers";
import { Sidebar } from "./sidebar";

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
				className={`${geistSans.variable} ${geistMono.variable} flex h-svh flex-col overflow-auto font-sans antialiased`}
			>
				<Providers>
					<Suspense fallback={null}>
						<AdminBarServer />
					</Suspense>
					<BackgroundGradient />
					<Sidebar />
					<main className="pt-12 pb-32 sm:pt-24">
						<div className="mx-auto max-w-2xl px-4 sm:px-6">{children}</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
