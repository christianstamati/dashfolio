import type React from "react";
import "./globals.css";
import { QueryClientProvider } from "@/components/query-client-provider";
import { getPayloadClient } from "@/payload/client";
import Footer from "./footer";
import { Sidebar } from "./sidebar";

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;
	const payload = await getPayloadClient();
	const menu = await payload.findGlobal({
		slug: "menu",
	});
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="flex h-screen overflow-hidden bg-neutral-50">
				<QueryClientProvider>
					<Sidebar menu={menu} />
					<div className="w-full">
						<main>{children}</main>
						<Footer />
					</div>
				</QueryClientProvider>
			</body>
		</html>
	);
}
