import { CheckCircle2, Clock, FileEdit, FileText } from "lucide-react";

interface FeatureStoryProps {
  eyebrow: string;
  headline: string;
  description: string;
  outcome: string;
  visualType: "deal-card" | "attention-queue" | "revision-history" | "payment-tracker";
  align: "left" | "right";
}

export function FeatureStory({
  eyebrow,
  headline,
  description,
  outcome,
  visualType,
  align,
}: FeatureStoryProps) {
  const isRightAligned = align === "right";
  // Alternating backgrounds based on alignment for a checkerboard feel
  const bgColor = isRightAligned ? 'bg-canvas' : 'bg-surface-secondary';

  return (
    <section className={`py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b-2 border-ink ${bgColor} overflow-hidden`}>
      <div className={`max-w-7xl mx-auto flex flex-col ${isRightAligned ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
        
        {/* Text Content */}
        <div className="flex-1 max-w-xl">
          <div className="inline-block bg-accent text-white font-mono text-[12px] font-bold tracking-widest uppercase border-2 border-ink px-3 py-1 shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] mb-6 -rotate-1">
            {eyebrow}
          </div>
          <h2 className="font-editorial text-[48px] md:text-[64px] leading-[0.95] tracking-tight text-ink mb-6">
            {headline}
          </h2>
          <p className="text-[18px] md:text-[20px] text-ink font-medium leading-relaxed mb-8 bg-white border-2 border-ink p-4 shadow-[4px_4px_0px_0px_rgba(30,26,29,1)]">
            {description}
          </p>
          <div className="flex items-center gap-2 text-[14px] font-bold font-mono text-ink bg-canvas w-max px-4 py-2 border-2 border-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] rotate-1">
            <CheckCircle2 className="h-5 w-5 text-accent" />
            {outcome}
          </div>
        </div>

        {/* Visual Fragment Area */}
        <div className="flex-1 w-full relative flex justify-center">
          <div className="relative w-full max-w-[500px] h-[350px] md:h-[450px] bg-white border-2 border-ink p-6 flex flex-col items-center justify-center shadow-[12px_12px_0px_0px_rgba(30,26,29,1)] overflow-hidden">
            
            {/* Retro Grid inside the box */}
            <div 
              className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#1E1A1D 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
            ></div>

            {/* Visual variants based on type */}
            {visualType === "deal-card" && (
              <div className="w-full max-w-sm bg-canvas border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] p-0 relative z-10 hover:scale-105 transition-transform duration-500 rotate-[-2deg]">
                <div className="bg-ink text-white px-4 py-2 border-b-2 border-ink flex justify-between items-center">
                  <div className="text-[12px] font-bold font-mono tracking-wider">DEAL_CARD.EXE</div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 border-2 border-white bg-transparent"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-[18px] font-bold text-ink font-editorial">Lumière Skincare</h3>
                      <p className="text-[12px] text-ink font-medium uppercase tracking-wider font-mono">Dedicated YouTube</p>
                    </div>
                    <div className="text-[11px] font-bold font-mono bg-waiting border-2 border-ink text-ink px-2 py-1 shadow-[2px_2px_0px_0px_rgba(30,26,29,1)]">
                      REVIEWING SCOPE
                    </div>
                  </div>
                  <div className="space-y-3 font-mono font-medium text-[13px]">
                    <div className="flex justify-between border-b-2 border-ink pb-2">
                      <span className="text-ink">DELIVERABLE</span>
                      <span className="font-bold">60s Integration</span>
                    </div>
                    <div className="flex justify-between border-b-2 border-ink pb-2">
                      <span className="text-ink">RATE</span>
                      <span className="font-bold">$4,200</span>
                    </div>
                    <div className="flex justify-between border-b-2 border-ink pb-2">
                      <span className="text-ink">USAGE</span>
                      <span className="font-bold">6 months digital</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {visualType === "attention-queue" && (
              <div className="w-full max-w-sm flex flex-col gap-4 relative z-10 hover:scale-105 transition-transform duration-500">
                <div className="bg-canvas shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] p-0 border-2 border-ink flex flex-col rotate-[2deg]">
                  <div className="bg-urgent border-b-2 border-ink px-3 py-1 text-[11px] font-bold font-mono text-ink tracking-widest uppercase">
                    URGENT ACTION REQUIRED
                  </div>
                  <div className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-canvas border-2 border-ink flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(30,26,29,1)]">
                      <Clock className="w-5 h-5 text-ink" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-ink uppercase font-mono">Script Due Today</div>
                      <div className="text-[12px] text-ink font-medium">Oasis Beverages Campaign</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-canvas shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] p-0 border-2 border-ink flex flex-col rotate-[-1deg] opacity-90">
                  <div className="bg-waiting border-b-2 border-ink px-3 py-1 text-[11px] font-bold font-mono text-ink tracking-widest uppercase">
                    WAITING ON YOU
                  </div>
                  <div className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-canvas border-2 border-ink flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(30,26,29,1)]">
                      <FileEdit className="w-5 h-5 text-ink" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-ink uppercase font-mono">Review Brand Feedback</div>
                      <div className="text-[12px] text-ink font-medium">Aura Audio - Draft 1</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {visualType === "revision-history" && (
              <div className="w-full max-w-sm bg-canvas border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] p-6 relative z-10 hover:scale-105 transition-transform duration-500 rotate-[1deg]">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-ink pb-3">
                  <div className="w-8 h-8 bg-ink text-white flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h3 className="text-[16px] font-bold font-mono text-ink uppercase tracking-wider">Revision Tracker</h3>
                </div>
                <div className="space-y-6 relative before:absolute before:inset-y-2 before:left-[7px] before:w-0.5 before:bg-ink">
                  <div className="relative pl-8">
                    <div className="absolute left-[2px] top-1 w-3 h-3 bg-accent border-2 border-ink shadow-[1px_1px_0px_0px_rgba(30,26,29,1)]"></div>
                    <div className="text-[13px] font-bold font-mono text-ink uppercase">V2 Requested</div>
                    <div className="text-[12px] text-ink font-medium mt-1 bg-white p-2 border-2 border-ink">&quot;Can we add the promo code on screen?&quot;</div>
                  </div>
                  <div className="relative pl-8 opacity-70">
                    <div className="absolute left-[2px] top-1 w-3 h-3 bg-canvas border-2 border-ink"></div>
                    <div className="text-[13px] font-bold font-mono text-ink uppercase">V1 Draft Sent</div>
                    <div className="text-[12px] text-ink font-medium mt-1">Sent via frame.io link</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t-2 border-ink text-[12px] font-bold font-mono text-accent text-center uppercase tracking-widest bg-ink/5 p-2 border-dashed">
                  1 of 2 Revisions Used
                </div>
              </div>
            )}

            {visualType === "payment-tracker" && (
              <div className="w-full max-w-sm bg-canvas border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] p-0 relative z-10 hover:scale-105 transition-transform duration-500 overflow-hidden rotate-[-2deg]">
                <div className="bg-ink text-white px-5 py-4 border-b-2 border-ink">
                  <div className="text-[12px] font-bold font-mono uppercase tracking-widest mb-1 text-accent">Outstanding Revenue</div>
                  <div className="text-[40px] font-editorial leading-none">$8,450<span className="text-[20px]">.00</span></div>
                </div>
                <div className="p-0">
                  <div className="flex justify-between items-center p-4 border-b-2 border-ink bg-urgent/20">
                    <div>
                      <div className="text-[14px] font-bold text-ink font-mono uppercase">Vela Tech</div>
                      <div className="text-[11px] text-ink font-bold bg-urgent px-1 border-2 border-ink mt-1 inline-block">12 DAYS OVERDUE</div>
                    </div>
                    <div className="text-[16px] font-bold font-mono text-ink">$3,200</div>
                  </div>
                  <div className="flex justify-between items-center p-4">
                    <div>
                      <div className="text-[14px] font-bold text-ink font-mono uppercase">Nova Studios</div>
                      <div className="text-[11px] text-ink font-medium uppercase tracking-widest mt-1">DUE IN 5 DAYS</div>
                    </div>
                    <div className="text-[16px] font-bold font-mono text-ink">$5,250</div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
