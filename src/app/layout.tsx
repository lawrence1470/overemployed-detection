import "~/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { ComingSoonWrapper } from "~/components/coming-soon-wrapper";
import { Navigation } from "~/components/navigation";
import { StructuredData } from "~/components/structured-data";
import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

const siteUrl = env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "VerifyHire - Employee Verification & Overemployment Detection Platform",
    template: "%s | VerifyHire",
  },
  description:
    "Protect your startup from dual employment fraud with VerifyHire's advanced verification platform. Detect overemployed workers, verify employee identities, and ensure workplace integrity.",
  keywords: [
    "employee verification",
    "overemployment detection",
    "dual employment",
    "workplace fraud prevention",
    "employee background check",
    "HR compliance",
    "startup security",
    "employee monitoring",
    "workforce integrity",
    "employment verification",
  ],
  authors: [{ name: "VerifyHire" }],
  creator: "VerifyHire",
  publisher: "VerifyHire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "VerifyHire",
    title: "VerifyHire - Employee Verification & Overemployment Detection",
    description:
      "Protect your startup from dual employment fraud. Advanced verification platform to detect overemployed workers and ensure workplace integrity.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "VerifyHire - Employee Verification Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VerifyHire - Employee Verification Platform",
    description:
      "Detect overemployed workers and protect your startup with advanced employee verification.",
    images: ["/twitter-image"],
    creator: "@verifyhire",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
  ],
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"], // Reduced weight variations
  preload: true,
  fallback: ["system-ui", "arial"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"], // Reduced weight variations
  preload: true,
  fallback: ["monospace"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black font-inter text-gray-50 antialiased selection:bg-blue-500/20 selection:text-white">
        <StructuredData />
        <TRPCReactProvider>
          <ComingSoonWrapper
            comingSoonMode={env.COMING_SOON_MODE.trim() === "true"}
            isDevelopment={env.NODE_ENV === "development"}
          >
            <div className="fixed top-0 right-0 left-0 z-50">
              <Navigation />
            </div>
            {children}
          </ComingSoonWrapper>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
