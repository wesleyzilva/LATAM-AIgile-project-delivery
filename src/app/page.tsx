"use client";

import { useState } from "react";
import Image from "next/image";
import ProofStrip from "@/components/ProofStrip";
import ProjectsSection from "@/components/ProjectsSection";

// ── DATA ──────────────────────────────────────────────────────────

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

// ── PAGE ──────────────────────────────────────────────────────────

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
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4CC9F0]">
              New portfolio
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">
              Wesley Zilva · Agile Delivery Manager · LATAM Remote
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#E0E1DD]/70">
              This experience is now focused on recruiter and hiring-manager
              priorities, with a sharper view of delivery, leadership, and
              measurable impact.
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
                  <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${item.current ? "bg-green-400 ring-2 ring-green-400/30" : "bg-[#4CC9F0]"}`} />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[#415A77]/40 my-1" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-[#4CC9F0] font-mono font-semibold">
                      {item.period}
                    </span>
                    {item.current && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 font-bold tracking-widest uppercase">
                        Current
                      </span>
                    )}
                  </div>
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
          imSQUAD FRAMEWORK
      ══════════════════════════════════════════════ */}
      <section
        id="imsquad"
        className="scroll-mt-20 bg-[#0D1B2A]"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="imSquad Framework" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-3"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            How I build{" "}
            <span className="text-[#4CC9F0]">high-performance</span> teams
          </h2>
          <p className="text-center text-[#E0E1DD]/55 text-base mb-4 max-w-2xl mx-auto">
            imSquad is the AI-powered squad structure I use to run global dev teams.
            Three specialized agents — each owning a discipline, all aligned to ship.
          </p>
          <p className="text-center text-[#4CC9F0]/60 text-xs font-bold tracking-widest uppercase mb-12">
            imDev · imQA · imPO
          </p>

          {/* 3 pillar cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* imDev */}
            <div className="flex flex-col rounded-2xl border border-[#4CC9F0]/30 bg-[#1B263B] overflow-hidden hover:border-[#4CC9F0]/60 transition-colors">
              <div className="px-6 pt-6 pb-4 border-b border-[#415A77]/40">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">⚙️</span>
                  <div>
                    <p className="text-[#4CC9F0] font-extrabold text-lg tracking-tight" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                      imDev
                    </p>
                    <p className="text-[#E0E1DD]/45 text-xs uppercase tracking-widest">Engineering Agent</p>
                  </div>
                </div>
                <p className="text-[#E0E1DD]/70 text-sm leading-relaxed">
                  Owns technical execution. Manages developer velocity, code quality gates, CI/CD discipline, and DevSecOps compliance — so engineers ship fast and clean.
                </p>
              </div>
              <div className="px-6 py-4 flex flex-col gap-2">
                {["Sprint velocity & DORA metrics", "CI/CD pipeline governance", "DevSecOps gates (Veracode/Checkmarx)", "Tech debt prioritization", "Onboarding global devs in < 48h"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-[#4CC9F0] text-xs mt-0.5">▸</span>
                    <span className="text-[#E0E1DD]/60 text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* imQA */}
            <div className="flex flex-col rounded-2xl border border-[#F72585]/30 bg-[#1B263B] overflow-hidden hover:border-[#F72585]/60 transition-colors">
              <div className="px-6 pt-6 pb-4 border-b border-[#415A77]/40">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🔬</span>
                  <div>
                    <p className="text-[#F72585] font-extrabold text-lg tracking-tight" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                      imQA
                    </p>
                    <p className="text-[#E0E1DD]/45 text-xs uppercase tracking-widest">Quality Agent</p>
                  </div>
                </div>
                <p className="text-[#E0E1DD]/70 text-sm leading-relaxed">
                  Owns quality assurance end-to-end. Defines test strategies, automates coverage, enforces Definition of Done, and prevents production incidents before they happen.
                </p>
              </div>
              <div className="px-6 py-4 flex flex-col gap-2">
                {["Test automation strategy & coverage", "Definition of Done enforcement", "Bug triage & severity classification", "Regression risk assessment per sprint", "QA metrics dashboard for stakeholders"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-[#F72585] text-xs mt-0.5">▸</span>
                    <span className="text-[#E0E1DD]/60 text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* imPO */}
            <div className="flex flex-col rounded-2xl border border-[#7209B7]/40 bg-[#1B263B] overflow-hidden hover:border-[#7209B7]/70 transition-colors">
              <div className="px-6 pt-6 pb-4 border-b border-[#415A77]/40">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <p className="text-[#b64ee8] font-extrabold text-lg tracking-tight" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                      imPO
                    </p>
                    <p className="text-[#E0E1DD]/45 text-xs uppercase tracking-widest">Product Owner Agent</p>
                  </div>
                </div>
                <p className="text-[#E0E1DD]/70 text-sm leading-relaxed">
                  Owns the product backlog and stakeholder alignment. Translates business needs into sprint-ready stories, manages priorities, and bridges the gap between CTO and dev team.
                </p>
              </div>
              <div className="px-6 py-4 flex flex-col gap-2">
                {["Backlog grooming & story mapping", "OKR-to-sprint alignment", "Stakeholder communication rhythm", "Feature prioritization (WSJF/RICE)", "Roadmap visibility for CTOs & investors"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-[#b64ee8] text-xs mt-0.5">▸</span>
                    <span className="text-[#E0E1DD]/60 text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How it works — PM layer */}
          <div className="rounded-2xl border border-[#415A77]/40 bg-[#1B263B]/50 px-8 py-6 max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-[#4CC9F0]/70 mb-3">How it works</p>
            <p className="text-white font-semibold text-base mb-2">
              I operate as the <span className="text-[#4CC9F0]">PM layer</span> above all three agents.
            </p>
            <p className="text-[#E0E1DD]/60 text-sm leading-relaxed">
              I hire, onboard, and align imDev · imQA · imPO for your startup — using AI-assisted workflows to reduce management overhead by up to 60% while keeping delivery predictable and stakeholders informed.
            </p>
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
            className="text-center font-extrabold tracking-tight text-white mb-3"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            12 projects · real results
          </h2>
          <p className="text-center text-[#E0E1DD]/45 text-sm mb-10">
            Click any card to see context, actions, and outcomes.
          </p>
          <ProjectsSection />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TOOLS & PLATFORMS
      ══════════════════════════════════════════════ */}
      <section
        id="tools"
        className="scroll-mt-20"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Tools & Platforms" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-3"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Toolbox built over{" "}
            <span className="text-[#4CC9F0]">14 years</span>
          </h2>
          <p className="text-center text-[#E0E1DD]/45 text-sm mb-10">
            Enterprise platforms, cloud infrastructure, observability, and delivery tools I use in production.
          </p>

          <div className="flex flex-col gap-10">
            {[
              {
                category: "Delivery & Collaboration",
                color: "#4CC9F0",
                items: [
                  { name: "Jira / Jira Service Mgmt", note: "Agile boards, sprint planning, backlog management, service desk queues" },
                  { name: "Monday.com", note: "Cross-team project tracking, workflow automation, timeline views" },
                  { name: "Slack", note: "Async team communication, incident response channels, bot integrations" },
                  { name: "Confluence / Notion", note: "Documentation, runbooks, ADRs, knowledge base management" },
                  { name: "GitHub / GitHub Actions", note: "Version control, CI/CD workflows, branch strategies, code review" },
                ],
              },
              {
                category: "ITSM & Support",
                color: "#F72585",
                items: [
                  { name: "ServiceNow", note: "Incident, Change, Problem Management — enterprise ITSM at scale" },
                  { name: "Zendesk", note: "Customer support operations, SLA management, ticket routing" },
                  { name: "Freshdesk", note: "Support automation, escalation flows, CSAT tracking" },
                ],
              },
              {
                category: "CRM & Sales",
                color: "#7209B7",
                items: [
                  { name: "Salesforce", note: "Pipeline management, custom objects, flows, and reporting" },
                  { name: "HubSpot", note: "Inbound automation, lead scoring, deal tracking" },
                  { name: "Dynamics 365", note: "CRM + ERP integration in enterprise environments" },
                ],
              },
              {
                category: "Cloud & Infrastructure",
                color: "#4CC9F0",
                items: [
                  { name: "AWS", note: "EC2, S3, Lambda, RDS, ECS, IAM — cloud-native workloads" },
                  { name: "Azure", note: "AKS, DevOps pipelines, App Service, Azure SQL" },
                  { name: "GCP", note: "BigQuery, Cloud Run, Pub/Sub for data and API workloads" },
                  { name: "Docker / Kubernetes", note: "Containerization, Helm charts, cluster management" },
                  { name: "On-Premise / Hybrid", note: "Legacy infrastructure, DC migrations, hybrid cloud bridge strategies" },
                ],
              },
              {
                category: "Observability & Monitoring",
                color: "#F72585",
                items: [
                  { name: "Datadog", note: "APM, dashboards, log management, alerting pipelines" },
                  { name: "Grafana / Prometheus", note: "Metrics visualization, SLO/SLA monitoring, custom alerting" },
                  { name: "Splunk / SIEM", note: "Log aggregation, correlation rules, security event monitoring" },
                ],
              },
              {
                category: "Analytics & Product Intelligence",
                color: "#7209B7",
                items: [
                  { name: "Google Analytics", note: "Web traffic analysis, funnel tracking, conversion optimization" },
                  { name: "Microsoft Clarity", note: "Session recordings, heatmaps, UX friction detection" },
                  { name: "Amplitude", note: "Product analytics, retention cohorts, feature impact measurement" },
                  { name: "Adobe Analytics", note: "Enterprise digital analytics, customer journey mapping" },
                  { name: "Databricks", note: "ETL orchestration, Delta Lake, large-scale data migration" },
                  { name: "Tableau", note: "BI dashboards, ad-hoc analysis, self-service reporting" },
                  { name: "Power BI", note: "Executive dashboards, KPI tracking, data storytelling" },
                ],
              },
              {
                category: "DevSecOps & CI/CD",
                color: "#4CC9F0",
                items: [
                  { name: "Jenkins / GitLab CI", note: "Build pipelines, automated test suites, release gates" },
                  { name: "Terraform", note: "Infrastructure as code for multi-cloud environments" },
                  { name: "Veracode", note: "SAST/DAST security scanning integrated into CI pipelines" },
                  { name: "Checkmarx", note: "Static code analysis, vulnerability detection in enterprise codebases" },
                ],
              },
              {
                category: "Finance & ERP",
                color: "#F72585",
                items: [
                  { name: "SAP", note: "FI/CO modules, procurement integration, financial reporting" },
                  { name: "Oracle ERP", note: "GL, AP/AR, asset management in banking environments" },
                  { name: "TOTVS Protheus", note: "ERP for Brazilian mid-market — fiscal compliance, payroll" },
                  { name: "Billing Systems", note: "Subscription billing, invoice reconciliation, chargeback automation" },
                  { name: "Tableau (Finance)", note: "Revenue dashboards, budget vs. actuals, financial KPIs for CFO audiences" },
                ],
              },
            ].map((group) => (
              <div key={group.category}>
                <h3
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {group.items.map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-xl bg-[#1B263B] border border-[#415A77] px-4 py-3 hover:border-[#4CC9F0]/50 transition-colors"
                    >
                      <p className="text-white font-semibold text-sm mb-1">{tool.name}</p>
                      <p className="text-[#E0E1DD]/45 text-xs leading-relaxed">{tool.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          LOOM
      ══════════════════════════════════════════════ */}
      <section
        id="loom"
        className="scroll-mt-20 bg-[#1B263B]/30"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="See me on Loom" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-3"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Watch the imSquad framework in action
          </h2>
          <p className="text-center text-[#E0E1DD]/45 text-sm mb-10">
            Sessions covering imDev · imQA · imPO — coming soon.
          </p>

          {/* Under Construction overlay */}
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "340px" }}>
            {/* Ghost grid — blurred placeholder */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 filter blur-sm opacity-30 pointer-events-none select-none"
              aria-hidden="true"
            >
              {["Who I&#39;m", "imSquad Walkthrough", "imDev in Practice", "imQA Strategy", "imPO Backlog Live"].map((title) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 rounded-2xl bg-[#0D1B2A] border border-[#415A77] overflow-hidden"
                >
                  <div className="w-full bg-[#415A77]/30" style={{ paddingBottom: "56.25%" }} />
                  <div className="px-5 pb-5">
                    <div className="h-4 w-2/3 rounded bg-[#415A77]/40 mb-2" />
                    <div className="h-3 w-full rounded bg-[#415A77]/30" />
                  </div>
                </div>
              ))}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-[#0D1B2A]/80 backdrop-blur-sm">
              <span className="text-5xl mb-4">🎬</span>
              <p
                className="text-white font-extrabold text-2xl mb-2 text-center"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Under Construction
              </p>
              <p className="text-[#E0E1DD]/55 text-sm text-center max-w-xs">
                Loom sessions for imSquad — imDev, imQA &amp; imPO — are being recorded.<br />
                Check back soon.
              </p>
            </div>
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
