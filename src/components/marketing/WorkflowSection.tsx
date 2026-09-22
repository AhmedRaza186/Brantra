import { WORKFLOW_STEPS } from "@/data/marketing";

export function WorkflowSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b-2 border-ink bg-[#f4f1ee] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center md:text-left mb-20 max-w-2xl">
          <h2 className="font-editorial text-[40px] md:text-[56px] leading-[1.05] tracking-tight text-ink mb-6 relative inline-block">
            <span className="bg-canvas border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] px-3 block">
              One clear path through
            </span>
            <span className="bg-accent text-white border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] px-3 block mt-3 rotate-[-1deg]">
              every collaboration.
            </span>
          </h2>
          <p className="text-[16px] md:text-[20px] text-ink font-medium leading-relaxed bg-canvas border-2 border-ink p-4 shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] mt-8 max-w-xl">
            Stop treating each deal like a chaotic one-off project. Brantra enforces a repeatable operating rhythm.
          </p>
        </div>

        {/* Workflow Steps - Horizontal on Desktop, Stacked/Scrollable on Mobile */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {WORKFLOW_STEPS.map((step, index) => (
            <div 
              key={step.step} 
              className="flex-1 min-w-[260px] md:min-w-0 snap-center relative group"
            >
              {/* Connector Line (hidden on last item, and hidden on mobile) */}
              {index !== WORKFLOW_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-[24px] left-[64px] right-[-16px] h-[4px] bg-ink z-0"></div>
              )}
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="w-14 h-14 bg-canvas border-4 border-ink flex items-center justify-center text-[18px] font-mono font-bold text-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] group-hover:bg-accent group-hover:text-white transition-colors rotate-3 group-hover:-rotate-3">
                  {step.step}
                </div>
                <div className="bg-white border-2 border-ink p-5 shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] h-full">
                  <h3 className="text-[16px] font-mono font-bold text-ink mb-3 uppercase border-b-2 border-ink pb-2">{step.title}</h3>
                  <p className="text-[14px] text-ink font-medium">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
