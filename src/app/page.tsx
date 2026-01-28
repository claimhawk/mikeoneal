import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* 1. HERO - Unconventional and riding the bleeding edge */}
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-portrait-studio.png"
            alt="Mike ONeal"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 md:pb-28">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Unconventional</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.85]">
            MIKE<br />ONEAL
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 font-light mb-4 max-w-xl">
            Riding the bleeding edge since the late &apos;90s
          </p>
          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            High school dropout. Intel before 18. BBS systems to autonomous agents. 
            I don&apos;t follow the zeitgeist — I&apos;m ahead of it.
          </p>
        </div>
      </section>

      {/* 2. 10x Developer Becomes 100x */}
      <section className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">The Multiplier</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
                10x BECOMES<br />100x
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                I was a 10x developer before AI. Now I&apos;m 100x. What used to take months now takes days. 
                That&apos;s not hyperbole — that&apos;s the new reality.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                The skill that matters now: taste, direction, and evaluation. Knowing what to build, 
                guiding AI toward correct solutions, and recognizing when it&apos;s right.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-8 bg-zinc-900/50 rounded-lg">
                <p className="text-5xl md:text-6xl font-black text-white mb-2">30+</p>
                <p className="text-sm uppercase tracking-wider text-zinc-500">Years</p>
              </div>
              <div className="p-8 bg-zinc-900/50 rounded-lg">
                <p className="text-5xl md:text-6xl font-black text-white mb-2">100x</p>
                <p className="text-sm uppercase tracking-wider text-zinc-500">Multiplier</p>
              </div>
              <div className="p-8 bg-zinc-900/50 rounded-lg">
                <p className="text-5xl md:text-6xl font-black text-white mb-2">∞</p>
                <p className="text-sm uppercase tracking-wider text-zinc-500">Scale</p>
              </div>
              <div className="p-8 bg-zinc-900/50 rounded-lg">
                <p className="text-5xl md:text-6xl font-black text-white mb-2">0</p>
                <p className="text-sm uppercase tracking-wider text-zinc-500">Limits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Autonomous Development - Digital Labor */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-mag11-rooftop.png"
            alt="Digital Labor"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Digital Labor</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
              AUTONOMOUS<br />DEVELOPMENT
            </h2>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Multiple coordinated agents working in concert. A fleet of machines — Windows, Mac, Linux — 
              all running agentic software. This isn&apos;t a dev environment. It&apos;s an operation.
            </p>
            <div className="space-y-3">
              {["Claude Pro Max × Multiple", "Anthropic Opus 4.5", "Qwen Vision Models", "Clawdbot Orchestration"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white" />
                  <span className="text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contrarian, Career Contractor, Mercenary */}
      <section className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">The Operator</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              CONTRARIAN.<br />CONTRACTOR.<br />MERCENARY.
            </h2>
            <p className="text-xl text-zinc-300 mb-6 leading-relaxed">
              I work too fast for normal teams. No one can keep up with me. It makes the normal humans angry. 
              The C-level types fucking love me.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-8">
              Contract mercenary for X.com, YouTube, PayPal, Intel, Twitter, Apple, Microsoft, Amazon — 
              and a hundred companies you haven&apos;t heard of. I own patents. I run LLCs. I sit on boards. 
              I will never be made a manager.
            </p>
            <div className="flex flex-wrap gap-3">
              {["X.com", "YouTube", "PayPal", "Intel", "Twitter", "Apple", "Microsoft", "Amazon"].map((company) => (
                <span key={company} className="px-4 py-2 text-sm text-zinc-400 border border-zinc-800 hover:border-zinc-600 transition-colors">{company}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. First Principles & Diffusion Development */}
      <section className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Methodology</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                FIRST<br />PRINCIPLES
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                I don&apos;t reinvent wheels. I decompose problems, find the prior art — papers, projects, 
                academic and business trial-and-error — then synthesize and build on that foundation.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                Adopt early, verify fast. By the time something becomes &quot;best practice,&quot; 
                I&apos;ve already moved on to what&apos;s next.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Process</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                DIFFUSION<br />DEVELOPMENT
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                Start with noise — rough structure of the entire system. Progressively refine everything 
                concurrently until the final form emerges. Like diffusion models generate images, but for software.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                No &quot;finish module A, then start B.&quot; Everything exists in rough form from the start. 
                Each pass increases fidelity across the entire system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tylt - Digital Labor */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-portrait-studio-34body.png"
            alt="Tylt"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/70 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 flex justify-end">
          <div className="max-w-xl text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Company</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
              TYLT
            </h2>
            <p className="text-2xl text-zinc-300 mb-6">Digital Labor</p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Building the infrastructure for autonomous work. Software that builds software. 
              Digital employees that scale infinitely. The first stage of the abundance cascade.
            </p>
            <a href="#" className="inline-flex items-center text-white font-bold uppercase tracking-wider hover:text-zinc-400 transition-colors">
              Learn More
              <svg className="ml-3 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 6. ClaimHawk - Automated Dental RCM */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-portrait-office-v2.png"
            alt="ClaimHawk"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Flagship Project</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
              CLAIM<br />HAWK
            </h2>
            <p className="text-2xl text-zinc-300 mb-6">Automated Dental RCM</p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Autonomous agents that replicate human dental billers. Computer vision, LLMs, 
              privacy-preserving synthetic data. One agent, infinite scalability, zero PHI exposure.
              This is what happens when you give a 100x developer the tools to build digital employees.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Qwen3-VL", "LoRA", "Computer Vision", "Python", "Next.js"].map((tech) => (
                <span key={tech} className="px-4 py-2 text-sm text-zinc-400 border border-zinc-800">{tech}</span>
              ))}
            </div>
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all">
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* 7. Set Up a Meeting */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Contact</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6">
            LET&apos;S TALK
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            For C-level types who want results. I&apos;m always looking for high-level tasks 
            to aim at like a guided, hypersonic missile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/mikeoneal" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all">
              Schedule a Meeting
            </a>
            <a href="mailto:mike@mikeoneal.com" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-black transition-all">
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-600 uppercase tracking-wider">© {new Date().getFullYear()} Mike ONeal</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Email</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
