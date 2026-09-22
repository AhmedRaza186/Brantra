import Image from "next/image";
import { Play } from "lucide-react";

export function VideoTourSection() {
  return (
    <section id="video-tour" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-ink border-b-2 border-ink relative overflow-hidden">
      
      {/* Background Retro Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#F8F5F2 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="bg-accent text-white font-mono text-[12px] font-bold tracking-widest uppercase border-2 border-white px-4 py-1.5 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rotate-1 mb-6">
            90-Sec Product Walkthrough
          </div>
          <h3 className="font-editorial text-[40px] md:text-[64px] leading-[1] tracking-tight text-white mb-2">
            See how Brantra brings <br className="hidden md:block" /> order to chaos.
          </h3>
        </div>

        {/* Video Player Placeholder Area */}
        <div className="relative w-full aspect-video bg-canvas border-2 border-canvas shadow-[12px_12px_0px_0px_rgba(210,50,80,1)] group">
          
          <div className="absolute top-0 left-0 right-0 h-8 bg-surface-secondary border-b-2 border-ink flex items-center px-4 gap-2 z-20">
            <div className="w-3 h-3 bg-canvas border-2 border-ink rounded-full"></div>
            <div className="w-3 h-3 bg-canvas border-2 border-ink rounded-full"></div>
            <div className="w-3 h-3 bg-canvas border-2 border-ink rounded-full"></div>
            <div className="mx-auto text-[10px] font-mono font-bold text-ink/50 tracking-widest">BRANTRA_DEMO_V1.MP4</div>
          </div>

          <Image
            src="/marketing/brantra-dashboard-tour.webp"
            alt="Brantra Dashboard showing the deal management workspace"
            fill
            className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500 pt-8"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 pt-8 bg-ink/30 flex items-center justify-center z-30">
            {/* Play Button - Non-interactive indicator since video is coming soon */}
            <div 
              className="w-24 h-24 bg-accent flex items-center justify-center border-4 border-ink shadow-[8px_8px_0px_0px_rgba(30,26,29,1)] transition-transform group-hover:scale-105 group-hover:rotate-6 cursor-pointer"
              aria-label="Product tour video is being prepared"
              role="img"
            >
              <Play className="h-10 w-10 text-white ml-2 fill-white" />
            </div>
          </div>
        </div>

        {/* Supporting Workflow labels */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-4 text-[14px] font-bold font-mono">
          <span className="bg-canvas text-ink px-3 py-1 border-2 border-ink shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">CAPTURE</span>
          <span className="text-white">→</span>
          <span className="bg-canvas text-ink px-3 py-1 border-2 border-ink shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">CREATE</span>
          <span className="text-white">→</span>
          <span className="bg-canvas text-ink px-3 py-1 border-2 border-ink shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">APPROVE</span>
          <span className="text-white">→</span>
          <span className="bg-canvas text-ink px-3 py-1 border-2 border-ink shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">PUBLISH</span>
          <span className="text-white">→</span>
          <span className="bg-accent text-white px-3 py-1 border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rotate-2">GET PAID</span>
        </div>

      </div>
    </section>
  );
}
