import type React from "react";
import "./globals.css";
import Footer from "./footer";
import Sidebar from "./sidebar";

export const metadata = {
	description: "A blank template using Payload in a Next.js app.",
	title: "Payload Blank Template",
};

export default function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="flex h-screen overflow-hidden bg-neutral-50">
				<Sidebar />
				<div className="w-full">
					<main>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
