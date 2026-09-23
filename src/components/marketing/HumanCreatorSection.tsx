export function HumanCreatorSection() {
  return (
    <section id="why-brantra" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-ink bg-canvas">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
        <h2 className="font-editorial text-[48px] md:text-[64px] leading-[1.0] tracking-tight text-ink mb-8 relative">
          <span className="bg-canvas border-2 border-ink shadow-[4px_4px_0px_0px_rgba(210,50,80,1)] px-2 inline-block">Built for the creator</span><br />
          <span className="bg-accent text-white border-2 border-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] px-2 inline-block rotate-1 mt-2">who is also the manager.</span>
        </h2>
        <div className="bg-white border-2 border-ink p-8 shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] text-left">
          <p className="text-[16px] md:text-[18px] text-ink font-medium leading-relaxed mb-6">
            Agencies use heavy enterprise software. Traditional creators use messy spreadsheets and scattered DMs. 
          </p>
          <p className="text-[16px] md:text-[18px] text-ink font-medium leading-relaxed">
            You fall somewhere in the middle—running a highly professional solo business that needs structure, but without the enterprise overhead. Brantra is your operating desk.
          </p>
        </div>
      </div>
    </section>
  );
}
