import { ShieldCheck } from "lucide-react";

export function UsageRightsSection() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-accent text-center border-b-2 border-ink relative overflow-hidden">
      
      {/* Background Dots */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.1]" 
        style={{ backgroundImage: 'radial-gradient(#FFFFFF 2px, transparent 2px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        <div className="w-20 h-20 bg-ink flex items-center justify-center mb-8 border-2 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] rotate-3">
          <ShieldCheck className="h-10 w-10 text-white" />
        </div>
        
        <h2 className="font-editorial text-[48px] md:text-[64px] leading-[1.05] tracking-tight text-white mb-6">
          Never give away rights <br className="hidden md:block"/> by accident.
        </h2>
        
        <p className="text-[18px] md:text-[22px] text-white font-medium leading-relaxed max-w-3xl mb-16">
          Usage rights are where independent creators lose the most revenue. Brantra strictly separates deliverables from usage terms, ensuring you know exactly when a brand&apos;s license expires—and when it&apos;s time to negotiate a renewal.
        </p>
        
        <div className="bg-canvas shadow-[8px_8px_0px_0px_rgba(30,26,29,1)] p-0 border-2 border-ink max-w-md w-full mx-auto relative overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
          <div className="bg-ink text-white font-mono text-[12px] font-bold px-4 py-2 text-left uppercase tracking-widest border-b-2 border-ink">
            LICENSING ALERT
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <div className="text-[16px] font-bold text-ink">Paid Social Usage</div>
              <div className="text-[11px] font-bold text-ink bg-urgent border-2 border-ink px-2 py-1 shadow-[2px_2px_0px_0px_rgba(30,26,29,1)] uppercase">
                Expiring in 14 days
              </div>
            </div>
            <div className="flex justify-between items-center text-[14px] text-ink font-medium font-mono border-t-2 border-ink pt-3 mt-2">
              <div>Aster Skin — Q3</div>
              <div className="font-bold">$2,500/mo</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
