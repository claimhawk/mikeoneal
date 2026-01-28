import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-portrait-studio.png"
            alt="Michael ONeal"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 md:pb-28">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.85]">
            MICHAEL<br />ONEAL
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-zinc-200 font-light max-w-2xl leading-relaxed">
            The world has changed. Digital labor is here to stay, and nothing will ever be the same.
          </p>
        </div>
      </section>

      {/* 2. CONTRARIAN & ENGINEER */}
      <section className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Contrarian & Engineer</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
            When others build software, I build software that builds software
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-4xl">
            I always seem to think in higher levels of abstraction than those around me. I can see around 
            corners and straight to solutions, usually skipping multiple steps along the way. Working from 
            first principles, I presume to assume less than might be considered normal. I never cared much 
            about being normal.
          </p>
        </div>
      </section>

      {/* 3. MACHINE LEARNING */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-mag11-rooftop.png"
            alt="Machine Learning"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Machine Learning</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              Machine Learning has dominated my thinking for about 10 years now
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Global approximation functions have kept me up more nights than I can accurately describe to you. 
              The idea is so powerful that it is both troubling and exciting in equal doses. I have built and 
              trained language, vision, speech, sound effect, and action models to do everything from play 
              video games to automating whole teams of human labor with digital labor.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMMING JOURNEY */}
      <section className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">The Journey</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
            From C to LISP and from LISP to Python, Ruby, and of course, TypeScript
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-4xl">
            I remember working on terminals that only output green or white on black screens. The first real 
            app I wrote was Pong — as a 10 year old. I survived the Dotcom boom and bust, I survived the 
            housing market crash, financial giants melting down, and I just watched 90% of my expertise and 
            utility melt away by a general approximation function that multiplies my 10x skills by a factor of 10.
          </p>
        </div>
      </section>

      {/* 5. SYSTEMS BUILDING */}
      <section className="relative min-h-[80vh] flex items-center">
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
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Systems</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              I don&apos;t write code, I build systems that build themselves
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              I have multiple agents running simultaneously on multiple projects at multiple scopes. My job 
              is the taste-maker, the mad genius, the guy that knows how to codify how to build software at 
              incredible speeds. I am what products like Base 44 claim but cannot deliver. I am the Machine 
              whisperer and the weaver of digital labor dreams. I take noise and shape it into shippable products.
            </p>
          </div>
        </div>
      </section>

      {/* 6. WORK WITH ME */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/mikeoneal-portrait-office-v2.png"
            alt="Consulting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Work With Me</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              I can work on your most vexing problems, or I can train your team
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              No two companies have the same needs. You could say I work on a &quot;spectrum&quot;. I can solve the 
              problems for you — or I can train your human labor how to implement much of what I know to 
              supercharge their efforts and outputs. Technical, Non-technical, Labor, Service, C-Suite — 
              Being able to unleash digital minds to supplement and enhance biologics is a win, win, win situation.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4 text-center">Let&apos;s Talk</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9] text-center">
            Want to get specific? Let&apos;s have a conversation about your goals.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            I can show you in real time, how I work. I will extract and abstract while you sit on my couch 
            and tell me all your business based problems. I&apos;ll be drawing on my whiteboard, and kicking off 
            multiple digital agents to start laying groundwork, doing research, and doing the operational 
            work in the background while I engage with the problem space in the foreground.
          </p>
          <p className="text-xl text-zinc-200 text-center mb-10">
            By the end of our conversation we will be ready to take the first steps to the new world together.
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
          <p className="text-sm text-zinc-600 uppercase tracking-wider">© {new Date().getFullYear()} Michael ONeal</p>
          <div className="flex gap-6">
            <a href="mailto:mike@mikeoneal.com" className="text-sm text-zinc-500 hover:text-white transition-colors">Email</a>
            <a href="https://github.com/mikeoneal" className="text-sm text-zinc-500 hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/mikeoneal" className="text-sm text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
