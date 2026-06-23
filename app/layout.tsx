import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PDF Scan Fast — Fastest PDF Scanner App",
    template: "%s | PDF Scan Fast",
  },
  description:
    "PDF Scan Fast is the fastest PDF scanner app for iPhone and Android. Scan, sign, and organize documents in seconds.",
  keywords: [
    "PDF scanner",
    "document scanner",
    "e-signature",
    "scan documents",
    "mobile scanner",
  ],
  verification: {
    google: "zfiJ3OAXOdn3oKLyVU-K005sQXhLOZCHjs1rXTm2nXU",
  },
  metadataBase: new URL("https://pdfscanfast.com"),
  openGraph: {
    type: "website",
    siteName: "PDF Scan Fast",
    title: "PDF Scan Fast — Fastest PDF Scanner App",
    description:
      "Scan, sign, and organize documents in seconds — all from your phone.",
    images: ["/images/screenshot-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Scan Fast — Fastest PDF Scanner App",
    description:
      "Scan, sign, and organize documents in seconds — all from your phone.",
    images: ["/images/screenshot-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
