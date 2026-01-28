import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero - studio 3/4 body */}
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-portrait-studio-34body.png"
            alt="Mike ONeal"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 md:pb-24">
          <div className="max-w-2xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-zinc-400 mb-4 font-medium">
              Issue 01 • The Future of Engineering
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.85]">
              MIKE<br />ONEAL
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-zinc-200 font-light mb-8 leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              <span className="text-white font-medium"> Sed do eiusmod tempor.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all">
                Contact
              </a>
              <a href="#work" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-black transition-all">
                Explore
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-zinc-500 [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-12 md:py-16 border-y border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-center text-zinc-300 italic">
            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.&rdquo;
          </p>
        </div>
      </section>

      {/* Editorial Intro */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">The Profile</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[0.95]">
                BUILDING<br />THE FUTURE
              </h2>
            </div>
            <div className="lg:col-span-8 lg:pl-12 border-l border-zinc-800">
              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
              <p className="text-lg text-zinc-500 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Bleed 1 - mag11 rooftop */}
      <section className="relative h-[60vh] md:h-[80vh]">
        <Image src="/images/mikeoneal-mag11-rooftop.png" alt="Editorial" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      </section>

      {/* Two Column Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">Chapter One</p>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">THE EARLY YEARS</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-zinc-500 leading-relaxed">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">Chapter Two</p>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">THE TURNING POINT</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">Excepteur sint occaecat cupidatat non proident.</p>
              <p className="text-zinc-500 leading-relaxed">Consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Spread 1 - portrait studio */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative aspect-[4/5]">
              <Image src="/images/mikeoneal-portrait-studio.png" alt="Editorial" fill className="object-cover" />
            </div>
            <div className="bg-black p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Featured</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
                THE<br />METHODOLOGY
              </h2>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur.</p>
              <a href="#" className="inline-flex items-center text-white font-bold uppercase tracking-wider hover:text-zinc-400 transition-colors group">
                Read More
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "30+", label: "Years Experience" },
              { number: "100x", label: "Developer Multiplier" },
              { number: "50+", label: "Projects Shipped" },
              { number: "∞", label: "Possibilities" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2">{stat.number}</p>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Bleed 2 - mag7 nightwork */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image src="/images/mikeoneal-mag7-nightwork.png" alt="Night Work" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </section>

      {/* Capabilities */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-8">Expertise</p>
          <div className="space-y-0">
            {["Agentic Development", "Machine Learning", "Systems Architecture", "DevOps & Security", "Full Stack Engineering", "Cloud Infrastructure"].map((cap, i) => (
              <div key={cap} className="group flex items-center justify-between py-6 border-b border-zinc-800 hover:border-zinc-600 transition-colors">
                <div className="flex items-center gap-6">
                  <span className="text-sm text-zinc-600 font-mono">0{i + 1}</span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-zinc-500 group-hover:text-white transition-colors">{cap}</span>
                </div>
                <svg className="w-6 h-6 text-zinc-700 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid - 6 UNIQUE images */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-8">Gallery</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-square">
              <Image src="/images/mikeoneal-mag1-office.png" alt="Gallery" fill className="object-cover" />
            </div>
            <div className="relative aspect-square">
              <Image src="/images/mikeoneal-mag2-desk.png" alt="Gallery" fill className="object-cover" />
            </div>
            <div className="relative aspect-square">
              <Image src="/images/mikeoneal-mag3-server.png" alt="Gallery" fill className="object-cover" />
            </div>
            <div className="relative aspect-square md:col-span-2">
              <Image src="/images/mikeoneal-mag5-wired.png" alt="Gallery" fill className="object-cover" />
            </div>
            <div className="relative aspect-square">
              <Image src="/images/mikeoneal-mag6-forbes.png" alt="Gallery" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Spread 2 - office v2 */}
      <section id="work" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0">
            <div className="lg:pr-12 lg:border-r lg:border-zinc-800 flex flex-col justify-center order-2 lg:order-1">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Case Study</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-4 leading-[0.9]">
                CLAIM<br />HAWK
              </h2>
              <p className="text-xl text-zinc-400 mb-6">Lorem ipsum dolor sit amet</p>
              <p className="text-zinc-500 mb-8 leading-relaxed">Consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Python", "ML", "Vision", "Cloud", "Next.js", "API"].map((tech) => (
                  <span key={tech} className="px-4 py-2 text-sm font-medium text-zinc-400 border border-zinc-700">{tech}</span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center justify-center w-fit px-8 py-4 text-base font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all">
                View Project
              </a>
            </div>
            <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[600px] order-1 lg:order-2">
              <Image src="/images/mikeoneal-portrait-office-v2.png" alt="Project" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote - Inverted */}
      <section className="py-24 md:py-32 bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.&rdquo;
          </p>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">— Industry Publication</p>
        </div>
      </section>

      {/* Full Bleed 3 - mag8 keynote */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image src="/images/mikeoneal-mag8-keynote.png" alt="Keynote" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </section>

      {/* The Operation Grid */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Infrastructure</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[0.95]">THE OPERATION</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
            {[
              { title: "The Fleet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
              { title: "The Models", description: "Ut enim ad minim veniam, quis nostrud exercitation." },
              { title: "The Foundation", description: "Duis aute irure dolor in reprehenderit in voluptate." },
              { title: "The Workflow", description: "Excepteur sint occaecat cupidatat non proident." },
              { title: "The Edge", description: "Sed ut perspiciatis unde omnis iste natus error." },
              { title: "The Method", description: "Nemo enim ipsam voluptatem quia voluptas sit." },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-950 p-8 md:p-10 group hover:bg-zinc-900 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Bleed 4 - mag9 homelab */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image src="/images/mikeoneal-mag9-homelab.png" alt="Homelab" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </section>

      {/* Second Gallery - more unique images */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[3/4]">
              <Image src="/images/mikeoneal-mag10-bw.png" alt="Gallery" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4]">
              <Image src="/images/mikeoneal-mag12-casual.png" alt="Gallery" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact - closeup intense */}
      <section id="contact" className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Contact</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
                LET&apos;S<br />TALK
              </h2>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all">Email</a>
                <a href="#" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-black transition-all">LinkedIn</a>
                <a href="#" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-black transition-all">GitHub</a>
              </div>
            </div>
            <div className="relative aspect-square hidden lg:block">
              <Image src="/images/mikeoneal-closeup-intense.png" alt="Contact" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Full Bleed Final - mag4 closeup */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image src="/images/mikeoneal-mag4-closeup.png" alt="Final" fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-2xl font-black tracking-tight text-white mb-2">MIKE ONEAL</p>
              <p className="text-sm text-zinc-600 uppercase tracking-wider">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm uppercase tracking-wider text-zinc-500 hover:text-white transition-colors">Email</a>
              <a href="#" className="text-sm uppercase tracking-wider text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-sm uppercase tracking-wider text-zinc-500 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-sm uppercase tracking-wider text-zinc-500 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
