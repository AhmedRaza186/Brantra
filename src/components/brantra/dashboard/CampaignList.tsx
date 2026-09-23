import { Campaign } from '../../../types/dashboard';

export function CampaignList({ campaigns }: { campaigns: Campaign[] }) {
  if (!campaigns || campaigns.length === 0) return null;

  const getDisplayStage = (stage: string) => {
    switch (stage) {
      case 'in-production': return 'In Production';
      case 'approval-pending': return 'Approval Pending';
      default: return stage.charAt(0).toUpperCase() + stage.slice(1);
    }
  };

  return (
    <div className="bg-surface border border-transparent rounded-3xl p-6 sm:p-8 shadow-premium flex flex-col h-full animate-reveal stagger-3">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-section-heading text-ink">Active Campaigns</h2>
        </div>
        <button type="button" className="text-[12px] font-medium text-text-secondary hover:text-ink transition-nav focus-visible">
          View all
        </button>
      </div>

      <div className="flex flex-col gap-5 flex-1">
        {campaigns.map((campaign, i) => {
          // Calculate progress line based on Stage
          // Stages: drafting, review, approval-pending, in-production
          let progress = 20;
          let colorClass = 'bg-border';
          let progressText = '1 of 5 stages';

          if (campaign.stage === 'drafting') {
            progress = 20;
            colorClass = 'bg-text-secondary';
            progressText = '1 of 5 stages';
          } else if (campaign.stage === 'in-production') {
            progress = 40;
            colorClass = 'bg-accent';
            progressText = '2 of 5 stages';
          } else if (campaign.stage === 'review' || campaign.stage === 'approval-pending') {
            progress = 60;
            colorClass = 'bg-waiting';
            progressText = '3 of 5 stages';
          }
          // Assuming 'PAID' would have been 'paid' if it existed in the subset being used here
          else if (campaign.stage as string === 'paid') {
            progress = 100;
            colorClass = 'bg-completed';
            progressText = '5 of 5 stages';
          }

          return (
            <div key={campaign.id} className="flex flex-col group">
              <div className="flex items-start justify-between mb-1.5">
                <span className="text-[14px] font-semibold text-ink group-hover:text-accent transition-colors cursor-pointer">{campaign.brandName}</span>
                <span className="text-[12px] font-medium text-ink">{campaign.deadline}</span>
              </div>
              <div className="text-[13px] text-text-secondary mb-3 flex items-center justify-between">
                <span>{campaign.deliverableFormat}</span>
                <span className="text-[11px] font-medium bg-surface-secondary/50 px-2 py-0.5 rounded-sm">{getDisplayStage(campaign.stage)}</span>
              </div>
              
              {/* Progress Line */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1 bg-border/40 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${colorClass} rounded-full animate-draw-x origin-left`}
                    style={{ width: `${progress}%`, animationDelay: `${i * 100}ms` }}
                  ></div>
                </div>
                <span className="text-[11px] font-medium text-text-secondary whitespace-nowrap w-20 text-right">{progressText}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
