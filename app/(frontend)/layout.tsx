import type React from "react";
import "@/styles/globals.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Geist, Geist_Mono } from "next/font/google";
import { BackgroundGradient } from "@/components/background-gradient";
import { Providers } from "@/components/providers";

// Add all brand icons to the library
library.add(fab);

const geistSans = Geist({
	variable: "--font-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

// const getSEO = cache(async () => {
// 	const payload = await getPayloadClient();
// 	const seo = await payload.findGlobal({
// 		slug: "seo",
// 	});
// 	return seo;
// });

// export async function generateMetadata(): Promise<Metadata | undefined> {
// 	const seo = await getSEO();

// 	const customFaviconUrl = seo?.favicon
// 		? typeof seo.favicon === "string"
// 			? undefined
// 			: seo.favicon.url
// 		: null;

// 	return {
// 		...generateMeta({ doc: seo }),
// 		...(customFaviconUrl && {
// 			icons: {
// 				icon: customFaviconUrl,
// 				shortcut: customFaviconUrl,
// 				apple: customFaviconUrl,
// 			},
// 		}),
// 	};
// }

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
					{/* <Suspense fallback={null}>
						<AdminBarServer />
					</Suspense> */}

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
