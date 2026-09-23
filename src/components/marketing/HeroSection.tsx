import Link from "next/link";
import { Play, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 border-b-2 border-ink bg-[#f4f1ee] overflow-hidden">
      
      {/* Retro Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#1E1A1D 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8 relative z-10">
        
        {/* Left Content - Brutalist Typography */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full relative">
          
          {/* Funky Retro Sticker */}
          <div className="absolute -top-12 -left-4 md:-left-12 rotate-[-12deg] bg-accent text-white px-4 py-2 font-mono text-[12px] font-bold uppercase tracking-widest border-2 border-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] z-20 animate-pulse-twice">
            <Sparkles className="inline-block w-4 h-4 mr-1 mb-0.5" /> 
            PRIVATE BETA
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-canvas border-2 border-ink text-ink text-[12px] font-bold tracking-widest uppercase mb-8 shadow-[4px_4px_0px_0px_rgba(30,26,29,1)]">
            The Operating Desk For Creators
          </div>
          
          <h1 className="font-editorial text-[64px] sm:text-[80px] lg:text-[100px] leading-[0.95] tracking-tight text-ink mb-6 relative">
            <span className="relative z-10 bg-canvas px-2 border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)]">Brand deals in.</span>
            <br />
            <span className="relative z-10 bg-accent text-white px-2 mt-2 inline-block border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] rotate-[2deg]">Chaos out.</span>
          </h1>
          
          <p className="text-[16px] md:text-[20px] text-ink font-medium leading-relaxed max-w-xl mb-10 mt-6 bg-canvas/80 p-4 border-2 border-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] backdrop-blur-sm">
            Brantra keeps every brief, deliverable, revision, deadline and payment in one focused workspaceâ€”built for creators managing it all themselves.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mt-4">
            <Link
              href="#early-access"
              className="w-full sm:w-auto flex h-14 items-center justify-center bg-accent px-8 text-[16px] font-bold text-white border-2 border-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(30,26,29,1)] transition-all focus-visible outline-none"
            >
              Join early access
            </Link>
            <Link
              href="#video-tour"
              className="w-full sm:w-auto flex h-14 items-center justify-center gap-2 bg-surface px-8 text-[16px] font-bold text-ink border-2 border-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(30,26,29,1)] transition-all focus-visible outline-none group"
            >
              <Play className="h-4 w-4 fill-ink group-hover:scale-110 transition-transform" />
              Watch Tour
            </Link>
          </div>
        </div>

        {/* Right Visual Composition - Retro OS Fragments */}
        <div className="flex-1 w-full relative h-[450px] md:h-[550px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          
          <div className="relative w-full max-w-[500px] h-full">
            
            {/* Fragment 1: Incoming DM (Retro Window) */}
            <div className="absolute top-0 left-0 md:left-4 bg-canvas border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] w-[260px] z-10 animate-float-slow">
              <div className="border-b-2 border-ink bg-surface-secondary px-3 py-1.5 flex justify-between items-center">
                <div className="text-[11px] font-bold font-mono tracking-wider">MESSAGE.EXE</div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 border-2 border-ink bg-canvas"></div>
                  <div className="w-3 h-3 border-2 border-ink bg-canvas"></div>
                  <div className="w-3 h-3 border-2 border-ink bg-accent"></div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 border-2 border-ink flex items-center justify-center text-[12px]">ðŸ“¸</div>
                  <div>
                    <div className="text-[13px] font-bold font-mono">Aster Skin</div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-text-secondary">Inquiry</div>
                  </div>
                </div>
                <div className="text-[12px] font-medium leading-relaxed bg-surface-secondary p-3 border-2 border-ink">
                  &quot;Hey! We love your content and want to sponsor a dedicated reel...&quot;
                </div>
              </div>
            </div>

            {/* Fragment 2: Captured Deal Terms (Retro Window) */}
            <div className="absolute top-[160px] right-0 md:-right-8 bg-canvas border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] w-[260px] z-20 animate-float-medium">
              <div className="border-b-2 border-ink bg-accent px-3 py-1.5 flex justify-between items-center text-white">
                <div className="text-[11px] font-bold font-mono tracking-wider">DEAL_TERMS.DAT</div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 border-2 border-white bg-transparent"></div>
                  <div className="w-3 h-3 border-2 border-white bg-white"></div>
                </div>
              </div>
              <div className="p-4 bg-surface [background-image:radial-gradient(rgba(30,26,29,0.1)_1px,transparent_1px)] [background-size:12px_12px]">
                <div className="text-[14px] font-bold mb-3 font-mono border-b-2 border-ink pb-2">Deliverables</div>
                <div className="flex justify-between items-center text-[12px] py-1.5 font-medium">
                  <span>1x Instagram Reel</span>
                  <span>$3,500</span>
                </div>
                <div className="flex justify-between items-center text-[12px] py-1.5 font-medium">
                  <span>Usage (3mo)</span>
                  <span>$1,000</span>
                </div>
                <div className="flex justify-between items-center text-[14px] pt-3 mt-1 border-t-2 border-ink font-bold font-mono">
                  <span>TOTAL</span>
                  <span>$4,500</span>
                </div>
              </div>
            </div>

            {/* Fragment 3: Invoice Paid (Retro Notification) */}
            <div className="absolute bottom-8 left-8 md:left-12 bg-green-400 border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] p-4 w-[240px] z-30 -rotate-[4deg] animate-float-fast">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-canvas border-2 border-ink flex items-center justify-center text-[20px] shadow-[2px_2px_0px_0px_rgba(30,26,29,1)]">ðŸ’°</div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-ink/70">Invoice #1042</div>
                  <div className="text-[18px] font-bold text-ink font-mono mt-0.5">PAID IN FULL</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Marquee Banner at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 bg-ink text-white py-3 overflow-hidden border-t-2 border-ink z-20 flex">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center font-mono text-[13px] uppercase tracking-widest font-bold min-w-max">
          {/* First set */}
          <span>NO MORE SPREADSHEETS</span>
          <span className="text-accent">âœ¦</span>
          <span>NO MORE LOST EMAILS</span>
          <span className="text-accent">âœ¦</span>
          <span>GET PAID ON TIME</span>
          <span className="text-accent">âœ¦</span>
          <span>OWN YOUR OPERATIONS</span>
          <span className="text-accent">âœ¦</span>
          <span>NO MORE SPREADSHEETS</span>
          <span className="text-accent">âœ¦</span>
          <span>NO MORE LOST EMAILS</span>
          <span className="text-accent">âœ¦</span>
          <span>GET PAID ON TIME</span>
          <span className="text-accent">âœ¦</span>
          <span>OWN YOUR OPERATIONS</span>
          <span className="text-accent">âœ¦</span>
          {/* Second identical set for seamless loop */}
          <span>NO MORE SPREADSHEETS</span>
          <span className="text-accent">âœ¦</span>
          <span>NO MORE LOST EMAILS</span>
          <span className="text-accent">âœ¦</span>
          <span>GET PAID ON TIME</span>
          <span className="text-accent">âœ¦</span>
          <span>OWN YOUR OPERATIONS</span>
          <span className="text-accent">âœ¦</span>
          <span>NO MORE SPREADSHEETS</span>
          <span className="text-accent">âœ¦</span>
          <span>NO MORE LOST EMAILS</span>
          <span className="text-accent">âœ¦</span>
          <span>GET PAID ON TIME</span>
          <span className="text-accent">âœ¦</span>
          <span>OWN YOUR OPERATIONS</span>
          <span className="text-accent">âœ¦</span>
        </div>
      </div>
    </section>
  );
}

