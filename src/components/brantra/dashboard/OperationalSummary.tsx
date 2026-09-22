import { OperationalMetrics } from '@/types/dashboard';
import { Briefcase, DollarSign, Wallet } from 'lucide-react';

export function OperationalSummary({ metrics }: { metrics: OperationalMetrics }) {
  return (
    <div className="flex flex-col md:flex-row gap-5 mb-8 animate-reveal stagger-1">
      
      {/* Active Deals Panel */}
      <div className="flex-1 bg-surface border border-transparent rounded-3xl p-6 shadow-premium relative overflow-hidden group hover:-translate-y-0.5 transition-transform">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent/80 to-accent/0 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-500"></div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="text-[13px] font-bold text-text-secondary uppercase tracking-widest">
            Active Deals
          </span>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-metric-value text-ink">{metrics.activeDeals}</span>
          <span className="text-[12px] text-text-secondary font-semibold bg-surface-secondary/50 px-3 py-1 rounded-lg mb-1">In production</span>
        </div>
      </div>

      {/* Awaiting Payment Panel */}
      <div className="flex-1 bg-surface border border-transparent rounded-3xl p-6 shadow-premium relative overflow-hidden group hover:-translate-y-0.5 transition-transform">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-waiting/0 via-waiting/80 to-waiting/0 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-500"></div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-waiting/10 flex items-center justify-center text-waiting shrink-0">
            <DollarSign className="w-5 h-5" />
          </div>
          <span className="text-[13px] font-bold text-text-secondary uppercase tracking-widest">
            Awaiting
          </span>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-metric-value text-ink">${metrics.awaitingPayment.toLocaleString()}</span>
          <span className="text-[12px] text-text-secondary font-semibold bg-surface-secondary/50 px-3 py-1 rounded-lg mb-1">Net 30/60</span>
        </div>
      </div>

      {/* Paid This Month Panel */}
      <div className="flex-1 bg-surface border border-transparent rounded-3xl p-6 shadow-premium relative overflow-hidden group hover:-translate-y-0.5 transition-transform">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-completed/0 via-completed/80 to-completed/0 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-500"></div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-completed/10 flex items-center justify-center text-completed shrink-0">
            <Wallet className="w-5 h-5" />
          </div>
          <span className="text-[13px] font-bold text-text-secondary uppercase tracking-widest">
            Paid (Month)
          </span>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-metric-value text-ink">${metrics.paidThisMonth.toLocaleString()}</span>
          <span className="text-[12px] text-completed font-bold bg-completed/10 px-3 py-1 rounded-lg mb-1">+12% vs last</span>
        </div>
      </div>
      
    </div>
  );
}
