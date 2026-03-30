import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

// Icons as SVG components (lucide-style)
function ScanLine({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" x2="15" y1="12" y2="12"/>
    </svg>
  );
}
function PenTool({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 16.249a1 1 0 0 0 .776.746L13 18.5"/><path d="m2.3 2.3 7.286 7.286"/><circle cx="11" cy="11" r="2"/>
    </svg>
  );
}
function FolderOpen({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/>
    </svg>
  );
}
function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    </svg>
  );
}
function Star({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
function Apple({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z"/>
      <path d="M15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
    </svg>
  );
}
function Smartphone({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
    </svg>
  );
}
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

const features = [
  {
    icon: ScanLine,
    title: "Scan Instantly",
    description:
      "Point your camera and capture any document in under 2 seconds. AI-powered edge detection and auto-capture make scanning effortless.",
    image: "/images/hero-pdfscanfast.jpg",
  },
  {
    icon: PenTool,
    title: "E-Sign Documents",
    description:
      "Sign any PDF electronically with multiple ink colors. Draw your signature or type it — legally valid and beautifully rendered.",
    image: "/images/Screenshot-2-ESign-1774271933579-2.jpg",
  },
  {
    icon: FolderOpen,
    title: "Stay Organized",
    description:
      "Smart folders automatically categorize your scans. Find any document instantly with OCR-powered full-text search.",
    image: "/images/Screenshot-3-Organize-1774271937887-3.jpg",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description:
      "Bank-level encryption protects every scan. Your documents are safe with cloud sync and automatic backups across all devices.",
    image: "/images/Screenshot-5-Secure-1774272045392-5.jpg",
  },
];

const premiumBenefits = [
  "Unlimited document scans",
  "Cloud storage & sync across devices",
  "OCR text extraction & search",
  "No watermarks on exports",
  "Priority customer support",
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Freelance Designer",
    rating: 5,
    text: "I scan contracts and invoices daily. PDF Scan Fast is hands down the fastest scanner I've ever used — the auto-capture is like magic. Saves me at least 30 minutes a day.",
  },
  {
    name: "James Rodriguez",
    role: "Real Estate Agent",
    rating: 5,
    text: "The e-signature feature is a game changer. I can get documents signed on the spot during showings. My clients love how professional and easy it is.",
  },
  {
    name: "Emily Chen",
    role: "Graduate Student",
    rating: 5,
    text: "I use it to scan all my lecture notes and research papers. The OCR search is incredible — I can find any topic across hundreds of pages in seconds.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Star className="w-3.5 h-3.5 fill-primary" />
                #1 Scanner App on App Store
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-5">
                PDF Scan{" "}
                <span className="text-primary">Fast</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Fastest Scanner Ever. Scan, sign, and organize documents in
                seconds — all from your phone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Apple className="w-5 h-5" />
                  Download on App Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-base font-semibold border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Smartphone className="w-5 h-5" />
                  Get it on Google Play
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-[2rem] blur-2xl" />
                <Image
                  src="/images/hero-pdfscanfast.jpg"
                  alt="PDF Scan Fast scanning a document"
                  width={280}
                  height={560}
                  className="relative w-[260px] sm:w-[280px] rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Everything You Need, Nothing You Don&apos;t
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four powerful tools in one beautifully simple app. No bloat, no
              learning curve — just scan and go.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <Card
                key={i}
                className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row items-start gap-0">
                    <div className="p-6 sm:p-8 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="w-full sm:w-40 flex-shrink-0 flex justify-center sm:justify-end p-4 sm:p-6">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={128}
                        height={256}
                        className="w-28 sm:w-32 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section id="premium" className="py-20 sm:py-28 bg-[hsl(220,14%,97%)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-transparent rounded-[2rem] blur-xl" />
                <Image
                  src="/images/Screenshot-4-Premium-1774272083897-4.jpg"
                  alt="PDF Scan Fast Premium features"
                  width={260}
                  height={520}
                  className="relative w-[240px] sm:w-[260px] rounded-[2rem] shadow-xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-5">
                <Star className="w-3.5 h-3.5 fill-primary" />
                Premium
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Unlock the Full Power
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Go premium for unlimited scans, cloud storage, OCR text
                extraction, and a completely watermark-free experience.
              </p>
              <ul className="space-y-3 mb-8">
                {premiumBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-8 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Loved by Thousands
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join over 500,000 professionals, students, and business owners who
              trust PDF Scan Fast every day.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-5">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 sm:py-28 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Start Scanning for Free
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Download PDF Scan Fast today and discover why it&apos;s the fastest,
            simplest way to scan, sign, and organize your documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-base font-semibold bg-white text-primary hover:bg-white/90 transition-colors"
            >
              <Apple className="w-5 h-5" />
              Download on App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-base font-semibold bg-white/15 text-white hover:bg-white/25 border border-white/20 transition-colors"
            >
              <Smartphone className="w-5 h-5" />
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
