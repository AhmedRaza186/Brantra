import { Sparkles } from "lucide-react";

export function TrustStrip() {
  const formats = [
    "UGC",
    "REELS",
    "TIKTOKS",
    "STORIES",
    "PRODUCT PHOTOGRAPHY",
    "PAID SOCIAL",
  ];

  return (
    <section className="border-b-2 border-ink bg-accent py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#1E1A1D 2px, transparent 2px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        <div className="bg-canvas border-2 border-ink p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] mb-10 max-w-3xl transform rotate-1">
          <h2 className="text-[18px] md:text-[24px] font-bold text-ink leading-snug font-editorial">
            Built for creators whose brand work has outgrown DMs, notes and spreadsheets.
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {formats.map((format, index) => (
            <div 
              key={index}
              className={`px-5 py-2.5 bg-canvas border-2 border-ink text-[13px] md:text-[15px] font-bold font-mono text-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] flex items-center gap-2 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(30,26,29,1)] transition-all cursor-default ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}
            >
              <Sparkles className="w-4 h-4 text-accent" />
              {format}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
