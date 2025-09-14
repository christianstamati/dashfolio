import type React from "react";
import "@/styles/globals.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cache, Suspense } from "react";
import AdminBarServer from "@/components/admin-bar/index.server";
import { BackgroundGradient } from "@/components/background-gradient";
import { Providers } from "@/components/providers";
import { SkeletonNavbar } from "@/components/skeleton-navbar";
import { getPayloadClient } from "@/payload/client";
import { generateMeta } from "@/payload/utils/generateMeta";
import { Navbar } from "./navbar";

// Add all brand icons to the library
library.add(fab);

const geistSans = Geist({
	variable: "--font-sans",
	subsets: ["latin"],
	display: "swap",
	preload: true,
	fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	display: "swap",
	preload: false,
	fallback: ["ui-monospace", "monospace"],
});

const getSEO = cache(async () => {
	const payload = await getPayloadClient();
	const seo = await payload.findGlobal({
		slug: "seo",
	});
	return seo;
});

export async function generateMetadata(): Promise<Metadata | undefined> {
	const seo = await getSEO();

	const faviconUrl = seo?.favicon
		? typeof seo.favicon === "string"
			? undefined
			: seo.favicon.url
		: null;

	console.log("faviconUrl", faviconUrl);

	return {
		...generateMeta({ doc: seo }),
		...(faviconUrl && {
			icons: {
				icon: faviconUrl,
				shortcut: faviconUrl,
				apple: faviconUrl,
			},
		}),
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="preconnect"
					href="https://dashfolio-prod.s3.eu-central-1.amazonaws.com"
					crossOrigin="anonymous"
				/>
			</head>
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
						<Suspense fallback={<SkeletonNavbar />}>
							<Navbar />
						</Suspense>

						{/* Page content */}
						<main className="flex w-full flex-col items-center overflow-auto pt-12 pb-24 lg:pt-24">
							<div className="w-full max-w-2xl flex-1 px-3 sm:px-6">
								{children}
							</div>
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
