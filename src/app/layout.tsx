import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brantra — From inquiry to paid",
  description: "The deal-to-paid workspace for self-managed creators and their brand partnerships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}
