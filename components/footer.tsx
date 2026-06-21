"use client";

import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Translations } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  t: Translations;
}

export function Footer({ locale, t }: FooterProps) {
  return (
    <footer className="py-12 bg-[hsl(220,14%,97%)] border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="PDF Scan Fast"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-base">PDF Scan Fast</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">{t.footer.product}</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.features}
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("premium")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.premium}
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.download}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">{t.footer.resources}</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.blog}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.helpCenter}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.cookies}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {t.footer.copyright}
          </p>
          <a
            href="https://www.perplexity.ai/computer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.footer.madeWith}
          </a>
        </div>
      </div>
    </footer>
  );
}

interface BlogFooterProps {
  t: Translations;
}

export function BlogFooter({ t }: BlogFooterProps) {
  return (
    <footer className="py-10 bg-[hsl(220,14%,97%)] border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="PDF Scan Fast"
            width={24}
            height={24}
            className="rounded"
          />
          <span className="text-sm font-medium">PDF Scan Fast</span>
        </div>
        <a
          href="https://www.perplexity.ai/computer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {t.footer.madeWith}
        </a>
        <p className="text-xs text-muted-foreground">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
