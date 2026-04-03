import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { isValidLocale, rtlLocales, locales } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";

const BASE_URL = "https://pdfscanfast.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  if (!isValidLocale(locale)) {
    return {
      title: {
        default: "PDF Scan Fast — Fastest PDF Scanner App",
        template: "%s | PDF Scan Fast",
      },
    };
  }

  // Read the current pathname from the x-pathname header set by middleware
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || `/${locale}`;

  // Strip the locale prefix to get the path suffix (e.g. "/blog/some-slug")
  const pathSuffix = pathname.replace(new RegExp(`^/${locale}`), "") || "";

  // Build hreflang alternates for all 15 locales
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = `${BASE_URL}/${loc}${pathSuffix}`;
  }
  // x-default points to English
  languages["x-default"] = `${BASE_URL}/en${pathSuffix}`;

  return {
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
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}${pathname}`,
      languages,
    },
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
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const isRtl = rtlLocales.includes(locale as Locale);

  return (
    <div dir={isRtl ? "rtl" : "ltr"} lang={locale}>
      {children}
    </div>
  );
}
