import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import {
  DM_Sans,
  Geist,
  Geist_Mono,
  IBM_Plex_Mono,
  Inter,
} from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Typefaces used by the Figma design: Inter, DM Sans and IBM Plex Mono. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Maneesha Barandeniya | Senior Frontend Engineer",
  description:
    "Portfolio for Maneesha Barandeniya, a Senior Frontend Engineer specializing in React.js, TypeScript, Next.js, React Native, SaaS, FinTech, and AI-driven products.",
  authors: [{ name: "Maneesha Barandeniya" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${dmSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
