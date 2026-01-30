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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.85]">
            I DON&apos;T JUST<br />WRITE CODE.<br />I ARCHITECT THE SYSTEMS<br />THAT WRITE IT FOR YOU.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-zinc-200 font-light max-w-3xl leading-relaxed">
            The era of manual coding is ending. I build the agents, the tools, and the recursive workflows that allow one developer to do the work of a department.
          </p>
        </div>
      </section>

      {/* 2. CONTRARIAN & ENGINEER */}
      <AnimatedSection id="philosophy" className="min-h-screen flex items-center border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">The Ultimate Force Multiplier</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
            Most engineers build your MVP. I build the engine that generates your MVP, your v2, and your internal tooling — simultaneously.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-4xl">
            <p>
              I have moved beyond traditional development. By leveraging agentic workflows and LLM-driven architectures, I don&apos;t just solve the ticket in front of me; I build the automation that solves that <em>class</em> of tickets forever.
            </p>
            <ul className="space-y-3 pl-6">
              <li><strong className="text-white">Speed:</strong> Prototyping measured in hours, not sprints.</li>
              <li><strong className="text-white">Scale:</strong> Autonomous agents handling dev-ops, QA, and boilerplate generation.</li>
              <li><strong className="text-white">Future-Proof:</strong> Systems built to evolve as AI models improve.</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. DEEP STACK AUTHORITY */}
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
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">From Bare Metal to Neural Networks</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              Four decades. Assembly to AI. Every layer of the stack.
            </h2>
            <div className="space-y-4 text-lg text-zinc-300 leading-relaxed">
              <p>
                I grew up when you had to understand the metal — memory management, pointers, assembly. I watched every layer of abstraction get built: systems programming, desktop, mobile, web, DevOps, cloud, and now machine learning. I know what&apos;s underneath all of them.
              </p>
              <p>
                <strong className="text-white">This is why my agents outperform:</strong> You cannot effectively automate what you do not deeply understand. Most developers use AI to write code. I use it to architect autonomous systems that eliminate entire classes of work — because I understand the machine from silicon to neural networks.
              </p>
            </div>
          </div>
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
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">The Architect of Automation</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              I orchestrate swarms of autonomous agents across your entire engineering stack
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Multiple agents running simultaneously across multiple projects at multiple scopes.
              An architect who codifies software development at speeds your competitors can&apos;t
              match. A machine whisperer who takes noise and shapes it into shippable products. This is how you 100x your engineering output.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA / BOOKING */}
      <section id="contact" className="min-h-screen py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Deploy the System</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              Let&apos;s Build the Future, Faster
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              The software landscape has changed. You can hire a room full of typists, or you can hire an Architect of Automation. Book a consultation — we&apos;ll discuss your goals, and I&apos;ll unleash my agents on your problem space. You get a plan and initial code artifacts by the end of the call.
            </p>
          </div>

          <BookingFlow />
        </div>
      </section>

      {/* 7. WORK WITH ME */}
      <section id="work" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-professional-headshot.jpg"
            alt="Consulting"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Two Ways to Augment Your Reality</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              Deploy me as an architect — or as the catalyst that transforms your team
            </h2>
            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">1. The Architect (Deployment)</h3>
                <p className="text-zinc-400 mb-2"><em>For Early Stage Founders & MVPs</em></p>
                <p>
                  I enter your ecosystem and act as a one-man army. I set up the &quot;God-mode&quot; tools, the agentic swarms, and the CI/CD pipelines. I build the product <em>and</em> the factory that builds the product.
                </p>
                <p className="text-white mt-2"><strong>Result:</strong> Massive velocity. You get a mature product stack with a fraction of the headcount.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">2. The Catalyst (Enablement)</h3>
                <p className="text-zinc-400 mb-2"><em>For Engineering Leaders & Scale-ups</em></p>
                <p>
                  I integrate with your existing team not just to contribute, but to upgrade their DNA. I teach your senior engineers my process: how to move from &quot;writing code&quot; to &quot;orchestrating code.&quot; I implement the tools that allow your current team to replicate my productivity.
                </p>
                <p className="text-white mt-2"><strong>Result:</strong> A permanently upskilled team and a culture of exponential output.</p>
              </div>
            </div>
          </div>
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
