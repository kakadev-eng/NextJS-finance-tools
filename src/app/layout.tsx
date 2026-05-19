import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  verification: {
    google: "ixh4gTcuthKwTSscSVEekkWmEyju3IgCzmy50dq6WxI",
  },
  title: {
    default: "FinanceTools",
    template: "%s | FinanceTools",
  },
  description:
    "Financial calculators, stock prices, crypto tools and market insights.",
  metadataBase: new URL("https://finance-tools.vercel.app"),
  openGraph: {
    title: "FinanceTools",
    description: "Financial calculators and market tools.",
    siteName: "FinanceTools",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinanceTools",
    description: "Financial calculators and market tools.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-zinc-950 text-white">
        <Navbar />

        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
