'use client';
import { useInView } from '@/hooks/useInView';

export function AnalyticsDashboard() {
  const { ref: chartRef, isInView: chartInView } = useInView();
  
  // Mock data for Booked vs Paid (Last 6 Months)
  const monthlyData = [
    { month: 'May', booked: 2100, paid: 1800 },
    { month: 'Jun', booked: 3200, paid: 2100 },
    { month: 'Jul', booked: 2800, paid: 3000 },
    { month: 'Aug', booked: 4500, paid: 2500 },
    { month: 'Sep', booked: 3800, paid: 4000 },
    { month: 'Oct', booked: 5200, paid: 3650 },
  ];

  const maxBooked = Math.max(...monthlyData.map(d => d.booked));
  const maxPaid = Math.max(...monthlyData.map(d => d.paid));
  const yMax = Math.max(maxBooked, maxPaid) * 1.1;

  // Mock data for Deal Pipeline
  const pipeline = [
    { stage: 'Inquiry', count: 4, color: 'bg-canvas', percentage: '15%' },
    { stage: 'In Prod', count: 6, color: 'bg-accent/40', percentage: '30%' },
    { stage: 'Approval', count: 2, color: 'bg-waiting', percentage: '10%' },
    { stage: 'Invoice Due', count: 3, color: 'bg-accent', percentage: '20%' },
    { stage: 'Paid', count: 5, color: 'bg-completed', percentage: '25%' },
  ];

  return (
    <section className="mb-12 animate-reveal stagger-4 grid grid-cols-1 lg:grid-cols-2 gap-6" ref={chartRef}>
      
      {/* Booked vs Paid Chart */}
      <div className="bg-surface border border-transparent rounded-3xl p-6 sm:p-8 shadow-premium flex flex-col">
        <div className="mb-6">
          <h2 className="text-section-heading text-ink">Booked vs Paid</h2>
          <p className="text-[12px] text-text-secondary mt-1">Last six months revenue tracking</p>
        </div>

        {/* SR-only data table */}
        <div className="sr-only">
          <table>
            <caption>Booked vs Paid Revenue for the last 6 months</caption>
            <thead>
              <tr>
                <th scope="col">Month</th>
                <th scope="col">Booked</th>
                <th scope="col">Paid</th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((d) => (
                <tr key={d.month}>
                  <td>{d.month}</td>
                  <td>${d.booked}</td>
                  <td>${d.paid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Visual Chart */}
        <div className="relative flex-1 mt-auto h-48 w-full" aria-hidden="true">
          
          <div className="absolute left-0 top-0 bottom-6 w-10 flex flex-col justify-between text-[10px] text-text-secondary">
            <span>$5k</span>
            <span>$2.5k</span>
            <span>$0</span>
          </div>

          <div className="absolute left-10 right-0 top-1 bottom-6 flex flex-col justify-between border-b border-border/50">
            <div className="w-full border-t border-border/50 border-dashed h-0"></div>
            <div className="w-full border-t border-border/50 border-dashed h-0"></div>
            <div className="w-full h-0"></div>
          </div>

          <div className="absolute left-10 right-0 top-0 bottom-6 flex justify-between items-end px-2">
            
            {/* SVG Overlay Line Chart */}
            <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
              <polyline
                className={chartInView ? 'animate-draw-path' : ''}
                fill="none"
                stroke="var(--completed)"
                strokeWidth="2.5"
                strokeDasharray="1000"
                strokeDashoffset={chartInView ? 0 : 1000}
                points={monthlyData.map((d, i) => {
                  const x = (i / (monthlyData.length - 1)) * 100;
                  const y = 100 - (d.paid / yMax) * 100;
                  return `${x}%,${y}%`;
                }).join(' ')}
              />
              {monthlyData.map((d, i) => {
                const x = (i / (monthlyData.length - 1)) * 100;
                const y = 100 - (d.paid / yMax) * 100;
                return (
                  <circle 
                    key={i} 
                    cx={`${x}%`} 
                    cy={`${y}%`} 
                    r="4" 
                    fill="var(--surface)" 
                    stroke="var(--completed)" 
                    strokeWidth="2" 
                    className={`transition-opacity duration-300 delay-300 ${chartInView ? 'opacity-100' : 'opacity-0'}`}
                  />
                );
              })}
            </svg>

            {/* CSS Bars for Booked */}
            {monthlyData.map((d, i) => {
              const heightPct = (d.booked / yMax) * 100;
              return (
                <div key={d.month} className="relative w-8 h-full flex items-end justify-center group z-10">
                  <div 
                    className={`w-full bg-accent/80 rounded-t-sm transition-colors hover:bg-accent origin-bottom ${chartInView ? 'animate-draw-y' : ''}`}
                    style={{ height: `${heightPct}%`, animationDelay: `${i * 50}ms` }}
                  ></div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 bg-ink text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity shadow-sm">
                    Booked: ${d.booked}<br/>Paid: ${d.paid}
                  </div>
                </div>
              );
            })}
          </div>

          {/* X-axis labels */}
          <div className="absolute left-10 right-0 bottom-0 h-6 flex justify-between items-end px-4 text-[10px] text-text-secondary">
            {monthlyData.map((d) => (
              <span key={d.month}>{d.month}</span>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-4 mt-4 pt-4 border-t border-border/50 text-[11px] font-medium text-text-secondary" aria-hidden="true">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-accent/80 rounded-sm"></div>
            <span>Booked Value</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-[2px] bg-completed"></div>
            <div className="w-1.5 h-1.5 rounded-full border border-completed bg-surface -ml-2.5"></div>
            <span>Paid</span>
          </div>
        </div>
      </div>

      {/* Deal Pipeline */}
      <div className="bg-surface border border-transparent rounded-3xl p-6 sm:p-8 shadow-premium flex flex-col">
        <div className="mb-6">
          <h2 className="text-section-heading text-ink">Deal Pipeline</h2>
          <p className="text-[12px] text-text-secondary mt-1">Distribution of current active deals</p>
        </div>

        <div className="sr-only">
          <h3>Current Pipeline Stages</h3>
          <ul>
            {pipeline.map(p => (
              <li key={p.stage}>{p.stage}: {p.count} deals ({p.percentage})</li>
            ))}
          </ul>
        </div>

        {/* Segmented Bar (Transform-based scaling) */}
        <div className="flex w-full h-3 rounded-full overflow-hidden mb-6" aria-hidden="true">
          {pipeline.map((p, i) => (
            <div 
              key={p.stage}
              className={`${p.color} border-r border-surface/50 last:border-0 origin-left ${chartInView ? 'animate-draw-x' : ''}`}
              style={{ width: p.percentage, animationDelay: `${i * 100}ms` }}
            ></div>
          ))}
        </div>

        {/* Pipeline Details */}
        <div className="flex flex-col gap-3 flex-1 justify-center" aria-hidden="true">
          {pipeline.map((p) => (
            <div key={p.stage} className="flex items-center justify-between group hover:bg-surface-secondary/50 px-2 -mx-2 rounded-md transition-colors">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${p.color} ${p.color === 'bg-canvas' ? 'border border-border/80' : ''}`}></div>
                <span className="text-[13px] font-medium text-ink">{p.stage}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-text-secondary">{p.percentage}</span>
                <span className="text-[14px] font-semibold text-ink w-4 text-right tabular-nums">{p.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
