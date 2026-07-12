"use client";

import { useState } from "react";
import Image from "next/image";
import ProofStrip from "@/components/ProofStrip";
import ProjectsSection from "@/components/ProjectsSection";

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
    desc: "Infrastructure, N1/N2 support, networking, servers — full-stack architectural foundation.",
    tags: ["Linux", "Windows Server", "Networking"],
  },
  {
    period: "2013 – 2016",
    role: "Sr. Business Ops Analyst · DBA",
    desc: "Unix/Oracle DBA at enterprise scale, full-stack dev and business operations analysis.",
    tags: ["Unix", "Oracle DBA", "Full Stack"],
  },
  {
    period: "2016 – 2021",
    role: "Sr. Systems Analyst · Full-Stack & Observability",
    desc: "5-year tenure as Full-Stack Developer and Observability Lead at Serasa Experian. 80M+ tx/day. 45% MTTR reduction.",
    tags: ["Full Stack", "Observability", "Datadog", "Kafka", "DevSecOps"],
  },
  {
    period: "2022 – 2024",
    role: "Agile Coach · Multi-squad",
    desc: "SAFe facilitation across Legal, HR, Finance, Customer Care and Billing squads with global coach.",
    tags: ["SAFe", "Scrum", "Kanban"],
  },
  {
    period: "2024 – 2025",
    role: "IT Coordinator · Payments",
    desc: "DevSecOps governance and data-driven API-First backlog across B2C and B2B payments BU.",
    tags: ["DevSecOps", "API-First", "Payments"],
  },
  {
    period: "2026 – present",
    role: "Global Agile Project Manager",
    desc: "Nearshore project management with Agile methodologies, AI-powered workspace and international high-performance team leadership.",
    tags: ["Agile PM", "Nearshore", "AI-Powered"],
    current: true,
  },
];

// â”€â”€ PAGE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-6 flex justify-center">
      <span className="rounded-full border border-[#4CC9F0]/25 bg-[#4CC9F0]/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.35em] text-[#4CC9F0]">
        {label}
      </span>
    </div>
  );
}

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const portfolioUrl = "https://wesleyzilva.github.io/portfolio";

  const openPortfolio = () => {
    setIsPopupOpen(false);
    window.open(portfolioUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      {isPopupOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/85 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-[#4CC9F0]/30 bg-[#0D1B2A]/95 p-6 shadow-2xl shadow-black/40">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4CC9F0]">New portfolio</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Wesley Zilva · Agile Delivery Manager · LATAM Remote</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#E0E1DD]/70">
              This experience is now focused on recruiter and hiring-manager priorities, with a sharper view of delivery, leadership, and measurable impact.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={openPortfolio}
                className="flex-1 rounded-full bg-[#4CC9F0] px-4 py-3 text-sm font-bold text-[#0D1B2A] transition-colors hover:bg-[#4CC9F0]/80"
              >
                Open portfolio
              </button>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="flex-1 rounded-full border border-[#415A77] px-4 py-3 text-sm font-semibold text-[#E0E1DD]/80 transition-colors hover:border-[#4CC9F0] hover:text-[#4CC9F0]"
              >
                Stay here
              </button>
            </div>
          </div>
        </div>
      )}

      <section id="home" className="relative flex flex-col bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0a1628] overflow-hidden" style={{ minHeight: "85vh" }}>
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: "linear-gradient(rgba(76,201,240,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 15% 50%, rgba(76,201,240,0.10) 0%, transparent 55%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 85% 20%, rgba(247,37,133,0.07) 0%, transparent 50%)" }} />
        </div>

        <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full mx-auto px-8 pt-24 pb-10">
          <div className="flex-shrink-0">
            <div className="w-[160px] h-[200px] md:w-[220px] md:h-[270px] rounded-2xl overflow-hidden border-2 border-[#415A77]">
              <Image src="/LATAM-AIgile-project-delivery/wesley.jpg" alt="Wesley Gomes da Silva" width={220} height={270} className="object-cover w-full h-full" priority />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left max-w-xl">
            <span className="inline-flex items-center gap-2 self-center md:self-start px-3 py-1 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available · Remote · UTC-3
            </span>

            <h1 className="font-extrabold tracking-tight text-white leading-tight" style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: "clamp(1.9rem, 5vw, 3rem)" }}>
              Wesley Gomes da Silva
            </h1>

            <p className="text-lg font-semibold text-[#4CC9F0]">Agile Delivery Manager · AI-First · LATAM Remote</p>
            <p className="text-base leading-relaxed text-[#E0E1DD]/80">
              I ship products on time. <span className="text-white font-semibold">14 years</span> · <span className="text-white font-semibold">80M+ transactions/day</span> · <span className="text-white font-semibold">3 continents</span>.
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {[
                "🏠 Remote",
                "🕐 UTC-3 · São Paulo, BR",
                "✈ Travel Available",
              ].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full bg-[#1B263B] border border-[#415A77] text-[#E0E1DD]/60 text-xs">{tag}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-1">
              <a href="/assets/WesleySilva_Latam_AgileProjectDelivery_BR_C1English.docx" download data-track-event="cv_download" data-track-category="lead" data-track-label="hero_primary_cta" className="inline-flex items-center gap-2 min-h-[44px] px-6 py-2.5 bg-[#4CC9F0] hover:bg-[#4CC9F0]/80 text-[#0D1B2A] font-bold rounded-full text-sm transition-colors shadow-lg">⬇ Download CV · ATS</a>
              <a href="mailto:wesley.zilva@gmail.com?subject=Interview%20Request%20%E2%80%94%20Wesley%20Zilva&body=Hi%20Wesley%2C%0A%0AI%27d%20like%20to%20schedule%20an%20interview." data-track-event="schedule_call" data-track-category="lead" data-track-label="hero_primary_cta" className="inline-flex items-center gap-2 min-h-[44px] px-6 py-2.5 border border-[#4CC9F0] text-[#4CC9F0] hover:bg-[#4CC9F0]/10 font-bold rounded-full text-sm transition-colors">📅 Schedule a Call</a>
            </div>

            <div className="flex gap-4 justify-center md:justify-start mt-1">
              <a href="https://www.linkedin.com/in/wesleyzilva/" target="_blank" rel="noopener noreferrer" data-track-event="contact_linkedin" data-track-category="engagement" data-track-label="hero_quicklink" className="text-xs text-[#E0E1DD]/45 hover:text-[#4CC9F0] transition-colors">LinkedIn</a>
              <span className="text-[#415A77]">·</span>
              <a href="mailto:wesley.zilva@gmail.com" data-track-event="contact_email" data-track-category="lead" data-track-label="hero_quicklink" className="text-xs text-[#E0E1DD]/45 hover:text-[#4CC9F0] transition-colors">Email</a>
              <span className="text-[#415A77]">·</span>
              <a href="https://wa.me/5516997212966" target="_blank" rel="noopener noreferrer" data-track-event="contact_whatsapp" data-track-category="lead" data-track-label="hero_quicklink" className="text-xs text-[#E0E1DD]/45 hover:text-[#25D366] transition-colors">WhatsApp</a>
              <span className="text-[#415A77]">·</span>
              <a href="https://github.com/wesleyzilva" target="_blank" rel="noopener noreferrer" data-track-event="contact_github" data-track-category="engagement" data-track-label="hero_quicklink" className="text-xs text-[#E0E1DD]/45 hover:text-[#4CC9F0] transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <ProofStrip />
      </section>

      <section id="about" className="scroll-mt-20 bg-[#0D1B2A]" style={{ padding: "6rem 2rem" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="About" />
          <h2 className="text-center font-extrabold tracking-tight text-white mb-3" style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Quick snapshot for recruiters & CTOs
          </h2>
          <p className="text-center text-[#4CC9F0]/60 text-base mb-10">Nearshore · Agile · AI-Powered · Team Dynamic</p>
          <p className="max-w-3xl mx-auto text-center text-base leading-relaxed text-[#E0E1DD]/70 mb-14">
            14+ years building and leading engineering teams for global companies across 8 countries — from DBA to Observability Lead to Delivery Manager. One consistent focus: <strong className="text-white">predictable delivery aligned to business outcomes</strong>.
          </p>

          <div className="flex flex-col gap-0 max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${item.current ? "bg-green-400 ring-2 ring-green-400/30" : "bg-[#4CC9F0]"}`} />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-[#415A77]/40 my-1" />}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-[#4CC9F0] font-mono font-semibold">{item.period}</span>
                    {item.current && <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 font-bold tracking-widest uppercase">Current</span>}
                  </div>
                  <p className="text-white font-semibold mt-0.5">{item.role}</p>
                  <p className="text-sm text-[#E0E1DD]/60 mt-0.5 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#1B263B] border border-[#415A77] text-[#E0E1DD]/55">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="imsquad" className="scroll-mt-20 bg-[#0D1B2A]" style={{ padding: "6rem 2rem" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="imSquad Framework" />
          <h2 className="text-center font-extrabold tracking-tight text-white mb-3" style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            How I build <span className="text-[#4CC9F0]">high-performance</span> teams
          </h2>
          <p className="text-center text-[#E0E1DD]/55 text-base mb-4 max-w-2xl mx-auto">imSquad is the AI-powered squad structure I use to run global dev teams. Three specialized agents — each owning a discipline, all aligned to ship.</p>
          <p className="text-center text-[#4CC9F0]/60 text-xs font-bold tracking-widest uppercase mb-12">imDev · imQA · imPO</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="flex flex-col rounded-2xl border border-[#4CC9F0]/30 bg-[#1B263B] overflow-hidden hover:border-[#4CC9F0]/60 transition-colors">
              <div className="px-6 pt-6 pb-4 border-b border-[#415A77]/40">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">⚙️</span>
                  <div>
                    <p className="text-[#4CC9F0] font-extrabold text-lg tracking-tight" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>imDev</p>
                    <p className="text-[#E0E1DD]/45 text-xs uppercase tracking-widest">Engineering Agent</p>
                  </div>
                </div>
                <p className="text-[#E0E1DD]/70 text-sm leading-relaxed">I use AI to accelerate delivery, reduce cycle time, and create a predictable engineering engine for global teams.</p>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-[#4CC9F0]/30 bg-[#1B263B] overflow-hidden hover:border-[#4CC9F0]/60 transition-colors">
              <div className="px-6 pt-6 pb-4 border-b border-[#415A77]/40">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🧪</span>
                  <div>
                    <p className="text-[#4CC9F0] font-extrabold text-lg tracking-tight" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>imQA</p>
                    <p className="text-[#E0E1DD]/45 text-xs uppercase tracking-widest">Quality Agent</p>
                  </div>
                </div>
                <p className="text-[#E0E1DD]/70 text-sm leading-relaxed">Quality is embedded from the first story, with strong automation, evidence, and release discipline.</p>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-[#4CC9F0]/30 bg-[#1B263B] overflow-hidden hover:border-[#4CC9F0]/60 transition-colors">
              <div className="px-6 pt-6 pb-4 border-b border-[#415A77]/40">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">📈</span>
                  <div>
                    <p className="text-[#4CC9F0] font-extrabold text-lg tracking-tight" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>imPO</p>
                    <p className="text-[#E0E1DD]/45 text-xs uppercase tracking-widest">Product Ops Agent</p>
                  </div>
                </div>
                <p className="text-[#E0E1DD]/70 text-sm leading-relaxed">I connect strategy, delivery, and stakeholder communication to keep execution aligned to outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
