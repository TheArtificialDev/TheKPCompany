import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Space_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

export const dynamic = 'force-dynamic'

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
        {/* Simple CSS background */}
        <div className="fixed inset-0 bg-deep-space z-0">
          <div 
            className="absolute inset-0 opacity-20 animate-pulse"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, #00FF88 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
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
