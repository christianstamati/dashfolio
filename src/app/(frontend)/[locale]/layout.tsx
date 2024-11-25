import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { geistMono, geistSans } from "src/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import BottomNav from "@/components/bottom-nav";
import Sidebar from "@/features/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title:
    "Christian Stamati — 🇮🇹 Fullstack Developer | React | Next.js | Node | Docker | AWS",
  description:
    "I’m a Fullstack Developer with a passion for creating digital products.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-svh font-geist-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="fixed right-0">
              <ThemeToggle />
            </div>
            <Sidebar />
            <div className="w-full">{children}</div>
            <BottomNav />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
