import type React from "react";
import "@/styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import AdminBarServer from "@/components/admin-bar/index.server";
import { BackgroundGradient } from "@/components/background-gradient";
import { Providers } from "@/components/providers";
import { getPayloadClient } from "@/payload/client";
import { generateMeta } from "@/payload/utils/generateMeta";

library.add(fab);

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

export async function generateMetadata(): Promise<Metadata | undefined> {
	const payload = await getPayloadClient();
	const seo = await payload.findGlobal({
		slug: "seo",
	});

	const customFaviconUrl = seo?.favicon
		? typeof seo.favicon === "string"
			? undefined
			: seo.favicon.url
		: null;

	return {
		...generateMeta({ doc: seo }),
		...(customFaviconUrl && {
			icons: {
				icon: customFaviconUrl,
				shortcut: customFaviconUrl,
				apple: customFaviconUrl,
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
				{/* Preconnect to external domains */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="dns-prefetch"
					href="https://dashfolio-prod.s3.eu-central-1.amazonaws.com"
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
						{/* <Suspense fallback={<SkeletonNavbar />}>
							<Navbar />
						</Suspense> */}

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
