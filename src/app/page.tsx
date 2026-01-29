import Image from "next/image";
import { AnimatedSection } from "./components/AnimatedSection";
import { Header } from "./components/Header";
import { BookingFlow } from "./components/BookingFlow";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* 1. HERO */}
      <section id="hero" className="relative min-h-screen w-screen flex items-end -ml-[calc((100vw-100%)/2)]">
        <div className="absolute inset-0 w-screen">
          <Image
            src="/images/mikeoneal-portrait-studio.png"
            alt="Michael ONeal"
            fill
            className="object-cover object-[center_35%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 md:pb-28">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.85]">
            DEVELOPER<br />WIZARD
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-zinc-200 font-light max-w-2xl leading-relaxed">
            Don&apos;t fall behind your competitors — I will upskill your existing team and supercharge their output.
          </p>
        </div>
      </section>

      {/* 2. CONTRARIAN & ENGINEER */}
      <AnimatedSection id="philosophy" className="min-h-screen flex items-center border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">What You Are Getting</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
            I build software that builds software. It&apos;s a meta thing.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-4xl">
            I think in systems, not features. While others are debugging code, I&apos;m automating the 
            debugging. While others are hiring developers, I&apos;m building digital ones. I don&apos;t just 
            solve problems — I eliminate the conditions that create them.
          </p>
        </div>
      </AnimatedSection>

      {/* 3. MACHINE LEARNING */}
      <section id="ml" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-mag11-rooftop.png"
            alt="Machine Learning"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Machine Learning Depth</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              10 years deep in ML when most are just getting started
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              I&apos;ve built and trained language, vision, speech, and action models — but more importantly, 
              I build the harnesses that turn them into digital labor. Workers that are always on, never 
              sick, and cost a fraction of human headcount. Production systems that actually shipped and 
              replaced entire teams. This isn&apos;t tutorial knowledge — this is a decade of automating 
              work that humans used to do.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMMING JOURNEY */}
      <section id="journey" className="min-h-screen flex items-center border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">True Full Stack</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
            Gen X. The last generation that knows how all of it actually works.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-4xl">
            Systems. Desktop. Mobile. Web. DevOps. Cloud. Machine Learning. I have the whole stack at my 
            fingertips. I grew up when you had to understand the metal — memory management, pointers, 
            assembly. I watched every layer of abstraction get built and I know what&apos;s underneath all 
            of them. From C to LISP to Python to TypeScript. That&apos;s not a resume — that&apos;s 
            four decades of watching this industry reinvent itself while I stayed ahead of every wave.
          </p>
        </div>
      </section>

      {/* 5. SYSTEMS BUILDING */}
      <section id="systems" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-portrait-studio-34body.png"
            alt="Systems"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/70 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 flex justify-end">
          <div className="max-w-2xl text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">100x Output</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              Not a developer who writes code — a system that ships products
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              You get multiple agents running simultaneously across multiple projects at multiple scopes. 
              The taste-maker who knows how to codify software development at speeds your competitors can&apos;t 
              match. What products like Base 44 promise but can&apos;t deliver. A machine whisperer who takes 
              noise and shapes it into shippable products. This is how you 100x your engineering output.
            </p>
          </div>
        </div>
      </section>

      {/* 6. WORK WITH ME */}
      <section id="work" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-portrait-office-v2.png"
            alt="Consulting"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Two Ways to Engage</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              Solve your hardest problems — or train your team to work like this
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              No two companies have the same needs. You can bring in the firepower to solve problems 
              directly — or train your existing team to implement this approach and supercharge their 
              output. Technical, non-technical, C-Suite — unleashing digital minds to supplement and 
              enhance your biologics is a win across the board. The question is how fast you want to move.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CTA / BOOKING */}
      <section id="contact" className="min-h-screen py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Next Step</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              Book Your Consultation
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              90 minutes. $199. All materials, notes, and video included.
            </p>
          </div>
          
          <BookingFlow />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-center items-center">
          <p className="text-sm text-zinc-600 uppercase tracking-wider">© {new Date().getFullYear()} Michael ONeal</p>
        </div>
      </footer>
    </div>
  );
}
