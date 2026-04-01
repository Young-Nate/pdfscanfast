"use client";

import Link from "next/link";
import Image from "next/image";
import { LanguageSelector } from "@/components/language-selector";
import type { Locale } from "@/lib/i18n/config";
import type { Translations } from "@/lib/i18n";

interface NavbarProps {
  locale: Locale;
  t: Translations;
}

export function Navbar({ locale, t }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <Image
            src="/images/logo.jpg"
            alt="PDF Scan Fast"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-bold text-lg tracking-tight">PDF Scan Fast</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() =>
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.features}
          </button>
          <button
            onClick={() =>
              document.getElementById("premium")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.premium}
          </button>
          <Link
            href={`/${locale}/blog`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.blog}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSelector currentLocale={locale} />
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full h-9 px-4 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t.nav.download}
          </a>
        </div>
      </div>
    </nav>
  );
}

interface BlogNavProps {
  locale: Locale;
  t: Translations;
  activePage?: "home" | "blog";
}

export function BlogNav({ locale, t, activePage }: BlogNavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <Image
            src="/images/logo.jpg"
            alt="PDF Scan Fast"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-bold text-lg tracking-tight">PDF Scan Fast</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href={`/${locale}`}
            className={`text-sm font-medium transition-colors ${
              activePage === "home"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.nav.home}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className={`text-sm font-medium transition-colors ${
              activePage === "blog"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.nav.blog}
          </Link>
        </div>
        <LanguageSelector currentLocale={locale} />
      </div>
    </nav>
  );
}
