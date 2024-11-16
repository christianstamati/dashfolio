import type { Metadata } from "next";
import "@/styles/globals.css";
import { geistMono, geistSans } from "src/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

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
          <div className="absolute right-3 top-3">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
