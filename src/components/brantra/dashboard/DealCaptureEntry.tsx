'use client';
import { useState, useEffect } from 'react';
import { CheckCircle2, Clock, X } from 'lucide-react';

export function DealCaptureEntry() {
  const [isFocused, setIsFocused] = useState(false);
  const [content, setContent] = useState('');
  const [isReviewed, setIsReviewed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSave = () => {
    setContent('');
    setIsReviewed(false);
    setShowSuccess(true);
  };

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
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-section-heading text-ink">Quick Deal Capture</h2>
          <p className="text-[12px] text-text-secondary mt-1">Turn a brand conversation into clear deal terms.</p>
        </div>
        {showSuccess && (
          <div className="text-[11px] font-bold text-completed flex items-center gap-1.5 animate-reveal bg-completed/10 px-2 py-1 rounded">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Draft prepared
          </div>
        )}
      </div>
      
      <div className="flex flex-col gap-3 relative mb-6">
        <textarea
          className="w-full textarea-expandable resize-y rounded-lg border border-border/80 bg-canvas px-3 py-3 text-[13px] text-ink placeholder:text-text-secondary/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent shadow-sm"
          placeholder="Paste a DM, email, or brand brief…"
          aria-label="Paste deal terms"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onInput={() => {setIsReviewed(false); setShowSuccess(false);}}
        />
        
        <div className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          isFocused || content ? 'max-h-12 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        }`}>
          <button type="button"
            onClick={() => setIsReviewed(true)}
            disabled={!content.trim()}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-ink px-6 text-[13px] font-medium text-white hover:bg-ink/80 transition-btn focus-visible shadow-sm"
          >
            Review Deal
          </button>
        </div>
      </div>

      {isReviewed && (
        <div className="mb-6 rounded-xl border border-accent/20 bg-accent/5 p-4 animate-reveal" aria-live="polite">
          <div className="flex items-center justify-between gap-3 mb-3">
            <p className="text-[12px] font-bold text-ink">Message ready for review</p>
            <button type="button" onClick={() => setIsReviewed(false)} className="text-text-secondary hover:text-ink focus-visible" aria-label="Dismiss review"><X className="w-4 h-4" /></button>
          </div>
          <dl className="grid grid-cols-2 gap-3 text-[11px]">
            <div className="col-span-2 sm:col-span-1"><dt className="text-text-secondary">Message Preview</dt><dd className="font-semibold text-ink mt-0.5 truncate" title={content}>{content || 'No content provided'}</dd></div>
            <div className="col-span-2 sm:col-span-1"><dt className="text-text-secondary">Status</dt><dd className="font-semibold text-waiting mt-0.5">Ready for review</dd></div>
          </dl>
          <div className="mt-4 flex items-center justify-between border-t border-accent/10 pt-3">
            <p className="text-[10px] text-text-secondary">Prototype preview — automatic extraction will be connected later.</p>
            <button type="button" onClick={handleSave} className="bg-accent text-white px-3 py-1.5 text-[11px] font-bold rounded shadow-sm hover:bg-accent-hover transition-colors shrink-0">Prepare Draft</button>
          </div>
        </div>
      )}

      {/* Recent Captures */}
      <div className="mt-auto border-t border-border/50 pt-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <Clock className="w-3.5 h-3.5 text-waiting shrink-0" />
            <div className="flex items-baseline gap-2 truncate">
              <span className="text-[12px] font-semibold text-ink">Solace Beauty</span>
              <span className="text-[12px] text-text-secondary truncate">— Terms need review</span>
            </div>
            <button type="button" onClick={() => { setContent('1 Instagram Reel for Solace Beauty, due Friday. Include 90-day usage rights.'); setIsReviewed(true); setShowSuccess(false); }} className="ml-auto text-[10px] font-bold text-accent bg-accent/5 hover:bg-accent/10 px-2 py-0.5 rounded transition-colors uppercase tracking-wider shrink-0">Review</button>
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
