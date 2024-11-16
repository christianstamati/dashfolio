import localFont from "next/font/local";

const geistSans = localFont({
  src: "./geist/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./geist/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export { geistSans, geistMono };
