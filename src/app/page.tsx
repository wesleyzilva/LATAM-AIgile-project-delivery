import Image from "next/image";
import ProofStrip from "@/components/ProofStrip";

// ── DATA ──────────────────────────────────────────────────────────

const services = [
  {
    icon: "🚀",
    title: "Agile Delivery Management",
    desc: "Backlog-to-production clarity. Remove blockers, align cross-functional teams, and ship on schedule without chaos.",
  },
  {
    icon: "🔐",
    title: "DevSecOps & Observability",
    desc: "Zero critical vulnerabilities. 99.9% SLA. Security and reliability baked in from sprint 1 via Datadog & automated pipelines.",
  },
  {
    icon: "📊",
    title: "Data Engineering at Scale",
    desc: "80M+ transactions/day pipelines. Automated validation, monitoring, and R$500M+/month financial reconciliation.",
  },
  {
    icon: "🤖",
    title: "AI-First Engineering Workflows",
    desc: "AI handles volume. Humans focus on impact. 45% MTTR cut. Higher delivery frequency with the same team size.",
  },
];

const cases = [
  {
    company: "Serasa Experian",
    role: "Sr. Systems Analyst · Observability Lead",
    period: "2016 – 2021",
    highlight: "80M+ tx/day · 99.9% SLA",
    desc: "Led observability stack (Datadog) for mission-critical credit bureau systems across 50+ microservices. Reduced MTTR by 45%. Zero critical incidents over 5 years.",
    tags: ["Datadog", "Kafka", "DevSecOps", "Full-Stack", "Agile"],
  },
  {
    company: "Amdocs",
    role: "Sr. Business Ops Analyst · DBA",
    period: "Global Telecom · 8 countries",
    highlight: "50+ engineers · 3 continents",
    desc: "Coordinated multi-country engineering teams for global telecom BSS/OSS migrations. Delivered on time with zero critical incidents in LATAM, EMEA, and APAC.",
    tags: ["BSS/OSS", "Oracle DBA", "Unix", "Cross-functional", "Nearshore"],
  },
  {
    company: "Fintech / Banking",
    role: "Delivery Manager · Data Engineering",
    period: "2021 – present",
    highlight: "R$500M+ reconciled/month",
    desc: "End-to-end data pipeline engineering for high-volume financial reconciliation. Zero errors. Automated 40% of manual validation workload and reduced cycle time by 25%.",
    tags: ["Data Engineering", "Python", "SQL", "Agile", "AI Workflows"],
  },
];

const blogs = [
  {
    title: "AI-First Delivery: Augmenting Engineering Teams, Not Replacing Them",
    desc: "How I integrate GenAI into sprint workflows to handle volume while humans focus on architecture and decision-making.",
    href: "https://www.linkedin.com/in/wesleyzilva/",
    date: "2025",
    slug: "ai_first_delivery",
  },
  {
    title: "Observability as a Delivery Accelerator",
    desc: "Why treating technical debt as operational friction — and baking monitoring into sprint 1 — reduces MTTR by 45%.",
    href: "https://www.linkedin.com/in/wesleyzilva/",
    date: "2025",
    slug: "observability_accelerator",
  },
  {
    title: "Cross-Functional Alignment: Creating Clarity, Not Consensus",
    desc: "Stakeholder management in global nearshore teams. How shared metrics — a North Star — replace opinion-based decisions.",
    href: "https://www.linkedin.com/in/wesleyzilva/",
    date: "2024",
    slug: "cross_functional_alignment",
  },
];

const contacts = [
  {
    icon: "📞",
    label: "Call Direct",
    value: "+55 (16) 99721-2966",
    href: "tel:+5516997212966",
    event: "contact_phone",
    category: "lead",
    hoverBorder: "hover:border-blue-400/60",
    external: false,
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+55 (16) 99721-2966",
    href: "https://wa.me/5516997212966?text=Hi%20Wesley%20%E2%80%94%20I%20found%20your%20portfolio",
    event: "contact_whatsapp",
    category: "lead",
    hoverBorder: "hover:border-green-400/60",
    external: true,
  },
  {
    icon: "✉",
    label: "Email",
    value: "wesley.zilva@gmail.com",
    href: "mailto:wesley.zilva@gmail.com?subject=Interview%20Request%20%E2%80%94%20Wesley%20Zilva",
    event: "contact_email",
    category: "lead",
    hoverBorder: "hover:border-cyan-400/60",
    external: false,
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "/in/wesleyzilva",
    href: "https://www.linkedin.com/in/wesleyzilva/",
    event: "contact_linkedin",
    category: "lead",
    hoverBorder: "hover:border-blue-500/60",
    external: true,
  },
  {
    icon: "</>",
    label: "GitHub",
    value: "/wesleyzilva",
    href: "https://github.com/wesleyzilva",
    event: "contact_github",
    category: "engagement",
    hoverBorder: "hover:border-slate-400/60",
    external: true,
  },
];

const timeline = [
  {
    period: "2010 – 2013",
    role: "IT Technician · Full-Stack",
    desc: "Infrastructure, N1/N2 support, networking, Linux/Windows Server administration.",
    tags: ["Linux", "Windows Server", "Networking"],
  },
  {
    period: "2013 – 2016",
    role: "Sr. Business Ops Analyst · DBA",
    desc: "Unix/Oracle DBA at enterprise scale. Full-stack development for internal ops systems.",
    tags: ["Unix", "Oracle DBA", "Full-Stack"],
  },
  {
    period: "2016 – 2021",
    role: "Sr. Systems Analyst · Observability Lead",
    desc: "5 years at Serasa Experian. 80M+ tx/day. Datadog observability stack. 45% MTTR reduction.",
    tags: ["Datadog", "Kafka", "DevSecOps"],
  },
  {
    period: "2021 – now",
    role: "Delivery Manager · AI-First",
    desc: "Agile delivery, data engineering pipelines, AI-augmented workflows. 3 continents, 8 countries.",
    tags: ["Agile", "GenAI", "Nearshore", "Data Engineering"],
  },
];

// ── PAGE ──────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      {/* ══════════════════════════════════════════════
          HERO — Everything the recruiter needs in <54s
      ══════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative flex flex-col bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0a1628] overflow-hidden"
        style={{ minHeight: "85vh" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(76,201,240,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 15% 50%, rgba(76,201,240,0.10) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 85% 20%, rgba(247,37,133,0.07) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* ── CONTENT ── */}
        <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full mx-auto px-8 pt-24 pb-10">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-[160px] h-[200px] md:w-[220px] md:h-[270px] rounded-2xl overflow-hidden border-2 border-[#415A77]">
              <Image
                src="/LATAM-AIgile-project-delivery/wesley.jpg"
                alt="Wesley Gomes da Silva"
                width={220}
                height={270}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Text block */}
          <div className="flex flex-col gap-4 text-center md:text-left max-w-xl">
            {/* Available badge */}
            <span className="inline-flex items-center gap-2 self-center md:self-start px-3 py-1 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available · Remote · UTC-3
            </span>

            {/* Name */}
            <h1
              className="font-extrabold tracking-tight text-white leading-tight"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "clamp(1.9rem, 5vw, 3rem)",
              }}
            >
              Wesley Gomes da Silva
            </h1>

            {/* Role */}
            <p className="text-lg font-semibold text-[#4CC9F0]">
              Agile Delivery Manager · AI-First · LATAM Remote
            </p>

            {/* Result-oriented tagline — no adjectives */}
            <p className="text-base leading-relaxed text-[#E0E1DD]/80">
              I ship products on time.{" "}
              <span className="text-white font-semibold">14 years</span>
              {" · "}
              <span className="text-white font-semibold">
                80M+ transactions/day
              </span>
              {" · "}
              <span className="text-white font-semibold">3 continents</span>.
            </p>

            {/* Location tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {[
                "🏠 Remote",
                "🕐 UTC-3 · São Paulo, BR",
                "✈ Travel Available",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-[#1B263B] border border-[#415A77] text-[#E0E1DD]/60 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Primary CTAs — visible without any scroll */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-1">
              <a
                href="/assets/WesleySilva_Latam_AgileProjectDelivery_BR_C1English.docx"
                download
                data-track-event="cv_download"
                data-track-category="lead"
                data-track-label="hero_primary_cta"
                className="inline-flex items-center gap-2 min-h-[44px] px-6 py-2.5 bg-[#4CC9F0] hover:bg-[#4CC9F0]/80 text-[#0D1B2A] font-bold rounded-full text-sm transition-colors shadow-lg"
              >
                ⬇ Download CV · ATS
              </a>
              <a
                href="mailto:wesley.zilva@gmail.com?subject=Interview%20Request%20%E2%80%94%20Wesley%20Zilva&body=Hi%20Wesley%2C%0A%0AI%27d%20like%20to%20schedule%20an%20interview."
                data-track-event="schedule_call"
                data-track-category="lead"
                data-track-label="hero_primary_cta"
                className="inline-flex items-center gap-2 min-h-[44px] px-6 py-2.5 border border-[#4CC9F0] text-[#4CC9F0] hover:bg-[#4CC9F0]/10 font-bold rounded-full text-sm transition-colors"
              >
                📅 Schedule a Call
              </a>
            </div>

            {/* Quick links */}
            <div className="flex gap-4 justify-center md:justify-start mt-1">
              <a
                href="https://www.linkedin.com/in/wesleyzilva/"
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="contact_linkedin"
                data-track-category="engagement"
                data-track-label="hero_quicklink"
                className="text-xs text-[#E0E1DD]/45 hover:text-[#4CC9F0] transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-[#415A77]">·</span>
              <a
                href="mailto:wesley.zilva@gmail.com"
                data-track-event="contact_email"
                data-track-category="lead"
                data-track-label="hero_quicklink"
                className="text-xs text-[#E0E1DD]/45 hover:text-[#4CC9F0] transition-colors"
              >
                Email
              </a>
              <span className="text-[#415A77]">·</span>
              <a
                href="https://wa.me/5516997212966"
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="contact_whatsapp"
                data-track-category="lead"
                data-track-label="hero_quicklink"
                className="text-xs text-[#E0E1DD]/45 hover:text-[#25D366] transition-colors"
              >
                WhatsApp
              </a>
              <span className="text-[#415A77]">·</span>
              <a
                href="https://github.com/wesleyzilva"
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="contact_github"
                data-track-category="engagement"
                data-track-label="hero_quicklink"
                className="text-xs text-[#E0E1DD]/45 hover:text-[#4CC9F0] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ── PROOF STRIP — rotating metrics ── */}
        <ProofStrip />
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════ */}
      <section
        id="about"
        className="scroll-mt-20 bg-[#0D1B2A]"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="About" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-3"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Quick snapshot for recruiters & CTOs
          </h2>
          <p className="text-center text-[#4CC9F0]/60 text-base mb-10">
            Nearshore · Agile · AI-Powered · Team Dynamic
          </p>

          <p className="max-w-3xl mx-auto text-center text-base leading-relaxed text-[#E0E1DD]/70 mb-14">
            14+ years building and leading engineering teams for global
            companies across 8 countries — from DBA to Observability Lead to
            Delivery Manager. One consistent focus:{" "}
            <strong className="text-white">
              predictable delivery aligned to business outcomes
            </strong>
            .
          </p>

          {/* Career timeline */}
          <div className="flex flex-col gap-0 max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#4CC9F0] mt-1.5 flex-shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[#415A77]/40 my-1" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-xs text-[#4CC9F0] font-mono font-semibold">
                    {item.period}
                  </span>
                  <p className="text-white font-semibold mt-0.5">{item.role}</p>
                  <p className="text-sm text-[#E0E1DD]/60 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-[#1B263B] border border-[#415A77] text-[#E0E1DD]/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════ */}
      <section
        id="services"
        className="scroll-mt-20 bg-[#1B263B]/30"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Services" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-14"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            What I deliver
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl bg-[#0D1B2A] border border-[#415A77] hover:border-[#4CC9F0]/50 transition-colors"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed text-[#E0E1DD]/60">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PORTFOLIO
      ══════════════════════════════════════════════ */}
      <section
        id="portfolio"
        className="scroll-mt-20 bg-[#0D1B2A]"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Portfolio" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-14"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Cases &amp; results
          </h2>
          <div className="flex flex-col gap-6">
            {cases.map((c) => (
              <div
                key={c.company}
                className="p-6 rounded-2xl bg-[#1B263B] border border-[#415A77] hover:border-[#4CC9F0]/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-white font-bold text-xl">
                      {c.company}
                    </h3>
                    <p className="text-[#4CC9F0] text-sm font-medium mt-0.5">
                      {c.role} · {c.period}
                    </p>
                  </div>
                  <span className="self-start px-3 py-1 rounded-full bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 text-[#4CC9F0] text-xs font-bold whitespace-nowrap">
                    {c.highlight}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#E0E1DD]/65 mb-3">
                  {c.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-[#0D1B2A] border border-[#415A77] text-[#E0E1DD]/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BLOG
      ══════════════════════════════════════════════ */}
      <section
        id="blog"
        className="scroll-mt-20 bg-[#1B263B]/30"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Blog" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-14"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Insights on delivery &amp; AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((b) => (
              <a
                key={b.title}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="blog_click"
                data-track-category="content"
                data-track-label={b.slug}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-[#0D1B2A] border border-[#415A77] hover:border-[#4CC9F0]/50 transition-colors group"
              >
                <span className="text-xs text-[#4CC9F0]/60 font-mono">
                  {b.date}
                </span>
                <h3 className="text-white font-semibold text-base leading-snug group-hover:text-[#4CC9F0] transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-[#E0E1DD]/55 leading-relaxed flex-1">
                  {b.desc}
                </p>
                <span className="text-xs text-[#4CC9F0] font-semibold">
                  Read on LinkedIn →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════ */}
      <section
        id="contact"
        className="scroll-mt-20 bg-[#0A2540]"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Contact" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-3"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Let&apos;s build your team &amp; product{" "}
            <span className="text-[#4CC9F0]">together</span>
          </h2>
          <p className="text-center text-[#E0E1DD]/55 text-base mb-12">
            Available for nearshore / offshore projects. I respond within 24h.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                data-track-event={c.event}
                data-track-category={c.category}
                data-track-label="contact_section"
                className={`flex flex-col items-center gap-2 p-5 rounded-2xl bg-[#1B263B] border border-[#415A77] ${c.hoverBorder} transition-colors text-center min-h-[100px] justify-center`}
              >
                <span className="text-2xl">{c.icon}</span>
                <span className="text-[10px] font-bold text-[#E0E1DD]/50 uppercase tracking-widest">
                  {c.label}
                </span>
                <span className="text-xs text-white font-medium break-all leading-tight">
                  {c.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="px-8 py-5 bg-[#1B263B] border-t border-[#415A77]">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-[#E0E1DD]/40">
            © 2026 Wesley Gomes da Silva · Nearshore · AI · Agile Delivery
          </span>
          <div className="flex gap-5 flex-wrap">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/wesleyzilva/",
                external: true,
                event: "footer_linkedin",
                category: "engagement",
              },
              {
                label: "GitHub",
                href: "https://github.com/wesleyzilva",
                external: true,
                event: "footer_github",
                category: "engagement",
              },
              {
                label: "Email",
                href: "mailto:wesley.zilva@gmail.com",
                external: false,
                event: "footer_email",
                category: "lead",
              },
              {
                label: "WhatsApp",
                href: "https://wa.me/5516997212966",
                external: true,
                event: "footer_whatsapp",
                category: "lead",
              },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                data-track-event={l.event}
                data-track-category={l.category}
                data-track-label="footer"
                className="text-xs text-[#E0E1DD]/45 hover:text-[#4CC9F0] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

// ── SHARED ────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-4 text-[#4CC9F0] text-xs font-bold uppercase tracking-[0.2em]">
      <span className="flex-1 max-w-[80px] h-px bg-[#4CC9F0] opacity-30" />
      <span>{label}</span>
      <span className="flex-1 max-w-[80px] h-px bg-[#4CC9F0] opacity-30" />
    </div>
  );
}
