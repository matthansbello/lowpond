import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lowpond.ng";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lowpond Nigeria Limited | Engineering Perfection",
  description:
    "Lowpond Nigeria Limited delivers structurally sound, technically advanced engineering solutions, built with exacting standards, delivered on schedule.",
  icons: {
    icon: "/images/cropped-LowPond-Main-Logo2.webp",
    apple: "/images/cropped-LowPond-Main-Logo2.webp",
  },
  openGraph: {
    title: "Lowpond Nigeria Limited | Engineering Perfection",
    description:
      "Precision-engineered solutions for Nigeria's infrastructure future — structural, civil, industrial, and mining engineering.",
    images: ["/images/cropped-LowPond-Main-Logo2.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/cropped-LowPond-Main-Logo2.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
