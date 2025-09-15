"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "./theme-provider";

// Lazy load Toaster to reduce initial bundle
const Toaster = dynamic(
	() => import("./ui/sonner").then((mod) => ({ default: mod.Toaster })),
	{
		ssr: false,
		loading: () => null,
	},
);

const FontAwesomeProvider = dynamic(() => import("./fontawesome-provider"), {
	ssr: false,
});

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			<FontAwesomeProvider />
			<NuqsAdapter>{children}</NuqsAdapter>
			<Toaster />
			<Analytics />
			<SpeedInsights />
		</ThemeProvider>
	);
}
