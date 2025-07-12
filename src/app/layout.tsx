import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Space_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FlickeringGrid } from "@/components/ui/FlickeringGrid";
import { organizationSchema, websiteSchema } from '@/lib/structuredData';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The KP Company - AI-Powered Creative Tools | Frictionless Creativity",
  description:
    "Liberate your creativity with AI-powered tools for writing, research, and productivity. Try Bookify, Fictional, Student Assist, and more everyday utilities for free.",
  manifest: '/manifest.json',
  other: {
    'theme-color': '#00FF88',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="antialiased font-inter text-white bg-deep-space">
        {/* Global fixed animated background */}
        <FlickeringGrid
          color="rgb(0,255,136)"
          maxOpacity={0.3}
          squareSize={4}
          gridGap={6}
          className="z-0"
        />
        {/* App content above background */}
        <div className="relative z-10 min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('/sw.js').catch(console.error); }); }`,
          }}
        />
      </body>
    </html>
  );
}
