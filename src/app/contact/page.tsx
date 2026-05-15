import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — LATAM Agile Delivery",
  description:
    "Get in touch with Wesley Zilva — Agile Delivery Manager based in São Carlos, SP, Brazil. Email, LinkedIn, and location map.",
};

const contactLinks = [
  {
    label: "Email",
    value: "wesley.zilva@gmail.com",
    href: "mailto:wesley.zilva@gmail.com",
    icon: "✉️",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/wesleyzilva",
    href: "https://linkedin.com/in/wesleyzilva",
    icon: "💼",
  },
  {
    label: "GitHub",
    value: "github.com/wesleyzilva",
    href: "https://github.com/wesleyzilva",
    icon: "💻",
  },
  {
    label: "Location",
    value: "São Carlos, SP — Brazil",
    href: "https://maps.google.com/?q=São+Carlos,SP,Brazil",
    icon: "📍",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A2540] text-white">
      {/* ── Top bar with back link ── */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-widest text-[#FF6B00] uppercase">
          Get in touch
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Contact
        </h1>
        <div className="w-12 border-b-2 border-[#FF6B00]" />
        <p className="text-white/70 text-lg leading-relaxed max-w-xl">
          Ready to discuss your next agile delivery challenge? Reach out via any
          of the channels below — I typically reply within one business day.
        </p>
      </section>

      {/* ── Contact cards + Map grid ── */}
      <section className="max-w-4xl mx-auto px-6 pb-20 grid gap-8 lg:grid-cols-2">
        {/* Left — contact info */}
        <div className="flex flex-col gap-4">
          {/* Working hours */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-2">
            <h2 className="text-[#FF6B00] font-semibold text-base">
              Working Hours
            </h2>
            <p className="text-white/80 text-sm">
              Monday – Friday: 8:30 – 12:00 &amp; 14:00 – 18:00
            </p>
            <p className="text-white/50 text-xs">
              São Paulo / BRT (UTC-3) — remote appointments available worldwide
            </p>
          </div>

          {/* Contact links */}
          <div className="flex flex-col gap-3">
            {contactLinks.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group bg-white/5 border border-white/10 hover:border-[#FF6B00] hover:bg-[#FF6B00]/10 transition-all rounded-2xl p-5 flex items-center gap-4"
              >
                <span className="text-2xl shrink-0">{icon}</span>
                <div className="min-w-0">
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-white text-sm font-medium truncate group-hover:text-[#FF6B00] transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Google Maps embed for São Carlos */}
        <div className="flex flex-col gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="px-6 pt-5 pb-3">
              <h2 className="text-[#FF6B00] font-semibold text-base">
                Location
              </h2>
              <p className="text-white/70 text-sm">
                São Carlos, SP — Brazil
              </p>
            </div>
            <div className="relative w-full" style={{ paddingBottom: "60%" }}>
              <iframe
                title="São Carlos, SP — Brazil location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117847.4905830985!2d-47.97706789136959!3d-22.01777823046093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8b49d83d06869%3A0x1ebf8fa3e6b9621f!2zU8OjbyBDYXJsb3MsIFNQ!5e0!3m2!1spt-BR!2sbr!4v1715900000000!5m2!1spt-BR!2sbr"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quick-connect CTA */}
          <a
            href="mailto:wesley.zilva@gmail.com"
            className="w-full flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-orange-500 transition-colors text-white font-bold text-base px-8 py-4 rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ✉️ Send a message
          </a>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <footer className="border-t border-white/10 py-8 text-center text-white/40 text-xs">
        © 2026 LATAM Agile Delivery — Wesley Zilva. All Rights Reserved.
      </footer>
    </main>
  );
}
