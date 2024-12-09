import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { geistMono, geistSans } from "src/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import Sidebar from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRight } from "lucide-react";

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
            <Sidebar />
            <div className="absolute right-0 top-0">
              <ThemeToggle />
            </div>
            <div className={"flex w-full flex-col overflow-auto"}>
              <div>{children}</div>

              <footer className="flex items-center justify-center bg-neutral-950">
                <div className="flex w-full max-w-4xl flex-col gap-16 py-14">
                  <div className={"grid grid-cols-4"}>
                    <div>
                      <div>Index</div>
                      <div>Explore</div>
                      <div>Explore</div>
                      <div>Explore</div>
                      <div>Explore</div>
                    </div>

                    <div>
                      <div>Products</div>
                      <div>Explore</div>
                      <div>Explore</div>
                      <div>Explore</div>
                      <div>Explore</div>
                    </div>

                    <div>
                      <div>Resources</div>
                      <div>Explore</div>
                      <div>Explore</div>
                      <div>Explore</div>
                      <div>Explore</div>
                    </div>

                    <div>
                      <div>Connect</div>
                      <div>Explore</div>
                      <div>Explore</div>
                      <div>Explore</div>
                      <div>Explore</div>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex w-full flex-col">
                      <div className="text-base font-bold">
                        Currently 🧑🏼‍💻 working
                      </div>
                      <div className="flex w-fit items-center justify-center gap-2">
                        <span>Reach out</span>
                        <div>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                    <div className="text-nowrap text-7xl">05:51 PM</div>
                  </div>
                  <div>
                    Copyright © 2025 Christian Stamati. All rights reserved.
                  </div>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
