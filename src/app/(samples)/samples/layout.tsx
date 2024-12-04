import "@/styles/globals.css";
import { geistMono, geistSans } from "@/lib/fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-svh font-geist-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
