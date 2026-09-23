'use client';
import { ActiveProductionData } from '../../../types/dashboard.ts';
import { Upload, Eye, Clock, MessageCircle } from 'lucide-react';
import { useInView } from '../../../hooks/useInView.ts';

export function ActiveProduction({ data }: { data: ActiveProductionData }) {
  const workflowStages = ['Brief', 'Create', 'Review', 'Publish', 'Paid'];
  const currentStageIndex = workflowStages.indexOf(data.currentStage);
  
  // Hook for triggering workflow animation once scrolled into view
  const { ref: workflowRef, isInView: workflowInView } = useInView();

  return (
    <div className="relative mb-12 animate-reveal stagger-2">
      {/* Subtle Static Radial Blush restricted to this component's background */}
      <div className="absolute -inset-10 bg-accent/5 rounded-full blur-[100px] -z-20 pointer-events-none" aria-hidden="true"></div>

      <div className="bg-surface border border-transparent rounded-3xl p-6 sm:p-8 shadow-premium">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left: 9:16 Video Preview Focal Point */}
          <div className="w-full md:w-[260px] shrink-0 group">
            <button type="button" className="relative w-full aspect-[9/16] bg-canvas border border-border/80 rounded-lg overflow-hidden flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-[1.01] focus-visible">
              
              <div className="absolute inset-0 bg-gradient-to-br from-surface-secondary to-canvas opacity-70"></div>
              
              {/* Playback Overlay */}
              <div className="z-10 h-14 w-14 rounded-full bg-ink/10 flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-ink/60 border-b-[8px] border-b-transparent ml-1"></div>
              </div>
              
              {/* Meta */}
              <span className="z-10 text-[12px] font-medium text-text-secondary mt-2">0:30 (4K 60fps)</span>
              <div className="absolute top-3 right-3 bg-surface text-ink text-[10px] font-bold px-2 py-1 rounded-sm shadow-sm">
                DRAFT v1.2
              </div>

              {/* Hover Reveal: View Feedback */}
              <div className="absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity flex flex-col items-center justify-center z-20">
                <span className="bg-surface text-ink font-semibold text-[13px] px-4 py-2 rounded-md shadow-sm">
                  View Feedback
                </span>
              </div>

              {/* Timeline Scrub Bar with Markers */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-ink/20">
                <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-accent/80"></div>
                {/* Brand feedback marker */}
                <div className="absolute left-[30%] -top-1 h-3 w-1 bg-surface rounded-full shadow-sm" title="Feedback point"></div>
                <div className="absolute left-[80%] -top-1 h-3 w-1 bg-surface rounded-full shadow-sm" title="Feedback point"></div>
              </div>
            </button>
          </div>

          {/* Right: Deal Details & Actions */}
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

            {/* Brand Feedback Block (lighter borders) */}
            <div className="bg-surface-secondary/50 rounded-lg p-4 mb-8 relative mt-2 border-l-2 border-accent">
              <span className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-text-secondary mb-1 uppercase">
                <MessageCircle className="h-3 w-3" /> Brand Feedback
              </span>
              <p className="text-[14px] text-ink/90 italic">&quot;{data.brandFeedback}&quot;</p>
            </div>

            {/* Workflow Tracker */}
            <div className="mb-10 mt-auto" ref={workflowRef}>
              <div className="flex items-center justify-between relative">
                {/* Connecting line - Progressive Enhancement (drawn when in view) */}
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

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" className="flex-1 flex items-center justify-center gap-2 bg-accent text-white font-medium py-3 rounded-lg hover:bg-accent-hover transition-btn focus-visible shadow-sm">
                <Upload className="h-4 w-4" /> Upload Revised Cut
              </button>
              <button type="button" className="sm:flex-none flex items-center justify-center gap-2 bg-surface text-ink border border-border font-medium py-3 px-6 rounded-lg hover:bg-surface-secondary/50 transition-btn focus-visible">
                <Eye className="h-4 w-4" /> View Feedback
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
