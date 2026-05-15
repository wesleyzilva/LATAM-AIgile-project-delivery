import Link from "next/link";

const stats = [
  { icon: "👍", value: "10+", label: "Years Experience" },
  { icon: "🏔", value: "80M+", label: "Daily Transactions" },
  { icon: "🤝", value: "50+", label: "Happy Clients" },
  { icon: "⚙", value: "20+", label: "Projects Delivered" },
];

const services = [
  {
    icon: "🚀",
    title: "Agile Delivery Management",
    desc: "End-to-end agile programme delivery: sprint planning, backlog grooming, risk management, and stakeholder reporting.",
  },
  {
    icon: "🔒",
    title: "DevSecOps",
    desc: "Security-first CI/CD pipelines, automated compliance checks, and vulnerability scanning integrated into every release.",
  },
  {
    icon: "📊",
    title: "Data Engineering at Scale",
    desc: "Real-time data pipelines, observability frameworks, and analytics platforms processing millions of events per day.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Workflows",
    desc: "Custom AI assistants, automated code review, intelligent test generation, and LLM-driven documentation pipelines.",
  },
];

const projects = [
  {
    client: "Serasa Experian",
    role: "Agile Delivery Manager",
    desc: "Led cross-functional squads delivering credit-score APIs processing 80M+ daily financial transactions with 99.99% SLA.",
    tags: ["Agile", "FinTech", "APIs"],
  },
  {
    client: "Amdocs",
    role: "Senior Project Manager",
    desc: "Managed nearshore delivery for telecom BSS/OSS modernisation across LATAM, reducing time-to-market by 35%.",
    tags: ["Telecom", "Nearshore", "BSS/OSS"],
  },
  {
    client: "Global FinTech",
    role: "DevSecOps Lead",
    desc: "Implemented zero-trust CI/CD pipelines and observability stacks for payment platforms serving 30+ countries.",
    tags: ["DevSecOps", "Payments", "Observability"],
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HOME */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A2540] text-white px-6 py-24 gap-12 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-[-12deg] translate-x-16 pointer-events-none"
        />

        <div className="relative flex flex-col items-center gap-6 text-center max-w-xl z-10">
          <div
            className="w-28 h-28 rounded-full bg-[#FF6B00]/20 border-4 border-[#FF6B00] flex items-center justify-center text-3xl font-extrabold text-white select-none shadow-xl"
            aria-label="Wesley Zilva profile photo"
          >
            WZ
          </div>

          <p className="text-sm font-semibold tracking-widest text-[#FF6B00] uppercase">
            LATAM Agile Delivery — Remote &amp; Nearshore
          </p>

          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Wesley Zilva
            </h1>
            <p className="mt-2 text-xl font-semibold text-blue-300">
              Agile Delivery Manager · AI-Driven Teams
            </p>
          </div>

          <blockquote className="text-base sm:text-lg leading-relaxed text-white/80 italic border-l-4 border-[#FF6B00] pl-4 text-left">
            &ldquo;Building collaborative remote workspaces for digital products
            — with frameworks like{" "}
            <strong className="text-white not-italic">imSquad</strong> — to
            maximise team productivity without sacrificing quality, security, or
            business focus.&rdquo;
          </blockquote>

          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link
              href="/contact"
              className="inline-block bg-[#FF6B00] hover:bg-orange-500 transition-colors text-white font-bold text-base px-8 py-3 rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Let&apos;s Connect!
            </Link>
            <a
              href="#portfolio"
              className="inline-block border-2 border-white/40 hover:border-white transition-colors text-white font-bold text-base px-8 py-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              View Portfolio
            </a>
          </div>
        </div>

        <div className="w-full max-w-xl border-t border-white/20 z-10" />

        <div
          id="about"
          className="relative max-w-xl text-center flex flex-col gap-4 scroll-mt-20 z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-white">ABOUT </span>
            <span className="text-[#FF6B00]">US</span>
          </h2>
          <div className="mx-auto w-12 border-b-2 border-[#FF6B00]" />
          <p className="text-base sm:text-lg leading-relaxed text-white/80">
            We are a team of experienced agile practitioners, product engineers,
            and innovators who build{" "}
            <strong className="text-white">collaborative remote workspaces</strong>{" "}
            for digital products across LATAM and beyond.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-white/80">
            Guided by an{" "}
            <strong className="text-white">AI-first mindset</strong> and the{" "}
            <strong className="text-white">imSquad</strong> framework, we
            maximise team productivity while preserving quality, security, and a
            sharp focus on business outcomes — enabling distributed teams to
            deliver more, faster, without compromise.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="min-h-screen bg-slate-50 text-gray-900 px-6 py-20"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold inline-block border-b-4 border-[#FF6B00] pb-2">
              Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Everything you need to build, scale, and secure world-class digital
              products with distributed teams.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 w-full">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl">{icon}</span>
                <h3 className="text-xl font-bold text-[#0A2540]">{title}</h3>
                <div className="w-8 border-b-2 border-[#FF6B00]" />
                <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-white text-gray-900 px-6 py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
          <div className="bg-white rounded-2xl shadow-md p-8 w-full flex flex-col gap-4">
            <h2 className="text-4xl font-bold border-b-4 border-[#FF6B00] pb-2 w-fit">
              Portfolio
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A successful project is when it meets the client&apos;s objectives
              and fits the needs of the end user. We spend significant time
              researching end-user insights to creatively incorporate project
              goals — making sure what was delivered is truly the best.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-block bg-[#FF6B00] hover:bg-orange-500 transition-colors text-white font-bold text-sm px-6 py-2.5 rounded-full shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
              >
                DETAILS
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {projects.map(({ client, role, desc, tags }) => (
              <div
                key={client}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-[#0A2540]">{client}</h3>
                <p className="text-[#FF6B00] text-sm font-semibold">{role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-[#0A2540] text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full rounded-2xl bg-[#0A2540] overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 divide-y sm:divide-y-0">
              {stats.map(({ icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 py-10 px-4 text-white"
                >
                  <span className="text-4xl text-[#FF6B00]">{icon}</span>
                  <span className="text-3xl font-extrabold">{value}</span>
                  <span className="text-sm text-white/70 text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section
        id="blog"
        className="min-h-[60vh] bg-slate-50 text-gray-900 px-6 py-20 flex flex-col items-center justify-center"
      >
        <div className="max-w-2xl text-center flex flex-col gap-4">
          <h2 className="text-4xl font-bold inline-block border-b-4 border-[#FF6B00] pb-2">
            Blog
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Insights on Agile delivery, AI-driven workflows, DevSecOps, and
            nearshore team leadership. Coming soon.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#0A2540] text-white px-6 pt-16 pb-8">
        <div className="max-w-4xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-10 border-b border-white/10">
          <div className="flex flex-col gap-3 lg:col-span-2">
            <span className="text-2xl font-extrabold tracking-tight">
              LATAM<span className="text-[#FF6B00]">.</span>Agile
            </span>
            <p className="text-white/70 text-sm leading-relaxed">
              Wesley Zilva infuses each project with enthusiasm and dedication.
              We deliver flawless products and strive for continuous improvement
              to ensure ongoing client satisfaction.
            </p>
            <div className="text-sm text-white/70 space-y-1 mt-2">
              <p>
                <strong className="text-white">Email: </strong>
                <a
                  href="mailto:wesley.zilva@gmail.com"
                  className="hover:text-[#FF6B00] transition-colors"
                >
                  wesley.zilva@gmail.com
                </a>
              </p>
            </div>
            <div className="text-sm text-white/70">
              <strong className="text-white">Working hours:</strong>
              <p>8:30 – 12:00 &amp; 14:00 – 18:00</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[#FF6B00] font-semibold text-base mb-1">Services</h3>
            {[
              "Agile Delivery",
              "DevSecOps",
              "Data Engineering",
              "AI Workflows",
            ].map((s) => (
              <a
                key={s}
                href="#services"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                {s}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[#FF6B00] font-semibold text-base mb-1">Social</h3>
            <a
              href="https://linkedin.com/in/wesleyzilva"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/wesleyzilva"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              GitHub
            </a>
            <div className="mt-4">
              <h3 className="text-[#FF6B00] font-semibold text-base mb-2">Contact</h3>
              <p className="text-white/70 text-sm">São Carlos, SP — Brazil</p>
              <Link
                href="/contact"
                className="mt-3 inline-block bg-[#FF6B00] hover:bg-orange-500 transition-colors text-white font-bold text-sm px-5 py-2 rounded-full"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-white/40 text-xs mt-8">
          © 2026 LATAM Agile Delivery — Wesley Zilva. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
