'use client';

import { AttentionItem } from '../../../types/dashboard';
import { useState } from 'react';

export function AttentionQueue({ items }: { items: AttentionItem[] }) {
  const [sentIds, setSentIds] = useState<string[]>([]);
  if (!items || items.length === 0) return null;

  return (
    <section className="mb-8">
      <div className="mb-4 animate-reveal stagger-2">
        <h2 className="text-section-heading text-ink">Action Queue</h2>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item, index) => {
          const bgColor = 'bg-surface';
          let borderColor = 'border-border/60';
          let badgeColor = 'text-text-secondary bg-surface-secondary';

          if (item.urgency === 'now') {
            borderColor = 'border-urgent/50';
            badgeColor = 'text-urgent bg-urgent/10';
          } else if (item.urgency === 'waiting') {
            borderColor = 'border-waiting/50';
            badgeColor = 'text-waiting bg-waiting/10';
          }

          const staggerStyle = { animationDelay: `${200 + index * 50}ms` };
          const displayUrgency = item.urgency.toUpperCase();

          return (
            <div 
              key={item.id} 
              className={`flex flex-col border ${borderColor} ${bgColor} rounded-2xl p-5 transition-all duration-300 group shadow-sm hover:shadow-md animate-reveal`}
              style={staggerStyle}
            >
              <div className="flex items-start justify-between mb-2">
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm ${badgeColor}`}>
                  {item.urgency === 'now' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-urgent animate-pulse-twice shrink-0"></span>
                  )}
                  {displayUrgency}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">{item.brandName}</span>
              </div>
              
              <h3 className="text-[14px] font-semibold text-ink mb-2">{item.actionRequired}</h3>
              
              {item.actionAffordance && (
                <div className="mt-2 pt-2 border-t border-border/50">
                  <button type="button" onClick={() => setSentIds((ids) => [...ids, item.id])} disabled={sentIds.includes(item.id)} className="text-[12px] font-semibold text-accent hover:text-accent-hover disabled:text-completed transition-colors focus-visible">
                    {sentIds.includes(item.id) ? 'Follow-up queued ✓' : `${item.actionAffordance} →`}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
