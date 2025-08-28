import type React from "react";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { BackgroundGradient } from "@/components/background-gradient";
import { Providers } from "@/components/providers";

const geistSans = Geist({
	variable: "--font-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link href="/favicon.ico" rel="icon" sizes="32x32" />
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex h-svh flex-col overflow-auto font-sans antialiased`}
			>
				<Providers>
					<BackgroundGradient />
					<main className="pt-12 pb-32 sm:pt-24">
						<div className="mx-auto max-w-2xl px-4 sm:px-6">{children}</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
