import { Campaign } from '../../../types/dashboard.ts';
import { StatusMark } from './StatusMark.tsx';

export function CampaignRow({ campaign }: { campaign: Campaign }) {
  return (
    <div className="group flex flex-col md:flex-row md:items-center py-4 border-b border-border hover:bg-surface-secondary/50 transition-row">
      {/* Brand & Deliverable */}
      <div className="flex-[2] min-w-0 pr-4 mb-3 md:mb-0">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-semibold text-ink truncate">{campaign.brandName}</span>
        </div>
        <div className="text-[13px] text-text-secondary truncate mt-0.5">
          {campaign.deliverableFormat}
        </div>
      </div>

      {/* Stage */}
      <div className="flex-[1.5] min-w-0 pr-4 mb-2 md:mb-0">
        <StatusMark status={campaign.stage} />
      </div>

      {/* Deadline */}
      <div className="flex-1 min-w-0 pr-4 mb-2 md:mb-0 flex justify-between md:block">
        <span className="text-[12px] font-medium text-text-secondary uppercase md:hidden">Deadline: </span>
        <span className="text-[13px] text-ink">{campaign.deadline}</span>
      </div>

      {/* Value */}
      <div className="flex-1 min-w-0 text-left md:text-right flex justify-between md:block">
        <span className="text-[12px] font-medium text-text-secondary uppercase md:hidden">Deal Value: </span>
        <span className="text-[14px] font-semibold text-ink tabular-nums">
          ${campaign.dealValue.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
