'use client';
import { ActiveProductionData } from '../../../types/dashboard';
import { Upload, Eye, Clock, MessageCircle, Check, X } from 'lucide-react';
import { useInView } from '../../../hooks/useInView';
import { ChangeEvent, useRef, useState, useEffect } from 'react';

export function ActiveProduction({ data }: { data: ActiveProductionData }) {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const workflowStages = ['Brief', 'Create', 'Review', 'Publish', 'Paid'];
  const currentStageIndex = workflowStages.indexOf(data.currentStage);
  
  const { ref: workflowRef, isInView: workflowInView } = useInView();

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setUploadedFile(file.name);
  };

  useEffect(() => {
    if (!feedbackOpen) {
      if (triggerRef.current) {
        triggerRef.current.focus();
        triggerRef.current = null;
      }
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setFeedbackOpen(false);
      
      // Focus trapping
      if (event.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;
        
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };
    
    globalThis.addEventListener('keydown', handleKeyDown);
    
    // Focus first element on open
    requestAnimationFrame(() => {
      if (dialogRef.current) {
        const firstFocusable = dialogRef.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement;
        firstFocusable?.focus();
      }
    });
    
    return () => {
      document.body.style.overflow = previousOverflow;
      globalThis.removeEventListener('keydown', handleKeyDown);
    };
  }, [feedbackOpen]);

  const openFeedback = (e: React.MouseEvent<HTMLElement>) => {
    triggerRef.current = e.currentTarget;
    setFeedbackOpen(true);
  };

  return (
    <div className="relative mb-12 animate-reveal stagger-2">
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none rounded-[3rem]">
        <div className="absolute -inset-10 bg-accent/5 rounded-full blur-[100px]" aria-hidden="true"></div>
      </div>

      <div className="bg-surface border border-transparent rounded-3xl p-6 sm:p-8 shadow-premium">
        <div className="flex flex-col md:flex-row gap-8">
          
          <div className="w-full md:w-[260px] shrink-0 group">
            <button type="button" onClick={openFeedback} className="relative w-full aspect-[9/16] bg-canvas border border-border/80 rounded-lg overflow-hidden flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-[1.01] focus-visible" aria-label="Open feedback for the Aster Skin draft">
              
              <div className="absolute inset-0 bg-gradient-to-br from-surface-secondary to-canvas opacity-70"></div>
              
              <div className="z-10 h-14 w-14 rounded-full bg-ink/10 flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-ink/60 border-b-[8px] border-b-transparent ml-1"></div>
              </div>
              
              <span className="z-10 text-[12px] font-medium text-text-secondary mt-2">0:30 (4K 60fps)</span>
              <div className="absolute top-3 right-3 bg-surface text-ink text-[10px] font-bold px-2 py-1 rounded-sm shadow-sm">
                DRAFT v1.2
              </div>

              <div className="absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity flex flex-col items-center justify-center z-20">
                <span className="bg-surface text-ink font-semibold text-[13px] px-4 py-2 rounded-md shadow-sm">
                  View Feedback
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-ink/20">
                <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-accent/80"></div>
                <div className="absolute left-[30%] -top-1 h-3 w-1 bg-surface rounded-full shadow-sm" title="Feedback point"></div>
                <div className="absolute left-[80%] -top-1 h-3 w-1 bg-surface rounded-full shadow-sm" title="Feedback point"></div>
              </div>
            </button>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div>
                <span className="text-[12px] font-semibold text-text-secondary uppercase tracking-wider">{data.brandName}</span>
                <h2 className="text-page-heading text-ink mt-1">{data.campaignTitle}</h2>
                <p className="text-[14px] text-text-secondary mt-1">{data.deliverable} • Deal value: ${data.dealValue}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 bg-urgent/10 text-urgent text-[11px] font-bold px-2.5 py-1 rounded-sm tracking-wide">
                <Clock className="h-3.5 w-3.5" /> Due {data.deadline}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 py-5 border-y border-border/50 mb-6">
              <div>
                <span className="block text-[11px] text-text-secondary font-medium uppercase tracking-wider">Revision</span>
                <span className="block text-[14px] text-ink font-medium mt-1">{data.revision}</span>
              </div>
              <div>
                <span className="block text-[11px] text-text-secondary font-medium uppercase tracking-wider">Usage Rights</span>
                <span className="block text-[14px] text-ink font-medium mt-1">{data.usageRights}</span>
              </div>
              <div>
                <span className="block text-[11px] text-text-secondary font-medium uppercase tracking-wider">Payment Terms</span>
                <span className="block text-[14px] text-ink font-medium mt-1">{data.paymentTerms}</span>
              </div>
            </div>

            <div className="bg-surface-secondary/50 rounded-lg p-4 mb-8 relative mt-2 border-l-2 border-accent">
              <span className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-text-secondary mb-1 uppercase">
                <MessageCircle className="h-3 w-3" /> Brand Feedback
              </span>
              <p className="text-[14px] text-ink/90 italic">&quot;{data.brandFeedback}&quot;</p>
            </div>

            <div className="mb-10 mt-auto" ref={workflowRef}>
              <div className="flex items-center justify-between relative">
                <div className={`absolute left-0 top-[10px] w-full h-[2px] bg-border/60 -z-10 ${workflowInView ? 'animate-draw-x' : ''}`}></div>
                
                {workflowStages.map((stage, idx) => {
                  const isCompleted = idx < currentStageIndex;
                  const isActive = idx === currentStageIndex;
                  
                  return (
                    <div key={stage} className="flex flex-col items-center gap-2 bg-surface px-2">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                        isCompleted ? 'bg-completed border-completed' : 
                        isActive ? 'bg-surface border-accent shadow-[0_0_0_3px_rgba(216,81,112,0.1)]' : 
                        'bg-surface border-border/60'
                      }`}>
                        {isActive && <div className="h-2 w-2 rounded-full bg-accent"></div>}
                      </div>
                      <span className={`text-[11px] font-semibold ${
                        isActive ? 'text-accent' : isCompleted ? 'text-completed' : 'text-text-secondary'
                      }`}>
                        {stage}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input ref={fileInputRef} type="file" accept="video/*" onChange={handleUpload} className="sr-only" />
              <button type="button" onClick={() => fileInputRef.current?.click()} className="flex-1 flex items-center justify-center gap-2 bg-accent text-white font-medium py-3 px-4 rounded-lg hover:bg-accent-hover transition-btn focus-visible shadow-sm">
                {uploadedFile ? <Check className="h-4 w-4" /> : <Upload className="h-4 w-4" />} {uploadedFile ? 'Revised Cut Ready' : 'Upload Revised Cut'}
              </button>
              <button type="button" onClick={openFeedback} className="sm:flex-none flex items-center justify-center gap-2 bg-surface text-ink border border-border font-medium py-3 px-6 rounded-lg hover:bg-surface-secondary/50 transition-btn focus-visible">
                <Eye className="h-4 w-4" /> View Feedback
              </button>
            </div>
            {uploadedFile && <p className="mt-2 text-[11px] text-completed" aria-live="polite">{uploadedFile} selected. It will upload when storage is connected.</p>}

          </div>
        </div>
      </div>

      {feedbackOpen && (
        <div className="fixed inset-0 z-[95] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="feedback-title">
          <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm cursor-default" onClick={() => setFeedbackOpen(false)} aria-hidden="true" />
          <div ref={dialogRef} className="relative w-full max-w-lg rounded-2xl bg-surface p-6 shadow-2xl animate-reveal">
            <div className="flex items-start justify-between gap-4">
              <div><p className="text-[11px] font-bold uppercase tracking-wider text-accent">Aster Skin · 00:09</p><h3 id="feedback-title" className="text-[20px] font-bold text-ink mt-1">Revision feedback</h3></div>
              <button type="button" onClick={() => setFeedbackOpen(false)} className="p-2 rounded-full hover:bg-canvas text-text-secondary focus-visible" aria-label="Close panel"><X className="w-4 h-4" /></button>
            </div>
            <blockquote className="mt-5 rounded-xl bg-surface-secondary/50 border-l-2 border-accent p-4 text-[14px] leading-relaxed text-ink">&quot;{data.brandFeedback}&quot;</blockquote>
            <div className="mt-5 grid grid-cols-2 gap-3 text-[12px]"><div className="rounded-lg bg-canvas p-3"><span className="text-text-secondary">Revision</span><strong className="block mt-1 text-ink">{data.revision}</strong></div><div className="rounded-lg bg-canvas p-3"><span className="text-text-secondary">Due</span><strong className="block mt-1 text-urgent">{data.deadline}</strong></div></div>
            <button type="button" onClick={() => { setFeedbackOpen(false); fileInputRef.current?.click(); }} className="mt-6 w-full h-11 rounded-lg bg-accent text-white text-[13px] font-bold hover:bg-accent-hover focus-visible">Choose revised video</button>
          </div>
        </div>
      )}
    </div>
  );
}
