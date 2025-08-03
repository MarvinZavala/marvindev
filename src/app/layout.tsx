import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageDetectionNotice from '@/components/LanguageDetectionNotice';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marvin Zavala - Desarrollador Web & Estudiante",
  description: "Portafolio profesional de Marvin Zavala, estudiante de high school apasionado por el desarrollo web, IA y la creación de startups en Oakland, California.",
  keywords: "Marvin Zavala, desarrollador web, Next.js, React Native, Firebase, Oakland, California, estudiante, programador",
  authors: [{ name: "Marvin Zavala" }],
  creator: "Marvin Zavala",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: "https://marvinzavala.dev",
    title: "Marvin Zavala - Desarrollador Web & Estudiante",
    description: "Portafolio profesional de Marvin Zavala, estudiante de high school apasionado por el desarrollo web, IA y la creación de startups.",
    siteName: "Marvin Zavala Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvin Zavala - Desarrollador Web & Estudiante",
    description: "Portafolio profesional de Marvin Zavala, estudiante de high school apasionado por el desarrollo web, IA y la creación de startups.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <LanguageDetectionNotice />
        </LanguageProvider>
      </body>
    </html>
  );
}
