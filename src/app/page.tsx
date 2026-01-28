import Image from "next/image";

const TRACK_RECORD = [
  "X.com",
  "YouTube", 
  "PayPal",
  "Intel",
  "Twitter",
  "Apple",
  "Microsoft",
  "Amazon",
];

const CAPABILITIES = [
  "Agentic Development",
  "Machine Learning",
  "DevOps",
  "Security",
  "Systems Architecture",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-black" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
                Mike ONeal
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-medium mb-6">
                AI Augmented Software Engineer
              </p>
              <p className="text-2xl md:text-3xl text-zinc-200 font-medium mb-8 leading-relaxed">
                I don&apos;t hold titles or put time in.
                <br />
                <span className="text-white">I get shit done.</span>
              </p>
              <p className="text-lg text-zinc-400 mb-10 max-w-xl">
                Design, plan, engineer, test, deploy, audit — Systems, Mobile, Web, Desktop, Cloud. 
                What used to take months now takes days.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
                >
                  Let&apos;s Talk
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-zinc-700 rounded-full hover:bg-zinc-900 transition-colors"
                >
                  See What I&apos;ve Built
                </a>
              </div>

              {/* Track record */}
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider mb-4">
                  Track Record
                </p>
                <div className="flex flex-wrap gap-3">
                  {TRACK_RECORD.map((company) => (
                    <span
                      key={company}
                      className="px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-900 rounded-full border border-zinc-800"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Portrait */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                <Image
                  src="/images/mikeoneal-portrait-office.png"
                  alt="Mike ONeal"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                {/* Subtle glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-zinc-800/20 to-zinc-700/20 rounded-3xl blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The 100x Developer
              </h2>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                I work too fast for normal teams. C-levels love it. Everyone else gets confused.
                I don&apos;t fit into sprints because by the time you&apos;ve had your standup, 
                I&apos;ve shipped the feature.
              </p>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Three decades of experience from BBS systems to autonomous AI agents. 
                C → Lisp → TypeScript. Assembly to cloud infrastructure. 
                Patents, LLCs, board seats. The full stack of a career.
              </p>
              <a
                href="/about"
                className="inline-flex items-center text-white font-medium hover:text-zinc-300 transition-colors"
              >
                Read more about my background
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-wider mb-4">
                Capabilities
              </p>
              <div className="space-y-4">
                {CAPABILITIES.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800"
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-lg text-zinc-200">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            Current project: building autonomous systems that handle what used to require entire teams.
          </p>

          {/* ClaimHawk Card */}
          <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  ClaimHawk
                </h3>
                <p className="text-lg text-zinc-400">
                  Autonomous Dental Revenue Cycle Management
                </p>
              </div>
              <a
                href="/projects/claimhawk"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-zinc-700 rounded-full hover:bg-zinc-800 transition-colors whitespace-nowrap"
              >
                View Project
              </a>
            </div>
            
            <p className="text-zinc-300 mb-8 leading-relaxed max-w-3xl">
              End-to-end automation of dental insurance claims processing. Computer vision for EOB parsing, 
              intelligent claim routing, automated follow-ups. What takes a billing department days 
              now happens in minutes.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Qwen3-VL", "LoRA", "Python", "Modal", "Next.js", "PostgreSQL", "Computer Vision"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm text-zinc-400 bg-zinc-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Stack Section */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Operation
          </h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            Not a tech stack — an operation. A fleet of machines and AI agents working in concert.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The Fleet",
                description: "Home lab with Windows/Mac/Linux machines, networked agentic software, multiple Claude Pro Max licenses",
              },
              {
                title: "The Models",
                description: "Opus 4.5, Claude Code, Qwen models, Gemini, Perplexity, OpenAI — the right tool for each job",
              },
              {
                title: "The Foundation",
                description: "Unix mastery, networking, tunneling, virtualization. Three decades of infrastructure experience",
              },
              {
                title: "The Workflow",
                description: "Discord + agents, Kanban + GitHub issues. 60% code, 40% docs. Everything tracked, nothing lost",
              },
              {
                title: "The Edge",
                description: "Context engineering before it had a name. Solutions before the 'experts' publish them",
              },
              {
                title: "The Method",
                description: "Decompose → Find prior art → Synthesize → Adopt early, verify fast",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-zinc-900/30 rounded-xl border border-zinc-800"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Talk
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              For C-level types who want results. I&apos;m always looking for high-level tasks 
              to aim at like a guided, hypersonic missile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:mike@mikeoneal.com"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/mikeoneal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-zinc-700 rounded-full hover:bg-zinc-900 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mikeoneal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-zinc-700 rounded-full hover:bg-zinc-900 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Mike ONeal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
