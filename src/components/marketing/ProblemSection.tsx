import { FileText, Mail, MessageCircle } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-canvas relative border-b-2 border-ink">
      
      {/* Background Dots */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#1E1A1D 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        <h2 className="font-editorial text-[48px] md:text-[80px] leading-[0.95] tracking-tight text-ink max-w-3xl mb-16 relative">
          <span className="bg-canvas border-2 border-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] px-2 inline-block -rotate-1 mb-2">
            Your content is organized.
          </span>
          <br />
          <span className="text-white bg-ink border-2 border-ink shadow-[4px_4px_0px_0px_rgba(210,50,80,1)] px-2 inline-block rotate-1">
            Your brand deals aren&apos;t.
          </span>
        </h2>

        {/* Abstract Visual of scattered work */}
        <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center mt-12">
          
          {/* Thread Connector - Retro line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-ink -translate-y-1/2 z-0 hidden md:block"></div>
          
          <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            
            {/* Element 1: DMs */}
            <div className="bg-canvas p-5 border-2 border-ink flex flex-col items-center w-[220px] md:-translate-y-16 rotate-[-8deg] shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] animate-float-slow hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-ink text-canvas border-2 border-ink rounded-full flex items-center justify-center mb-3 shadow-[2px_2px_0px_0px_rgba(30,26,29,1)]">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="text-[14px] font-bold font-mono text-ink mb-1 uppercase">Scattered DMs</div>
              <div className="text-[12px] text-ink font-medium border-t-2 border-ink pt-2 mt-1 w-full">&quot;Did they approve that script yet?&quot;</div>
            </div>

            {/* Element 2: Spreadsheets */}
            <div className="bg-accent text-white p-5 border-2 border-ink flex flex-col items-center w-[240px] md:translate-y-8 rotate-[4deg] relative z-20 shadow-[8px_8px_0px_0px_rgba(30,26,29,1)] animate-float-medium hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-canvas text-ink border-2 border-ink flex items-center justify-center mb-3 shadow-[2px_2px_0px_0px_rgba(30,26,29,1)]">
                <FileText className="h-6 w-6" />
              </div>
              <div className="text-[16px] font-bold font-mono mb-1 uppercase">Messy Trackers</div>
              <div className="text-[12px] font-bold border-t-2 border-white/50 pt-2 mt-1 w-full font-mono text-center bg-ink p-1">ROW 42: WAITING ON PAYMENT</div>
            </div>

            {/* Element 3: Emails */}
            <div className="bg-canvas p-5 border-2 border-ink flex flex-col items-center w-[220px] md:-translate-y-10 rotate-[10deg] shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] animate-float-fast hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-white text-ink border-2 border-ink flex items-center justify-center mb-3 shadow-[2px_2px_0px_0px_rgba(30,26,29,1)]">
                <Mail className="h-6 w-6" />
              </div>
              <div className="text-[14px] font-bold font-mono text-ink mb-1 uppercase">Lost Emails</div>
              <div className="text-[12px] text-ink font-medium border-t-2 border-ink pt-2 mt-1 w-full">&quot;Can you send the contract again?&quot;</div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
