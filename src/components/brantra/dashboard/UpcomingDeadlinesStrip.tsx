export function UpcomingDeadlinesStrip() {
  const upcoming = [
    { date: 'Oct 12', title: 'Upload Draft', brand: 'Aster Skin', urgent: true },
    { date: 'Oct 14', title: 'Content Deadline', brand: 'North & Pine', urgent: false },
    { date: 'Oct 16', title: 'Payment Expected', brand: 'Morrow Coffee', urgent: false },
    { date: 'Oct 23', title: 'Final Review', brand: 'Noma Active', urgent: false },
  ];

  return (
    <section className="mb-8 animate-reveal stagger-2 xl:hidden">
      <div className="mb-4">
        <h2 className="text-section-heading text-ink">Upcoming Deadlines</h2>
      </div>
      
      <div className="flex flex-row overflow-x-auto gap-3 pb-2 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {upcoming.map((item, idx) => (
          <div key={idx} className={`min-w-[150px] flex-1 flex flex-col p-4 rounded-xl border ${item.urgent ? 'border-accent bg-accent/5' : 'border-border/80 bg-surface'}`}>
            <span className={`text-[12px] font-bold ${item.urgent ? 'text-accent' : 'text-text-secondary'}`}>{item.date}</span>
            <span className="text-[13px] font-semibold text-ink mt-1 truncate">{item.title}</span>
            <span className="text-[11px] text-text-secondary mt-0.5 truncate">{item.brand}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
