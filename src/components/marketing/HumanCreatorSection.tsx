export function HumanCreatorSection() {
  return (
    <section id="why-brantra" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b-2 border-ink bg-canvas">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
        
        <div className="flex-1 w-full flex justify-center lg:justify-start relative z-10">
          {/* Brutalist Framed Portrait Placeholder */}
          <div className="relative w-full max-w-[400px] aspect-[4/5] bg-surface-secondary border-4 border-ink shadow-[12px_12px_0px_0px_rgba(30,26,29,1)] rotate-[-2deg]">
            <div className="absolute top-0 left-0 right-0 h-8 border-b-4 border-ink bg-accent flex items-center justify-between px-3">
               <span className="text-[10px] font-mono font-bold text-white tracking-widest uppercase">CREATOR_IMG.JPG</span>
               <div className="w-4 h-4 bg-white border-2 border-ink"></div>
            </div>
            <div className="w-full h-full pt-8 flex items-center justify-center [background-image:radial-gradient(rgba(30,26,29,0.12)_1px,transparent_1px)] [background-size:12px_12px]">
              <div className="text-center p-8 bg-white border-2 border-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] -rotate-3">
                <div className="text-[12px] font-bold font-mono tracking-widest uppercase text-ink mb-2">
                  Creator Portrait
                </div>
                <div className="text-[48px] opacity-20">👤</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-xl text-center lg:text-left relative z-10">
          <h2 className="font-editorial text-[48px] md:text-[64px] leading-[1.0] tracking-tight text-ink mb-8 relative">
            <span className="bg-canvas border-2 border-ink shadow-[4px_4px_0px_0px_rgba(210,50,80,1)] px-2 inline-block">Built for the creator</span><br />
            <span className="bg-accent text-white border-2 border-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] px-2 inline-block rotate-1 mt-2">who is also the manager.</span>
          </h2>
          <div className="bg-white border-2 border-ink p-6 shadow-[6px_6px_0px_0px_rgba(30,26,29,1)]">
            <p className="text-[16px] md:text-[18px] text-ink font-medium leading-relaxed mb-6">
              Agencies use heavy enterprise software. Traditional creators use messy spreadsheets and scattered DMs. 
            </p>
            <p className="text-[16px] md:text-[18px] text-ink font-medium leading-relaxed">
              You fall somewhere in the middle—running a highly professional solo business that needs structure, but without the enterprise overhead. Brantra is your operating desk.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
