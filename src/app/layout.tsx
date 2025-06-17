import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Spectral } from 'next/font/google';
import localFont from 'next/font/local';

const eduQLD = localFont({
  src: '../fonts/EduQLDHand-VariableFont_wght.ttf',
  variable: '--font-heading',
  display: 'swap',
});

const spectral = Spectral({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '600']
});

export const metadata: Metadata = {
  title: "TheKPCompany - Digital Products With Comic Flair",
  description: "TheKPCompany creates beautiful digital experiences with comic-style design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${eduQLD.variable} ${spectral.variable}`}>
      <body className="antialiased bg-white font-body">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
