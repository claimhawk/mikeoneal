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

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero - Full bleed magazine cover style */}
      <section className="relative min-h-screen flex items-end">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-portrait-studio-34body.png"
            alt="Mike ONeal"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Dramatic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 md:pb-24">
          <div className="max-w-2xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-zinc-400 mb-4 font-medium">
              AI Augmented Software Engineer
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.85]">
              MIKE<br />ONEAL
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-zinc-200 font-light mb-8 leading-relaxed max-w-xl">
              I don&apos;t hold titles or put time in.
              <span className="text-white font-medium"> I get shit done.</span>
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all"
              >
                Let&apos;s Talk
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-black transition-all"
              >
                View Work
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-zinc-500 [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </section>

      {/* Track Record - Magazine pull quote style */}
      <section className="py-16 md:py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {TRACK_RECORD.map((company, i) => (
              <span key={company} className="flex items-center gap-8">
                <span className="text-lg md:text-xl font-light text-zinc-400 hover:text-white transition-colors">
                  {company}
                </span>
                {i < TRACK_RECORD.length - 1 && (
                  <span className="hidden md:block text-zinc-700">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About - Editorial split layout */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="/images/mikeoneal-portrait-rooftop.png"
                alt="Mike ONeal"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">The Story</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-8 leading-[0.95]">
                THE 100x<br />DEVELOPER
              </h2>
              <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                <p>
                  I work too fast for normal teams. C-levels love it. Everyone else gets confused.
                  I don&apos;t fit into sprints because by the time you&apos;ve had your standup, 
                  I&apos;ve shipped the feature.
                </p>
                <p>
                  Three decades of experience from BBS systems to autonomous AI agents. 
                  C → Lisp → TypeScript. Assembly to cloud infrastructure. 
                  Patents, LLCs, board seats.
                </p>
              </div>
              <a
                href="/about"
                className="inline-flex items-center mt-8 text-white font-bold uppercase tracking-wider hover:text-zinc-400 transition-colors group"
              >
                Read Full Story
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities - Bold typography */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-8">Capabilities</p>
          <div className="space-y-4">
            {[
              "Agentic Development",
              "Machine Learning",
              "Systems Architecture",
              "DevOps & Security",
              "Full Stack Engineering",
            ].map((capability) => (
              <div
                key={capability}
                className="group flex items-center justify-between py-6 border-b border-zinc-800 hover:border-zinc-600 transition-colors cursor-default"
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-zinc-600 group-hover:text-white transition-colors">
                  {capability}
                </span>
                <svg className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - Magazine feature spread */}
      <section id="work" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0">
            {/* Image side */}
            <div className="relative aspect-square lg:aspect-auto lg:min-h-[600px]">
              <Image
                src="/images/mikeoneal-portrait-office-v2.png"
                alt="ClaimHawk"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:hidden" />
            </div>
            
            {/* Content side */}
            <div className="lg:bg-zinc-950 lg:p-12 xl:p-16 flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Featured Project</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-4 leading-[0.9]">
                CLAIM<br />HAWK
              </h2>
              <p className="text-xl text-zinc-400 mb-6">
                Autonomous Dental Revenue Cycle Management
              </p>
              <p className="text-zinc-500 mb-8 leading-relaxed max-w-lg">
                End-to-end automation of dental insurance claims. Computer vision for EOB parsing, 
                intelligent routing, automated follow-ups. What takes a billing department days 
                now happens in minutes.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Qwen3-VL", "LoRA", "Python", "Modal", "Next.js", "Computer Vision"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium text-zinc-400 border border-zinc-800 hover:border-zinc-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="/projects/claimhawk"
                className="inline-flex items-center justify-center w-fit px-8 py-4 text-base font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Operation - Magazine grid */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">The Stack</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[0.95]">
              THE OPERATION
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
            {[
              {
                title: "The Fleet",
                description: "Home lab with Windows/Mac/Linux machines, networked agentic software, multiple Claude Pro Max licenses",
              },
              {
                title: "The Models",
                description: "Opus 4.5, Claude Code, Qwen models, Gemini, Perplexity — the right tool for each job",
              },
              {
                title: "The Foundation",
                description: "Unix mastery, networking, tunneling, virtualization. Three decades of infrastructure",
              },
              {
                title: "The Workflow",
                description: "Discord + agents, Kanban + GitHub. 60% code, 40% docs. Everything tracked",
              },
              {
                title: "The Edge",
                description: "Context engineering before it had a name. Solutions before the experts publish them",
              },
              {
                title: "The Method",
                description: "Decompose → Prior art → Synthesize → Adopt early, verify fast",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-black p-8 md:p-10 group hover:bg-zinc-900 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full bleed image break */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image
          src="/images/mikeoneal-portrait-office-fullbody.png"
          alt="Mike ONeal"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </section>

      {/* Contact Section - Bold CTA */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Contact</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
              LET&apos;S<br />TALK
            </h2>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-xl">
              For C-level types who want results. I&apos;m always looking for high-level tasks 
              to aim at like a guided, hypersonic missile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:mike@mikeoneal.com"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/mikeoneal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-black transition-all"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mikeoneal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-black transition-all"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm uppercase tracking-wider">
            © {new Date().getFullYear()} Mike ONeal
          </p>
          <p className="text-zinc-700 text-sm">
            Built with autonomous AI agents
          </p>
        </div>
      </footer>
    </div>
  );
}
