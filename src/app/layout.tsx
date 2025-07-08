import "~/styles/globals.css";

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { Navigation } from "~/components/navigation";
import { TRPCReactProvider } from "~/trpc/react";
import { PremiumLoader } from "~/components/premium-loader";
import { ComingSoonWrapper } from "~/components/coming-soon-wrapper";
import { env } from "~/env";

export const metadata: Metadata = {
  title: "VerifyPro - Employee Verification Platform",
  description:
    "Comprehensive employee verification and overemployment detection for modern startups",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-gray-50 antialiased font-inter selection:bg-blue-500/20 selection:text-white">
        <TRPCReactProvider>
          <ComingSoonWrapper 
            comingSoonMode={env.COMING_SOON_MODE === "true"}
            isDevelopment={env.NODE_ENV === "development"}
          >
            <PremiumLoader />
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
