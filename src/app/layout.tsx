import type { Metadata } from "next";
import "@/styles/globals.css";
import { geistMono, geistSans } from "@/fonts";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title:
    "Christian Stamati — 🇮🇹 Fullstack Developer | React | Next.js | Node | Docker | AWS",
  description:
    "I’m a Fullstack Developer with a passion for creating digital products.",
  icons: {
    icon: "/static/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
