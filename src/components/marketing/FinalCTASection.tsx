export function FinalCTASection() {
  // Pre-configured email intent for early access
  const mailtoLink = "mailto:hello@brantra.app?subject=Brantra%20Early%20Access%20Request&body=Hi%20Brantra%20team,%0A%0AI'm%20a%20creator%20interested%20in%20joining%20the%20early%20access%20program.%0A%0AMy%20main%20platform/handle:%20%0A%0AThanks!";

  return (
    <section id="early-access" className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-accent relative overflow-hidden">
      
      {/* Background Retro Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#1E1A1D 2px, transparent 2px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        
        <h2 className="font-editorial text-[64px] md:text-[100px] leading-[0.9] tracking-tight text-ink mb-10 relative">
          <span className="bg-canvas border-2 border-ink shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] px-4 py-2 inline-block -rotate-2">
            Create the content.
          </span>
          <br />
          <span className="bg-ink text-white border-2 border-white shadow-[8px_8px_0px_0px_rgba(30,26,29,1)] px-4 py-2 mt-4 inline-block rotate-1">
            We keep it moving.
          </span>
        </h2>
        
        <p className="text-[20px] md:text-[24px] text-ink font-bold leading-relaxed max-w-2xl mb-12 bg-white border-2 border-ink p-4 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
          Bring briefs, deliverables, approvals and payments into one focused creator workspace.
        </p>
        
        <a 
          href={mailtoLink}
          className="inline-flex h-20 items-center justify-center bg-canvas px-12 text-[20px] md:text-[24px] font-bold font-mono text-ink border-4 border-ink shadow-[8px_8px_0px_0px_rgba(30,26,29,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] transition-all focus-visible outline-none uppercase tracking-widest"
        >
          Request early access
        </a>
        
        <div className="mt-8 bg-ink text-white px-4 py-2 font-mono text-[12px] font-bold uppercase tracking-widest border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
          Currently in private beta. We&apos;ll reply within 24 hours.
        </div>

      </div>
    </section>
  );
}
