'use client';
import { useState } from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

export function DealCaptureEntry() {
  const [isFocused, setIsFocused] = useState(false);
  const [content, setContent] = useState('');

  return (
    <div 
      className="bg-surface border border-transparent rounded-3xl p-6 sm:p-8 flex flex-col h-full shadow-premium animate-reveal stagger-3 group focus-within:ring-2 focus-within:ring-accent/20"
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          if (content.trim() === '') setIsFocused(false);
        }
      }}
    >
      <div className="mb-4">
        <h2 className="text-section-heading text-ink">Quick Deal Capture</h2>
        <p className="text-[12px] text-text-secondary mt-1">Turn a brand conversation into clear deal terms.</p>
      </div>
      
      <div className="flex flex-col gap-3 relative mb-6">
        <textarea 
          className="w-full textarea-expandable resize-y rounded-lg border border-border/80 bg-canvas px-3 py-3 text-[13px] text-ink placeholder:text-text-secondary/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent shadow-sm"
          placeholder="Paste a DM, email, or brand brief…"
          aria-label="Paste deal terms"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        <div className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          isFocused || content ? 'max-h-12 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        }`}>
          <button 
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-ink px-6 text-[13px] font-medium text-white hover:bg-ink/80 transition-btn focus-visible shadow-sm"
          >
            Review Deal
          </button>
        </div>
      </div>

      {/* Recent Captures */}
      <div className="mt-auto border-t border-border/50 pt-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <Clock className="w-3.5 h-3.5 text-waiting shrink-0" />
            <div className="flex items-baseline gap-2 truncate">
              <span className="text-[12px] font-semibold text-ink">Solace Beauty</span>
              <span className="text-[12px] text-text-secondary truncate">— Terms need review</span>
            </div>
            <button className="ml-auto text-[10px] font-bold text-accent bg-accent/5 hover:bg-accent/10 px-2 py-0.5 rounded transition-colors uppercase tracking-wider shrink-0">Review</button>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-completed shrink-0" />
            <div className="flex items-baseline gap-2 truncate">
              <span className="text-[12px] font-semibold text-ink">Haven Goods</span>
              <span className="text-[12px] text-text-secondary truncate">— Deliverables extracted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
