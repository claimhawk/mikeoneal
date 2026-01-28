import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* SECTION 1: ABOUT - portrait-studio.png */}
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
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">About</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.85]">
            MIKE<br />ONEAL
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 font-light mb-4 max-w-xl">
            AI Augmented Software Engineer
          </p>
          <p className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-wrap gap-3">
            {["X.com", "YouTube", "PayPal", "Intel", "Twitter", "Apple", "Microsoft", "Amazon"].map((company) => (
              <span key={company} className="px-4 py-2 text-sm text-zinc-400 border border-zinc-700">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: THE STACK - mag11-rooftop.png */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-mag11-rooftop.png"
            alt="The Stack"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">The Stack</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
              THE<br />OPERATION
            </h2>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
            <div className="space-y-4">
              {["The Fleet", "The Models", "The Foundation", "The Workflow"].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-white" />
                  <span className="text-xl text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: METHODOLOGY - portrait-studio-34body.png */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-portrait-studio-34body.png"
            alt="Methodology"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 flex justify-end">
          <div className="max-w-xl text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Methodology</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
              DIFFUSION<br />DEVELOPMENT
            </h2>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
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

      {/* SECTION 4: THESIS - portrait-office-v2.png */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-portrait-office-v2.png"
            alt="Thesis"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Thesis</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
              THE<br />ABUNDANCE<br />CASCADE
            </h2>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all">
              Read the Thesis
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6">
            LET&apos;S TALK
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all">
              Contact
            </a>
            <a href="#" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-black transition-all">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
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
