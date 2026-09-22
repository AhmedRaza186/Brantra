'use client';

import { Activity, Clock } from 'lucide-react';

export function StudioStatus() {
  return (
    <div className="flex flex-col items-end gap-2.5 animate-reveal stagger-2">
      {/* Studio Active Badge */}
      <div className="flex items-center gap-2 bg-surface rounded-full px-3.5 py-1.5 shadow-sm border border-transparent">
        <Activity className="w-3.5 h-3.5 text-completed animate-pulse-twice" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-ink mt-0.5">Studio Today</span>
        
        {/* Animated equalizer bars */}
        <div className="flex items-end gap-[2px] ml-1 h-3">
          <div className="w-[2px] bg-completed/80 rounded-t-sm animate-pulse-twice" style={{ height: '100%', animationDelay: '0ms' }}></div>
          <div className="w-[2px] bg-completed/80 rounded-t-sm animate-pulse-twice" style={{ height: '40%', animationDelay: '150ms' }}></div>
          <div className="w-[2px] bg-completed/80 rounded-t-sm animate-pulse-twice" style={{ height: '80%', animationDelay: '300ms' }}></div>
          <div className="w-[2px] bg-completed/80 rounded-t-sm animate-pulse-twice" style={{ height: '60%', animationDelay: '450ms' }}></div>
        </div>
      </div>
      
      {/* Action / Deadline Info */}
      <div className="flex flex-col items-end gap-1 mr-2">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-urgent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-urgent"></span>
          </span>
          <span className="text-[12px] font-bold text-urgent tracking-tight">
            2 actions due
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-text-secondary" />
          <span className="text-[11px] font-medium text-text-secondary tracking-tight">
            Next deadline &middot; 6:00 PM
          </span>
        </div>
      </div>
    </div>
  );
}
