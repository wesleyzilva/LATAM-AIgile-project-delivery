const otherSections = [
  {
    id: "services",
    title: "Services",
    bg: "bg-slate-50",
    text: "text-gray-900",
    description:
      "Agile delivery management, DevSecOps, data engineering at scale, observability, and AI-powered engineering workflows.",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    bg: "bg-white",
    text: "text-gray-900",
    description:
      "Mission-critical systems built for Serasa Experian, Amdocs, and global fintech companies processing 80M+ daily financial transactions.",
  },
  {
    id: "blog",
    title: "Blog",
    bg: "bg-slate-50",
    text: "text-gray-900",
    description:
      "Insights on Agile delivery, AI-driven workflows, DevSecOps, and nearshore team leadership.",
  },
  {
    id: "contact",
    title: "Contact",
    bg: "bg-[#0A2540]",
    text: "text-white",
    description:
      "Get in touch: wesley.zilva@gmail.com · linkedin.com/in/wesleyzilva · São Carlos, SP – Brazil",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── HOME SECTION ── */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-[#0A2540] text-white px-8 py-24 gap-10"
      >
        {/* Hero card */}
        <div className="flex flex-col items-center gap-5 text-center max-w-xl">
          {/* Avatar placeholder */}
          <div
            className="w-28 h-28 rounded-full bg-white/10 border-4 border-white/30 flex items-center justify-center text-4xl font-extrabold text-white select-none"
            aria-label="Wesley Zilva profile photo"
          >
            WZ
          </div>

          {/* Name & title */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Wesley Zilva
            </h1>
            <p className="mt-1 text-lg sm:text-xl font-semibold text-blue-300">
              Agile Delivery Project
            </p>
          </div>

          {/* Quote */}
          <blockquote className="text-base sm:text-lg leading-relaxed text-white/80 italic border-l-4 border-blue-400 pl-4 text-left">
            &ldquo;Produzindo ambientes de trabalho remotos colaborativos para
            produtos digitais com frameworks como imSquad desenvolvido para
            aumentar a produtividade sem reduzir a qualidade e segurança e
            com foco no problema de negócio.&rdquo;
          </blockquote>

          {/* CTA */}
          <a
            href="#contact"
            className="mt-2 inline-block bg-blue-500 hover:bg-blue-400 transition-colors text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Let&apos;s Connect!
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xl border-t border-white/20" />

        {/* About blurb — visible on the same mobile viewport */}
        <div id="about" className="max-w-xl text-center flex flex-col gap-4 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">About</h2>
          <p className="text-base sm:text-lg leading-relaxed text-white/80">
            We are a team of experienced agile practitioners, product engineers,
            and innovators who build <strong className="text-white">collaborative remote workspaces</strong> for
            digital products.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-white/80">
            Guided by an <strong className="text-white">AI-first mindset</strong> and frameworks like{" "}
            <strong className="text-white">imSquad</strong>, we maximise team productivity while preserving
            quality, security, and a sharp focus on business outcomes — enabling
            distributed teams to deliver more, faster, without compromise.
          </p>
        </div>
      </section>

      {/* ── OTHER SECTIONS ── */}
      {otherSections.map(({ id, title, bg, text, description }) => (
        <section
          key={id}
          id={id}
          className={`min-h-screen flex flex-col items-center justify-center px-8 py-20 ${bg} ${text}`}
        >
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="max-w-2xl text-center text-lg leading-relaxed">
            {description}
          </p>
        </section>
      ))}
    </main>
  );
}
