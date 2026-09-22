export function PainInsightsSection() {
  const insights = [
    {
      title: "Chasing Feedback",
      description: "Constantly toggling between email threads, DM platforms, and comments to piece together what a brand actually wants changed in draft 2.",
    },
    {
      title: "Scope Creep",
      description: "Delivering the requested 30s video, only to be casually asked for three native cut-downs without a discussion about additional compensation.",
    },
    {
      title: "Invoice Anxiety",
      description: "Relying on manual calendar reminders to check if net-30 invoices were paid, and feeling awkward sending the third follow-up email.",
    }
  ];

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-canvas border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="bg-ink text-white font-mono text-[12px] font-bold tracking-widest uppercase border-2 border-ink px-4 py-1.5 shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] inline-block mb-8 rotate-1">
            CREATOR INSIGHTS
          </div>
          <h2 className="font-editorial text-[40px] md:text-[56px] leading-[1.05] tracking-tight text-ink mb-6">
            The manual work is <br/> burning you out.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {insights.map((insight, i) => (
            <div key={i} className={`flex flex-col text-left bg-white border-2 border-ink p-6 shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] hover:-translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_0px_rgba(30,26,29,1)] transition-all cursor-default ${i === 1 ? 'md:translate-y-8' : ''}`}>
              <div className="w-14 h-14 bg-accent border-2 border-ink flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] rotate-[-4deg]">
                <span className="text-[18px] font-bold font-mono text-white">0{i + 1}</span>
              </div>
              <h3 className="text-[20px] font-bold text-ink mb-3 font-editorial border-b-2 border-ink pb-2">{insight.title}</h3>
              <p className="text-[14px] leading-relaxed font-medium text-ink mt-2">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
