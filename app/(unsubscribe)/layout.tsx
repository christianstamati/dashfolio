import type React from "react";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

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
	preload: false,
});

export const metadata: Metadata = {
	title: "Unsubscribe from Newsletter",
	description: "Unsubscribe from our newsletter",
};

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
				{children}
				<Toaster />
			</body>
		</html>
	);
}
