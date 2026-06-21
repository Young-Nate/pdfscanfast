import { Metadata } from "next";
import { BlogNav } from "@/components/navbar";
import { BlogFooter } from "@/components/footer";
import { isValidLocale } from "@/lib/i18n/config";
import { getTranslationsSync } from "@/lib/i18n";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

const CONTACT_EMAIL = "contact@infiniteroll.app";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  if (!isValidLocale(locale)) return {};
  return {
    title: "Contact & Support — PDF Scan Fast",
    description:
      "Need help with PDF Scan Fast? Reach our team for any issue related to the app. We typically reply within 24 hours.",
    alternates: {
      canonical: `https://pdfscanfast.com/${locale}/contact`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  if (!isValidLocale(locale)) notFound();

  const t = getTranslationsSync(locale as Locale);

  return (
    <>
      <BlogNav locale={locale as Locale} t={t} />

      <main className="min-h-[calc(100vh-200px)] py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Contact & Support
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For any issue related to the PDF Scan Fast app — bug reports,
              feature requests, billing questions, or general feedback — please
              reach out to our team.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 text-center shadow-sm">
            <p className="text-sm font-medium text-muted-foreground mb-3">
              Get in touch
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-block text-2xl sm:text-3xl font-semibold text-primary hover:underline break-all"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="text-sm text-muted-foreground mt-6">
              We typically reply within 24 hours, Monday to Friday.
            </p>
          </div>

          <div className="mt-10 text-sm text-muted-foreground text-center space-y-2">
            <p>
              To help us assist you faster, please include:
            </p>
            <ul className="inline-block text-left space-y-1">
              <li>• Your device (iPhone / Android / model)</li>
              <li>• The app version you are using</li>
              <li>• A short description of the issue</li>
              <li>• Screenshots if possible</li>
            </ul>
          </div>
        </div>
      </main>

      <BlogFooter t={t} />
    </>
  );
}
