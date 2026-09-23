import { Sun } from 'lucide-react';
import { OperationalSummary } from '../../../components/brantra/dashboard/OperationalSummary';
import { ActiveProduction } from '../../../components/brantra/dashboard/ActiveProduction';
import { DealCaptureEntry } from '../../../components/brantra/dashboard/DealCaptureEntry';
import { AttentionQueue } from '../../../components/brantra/dashboard/AttentionQueue';
import { CampaignList } from '../../../components/brantra/dashboard/CampaignList';
import { AnalyticsDashboard } from '../../../components/brantra/dashboard/AnalyticsDashboard';
import { CampaignCalendar } from '../../../components/brantra/dashboard/CampaignCalendar';
import { UpcomingDeadlinesStrip } from '../../../components/brantra/dashboard/UpcomingDeadlinesStrip';
import { DashboardIntro } from '../../../components/brantra/dashboard/DashboardIntro';
import { StudioStatus } from '../../../components/brantra/dashboard/StudioStatus';

import { 
  operationalMetrics, 
  attentionQueue, 
  campaigns, 
  activeProduction
} from '../../../data/mock-dashboard';

export default function DashboardPage() {
  return (
    <>
      {/* Intro Overlay */}
      <DashboardIntro />

      <div className="mx-auto max-w-[1440px]">
        {/* Desktop Page Title */}
        <div className="hidden lg:flex items-center justify-between mb-10 relative">
          {/* Left Side: Greeting & Status */}
          <div>
            <p className="text-[13px] text-text-secondary font-bold uppercase tracking-widest mb-2.5 flex items-center gap-2">
              <Sun className="w-4 h-4 text-accent" /> Good morning, Felix
            </p>
            <div className="flex items-center gap-3">
              <h1 className="text-page-heading text-ink">Today&apos;s Desk</h1>
              <span className="text-[14px] text-text-secondary font-semibold border-l border-border pl-3 mt-1.5">Oct 12, 2026</span>
            </div>
          </div>

          {/* Right Side: Animated Live Widget */}
          <StudioStatus />
        </div>

        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-8 relative items-start">
          {/* 1. Operational Summary */}
          <div className="order-1 xl:order-none xl:col-span-8">
            <OperationalSummary metrics={operationalMetrics} />
          </div>

          {/* 2. Active Production Workspace */}
          <div className="order-2 xl:order-none xl:col-span-8">
            <ActiveProduction data={activeProduction} />
          </div>

          {/* 3. Right Schedule Column (Sticky Sidebar) */}
          <div className="order-3 xl:order-none xl:col-span-4 xl:col-start-9 xl:row-start-1 xl:row-span-5 flex flex-col gap-8 xl:sticky xl:top-0">
            <div className="hidden xl:block">
              <CampaignCalendar />
            </div>
            <AttentionQueue items={attentionQueue} />
            <div className="xl:hidden">
              <UpcomingDeadlinesStrip />
            </div>
          </div>

          {/* 4. Deal Capture (Left on Desktop, First on Mobile lower section) */}
          <div className="order-4 xl:order-none xl:col-span-4 h-full flex flex-col">
            <DealCaptureEntry />
          </div>

          {/* 5. Active Campaigns (Right on Desktop, Second on Mobile lower section) */}
          <div className="order-5 xl:order-none xl:col-span-4 h-full flex flex-col">
            <CampaignList campaigns={campaigns} />
          </div>

          {/* 6. Analytics */}
          <div className="order-6 xl:order-none xl:col-span-8">
            <AnalyticsDashboard />
          </div>
        </div>
      </div>
    </>
  );
}
